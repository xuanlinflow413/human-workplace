"use client";

import { useCallback, useRef, useState } from "react";
import { AlertCircle, Check, Coins, Copy, Loader2, LogIn, MessageSquare, RefreshCw, Sparkles, Trash2 } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";
import { useAnalytics } from "@/lib/analytics";
import BuyCreditsModal from "./BuyCreditsModal";

const API_BASE = "https://api.kindreply.co";

const toneOptions = [
  { value: "warm", label: "Warm", description: "Kind and reassuring" },
  { value: "professional", label: "Professional", description: "Clear and workplace-safe" },
  { value: "firm", label: "Firm", description: "Direct with boundaries" },
  { value: "supportive", label: "Supportive", description: "Helpful and empathetic" },
];

type SupportReplyToolProps = {
  context?: {
    pageTitle?: string;
    pageDescription?: string;
    pageEyebrow?: string;
  };
};

export default function SupportReplyTool({ context }: SupportReplyToolProps) {
  const [incomingMessage, setIncomingMessage] = useState("");
  const [goal, setGoal] = useState("");
  const [tone, setTone] = useState("professional");
  const [output, setOutput] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const {
    user,
    getLoginUrl,
    isPro,
    subscription,
    creditsBalance,
    refreshCredits,
    paymentSyncStatus,
    paymentSyncMessage,
  } = useAuth();
  const { trackGenerateClicked, trackRegenerateClicked, trackBuyCreditsClicked } = useAnalytics();

  const generateReply = useCallback(async (isRegenerate = false) => {
    if (!incomingMessage.trim()) return;

    if (!user) {
      window.location.href = getLoginUrl();
      return;
    }

    if ((creditsBalance ?? 0) <= 0) {
      trackBuyCreditsClicked("support_reply_insufficient_credits", "one_time");
      setShowBuyModal(true);
      return;
    }

    setIsLoading(true);
    if (isRegenerate) {
      trackRegenerateClicked("support_reply");
    } else {
      trackGenerateClicked("support_reply", incomingMessage.trim().length > 0);
    }

    try {
      const res = await fetch(`${API_BASE}/support-reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: incomingMessage,
          goal,
          tone,
          context,
          userId: user.id,
        }),
      });

      if (res.ok) {
        const data = await res.json() as { reply?: string };
        if (!data.reply) throw new Error("No reply in response");
        setOutput(data.reply);
        setHasGenerated(true);
        await refreshCredits();
        localStorage.setItem("kindreply_refresh_credits", Date.now().toString());
      } else if (res.status === 401 || res.status === 402) {
        const data = await res.json() as { message?: string; error?: string };
        setOutput(`⚠️ ${data.message || data.error || "Authentication or credits required."}`);
        setHasGenerated(true);
        if (res.status === 402) setShowBuyModal(true);
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
  }, [context, creditsBalance, getLoginUrl, goal, incomingMessage, refreshCredits, tone, trackBuyCreditsClicked, trackGenerateClicked, trackRegenerateClicked, user]);

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

  const handleClear = () => {
    setIncomingMessage("");
    setGoal("");
    setOutput("");
    setHasGenerated(false);
  };

  const canGenerate = incomingMessage.trim().length > 0 && !isLoading;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 rounded-xl border border-border bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between">
        {user ? (
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>Signed in as <span className="font-medium text-foreground">{user.email}</span></span>
            {creditsBalance !== null && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                <Coins className="h-3 w-3" />
                {creditsBalance} credits
              </span>
            )}
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">Sign in to generate with AI.</span>
        )}
        {user ? (
          <button
            onClick={() => {
              trackBuyCreditsClicked("support_reply_header", "one_time");
              setShowBuyModal(true);
            }}
            className="inline-flex items-center justify-center gap-1 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
          >
            Buy Credits
          </button>
        ) : (
          <button
            onClick={() => { window.location.href = getLoginUrl(); }}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
          >
            <LogIn className="h-3 w-3" />
            Sign in with Google
          </button>
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
          {paymentSyncStatus === "synced" && <Check className="h-3 w-3" />}
          {paymentSyncStatus === "timeout" && <AlertCircle className="h-3 w-3" />}
          <span>{paymentSyncMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message you need to answer
        </label>
        <textarea
          value={incomingMessage}
          onChange={(event) => setIncomingMessage(event.target.value)}
          placeholder="Paste the customer message, rude email, refund request, review, or follow-up you need to answer..."
          className="min-h-[150px] w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            What should the reply do?
          </label>
          <input
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            placeholder="Approve, decline, de-escalate, ask for details..."
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stone-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Tone
          </label>
          <select
            value={tone}
            onChange={(event) => setTone(event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-stone-300"
          >
            {toneOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} — {option.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => generateReply(false)}
          disabled={!canGenerate}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          Generate Reply
        </button>
        <button
          onClick={handleClear}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
          Clear
        </button>
      </div>

      {hasGenerated && (
        <div ref={outputRef} className="rounded-xl border border-border bg-background p-5">
          <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-stone-500" />
              <h3 className="font-semibold text-foreground">Generated reply</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
              <button
                onClick={() => generateReply(true)}
                disabled={!canGenerate}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Regenerate
              </button>
            </div>
          </div>
          <div className="whitespace-pre-wrap rounded-lg bg-muted/30 p-4 text-sm leading-6 text-foreground">
            {output}
          </div>
        </div>
      )}

      <p className="text-xs leading-5 text-muted-foreground">
        AI generation uses 1 KindReply credit. Edit the draft before sending, especially for legal, HR, refund, or policy-sensitive replies.
      </p>

      {showBuyModal && user && (
        <BuyCreditsModal
          userEmail={user.email}
          onClose={() => setShowBuyModal(false)}
          isPro={isPro}
          subscription={subscription}
          defaultTab="credits"
          onPaymentSuccess={refreshCredits}
        />
      )}
    </div>
  );
}
