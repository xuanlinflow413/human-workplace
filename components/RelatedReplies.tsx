import Link from "next/link";
import { getAllReplies, getReplyBySlug } from "@/data/replies";

interface RelatedRepliesProps {
  currentSlug: string;
  currentCategory: string;
}

export default function RelatedReplies({
  currentSlug,
  currentCategory,
}: RelatedRepliesProps) {
  const allReplies = getAllReplies();

  // Get 3 same-category replies (excluding current)
  const sameCategory = allReplies
    .filter((r) => r.category === currentCategory && r.slug !== currentSlug)
    .slice(0, 3);

  // If less than 3, fill with other popular ones
  const related =
    sameCategory.length >= 3
      ? sameCategory
      : [
          ...sameCategory,
          ...allReplies
            .filter(
              (r) => r.slug !== currentSlug && !sameCategory.includes(r)
            )
            .slice(0, 3 - sameCategory.length),
        ];

  if (related.length === 0) return null;

  return (
    <section className="border-t border-[#E5E5E5] bg-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-xl font-bold text-[#1A1A1A]">
          Related Workplace Situations
        </h2>
        <p className="mt-1 text-sm text-[#6B6B6B]">
          More templates for navigating work with confidence
        </p>

        <div className="mt-6 space-y-3">
          {related.map((reply) => (
            <Link
              key={reply.slug}
              href={`/workplace/${reply.slug}/`}
              className="flex items-start gap-4 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] p-4 transition hover:border-[#1A1A1A]"
            >
              <span className="mt-0.5 inline-block shrink-0 rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-[#6B6B6B] border border-[#E5E5E5]">
                {reply.categoryLabel}
              </span>
              <div>
                <h3 className="font-medium text-[#1A1A1A]">{reply.title}</h3>
                <p className="mt-0.5 text-sm text-[#6B6B6B]">
                  {reply.situationShort}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
