"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { generateCoverLetter, toneOptions, demoLetters, type Tone } from "@/data/demoLetters";
import CoverLetterOutput from "./CoverLetterOutput";
import UpgradePrompt from "./UpgradePrompt";
import { FileText, Sparkles, Wand2, Loader2, ChevronDown, Coins, LogIn, Shield, Clock, Zap, CheckCircle, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { useAnalytics } from "@/lib/analytics";
import BuyCreditsModal from "./BuyCreditsModal";

// KindReply API Worker URL
const API_BASE = "https://api.kindreply.co";

const SAMPLE_JD = `Senior Product Manager — Mobile Growth

We are looking for a Senior Product Manager to lead our mobile app team. You will own the roadmap for user acquisition and retention, working closely with engineering, design, and marketing. The ideal candidate has shipped consumer-facing features that drove measurable growth, and can balance data with user intuition.

What you will do:
- Define and execute the mobile product strategy
- Run experiments to improve activation and retention
- Collaborate with cross-functional teams to ship fast

Requirements:
- 5+ years of product management experience
- Track record of shipping features that moved metrics
- Strong analytical skills and comfort with ambiguity`;

const SAMPLE_DETAIL = "I grew our app's DAU by 40% in 6 months through a referral program I designed from scratch.";
const SAMPLE_NAME = "Alex Chen";

export default function CoverLetterTool() {
  const [jd, setJd] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [userName, setUserName] = useState("");
  const [tone, setTone] = useState<Tone>("warm");
  const [output, setOutput] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);
  const [needsCredits, setNeedsCredits] = useState(false);
  const [showDemoDropdown, setShowDemoDropdown] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      console.log('[CoverLetterTool] checkout success detected, beforeBalance =', beforeBalance);
      syncCreditsAfterPayment(beforeBalance);
      // 延迟清理 URL 参数，避免中断轮询逻辑
      const cleanupTimer = setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete("checkout");
        window.history.replaceState({}, "", url.toString());
        console.log('[CoverLetterTool] URL cleaned up');
      }, 25000); // 25秒后清理，确保长轮询完成
      return () => clearTimeout(cleanupTimer);
    }
  }, [syncCreditsAfterPayment, creditsBalance]);

  const handleGenerate = useCallback(async () => {
    if (!jd.trim()) return;
    setIsLoading(true);
    setUsedFallback(false);
    setNeedsCredits(false);

    trackGenerateClicked("cover_letter", jd.trim().length > 0);

    try {
      const res = await fetch(`${API_BASE}/cover-letter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription: jd,
          name: userName,
          fit: userDetail,
          tone,
          userId: user?.id,
        }),
      });

      if (res.ok) {
        const data = await res.json() as { 
          coverLetter?: string; 
          credits_balance?: number; 
          credits_remaining?: number; 
          balance?: number;
        };
        if (data.coverLetter) {
          setOutput(data.coverLetter);
          setHasGenerated(true);
          await refreshCredits();
          console.log("[credits:refresh-after-generate] done");
        } else {
          throw new Error("No cover letter in response");
        }
      } else if (res.status === 401 || res.status === 402) {
        const data = await res.json() as { message?: string; code?: string };
        setOutput(`⚠️ ${data.message || 'Authentication or credits required. Please sign in or buy a Reply Pack to continue.'}`);
        setNeedsCredits(true);
        setHasGenerated(true);
      } else {
        throw new Error(`API error: ${res.status}`);
      }
    } catch {
      // Fallback to local template generation
      const letter = generateCoverLetter(jd, userDetail, tone, userName);
      setOutput(letter);
      setUsedFallback(true);
      setHasGenerated(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [jd, userDetail, tone, userName, refreshCredits]);

  const handleRegenerate = useCallback(async () => {
    if (!user) return;
    setIsLoading(true);
    setUsedFallback(false);
    setNeedsCredits(false);

    trackRegenerateClicked("cover_letter");

    try {
      const res = await fetch(`${API_BASE}/cover-letter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription: jd,
          name: userName,
          fit: userDetail,
          tone,
          userId: user?.id,
        }),
      });

      if (res.ok) {
        const data = await res.json() as { 
          coverLetter?: string; 
          credits_balance?: number; 
          credits_remaining?: number; 
          balance?: number;
        };
        if (data.coverLetter) {
          setOutput(data.coverLetter);
          await refreshCredits();
          console.log("[credits:refresh-after-generate] done");
        } else {
          throw new Error("No cover letter in response");
        }
      } else if (res.status === 401 || res.status === 402) {
        const data = await res.json() as { message?: string };
        setOutput(`⚠️ ${data.message || 'Authentication or credits required. Please sign in or buy a Reply Pack to continue.'}`);
        setNeedsCredits(true);
      } else {
        throw new Error(`API error: ${res.status}`);
      }
    } catch {
      const letter = generateCoverLetter(jd, userDetail, tone, userName);
      setOutput(letter);
      setUsedFallback(true);
    } finally {
      setIsLoading(false);
    }
  }, [jd, userDetail, tone, userName, user, refreshCredits]);

  const handleTrySample = useCallback(() => {
    setJd(SAMPLE_JD);
    setUserDetail(SAMPLE_DETAIL);
    setUserName(SAMPLE_NAME);
    setTone("confident");
  }, []);

  const handleLoadDemo = useCallback((demoId: string) => {
    const demo = demoLetters.find((d) => d.id === demoId);
    if (!demo) return;
    setJd(demo.sampleJobDescription);
    setUserDetail(demo.sampleFitDetail);
    setUserName("");
    setTone(demo.tone);
    setShowDemoDropdown(false);
    // Auto-generate the pre-written demo letter
    setOutput(demo.generatedCoverLetter);
    setHasGenerated(true);
    setUsedFallback(false);
    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDemoDropdown(false);
      }
    }
    if (showDemoDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showDemoDropdown]);

  const canGenerate = jd.trim().length > 0 && !isLoading;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Auth & Credits bar */}
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {user ? (
            <div className="flex items-center gap-3">
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
            <div className="flex items-center gap-3">
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

      {/* Try sample buttons */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <button
          onClick={handleTrySample}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border border-dashed border-stone-300 text-muted-foreground hover:border-stone-400 hover:text-foreground transition-all"
        >
          <Wand2 className="h-3 w-3" />
          <span>Try with a sample</span>
        </button>

        {/* Demo dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDemoDropdown((v) => !v)}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium border border-border bg-card text-muted-foreground hover:border-stone-300 hover:text-foreground transition-all"
          >
            <FileText className="h-3 w-3" />
            <span>Load demo</span>
            <ChevronDown className={`h-3 w-3 transition-transform ${showDemoDropdown ? "rotate-180" : ""}`} />
          </button>

          {showDemoDropdown && (
            <div className="absolute left-0 top-full mt-1.5 z-50 w-64 rounded-xl border border-border bg-card shadow-lg py-1 max-h-72 overflow-y-auto">
              {demoLetters.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => handleLoadDemo(demo.id)}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors flex items-center gap-2"
                >
                  <span className="font-medium text-foreground">{demo.jobTitle}</span>
                  <span className="text-muted-foreground text-xs">@ {demo.companyName}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Premium template entry */}
        <UpgradePrompt source="templates" compact isPro={isPro} userEmail={user?.email} userId={user?.id} creditsBalance={creditsBalance} subscription={subscription} />
      </div>

      <UpgradePrompt source="inline" isPro={isPro} userEmail={user?.email} userId={user?.id} creditsBalance={creditsBalance} subscription={subscription} />

      {/* Inputs */}
      <div className="mt-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Job description
          </label>
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the full job description — title, responsibilities, requirements. The more detail, the better the draft."
            className="w-full min-h-[160px] rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300 resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            One real detail about you
          </label>
          <input
            type="text"
            value={userDetail}
            onChange={(e) => setUserDetail(e.target.value)}
            placeholder="A result you achieved, a project you led, or a skill you built. Example: I cut churn by 15% by redesigning the cancellation flow."
            className="w-full rounded-xl border border-border bg-card p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="How you sign off — e.g., Alex Chen"
              className="w-full rounded-xl border border-border bg-card p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300"
            />
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
                  {t.label}
                </button>
              ))}
            </div>
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
        <UpgradePrompt source="unlimited" compact isPro={isPro} userEmail={user?.email} userId={user?.id} creditsBalance={creditsBalance} subscription={subscription} />
        
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

      {/* Fallback warning */}
      {usedFallback && (
        <p className="mt-2 text-xs text-amber-600">
          AI generation is temporarily unavailable. Showing a local template draft instead. You can try again in a moment.
        </p>
      )}

      {needsCredits && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-medium">Need credits to keep generating?</p>
          <p className="mt-1 text-amber-800">Buy a Reply Pack on the pricing page or open checkout here.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {user ? (
              <button
                type="button"
                onClick={() => setShowBuyModal(true)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                <Coins className="h-3.5 w-3.5" />
                Buy Reply Pack
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  window.location.href = getLoginUrl();
                }}
                className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                <LogIn className="h-3.5 w-3.5" />
                Sign in to buy credits
              </button>
            )}
            <a
              href="/pricing/"
              className="inline-flex items-center rounded-lg border border-amber-300 bg-white px-4 py-2 text-xs font-medium text-amber-900 hover:bg-amber-100 transition-colors"
            >
              View pricing
            </a>
          </div>
        </div>
      )}

      {/* Output */}
      {hasGenerated && (
        <div ref={outputRef} className="mt-10 scroll-mt-20">
          <CoverLetterOutput
            text={output}
            onRegenerate={handleRegenerate}
            onClear={() => {
              setOutput("");
              setHasGenerated(false);
              setUsedFallback(false);
              setNeedsCredits(false);
            }}
            isLoading={isLoading}
          />
        </div>
      )}
      {showBuyModal && user && (
        <BuyCreditsModal
          userEmail={user.email}
          userId={user.id}
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
