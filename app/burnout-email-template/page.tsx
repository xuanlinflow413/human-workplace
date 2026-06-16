import type { Metadata } from "next";
import WorkplaceSeoPage from "@/components/WorkplaceSeoPage";

export const metadata: Metadata = {
  title: "Burnout Email Template for Work | Ask for Support Calmly",
  description: "Copy a professional burnout email template for asking your manager for support, time off, or workload changes without over-explaining.",
  alternates: { canonical: "https://kindreply.co/burnout-email-template/" },
  openGraph: {
    type: "website",
    url: "https://kindreply.co/burnout-email-template/",
    siteName: "KindReply",
    title: "Burnout Email Template for Work | Ask for Support Calmly",
    description: "Copy a professional burnout email template for asking your manager for support, time off, or workload changes without over-explaining.",
  },
};

export default function Page() {
  return (
    <WorkplaceSeoPage
      config={{
        eyebrow: "Burnout support",
        h1: "Burnout email template for work",
        description: "A burnout email should be honest enough to get support, but professional enough to protect your privacy and keep the next step clear.",
        primaryCta: { href: "/workplace/email-template-for-burnout-leave/", label: "Open burnout leave reply" },
        secondaryCta: { href: "/workplace-email-templates/", label: "Browse workplace templates" },
        cards: [
          { title: "Share impact", text: "Explain how burnout is affecting focus, timelines, or sustainability without listing every personal detail." },
          { title: "Ask for one next step", text: "Request a meeting, short leave, temporary priority reset, or reduced scope instead of a vague rescue." },
          { title: "Protect privacy", text: "You can be clear without disclosing medical, family, or mental health details you do not want recorded." },
        ],
        templates: [
          { title: "Burnout support email", body: "Hi [Manager],\n\nI wanted to be transparent that I am reaching a point where my current workload is not sustainable. I am still committed to doing strong work, but I am concerned that continuing at this pace will affect both my health and the quality of what I deliver.\n\nCould we discuss options this week — such as reprioritizing current work, moving a deadline, or identifying temporary support? I would appreciate your guidance on the most realistic path forward.\n\nThank you,\n[Name]" },
          { title: "Burnout leave request", body: "Hi [Manager],\n\nI need to request [time period] away from work to recover and return in a better place to contribute. I can help document urgent items before I step away and suggest coverage for [specific responsibility].\n\nPlease let me know the best process for confirming this formally.\n\nThank you,\n[Name]" },
        ],
        tips: [
          "If your company has HR or leave policies, check the formal process before sending a detailed personal explanation.",
          "Keep the message calm and concrete: current impact, requested next step, and handoff coverage if needed.",
          "If the situation involves health or safety, prioritize getting real support over perfect wording.",
        ],
        related: [
          { href: "/how-to-tell-your-boss-you-are-overwhelmed/", label: "Tell Your Boss You Are Overwhelmed", text: "Use this when the issue is workload capacity rather than leave." },
          { href: "/workplace/telling-your-boss-youre-overwhelmed/", label: "Overwhelmed Reply", text: "A deeper workplace script for capacity conversations." },
          { href: "/type-and-release/", label: "Type & Release", text: "Draft what you should not send before writing the professional version." },
        ],
      }}
    />
  );
}
