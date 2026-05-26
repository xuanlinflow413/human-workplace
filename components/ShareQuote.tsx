"use client";

import { useState } from "react";
import { Copy, Check, Share2, Link2 } from "lucide-react";

interface ShareQuoteProps {
  quote: string;
  title: string;
}

export default function ShareQuote({ quote, title }: ShareQuoteProps) {
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyQuote = async () => {
    try {
      await navigator.clipboard.writeText(quote);
      setCopiedQuote(true);
      setTimeout(() => setCopiedQuote(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = quote;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedQuote(true);
      setTimeout(() => setCopiedQuote(false), 2000);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = pageUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const shareToTwitter = () => {
    const text = `"${quote.slice(0, 200)}${quote.length > 200 ? "..." : ""}" — ${title}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: quote,
          url: pageUrl,
        });
      } catch {
        // User cancelled
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <div className="space-y-6">
      {/* Quote Card — Editorial Style */}
      <div className="relative rounded-2xl bg-[#f5f5f4] p-8 md:p-12">
        {/* Decorative quote mark */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 text-[#d6d3d1] select-none">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="relative pt-8">
          <p className="text-xl md:text-2xl lg:text-[1.65rem] font-medium text-[#292524] leading-[1.5] tracking-[-0.01em]">
            {quote}
          </p>
        </blockquote>

        {/* Attribution */}
        <div className="mt-8 pt-6 border-t border-[#e7e5e4]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#44403c]">{title}</p>
              <p className="text-xs text-[#a8a29e] mt-0.5">Human Workplace</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[#a8a29e]">
              <div className="w-6 h-6 rounded-full bg-[#e7e5e4] flex items-center justify-center">
                <span className="text-[10px] font-semibold text-[#78716c]">HW</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Copy Quote */}
        <button
          onClick={handleCopyQuote}
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4] hover:text-[#292524]"
        >
          {copiedQuote ? (
            <>
              <Check className="h-4 w-4 text-emerald-600" />
              <span>Copied ✓</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy Quote</span>
            </>
          )}
        </button>

        {/* Share Button */}
        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all bg-[#292524] text-[#fafaf9] hover:bg-[#44403c]"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>

        {/* Share Menu (fallback when navigator.share not available) */}
        {showShareMenu && (
          <div className="flex items-center gap-2">
            <button
              onClick={shareToTwitter}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]"
              title="Share on X/Twitter"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="hidden sm:inline">X</span>
            </button>
            <button
              onClick={shareToLinkedIn}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]"
              title="Share on LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]"
              title="Copy link"
            >
              {copiedLink ? (
                <>
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span className="hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Link2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Link</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
