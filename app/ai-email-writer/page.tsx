import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EmailWriterFaqSchema } from "@/components/EmailWriterLandingPage";
import { ArrowRight, FileText, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Email Writer for Work | KindReply",
  description:
    "Write clear, professional workplace emails for replies, follow-ups, requests, apologies, boundaries, and difficult conversations.",
  alternates: { canonical: "https://kindreply.co/ai-email-writer/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/ai-email-writer/",
    siteName: "KindReply",
    title: "AI Email Writer for Work | KindReply",
    description:
      "Write clear, professional workplace emails for replies, follow-ups, requests, apologies, boundaries, and difficult conversations.",
  },
};

const useCases = [
  ["Follow up without sounding pushy", "Ask for an update, deadline, or next step in a calm tone."],
  ["Reply to difficult workplace emails", "Answer rude, vague, or emotionally loaded messages without escalating."],
  ["Set professional boundaries", "Say no, reset scope, or ask for priority clarity while staying respectful."],
  ["Write customer support replies", "Respond to complaints, refunds, and negative reviews with empathy and control."],
];

const emailTypes = [
  ["Resignation email writer", "/resignation-email-writer/"],
  ["Burnout email reply", "/burnout-email-reply/"],
  ["Difficult conversation email", "/difficult-conversation-email/"],
  ["Polite professional email replies", "/polite-professional-email-replies/"],
  ["AI email agent", "/ai-email-agent/"],
  ["Customer service email writer", "/customer-service-email-writer/"],
  ["Apology email writer", "/apology-email-writer/"],
  ["Cold email writer", "/cold-email-writer/"],
  ["Follow-up email writer", "/follow-up-email-writer/"],
  ["Job application email writer", "/job-application-email-writer/"],
  ["Polite email rewriter", "/polite-email-rewriter/"],
  ["Email reply generator", "/tools/email-reply-generator/"],
  ["Professional email generator", "/professional-email-generator/"],
  ["Workplace email templates", "/workplace-email-templates/"],
  ["Reply to a rude email", "/reply-to-rude-email/"],
  ["Follow-up email after interview", "/follow-up-email-after-interview/"],
  ["Customer service reply generator", "/tools/customer-service-reply-generator/"],
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailWriterFaqSchema />
      <Header />
      <main className="flex-1">
        <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Mail className="h-3.5 w-3.5 text-stone-400" />
              <span>AI email writer for real workplace moments</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
              AI email writer that sounds professional, kind, and human
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Use KindReply to draft workplace emails, replies, follow-ups, and difficult messages without sounding robotic or overly formal.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/tools/email-reply-generator/" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">
                <span>Try the email reply generator</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/workplace-email-templates/" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                Browse email templates
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {useCases.map(([title, description]) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <MessageSquare className="h-5 w-5 text-stone-500 mb-3" />
                <h2 className="text-lg font-semibold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
              Choose the email workflow that matches your situation
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {emailTypes.map(([title, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-stone-500" />
                    {title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 border-t border-border">
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Why put AI Email Writer inside KindReply?</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The search intent overlaps with workplace replies, professional email templates, customer support responses, and difficult-message rewriting. Keeping this page on KindReply strengthens the same email and workplace communication topical cluster instead of splitting authority across a new domain.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
