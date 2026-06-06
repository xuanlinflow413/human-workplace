"use client";

import { useRef, useState } from "react";
import { Copy, Check, RefreshCw, Trash2 } from "lucide-react";
import UpgradePrompt from "./UpgradePrompt";

interface CoverLetterOutputProps {
  text: string;
  onRegenerate: () => void;
  onClear: () => void;
  isLoading?: boolean;
}

export default function CoverLetterOutput({
  text,
  onRegenerate,
  onClear,
  isLoading,
}: CoverLetterOutputProps) {
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = async () => {
    const currentText = textareaRef.current?.value || text;
    if (!currentText) return;
    try {
      await navigator.clipboard.writeText(currentText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = currentText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Your draft</h2>
        <div className="flex flex-wrap items-center gap-2">
          <UpgradePrompt source="pdf" compact />
          <UpgradePrompt source="optimize" compact />
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
              copied
                ? "bg-emerald-100 text-emerald-700"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800"
            }`}
            aria-label={copied ? "Copied to clipboard" : "Copy cover letter"}
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
            onClick={onRegenerate}
            disabled={isLoading}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
              isLoading
                ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800"
            }`}
            aria-label="Regenerate cover letter"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span>{isLoading ? "Generating..." : "Regenerate"}</span>
          </button>
          <button
            onClick={onClear}
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800 transition-all"
            aria-label="Clear cover letter"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      <textarea
        key={text}
        ref={textareaRef}
        defaultValue={text}
        className="w-full min-h-[280px] rounded-xl border border-border bg-card p-4 sm:p-5 text-sm leading-relaxed text-foreground focus:outline-none focus:ring-2 focus:ring-stone-300 resize-y"
      />

      <p className="text-xs text-muted-foreground">
        This is a first draft. Always review it and make it yours.
      </p>
    </div>
  );
}
