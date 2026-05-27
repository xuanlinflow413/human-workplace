"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw, Trash2 } from "lucide-react";

interface CoverLetterOutputProps {
  text: string;
  onRegenerate: () => void;
  onClear: () => void;
}

export default function CoverLetterOutput({
  text,
  onRegenerate,
  onClear,
}: CoverLetterOutputProps) {
  const [editableText, setEditableText] = useState(text);
  const [copied, setCopied] = useState(false);

  // Keep editableText in sync when text prop changes (regenerate)
  useState(() => {
    setEditableText(text);
  });

  const handleCopy = async () => {
    if (!editableText) return;
    try {
      await navigator.clipboard.writeText(editableText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = editableText;
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
        <div className="flex items-center gap-2">
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
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800 transition-all"
            aria-label="Regenerate cover letter"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Regenerate</span>
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
        value={editableText}
        onChange={(e) => setEditableText(e.target.value)}
        className="w-full min-h-[280px] rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground focus:outline-none focus:ring-2 focus:ring-stone-300 resize-y"
      />

      <p className="text-xs text-muted-foreground">
        This is a first draft. Always review it and make it yours.
      </p>
    </div>
  );
}
