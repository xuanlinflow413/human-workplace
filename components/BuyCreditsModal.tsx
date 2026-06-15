"use client";

import { useState } from "react";
import { X, Coins, Crown, Loader2, AlertCircle, Check } from "lucide-react";
import { useAnalytics } from "@/lib/analytics";

const API_BASE = "https://api.kindreply.co";

interface BuyCreditsModalProps {
  userEmail: string;
  onClose: () => void;
  isPro?: boolean;
  subscription?: {
    status: string;
    plan_id: string;
    current_period_end: number | string;
    cancel_at_period_end: boolean;
  } | null;
  defaultTab?: string;
  onPaymentSuccess?: () => void;
}

const PLANS = [
  {
    id: "plan_kindreply_jobpack",
    name: "Job Pack",
    description: "One-time purchase for 10 credits",
    price: "$4.99",
    credits: 10,
    interval: "one-time",
    icon: Coins,
    highlight: false,
  },
  {
    id: "plan_kindreply_pro",
    name: "KindReply Pro",
    description: "300 credits every month · Best value for active job seekers",
    price: "$9.99",
    credits: 300,
    interval: "month",
    icon: Crown,
    highlight: true,
  },
];

export default function BuyCreditsModal({ userEmail, onClose, isPro = false, subscription, defaultTab, onPaymentSuccess }: BuyCreditsModalProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(defaultTab || "credits");
  const { trackBuyCreditsClicked, trackCheckoutStarted } = useAnalytics();

  // Pro user: show subscription management
  if (isPro) {
    const renewalDate = subscription?.current_period_end 
      ? new Date(typeof subscription.current_period_end === 'number' ? subscription.current_period_end * 1000 : subscription.current_period_end).toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        })
      : null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <Crown className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-foreground">KindReply Pro Active</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Your Pro subscription is active. You have full access to all premium features.
          </p>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Advanced AI rewriting",
                "ATS optimization", 
                "PDF export",
                "Premium templates",
                "Unlimited generations",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {renewalDate && (
            <div className="mt-4 rounded-lg border border-border bg-muted/30 p-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Plan</span>
                <span className="font-medium">KindReply Pro</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">Status</span>
                <span className="inline-flex items-center gap-1 font-medium text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Active
                </span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">Next Renewal</span>
                <span className="font-medium">{renewalDate}</span>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="mt-5 w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-all"
          >
            Continue Using Pro
          </button>
        </div>
      </div>
    );
  }

  // Non-Pro user: show purchase options with tabs
  const handleBuy = async (planId: string) => {
    const plan = PLANS.find(p => p.id === planId);
    if (plan) {
      trackBuyCreditsClicked("buy_modal", planId);
      trackCheckoutStarted(planId, plan.name, plan.price);
    }
    setLoading(planId);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-ID": userEmail,
        },
        body: JSON.stringify({
          plan_id: planId,
          success_url: `${window.location.origin}${window.location.pathname}?checkout=success`,
          cancel_url: `${window.location.origin}${window.location.pathname}?checkout=cancel`,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = data.error || data.details || `Checkout failed (${res.status})`;
        setError(msg);
        return;
      }

      if (data.url) {
        window.location.assign(data.url);
      } else if (data.sessionUrl) {
        window.location.assign(data.sessionUrl);
      } else {
        setError("No checkout URL returned. Please contact support.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoading(null);
    }
  };

  const creditPlans = PLANS.filter(p => p.interval === "one-time");
  const proPlans = PLANS.filter(p => p.interval === "month");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="text-xl font-semibold text-foreground">Buy Credits</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose a plan to get more credits
        </p>

        {/* Tabs */}
        <div className="mt-4 flex rounded-lg border border-border bg-muted/30 p-1">
          <button
            onClick={() => setActiveTab("credits")}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
              activeTab === "credits"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Credits
          </button>
          <button
            onClick={() => setActiveTab("pro")}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
              activeTab === "pro"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            KindReply Pro
          </button>
        </div>

        {error && (
          <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-5 space-y-3">
          {(activeTab === "credits" ? creditPlans : proPlans).map((plan) => {
            const Icon = plan.icon;
            const isLoading = loading === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative rounded-xl border p-4 transition-all ${
                  plan.highlight
                    ? "border-amber-200 bg-amber-50/50"
                    : "border-border bg-muted/30"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-2 right-3 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        plan.highlight
                          ? "bg-amber-100 text-amber-700"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {plan.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">
                      {plan.price}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {plan.interval === "month" ? "/month" : "one-time"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleBuy(plan.id)}
                  disabled={isLoading || !!loading}
                  className={`mt-3 w-full rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    plan.highlight
                      ? "bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-60"
                      : "bg-foreground text-primary-foreground hover:bg-foreground/90 disabled:opacity-60"
                  }`}
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    `Buy ${plan.name}`
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Secure checkout powered by Stripe. No credit card stored on our servers.
        </p>
      </div>
    </div>
  );
}
