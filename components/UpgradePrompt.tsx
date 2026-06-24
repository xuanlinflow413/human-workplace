"use client";

import { useState } from "react";
import { Crown, Coins, Check, Loader2, Settings } from "lucide-react";
import BuyCreditsModal from "./BuyCreditsModal";
import { useAuth, type Subscription } from "@/lib/AuthContext";

interface UpgradePromptProps {
  source?: "inline" | "templates" | "unlimited" | "pdf" | "optimize";
  compact?: boolean;
  isPro?: boolean;
  userEmail?: string;
  userId?: string;
  creditsBalance?: number | null;
  subscription?: Subscription | null;
}

export default function UpgradePrompt({ 
  compact = false, 
  isPro = false,
  userEmail,
  userId,
  creditsBalance,
  subscription,
}: UpgradePromptProps) {
  const [open, setOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const { user, getLoginUrl, subscription: authSubscription, creditsBalance: authCreditsBalance } = useAuth();
  const effectiveUserEmail = userEmail || user?.email || "";
  const effectiveUserId = userId || user?.id;
  const effectiveCreditsBalance = creditsBalance ?? authCreditsBalance;
  const effectiveSubscription = subscription ?? authSubscription;

  // Pro用户：显示会员状态卡，隐藏所有Upgrade引导
  if (isPro) {
    if (compact) {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 border border-amber-200">
          <Crown className="h-3 w-3" />
          PRO Active
        </span>
      );
    }

    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="h-5 w-5 text-amber-600" />
          <h3 className="text-base font-semibold text-foreground">KindReply Pro Active</h3>
        </div>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/60 border border-amber-100 p-3">
              <p className="text-xs text-muted-foreground mb-1">Plan</p>
              <p className="text-sm font-medium text-foreground">Pro Monthly</p>
            </div>
            <div className="rounded-lg bg-white/60 border border-amber-100 p-3">
              <p className="text-xs text-muted-foreground mb-1">Credits</p>
              <p className="text-lg font-semibold text-foreground">{effectiveCreditsBalance ?? "—"}</p>
            </div>
          </div>
          
          <div className="rounded-lg bg-white/60 border border-amber-100 p-3">
            <p className="text-xs text-muted-foreground mb-1">Status</p>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-emerald-700">Active</span>
            </div>
          </div>

          <button
            onClick={async () => {
              setManaging(true);
              try {
                const res = await fetch("https://api.kindreply.co/create-portal-session", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: effectiveUserEmail }),
                });
                const data = await res.json() as { url?: string };
                if (data.url) window.location.href = data.url;
              } catch {
                alert("Failed to open subscription management. Please try again.");
              } finally {
                setManaging(false);
              }
            }}
            disabled={managing}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors disabled:opacity-50"
          >
            {managing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Settings className="h-4 w-4" />
            )}
            {managing ? "Loading..." : "Manage Subscription"}
          </button>
        </div>
      </div>
    );
  }

  // 未登录或非Pro用户：显示双产品对比卡片
  if (compact) {
    return (
      <button
        onClick={() => {
          if (effectiveUserId) {
            setOpen(true);
          } else {
            window.location.href = getLoginUrl();
          }
        }}
        className="inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
      >
        <Coins className="h-3 w-3" />
        Get More Credits
      </button>
    );
  }

  return (
    <>
      <div className="rounded-xl border border-border bg-muted/30 p-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-amber-100 p-2">
            <Coins className="h-4 w-4 text-amber-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground">Get More Credits</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose what works best for your job search.
            </p>
            
            {/* Job Pack */}
            <div className="mt-3 rounded-lg border border-border bg-white/60 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Job Pack</p>
                  <p className="text-xs text-muted-foreground">10 Credits · $4.99 one-time</p>
                </div>
                <p className="text-lg font-bold text-foreground">$4.99</p>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">For occasional use.</p>
            </div>

            {/* KindReply Pro */}
            <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/50 p-4 relative">
              <span className="absolute -top-2 right-3 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                Best Value
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">KindReply Pro</p>
                  <p className="text-xs text-muted-foreground">300 Credits/month · $9.99/month</p>
                </div>
                <p className="text-lg font-bold text-foreground">$9.99</p>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Best for active job seekers.</p>
              
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  Save 93% per credit
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  300 monthly credits
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  Premium templates
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  ATS optimization
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => {
                  if (effectiveUserId) {
                    setOpen(true);
                  } else {
                    window.location.href = getLoginUrl();
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                <Coins className="h-4 w-4" />
                Get More Credits
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <BuyCreditsModal
          userEmail={effectiveUserEmail}
          userId={effectiveUserId}
          onClose={() => setOpen(false)}
          defaultTab="credits"
          subscription={effectiveSubscription}
          onPaymentSuccess={() => {
            // 触发全局 credits 刷新
            console.log('[UpgradePrompt] payment success, triggering refresh');
            localStorage.setItem("kindreply_refresh_credits", Date.now().toString());
            setTimeout(() => {
              localStorage.removeItem("kindreply_refresh_credits");
            }, 100);
          }}
        />
      )}
    </>
  );
}
