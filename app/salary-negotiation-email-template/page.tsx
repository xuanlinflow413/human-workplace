import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";

export const metadata: Metadata = {
  title: "Salary Negotiation Email Template | Ask for Better Compensation",
  description: "Use a professional salary negotiation email template to ask for better compensation with evidence, confidence, and a respectful tone.",
  alternates: { canonical: "https://kindreply.co/salary-negotiation-email-template/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/salary-negotiation-email-template/",
    siteName: "KindReply",
    title: "Salary Negotiation Email Template | Ask for Better Compensation",
    description: "Use a professional salary negotiation email template to ask for better compensation with evidence, confidence, and a respectful tone.",
  },
};

export default function Page() {
  return (
    <WorkplaceSeoPage
      config={{
        eyebrow: "Compensation conversation",
        h1: "Salary negotiation email template",
        description: "Use this when you need to ask for a stronger offer, a raise, or a compensation adjustment without sounding entitled or apologetic.",
        primaryCta: { href: "/salary-negotiation-generator/", label: "Try salary negotiation generator" },
        secondaryCta: { href: "/professional-email-generator/", label: "Browse professional emails" },
        cards: [
          { title: "Anchor with evidence", text: "Reference outcomes, market range, scope, or competing responsibilities instead of personal need alone." },
          { title: "Make a clear ask", text: "Name the compensation change, range, or review conversation you want so the recipient can respond concretely." },
          { title: "Stay collaborative", text: "A strong negotiation can still sound appreciative, calm, and open to discussion." },
        ],
        templates: [
          { title: "Offer negotiation email", body: "Hi [Name],\n\nThank you again for the offer for the [Role] position. I am excited about the team and the work, especially [specific reason].\n\nAfter reviewing the scope of the role and the market range for similar positions, I was hoping we could discuss compensation closer to [target range/number]. Based on my experience with [specific skill/outcome], I believe that would better reflect the value I can bring.\n\nIs there room to revisit the offer? I would be happy to talk through it.\n\nBest,\n[Name]" },
          { title: "Raise request email", body: "Hi [Manager],\n\nI would like to schedule time to discuss my compensation. Over the past [time period], I have taken on [expanded responsibility] and contributed to [specific outcome].\n\nCould we review whether my current compensation still reflects the scope and impact of my role? I can come prepared with examples and context for the discussion.\n\nThank you,\n[Name]" },
        ],
        tips: [
          "Do not open with an apology. A compensation conversation is a normal professional request.",
          "Use one or two strong pieces of evidence rather than a long list of everything you have ever done.",
          "If you are negotiating an offer, clarify whether base salary, bonus, equity, title, remote flexibility, or start date matters most to you.",
        ],
        related: [
          { href: "/salary-negotiation-generator/", label: "Salary Negotiation Generator", text: "Create a more tailored salary negotiation draft." },
          { href: "/job-search/", label: "Job Search Resources", text: "Pair negotiation scripts with cover letter and interview resources." },
          { href: "/workplace/asking-for-help-at-work/", label: "Ask for Help at Work", text: "Use a softer workplace script when you need support before negotiating." },
        ],
      }}
    />
  );
}
