import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AI_PRD_Generator from "./AI_PRD_Generator";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindreply.co"),
  title: "AI PRD Generator — Create Product Requirement Documents for AI Coding",
  description:
    "Generate structured PRDs for Claude Code, Cursor, Bolt and other AI coding tools. Free online AI PRD generator with Markdown export.",
  keywords: [
    "AI PRD generator",
    "product requirements document",
    "PRD for AI coding",
    "Claude Code PRD",
    "Cursor PRD",
    "Bolt PRD template",
    "vibe coding PRD",
    "AI coding documentation",
    "free PRD generator",
    "Markdown PRD export",
  ],
  authors: [{ name: "KindReply" }],
  creator: "KindReply",
  publisher: "KindReply",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kindreply.co/ai-prd-generator/",
    siteName: "KindReply",
    title: "AI PRD Generator — Create Product Requirement Documents for AI Coding",
    description:
      "Generate structured PRDs for Claude Code, Cursor, Bolt and other AI coding tools. Free online AI PRD generator with Markdown export.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI PRD Generator — Create Product Requirement Documents for AI Coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PRD Generator — Create Product Requirement Documents for AI Coding",
    description:
      "Generate structured PRDs for Claude Code, Cursor, Bolt and other AI coding tools. Free online AI PRD generator with Markdown export.",
    creator: "@kindreply",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://kindreply.co/ai-prd-generator/",
  },
};

