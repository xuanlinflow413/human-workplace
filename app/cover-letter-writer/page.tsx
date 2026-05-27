import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoverLetterTool from "@/components/CoverLetterTool";
import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindreply.co"),
  title: "Human Cover Letter Writer — Free, No Sign-Up, Sounds Like You",
  description:
    "Write a free cover letter draft that sounds clear, specific, and human. Paste a job description and create a first version with no sign-up.",
  keywords: [
    "cover letter writer",
    "free cover letter",
    "cover letter generator",
    "job application helper",
    "human cover letter",
    "no sign up cover letter",
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
    url: "https://kindreply.co/cover-letter-writer/",
    siteName: "KindReply",
    title: "Human Cover Letter Writer — Free, No Sign-Up, Sounds Like You",
    description:
      "Write a free cover letter draft that sounds clear, specific, and human. Paste a job description and create a first version with no sign-up.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Cover Letter Writer — Free, No Sign-Up, Sounds Like You",
    description:
      "Write a free cover letter draft that sounds clear, specific, and human.",
    creator: "@kindreply",
  },
  alternates: {
    canonical: "/cover-letter-writer/",
  },
};

export default function CoverLetterWriterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-16 pb-10 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <FileText className="h-3.5 w-3.5 text-stone-400" />
              <span>A KindReply tool</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Write a cover letter that sounds human.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Paste the job description, add one real detail about yourself, and
              get a clear first draft — free, no sign-up.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-3 flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              This demo runs in your browser. Nothing is saved or uploaded.
            </p>
          </div>
        </section>

        {/* Tool Area */}
        <section className="px-4 py-8 border-t border-border">
          <CoverLetterTool />
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
                    Paste the job description
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We read the title, company, and key requirements from the
                    text.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-0.5">
                    Add one real detail
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A project, a result, or a skill. This keeps the letter
                    specific.
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
                    Warm, confident, concise, or career change. Edit the draft
                    before you send.
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
                  Be specific
                </h3>
                <p className="text-sm text-muted-foreground">
                  Numbers and outcomes beat vague claims every time.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Match the tone
                </h3>
                <p className="text-sm text-muted-foreground">
                  A startup and a law firm read cover letters differently.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Keep it short
                </h3>
                <p className="text-sm text-muted-foreground">
                  200–280 words is the sweet spot. Hiring managers are busy.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-medium text-foreground mb-1">
                  Proofread out loud
                </h3>
                <p className="text-sm text-muted-foreground">
                  If it sounds awkward when you say it, rewrite that sentence.
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
    </div>
  );
}
