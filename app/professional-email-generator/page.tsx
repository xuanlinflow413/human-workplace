import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Email Generator for Work | KindReply",
  description: "Draft professional workplace emails for follow-ups, requests, boundaries, apologies, and difficult conversations.",
  alternates: { canonical: "https://kindreply.co/professional-email-generator/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/professional-email-generator/",
    siteName: "KindReply",
    title: "Professional Email Generator for Work | KindReply",
    description: "Draft professional workplace emails for follow-ups, requests, boundaries, apologies, and difficult conversations.",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <FileText className="h-3.5 w-3.5 text-stone-400" />
              <span>Work email templates</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">Professional email generator for workplace messages</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Find a calm starting point for workplace emails that need to be clear, polite, and direct without sounding robotic.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/workplace/" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">
                <span>Browse email situations</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/workplace/" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                Browse workplace replies
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Name the ask</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">A good professional email makes the request or update obvious in the first few lines.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Use a human tone</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Clear does not mean cold. Short appreciation and context can keep the message collaborative.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Close with next step</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">End with the decision, deadline, question, or action you need from the other person.</p>
              </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">Copy-ready starting points</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <h3 className="font-medium text-foreground">Follow-up email</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">Hi [Name],

I wanted to follow up on [topic]. When you have a chance, could you share an update or let me know the best next step?

Thanks,
[Name]</p>
              </div>
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <h3 className="font-medium text-foreground">Boundary-setting email</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">Hi [Name],

I can help with [specific part], but I will not be able to take on [extra request] by [deadline]. A workable option would be [alternative].

Best,
[Name]</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 border-t border-border">
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Need a more specific version?</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Use KindReply tools and workplace reply examples as a starting point, then edit names, dates, constraints, and tone before sending.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/cover-letter-writer/" className="inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">Try Cover Letter Writer</Link>
              <Link href="/salary-negotiation-generator/" className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">Try Salary Negotiation Tool</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
