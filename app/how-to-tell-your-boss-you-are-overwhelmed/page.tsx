import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";

export const metadata: Metadata = {
  title: "How to Tell Your Boss You Are Overwhelmed | Email Template",
  description: "A calm script and email template for telling your boss you are overwhelmed without sounding weak, defensive, or vague.",
  alternates: { canonical: "https://kindreply.co/how-to-tell-your-boss-you-are-overwhelmed/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/how-to-tell-your-boss-you-are-overwhelmed/",
    siteName: "KindReply",
    title: "How to Tell Your Boss You Are Overwhelmed | Email Template",
    description: "A calm script and email template for telling your boss you are overwhelmed without sounding weak, defensive, or vague.",
  },
};

export default function Page() {
  return (
    <WorkplaceSeoPage
      config={{
        eyebrow: "Workload conversation",
        h1: "How to tell your boss you are overwhelmed",
        description: "Use this when your workload is no longer realistic and you need to ask for priorities, support, or scope changes without turning the message into a complaint.",
        primaryCta: { href: "/workplace/telling-your-boss-youre-overwhelmed/", label: "Open the full workplace reply" },
        secondaryCta: { href: "/professional-email-generator/", label: "Browse professional emails" },
        cards: [
          { title: "Be specific", text: "Name the workload, deadline, or competing priority instead of saying you are simply stressed." },
          { title: "Ask for prioritization", text: "Managers can act faster when you ask what should move, pause, or receive extra help." },
          { title: "Keep dignity intact", text: "The goal is not to prove exhaustion. It is to make the work plan realistic before quality drops." },
        ],
        templates: [
          { title: "Email to manager", body: "Hi [Manager],\n\nI wanted to flag that my current workload is becoming difficult to manage well. Right now I am balancing [Project A], [Project B], and [deadline/task], and I am concerned that quality or timing will slip if everything stays at the same priority.\n\nCould we take 20 minutes this week to decide what should come first, what can move, and where I may need support? I want to make sure I am focused on the work that matters most.\n\nThank you,\n[Name]" },
          { title: "Short Slack message", body: "Hi [Manager] — could we revisit priorities this week? I am at capacity with [specific items], and I want to make sure I am not spreading attention too thin across work that needs a higher standard." },
        ],
        tips: [
          "Bring a short list of active projects, deadlines, and tradeoffs so the conversation becomes practical.",
          "Avoid apologizing for having limits. You are raising a capacity issue, not asking for special treatment.",
          "If the workload risk affects customers, compliance, revenue, or team deadlines, say that clearly and calmly.",
        ],
        related: [
          { href: "/burnout-email-template/", label: "Burnout Email Template", text: "Ask for time or support when stress has become unsustainable." },
          { href: "/workplace/email-template-for-burnout-leave/", label: "Burnout Leave Reply", text: "Use the deeper workplace template for leave-specific wording." },
          { href: "/workplace-email-templates/", label: "Workplace Email Templates", text: "Browse scripts for hard work conversations." },
        ],
      }}
    />
  );
}
