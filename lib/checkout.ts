export const CHECKOUT_API_BASE = "https://api.kindreply.co";

export type CheckoutPlanId = "plan_kindreply_jobpack" | "plan_kindreply_pro";

export type CheckoutUser = {
  id?: string | null;
  email?: string | null;
};

export type CheckoutResponse = {
  url?: string;
  sessionUrl?: string;
  error?: string;
  details?: string;
};

export function getCheckoutUserId(user: CheckoutUser | null | undefined) {
  return user?.id || user?.email || null;
}

export function getLoginUrl(returnUrl?: string) {
  const targetUrl = returnUrl || (typeof window !== "undefined" ? window.location.href : "https://kindreply.co/pricing/");
  return `${CHECKOUT_API_BASE}/api/auth/google?returnUrl=${encodeURIComponent(targetUrl)}`;
}

export async function createCheckoutSession({
  planId,
  userId,
  successUrl,
  cancelUrl,
}: {
  planId: CheckoutPlanId | string;
  userId: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const res = await fetch(`${CHECKOUT_API_BASE}/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-ID": userId,
    },
    body: JSON.stringify({
      plan_id: planId,
      success_url: successUrl,
      cancel_url: cancelUrl,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as CheckoutResponse;

  if (!res.ok) {
    throw new Error(data.error || data.details || `Checkout failed (${res.status})`);
  }

  const checkoutUrl = data.url || data.sessionUrl;
  if (!checkoutUrl) {
    throw new Error("No checkout URL returned. Please try again.");
  }

  return checkoutUrl;
}
