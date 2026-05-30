import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Manager Cover Letter: From Agency to In-House",
  description:
    "A real project manager cover letter example that shows outcomes, not just deliverables. Plus FAQ and common mistakes.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-project-manager/",
  },
  openGraph: {
    title: "Project Manager Cover Letter: From Agency to In-House",
    description:
      "A real example that shows outcomes, not just deliverables. Plus FAQ and common mistakes.",
    url: "https://kindreply.co/cover-letter-for-project-manager/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Manager Cover Letter: From Agency to In-House",
    description: "A real example that shows outcomes, not just deliverables.",
  },
};

const letter = `Dear [Hiring Manager],

In my agency role I managed 14 concurrent projects with an average budget of $120K. The client satisfaction score was 94%, but I kept wondering what happened after launch. Did the feature actually solve the problem?

That is why I am drawn to [Company]'s approach of keeping PMs involved post-launch. I want to own outcomes, not just deliverables. I have read your product team's writing on iterative discovery — it matches how I have tried to work, but with more rigor.

I would love to show you how I reduced scope creep by 40% at my current agency using a framework I think could translate well to your team.

Best,\n[Your Name]`;

const whyWorks = [
  "Shows scale (14 projects, $120K average) without losing the human element",
  "Identifies a personal motivation that aligns with the company's approach",
  "References specific company practices (post-launch involvement, iterative discovery)",
  "Offers a specific, quantified improvement (40% reduction in scope creep)",
];

const mistakes = [
  {
    title: "Listing tools instead of outcomes",
    fix: "'Proficient in Jira, Asana, and Monday' means nothing. 'Reduced sprint planning time by 30% by restructuring Jira workflows' means something.",
  },
  {
    title: "Focusing on process over people",
    fix: "PMs who talk about 'agile ceremonies' and 'velocity metrics' sound like robots. Talk about how you helped a struggling engineer ship their first feature, or how you convinced a stubborn stakeholder to compromise.",
  },
  {
    title: "Claiming to 'manage stakeholders'",
    fix: "Everyone says this. Instead, describe a specific conflict you navigated. 'The design team wanted a full rebuild; the CEO wanted it shipped in two weeks. I proposed a phased approach that satisfied both.'",
  },
  {
    title: "Ignoring the product",
    fix: "A PM who does not mention the product sounds like a project coordinator. Show you understand what the company builds and why it matters.",
  },
];

const faqs = [
  {
    q: "Should I mention my PMP certification?",
    a: "Only if the role requires it. Many startups do not care about PMP. If you mention it, pair it with an outcome: 'PMP-certified PM who reduced project overruns by 25%.'",
  },
  {
    q: "How do I transition from agency to in-house?",
    a: "Frame it as wanting ownership. Agency PMs ship and move on; in-house PMs live with the consequences. Show you want that accountability.",
  },
  {
    q: "What metrics should I include?",
    a: "On-time delivery rate, budget variance, stakeholder satisfaction, team velocity improvements, or scope creep reduction. Choose metrics that match the role's priorities.",
  },
  {
    q: "How technical should a PM cover letter be?",
    a: "Technical enough to show you can talk to engineers, not so technical that you seem like you want to be one. Understand the architecture; do not try to design it.",
  },
  {
    q: "Should I mention soft skills?",
    a: "Only through stories. 'Strong communication skills' is empty. 'I presented a controversial roadmap to the board and secured buy-in by framing it around revenue impact' is proof.",
  },
];

export default function ProjectManagerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Project Manager Cover Letter
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            A real example that shows outcomes, not just deliverables. Plus FAQ
            and common mistakes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          The PM Who Wants Ownership
        </h2>
        <p className="mt-4 text-[#4A4A4A]">
          Most PM cover letters read like process manuals. They list
          methodologies, tools, and certifications. They forget that project
          management is fundamentally about people — getting them to agree,
          getting them to ship, getting them to care.
        </p>
        <p className="mt-4 text-[#4A4A4A]">
          This example is from a PM moving from agency work to an in-house
          product team. The key shift: from delivering projects to owning
          outcomes.
        </p>

        <div className="mt-8 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B]">
            Example — Agency PM to In-House Product Team
          </p>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#1A1A1A]">
            {letter}
          </pre>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Why This Works</h3>
          <ul className="mt-2 space-y-1.5">
            {whyWorks.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[#4A4A4A]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            What Makes a PM Cover Letter Stand Out
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                1. Show you understand the product
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Mention a specific feature, a recent launch, or a blog post. PMs
                who do not reference the product sound like they are applying to
                any PM role, not this one.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                2. Tell a conflict story
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                PMs exist to resolve tension — between speed and quality,
                between design and engineering, between stakeholders and users.
                Show you have done this.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                3. Quantify the human impact
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                "Reduced meeting time by 20%" is fine. "Gave engineers back 4
                hours per week for deep work" is better. Frame metrics around
                people, not just processes.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                4. Show you can say no
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                The best PMs protect their teams from scope creep. Describe a
                time you pushed back on a request and what happened.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">Common Mistakes</h2>
          <div className="mt-8 space-y-6">
            {mistakes.map((m, i) => (
              <div key={i} className="rounded-lg border border-[#E5E5E5] bg-white p-5">
                <h3 className="font-medium text-[#1A1A1A]">{m.title}</h3>
                <p className="mt-1 text-sm text-[#6B6B6B]">{m.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="rounded-lg border border-[#E5E5E5]">
                <summary className="cursor-pointer px-6 py-4 font-medium text-[#1A1A1A]">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">More Resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/cover-letter-examples/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Cover Letter Examples</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Five examples for different situations
              </p>
            </Link>
            <Link
              href="/cover-letter-with-no-experience/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
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
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Career Change Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Pivot without starting over
              </p>
            </Link>
            <Link
              href="/cover-letter-for-software-engineer/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Software Engineer Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Junior, senior, and startup examples
              </p>
            </Link>
            <Link
              href="/cover-letter-writer/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">AI Cover Letter Writer</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Generate a personalized draft in 60 seconds
              </p>
            </Link>
            <Link
              href="/job-search/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
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
