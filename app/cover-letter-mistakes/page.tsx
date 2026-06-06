import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "7 Cover Letter Mistakes That Cost You the Interview | KindReply",
  description:
    "Avoid common cover letter mistakes that make applications feel generic, unclear, or risky — with practical fixes for stronger drafts.",
  keywords: [
    "cover letter mistakes",
    "common cover letter errors",
    "cover letter tips",
    "what not to write in cover letter",
    "cover letter red flags",
  ],
  alternates: {
    canonical: "https://kindreply.co/cover-letter-mistakes/",
  },
  openGraph: {
    title: "7 Cover Letter Mistakes That Cost You the Interview",
    description:
      "The most common cover letter mistakes — and how to fix them. Learn what hiring managers actually see when they read your letter.",
    url: "https://kindreply.co/cover-letter-mistakes/",
    siteName: "KindReply",
    type: "article",
  },
};

export default function CoverLetterMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            7 Cover Letter Mistakes That Cost You the Interview
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            Hiring managers reject 90% of cover letters in the first 10 seconds.
            Here is exactly what they are looking for — and how to avoid the
            errors that get you filtered out.
          </p>
          <div className="mt-8">
            <Link
              href="/cover-letter-writer/"
              className="inline-flex items-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#333]"
            >
              Fix Your Cover Letter Now
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-[#4A4A4A]">
            I have reviewed thousands of cover letters as a hiring manager and
            career coach. Most are not bad — they are invisible. They blend into
            a sea of generic applications that say nothing, prove nothing, and
            convince no one. The good news: avoiding the common mistakes puts you
            ahead of 80% of candidates immediately. This guide shows you the
            seven errors I see most often — and exactly how to fix each one.
          </p>

          {/* Mistake 1 */}
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Mistake #1: Opening With "I Am Excited to Apply"
          </h2>
          <p className="text-[#4A4A4A]">
            This is the most common opening in cover letters — and the most
            wasted opportunity. "I am excited to apply for [Position] at
            [Company]" tells the reader nothing they do not already know. Of
            course you are excited. You applied. Every candidate is excited.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>Why it hurts you:</strong> Hiring managers spend an average
            of 7 seconds on the first scan. If your first sentence is generic,
            they assume the rest is too. You have lost them before they reach
            paragraph two.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>How to fix it:</strong> Lead with evidence, not emotion. Open
            with a specific accomplishment, a relevant insight, or a genuine
            connection to the company. Compare:
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="text-sm font-medium text-red-700 uppercase tracking-wide">
              Weak
            </p>
            <p className="mt-3 text-[#4A4A4A]">
              "I am excited to apply for the Marketing Manager position at
              [Company]. With my background in digital marketing, I believe I
              would be a great fit for your team."
            </p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <p className="text-sm font-medium text-green-700 uppercase tracking-wide">
              Strong
            </p>
            <p className="mt-3 text-[#4A4A4A]">
              "Last quarter, I rebuilt our email onboarding flow and increased
              trial-to-paid conversion by 34%. When I saw [Company]'s recent
              blog post about prioritizing user retention, I knew my experience
              could contribute directly to that goal."
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Mistake 2 */}
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Mistake #2: Repeating Your Resume
          </h2>
          <p className="text-[#4A4A4A]">
            Your cover letter is not a prose version of your resume. It is a
            story that your resume cannot tell. If your cover letter reads like
            "As you can see from my resume, I have five years of experience in
            [field]," you are wasting everyone's time.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>Why it hurts you:</strong> Hiring managers read your resume
            and cover letter together. Repeating information signals that you
            have nothing new to add — or worse, that you do not understand the
            purpose of a cover letter.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>How to fix it:</strong> Use the cover letter to explain
            context the resume lacks. Why did you make a career move? What
            motivated a particular project? How did you overcome a specific
            challenge? The cover letter is for the "why," not the "what."
          </p>

          {/* Mistake 3 */}
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Mistake #3: Generic Praise for the Company
          </h2>
          <p className="text-[#4A4A4A]">
            "I have always admired [Company]'s commitment to innovation and
            excellence." This sentence could be written about any company, by any
            candidate, for any role. It is filler, and hiring managers know it.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>Why it hurts you:</strong> Generic praise signals generic
            interest. If you cannot name something specific you admire about the
            company, the hiring manager assumes you are applying everywhere —
            which means you are not genuinely interested in this role.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>How to fix it:</strong> Do 10 minutes of research. Read a
            recent blog post, product announcement, or company value statement.
            Then reference it specifically:
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium text-[#6B6B6B] uppercase tracking-wide">
            Example — Specific Company Knowledge
          </p>
          <p className="mt-4 text-[#4A4A4A]">
            "Your decision to open-source your design system last month
            impressed me — not because it is generous, but because it shows you
            understand that ecosystem growth matters more than proprietary
            control. That is the kind of long-term thinking I want to contribute
            to."
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Mistake 4 */}
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Mistake #4: Focusing on What You Want, Not What You Offer
          </h2>
          <p className="text-[#4A4A4A]">
            "I am looking for an opportunity to grow my skills in [field] and
            advance my career." This is about you. Hiring managers care about
            what you can do for them, not what they can do for you.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>Why it hurts you:</strong> Companies hire to solve problems,
            not to provide learning opportunities. Framing the letter around your
            needs makes you sound entitled and unaware of business realities.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>How to fix it:</strong> Flip the framing. Instead of "I want
            to learn X," say "I have done Y, which means I can help you solve Z."
            Every sentence should answer the question: "Why should this company
            care?"
          </p>

          {/* Mistake 5 */}
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Mistake #5: Weak or Nonexistent Call to Action
          </h2>
          <p className="text-[#4A4A4A]">
            "I look forward to hearing from you" is not a call to action. It is
            a resignation. It puts the burden on the hiring manager and gives
            them no reason to respond.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>Why it hurts you:</strong> A weak ending leaves the reader
            with no next step. They finish your letter, think "that was nice,"
            and move on to the next candidate. You have lost the opportunity to
            drive action.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>How to fix it:</strong> End with a specific, low-friction
            ask. Offer value, not just availability:
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="text-sm font-medium text-red-700 uppercase tracking-wide">
              Weak
            </p>
            <p className="mt-3 text-[#4A4A4A]">
              "Thank you for your time and consideration. I look forward to
              hearing from you."
            </p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <p className="text-sm font-medium text-green-700 uppercase tracking-wide">
              Strong
            </p>
            <p className="mt-3 text-[#4A4A4A]">
              "I have attached a one-page case study showing how I increased
              retention at my current company. Would you be open to a 15-minute
              call next week to discuss how I could do the same for [Company]?"
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Mistake 6 */}
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Mistake #6: Typos and Formatting Errors
          </h2>
          <p className="text-[#4A4A4A]">
            This seems obvious, but it happens constantly. A single typo in a
            cover letter signals carelessness — and in a competitive field, that
            is enough to eliminate you. One hiring manager told me she rejects
            candidates who misspell the company name, even if everything else is
            perfect.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>Why it hurts you:</strong> Attention to detail is a proxy for
            professionalism. If you cannot proofread a one-page letter, why
            should a manager trust you with client communications, code reviews,
            or financial documents?
          </p>
          <p className="text-[#4A4A4A]">
            <strong>How to fix it:</strong> Read your letter out loud. Use
            Grammarly or a similar tool. Then ask a friend to review it. Fresh
            eyes catch what yours miss. And always, always double-check the
            spelling of the company name and the hiring manager's name.
          </p>

          {/* Mistake 7 */}
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Mistake #7: Writing a Novel
          </h2>
          <p className="text-[#4A4A4A]">
            The ideal cover letter is 250-400 words. If yours is longer than one
            page, it will not get read. Hiring managers are busy. They scan, they
            do not study. A dense, multi-page letter signals that you do not
            respect their time — or that you cannot prioritize.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>Why it hurts you:</strong> Long letters get skimmed or
            skipped entirely. Your best points might be on page two — which means
            they will never be seen.
          </p>
          <p className="text-[#4A4A4A]">
            <strong>How to fix it:</strong> Write your first draft without
            worrying about length. Then cut 30%. Remove adjectives, adverbs, and
            anything that does not directly support your core argument. If a
            sentence does not advance your case, delete it.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            The Cover Letter Checklist
          </h2>
          <p className="text-[#4A4A4A]">
            Before you send any cover letter, run through this checklist:
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {[
            "Does the first sentence contain a specific accomplishment or insight?",
            "Is every sentence about what I can offer, not what I want?",
            "Did I reference something specific about this company (not generic praise)?",
            "Does the ending include a specific, low-friction call to action?",
            "Is the letter under 400 words and free of typos?",
            "Did I address the hiring manager by name (if findable)?",
            "Does the letter sound like me, not a template?",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-[#E5E5E5] bg-white p-4"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#1A1A1A]">
                <span className="h-3 w-3 rounded-sm bg-[#1A1A1A]" />
              </span>
              <span className="text-[#4A4A4A]">{item}</span>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="mt-12 text-2xl font-bold text-[#1A1A1A]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          <details className="rounded-lg border border-[#E5E5E5] bg-white">
            <summary className="cursor-pointer px-6 py-4 font-medium text-[#1A1A1A]">
              Is it okay to use humor in a cover letter?
            </summary>
            <div className="px-6 pb-4 text-[#4A4A4A]">
              Only if it comes naturally to you and fits the company culture. A
              forced joke is worse than no joke. If you are not funny in person,
              do not try to be funny on paper. Authenticity beats cleverness.
            </div>
          </details>
          <details className="rounded-lg border border-[#E5E5E5] bg-white">
            <summary className="cursor-pointer px-6 py-4 font-medium text-[#1A1A1A]">
              Should I mention salary expectations?
            </summary>
            <div className="px-6 pb-4 text-[#4A4A4A]">
              Only if the job posting asks for it. Otherwise, save salary
              discussions for the interview. Mentioning numbers too early can
              eliminate you before you have a chance to demonstrate value.
            </div>
          </details>
          <details className="rounded-lg border border-[#E5E5E5] bg-white">
            <summary className="cursor-pointer px-6 py-4 font-medium text-[#1A1A1A]">
              What if I do not know the hiring manager's name?
            </summary>
            <div className="px-6 pb-4 text-[#4A4A4A]">
              "Dear Hiring Manager" is acceptable. "To Whom It May Concern" is
              outdated and impersonal. If you cannot find a name after 5 minutes
              of searching (LinkedIn, company team page, job posting), use
              "Dear Hiring Manager" and move on. Do not spend an hour hunting
              for a name that may not be public.
            </div>
          </details>
          <details className="rounded-lg border border-[#E5E5E5] bg-white">
            <summary className="cursor-pointer px-6 py-4 font-medium text-[#1A1A1A]">
              Can I use the same cover letter for multiple applications?
            </summary>
            <div className="px-6 pb-4 text-[#4A4A4A]">
              You can reuse the structure, but never the content. Each company
              has different challenges, values, and culture. A generic cover
              letter signals generic interest. Take 15-20 minutes to customize
              each one — the ROI on that time is enormous.
            </div>
          </details>
        </div>

        {/* Related Resources */}
        <div className="mt-16 rounded-xl bg-[#F8F6F2] p-8">
          <h3 className="text-xl font-bold text-[#1A1A1A]">
            Related Resources
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/cover-letter-examples/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Cover Letter Examples
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Proven templates for every situation
              </p>
            </Link>
            <Link
              href="/cover-letter-for-career-change/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Cover Letter for Career Change
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                How to pivot industries successfully
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
              href="/cover-letter-writer/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                AI Cover Letter Writer
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Generate your letter in 60 seconds
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#4A4A4A]">
            Ready to write a mistake-free cover letter? Our AI writer helps you
            avoid all seven errors automatically.
          </p>
          <Link
            href="/cover-letter-writer/"
            className="mt-6 inline-flex items-center rounded-full bg-[#1A1A1A] px-8 py-4 text-base font-medium text-white transition hover:bg-[#333]"
          >
            Write a Perfect Cover Letter
          </Link>
        </div>
      </article>
    </main>
  );
}