const faqs = [
  {
    question: "What is an AI PRD?",
    answer:
      "An AI PRD (Product Requirements Document) is a structured document specifically designed to be fed into AI coding tools like Claude Code, Cursor, Bolt, or v0. Unlike traditional PRDs written for human engineers, an AI PRD uses concise, structured language that helps AI assistants understand exactly what to build, reducing misinterpretation and inconsistent output.",
  },
  {
    question: "Is this AI PRD generator free to use?",
    answer:
      "Yes, the AI PRD Generator is completely free to use. No signup, no payment, no limits. You can generate as many PRDs as you need, and all your inputs are saved locally in your browser using LocalStorage.",
  },
  {
    question: "Which AI coding tools work with these PRDs?",
    answer:
      "The PRDs generated here work with any AI coding assistant that accepts text instructions. This includes Claude Code, Cursor, Bolt, v0, GitHub Copilot Chat, Replit Agent, and any other tool where you paste a prompt or context document. The Markdown format ensures universal compatibility.",
  },
  {
    question: "How is an AI PRD different from a traditional PRD?",
    answer:
      "Traditional PRDs are often lengthy, narrative documents written for human stakeholders. AI PRDs are concise, structured, and optimized for LLM consumption. They focus on clear feature definitions, explicit user flows, and unambiguous technical requirements — the things AI coding tools need to generate accurate code.",
  },
  {
    question: "Can I save my PRDs and come back later?",
    answer:
      "Yes. All your inputs are automatically saved to your browser's LocalStorage. You can close the tab, come back later, and your data will still be there. You can also download your generated PRD as a .md file for permanent storage.",
  },
  {
    question: "What types of products can I create PRDs for?",
    answer:
      "Currently, the generator supports Web Apps, Mobile Apps, and Chrome Extensions. Each template is tailored to the specific requirements of that product type. We plan to add more templates (APIs, SaaS platforms, marketplaces) based on user feedback.",
  },
  {
    question: "Do I need technical knowledge to use this tool?",
    answer:
      "No. The tool guides you through a series of simple questions about your product. You don't need to know how to code or write technical documents. The generator transforms your answers into a professional, structured PRD automatically.",
  },
  {
    question: "Can I edit the generated PRD after it's created?",
    answer:
      "Absolutely. The generated PRD is displayed in Markdown format, which you can copy and edit in any text editor. You can also regenerate the PRD at any time by changing your answers and clicking Generate again.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kindreply.co/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI PRD Generator",
      item: "https://kindreply.co/ai-prd-generator/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AIPRDGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pt-16 pb-10 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <span>Free tool — no signup required</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
              AI PRD Generator
              <span className="text-stone-500">
                {" "}
                — Create AI-Ready Product Requirements Documents
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Answer a few questions and generate a structured PRD for Claude
              Code, Cursor, Bolt, and other AI coding tools.
            </p>
            <a
              href="#tool"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
            >
              <span>Generate Your PRD</span>
            </a>
          </div>
        </section>

        {/* Tool Section */}
        <section id="tool" className="px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <AI_PRD_Generator />
          </div>
        </section>

        {/* What Is an AI PRD? */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What Is an AI PRD?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An AI PRD (Product Requirements Document) is a structured document
              designed specifically for AI coding assistants. As vibe coding and
              AI-assisted development become mainstream, developers need a
              reliable way to communicate their product vision to tools like{" "}
              <strong>Claude Code</strong>, <strong>Cursor</strong>,{" "}
              <strong>Bolt</strong>, and <strong>v0</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike traditional PRDs that are written for human engineering
              teams, AI PRDs are optimized for LLM consumption. They use concise,
              structured language with clear feature definitions, explicit user
              flows, and unambiguous technical requirements. This reduces
              misinterpretation and helps AI tools generate more accurate,
              consistent code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The key difference is <strong>precision over prose</strong>. Where
              a traditional PRD might say "the user should be able to easily
              search for items," an AI PRD specifies "Search bar in header,
              debounced input (300ms), filters by category/price/date, results
              displayed in 12-column grid with pagination (20 items/page)."
            </p>
          </div>
        </section>

        {/* How to Use AI PRDs With Claude Code */}
        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to Use AI PRDs With Claude Code
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Generate your PRD
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form above with your product details. The
                    generator will create a structured Markdown PRD tailored to
                    your product type.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Copy the PRD
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Click the Copy button to copy the entire PRD to your
                    clipboard. Or download it as a .md file for later use.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Paste into Claude Code
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Start a new Claude Code session and paste the PRD as your
                    initial prompt. Use a command like: "Build this product
                    according to the following PRD" followed by the pasted
                    document.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Iterate with context
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    As Claude builds, reference specific sections of the PRD for
                    corrections. "According to the User Flow section, the login
                    should come before onboarding, not after."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI PRD vs Traditional PRD */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              AI PRD vs Traditional PRD
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      Aspect
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      Traditional PRD
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">
                      AI PRD
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground font-medium">
                      Audience
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Human engineers, PMs, stakeholders
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      AI coding assistants (Claude, Cursor, etc.)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground font-medium">
                      Style
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Narrative, contextual, prose-heavy
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Structured, concise, explicit
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground font-medium">
                      Length
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Often 10-50 pages
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      1-3 pages, dense information
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground font-medium">
                      Feature specs
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      High-level descriptions
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Explicit inputs, outputs, states, errors
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground font-medium">
                      User flows
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Diagrams and narratives
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Step-by-step sequences with conditions
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground font-medium">
                      Tech stack
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Often omitted or vague
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Explicit framework, DB, auth, hosting
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground font-medium">
                      Success metrics
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Business KPIs
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Technical + user experience metrics
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-border bg-card overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors list-none">
                    <span>{faq.question}</span>
                    <svg
                      className="h-4 w-4 text-muted-foreground shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="px-4 py-12 border-t border-border">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              More Tools from KindReply
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/job-search/"
                className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors mb-1">
                  Job Search
                </h3>
                <p className="text-sm text-muted-foreground">
                  Resources and tools to help you land your next role.
                </p>
              </Link>
              <Link
                href="/cover-letter-examples/"
                className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors mb-1">
                  Cover Letter Examples
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional cover letter templates for every situation.
                </p>
              </Link>
              <Link
                href="/type-and-release/"
                className="group rounded-xl border border-border bg-card p-5 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-stone-700 transition-colors mb-1">
                  Type & Release
                </h3>
                <p className="text-sm text-muted-foreground">
                  A private space to write it down before you send it.
                </p>
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </div>
  );
}
