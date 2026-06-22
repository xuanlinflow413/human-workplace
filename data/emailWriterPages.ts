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
  { href: "/resignation-email-writer/", label: "Resignation Email Writer", text: "Write a respectful resignation email for leaving gracefully." },
  { href: "/burnout-email-reply/", label: "Burnout Email Reply", text: "Explain capacity limits or ask for support professionally." },
  { href: "/difficult-conversation-email/", label: "Difficult Conversation Email", text: "Turn sensitive workplace moments into clear email drafts." },
  { href: "/polite-professional-email-replies/", label: "Polite Professional Email Replies", text: "Reply to requests, reminders, declines, and hard messages." },
  { href: "/ai-email-agent/", label: "AI Email Agent", text: "Turn repeat email situations into reusable workplace workflows." },
  { href: "/customer-service-email-writer/", label: "Customer Service Email Writer", text: "Write calm support replies for complaints, refunds, and escalations." },
  { href: "/apology-email-writer/", label: "Apology Email Writer", text: "Apologize clearly without sounding defensive or overdramatic." },
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

  "resignation-email-writer": {
    slug: "resignation-email-writer",
    title: "Resignation Email Writer for Work | KindReply",
    description: "Write a clear, respectful resignation email with a professional tone, transition details, and copy-ready examples.",
    eyebrow: "Resignation email writer",
    h1: "Resignation email writer for leaving gracefully",
    intro: "Create a resignation email that is brief, calm, and respectful — with enough transition detail to protect the relationship without over-explaining why you are leaving.",
    scenario: "Enter your role, last working day, relationship with your manager, and whether you want the tone to feel warm, formal, or concise.",
    tone: "Choose professional, grateful, concise, warm, or firm depending on the company culture and your exit situation.",
    output: "Generate a subject line, resignation message, transition sentence, and closing note you can copy into email.",
    rewrite: "Rewrite the draft to sound less emotional, more appreciative, shorter, or more confident before you send it.",
    examples: [
      { title: "Standard resignation email", body: "Subject: Resignation Notice\n\nHi [Manager Name],\n\nPlease accept this email as formal notice of my resignation from [Company]. My last working day will be [Date].\n\nI am grateful for the opportunity to work with the team, and I will do everything I can to support a smooth transition before my departure.\n\nBest,\n[Name]" },
      { title: "Warm resignation note", body: "Hi [Manager Name],\n\nI wanted to let you know that I have decided to resign from my role at [Company], with my last day being [Date].\n\nI truly appreciate the trust, support, and opportunities I have had here. Over the next [time period], I will document my work and help make the handoff as smooth as possible.\n\nThank you again,\n[Name]" },
    ],
    tips: [
      "Keep the reason brief unless there is a clear benefit to sharing more detail.",
      "Include your last working day so there is no confusion about timing.",
      "Avoid complaints, blame, or negotiation language in the resignation email itself.",
    ],
    related: sharedRelated,
  },
  "burnout-email-reply": {
    slug: "burnout-email-reply",
    title: "Burnout Email Reply Generator for Work | KindReply",
    description: "Write a careful burnout email reply that sets limits, asks for support, or explains capacity without sounding unprofessional.",
    eyebrow: "Burnout email reply",
    h1: "Burnout email replies that are honest and professional",
    intro: "Draft a workplace email that names capacity limits, asks for help, or responds to pressure without oversharing or sounding defensive.",
    scenario: "Describe the workload, the request you are replying to, what you can realistically do, and what support or timeline change you need.",
    tone: "Choose calm, transparent, firm, grateful, or manager-ready depending on how sensitive the situation is.",
    output: "Generate a reply that acknowledges the request, states capacity clearly, and proposes a realistic next step.",
    rewrite: "Rewrite the message to sound softer, more direct, less emotional, or more specific about priorities.",
    examples: [
      { title: "Capacity limit reply", body: "Hi [Name],\n\nThanks for flagging this. I want to be transparent that my current workload is at capacity, and I do not want to commit to a timeline I cannot deliver well.\n\nI can take on [specific part] by [date], or we can reprioritize [other task] if this needs to come first.\n\nBest,\n[Name]" },
      { title: "Asking for support", body: "Hi [Name],\n\nI want to keep this work moving, but I am starting to hit a capacity point where quality may be affected. Could we review priorities and decide what should move, pause, or be reassigned?\n\nMy recommendation is to focus first on [priority] and push [lower priority] to [date].\n\nThanks,\n[Name]" },
    ],
    tips: [
      "Name capacity and tradeoffs instead of only saying you are overwhelmed.",
      "Offer a specific option: reprioritize, extend the timeline, reduce scope, or get help.",
      "Avoid sharing private health details unless you intentionally choose to do so.",
    ],
    related: sharedRelated,
  },
  "difficult-conversation-email": {
    slug: "difficult-conversation-email",
    title: "Difficult Conversation Email Writer for Work | KindReply",
    description: "Write a professional email for hard workplace conversations, feedback, conflict, boundaries, and sensitive follow-ups.",
    eyebrow: "Difficult conversation email",
    h1: "Difficult conversation email writer for sensitive work moments",
    intro: "Turn a tense workplace situation into a clear email that names the issue, lowers defensiveness, and moves the conversation toward a practical next step.",
    scenario: "Describe the situation, who you are writing to, what happened, and what outcome you want from the conversation.",
    tone: "Choose respectful, direct, neutral, warm, firm, or de-escalating depending on the relationship and stakes.",
    output: "Generate an email with a steady opening, concise context, specific request, and next step.",
    rewrite: "Rewrite the draft to remove blame, reduce emotion, add a boundary, or make the ask clearer.",
    examples: [
      { title: "Addressing a concern", body: "Hi [Name],\n\nI wanted to follow up on [situation] because I think it would be helpful to clarify expectations before we move further.\n\nFrom my perspective, the main issue is [issue]. I would like us to align on [specific next step] so this does not continue creating confusion.\n\nWould you be open to discussing this on [date/time]?\n\nBest,\n[Name]" },
      { title: "Setting a boundary", body: "Hi [Name],\n\nI understand the urgency around [topic]. At the same time, I need to be clear that I am not able to take on [request] by [deadline] without shifting [other priority].\n\nA workable path would be [alternative]. Please let me know which direction you prefer.\n\nBest,\n[Name]" },
    ],
    tips: [
      "Write the email after you know the outcome you want, not while you are still venting.",
      "Use specific facts and next steps instead of broad labels about someone’s behavior.",
      "If the topic is very sensitive, use the email to request a conversation rather than resolve everything in writing.",
    ],
    related: sharedRelated,
  },
  "polite-professional-email-replies": {
    slug: "polite-professional-email-replies",
    title: "Polite Professional Email Replies for Work | KindReply",
    description: "Generate polite professional email replies for requests, reminders, feedback, declines, and sensitive workplace messages.",
    eyebrow: "Professional email replies",
    h1: "Polite professional email replies for work",
    intro: "Write replies that sound human, clear, and respectful — especially when you need to say no, ask for time, follow up, or respond to a difficult message.",
    scenario: "Paste the message you received, explain your goal, and note whether you want to accept, decline, clarify, apologize, or follow up.",
    tone: "Choose polite, concise, warm, firm, executive, or empathetic based on the relationship.",
    output: "Generate a copy-ready reply that acknowledges the sender, answers the real issue, and closes with a useful next step.",
    rewrite: "Rewrite the reply to be shorter, warmer, firmer, less robotic, or more senior-sounding.",
    examples: [
      { title: "Polite decline", body: "Hi [Name],\n\nThank you for thinking of me. I appreciate the invitation, but I will not be able to take this on right now.\n\nI hope it goes well, and I am happy to point you toward [alternative/resource] if helpful.\n\nBest,\n[Name]" },
      { title: "Clarifying reply", body: "Hi [Name],\n\nThanks for sending this over. Before I move forward, could you clarify [specific question]?\n\nOnce I have that detail, I can [next action] by [date/time].\n\nBest,\n[Name]" },
    ],
    tips: [
      "Answer the sender’s actual ask before adding extra context.",
      "Use one clear next step so the conversation does not drift.",
      "If you need to be firm, keep the wording calm and remove extra justification.",
    ],
    related: sharedRelated,
  },
  "ai-email-agent": {
    slug: "ai-email-agent",
    title: "AI Email Agent for Workplace Replies | KindReply",
    description: "Build repeatable AI email agent workflows for follow-ups, customer replies, apologies, boundaries, and difficult workplace emails.",
    eyebrow: "AI email agent",
    h1: "AI email agent for repeat workplace messages",
    intro: "Use KindReply as a lightweight AI email agent for recurring workplace communication: triage the situation, choose a tone, draft a reply, and rewrite it until it sounds human.",
    scenario: "Describe the repeat email situation, who is receiving it, the risk if the tone is wrong, and what decision or next step you need.",
    tone: "Choose professional, kind, firm, empathetic, customer-safe, concise, or manager-ready depending on the workflow.",
    output: "Generate a reusable email draft with a clear opener, context, action, and closing that can become a template for similar messages.",
    rewrite: "Rewrite the draft to be shorter, warmer, firmer, less robotic, more executive, or safer for customer-facing communication.",
    examples: [
      { title: "Repeat customer issue workflow", body: "Hi [Name],\n\nThanks for reaching out. I understand the concern about [issue], and I want to help resolve it clearly.\n\nThe best next step is [action]. I’ll also [supporting action] so we can avoid the same confusion going forward.\n\nBest,\n[Name]" },
      { title: "Internal follow-up workflow", body: "Hi [Name],\n\nI wanted to follow up on [topic] so we can keep the next step clear. My understanding is that we need [decision/action] by [date].\n\nCould you confirm whether [specific option] works, or suggest the right owner if this should move elsewhere?\n\nThanks,\n[Name]" },
    ],
    tips: [
      "Turn repeat situations into reusable workflows instead of drafting every email from scratch.",
      "Keep the final human review step; sensitive emails should not be sent automatically.",
      "Save the best version as a template only after checking that it fits the relationship and risk level.",
    ],
    related: sharedRelated,
  },
  "customer-service-email-writer": {
    slug: "customer-service-email-writer",
    title: "Customer Service Email Writer | KindReply",
    description: "Write calm customer service emails for complaints, refunds, delays, bug reports, negative feedback, and escalations.",
    eyebrow: "Customer service email writer",
    h1: "Customer service email writer for calm support replies",
    intro: "Draft customer support emails that acknowledge the issue, avoid blame, explain the next step, and keep the tone professional under pressure.",
    scenario: "Paste the customer message, the real policy or constraint, and what outcome you can offer: fix, refund, replacement, timeline, or escalation.",
    tone: "Choose empathetic, firm, policy-safe, apologetic, concise, or escalation-ready depending on the customer risk.",
    output: "Generate a support reply that validates the concern, states what you can do, and gives one clear next step.",
    rewrite: "Rewrite the response to sound less defensive, more human, more concise, or more aligned with your support policy.",
    examples: [
      { title: "Complaint response", body: "Hi [Name],\n\nI’m sorry this experience was frustrating. I understand why [issue] caused a problem, and I appreciate you taking the time to explain it.\n\nHere’s what we can do next: [specific action]. I’ll also [follow-up action] by [time/date].\n\nBest,\n[Name]" },
      { title: "Refund or policy reply", body: "Hi [Name],\n\nThanks for contacting us. I reviewed the situation, and based on [policy/context], we can [available option].\n\nIf you’d like to move forward, please send [needed detail], and I’ll help with the next step.\n\nBest,\n[Name]" },
    ],
    tips: [
      "Acknowledge the customer’s frustration before explaining the policy.",
      "Avoid saying what you cannot do until you have stated what you can do.",
      "Use specific timelines and ownership so the reply feels accountable.",
    ],
    related: sharedRelated,
  },
  "apology-email-writer": {
    slug: "apology-email-writer",
    title: "Apology Email Writer for Work | KindReply",
    description: "Write a sincere professional apology email for missed deadlines, mistakes, miscommunication, customer issues, and workplace conflict.",
    eyebrow: "Apology email writer",
    h1: "Apology email writer for professional mistakes",
    intro: "Create apology emails that take responsibility, name the impact, and offer a practical next step without over-explaining or sounding scripted.",
    scenario: "Describe what happened, who was affected, what you are responsible for, and what you can do to fix or prevent it.",
    tone: "Choose sincere, concise, accountable, customer-safe, manager-ready, or relationship-repair depending on the moment.",
    output: "Generate an apology email with a clear acknowledgement, ownership sentence, repair step, and professional closing.",
    rewrite: "Rewrite the apology to sound less defensive, less dramatic, more specific, shorter, or more senior.",
    examples: [
      { title: "Missed deadline apology", body: "Hi [Name],\n\nI’m sorry I missed the agreed timeline for [task]. I understand this created [impact], and I should have communicated the risk earlier.\n\nI’m working on [fix] now and will send an update by [time/date]. Going forward, I’ll flag timeline risks sooner so we can adjust before they affect the work.\n\nBest,\n[Name]" },
      { title: "Customer apology", body: "Hi [Name],\n\nI’m sorry for the confusion around [issue]. That should have been clearer, and I understand why it was frustrating.\n\nI’ve [action taken], and the next step is [next step]. Thank you for giving us the chance to make this right.\n\nBest,\n[Name]" },
    ],
    tips: [
      "Name the mistake directly instead of hiding it behind vague language.",
      "Do not over-apologize; one clear apology plus a repair step is stronger.",
      "Avoid explaining intent unless it helps the recipient understand the solution.",
    ],
    related: sharedRelated,
  },
};

export const emailWriterSlugs = Object.keys(emailWriterPages);

export function getEmailWriterPage(slug: string) {
  return emailWriterPages[slug];
}
