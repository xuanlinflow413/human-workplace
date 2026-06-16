import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";

export const metadata: Metadata = {
  title: "Job Offer Response Email | Accept, Negotiate, or Ask for Time",
  description: "Copy job offer response email templates to accept an offer, ask for time, negotiate details, or decline professionally.",
  alternates: { canonical: "https://kindreply.co/job-offer-response-email/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/job-offer-response-email/",
    siteName: "KindReply",
    title: "Job Offer Response Email | Accept, Negotiate, or Ask for Time",
    description: "Copy job offer response email templates to accept an offer, ask for time, negotiate details, or decline professionally.",
  },
};

export default function Page() {
  return (
    <WorkplaceSeoPage
      config={{
        eyebrow: "Offer response",
        h1: "Job offer response email",
        description: "Respond to a job offer with warmth and clarity, whether you are accepting, asking for time, negotiating, or declining respectfully.",
        primaryCta: { href: "/salary-negotiation-generator/", label: "Try salary negotiation generator" },
        secondaryCta: { href: "/salary-negotiation-email-template/", label: "Open negotiation template" },
        cards: [
          { title: "Acknowledge quickly", text: "Even if you need time, reply promptly so the employer knows you received the offer and are engaged." },
          { title: "Clarify the decision", text: "Separate acceptance, questions, negotiation, and decline messages so the next step is unmistakable." },
          { title: "Keep tone steady", text: "You can be enthusiastic and still ask for details about compensation, start date, remote work, or benefits." },
        ],
        templates: [
          { title: "Ask for time to review", body: `Hi [Name]

Thank you so much for the offer for the [Role] position. I am excited about the opportunity and appreciate the time the team has invested throughout the process.

Could I please have until [date] to review the details and follow up with my response? I want to make sure I consider everything carefully.

Thank you again,
[Name]` },
          { title: "Accept the offer", body: `Hi [Name]

Thank you for the offer to join [Company] as [Role]. I am happy to accept and excited to move forward.

Please let me know the next steps for paperwork, start date confirmation, and any onboarding materials I should review.

Best,
[Name]` },
        ],
        tips: [
          "If you plan to negotiate, ask one clear question or propose one concrete adjustment instead of sending a long list.",
          "Confirm important details in writing: title, start date, salary, bonus, equity, location, schedule, and benefits timing.",
          "When declining, thank them clearly and avoid over-explaining. A gracious note preserves the relationship.",
        ],
        related: [
          { href: "/salary-negotiation-generator/", label: "Salary Negotiation Generator", text: "Draft a polite counteroffer with your target number and reasoning." },
          { href: "/salary-negotiation-email-template/", label: "Salary Negotiation Email Template", text: "Use a structured compensation request." },
          { href: "/interview-thank-you-email/", label: "Interview Thank You Email", text: "Handle the earlier interview follow-up stage." },
        ],
      }}
    />
  );
}
