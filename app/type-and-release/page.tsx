import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypeReleaseTool from "@/components/TypeReleaseTool";
import CrisisResources from "@/components/CrisisResources";
import Link from "next/link";
import { ArrowRight, Feather } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindreply.co"),
  title: "Type & Release | Write It Down, Let It Go",
  description:
    "A private online space to write the message, thought, or feeling you do not want to send. Nothing is saved or uploaded.",
  keywords: [
    "write don't send",
    "private journaling",
    "release thoughts",
    "emotional release tool",
    "write and let go",
    "safe space to vent",
  ],
  authors: [{ name: "KindReply" }],
  creator: "KindReply",
  publisher: "KindReply",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kindreply.co/type-and-release/",
    siteName: "KindReply",
    title: "Type & Release | Write It Down, Let It Go",
    description:
      "A private online space to write the message, thought, or feeling you do not want to send. Nothing is saved or uploaded.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Type & Release | Write It Down, Let It Go",
    description:
      "A private online space to write the message, thought, or feeling you do not want to send.",
    creator: "@kindreply",
  },
  alternates: {
    canonical: "/type-and-release/",
  },
};

export default function TypeAndReleasePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-16 pb-10 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Feather className="h-3.5 w-3.5 text-stone-400" />
              <span>A KindReply space</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Type & Release
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              A private place to write the thing you don&apos;t want to send.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              No saving. No sending. Just space.
            </p>
          </div>
        </section>

        {/* Tool Area */}
        <section className="px-4 py-8">
          <TypeReleaseTool />
        </section>

        {/* How to use */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              How to use this
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Write it down
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Type whatever is on your mind. No filters needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Press Release
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Watch it fade. The words don&apos;t need to go anywhere to
                    matter.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Let it go
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Take a breath. The thought has been heard — by you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to use */}
        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              When this helps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  The message you shouldn&apos;t send
                </h3>
                <p className="text-sm text-muted-foreground">
                  That text you&apos;re typing at 2am. Write it here first.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Work frustration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vent without burning bridges.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Family tension
                </h3>
                <p className="text-sm text-muted-foreground">
                  Say what you feel without the fallout.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Overthinking loops
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get the thought out of your head and onto the page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy note */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Your privacy
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Everything you type stays in your browser. We do not save, upload,
              or transmit anything you write here. When you close or refresh this
              page, it&apos;s gone.
            </p>
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
                href="/about/"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:border-stone-300 transition-all"
              >
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-stone-700 transition-colors">
                    About KindReply
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Why we built this
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </section>

        {/* Crisis resources */}
        <CrisisResources />
      </main>

      <Footer />
    </div>
  );
}
