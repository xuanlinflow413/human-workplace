import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Manager Cover Letter: Real Example + Strategy",
  description:
    "A marketing manager cover letter that shows revenue impact, not just campaigns. Real example with metrics, common mistakes, and FAQ.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-marketing-manager/",
  },
  openGraph: {
    title: "Marketing Manager Cover Letter: Real Example + Strategy",
    description:
      "A marketing manager cover letter that shows revenue impact, not just campaigns. Real example with metrics.",
    url: "https://kindreply.co/cover-letter-for-marketing-manager/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Manager Cover Letter: Real Example + Strategy",
    description: "Shows revenue impact, not just campaigns.",
  },
};

const letter = `Dear [Hiring Manager],

Last quarter I restructured our paid acquisition funnel and reduced CAC by 34% while increasing qualified leads by 52%. The change was not a new channel — it was removing three underperforming ad sets and doubling down on the one audience segment that actually converted.

I have managed $2M+ annual budgets across Meta, Google, and LinkedIn. I know the difference between vanity metrics (impressions, clicks) and business metrics (CAC, LTV, payback period). At [Company], I would bring that same discipline to your growth team.

I noticed your recent shift toward product-led growth. I led a similar transition at my current company, moving from sales-led to freemium. It took six months, but trial-to-paid conversion went from 8% to 19%. I would love to discuss how I could help accelerate that same shift for you.

Best,\n[Your Name]`;

const whyWorks = [
  "Leads with specific, quantified business outcomes (34% CAC reduction, 52% lead increase)",
  "Shows understanding of marketing fundamentals (CAC, LTV, payback period)",
  "References a specific company strategy shift (product-led growth)",
  "Includes a relevant, comparable case study (8% to 19% conversion)",
];

const mistakes = [
  {
    title: "Listing campaigns instead of outcomes",
    fix: "'Managed a $500K Facebook campaign' is weak. 'Reduced CAC by 28% by restructuring audience targeting' is strong.",
  },
  {
    title: "Focusing on vanity metrics",
    fix: "Impressions and clicks do not pay salaries. Revenue, pipeline, and retention do. Lead with business impact.",
  },
  {
    title: "Generic marketing jargon",
    fix: "'Omnichannel strategy leveraging synergistic touchpoints' means nothing. 'I found that email outperformed social by 3x for our B2B audience' means something.",
  },
  {
    title: "Ignoring the product",
    fix: "A marketing manager who does not mention the product sounds like a vendor, not a partner. Show you understand what the company builds and who it serves.",
  },
];

const faqs = [
  {
    q: "How do I show ROI in my marketing cover letter?",
    a: "Use specific numbers. 'Increased revenue by $X' or 'Reduced CAC by Y%.' If you do not have exact numbers, use ranges or percentages. Something is better than nothing.",
  },
  {
    q: "Should I mention specific marketing tools?",
    a: "Only if relevant to the role. 'Proficient in HubSpot' is fine. 'Built a lead scoring model in HubSpot that improved sales qualified leads by 40%' is better.",
  },
  {
    q: "How do I address a gap between marketing roles?",
    a: "Be brief and honest. 'I spent six months consulting for three startups, focusing on growth strategy' is better than leaving a gap unexplained.",
  },
  {
    q: "What if I have no management experience?",
    a: "Show leadership through influence, not headcount. 'I convinced the product team to prioritize a feature that drove 20% of new signups' shows strategic leadership.",
  },
  {
    q: "How technical should a marketing manager cover letter be?",
    a: "Technical enough to show you can work with data and product teams, not so technical that you sound like you want to be an engineer. Understand the stack; do not try to build it.",
  },
];

export default function MarketingManagerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Marketing Manager Cover Letter
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            A real example that shows revenue impact, not just campaigns. Plus
            common mistakes and FAQ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          The Revenue-Focused Opening
        </h2>
        <p className="mt-4 text-[#4A4A4A]">
          Most marketing cover letters read like award submissions. They talk
          about campaigns, creativity, and brand storytelling. Hiring managers
          do not care about your Cannes Lion. They care about pipeline,
          revenue, and efficiency.
        </p>
        <p className="mt-4 text-[#4A4A4A]">
          The best marketing manager cover letters lead with business outcomes.
          They show you understand that marketing is a growth function, not a
          creative one. They speak the language of CAC, LTV, and payback
          period.
        </p>

        <div className="mt-8 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B]">
            Example — Marketing Manager
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
            What Makes a Marketing Cover Letter Stand Out
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                1. Lead with revenue, not activity
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                "Launched 12 campaigns" is weak. "Generated $1.2M pipeline from
                a $150K budget" is strong. Activity is noise. Outcomes are
                signal.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                2. Show strategic thinking
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Do not just list tactics. Explain why you chose them. "We
                shifted budget from paid to organic because our CAC was
                unsustainable" shows judgment.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                3. Reference the company's marketing
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Mention a recent campaign, a blog post, or a strategy shift.
                This shows you have done your homework and are not applying
                blindly.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                4. Include a specific, relevant case study
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                One detailed example beats a list of responsibilities. Walk
                through the problem, your approach, and the result.
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
              href="/cover-letter-for-data-analyst/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Data Analyst Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Show insights, not just dashboards
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
              href="/workplace/how-to-ask-for-a-raise/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                How to Ask for a Raise
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Make the case with data
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
