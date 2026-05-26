"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface ShareQuoteProps {
  quote: string;
  title: string;
}

export default function ShareQuote({ quote, title }: ShareQuoteProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `"${quote}"\n\n— ${title}\n\nHuman Workplace | human-workplace.pages.dev`;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center">
          <span className="text-sm font-semibold text-stone-600">HW</span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Human Workplace</p>
          <p className="text-xs text-muted-foreground">human-workplace.pages.dev</p>
        </div>
      </div>
      <blockquote className="text-base text-foreground leading-relaxed italic border-l-2 border-stone-300 pl-4 mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="text-xs text-muted-foreground mb-4">— {title}</p>
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-800 transition-all"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            <span>Copied to clipboard</span>
          </>
        ) : (
          <>
            <Share2 className="h-3.5 w-3.5" />
            <span>Copy quote to share</span>
          </>
        )}
      </button>
    </div>
  );
}
