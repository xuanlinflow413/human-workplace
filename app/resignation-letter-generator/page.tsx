import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Resignation Letter Generator — Professional Templates | KindReply",
  description: "Write a clear resignation letter with professional templates for notice, transition help, and a calm final message.",
  alternates: { canonical: "https://kindreply.co/resignation-letter-generator/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/resignation-letter-generator/",
    siteName: "KindReply",
    title: "Resignation Letter Generator — Professional Templates | KindReply",
    description: "Write a clear resignation letter with professional templates for notice, transition help, and a calm final message.",
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
              <span>Resignation templates</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">Resignation letter generator for a graceful exit</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Use these professional resignation letter starting points when you need to leave clearly, kindly, and without oversharing.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/workplace/how-to-resign-gracefully/" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">
                <span>See graceful resignation reply</span>
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
                <h2 className="text-lg font-semibold text-foreground">Keep it simple</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">A resignation note should confirm the decision, final working day, and transition support without debating the reason.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Protect the relationship</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Thank the manager or team briefly, especially if you may need a reference later.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Avoid emotional details</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">Save complex explanations for a conversation. The written letter should stay calm and record-safe.</p>
              </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">Copy-ready starting points</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <h3 className="font-medium text-foreground">Short resignation letter</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">Hi [Manager],

I am writing to formally resign from my role as [Role]. My last working day will be [Date]. Thank you for the opportunity to be part of the team. I will do what I can to support a smooth transition before I leave.

Best,
[Name]</p>
              </div>
              <div className="rounded-xl border border-border bg-muted/20 p-5">
                <h3 className="font-medium text-foreground">Warm resignation letter</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">Hi [Manager],

After careful thought, I have decided to resign from my position as [Role]. My last day will be [Date]. I am grateful for the support, trust, and experience I have gained here, and I will help document priorities and hand off work before my departure.

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
