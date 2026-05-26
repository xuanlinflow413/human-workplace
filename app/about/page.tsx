import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About — Human Workplace",
  description:
    "Human Workplace is a curated collection of real, professional, and emotionally intelligent workplace replies. No AI templates. No fluff.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About — Human Workplace",
    description:
      "A curated collection of real, professional, and emotionally intelligent workplace replies.",
    url: "https://human-workplace.pages.dev/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="px-4 pt-12 pb-8 md:pt-16">
          <div className="mx-auto max-w-3xl">
            <nav className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">About</span>
            </nav>

            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              About Human Workplace
            </h1>

            <div className="prose prose-stone max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Human Workplace is a curated collection of real, professional, and
                emotionally intelligent workplace replies. We believe that the hardest
                moments at work — resigning, addressing burnout, giving feedback, or
                navigating layoffs — deserve words that are both effective and human.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Why we exist
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most template sites give you generic, robotic text that sounds like it
                was written by a chatbot. We write replies that sound like a real person
                wrote them — because they are. Every reply is grounded in a real
                workplace situation, written with emotional intelligence, and designed
                to preserve relationships while getting the job done.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Our principles
              </h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-stone-500 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Quality over quantity.</strong>{" "}
                    We would rather have 10 excellent replies than 100 mediocre ones.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-stone-500 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Realism over templates.</strong>{" "}
                    Every reply feels like it was written by someone who has actually
                    been in that situation.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-stone-500 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Emotional intelligence.</strong>{" "}
                    We explain why each reply works, so you learn, not just copy.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-stone-500 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Multiple tones.</strong>{" "}
                    Formal, personal, or somewhere in between — choose what fits your
                    workplace culture.
                  </span>
                </li>
              </ul>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                What we cover
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our first release focuses on the Workplace category — the most common
                and emotionally charged situations professionals face. This includes
                resignation, burnout support, manager replies, difficult conversations,
                and layoff communication.
              </p>

              <h2 className="text-lg font-semibold text-foreground mt-8 mb-3">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a suggestion for a reply we should add? Found something that could
                be better? We would love to hear from you. Reach out at{" "}
                <a
                  href="mailto:hello@human-workplace.pages.dev"
                  className="text-foreground underline underline-offset-2 hover:text-stone-600"
                >
                  hello@human-workplace.pages.dev
                </a>
                .
              </p>

              <Link
                href="/workplace/"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                <span>Browse all replies</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
