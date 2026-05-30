import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Analyst Cover Letter: Show Insights, Not Just Dashboards",
  description:
    "A data analyst cover letter example that focuses on business impact, not just SQL skills. Real example with metrics and FAQ.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-data-analyst/",
  },
  openGraph: {
    title: "Data Analyst Cover Letter: Show Insights, Not Just Dashboards",
    description:
      "A data analyst cover letter example that focuses on business impact, not just SQL skills.",
    url: "https://kindreply.co/cover-letter-for-data-analyst/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analyst Cover Letter: Show Insights, Not Just Dashboards",
    description: "Focus on business impact, not just SQL skills.",
  },
};

const letter = `Dear [Hiring Manager],

Three months ago I noticed our churn rate spiked in the enterprise tier. The sales team blamed pricing. The product team blamed onboarding. I pulled the data and found the real cause: customers who did not use the API within the first 14 days were 4x more likely to churn.

I built a simple usage report that flagged at-risk accounts. Customer success started reaching out on day 10 instead of day 45. Churn dropped from 12% to 7% in one quarter. The dashboard took me two days to build. The insight took me two years to develop.

I have spent four years translating raw data into decisions that move revenue. I know SQL, Python, and Tableau — but more importantly, I know how to ask the question that makes executives stop checking their phones.

I would love to show you how I could help [Company] find the insights that are hiding in plain sight.

Best,\n[Your Name]`;

const whyWorks = [
  "Opens with a real business problem, not a list of tools",
  "Shows analytical thinking (challenged assumptions, found root cause)",
  "Quantifies impact (12% to 7% churn reduction)",
  "Acknowledges technical skills but emphasizes business value",
];

const mistakes = [
  {
    title: "Listing tools instead of outcomes",
    fix: "'Proficient in SQL, Python, and Tableau' is weak. 'Built a churn prediction model that saved $400K in annual revenue' is strong.",
  },
  {
    title: "Focusing on data collection, not insight",
    fix: "Anyone can pull a report. The value is in the question you asked, the pattern you found, and the decision you influenced.",
  },
  {
    title: "Ignoring the business context",
    fix: "A data analyst who does not understand the business is just a report generator. Show you know what the company cares about.",
  },
  {
    title: "Overcomplicating the explanation",
    fix: "Your cover letter is not a white paper. Explain your work like you are presenting to a non-technical stakeholder.",
  },
];

const faqs = [
  {
    q: "How technical should a data analyst cover letter be?",
    a: "Mention your stack briefly, then focus on what you built and why it mattered. The hiring manager wants to know you can code, but they need to know you can think.",
  },
  {
    q: "What if I have no work experience?",
    a: "Use academic or personal projects. 'Analyzed 50,000 Reddit posts to identify sentiment trends for my capstone' shows initiative and skill.",
  },
  {
    q: "Should I include data visualizations?",
    a: "No. Link to a portfolio or GitHub instead. The cover letter should tell a story; the visuals should speak for themselves.",
  },
  {
    q: "How do I show soft skills?",
    a: "Through collaboration stories. 'I worked with marketing to define attribution rules that both teams trusted' shows communication and diplomacy.",
  },
  {
    q: "What metrics should I highlight?",
    a: "Revenue impact, cost savings, efficiency gains, or decision speed. Anything that shows your analysis changed behavior.",
  },
];

export default function DataAnalystPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Data Analyst Cover Letter
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            A real example that focuses on business impact, not just SQL skills.
            Plus common mistakes and FAQ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          The Insight-First Opening
        </h2>
        <p className="mt-4 text-[#4A4A4A]">
          Most data analyst cover letters read like tool inventories. They list
          SQL, Python, Tableau, R, Excel, and every certification under the sun.
          Hiring managers already assume you know the tools. What they do not
          know is whether you can find the insight that changes a decision.
        </p>
        <p className="mt-4 text-[#4A4A4A]">
          The best data analyst cover letters start with a story. A real
          problem. A hypothesis. A discovery. And a business outcome that
          resulted from your analysis.
        </p>

        <div className="mt-8 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B]">
            Example — Data Analyst
          </p>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#1A1A1A]">
            {letter}
          </pre>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-[#1A1A1A]">
            Why This Works
          </h3>
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
            What Hiring Managers Want to See
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                1. Business curiosity
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Do you ask why before you ask how? The best analysts are
                obsessed with understanding the business, not just the data.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                2. Communication skills
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Can you explain a complex analysis to a non-technical audience?
                Data is worthless if the decision-makers do not understand it.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                3. Decision influence
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Have you changed a strategy, killed a product, or launched a
                campaign based on your analysis? Show the decision, not just
                the data.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                4. Technical depth
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Mention your stack, but keep it brief. The cover letter is not
                a resume. One line on tools, three lines on impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Common Mistakes
          </h2>
          <div className="mt-8 space-y-6">
            {mistakes.map((m, i) => (
              <div
                key={i}
                className="rounded-lg border border-[#E5E5E5] bg-white p-5"
              >
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
              <details
                key={i}
                className="rounded-lg border border-[#E5E5E5]"
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

      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">More Resources</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/cover-letter-examples/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Cover Letter Examples
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Five real examples for different situations
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
              href="/cover-letter-for-marketing-manager/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Marketing Manager Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Show revenue impact, not just campaigns
              </p>
            </Link>
            <Link
              href="/cover-letter-writer/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
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
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Job Search Hub</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                All our job search resources
              </p>
            </Link>
            <Link
              href="/workplace/how-to-tell-your-boss-youre-overwhelmed/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Telling Your Boss You Are Overwhelmed
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Without sounding weak
              </p>
            </Link>
            <Link
              href="/type-and-release/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Type & Release</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Write the message you should not send
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
