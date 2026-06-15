import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalaryNegotiationTool from "@/components/SalaryNegotiationTool";
import Link from "next/link";
import { ArrowRight, DollarSign, ShieldCheck, Shield } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindreply.co"),
  title: "Salary Negotiation Email Generator — Professional Counter Offer Letter",
  description:
    "Generate a professional salary negotiation email in seconds. Enter your offer, desired salary, and reason to create a persuasive counter offer letter.",
  keywords: [
    "Salary Negotiation Email",
    "Offer Negotiation Letter",
    "Negotiate Salary Email",
    "Counter Offer Email",
    "Salary Counter Offer",
    "Professional Negotiation Email",
  ],
  authors: [{ name: "KindReply" }],
  creator: "KindReply",
  publisher: "KindReply",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kindreply.co/salary-negotiation-generator/",
    siteName: "KindReply",
    title: "Salary Negotiation Email Generator — Professional Counter Offer Letter",
    description:
      "Generate a professional salary negotiation email in seconds. Enter your offer, desired salary, and reason to create a persuasive counter offer letter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Negotiation Email Generator — Professional Counter Offer Letter",
    description:
      "Generate a professional salary negotiation email in seconds.",
    creator: "@kindreply",
  },
  alternates: {
    canonical: "/salary-negotiation-generator/",
  },
};

export default function SalaryNegotiationGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-16 pb-10 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <DollarSign className="h-3.5 w-3.5 text-stone-400" />
              <span>A KindReply tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Negotiate your offer with confidence.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Enter your current offer, desired salary, and reason. Get a polite,
              firm, and professional counter offer email in seconds.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-3 flex items-center justify-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Powered by KindReply AI Routing™ — your draft is generated using an intelligent AI routing system that automatically selects the best AI engine for your task.
            </p>
          </div>
        </section>

        {/* Tool Area */}
        <section className="px-4 py-8 border-t border-border">
          <SalaryNegotiationTool />
        </section>

        {/* How it works */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              How it works
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Enter your numbers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Current offer and the salary you want. Be specific — the tool uses these to craft a concrete counter offer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Add your reasoning
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Market research, competing offers, additional skills, or years of experience. This makes the email specific and credible.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Pick a tone
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Professional, firm, polite, or enthusiastic. Edit the draft before you send.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              Make it better
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Use market data
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reference salary benchmarks for your role, location, and experience level.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Be specific
                </h3>
                <p className="text-sm text-muted-foreground">
                  A concrete counter offer number is more persuasive than a vague request.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Stay collaborative
                </h3>
                <p className="text-sm text-muted-foreground">
                  Frame it as a conversation, not a demand. You want to work together, not against each other.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Consider the whole package
                </h3>
                <p className="text-sm text-muted-foreground">
                  If base salary is fixed, negotiate equity, bonus, remote work, or other benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  Is this free?
                </h3>
                <p className="text-sm text-muted-foreground">
                  You need 1 credit per generation. New users receive free credits on sign-up. Additional credits can be purchased.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  Is my data saved?
                </h3>
                <p className="text-sm text-muted-foreground">
                  No. Your inputs are sent to the AI for generation and are not stored by KindReply.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  Can I negotiate more than salary?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. Mention other factors — signing bonus, equity, remote work, vacation, professional development — in the Reason field.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  What if the company says no?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The draft ends with openness to discussion, so you can explore alternatives without burning bridges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="px-4 py-10 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              More from KindReply
            </h2>
            <div className="space-y-3">
              <Link
                href="/cover-letter-writer/"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-stone-300 transition-all"
              >
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-stone-700 transition-colors">
                    Cover Letter Writer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Write a cover letter that sounds human
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
              <Link
                href="/workplace/"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-stone-300 transition-all"
              >
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-stone-700 transition-colors">
                    Workplace Replies
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Real replies for hard conversations at work
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
              <Link
                href="/type-and-release/"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-stone-300 transition-all"
              >
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-stone-700 transition-colors">
                    Type & Release
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A private space to write it down before you send it
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Salary Negotiation Email Generator",
              url: "https://kindreply.co/salary-negotiation-generator/",
              description:
                "Generate a professional salary negotiation email in seconds. Enter your offer, desired salary, and reason to create a persuasive counter offer letter.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              publisher: {
                "@type": "Organization",
                name: "KindReply",
                url: "https://kindreply.co/",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is this free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You need 1 credit per generation. New users receive free credits on sign-up. Additional credits can be purchased.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data saved?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Your inputs are sent to the AI for generation and are not stored by KindReply.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I negotiate more than salary?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Mention other factors — signing bonus, equity, remote work, vacation, professional development — in the Reason field.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What if the company says no?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The draft ends with openness to discussion, so you can explore alternatives without burning bridges.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "KindReply",
                  item: "https://kindreply.co/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Salary Negotiation Generator",
                  item: "https://kindreply.co/salary-negotiation-generator/",
                },
              ],
            },
          ]),
        }}
      />
    </div>
  );
}
