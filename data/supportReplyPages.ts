import type { WorkplaceSeoPageConfig } from "@/components/WorkplaceSeoPage";

export type SupportReplyPage = { slug: string; title: string; description: string; config: WorkplaceSeoPageConfig };

export const supportReplyPages: Record<string, SupportReplyPage> = {
  'tools/email-reply-generator': {
    slug: 'tools/email-reply-generator',
    title: 'AI Email Reply Generator for Professional Responses | KindReply',
    description: 'Write kind, professional email replies for difficult work, customer, refund, follow-up, and boundary-setting conversations.',
    config: {
      eyebrow: 'AI email reply generator',
      h1: 'AI email reply generator for professional responses',
      description: 'Turn a rough message, customer note, or difficult email into a kind, clear reply that sounds professional instead of robotic.',
      primaryCta: { href: "#support-reply-tool", label: 'Try the support reply generator' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/workplace-email-templates/', label: 'Browse workplace templates' },
      cards: [
        { title: 'Professional tone', text: 'Rewrite blunt drafts into replies that are clear, warm, and easy to send.' },
        { title: 'Difficult situations', text: 'Handle rude emails, refunds, complaints, follow-ups, and polite declines.' },
        { title: 'Copy-ready structure', text: 'Start with acknowledgement, answer the real issue, and close with a next step.' },
      ],
      templates: [
        { title: 'General professional reply', body: 'Hi [Name],\n\nThanks for reaching out. I understand [briefly name the issue or request], and I appreciate you bringing it to my attention.\n\nHere is what I can do: [clear answer or next step]. If helpful, I can also [optional support].\n\nThanks again,\n[Name]' },
        { title: 'Firm but kind reply', body: 'Hi [Name],\n\nThank you for your message. I understand where you are coming from, but I am not able to [request] because [brief reason].\n\nWhat I can offer is [alternative or next step]. I hope that helps clarify the best path forward.\n\nBest,\n[Name]' },
      ],
      tips: [
        'Name the real concern in the first two lines so the recipient feels heard.',
        'Avoid over-apologizing when the answer is no; be warm, direct, and specific.',
        'Keep one clear next step at the end instead of adding multiple optional paths.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'tools/customer-service-reply-generator': {
    slug: 'tools/customer-service-reply-generator',
    title: 'Customer Service Reply Generator for Support Teams | KindReply',
    description: 'Create customer service replies for complaints, refunds, delays, cancellations, negative reviews, and escalation messages.',
    config: {
      eyebrow: 'Customer service replies',
      h1: 'Customer service reply generator',
      description: 'Draft calm, helpful customer support replies that acknowledge emotion, explain the policy, and protect trust.',
      primaryCta: { href: "#support-reply-tool", label: 'Generate a support reply' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/reply-to-negative-review/', label: 'See negative review replies' },
      cards: [
        { title: 'Acknowledge first', text: 'Show the customer you understood the problem before jumping into policy.' },
        { title: 'Set boundaries', text: 'Explain what you can and cannot do without sounding cold.' },
        { title: 'Close the loop', text: 'End with the next action, timeline, or escalation path.' },
      ],
      templates: [
        { title: 'Support complaint reply', body: 'Hi [Name],\n\nI am sorry this experience did not meet expectations. I understand how frustrating it is when [specific issue].\n\nI checked the details, and here is what we can do next: [resolution or next step]. I will also [follow-up action] so this does not get lost.\n\nThank you for giving us the chance to make this right,\n[Name]' },
        { title: 'Policy explanation reply', body: 'Hi [Name],\n\nThank you for reaching out. I understand why you are asking about [request].\n\nOur policy for this situation is [short policy], so I am not able to [unavailable option]. What I can do is [available option].\n\nBest,\n[Name]' },
      ],
      tips: [
        'Do not hide behind policy language; explain the human reason in plain English.',
        'If the customer is upset, start with the impact before the fix.',
        'Use one owner and one timeline when an issue needs follow-up.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'reply-to-rude-email': {
    slug: 'reply-to-rude-email',
    title: 'How to Reply to a Rude Email Professionally | KindReply',
    description: 'Copy professional replies to rude emails without escalating conflict, sounding defensive, or giving up your boundary.',
    config: {
      eyebrow: 'Difficult email response',
      h1: 'How to reply to a rude email professionally',
      description: 'Respond to a rude email with a steady tone, a clear boundary, and a practical next step — without matching the other person’s energy.',
      primaryCta: { href: "#support-reply-tool", label: 'Get more difficult reply templates' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/professional-email-generator/', label: 'Open professional email generator' },
      cards: [
        { title: 'Pause the reaction', text: 'Do not answer the emotional tone with more emotion.' },
        { title: 'Respond to substance', text: 'Address the real question, correction, or next step.' },
        { title: 'Protect the boundary', text: 'Name what you can continue discussing and what tone you need going forward.' },
      ],
      templates: [
        { title: 'Calm professional reply', body: 'Hi [Name],\n\nI want to respond to the substance of your message and keep the conversation productive. My understanding is that the main concern is [issue].\n\nHere is where things stand: [facts]. The next step I suggest is [next step].\n\nBest,\n[Name]' },
        { title: 'Boundary-setting reply', body: 'Hi [Name],\n\nI am happy to keep working through this, but I want to keep the conversation respectful and focused on the issue.\n\nThe decision point is [issue]. My recommendation is [next step].\n\nThanks,\n[Name]' },
      ],
      tips: [
        'Remove sarcasm, labels, and explanations of your feelings before sending.',
        'Use facts and next steps, not character judgments.',
        'If the email is abusive or threatening, escalate internally instead of handling it alone.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'reply-to-negative-review': {
    slug: 'reply-to-negative-review',
    title: 'Negative Review Response Generator | KindReply',
    description: 'Write calm, professional responses to negative reviews for local businesses, SaaS teams, service providers, and support teams.',
    config: {
      eyebrow: 'Review response',
      h1: 'Negative review response generator',
      description: 'Reply to negative reviews in a way that reassures future customers, invites resolution, and avoids public arguments.',
      primaryCta: { href: "#support-reply-tool", label: 'Unlock support reply templates' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/refund-response-generator/', label: 'Open refund response templates' },
      cards: [
        { title: 'Future buyers are reading', text: 'The public response is not only for the unhappy customer.' },
        { title: 'Take ownership', text: 'Acknowledge the experience without admitting things you cannot verify.' },
        { title: 'Move private', text: 'Invite the customer to a direct support path for details and resolution.' },
      ],
      templates: [
        { title: 'Public negative review reply', body: 'Hi [Name],\n\nThank you for sharing this feedback. I am sorry the experience did not match what you expected, and I understand how frustrating [issue] can be.\n\nWe would like to look into this and see what we can do to help. Please contact us at [support contact] with [order/account detail], and we will review it promptly.\n\nThank you,\n[Business]' },
        { title: 'Service recovery reply', body: 'Hi [Name],\n\nI am sorry for the trouble here. This is not the experience we want customers to have.\n\nWe are reviewing what happened and would appreciate the chance to make it right. Please reach us at [contact] so we can connect this review to your visit or order.\n\nBest,\n[Business]' },
      ],
      tips: [
        'Never argue point-by-point with a reviewer in public.',
        'Avoid copy-pasting the same apology on every review; mention one specific issue.',
        'Give a real contact path, not a vague “reach out sometime.”',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'refund-response-generator': {
    slug: 'refund-response-generator',
    title: 'Refund Response Generator for Customer Support | KindReply',
    description: 'Write refund approval, partial refund, refund denial, and policy explanation emails that stay clear and respectful.',
    config: {
      eyebrow: 'Refund replies',
      h1: 'Refund response generator',
      description: 'Handle refund requests with clarity and empathy, whether you are approving, denying, or offering a partial resolution.',
      primaryCta: { href: "#support-reply-tool", label: 'Generate a refund reply' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/tools/customer-service-reply-generator/', label: 'See customer service generator' },
      cards: [
        { title: 'Clarify the outcome', text: 'State whether the refund is approved, denied, partial, or still under review.' },
        { title: 'Explain the reason', text: 'Use short policy language customers can understand.' },
        { title: 'Offer a next step', text: 'Provide timeline, confirmation, credit, or escalation path.' },
      ],
      templates: [
        { title: 'Refund approved', body: 'Hi [Name],\n\nThanks for reaching out. We reviewed your request and approved the refund for [order/product].\n\nYou should see the refund processed to your original payment method within [timeframe]. If it does not appear by then, please let us know and we will help check the status.\n\nBest,\n[Name]' },
        { title: 'Refund not available', body: 'Hi [Name],\n\nThank you for contacting us. I understand why you are asking for a refund. After reviewing the request, we are not able to issue a refund because [short policy reason].\n\nWhat I can offer is [credit/alternative/help]. I know this may not be the answer you hoped for, but I wanted to be clear about the available options.\n\nBest,\n[Name]' },
      ],
      tips: [
        'Do not bury the refund decision at the end.',
        'If denying a refund, pair the policy with one useful alternative when possible.',
        'Include timing and payment method details when approving a refund.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'templates/apology-email': {
    slug: 'templates/apology-email',
    title: 'Apology Email Templates for Work and Customers | KindReply',
    description: 'Copy apology email templates for mistakes, delays, missed deadlines, customer issues, and professional follow-ups.',
    config: {
      eyebrow: 'Apology templates',
      h1: 'Apology email templates',
      description: 'Write apologies that take responsibility, repair trust, and move the situation forward without sounding dramatic or generic.',
      primaryCta: { href: "#support-reply-tool", label: 'Get premium apology templates' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/workplace-email-templates/', label: 'Open workplace templates' },
      cards: [
        { title: 'Own the impact', text: 'Say what happened and why it mattered.' },
        { title: 'Avoid excuses', text: 'Context can help, but it should not erase responsibility.' },
        { title: 'Repair with action', text: 'Explain what you are doing now and what changes next.' },
      ],
      templates: [
        { title: 'Work apology email', body: 'Hi [Name],\n\nI am sorry for [specific mistake or delay]. I understand this affected [impact], and I should have communicated sooner.\n\nHere is what I am doing now: [next step]. I will also [prevention step] so this does not happen again.\n\nThank you for your patience,\n[Name]' },
        { title: 'Customer apology email', body: 'Hi [Name],\n\nI am sorry for the trouble with [issue]. I understand this created frustration and took time you should not have had to spend.\n\nWe are taking care of it by [resolution]. I will follow up by [time] with [specific update].\n\nBest,\n[Name]' },
      ],
      tips: [
        'Avoid “sorry if” language. Apologize for the actual problem.',
        'Keep the fix concrete: owner, action, and timing.',
        'Do not over-promise compensation or policy exceptions you cannot provide.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'templates/follow-up-reply': {
    slug: 'templates/follow-up-reply',
    title: 'Follow-Up Reply Templates for Work and Customers | KindReply',
    description: 'Copy follow-up reply templates for no response, project updates, customer check-ins, invoices, interviews, and polite reminders.',
    config: {
      eyebrow: 'Follow-up replies',
      h1: 'Follow-up reply templates',
      description: 'Send follow-ups that are polite, specific, and easy to answer, whether you are nudging a customer, colleague, client, or hiring team.',
      primaryCta: { href: "#support-reply-tool", label: 'Unlock follow-up templates' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/follow-up-email-after-interview/', label: 'Open interview follow-up email' },
      cards: [
        { title: 'Give context', text: 'Remind them what this is about in one line.' },
        { title: 'Make it easy', text: 'Ask for one answer, file, approval, or decision.' },
        { title: 'Respect timing', text: 'Use urgency only when the timeline is truly urgent.' },
      ],
      templates: [
        { title: 'Polite follow-up', body: 'Hi [Name],\n\nI wanted to follow up on [topic/request]. When you have a moment, could you please let me know [specific question]?\n\nThis will help me [reason or next step].\n\nThanks,\n[Name]' },
        { title: 'Second follow-up', body: 'Hi [Name],\n\nJust checking back on [topic]. I know things get busy, so I wanted to bring this back to the top of your inbox.\n\nCould you send [specific item/answer] by [date] if possible?\n\nThank you,\n[Name]' },
      ],
      tips: [
        'Do not say “just following up” without explaining the decision you need.',
        'Include the original ask in the follow-up so they do not have to search.',
        'If it is the third follow-up, change the channel or close the loop politely.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'templates/decline-politely': {
    slug: 'templates/decline-politely',
    title: 'Decline Politely Email Templates | KindReply',
    description: 'Say no professionally to requests, invitations, job offers, discounts, partnerships, and customer asks without burning the relationship.',
    config: {
      eyebrow: 'Polite decline templates',
      h1: 'Decline politely email templates',
      description: 'Say no with warmth, clarity, and respect so the recipient understands the answer and the relationship stays intact.',
      primaryCta: { href: "#support-reply-tool", label: 'Get polite decline templates' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/job-offer-response-email/', label: 'Open job offer response email' },
      cards: [
        { title: 'Lead with thanks', text: 'Acknowledge the ask before saying no.' },
        { title: 'Give a short reason', text: 'You do not need a long defense; one clear reason is enough.' },
        { title: 'Offer a bridge', text: 'When appropriate, suggest timing, another resource, or a smaller yes.' },
      ],
      templates: [
        { title: 'Decline a request', body: 'Hi [Name],\n\nThank you for thinking of me for [request/opportunity]. I appreciate the invitation.\n\nI am not able to take this on right now because [brief reason]. I hope it goes well, and I appreciate you understanding.\n\nBest,\n[Name]' },
        { title: 'Decline but keep relationship', body: 'Hi [Name],\n\nThank you for reaching out. I am going to pass on this for now, but I appreciate you sharing it with me.\n\nPlease feel free to keep me in mind for [better-fit opportunity/timing] in the future.\n\nBest,\n[Name]' },
      ],
      tips: [
        'Do not soften the no so much that it sounds like a maybe.',
        'Skip excessive details that invite negotiation if the decision is final.',
        'Use “I am not able to” rather than blaming another person when possible.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'for-customer-support': {
    slug: 'for-customer-support',
    title: 'KindReply for Customer Support Teams | Reply Templates and AI Drafts',
    description: 'Use KindReply to write customer support replies for complaints, refunds, escalations, negative reviews, and difficult messages.',
    config: {
      eyebrow: 'For customer support',
      h1: 'KindReply for customer support teams',
      description: 'Give support teams calmer first drafts for high-emotion tickets: complaints, refund requests, negative reviews, escalations, and policy explanations.',
      primaryCta: { href: "#support-reply-tool", label: 'Generate a support reply' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/tools/customer-service-reply-generator/', label: 'Open customer service generator' },
      cards: [
        { title: 'Faster first drafts', text: 'Turn messy ticket context into a professional response structure.' },
        { title: 'Consistent tone', text: 'Keep replies kind, firm, and brand-safe across difficult cases.' },
        { title: 'Escalation-ready', text: 'Make it clear when a reply needs policy, manager, or billing review.' },
      ],
      templates: [
        { title: 'Support team first draft', body: 'Hi [Name],\n\nThank you for explaining what happened. I understand the main issue is [issue], and I can see why that would be frustrating.\n\nI checked [account/order/policy], and the best next step is [resolution]. I will [owner action] by [timeframe].\n\nBest,\n[Agent]' },
        { title: 'Escalation handoff', body: 'Hi [Name],\n\nThanks for your patience. I want to make sure this is reviewed properly, so I am escalating it to [team/person].\n\nThey will review [specific detail] and follow up by [timeframe]. I will keep this ticket open until we have the next update.\n\nBest,\n[Agent]' },
      ],
      tips: [
        'Use templates as first drafts, not final legal or policy decisions.',
        'Add order-specific details before sending so the reply does not feel generic.',
        'Create saved variants for refunds, delays, broken features, and angry reviews.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'for-freelancers': {
    slug: 'for-freelancers',
    title: 'KindReply for Freelancers | Client Email and Boundary Templates',
    description: 'Freelancers can use KindReply to reply to difficult clients, scope changes, late payments, revisions, project delays, and polite declines.',
    config: {
      eyebrow: 'For freelancers',
      h1: 'KindReply for freelancers',
      description: 'Write client emails that protect the relationship and the scope: late payments, revisions, unclear feedback, delays, boundaries, and polite no messages.',
      primaryCta: { href: "#support-reply-tool", label: 'Get freelancer reply templates' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/professional-email-generator/', label: 'Open professional email generator' },
      cards: [
        { title: 'Protect scope', text: 'Say what is included, what changed, and what costs extra.' },
        { title: 'Keep clients calm', text: 'Explain delays, revisions, and next steps without sounding defensive.' },
        { title: 'Ask for payment', text: 'Follow up on invoices with professional firmness.' },
      ],
      templates: [
        { title: 'Scope boundary reply', body: 'Hi [Name],\n\nThanks for sending this over. I can help with [request], but it falls outside the original scope we agreed on for [project].\n\nI can add it as an extra item for [price/timeline], or we can keep this round focused on [included work]. Which option would you prefer?\n\nBest,\n[Name]' },
        { title: 'Late payment follow-up', body: 'Hi [Name],\n\nI wanted to follow up on invoice [number], which was due on [date]. Could you let me know when payment is expected?\n\nOnce it is processed, I can continue with [next project step].\n\nThanks,\n[Name]' },
      ],
      tips: [
        'Keep money emails factual: invoice number, due date, amount, and next step.',
        'When scope expands, offer options instead of sounding annoyed.',
        'Do not apologize for reasonable boundaries.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'for-small-business': {
    slug: 'for-small-business',
    title: 'KindReply for Small Business | Customer Reply Templates',
    description: 'Small businesses can use KindReply to respond to customer complaints, refund requests, reviews, delays, cancellations, and service issues.',
    config: {
      eyebrow: 'For small business',
      h1: 'KindReply for small business replies',
      description: 'Small teams need fast, careful replies when customers are upset. KindReply helps turn stressful messages into clear customer communication.',
      primaryCta: { href: "#support-reply-tool", label: 'Generate a customer reply' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the message you need to answer, choose the goal and tone, and generate a sendable first draft using 1 KindReply credit.',
      },
      secondaryCta: { href: '/reply-to-negative-review/', label: 'Open negative review response' },
      cards: [
        { title: 'Handle complaints', text: 'Reply quickly without sounding rushed or dismissive.' },
        { title: 'Protect reputation', text: 'Write public review responses future customers can trust.' },
        { title: 'Stay consistent', text: 'Use repeatable language for refunds, delays, cancellations, and mistakes.' },
      ],
      templates: [
        { title: 'Small business complaint reply', body: 'Hi [Name],\n\nI am sorry this happened. I understand the issue was [issue], and I appreciate you letting us know.\n\nHere is what we can do now: [resolution]. If you can send [detail], we will take care of the next step.\n\nThank you,\n[Business]' },
        { title: 'Delay update', body: 'Hi [Name],\n\nI wanted to update you on [order/service]. We are running behind because [brief reason], and I am sorry for the inconvenience.\n\nThe current expected timing is [timeframe]. I will update you again by [time] if anything changes.\n\nBest,\n[Business]' },
      ],
      tips: [
        'For public messages, write for the next customer as much as the current one.',
        'Do not promise custom exceptions unless the business can honor them.',
        'Keep a saved reply bank for the five issues that repeat every week.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/reply-to-negative-review/", label: "Negative Review Response", text: "Respond publicly without escalating the issue." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
      ],
    },
  },
  'agentic-commerce-customer-service': {
    slug: 'agentic-commerce-customer-service',
    title: 'Agentic Commerce Customer Service Replies | KindReply',
    description: 'Customer service reply templates for agentic commerce, AI shopping agents, order questions, refund boundaries, and post-purchase support.',
    config: {
      eyebrow: 'Agentic commerce support',
      h1: 'Agentic commerce customer service replies',
      description: 'AI shopping agents can create faster purchases, but customers still need clear human support when orders, refunds, subscriptions, and expectations get messy.',
      primaryCta: { href: "#support-reply-tool", label: 'Generate a support reply' },
      tool: {
        eyebrow: 'AI support reply tool',
        title: 'Generate a reply with KindReply credits',
        description: 'Paste the customer message, choose the goal and tone, and draft a sendable response using 1 KindReply credit. Static templates on this page are free.',
      },
      secondaryCta: { href: '/tools/customer-service-reply-generator/', label: 'Open customer service generator' },
      cards: [
        { title: 'Agent-assisted orders', text: 'Explain what happened when a customer, AI shopping agent, or automation submitted the wrong item, address, or preference.' },
        { title: 'Refund boundaries', text: 'Stay helpful while clarifying policies for mistaken purchases, duplicate orders, delayed delivery, or subscription confusion.' },
        { title: 'Trust recovery', text: 'Use transparent language when automation caused friction and the customer needs a clear next step.' },
      ],
      templates: [
        { title: 'AI-assisted order mistake', body: 'Hi [Name],\n\nThanks for reaching out. I understand the order was placed through [agent/tool/channel], and the result did not match what you expected.\n\nHere is what I can do now: [resolution or next step]. If you can confirm [detail], I will help update the order or explain the available options.\n\nThank you,\n[Name]' },
        { title: 'Agentic commerce refund boundary', body: 'Hi [Name],\n\nI understand why you are asking for a refund after [order/subscription/action]. I checked the details, and our policy for this situation is [short policy].\n\nI am not able to [unavailable option], but I can [available option]. If you would like, I can also help with [next step].\n\nBest,\n[Name]' },
      ],
      tips: [
        'Name whether the issue came from the customer, the shopping agent, or the merchant system without blaming the customer.',
        'Separate policy from empathy: acknowledge the friction first, then explain the available options.',
        'For AI-assisted purchases, ask for one verifying detail before changing an order, refund, or subscription.',
      ],
      related: [
        { href: "/tools/customer-service-reply-generator/", label: "Customer Service Reply Generator", text: "Draft support replies for complaints, refunds, and escalations." },
        { href: "/refund-response-generator/", label: "Refund Response Generator", text: "Approve, deny, or explain refund decisions clearly." },
        { href: "/for-small-business/", label: "KindReply for Small Business", text: "Use repeatable customer communication templates for small teams." },
      ],
    },
  },
};
