"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { generateCoverLetter, toneOptions, demoLetters, type Tone } from "@/data/demoLetters";
import CoverLetterOutput from "./CoverLetterOutput";
import UpgradePrompt from "./UpgradePrompt";
import { FileText, Sparkles, Wand2, Loader2, ChevronDown } from "lucide-react";

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
  const [showDemoDropdown, setShowDemoDropdown] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleGenerate = useCallback(async () => {
    if (!jd.trim()) return;
    setIsLoading(true);
    setUsedFallback(false);

    try {
      const res = await fetch("/api/cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription: jd,
          name: userName,
          fit: userDetail,
          tone,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.coverLetter) {
          setOutput(data.coverLetter);
          setHasGenerated(true);
        } else {
          throw new Error("No cover letter in response");
        }
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
  }, [jd, userDetail, tone, userName]);

  const handleRegenerate = useCallback(async () => {
    setIsLoading(true);
    setUsedFallback(false);

    try {
      const res = await fetch("/api/cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription: jd,
          name: userName,
          fit: userDetail,
          tone,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.coverLetter) {
          setOutput(data.coverLetter);
        } else {
          throw new Error("No cover letter in response");
        }
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
  }, [jd, userDetail, tone, userName]);

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
        <UpgradePrompt source="templates" compact />
      </div>

      <UpgradePrompt source="inline" />

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
      <div className="mt-6 flex items-center gap-3">
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
              <span>Generate draft</span>
            </>
          )}
        </button>
        <UpgradePrompt source="unlimited" compact />
      </div>

      {/* Privacy note */}
      <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
        <FileText className="h-3 w-3" />
        Generated by Kimi k2.6 through a secure server-side call. Your input is used only to create this draft and is not saved by KindReply.
      </p>

      {/* Fallback warning */}
      {usedFallback && (
        <p className="mt-2 text-xs text-amber-600">
          Kimi API is temporarily unavailable. Showing a local template draft instead. You can try again in a moment.
        </p>
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
            }}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
}
