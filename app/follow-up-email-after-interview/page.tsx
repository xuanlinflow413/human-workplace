import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";

export const metadata: Metadata = {
  title: "Follow-Up Email After Interview | Templates That Sound Human",
  description: "Copy a short follow-up email after an interview, including thank-you notes, status checks, and final-round follow-ups.",
  alternates: { canonical: "https://kindreply.co/follow-up-email-after-interview/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/follow-up-email-after-interview/",
    siteName: "KindReply",
    title: "Follow-Up Email After Interview | Templates That Sound Human",
    description: "Copy a short follow-up email after an interview, including thank-you notes, status checks, and final-round follow-ups.",
  },
};

export default function Page() {
  return (
    <WorkplaceSeoPage
      config={{
        eyebrow: "Interview follow-up",
        h1: "Follow-up email after interview",
        description: "Send a follow-up that sounds thoughtful, specific, and easy to reply to — without turning it into a second cover letter.",
        primaryCta: { href: "/job-search/", label: "Open job search resources" },
        secondaryCta: { href: "/cover-letter-writer/", label: "Try cover letter writer" },
        cards: [
          { title: "Send it soon", text: "A thank-you note works best within 24 hours while the conversation is still fresh." },
          { title: "Mention one detail", text: "Reference a real topic from the interview so the note does not feel generic." },
          { title: "Keep it short", text: "The goal is to reinforce interest, not re-sell your entire background." },
        ],
        templates: [
          { title: "Thank-you follow-up", body: "Hi [Name],\n\nThank you for taking the time to speak with me about the [Role] position today. I enjoyed learning more about [specific topic/team/project], and the conversation made me even more interested in the opportunity.\n\nI especially appreciated your point about [specific detail]. My experience with [relevant experience] feels closely aligned with what the team is trying to do.\n\nThanks again, and I look forward to next steps.\n\nBest,\n[Name]" },
          { title: "Status check after interview", body: "Hi [Name],\n\nI hope you are doing well. I wanted to follow up on the [Role] interview process and see whether there are any updates on next steps.\n\nI remain very interested in the opportunity and would be happy to share anything else that would be helpful.\n\nBest,\n[Name]" },
        ],
        tips: [
          "Do not send a long recap of your resume. Use one relevant reminder and one sincere thank-you.",
          "If the recruiter gave a timeline, wait until that timeline has passed before asking for a status update.",
          "After a final round, mention the problem you are most excited to help solve rather than only saying you are excited about the company.",
        ],
        related: [
          { href: "/job-search/", label: "Job Search Resources", text: "Find cover letters, examples, and interview-adjacent templates." },
          { href: "/cover-letter-examples/", label: "Cover Letter Examples", text: "Strengthen the application before the interview stage." },
          { href: "/professional-email-generator/", label: "Professional Email Generator", text: "Draft other work and job-search emails." },
        ],
      }}
    />
  );
}
