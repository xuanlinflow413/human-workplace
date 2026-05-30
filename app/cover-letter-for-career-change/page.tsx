import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a Cover Letter for Career Change",
  description:
    "Changing careers? Do not apologize for your past. Show how your existing skills transfer. Real example + FAQ for career pivoters.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-career-change/",
  },
  openGraph: {
    title: "How to Write a Cover Letter for Career Change",
    description:
      "Do not apologize for your past. Show how your existing skills transfer. Real example + FAQ.",
    url: "https://kindreply.co/cover-letter-for-career-change/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Cover Letter for Career Change",
    description:
      "Do not apologize for your past. Show how your existing skills transfer.",
  },
};

const letter = `Dear [Hiring Manager],

Last quarter I interviewed 12 customers who had churned. The insight that drove our 34% conversion increase came from those conversations — not from our analytics dashboard. That is when I realized I want to build products, not just market them.

I have spent three years at the intersection of customer insight and revenue. I know how to ask questions that reveal real pain points, and I know how to translate those insights into features that drive outcomes. At [Company], I would bring that same rigor to your product team.

I would welcome the chance to show you how my background in conversion optimization could accelerate your onboarding flow. Would you be open to a 20-minute conversation next week?

Best,\n[Your Name]`;

const mistakes = [
  {
    title: "Apologizing for your past career",
    fix: "Do not say 'I know I am coming from a different background.' Frame your past as an asset, not a liability.",
  },
  {
    title: "Listing transferable skills without proof",
    fix: "'I have strong communication skills' means nothing. 'I presented to the board monthly and secured $2M in funding' means everything.",
  },
  {
    title: "Hiding the career change",
    fix: "Address it head-on in the first paragraph. The hiring manager will notice anyway. Control the narrative.",
  },
  {
    title: "Asking for a chance to prove yourself",
    fix: "'Give me a chance' is begging. Show you have already done the work. Side projects, certifications, or volunteer roles all count.",
  },
];

const faqs = [
  {
    q: "How do I explain a career change without looking flaky?",
    a: "Frame it as evolution, not escape. 'I realized my favorite part of marketing was understanding user behavior, so I decided to focus on that full-time.' This shows intention, not impulsiveness.",
  },
  {
    q: "Should I mention my salary history?",
    a: "No. Your previous salary is irrelevant to your new role. If asked, redirect: 'I am looking for a role that matches the market rate for this position and my transferable skills.'",
  },
  {
    q: "Do I need to go back to school?",
    a: "Not always. Many career changers succeed with bootcamps, certifications, or self-directed projects. What matters is proof of skill, not the credential.",
  },
  {
    q: "How do I handle gaps in my resume?",
    a: "Be honest and brief. 'I spent six months learning Python and building a portfolio of three projects' is better than leaving a gap unexplained.",
  },
  {
    q: "What if I am changing industries completely?",
    a: "Find the overlap. A teacher moving to UX has classroom observation skills. A nurse moving to project management has triage experience. Map your old skills to the new role.",
  },
];

export default function CareerChangePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            How to Write a Cover Letter for Career Change
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            Do not apologize for your past. Show how your existing skills
            transfer. Here is how.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          The Career Change Opening
        </h2>
        <p className="mt-4 text-[#4A4A4A]">
          The biggest mistake career changers make is hiding the transition.
          They write a generic cover letter and hope the hiring manager will not
          notice the unrelated work history. They will notice. Address it
          directly, confidently, and early.
        </p>
        <p className="mt-4 text-[#4A4A4A]">
          The second mistake is apologizing. "I know I do not have direct
          experience" sounds like doubt. "I have spent three years doing X, and
          here is how it prepares me for Y" sounds like strategy.
        </p>

        <div className="mt-8 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B]">
            Example — Marketing to Product Management
          </p>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#1A1A1A]">
            {letter}
          </pre>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">Why This Works</h3>
          <ul className="mt-2 space-y-1.5">
            {[
              "Opens with a quantified accomplishment from the current field",
              "Explains the career change as a realization, not an escape",
              "Maps existing skills to the new role specifically",
              "Ends with a specific, low-friction ask",
            ].map((point, i) => (
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
            How to Map Your Old Skills to the New Role
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                1. List what you actually did
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Not your job title. Your actual tasks. "Managed a team" is vague.
                "Hired 12 people, reduced turnover by 30%, and built a onboarding
                playbook" is specific.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                2. Translate to the new language
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                A teacher's "classroom management" is a PM's "stakeholder
                coordination." A nurse's "patient triage" is an ops manager's
                "priority queue management." Find the parallel.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                3. Show you have already started
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                A side project, a certification, a volunteer role, or even a
                book you read and applied. Proof of initiative beats promises of
                potential.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                4. Address the gap honestly
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                "I have not worked as a PM before, but I have shipped three
                features by influencing engineers without authority." Honesty
                + proof = credibility.
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
                Five real examples for different situations
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
              href="/cover-letter-for-project-manager/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
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
