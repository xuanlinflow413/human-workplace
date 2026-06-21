import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportReplyTool from "@/components/SupportReplyTool";
import type { EmailWriterPage } from "@/data/emailWriterPages";
import { ArrowRight, CheckCircle2, Copy, Mail, MessageSquareText, Wand2 } from "lucide-react";

const faqs = [
  ["Is KindReply free to use?", "You can browse examples and templates for free. AI generation may require signing in and using KindReply credits when the live generator is enabled."],
  ["Is this suitable for work emails?", "Yes. These pages are written for professional workplace, job search, customer support, and business communication scenarios."],
  ["Does KindReply save my email content?", "Do not paste secrets, passwords, health details, legal material, or confidential company information. Use placeholders for sensitive names, numbers, and accounts before generating."],
  ["How do I avoid an AI-sounding email?", "Add one real detail, remove generic filler, choose a tone that matches your relationship, and edit the final draft before sending."],
] as const;

const workflowSteps = [
  [MessageSquareText, "Input scenario"],
  [Wand2, "Choose tone"],
  [Mail, "Generate email"],
  [Copy, "Copy or rewrite"],
] as const;

export function EmailWriterFaqSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }),
      }}
    />
  );
}

export default function EmailWriterLandingPage({ page }: { page: EmailWriterPage }) {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailWriterFaqSchema />
      <Header />
      <main className="flex-1">
        <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Mail className="h-3.5 w-3.5 text-stone-400" />
              <span>{page.eyebrow}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">{page.h1}</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{page.intro}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#email-writer-tool" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors">
                <span>Write this email</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/ai-email-writer/" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                AI email writer hub
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-4">
            {workflowSteps.map(([Icon, label], index) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">{index + 1}</div>
                  <Icon className="h-4 w-4 text-stone-500" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="email-writer-tool" className="px-4 pb-12">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm">
            <div className="mb-4 text-center">
              <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">Unified email workflow</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Input scenario → choose tone → generate email → copy or rewrite</h2>
              <p className="mt-2 text-sm md:text-base leading-6 text-muted-foreground">Use the same KindReply flow for drafts, replies, follow-ups, rewrites, and job-search messages.</p>
            </div>
            <SupportReplyTool context={{ pageTitle: page.h1, pageDescription: page.intro, pageEyebrow: page.eyebrow }} />
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ["Input scenario", page.scenario],
              ["Choose tone", page.tone],
              ["Generate email", page.output],
              ["Copy or rewrite", page.rewrite],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <CheckCircle2 className="h-5 w-5 text-stone-500 mb-3" />
                <h2 className="text-lg font-semibold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">Copy-ready starting points</h2>
            <div className="space-y-4">
              {page.examples.map((example) => (
                <div key={example.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-medium text-foreground">{example.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">{example.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">Before you send it</h2>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {page.tips.map((tip) => (
                <li key={tip} className="rounded-lg border border-border bg-card p-4">{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">Related email tools</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {page.related.map((item) => (
                <Link key={item.href} href={item.href} className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all">
                  <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">FAQ</h2>
            <div className="space-y-3">
              {faqs.map(([question, answer]) => (
                <div key={question} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-medium text-foreground">{question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
