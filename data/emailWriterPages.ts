export type EmailWriterPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  scenario: string;
  tone: string;
  output: string;
  rewrite: string;
  examples: Array<{ title: string; body: string }>;
  tips: string[];
  related: Array<{ href: string; label: string; text: string }>;
};

const sharedRelated = [
  { href: "/ai-email-writer/", label: "AI Email Writer", text: "Start from the hub for workplace email writing workflows." },
  { href: "/tools/email-reply-generator/", label: "Email Reply Generator", text: "Paste a message and generate a professional reply." },
  { href: "/professional-email-generator/", label: "Professional Email Generator", text: "Draft clear workplace emails from scratch." },
  { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Write calm customer support replies." },
  { href: "/follow-up-email-after-interview/", label: "Interview Follow-Up Email", text: "Send a thoughtful post-interview follow-up." },
];

export const emailWriterPages: Record<string, EmailWriterPage> = {
  "cold-email-writer": {
    slug: "cold-email-writer",
    title: "Cold Email Writer for Professional Outreach | KindReply",
    description: "Write short, human cold emails for outreach, partnerships, sales, recruiting, and professional introductions.",
    eyebrow: "Cold email writer",
    h1: "Cold email writer for professional outreach",
    intro: "Draft cold emails that explain the reason for reaching out, respect the reader’s time, and close with one clear next step.",
    scenario: "Describe who you are contacting, why now, and what you want them to do next.",
    tone: "Choose a tone such as concise, warm, confident, or low-pressure.",
    output: "Generate a short first draft with a subject line, opener, value line, and simple ask.",
    rewrite: "Copy the email or rewrite it to sound warmer, shorter, more direct, or less salesy.",
    examples: [
      { title: "Partnership outreach", body: "Hi [Name],\n\nI’m reaching out because [specific reason]. I noticed [relevant detail], and I think there may be a useful overlap with [your work/company].\n\nWould you be open to a short conversation next week to see whether there is a fit?\n\nBest,\n[Name]" },
      { title: "Low-pressure sales intro", body: "Hi [Name],\n\nI work with [audience] on [problem]. Since your team is focused on [context], I thought this might be relevant.\n\nIf improving [outcome] is a priority, I’d be happy to send a short example or compare notes.\n\nBest,\n[Name]" },
    ],
    tips: [
      "Lead with a real reason for the email instead of a generic compliment.",
      "Keep the ask small: a reply, a quick call, or permission to send details.",
      "Avoid fake urgency, exaggerated claims, and over-personalized lines that feel automated.",
    ],
    related: sharedRelated,
  },
  "follow-up-email-writer": {
    slug: "follow-up-email-writer",
    title: "Follow-Up Email Writer for Polite Reminders | KindReply",
    description: "Write polite follow-up emails for no response, project updates, sales conversations, invoices, and job search messages.",
    eyebrow: "Follow-up email writer",
    h1: "Follow-up email writer for polite reminders",
    intro: "Create follow-ups that remind the recipient what this is about, ask for one decision, and avoid sounding pushy.",
    scenario: "Paste the original context, what you need, and how long it has been since the last message.",
    tone: "Choose polite, professional, friendly, firm, or closing-the-loop depending on the situation.",
    output: "Generate a follow-up that restates the context, names the ask, and gives an easy next step.",
    rewrite: "Copy the draft or rewrite it shorter, softer, firmer, or more specific before sending.",
    examples: [
      { title: "Polite status follow-up", body: "Hi [Name],\n\nI wanted to follow up on [topic/request]. When you have a chance, could you let me know [specific question or next step]?\n\nThis will help me [reason].\n\nThanks,\n[Name]" },
      { title: "Closing the loop", body: "Hi [Name],\n\nJust checking back on [topic]. If now is not the right time, no problem — I’m happy to close the loop for now.\n\nIf it is still useful, the next step would be [next step].\n\nBest,\n[Name]" },
    ],
    tips: [
      "Include enough context so the reader does not need to search old emails.",
      "Ask for one specific answer instead of several open-ended decisions.",
      "If it is a third follow-up, change the ask or politely close the loop.",
    ],
    related: sharedRelated,
  },
  "job-application-email-writer": {
    slug: "job-application-email-writer",
    title: "Job Application Email Writer | KindReply",
    description: "Write professional job application emails, recruiter messages, referral requests, and short cover-note emails.",
    eyebrow: "Job application email writer",
    h1: "Job application email writer for professional applications",
    intro: "Draft a concise job application email that introduces your fit, references the role, and makes it easy for the hiring team to review your materials.",
    scenario: "Enter the role, company, why you are applying, and any resume or portfolio links to mention.",
    tone: "Choose a tone such as professional, confident, warm, concise, or referral-friendly.",
    output: "Generate a subject line and short email with a role-specific intro, fit summary, and clear attachment note.",
    rewrite: "Copy the email or rewrite it to sound less generic, more senior, more concise, or more enthusiastic.",
    examples: [
      { title: "Application email", body: "Hi [Name],\n\nI’m excited to apply for the [Role] position at [Company]. My experience in [relevant area] and [specific strength] seems closely aligned with what your team is looking for.\n\nI’ve attached my resume and included [portfolio/link] for reference. Thank you for your time and consideration.\n\nBest,\n[Name]" },
      { title: "Referral request", body: "Hi [Name],\n\nI noticed [Company] is hiring for [Role], and I’m very interested in the opportunity. Since you know the team, I wondered whether you would feel comfortable sharing any advice or referring me if you think my background is a fit.\n\nNo pressure either way — I appreciate your time.\n\nBest,\n[Name]" },
    ],
    tips: [
      "Mention the role and company in the first two lines so the email feels specific.",
      "Do not paste your full cover letter into the email body; keep it easy to scan.",
      "Use a clear attachment or portfolio sentence before your sign-off.",
    ],
    related: sharedRelated,
  },
  "polite-email-rewriter": {
    slug: "polite-email-rewriter",
    title: "Polite Email Rewriter for Work Messages | KindReply",
    description: "Rewrite blunt, rushed, or emotional emails into polite professional messages without losing the point.",
    eyebrow: "Polite email rewriter",
    h1: "Polite email rewriter for work messages",
    intro: "Turn a rough draft into a message that stays clear, respectful, and human — especially when the topic is sensitive or high-stakes.",
    scenario: "Paste the draft you already wrote and name the situation: request, decline, apology, reminder, escalation, or boundary.",
    tone: "Choose polite, warm, firm, neutral, or executive depending on who will read it.",
    output: "Generate a cleaner version that keeps your meaning while removing harshness, over-apology, or AI-sounding phrasing.",
    rewrite: "Copy the revised email or rewrite it to be shorter, more direct, softer, or more confident.",
    examples: [
      { title: "Blunt to professional", body: "Hi [Name],\n\nI want to clarify the next step so we can keep this moving. I’m able to help with [specific part], but I won’t be able to take on [extra request] by [deadline].\n\nA workable option would be [alternative].\n\nBest,\n[Name]" },
      { title: "Too emotional to steady", body: "Hi [Name],\n\nI understand this has been frustrating, and I want to keep the conversation focused on a practical resolution. The main issue is [issue].\n\nMy suggested next step is [next step].\n\nBest,\n[Name]" },
    ],
    tips: [
      "Remove sarcasm, blame, and extra explanation before you send.",
      "Keep the boundary if one is needed; polite does not mean vague.",
      "Read the final email aloud to catch wording that sounds robotic or too formal.",
    ],
    related: sharedRelated,
  },
};

export const emailWriterSlugs = Object.keys(emailWriterPages);

export function getEmailWriterPage(slug: string) {
  return emailWriterPages[slug];
}
