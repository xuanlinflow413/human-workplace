import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Workplace Email Templates for Difficult Moments | KindReply",
  description: "Browse workplace email templates for resignation, burnout, feedback, apologies, boundaries, and follow-ups.",
  alternates: { canonical: "https://kindreply.co/workplace-email-templates/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/workplace-email-templates/",
    siteName: "KindReply",
    title: "Workplace Email Templates for Difficult Moments | KindReply",
    description: "Browse workplace email templates for resignation, burnout, feedback, apologies, boundaries, and follow-ups.",
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
              <span>Workplace emails</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">Workplace email templates for hard moments</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Use these templates when the message matters: resignation, burnout, performance feedback, boundaries, follow-ups, and sensitive team updates.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/workplace/" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">
                <span>Browse all workplace replies</span>
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
                <h2 className="text-lg font-semibold text-foreground">Start from the situation</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">The best template depends on power dynamics, urgency, and whether the message is informational or corrective.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Keep records clean</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Workplace emails can be forwarded, screenshotted, or saved. Keep the wording factual and kind.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Personalize before sending</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Replace placeholders with names, dates, constraints, and one sentence that sounds like you.</p>
              </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">Copy-ready starting points</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <h3 className="font-medium text-foreground">Difficult conversation opener</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">Hi [Name],

I wanted to discuss [topic] because it is affecting [work/project/team]. My goal is to understand what is happening and agree on a practical next step.

Could we talk this week?</p>
              </div>
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <h3 className="font-medium text-foreground">Apology at work</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">Hi [Name],

I am sorry for [specific issue]. I understand that it caused [impact]. I am taking [specific action] to prevent it from happening again, and I appreciate your patience while I correct it.

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
