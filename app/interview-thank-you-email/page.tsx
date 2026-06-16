import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";

export const metadata: Metadata = {
  title: "Interview Thank You Email | Short Follow-Up Templates",
  description: "Copy interview thank you email templates for recruiters, hiring managers, panel interviews, and final rounds.",
  alternates: { canonical: "https://kindreply.co/interview-thank-you-email/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/interview-thank-you-email/",
    siteName: "KindReply",
    title: "Interview Thank You Email | Short Follow-Up Templates",
    description: "Copy interview thank you email templates for recruiters, hiring managers, panel interviews, and final rounds.",
  },
};

export default function Page() {
  return (
    <WorkplaceSeoPage
      config={{
        eyebrow: "Interview follow-up",
        h1: "Interview thank you email",
        description: "A good thank-you email is specific, brief, and easy to reply to. It should reinforce interest without sounding like a copied template.",
        primaryCta: { href: "/follow-up-email-after-interview/", label: "See more follow-up templates" },
        secondaryCta: { href: "/cover-letter-writer/", label: "Improve your application" },
        cards: [
          { title: "Send within 24 hours", text: "The note lands best while the conversation is still fresh and before the team compares final candidates." },
          { title: "Reference one detail", text: "Mention a real challenge, project, or team priority from the interview so the email feels human." },
          { title: "Close lightly", text: "Thank them, restate interest, and make it easy for them to continue the process." },
        ],
        templates: [
          { title: "Hiring manager thank-you", body: `Hi [Name]

Thank you for taking the time to speak with me today about the [Role] position. I enjoyed learning more about [specific project/team/challenge], especially your point about [specific detail].

The conversation made me even more interested in the role, and I can see how my experience with [relevant experience] would be useful to the team.

Thanks again,
[Name]` },
          { title: "Recruiter thank-you", body: `Hi [Name]

Thank you for coordinating today's conversation and sharing more context about the [Role] process. I appreciate your help and remain very interested in the opportunity.

Please let me know if there is anything else I can provide as next steps continue.

Best,
[Name]` },
        ],
        tips: [
          "Do not repeat your full resume. One relevant reminder is stronger than a long recap.",
          "If you interviewed with multiple people, send slightly different notes instead of copying the exact same message.",
          "If the interview went poorly, keep the note calm and focus on one point you would like to clarify or reinforce.",
        ],
        related: [
          { href: "/follow-up-email-after-interview/", label: "Follow-Up Email After Interview", text: "Use this for status checks and later-stage follow-ups." },
          { href: "/job-search/", label: "Job Search Resources", text: "Find related job-search emails and cover letter resources." },
          { href: "/professional-email-generator/", label: "Professional Email Generator", text: "Draft other work and hiring-process emails." },
        ],
      }}
    />
  );
}
