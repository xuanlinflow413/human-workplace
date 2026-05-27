import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories, replies } from "@/data/replies";
import { Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Workplace Replies — Human Workplace",
  description:
    "Browse all workplace reply templates. Resignation, burnout support, manager replies, difficult conversations, and layoff communication.",
  alternates: {
    canonical: "/workplace/",
  },
  openGraph: {
    title: "Workplace Replies — Human Workplace",
    description:
      "Browse all workplace reply templates. Resignation, burnout support, manager replies, and more.",
    url: "https://kindreply.co/workplace/",
  },
};

export default function WorkplacePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="px-4 pt-12 pb-8 md:pt-16">
          <div className="mx-auto max-w-5xl">
            <nav className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Workplace</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
              Workplace Replies
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Real replies for the hardest moments at work. Copy, personalize, and send with confidence.
            </p>
          </div>
        </section>

        {/* Categories */}
        {categories.map((cat) => {
          const catReplies = replies.filter((r) => r.category === cat.value);
          return (
            <section
              key={cat.value}
              id={cat.value}
              className="px-4 py-10 border-t border-border"
            >
              <div className="mx-auto max-w-5xl">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-lg font-semibold text-foreground">
                    {cat.label}
                  </h2>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {catReplies.length}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {cat.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catReplies.map((reply) => (
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
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {reply.situationShort}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-medium text-stone-600 group-hover:text-foreground transition-colors">
                        <span>Read reply</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
