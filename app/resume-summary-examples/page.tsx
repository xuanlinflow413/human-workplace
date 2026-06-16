import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";

export const metadata: Metadata = {
  title: "Resume Summary Examples | Professional Profile Templates",
  description: "Copy resume summary examples for job seekers, career changers, entry-level candidates, and experienced professionals.",
  alternates: { canonical: "https://kindreply.co/resume-summary-examples/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/resume-summary-examples/",
    siteName: "KindReply",
    title: "Resume Summary Examples | Professional Profile Templates",
    description: "Copy resume summary examples for job seekers, career changers, entry-level candidates, and experienced professionals.",
  },
};

export default function Page() {
  return (
    <WorkplaceSeoPage
      config={{
        eyebrow: "Resume profile",
        h1: "Resume summary examples",
        description: "A resume summary should make the recruiter understand your direction, strengths, and proof in the first few seconds — without sounding like a generic bio.",
        primaryCta: { href: "/cover-letter-writer/", label: "Turn this into a cover letter" },
        secondaryCta: { href: "/job-search/", label: "Open job search resources" },
        cards: [
          { title: "Lead with role fit", text: "Name the role, level, or function you are targeting so the summary feels intentional instead of broad." },
          { title: "Show proof", text: "Use one measurable result, shipped project, customer outcome, or operational win instead of listing soft skills." },
          { title: "Keep it tight", text: "Two to four lines is enough. The goal is to orient the reader before they scan your experience." },
        ],
        templates: [
          { title: "Experienced professional", body: "[Role] with [X years] of experience in [domain]. Known for [core strength] and [second strength], with recent results including [specific outcome]. Looking to bring practical execution and clear communication to a [target role/team] environment." },
          { title: "Career changer", body: "Career changer moving from [previous field] into [target field], with transferable strengths in [skill], [skill], and [skill]. Recent work includes [project/course/portfolio proof], and I am focused on roles where I can combine [old strength] with [new direction]." },
        ],
        tips: [
          "Avoid phrases like hard worker, team player, or fast learner unless you immediately attach proof.",
          "Match the summary to the job you actually want, not every job you might be able to do.",
          "If you are entry-level, lead with projects, internships, volunteer work, or coursework that shows real behavior.",
        ],
        related: [
          { href: "/cover-letter-writer/", label: "Cover Letter Writer", text: "Use your resume summary to draft a more focused cover letter." },
          { href: "/cover-letter-with-no-experience/", label: "No Experience Cover Letter", text: "Position early proof when you do not have a long work history." },
          { href: "/job-search/", label: "Job Search Resources", text: "Browse the full set of job-search templates and tools." },
        ],
      }}
    />
  );
}
