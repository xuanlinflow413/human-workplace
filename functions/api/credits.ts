export interface Env {
  BILLING_WORKER_URL: string;
  BILLING_API_KEY: string;
}

interface CFContext {
  request: Request;
  env: Env;
}

export const onRequestGet = async (context: CFContext) => {
  const { request, env } = context;

  if (!env.BILLING_WORKER_URL || !env.BILLING_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Billing not configured" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const userId = request.headers.get('X-User-ID');
  if (!userId) {
    return new Response(
      JSON.stringify({ error: "User ID required", code: "AUTH_REQUIRED" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const res = await fetch(`${env.BILLING_WORKER_URL}/api/credits`, {
      headers: {
        'Authorization': `Bearer ${env.BILLING_API_KEY}`,
        'X-User-ID': userId,
      },
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch credits", status: res.status }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Credits service unavailable", details: err instanceof Error ? err.message : "Unknown" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }
};
