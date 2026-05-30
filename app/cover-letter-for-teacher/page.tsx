import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teacher Cover Letter: Real Example + Classroom Strategy",
  description:
    "A teacher cover letter that shows student outcomes, not just credentials. Real example with metrics, common mistakes, and FAQ.",
  alternates: {
    canonical: "https://kindreply.co/cover-letter-for-teacher/",
  },
  openGraph: {
    title: "Teacher Cover Letter: Real Example + Classroom Strategy",
    description:
      "A teacher cover letter that shows student outcomes, not just credentials. Real example with metrics.",
    url: "https://kindreply.co/cover-letter-for-teacher/",
    siteName: "KindReply",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teacher Cover Letter: Real Example + Classroom Strategy",
    description: "Shows student outcomes, not just credentials.",
  },
};

const letter = `Dear [Principal],

Last year, 73% of my students entered my class reading below grade level. By June, 68% were reading at or above grade level. The difference was not a new curriculum. It was 20 minutes of structured daily reading, paired with one-on-one check-ins every Friday.

I have taught third grade for five years. I know that lesson plans matter, but relationships matter more. I know that standards are important, but engagement is what makes them stick. I know that teaching is hard, and I still choose to do it every day.

I noticed your school's focus on project-based learning. I piloted a similar approach last year, replacing three traditional units with inquiry-based projects. Student engagement scores went from 62% to 89%. I would love to bring that same energy to your classrooms.

Best,\n[Your Name]`;

const whyWorks = [
  "Leads with specific, quantified student outcomes (73% below grade to 68% at/above)",
  "Shows teaching philosophy, not just credentials",
  "References a specific school initiative (project-based learning)",
  "Includes a relevant, comparable case study (62% to 89% engagement)",
];

const mistakes = [
  {
    title: "Listing credentials instead of impact",
    fix: "'Certified in K-6 education with a Master's in Curriculum Design' is weak. 'Helped 40 students improve reading scores by an average of 1.5 grade levels in one year' is strong.",
  },
  {
    title: "Generic teaching philosophy",
    fix: "'I believe every child can learn' is true for every applicant. 'I use formative assessment every day to adjust my instruction in real time' is specific to you.",
  },
  {
    title: "Ignoring the school's context",
    fix: "A cover letter that could be sent to any school is a cover letter that will be ignored by every school. Mention their mission, their challenges, their recent initiatives.",
  },
  {
    title: "Focusing on what you want, not what you offer",
    fix: "'I am looking for a position where I can grow' is about you. 'I can help your struggling readers close the gap' is about them.",
  },
];

const faqs = [
  {
    q: "How do I show impact without standardized test data?",
    a: "Use whatever data you have. Reading levels, writing rubrics, attendance rates, parent engagement, student self-assessments. Something measurable is better than nothing.",
  },
  {
    q: "Should I mention classroom management?",
    a: "Only if you have a specific approach. 'I use restorative practices and have reduced office referrals by 60%' is strong. 'I have good classroom management' is weak.",
  },
  {
    q: "How do I address a career gap or transition?",
    a: "Be brief and honest. 'I spent two years as a literacy coach, supporting 12 teachers with instructional strategies' is better than leaving a gap unexplained.",
  },
  {
    q: "What if I am a new teacher?",
    a: "Focus on student teaching, practicum, or tutoring. 'During student teaching, I designed a unit on ecosystems that increased student quiz scores by 22%' shows potential.",
  },
  {
    q: "How long should a teacher cover letter be?",
    a: "One page. Principals are busy. Get to the point: your impact, your approach, and why this school.",
  },
];

export default function TeacherPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F6F2] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            Teacher Cover Letter
          </h1>
          <p className="mt-4 text-lg text-[#6B6B6B] md:text-xl">
            A real example that shows student outcomes, not just credentials.
            Plus common mistakes and FAQ.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          The Outcome-First Opening
        </h2>
        <p className="mt-4 text-[#4A4A4A]">
          Most teacher cover letters read like credential lists. They mention
          certifications, degrees, and years of experience. Principals already
          see that on your resume. What they want to know is: what happened to
          the students in your classroom?
        </p>
        <p className="mt-4 text-[#4A4A4A]">
          The best teacher cover letters lead with student outcomes. They show
          you measure your work by the growth of your students, not the
          decorations on your walls. They speak the language of reading levels,
          engagement scores, and attendance rates.
        </p>

        <div className="mt-8 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#6B6B6B]">
            Example — Teacher
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
            What Principals Look For
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                1. Student growth data
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Numbers matter. 'Reading scores improved by 1.5 grade levels' is
                more compelling than 'I am passionate about literacy.'
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                2. Specific teaching methods
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Do not just say you differentiate. Say how. 'I use leveled reading
                groups and adjust texts weekly based on formative assessments.'
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                3. School fit
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Mention their mission, their student population, or their recent
                initiatives. Show you want to work at this school, not just any
                school.
              </p>
            </div>

            <div className="rounded-lg border border-[#E5E5E5] p-5">
              <h3 className="font-medium text-[#1A1A1A]">
                4. Collaboration
              </h3>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Teaching is a team sport. Mention how you work with other
                teachers, support staff, or parents. 'I co-planned a cross-grade
                science fair with four colleagues' shows teamwork.
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
              href="/cover-letter-for-internship/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Internship Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                No experience, no problem
              </p>
            </Link>
            <Link
              href="/cover-letter-for-customer-service/"
              className="rounded-lg border border-[#E5E5E5] bg-white p-4 transition hover:border-[#1A1A1A]"
            >
              <p className="font-medium text-[#1A1A1A]">
                Customer Service Cover Letter
              </p>
              <p className="mt-1 text-sm text-[#6B6B6B]">
                Turn soft skills into proof
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
