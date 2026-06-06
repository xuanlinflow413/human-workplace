import Link from "next/link";
import { getAllReplies } from "@/data/replies";

export default function PopularWorkplaceSituations() {
  const replies = getAllReplies();

  // Pick 8 most popular/important situations for the homepage
  const popularSlugs = [
    "how-to-resign-gracefully",
    "two-weeks-notice-email",
    "asking-for-help-at-work",
    "telling-your-boss-youre-overwhelmed",
    "how-to-ask-for-a-mental-health-day",
    "giving-negative-feedback-that-lands-well",
    "how-to-say-no-to-unpaid-overtime",
    "how-to-communicate-layoffs-to-your-team",
  ];

  const popular = popularSlugs
    .map((slug) => replies.find((r) => r.slug === slug))
    .filter(Boolean);

  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
            Popular Workplace Situations
          </h2>
          <p className="mt-3 text-lg text-[#6B6B6B]">
            Real templates for the moments that matter at work
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((reply) => (
            <Link
              key={reply!.slug}
              href={`/workplace/${reply!.slug}/`}
              className="group rounded-xl border border-[#E5E5E5] bg-white p-5 transition hover:border-[#1A1A1A] hover:shadow-sm"
            >
              <span className="inline-block rounded-full bg-[#F8F6F2] px-3 py-1 text-xs font-medium text-[#6B6B6B]">
                {reply!.categoryLabel}
              </span>
              <h3 className="mt-3 text-base font-semibold text-[#1A1A1A] group-hover:text-[#333]">
                {reply!.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-[#6B6B6B]">
                {reply!.situationShort}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/workplace/"
            className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
          >
            Browse All 25 Workplace Situations
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
