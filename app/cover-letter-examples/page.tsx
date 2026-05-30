import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cover Letter Examples That Got Interviews in 2025",
  description:
    "Five real cover letter examples for career changes, entry-level, senior roles, and more. Each one explains why it works — so you can write your own.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-examples/",
  },
  openGraph: {
    title: "Cover Letter Examples That Got Interviews in 2025",
    description:
      "Five real cover letter examples with explanations of why they work. Copy the structure, not the words.",
    url: "https://kindreply.co/cover-letter-examples/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cover Letter Examples That Got Interviews in 2025",
    description:
      "Five real cover letter examples with explanations of why they work.",
  },
};

const examples = [
  {
    label: "Career Change",
    situation:
      "Moving from marketing to product management after three years of running customer research campaigns.",
    letter: `Dear [Hiring Manager],

Last quarter I interviewed 12 customers who had churned. The insight that drove our 34% conversion increase came from those conversations — not from our analytics dashboard. That is when I realized I want to build products, not just market them.

I have spent three years at the intersection of customer insight and revenue. I know how to ask questions that reveal real pain points, and I know how to translate those insights into features that drive outcomes. At [Company], I would bring that same rigor to your product team.

I would welcome the chance to show you how my background in conversion optimization could accelerate your onboarding flow. Would you be open to a 20-minute conversation next week?

Best,\n[Your Name]`,
    why: [
      "Opens with a specific, quantified accomplishment (34% increase)",
      "Addresses the career change directly without apologizing",
      "Shows transferable skills rather than saying 'I am a fast learner'",
      "Ends with a specific ask, not a passive 'hope to hear from you'",
    ],
  },
  {
    label: "Entry-Level / No Experience",
    situation:
      "Recent graduate applying for a software engineering role with no professional experience.",
    letter: `Dear [Hiring Manager],

While completing my Computer Science degree, I built a Chrome extension that helps students track assignment deadlines. It has 2,400 active users and a 4.8-star rating. The most common feedback: 'This is the only app that does not make me feel bad about procrastinating.'

I think a lot about how software makes people feel. Your blog post about reducing cognitive load in the first 30 seconds of onboarding resonated with me — that is exactly the kind of user-centered thinking I want to learn from your team.

I have attached my resume and a link to my GitHub. I would love to discuss how I could contribute.

Best,\n[Your Name]`,
    why: [
      "Leads with proof of work, not a list of coursework",
      "Shows the product is real (2,400 users, 4.8 stars)",
      "References a specific company blog post — shows genuine interest",
      "Tone is confident without being arrogant",
    ],
  },
  {
    label: "Senior / Leadership",
    situation:
      "Senior Sales Director with 8 years of experience, applying to a Series B startup.",
    letter: `Dear [Hiring Manager],

In my current role I grew enterprise revenue from $2.1M to $8.7M ARR in 18 months. The strategy was not complex: I stopped selling to procurement and started selling to the people who actually use the product.

Your recent shift to product-led growth tells me [Company] understands the same principle. I have built and scaled three enterprise sales teams from scratch. I know the difference between a team that hits quota and one that builds genuine customer partnerships.

I have included three case studies that show the exact playbooks I would bring. Would you be open to reviewing them over a brief call?

Best,\n[Your Name]`,
    why: [
      "Leads with revenue numbers, not years of experience",
      "Shows strategic thinking, not just tactical execution",
      "References the company's business model shift",
      "Offers concrete value (case studies) before asking for time",
    ],
  },
  {
    label: "Software Engineer",
    situation:
      "Mid-level developer applying to a startup after leaving a big tech company.",
    letter: `Dear [Hiring Manager],

At [Big Tech Co] I maintained a payment processing system that handled $40M in transactions monthly. It was reliable, well-documented, and boring. I want to build something from zero to one.

I have been following [Company] since your launch on Hacker News last March. The decision to open-source your routing layer took guts — and it tells me you prioritize developer trust over proprietary control. That is the kind of team I want to join.

I have included a link to a side project where I rebuilt a simplified version of your API in Go. It helped me understand your architecture decisions. I would love to walk you through it.

Best,\n[Your Name]`,
    why: [
      "Acknowledges the scale of previous work without bragging",
      "Shows genuine interest in the company's values",
      "Demonstrates initiative by studying the product architecture",
      "Side project proves technical curiosity",
    ],
  },
  {
    label: "Project Manager",
    situation:
      "PM moving from agency work to an in-house product team at a SaaS company.",
    letter: `Dear [Hiring Manager],

In my agency role I managed 14 concurrent projects with an average budget of $120K. The client satisfaction score was 94%, but I kept wondering what happened after launch. Did the feature actually solve the problem?

That is why I am drawn to [Company]'s approach of keeping PMs involved post-launch. I want to own outcomes, not just deliverables. I have read your product team's writing on iterative discovery — it matches how I have tried to work, but with more rigor.

I would love to show you how I reduced scope creep by 40% at my current agency using a framework I think could translate well to your team.

Best,\n[Your Name]`,
    why: [
      "Shows the problem with current role (wants ownership, not just delivery)",
      "References specific company practices (post-launch involvement)",
      "Quantifies past work (14 projects, $120K average, 94% satisfaction)",
      "Offers a specific framework as proof of value",
    ],
  },
];

