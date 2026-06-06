"use client";

import { useState } from "react";
import { Check, Crown, FileDown, Infinity, LayoutTemplate, Sparkles, X } from "lucide-react";

type UpgradeSource = "inline" | "pdf" | "templates" | "optimize" | "unlimited" | "pricing";

type UpgradePromptProps = {
  source?: UpgradeSource;
  compact?: boolean;
};

const proFeatures = [
  {
    icon: FileDown,
    title: "PDF export",
    description: "Download polished cover letters as clean PDF files.",
  },
  {
    icon: LayoutTemplate,
    title: "More templates",
    description: "Access role-specific letters for marketing, product, sales, support, and career-change applications.",
  },
  {
    icon: Sparkles,
    title: "AI optimization",
    description: "Rewrite your draft for clarity, warmth, confidence, and job description match.",
  },
  {
    icon: Infinity,
    title: "Unlimited generation",
    description: "Create as many drafts and variations as you need while applying.",
  },
];

const sourceCopy: Record<UpgradeSource, { title: string; body: string; button: string }> = {
  inline: {
    title: "Unlock KindReply Pro",
    body: "PDF export, more templates, AI optimization, and unlimited cover letter generation for serious job applications.",
    button: "Upgrade to Pro",
  },
  pdf: {
    title: "PDF export is a Pro feature",
    body: "Upgrade to download polished cover letters as PDF files you can attach to applications.",
    button: "Unlock PDF export",
  },
  templates: {
    title: "More templates are in Pro",
    body: "Unlock extra role-specific templates for product, marketing, sales, operations, support, and career-change applications.",
    button: "Unlock more templates",
  },
  optimize: {
    title: "AI optimization is a Pro feature",
    body: "Upgrade to improve your draft for clarity, warmth, confidence, specificity, and job-match strength.",
    button: "Unlock AI optimization",
  },
  unlimited: {
    title: "Unlimited generation is in Pro",
    body: "Keep creating drafts and variations while applying to multiple roles without worrying about limits.",
    button: "Get unlimited drafts",
  },
  pricing: {
    title: "KindReply Pro",
    body: "A simple upgrade path for applicants who need polished, repeatable cover letters.",
    button: "Start Pro",
  },
};

export default function UpgradePrompt({ source = "inline", compact = false }: UpgradePromptProps) {
  const [open, setOpen] = useState(false);
  const copy = sourceCopy[source];
  const checkoutHref = `mailto:hello@kindreply.co?subject=${encodeURIComponent("KindReply Pro checkout")}&body=${encodeURIComponent(
    "Hi, I want to upgrade to KindReply Pro for PDF export, more templates, AI optimization, and unlimited generation.",
  )}`;

  if (compact) {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-md bg-stone-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-stone-800 transition-all"
        >
          <Crown className="h-3.5 w-3.5" />
          <span>{copy.button}</span>
        </button>
        {open && <UpgradeModal copy={copy} checkoutHref={checkoutHref} onClose={() => setOpen(false)} />}
      </>
    );
  }

  return (
    <>
      <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-950 to-stone-800 p-5 sm:p-6 text-white shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-stone-200 mb-3">
              <Crown className="h-3.5 w-3.5 text-amber-300" />
              KindReply Pro
            </div>
            <h2 className="text-xl font-semibold tracking-tight">{copy.title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">{copy.body}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {proFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-2 text-sm text-stone-200">
                    <Icon className="mt-0.5 h-4 w-4 text-amber-300" />
                    <span>{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="shrink-0 rounded-xl bg-white p-4 text-stone-950 sm:w-44">
            <p className="text-xs font-medium uppercase tracking-wide text-stone-500">Early Pro</p>
            <p className="mt-1 text-3xl font-bold">$9</p>
            <p className="text-xs text-stone-500">per month</p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-4 w-full rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 transition-all"
            >
              {copy.button}
            </button>
          </div>
        </div>
      </div>
      {open && <UpgradeModal copy={copy} checkoutHref={checkoutHref} onClose={() => setOpen(false)} />}
    </>
  );
}

function UpgradeModal({
  copy,
  checkoutHref,
  onClose,
}: {
  copy: { title: string; body: string; button: string };
  checkoutHref: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Close upgrade dialog"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          <Crown className="h-5 w-5" />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{copy.title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.body}</p>
        <div className="mt-5 rounded-xl border border-border bg-muted/30 p-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground">$9</span>
            <span className="text-sm text-muted-foreground">/ month</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {proFeatures.map((feature) => (
              <li key={feature.title} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={checkoutHref}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-all"
        >
          <Crown className="h-4 w-4" />
          Request Pro checkout
        </a>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Early-access checkout request. No account is created until payment is confirmed.
        </p>
      </div>
    </div>
  );
}
