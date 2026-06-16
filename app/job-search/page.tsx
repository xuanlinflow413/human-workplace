import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Search Resources: Cover Letters, Templates & Tools",
  description:
    "Everything you need for your job search. Cover letter examples, templates for every role, and tools to help you land interviews faster.",
  alternates: {
    canonical: "https://kindreply.co/job-search/",
  },
  openGraph: {
    title: "Job Search Resources: Cover Letters, Templates & Tools",
    description:
      "Cover letter examples, templates for every role, and tools to help you land interviews faster.",
    url: "https://kindreply.co/job-search/",
    siteName: "KindReply",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Search Resources: Cover Letters, Templates & Tools",
    description: "Cover letter examples, templates, and tools for your job search.",
  },
};

const resources = [
  {
    href: "/cover-letter-writer/",
    title: "AI Cover Letter Writer",
    description: "Paste a job description, add one real detail, get a human-sounding first draft in 60 seconds.",
    tag: "Tool",
  },
  {
    href: "/cover-letter-examples/",
    title: "Cover Letter Examples",
    description: "Five real cover letters that got interviews. Career change, entry-level, senior, engineer, and PM.",
    tag: "Examples",
  },
  {
    href: "/cover-letter-with-no-experience/",
    title: "Cover Letter With No Experience",
    description: "How to write a cover letter when you have never had a real job. Lead with proof, not potential.",
    tag: "Guide",
  },
  {
    href: "/cover-letter-for-career-change/",
    title: "Career Change Cover Letter",
    description: "Pivoting industries? Do not apologize for your past. Show how your skills transfer.",
    tag: "Guide",
  },
  {
    href: "/cover-letter-for-software-engineer/",
    title: "Software Engineer Cover Letter",
    description: "Junior, senior, and startup examples. What hiring managers actually want to see.",
    tag: "Examples",
  },
  {
    href: "/cover-letter-for-project-manager/",
    title: "Project Manager Cover Letter",
    description: "From agency to in-house. Show outcomes, not just deliverables.",
    tag: "Examples",
  },
  {
    href: "/cover-letter-for-internship/",
    title: "Internship Cover Letter",
    description: "No experience, no problem. Show curiosity and willingness to learn.",
    tag: "Examples",
  },
  {
    href: "/cover-letter-for-customer-service/",
    title: "Customer Service Cover Letter",
    description: "Turn soft skills into proof. Show empathy and problem-solving.",
    tag: "Examples",
  },
  {
    href: "/cover-letter-for-marketing-manager/",
    title: "Marketing Manager Cover Letter",
    description: "Show revenue impact, not just campaigns. Metrics that matter.",
    tag: "Examples",
  },
  {
    href: "/cover-letter-for-data-analyst/",
    title: "Data Analyst Cover Letter",
    description: "Show insights, not just dashboards. Business impact over SQL skills.",
    tag: "Examples",
  },
  {
    href: "/cover-letter-for-teacher/",
    title: "Teacher Cover Letter",
    description: "Show student outcomes, not just credentials. Classroom results.",
    tag: "Examples",
  },
];

const faqs = [
  {
    q: "Do I really need a cover letter in 2025?",
    a: "Yes. Automated screening tools still parse them. Hiring managers still read the good ones. And when two candidates are equal, the cover letter is the tiebreaker.",
  },
  {
    q: "How long should my cover letter be?",
    a: "250-400 words. One page maximum. Hiring managers spend about 7 seconds on the first scan. Make every word earn its place.",
  },
  {
    q: "Should I use the same cover letter for every job?",
    a: "Never. Each company has different challenges, values, and culture. A generic letter signals generic interest. Spend 20 minutes customizing it.",
  },
  {
    q: "What if I do not have direct experience?",
    a: "Lead with what you have built, fixed, or improved — even if it was a side project or school assignment. Proof of work beats years of experience.",
  },
  {
    q: "How do I follow up after sending a cover letter?",
    a: "Wait one week, then send a brief email referencing something specific from your application. 'I noticed you launched the new dashboard last week — excited about the direction.'",
  },
];

export default function JobSearchPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <nav className="text-sm text-[#6B6B6B] mb-4">
            <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1A1A1A]">Job Search</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Job Search Resources
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            Everything you need to land interviews. Cover letters, templates, and tools — no generic advice.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">
          Cover Letter Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group rounded-xl border border-[#E5E5E5] bg-white p-6 transition hover:border-[#1A1A1A] hover:shadow-sm"
            >
              <span className="inline-block rounded-full bg-[#F8F6F2] px-3 py-1 text-xs font-medium text-[#6B6B6B]">
                {r.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[#1A1A1A] group-hover:text-[#333]">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-[#6B6B6B]">{r.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Workplace Section */}
      <section className="border-t border-[#E5E5E5] bg-[#F8F6F2] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Workplace Communication
          </h2>
          <p className="mt-2 text-[#6B6B6B]">
            The job search does not end when you get the offer. Here is how to navigate the hard moments at work.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/how-to-tell-your-boss-you-are-overwhelmed/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">How to Tell Your Boss You Are Overwhelmed</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">Reset priorities before the work breaks you</p>
            </Link>
            <Link
              href="/burnout-email-template/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Burnout Email Template</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">Ask for support or leave with clarity</p>
            </Link>
            <Link
              href="/salary-negotiation-email-template/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Salary Negotiation Email Template</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">Make the case with evidence, not guilt</p>
            </Link>
            <Link
              href="/follow-up-email-after-interview/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">Follow-Up Email After Interview</p>
              <p className="mt-1 text-sm text-[#6B6B6B]">Send the thank-you note that still sounds like you</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Type & Release */}
      <section className="border-t border-[#E5E5E5] bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            Type & Release
          </h2>
          <p className="mt-2 text-[#6B6B6B]">
            Job searching is stressful. Sometimes you need to write the message you should not send. A private space to vent, process, and move on.
          </p>
          <Link
            href="/type-and-release/"
            className="mt-6 inline-flex items-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#333]"
          >
            Try Type & Release
          </Link>
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

      {/* CTA */}
      <section className="border-t border-[#E5E5E5] bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[#4A4A4A]">
            Ready to write your cover letter? Our AI writer helps you craft a personalized draft in under 60 seconds.
          </p>
          <Link
            href="/cover-letter-writer/"
            className="mt-6 inline-flex items-center rounded-full bg-[#1A1A1A] px-8 py-4 text-base font-medium text-white transition hover:bg-[#333]"
          >
            Write Your Cover Letter
          </Link>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Job Search",
                item: "https://kindreply.co/job-search/",
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
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
