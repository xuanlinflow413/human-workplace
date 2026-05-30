import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories, replies } from "@/data/replies";
import PopularWorkplaceSituations from "@/components/PopularWorkplaceSituations";
import EmailCapture from "@/components/EmailCapture";
import { Heart, ArrowRight, MessageSquare, Clock, Quote, Feather, FileText, Sparkles } from "lucide-react";

const mostShared = [
  "how-to-resign-gracefully",
  "email-template-for-burnout-leave",
  "manager-layoff-announcement-email",
  "how-to-address-performance-issues-with-empathy",
  "giving-negative-feedback-that-lands-well",
];

export default function HomePage() {
  const mostSharedReplies = mostShared
    .map((slug) => replies.find((r) => r.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Heart className="h-3.5 w-3.5 text-stone-400" />
              <span>Real replies for hard moments</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
              The right words
              <span className="text-stone-500"> for hard moments</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Copy-ready workplace replies for resignation, burnout, difficult
              conversations, and more. Professional, kind, and human.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/ai-prd-generator/"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                <span>AI PRD Generator</span>
              </Link>
              <Link
                href="/workplace/"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <span>Browse all replies</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Workplace Situations */}
        <PopularWorkplaceSituations />

        {/* Most Shared Replies */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="h-4 w-4 text-[#a8a29e]" />
              <h2 className="text-lg font-semibold text-foreground">
                Most Shared Replies
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              The ones people screenshot, save, and send to a friend
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mostSharedReplies.map((reply) => (
                <Link
                  key={reply!.id}
                  href={`/workplace/${reply!.slug}/`}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {reply!.categoryLabel}
                    </span>
                  </div>
                  <blockquote className="text-base font-medium text-foreground leading-relaxed mb-3 group-hover:text-stone-700 transition-colors">
                    &ldquo;{reply!.shareQuote}&rdquo;
                  </blockquote>
                  <p className="text-xs text-muted-foreground">
                    — {reply!.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              Browse by situation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => {
                const count = replies.filter(
                  (r) => r.category === cat.value
                ).length;
                return (
                  <Link
                    key={cat.value}
                    href={`/workplace/#${cat.value}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors">
                        {cat.label}
                      </h3>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cat.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Replies */}
        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              Featured replies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {replies.slice(0, 6).map((reply) => (
                <Link
                  key={reply.id}
                  href={`/workplace/${reply.slug}/`}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {reply.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {reply.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-stone-700 transition-colors">
                    {reply.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {reply.situationShort}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/workplace/"
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-foreground transition-colors"
              >
                <span>View all {replies.length} replies</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tool Cards */}
        <section className="px-4 py-10 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-5xl space-y-4">
            <Link
              href="/ai-prd-generator/"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
                <Sparkles className="h-5 w-5 text-stone-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors">
                    AI PRD Generator
                  </h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Generate structured PRDs for Claude Code, Cursor, Bolt, and other AI coding tools. Free, no signup.
                </p>
              </div>
            </Link>
            <Link
              href="/type-and-release/"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
                <Feather className="h-5 w-5 text-stone-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors">
                    Type &amp; Release
                  </h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  A private space to write it down before you send it.
                </p>
              </div>
            </Link>
            <Link
              href="/cover-letter-writer/"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
                <FileText className="h-5 w-5 text-stone-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors">
                    Cover Letter Writer
                  </h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Paste a job description, add one real detail, get a human-sounding first draft.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-8 text-center">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  1
                </div>
                <h3 className="font-medium text-foreground mb-1">
                  Find your situation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Browse by category or search for what you are facing.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  2
                </div>
                <h3 className="font-medium text-foreground mb-1">
                  Copy the reply
                </h3>
                <p className="text-sm text-muted-foreground">
                  One-click copy. Each reply is ready to send.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  3
                </div>
                <h3 className="font-medium text-foreground mb-1">
                  Personalize &amp; send
                </h3>
                <p className="text-sm text-muted-foreground">
                  Add your details. Send with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why real replies */}
        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Why real replies matter
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
              Most template sites give you generic, robotic text. We write
              replies that sound like a real person wrote them — because they
              are.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="rounded-xl border border-border bg-card p-5">
                <MessageSquare className="h-5 w-5 text-stone-500 mb-3" />
                <h3 className="font-medium text-foreground mb-1">
                  Real scenarios
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every reply is grounded in a real workplace situation.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <Heart className="h-5 w-5 text-stone-500 mb-3" />
                <h3 className="font-medium text-foreground mb-1">
                  Emotional intelligence
                </h3>
                <p className="text-sm text-muted-foreground">
                  We explain why each reply works, so you learn, not just copy.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <ArrowRight className="h-5 w-5 text-stone-500 mb-3" />
                <h3 className="font-medium text-foreground mb-1">
                  Multiple tones
                </h3>
                <p className="text-sm text-muted-foreground">
                  Formal, personal, or somewhere in between — choose what fits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <EmailCapture />
      </main>

      <Footer />
    </div>
  );
}
