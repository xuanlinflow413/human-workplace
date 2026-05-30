import type { Metadata } from "next";
import Link from "next/link";
import { categories, getRepliesByCategory } from "@/data/replies";

export const metadata: Metadata = {
  title: "Workplace Situation Categories | KindReply",
  description:
    "Browse workplace communication templates by category. Find the right words for resignation, burnout, difficult conversations, manager situations, and layoffs.",
  keywords: [
    "workplace situations",
    "work communication templates",
    "resignation templates",
    "burnout support",
    "difficult conversations at work",
    "manager email templates",
    "layoff communication",
  ],
  alternates: {
    canonical: "https://kindreply.co/workplace/categories/",
  },
  openGraph: {
    title: "Workplace Situation Categories | KindReply",
    description:
      "Browse workplace communication templates by category. Find the right words for every difficult moment at work.",
    url: "https://kindreply.co/workplace/categories/",
    siteName: "KindReply",
    type: "website",
  },
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Workplace Situation Categories
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            Find the right words for every difficult moment at work. Browse by
            category or explore all 25 situations.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const replies = getRepliesByCategory(cat.value);
            return (
              <div
                key={cat.value}
                className="rounded-xl border border-[#E5E5E5] bg-white p-6 transition hover:border-[#1A1A1A] hover:shadow-sm"
              >
                <h2 className="text-xl font-bold text-[#1A1A1A]">
                  {cat.label}
                </h2>
                <p className="mt-1 text-sm text-[#6B6B6B]">{cat.description}</p>

                <div className="mt-4 space-y-2">
                  {replies.slice(0, 4).map((reply) => (
                    <Link
                      key={reply.slug}
                      href={`/workplace/${reply.slug}/`}
                      className="block rounded-lg bg-[#FAFAFA] px-4 py-3 text-sm font-medium text-[#1A1A1A] transition hover:bg-[#F0F0F0]"
                    >
                      {reply.title}
                    </Link>
                  ))}
                  {replies.length > 4 && (
                    <p className="px-4 text-xs text-[#9B9B9B]">
                      +{replies.length - 4} more in this category
                    </p>
                  )}
                </div>

                <Link
                  href={`/workplace/?category=${cat.value}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1A1A1A] hover:underline"
                >
                  View all {replies.length} {cat.label.toLowerCase()} templates
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* All Situations Link */}
      <section className="border-t border-[#E5E5E5] bg-white px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-[#1A1A1A]">
            Not sure where to start?
          </h2>
          <p className="mt-2 text-[#6B6B6B]">
            Browse all 25 workplace situations in one place.
          </p>
          <Link
            href="/workplace/"
            className="mt-6 inline-flex items-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#333]"
          >
            Browse All Workplace Situations
          </Link>
        </div>
      </section>
    </main>
  );
}