const mistakes = [
  {
    title: "Starting with 'I am writing to apply'",
    fix: "The hiring manager already knows you are applying. Start with proof of value instead.",
  },
  {
    title: "Repeating your resume in paragraph form",
    fix: "Your cover letter should add context, not duplicate facts. Tell a story your resume cannot.",
  },
  {
    title: "Generic flattery about the company",
    fix: "'I admire your innovative culture' means nothing. Reference a specific product, blog post, or decision.",
  },
  {
    title: "Passive endings",
    fix: "'I look forward to hearing from you' puts the burden on them. Propose a specific next step.",
  },
  {
    title: "Using AI-generated corporate speak",
    fix: "'Leverage my synergistic skill set' sounds like a chatbot. Write like a human who wants this job.",
  },
];

const faqs = [
  {
    q: "How long should a cover letter be?",
    a: "250-400 words. Hiring managers spend about 7 seconds on the first scan. If it is longer than one page, it will not get read.",
  },
  {
    q: "Should I address the hiring manager by name?",
    a: "Yes, if you can find it. Check the job posting, LinkedIn, or the team page. 'Dear Hiring Manager' is acceptable but impersonal.",
  },
  {
    q: "Do I need a cover letter if the posting says it is optional?",
    a: "Absolutely. 'Optional' usually means 'required for candidates we take seriously.' It is often the tiebreaker.",
  },
  {
    q: "Can I use the same cover letter for multiple jobs?",
    a: "Use the same structure, never the same content. Each company has different challenges. A generic letter signals generic interest.",
  },
  {
    q: "What if I have no relevant experience?",
    a: "Lead with what you have built, fixed, or improved — even if it was a side project or school assignment. Show proof of work.",
  },
];

export default function CoverLetterExamplesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Cover Letter Examples That Got Interviews
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            Five real examples for different situations. Each one explains why it
            works — so you can write your own.
          </p>
          <div className="mt-8">
            <Link
              href="/cover-letter-writer/"
              className="inline-flex items-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#333]"
            >
              Write Your Cover Letter Now
            </Link>
          </div>
        </div>
      </section>

      {/* Examples */}
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

      {/* Mistakes */}
      <section className="border-t border-[#E5E5E5] bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Common Cover Letter Mistakes
          </h2>
          <div className="mt-8 space-y-6">
            {mistakes.map((m, i) => (
              <div key={i} className="rounded-lg border border-[#E5E5E5] p-5">
                <h3 className="font-medium text-[#1A1A1A]">{m.title}</h3>
                <p className="mt-1 text-sm text-[#6B6B6B]">{m.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="rounded-lg border border-[#E5E5E5] bg-white"
              >
                <summary className="cursor-pointer px-6 py-4 font-medium text-[#1A1A1A]">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-sm text-[#4A4A4A]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="border-t border-[#E5E5E5] bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            More Cover Letter Resources
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/cover-letter-with-no-experience/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Cover Letter With No Experience
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Entry-level strategies that actually work
              </p>
            </Link>
            <Link
              href="/cover-letter-for-career-change/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Cover Letter for Career Change
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                How to pivot without starting over
              </p>
            </Link>
            <Link
              href="/cover-letter-for-software-engineer/"
              className="rounded-lg border border-[#E5E5E5] p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Software Engineer Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Junior, senior, and startup examples
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
              <p className="font-medium text-[#1A1A1A]">
                AI Cover Letter Writer
              </p>
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
                All our job search resources in one place
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[#4A4A4A]">
            Ready to write your own? Our cover letter writer helps you craft a
            personalized letter in under 60 seconds.
          </p>
          <Link
            href="/cover-letter-writer/"
            className="mt-6 inline-flex items-center rounded-full bg-[#1A1A1A] px-8 py-4 text-base font-medium text-white transition hover:bg-[#333]"
          >
            Try the Cover Letter Writer
          </Link>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
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
