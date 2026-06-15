export interface Env {
  OPENROUTER_API_KEY: string;
  BILLING_WORKER_URL: string;
  BILLING_API_KEY: string;
}

interface RequestBody {
  jobDescription: string;
  name: string;
  fit: string;
  tone: string;
  userId?: string;
}

interface CFContext {
  request: Request;
  env: Env;
}

const SYSTEM_PROMPT = `You write cover letters that sound like a real person wrote them — not AI, not a corporate template, not buzzword soup.

Style:
- warm, clear, specific, and professional
- conversational but not casual
- honest, not exaggerated
- 180-280 words
- use 1-2 concrete details from the job description
- use the user's provided fit detail if available
- avoid fake enthusiasm
- avoid generic filler

Never use:
- I am writing to apply for
- highly motivated self-starter
- passionate about
- leverage my skills
- synergy
- dynamic team
- fast-paced environment
- perfect fit

Format:
- Start with "Dear Hiring Manager," (or "Dear [Hiring Manager / Team Name]," if a name is available)
- 3-4 short paragraphs
- End with "Best, [Name]" or "Sincerely, [Name]"
- No bullet points, no headers, no markdown formatting`;

// Credits cost per feature
const CREDIT_COST = 1; // 1 credit per cover letter generation

/**
 * Check and consume credits before AI call
 */
async function consumeCredits(
  userId: string,
  env: Env
): Promise<{ success: boolean; referenceId?: string; balance?: number; error?: string; code?: string }> {
  try {
    const res = await fetch(`${env.BILLING_WORKER_URL}/api/credits/consume`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.BILLING_API_KEY}`,
        'X-User-ID': userId,
      },
      body: JSON.stringify({
        amount: CREDIT_COST,
        product: 'kindreply',
        feature: 'cover-letter',
        description: 'Generate cover letter',
      }),
    });

    const data = await res.json() as { success?: boolean; balance?: number; reference_id?: string; error?: string };

    if (!res.ok) {
      if (res.status === 402) {
        return { success: false, error: 'Insufficient credits', code: 'CREDITS_INSUFFICIENT' };
      }
      return { success: false, error: data.error || `Credits API error: ${res.status}`, code: `HTTP_${res.status}` };
    }

    return { success: true, referenceId: data.reference_id, balance: data.balance };
  } catch (err) {
    console.error('[CoverLetter] Credits consume failed:', err);
    return { success: false, error: 'Credits service unavailable', code: 'CREDITS_SERVICE_ERROR' };
  }
}

/**
 * Refund credits on AI call failure
 */
async function refundCredits(
  userId: string,
  referenceId: string,
  env: Env
): Promise<void> {
  try {
    await fetch(`${env.BILLING_WORKER_URL}/api/credits/refund`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.BILLING_API_KEY}`,
        'X-User-ID': userId,
      },
      body: JSON.stringify({
        user_id: userId,
        reference_id: referenceId,
        amount: CREDIT_COST,
        reason: 'Cover letter generation failed',
      }),
    });
  } catch (err) {
    console.error('[CoverLetter] Credits refund failed:', err);
  }
}

export const onRequestPost = async (context: CFContext) => {
  const { request, env } = context;

  // Only accept POST
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Check API key
  const apiKey = env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "OPENROUTER_API_KEY not configured" }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Check billing config
  if (!env.BILLING_WORKER_URL || !env.BILLING_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Billing not configured" }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { jobDescription, name, fit, tone, userId } = body;

  if (!jobDescription || typeof jobDescription !== "string") {
    return new Response(
      JSON.stringify({ error: "jobDescription is required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Require userId for credits
  if (!userId) {
    return new Response(
      JSON.stringify({ 
        error: "Authentication required",
        code: "AUTH_REQUIRED",
        message: "Please sign in to generate cover letters."
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Step 1: Consume credits
  const creditsResult = await consumeCredits(userId, env);
  if (!creditsResult.success) {
    return new Response(
      JSON.stringify({
        error: creditsResult.error,
        code: creditsResult.code,
        message: creditsResult.code === 'CREDITS_INSUFFICIENT' 
          ? "You don't have enough credits. Please purchase more credits to continue."
          : creditsResult.error,
      }),
      {
        status: creditsResult.code === 'CREDITS_INSUFFICIENT' ? 402 : 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const referenceId = creditsResult.referenceId!;

  // Step 2: Generate cover letter
  const userPrompt = `Write a cover letter for the following job. Use a ${tone || "warm"} tone.

Job Description:
${jobDescription}

${fit ? `Why I am a fit: ${fit}` : ""}

${name ? `Sign off as: ${name}` : ""}

Write the cover letter now.`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://kindreply.co",
          "X-Title": "KindReply",
        },
        body: JSON.stringify({
          model: "moonshotai/kimi-k2.6",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt },
          ],
          max_tokens: 800,
        }),
      }
    );

    if (!response.ok) {
      // Refund on API failure
      await refundCredits(userId, referenceId, env);
      return new Response(
        JSON.stringify({
          error: "OpenRouter API error",
          status: response.status,
          code: "AI_API_ERROR",
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const coverLetter = data.choices?.[0]?.message?.content?.trim();

    if (!coverLetter) {
      // Refund on empty response
      await refundCredits(userId, referenceId, env);
      return new Response(
        JSON.stringify({ error: "Empty response from OpenRouter", code: "AI_EMPTY_RESPONSE" }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ 
      coverLetter,
      credits_used: CREDIT_COST,
      credits_balance: creditsResult.balance,
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    // Refund on exception
    await refundCredits(userId, referenceId, env);
    return new Response(
      JSON.stringify({ 
        error: "Failed to call OpenRouter API",
        code: "AI_CALL_FAILED",
        details: err instanceof Error ? err.message : "Unknown error",
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
