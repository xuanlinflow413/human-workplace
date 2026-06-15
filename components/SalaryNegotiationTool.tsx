"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Copy, Check, RefreshCw, Trash2, Sparkles, Loader2, Coins, LogIn, DollarSign, TrendingUp, MessageSquare, Palette, Shield, Clock, Zap, CheckCircle, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { useAnalytics } from "@/lib/analytics";
import BuyCreditsModal from "./BuyCreditsModal";

const API_BASE = "https://api.kindreply.co";

const toneOptions = [
  { value: "professional", label: "Professional", description: "Balanced and courteous" },
  { value: "firm", label: "Firm", description: "Direct and assertive" },
  { value: "polite", label: "Polite", description: "Soft and deferential" },
  { value: "enthusiastic", label: "Enthusiastic", description: "Positive and excited" },
];

export default function SalaryNegotiationTool() {
  const [currentOffer, setCurrentOffer] = useState<string>("");
  const [desiredSalary, setDesiredSalary] = useState<string>("");
  const [reason, setReason] = useState("");
  const [tone, setTone] = useState("professional");
  const [output, setOutput] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  // 使用统一的 auth hook
  const { user, getLoginUrl, isPro, subscription, creditsBalance, refreshCredits, syncCreditsAfterPayment, paymentSyncStatus, paymentSyncMessage } = useAuth();
  const { trackGenerateClicked, trackRegenerateClicked, trackBuyCreditsClicked, trackCheckoutSuccess, trackEntitlementActivated } = useAnalytics();

  // 支付成功后自动刷新 credits（URL 参数 checkout=success）
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      const planId = params.get("plan") || "unknown";
      const planName = params.get("plan_name") || "unknown";
      trackCheckoutSuccess(planId, planName);
      trackEntitlementActivated(planId, planName);
      const beforeBalance = creditsBalance ?? Number(localStorage.getItem("kindreply_credits") || "0");
      console.log('[SalaryNegotiationTool] checkout success detected, beforeBalance =', beforeBalance);
      syncCreditsAfterPayment(beforeBalance);
      // 延迟清理 URL 参数，避免中断轮询逻辑
      const cleanupTimer = setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete("checkout");
        window.history.replaceState({}, "", url.toString());
        console.log('[SalaryNegotiationTool] URL cleaned up');
      }, 25000); // 25秒后清理，确保长轮询完成
      return () => clearTimeout(cleanupTimer);
    }
  }, [syncCreditsAfterPayment, creditsBalance]);

  const handleGenerate = useCallback(async () => {
    const current = Number(currentOffer);
    const desired = Number(desiredSalary);
    if (!current || !desired || current <= 0 || desired <= 0) return;
    setIsLoading(true);

    trackGenerateClicked("salary_negotiation", currentOffer.trim().length > 0);

    try {
      const res = await fetch(`${API_BASE}/salary-negotiation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentOffer: current,
          desiredSalary: desired,
          reason,
          tone,
          userId: user?.id,
        }),
      });

      if (res.ok) {
        const data = await res.json() as { 
          email?: string; 
          credits_balance?: number; 
          credits_remaining?: number; 
          balance?: number;
        };
        if (data.email) {
          setOutput(data.email);
          setHasGenerated(true);
          await refreshCredits();
          console.log("[credits:refresh-after-generate] done");
        } else {
          throw new Error("No email in response");
        }
      } else if (res.status === 401 || res.status === 402) {
        const data = await res.json() as { message?: string; code?: string };
        setOutput(`⚠️ ${data.message || 'Authentication or credits required. Please sign in and ensure you have enough credits.'}`);
        setHasGenerated(true);
      } else {
        throw new Error(`API error: ${res.status}`);
      }
    } catch {
      setOutput("⚠️ Something went wrong. Please try again in a moment.");
      setHasGenerated(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [currentOffer, desiredSalary, reason, tone, user, refreshCredits]);

  const handleRegenerate = useCallback(async () => {
    if (!user) return;
    const current = Number(currentOffer);
    const desired = Number(desiredSalary);
    if (!current || !desired) return;
    setIsLoading(true);

    trackRegenerateClicked("salary_negotiation");

    try {
      const res = await fetch(`${API_BASE}/salary-negotiation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentOffer: current,
          desiredSalary: desired,
          reason,
          tone,
          userId: user.id,
        }),
      });

      if (res.ok) {
        const data = await res.json() as { 
          email?: string; 
          credits_balance?: number; 
          credits_remaining?: number; 
          balance?: number;
        };
        if (data.email) {
          setOutput(data.email);
          await refreshCredits();
          console.log("[credits:refresh-after-generate] done");
        } else {
          throw new Error("No email in response");
        }
      } else if (res.status === 401 || res.status === 402) {
        const data = await res.json() as { message?: string };
        setOutput(`⚠️ ${data.message || 'Authentication or credits required.'}`);
      } else {
        throw new Error(`API error: ${res.status}`);
      }
    } catch {
      setOutput("⚠️ Something went wrong. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  }, [currentOffer, desiredSalary, reason, tone, user, refreshCredits]);

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = output;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const canGenerate = currentOffer && desiredSalary && Number(currentOffer) > 0 && Number(desiredSalary) > 0 && !isLoading;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Auth & Credits bar */}
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {user ? (
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground">
                Signed in as <span className="font-medium text-foreground">{user.email}</span>
              </span>
              {creditsBalance !== null && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 border border-amber-200">
                  <Coins className="h-3 w-3" />
                  {creditsBalance} credits
                </span>
              )}
              <button
                onClick={() => setShowBuyModal(true)}
                className="inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                Buy Credits
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground">Sign in to generate with AI</span>
              <button
                onClick={() => {
                  window.location.href = getLoginUrl();
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                <LogIn className="h-3 w-3" />
                Sign in with Google
              </button>
            </div>
          )}
        </div>
        {paymentSyncStatus !== "idle" && paymentSyncMessage && (
          <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
            paymentSyncStatus === "synced"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : paymentSyncStatus === "timeout"
              ? "bg-amber-50 text-amber-700 border border-amber-200"
              : "bg-blue-50 text-blue-700 border border-blue-200"
          }`}>
            {paymentSyncStatus === "syncing" && <Loader2 className="h-3 w-3 animate-spin" />}
            {paymentSyncStatus === "synced" && <CheckCircle className="h-3 w-3" />}
            {paymentSyncStatus === "timeout" && <AlertCircle className="h-3 w-3" />}
            <span>{paymentSyncMessage}</span>
          </div>
        )}
      </div>

      {/* Inputs */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Current Offer
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="number"
                value={currentOffer}
                onChange={(e) => setCurrentOffer(e.target.value)}
                placeholder="90000"
                className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Desired Salary
            </label>
            <div className="relative">
              <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="number"
                value={desiredSalary}
                onChange={(e) => setDesiredSalary(e.target.value)}
                placeholder="105000"
                className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Reason / Context
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Why you believe you deserve more — e.g., market research, additional skills, competing offers, years of experience..."
              className="w-full min-h-[120px] rounded-xl border border-border bg-card pl-9 pr-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300 resize-y"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tone
          </label>
          <div className="flex flex-wrap gap-2">
            {toneOptions.map((t) => (
              <button
                key={t.value}
                onClick={() => setTone(t.value)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all border ${
                  tone === t.value
                    ? "bg-foreground text-primary-foreground border-foreground"
                    : "bg-card text-muted-foreground border-border hover:border-stone-300"
                }`}
                title={t.description}
              >
                <Palette className="h-3 w-3" />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Generate button */}
      <div className="mt-6">
        {!user ? (
          <button
            onClick={() => {
              window.location.href = getLoginUrl();
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
          >
            <LogIn className="h-4 w-4" />
            Sign in to Generate
          </button>
        ) : (
          <button
            onClick={handleGenerate}
            disabled={!canGenerate}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
              canGenerate
                ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Generate Professional Draft</span>
              </>
            )}
          </button>
        )}
        
        {/* Button helper text */}
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Usually takes 5–10 seconds
          </span>
          <span className="inline-flex items-center gap-1">
            <Coins className="h-3 w-3" />
            Uses 1 credit
          </span>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="mt-5 rounded-xl border border-border bg-muted/30 p-4">
        <p className="text-xs font-medium text-foreground mb-2.5">Why job seekers use KindReply</p>
        <div className="grid grid-cols-2 gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle className="h-3 w-3 text-emerald-600" />
            Human-like writing style
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle className="h-3 w-3 text-emerald-600" />
            ATS-friendly formatting
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Shield className="h-3 w-3 text-emerald-600" />
            Privacy-first generation
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Zap className="h-3 w-3 text-emerald-600" />
            Multiple AI engines behind the scenes
          </span>
        </div>
      </div>

      {/* Credits balance display */}
      {creditsBalance !== null && user && (
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-amber-700 border border-amber-200">
            <Coins className="h-3 w-3" />
            {creditsBalance} credits remaining
          </span>
        </div>
      )}

      {/* Privacy note */}
      <div className="mt-3 space-y-1">
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Shield className="h-3 w-3" />
          Powered by KindReply AI Routing™ — your draft is generated using an intelligent AI routing system that automatically selects the best AI engine for your task.
        </p>
        <p className="text-xs text-muted-foreground pl-5">
          ✓ Human-sounding writing · ✓ ATS-friendly structure · ✓ Recruiter-focused language · ✓ Secure server-side generation
        </p>
        <p className="text-xs text-muted-foreground pl-5">
          Your input is never used for AI training and is not stored after generation.
        </p>
      </div>

      {/* Output */}
      {hasGenerated && (
        <div ref={outputRef} className="mt-10 scroll-mt-20 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Your negotiation email</h2>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  copied
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800"
                }`}
                aria-label={copied ? "Copied to clipboard" : "Copy email"}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <button
                onClick={handleRegenerate}
                disabled={isLoading}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  isLoading
                    ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800"
                }`}
                aria-label="Regenerate email"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
                <span>{isLoading ? "Generating..." : "Regenerate"}</span>
              </button>
              <button
                onClick={() => {
                  setOutput("");
                  setHasGenerated(false);
                }}
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800 transition-all"
                aria-label="Clear email"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          <textarea
            key={output}
            defaultValue={output}
            className="w-full min-h-[280px] rounded-xl border border-border bg-card p-4 sm:p-5 text-sm leading-relaxed text-foreground focus:outline-none focus:ring-2 focus:ring-stone-300 resize-y"
          />

          <p className="text-xs text-muted-foreground">
            This is a first draft. Always review it and make it yours before sending.
          </p>
        </div>
      )}
      {showBuyModal && user && (
        <BuyCreditsModal
          userEmail={user.email}
          onClose={() => {
            setShowBuyModal(false);
            // 关闭 modal 时触发 credits 刷新
            refreshCredits();
          }}
          isPro={isPro}
          subscription={subscription}
          onPaymentSuccess={() => {
            // PayPal 支付成功时触发刷新
            refreshCredits();
          }}
        />
      )}
    </div>
  );
}
