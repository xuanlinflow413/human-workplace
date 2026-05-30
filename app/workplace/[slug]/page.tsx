import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";
import ShareQuote from "@/components/ShareQuote";
import {
  getReplyBySlug,
  getRelatedReplies,
  getAllSlugs,
} from "@/data/replies";
import RelatedReplies from "@/components/RelatedReplies";
import EmailCapture from "@/components/EmailCapture";
import Link from "next/link";
import {
  Clock,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const reply = getReplyBySlug(slug);
  if (!reply) {
    return {
      title: "Page Not Found — Human Workplace",
      description: "The page you are looking for does not exist. Browse our workplace reply templates.",
    };
  }
  return {
    title: reply.metaTitle,
    description: reply.metaDescription,
    alternates: {
      canonical: `/workplace/${reply.slug}/`,
    },
    openGraph: {
      title: reply.metaTitle,
      description: reply.metaDescription,
      url: `https://kindreply.co/workplace/${reply.slug}/`,
      type: "article",
      publishedTime: reply.updatedAt,
      authors: ["Human Workplace"],
    },
    twitter: {
      card: "summary_large_image",
      title: reply.metaTitle,
      description: reply.metaDescription,
    },
  };
}

export default async function ReplyPage({ params }: Props) {
  const { slug } = await params;
  const reply = getReplyBySlug(slug);
  if (!reply) {
    notFound();
  }

  const related = getRelatedReplies(reply.related);

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: reply.h1,
            description: reply.metaDescription,
            url: `https://kindreply.co/workplace/${reply.slug}/`,
            datePublished: reply.updatedAt,
            dateModified: reply.updatedAt,
            author: {
              "@type": "Organization",
              name: "Human Workplace",
              url: "https://kindreply.co/",
            },
            publisher: {
              "@type": "Organization",
              name: "Human Workplace",
              url: "https://kindreply.co/",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://kindreply.co/workplace/${reply.slug}/`,
            },
          }),
        }}
      />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb + Header */}
        <section className="px-4 pt-8 pb-6 md:pt-12">
          <div className="mx-auto max-w-3xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="inline h-3.5 w-3.5 mx-1" />
              <Link
                href="/workplace/"
                className="hover:text-foreground transition-colors"
              >
                Workplace
              </Link>
              <ChevronRight className="inline h-3.5 w-3.5 mx-1" />
              <span className="text-foreground">{reply.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                {reply.categoryLabel}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {reply.readTime} read
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              {reply.h1}
            </h1>

            <p className="text-muted-foreground leading-relaxed">
              {reply.situation}
            </p>
          </div>
        </section>

        {/* Template */}
        <section className="px-4 py-8 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-stone-500" />
                The reply
              </h2>
              <CopyButton text={reply.template} label="Copy reply" />
            </div>
            <div className="rounded-xl border border-border bg-card p-5 md:p-6">
              <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">
                {reply.template}
              </pre>
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section className="px-4 py-8 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-5">
              <Lightbulb className="h-5 w-5 text-stone-500" />
              Why this works
            </h2>
            <ul className="space-y-3">
              {reply.whyItWorks.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Variations */}
        {reply.variations.length > 0 && (
          <section className="px-4 py-8 border-t border-border bg-muted/20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-lg font-semibold text-foreground mb-5">
                Different tones
              </h2>
              <div className="space-y-6">
                {reply.variations.map((variation, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium text-foreground">
                        {variation.label}
                      </h3>
                      <CopyButton text={variation.text} label="Copy" />
                    </div>
                    <div className="rounded-xl border border-border bg-card p-5">
                      <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">
                        {variation.text}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mistakes to avoid */}
        <section className="px-4 py-8 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-5">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Common mistakes to avoid
            </h2>
            <ul className="space-y-3">
              {reply.mistakes.map((mistake, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="text-amber-600 font-medium shrink-0">
                    {i + 1}.
                  </span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-8 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-5">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {reply.faq.map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Share Quote */}
        <section className="px-4 py-8 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-foreground mb-5">
              Share this
            </h2>
            <ShareQuote quote={reply.shareQuote} title={reply.title} />
          </div>
        </section>

        {/* Related Replies - Enhanced */}
        <RelatedReplies
          currentSlug={reply.slug}
          currentCategory={reply.category}
        />

        {/* Email Capture */}
        <EmailCapture
          title="Loved this reply?"
          description="Get new workplace templates delivered to your inbox. One email per week, no spam."
          context="inline"
        />

        {/* Related */}
        {related.length > 0 && (
          <section className="px-4 py-8 border-t border-border bg-muted/20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-lg font-semibold text-foreground mb-5">
                Related replies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/workplace/${r.slug}/`}
                    className="group rounded-xl border border-border bg-card p-4 hover:border-stone-300 hover:shadow-sm transition-all"
                  >
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {r.categoryLabel}
                    </span>
                    <h3 className="font-medium text-foreground mt-2 group-hover:text-stone-700 transition-colors">
                      {r.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to category */}
        <section className="px-4 py-8 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/workplace/"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Browse all workplace replies</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
