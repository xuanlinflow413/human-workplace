"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Coins, Crown, Loader2, Sparkles } from "lucide-react";
import { useAnalytics } from "@/lib/analytics";
import { createCheckoutSession, CHECKOUT_API_BASE, getCheckoutUserId, getLoginUrl, type CheckoutPlanId } from "@/lib/checkout";

type CheckoutPlan = CheckoutPlanId;

const planDetails: Record<CheckoutPlan, { name: string; price: string }> = {
  plan_kindreply_jobpack: { name: "Reply Pack", price: "$4.99" },
  plan_kindreply_pro: { name: "KindReply Pro", price: "$9.99" },
};

type StoredUser = {
  id?: string;
  email?: string;
};

const jobPackFeatures = [
  "10 AI rewrite credits for difficult emails, customer replies, reviews, refunds, and job-search messages",
  "One-time purchase — no subscription commitment",
  "Best for trying one support queue, freelancer client thread, or job-search push before paying monthly",
  "Credits stay attached to your KindReply account after checkout",
];

const proFeatures = [
  "300 credits every month for recurring customer-support, freelance, and job-search replies",
  "Advanced AI rewriting for tone, empathy, and concise professional phrasing",
  "Premium templates for apologies, refunds, follow-ups, negative reviews, and workplace emails",
  "Best value when difficult replies are part of your weekly workflow",
];

const replyPackUseCases = [
  ["Customer support", "Handle refunds, complaints, angry customers, and escalations with calm replies."],
  ["Freelancers", "Answer scope changes, late payments, rude clients, and follow-ups without sounding defensive."],
  ["Small business", "Protect trust when replying to negative reviews, apology requests, and service issues."],
];

function getStoredUser(): StoredUser | null {
  try {
    const raw = window.localStorage.getItem("kindreply_user");
    return raw ? (JSON.parse(raw) as StoredUser) : null;
  } catch {
    return null;
  }
}

function buildLoginHref(returnUrl = "https://kindreply.co/pricing/") {
  return `${CHECKOUT_API_BASE}/api/auth/google?returnUrl=${encodeURIComponent(returnUrl)}`;
}

export default function PricingClient() {
  const [loadingPlan, setLoadingPlan] = useState<CheckoutPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loginHref, setLoginHref] = useState(buildLoginHref());
  const { trackCheckoutStarted, trackCheckoutSuccess, trackEntitlementActivated, trackLoginStart } = useAnalytics();

  useEffect(() => {
    setIsSignedIn(Boolean(getCheckoutUserId(getStoredUser())));
    setLoginHref(buildLoginHref(window.location.href));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") !== "success") return;

    const rawPlanId = params.get("plan") || params.get("plan_id") || "plan_kindreply_jobpack";
    const planId = rawPlanId in planDetails ? (rawPlanId as CheckoutPlan) : "plan_kindreply_jobpack";
    const eventKey = `kindreply_checkout_success_tracked_${planId}_${window.location.search}`;
    if (window.sessionStorage.getItem(eventKey)) return;
    window.sessionStorage.setItem(eventKey, "1");

    const plan = planDetails[planId];

    trackCheckoutSuccess(planId, plan.name);
    trackEntitlementActivated(planId, plan.name);
  }, [trackCheckoutSuccess, trackEntitlementActivated]);

  const startCheckout = async (planId: CheckoutPlan) => {
    const plan = planDetails[planId];
    const user = getStoredUser();
    const userId = getCheckoutUserId(user);

    if (!userId) {
      trackLoginStart("pricing_checkout");
      window.location.href = getLoginUrl(window.location.href);
      return;
    }

    trackCheckoutStarted(planId, plan.name, plan.price, "pricing");
    setLoadingPlan(planId);
    setError(null);

    try {
      const checkoutUrl = await createCheckoutSession({
        planId,
        userId,
        successUrl: `${window.location.origin}/pricing/?checkout=success&plan=${encodeURIComponent(planId)}`,
        cancelUrl: `${window.location.origin}/pricing/?checkout=cancel`,
      });
      window.location.assign(checkoutUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-stone-50 to-background px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800">
            <Sparkles className="h-4 w-4" />
            One Reply Pack first, Pro when usage is proven
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple pricing for job-search and support replies that need to sound human
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Start with a low-risk Job Pack for one application push or customer-support reply workflow. Upgrade to Pro only when you need recurring rewrites, templates, and polished replies.
          </p>
          {error ? (
            <p className="mx-auto mt-5 max-w-2xl rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-700">
              <Coins className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">One-time pack</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">Job Pack</h2>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-bold text-foreground">$4.99</span>
              <span className="pb-1 text-sm text-muted-foreground">one-time</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              10 credits for cover letters, follow-ups, salary messages, customer replies, and workplace messages when you only need a focused push.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {jobPackFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {isSignedIn ? (
              <button
                type="button"
                onClick={() => startCheckout("plan_kindreply_jobpack")}
                disabled={loadingPlan !== null}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-foreground/90 disabled:opacity-60"
              >
                {loadingPlan === "plan_kindreply_jobpack" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Buy Reply Pack
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <a
                href={loginHref}
                onClick={() => trackLoginStart("pricing_checkout")}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-foreground/90"
              >
                Buy Reply Pack
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </article>

          <article className="relative rounded-3xl border border-amber-200 bg-amber-50/40 p-8 shadow-sm">
            <span className="absolute right-6 top-6 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Best value
            </span>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <Crown className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Subscription</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">KindReply Pro</h2>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-bold text-foreground">$9.99</span>
              <span className="pb-1 text-sm text-muted-foreground">/ month</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              300 monthly credits for active users who need polished messages across applications, support tickets, follow-ups, and negotiations.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {isSignedIn ? (
              <button
                type="button"
                onClick={() => startCheckout("plan_kindreply_pro")}
                disabled={loadingPlan !== null}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:opacity-60"
              >
                {loadingPlan === "plan_kindreply_pro" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Upgrade to Pro
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <a
                href={loginHref}
                onClick={() => trackLoginStart("pricing_checkout")}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
              >
                Upgrade to Pro
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </article>
        </div>
      </section>

      <section className="border-t border-border px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Reply Pack use cases</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">Built for high-stakes replies, not generic chat</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Use credits when the reply affects trust, money, reviews, client relationships, or a job opportunity.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {replyPackUseCases.map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/20 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground">What should I buy first?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Trying KindReply?</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Buy the $4.99 Reply Pack and use it on one role, one company, one support queue, or one negotiation thread.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Writing replies weekly?</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Use Pro when customer replies, cover letters, support follow-ups, and workplace messages are part of your recurring workflow.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Need credits only?</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Stay on Reply Packs. You can buy again without changing your plan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
