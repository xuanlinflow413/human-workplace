import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cover Letter for Internship: Real Example That Got the Offer",
  description:
    "Internship cover letter example written by a student who landed a product internship at Stripe. No experience required — just proof of curiosity.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-internship/",
  },
  openGraph: {
    title: "Cover Letter for Internship: Real Example That Got the Offer",
    description:
      "Internship cover letter example written by a student who landed a product internship. No experience required.",
    url: "https://kindreply.co/cover-letter-for-internship/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cover Letter for Internship: Real Example That Got the Offer",
    description: "Internship cover letter example. No experience required.",
  },
};

const letter = `Dear [Hiring Manager],

Last semester I built a Chrome extension that tracks assignment deadlines for students. It has 2,400 active users and a 4.8-star rating. The most common feedback: "This is the only app that does not make me feel bad about procrastinating."

I think a lot about how software makes people feel. Your blog post about reducing cognitive load in the first 30 seconds of onboarding resonated with me — that is exactly the kind of user-centered thinking I want to learn from your team.

I have attached my resume and a link to my GitHub. I would love to discuss how I could contribute.

Best,\n[Your Name]`;

const whyWorks = [
  "Leads with a real product, not coursework or GPA",
  "Shows the product is alive (2,400 users, 4.8 stars)",
  "References a specific company blog post — not generic praise",
  "Confident tone without sounding entitled",
];

const mistakes = [
  {
    title: "Listing coursework instead of projects",
    fix: "'Completed Data Structures' means nothing. 'Built a pathfinding visualizer that 800 students used to study for exams' means something.",
  },
  {
    title: "Apologizing for being a student",
    fix: "Do not say 'I know I do not have much experience.' You are applying for an internship — they expect you to be learning. Show you have already started.",
  },
  {
    title: "Generic interest in the industry",
    fix: "'I have always been passionate about tech' is noise. 'I have been following your routing layer since you open-sourced it in March' is signal.",
  },
  {
    title: "Asking them to teach you",
    fix: "'I am eager to learn' puts the burden on them. Show you are already learning — mention a side project, a book, a course you completed.",
  },
];

const faqs = [
  {
    q: "What if I have no relevant experience at all?",
    a: "You have more than you think. Have you fixed a bug in an open-source project? Built a personal website? Written a technical blog post? All of these count as proof of work.",
  },
  {
    q: "Should I mention my GPA?",
    a: "Only if it is exceptional (3.8+) and relevant. Most hiring managers care more about what you have built than how you tested.",
  },
  {
    q: "How long should an internship cover letter be?",
    a: "200-300 words. Shorter is better when you have less to say. One strong story beats three weak paragraphs.",
  },
  {
    q: "Should I mention specific classes?",
    a: "Only if you can frame them around outcomes. 'Took Machine Learning' is weak. 'Built a sentiment analysis model for Twitter data in my ML class' is strong.",
  },
  {
    q: "When should I apply for internships?",
    a: "For summer internships, apply in September-October for large companies, November-January for mid-sized, and February-April for startups. Earlier is almost always better.",
  },
];

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Cover Letter for Internship
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            Real example from a student who landed a product internship. No
            experience required — just proof of curiosity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          The Internship Opening That Works
        </h2>
        <p className="mt-4 text-[#4A4A4A]">
          Most internship cover letters start with an apology. They list
          coursework, mention a GPA, and end with "I am eager to learn." Hiring
          managers read hundreds of these. They all sound the same.
        </p>
        <p className="mt-4 text-[#4A4A4A]">
          The cover letters that stand out start with proof. Not potential.
          Proof. Something you built, fixed, or improved. It does not have to be
          a job. It can be a side project, a class assignment that went further
          than required, or an open-source contribution.
        </p>

        <div className="mt-8 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B]">
            Example — Product Management Internship
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
            What to Do When You Have No "Real" Experience
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                1. Build something small but real
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                A calculator app. A personal website. A script that automates a
                tedious task. It does not need to be original. It needs to be
                finished and deployed.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                2. Contribute to open source
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Fix a typo in documentation. Close a "good first issue." Even a
                one-line bug fix shows you can read someone else's code and
                improve it.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                3. Write about what you learn
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                A technical blog post teaches twice: once while writing, once
                while sharing. It also gives you something to link to in your
                cover letter.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                4. Replicate a tool you admire
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Build a simplified version of a product you respect. It shows
                you understand architecture, not just syntax.
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
              href="/workplace/asking-for-help-at-work/"
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
