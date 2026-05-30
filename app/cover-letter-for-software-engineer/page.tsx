import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Engineer Cover Letter: Junior, Senior, Startup",
  description:
    "Three real software engineer cover letter examples — junior, senior, and startup. Each shows what hiring managers actually want to see.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-software-engineer/",
  },
  openGraph: {
    title: "Software Engineer Cover Letter: Junior, Senior, Startup",
    description:
      "Three real examples for different career stages. What hiring managers actually want to see.",
    url: "https://kindreply.co/cover-letter-for-software-engineer/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer Cover Letter: Junior, Senior, Startup",
    description: "Three real examples for different career stages.",
  },
};

const examples = [
  {
    label: "Junior Engineer",
    situation:
      "Recent bootcamp graduate applying to a mid-sized SaaS company.",
    letter: `Dear [Hiring Manager],

I built a real-time chat app for a bootcamp capstone project. It handles 500 concurrent connections, uses WebSockets for live messaging, and has a test suite with 87% coverage. The hardest bug took me three days — a race condition in the message ordering logic that only appeared under load.

I have been following [Company] since your engineering blog post about migrating from REST to GraphQL. The trade-off analysis you shared — specifically the decision to accept N+1 queries for simpler client code — made me realize you prioritize developer experience over theoretical purity. That is the kind of team I want to learn from.

I have included a link to the chat app repo and a write-up of how I debugged the race condition. I would love to discuss how I could contribute to your team.

Best,\n[Your Name]`,
    why: [
      "Shows technical depth with specific numbers (500 connections, 87% coverage)",
      "References a specific technical blog post, not generic company praise",
      "Mentions a real debugging challenge, not just completed features",
      "Includes proof (repo + write-up) rather than promising to learn",
    ],
  },
  {
    label: "Senior Engineer",
    situation:
      "Senior developer leaving big tech for a Series B startup.",
    letter: `Dear [Hiring Manager],

At [Big Tech Co] I maintained a payment processing system that handled $40M in transactions monthly. It was reliable, well-documented, and boring. I want to build something from zero to one.

I have been following [Company] since your launch on Hacker News last March. The decision to open-source your routing layer took guts — and it tells me you prioritize developer trust over proprietary control. That is the kind of team I want to join.

I have included a link to a side project where I rebuilt a simplified version of your API in Go. It helped me understand your architecture decisions. I would love to walk you through it.

Best,\n[Your Name]`,
    why: [
      "Acknowledges scale without bragging ($40M monthly)",
      "Shows motivation (wants to build, not maintain)",
      "References a specific public decision (open-sourcing routing layer)",
      "Side project proves genuine interest in the company's tech",
    ],
  },
  {
    label: "Startup Engineer",
    situation:
      "Full-stack developer applying to an early-stage startup as the first engineering hire.",
    letter: `Dear [Founder],

I was employee #4 at my last startup. I built the entire auth system, the billing integration, and the admin dashboard. When we hit product-market fit, I had three days to scale the database from 1,000 to 50,000 daily active users. We made it, but I learned that scaling under pressure requires different skills than building features calmly.

[Company] is at the stage where every engineering decision compounds. The auth system you choose now will be painful to change at 100,000 users. The API design you settle on will determine how fast you can ship integrations. I have made these mistakes before and learned from them.

I would love to help you avoid the pitfalls I fell into and build something that scales smoothly.

Best,\n[Your Name]`,
    why: [
      "Shows startup experience (employee #4, built core systems)",
      "Demonstrates scaling under pressure (1K to 50K users in 3 days)",
      "Shows strategic thinking about early technical decisions",
      "Frames past mistakes as valuable experience, not failures",
    ],
  },
];

const faqs = [
  {
    q: "Should I include code samples in my cover letter?",
    a: "No. Link to your GitHub or a specific project instead. The cover letter should tell a story; the code should speak for itself.",
  },
  {
    q: "How technical should a software engineer cover letter be?",
    a: "Technical enough to show you understand the domain, but not so technical that a non-engineering hiring manager gets lost. Assume the first reader might be a recruiter.",
  },
  {
    q: "Should I mention specific technologies?",
    a: "Only if they are relevant to the role. 'I have 5 years of React experience' is weak. 'I migrated a React codebase to Next.js and reduced bundle size by 40%' is strong.",
  },
  {
    q: "What if I am self-taught?",
    a: "That is an asset, not a liability. Self-taught engineers often have stronger debugging skills and more diverse project experience. Lead with what you have built.",
  },
  {
    q: "How do I stand out among hundreds of applicants?",
    a: "Show you have used the company's product. Mention a specific bug you found, a feature you love, or an architectural decision you read about. Genuine interest is rare.",
  },
];

export default function SoftwareEngineerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Software Engineer Cover Letter Examples
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            Three real examples — junior, senior, and startup. What hiring
            managers actually want to see.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-16">
          {examples.map((ex, i) => (
            <article key={i}>
              <div className="mb-4">
                <span className="text-xs font-medium uppercase tracking-wide text-[#6B6B6B]">
                  Example {i + 1}: {ex.label}
                </span>
                <p className="mt-1 text-sm text-[#6B6B6B]">{ex.situation}</p>
              </div>

              <div className="rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#1A1A1A]">
                  {ex.letter}
                </pre>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-[#1A1A1A]">
                  Why This Works
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {ex.why.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-[#4A4A4A]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="rounded-lg border border-[#E5E5E5] bg-white">
                <summary className="cursor-pointer px-6 py-4 font-medium text-[#1A1A1A]">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">More Resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/cover-letter-examples/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Cover Letter Examples</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Five examples for different situations
              </p>
            </Link>
            <Link
              href="/cover-letter-with-no-experience/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Cover Letter With No Experience
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Entry-level strategies that work
              </p>
            </Link>
            <Link
              href="/cover-letter-for-career-change/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Career Change Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Pivot without starting over
              </p>
            </Link>
            <Link
              href="/cover-letter-for-project-manager/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Project Manager Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                From agency to in-house
              </p>
            </Link>
            <Link
              href="/cover-letter-writer/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">AI Cover Letter Writer</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Generate a personalized draft in 60 seconds
              </p>
            </Link>
            <Link
              href="/job-search/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Job Search Hub</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                All our job search resources
              </p>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
