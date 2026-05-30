import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Service Cover Letter: Real Example + FAQ",
  description:
    "A real customer service cover letter example that focuses on outcomes, not just 'people skills.' Plus common mistakes and FAQ.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-customer-service/",
  },
  openGraph: {
    title: "Customer Service Cover Letter: Real Example + FAQ",
    description:
      "A real customer service cover letter example that focuses on outcomes, not just people skills.",
    url: "https://kindreply.co/cover-letter-for-customer-service/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Service Cover Letter: Real Example + FAQ",
    description: "Real example focusing on outcomes, not just people skills.",
  },
};

const letter = `Dear [Hiring Manager],

At my current role at [Retail Store], I handled 40-60 customer interactions per shift. Last month, a customer called furious that her order had been lost twice. Instead of escalating, I stayed on the line, found the package in a sorting error, and had it rerouted overnight. She emailed my manager the next day to say it was the first time she felt heard by a company in years.

I do not think of customer service as solving problems. I think of it as rebuilding trust — one conversation at a time. Your company's reputation for post-purchase support is why I am applying. I would love to bring that same patience and persistence to your team.

Best,\n[Your Name]`;

const whyWorks = [
  "Opens with specific numbers (40-60 interactions per shift)",
  "Tells a complete story with a beginning, middle, and resolution",
  "Shows emotional intelligence without using the phrase 'people skills'",
  "Connects personal philosophy to company values",
];

const mistakes = [
  {
    title: "Saying you have 'great people skills'",
    fix: "Everyone says this. Instead, describe a specific difficult conversation you navigated successfully.",
  },
  {
    title: "Focusing on speed over quality",
    fix: "'Handled 100 calls per day' sounds like a robot. 'Reduced repeat contact rate by 30% by fixing root causes' sounds like a strategist.",
  },
  {
    title: "Ignoring metrics",
    fix: "Customer service is measurable. Mention CSAT scores, resolution rates, or customer retention improvements.",
  },
  {
    title: "Generic interest in helping people",
    fix: "'I love helping people' is empty. 'I stayed late to resolve a billing dispute that saved a $50K account' is proof.",
  },
];

const faqs = [
  {
    q: "How do I stand out in customer service applications?",
    a: "Show you understand that customer service is a revenue function, not a cost center. Talk about retention, upselling, or turning angry customers into loyal ones.",
  },
  {
    q: "Should I mention conflict resolution skills?",
    a: "Yes, but show, do not tell. Describe a specific conflict, what you did, and the outcome. 'De-escalated' is weak. 'A customer threatened to cancel; I identified the billing error and retained the account' is strong.",
  },
  {
    q: "What metrics should I include?",
    a: "CSAT (customer satisfaction), NPS (net promoter score), first-contact resolution rate, average handle time, or customer retention rate. Choose the ones that make you look best.",
  },
  {
    q: "How do I address employment gaps in customer service?",
    a: "Be brief and honest. 'I took six months to care for a family member and kept my skills sharp by volunteering at a local helpline' is better than leaving a gap unexplained.",
  },
  {
    q: "Should I mention soft skills?",
    a: "Only through stories. 'Strong communication skills' is empty. 'I presented a controversial roadmap to the board and secured buy-in by framing it around revenue impact' is proof.",
  },
];

export default function CustomerServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Customer Service Cover Letter
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            A real example that focuses on outcomes, not just "people skills."
            Plus common mistakes and FAQ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          The Service Mindset
        </h2>
        <p className="mt-4 text-[#4A4A4A]">
          Most customer service cover letters read like self-help books. They
          talk about "passion for helping people" and "excellent communication
          skills." Hiring managers have read these phrases thousands of times.
          They mean nothing.
        </p>
        <p className="mt-4 text-[#4A4A4A]">
          What stands out is proof. Specific situations. Measurable outcomes.
          The ability to turn a frustrated customer into a loyal one — and the
          data to back it up.
        </p>

        <div className="mt-8 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B]">
            Example — Customer Service Representative
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
                1. Evidence of patience under pressure
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Customer service is not about happy customers. It is about angry
                ones. Show you can stay calm when someone is yelling at you.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                2. Problem-solving, not just empathy
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Empathy without action is just commiseration. Show that you
                identify root causes and fix them, not just apologize.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                3. Understanding of business impact
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Customer service affects retention, reviews, and revenue. Show
                you understand this connection.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                4. Specific tool experience
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Mention CRMs, ticketing systems, or chat platforms you have
                used. Zendesk, Intercom, Salesforce — whatever is relevant.
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
              href="/workplace/how-to-apologize-professionally/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                How to Apologize Professionally
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                When you need to say sorry at work
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
