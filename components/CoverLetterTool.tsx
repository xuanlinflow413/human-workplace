"use client";

import { useState, useCallback } from "react";
import { generateCoverLetter, toneOptions, type Tone } from "@/data/demoLetters";
import CoverLetterOutput from "./CoverLetterOutput";
import { FileText, Sparkles } from "lucide-react";

export default function CoverLetterTool() {
  const [jd, setJd] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [userName, setUserName] = useState("");
  const [tone, setTone] = useState<Tone>("warm");
  const [output, setOutput] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = useCallback(() => {
    if (!jd.trim()) return;
    const letter = generateCoverLetter(jd, userDetail, tone, userName);
    setOutput(letter);
    setHasGenerated(true);
  }, [jd, userDetail, tone, userName]);

  const handleRegenerate = useCallback(() => {
    const letter = generateCoverLetter(jd, userDetail, tone, userName);
    setOutput(letter);
  }, [jd, userDetail, tone, userName]);

  const canGenerate = jd.trim().length > 0;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Inputs */}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Job description
          </label>
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the job description here..."
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
            placeholder="e.g., I led a team of 5 to rebuild our onboarding flow in 3 months"
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
              placeholder="[Your Name]"
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
          <Sparkles className="h-4 w-4" />
          <span>Generate draft</span>
        </button>
      </div>

      {/* Privacy note */}
      <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
        <FileText className="h-3 w-3" />
        This demo runs in your browser. Nothing is saved or uploaded.
      </p>

      {/* Output */}
      {hasGenerated && (
        <div className="mt-10">
          <CoverLetterOutput
            text={output}
            onRegenerate={handleRegenerate}
            onClear={() => {
              setOutput("");
              setHasGenerated(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
