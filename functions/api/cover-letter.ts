export interface Env {
  OPENROUTER_API_KEY: string;
}

interface RequestBody {
  jobDescription: string;
  name: string;
  fit: string;
  tone: string;
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

  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { jobDescription, name, fit, tone } = body;

  if (!jobDescription || typeof jobDescription !== "string") {
    return new Response(
      JSON.stringify({ error: "jobDescription is required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

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
      return new Response(
        JSON.stringify({
          error: "OpenRouter API error",
          status: response.status,
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
      return new Response(
        JSON.stringify({ error: "Empty response from OpenRouter" }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ coverLetter }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to call OpenRouter API" }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
