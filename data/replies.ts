export type Category =
  | "resignation"
  | "burnout-support"
  | "manager-replies"
  | "difficult-conversations"
  | "layoff-communication";

export interface Reply {
  id: string;
  slug: string;
  category: Category;
  categoryLabel: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  situation: string;
  situationShort: string;
  template: string;
  whyItWorks: string[];
  variations: {
    label: string;
    text: string;
  }[];
  mistakes: string[];
  related: string[];
  faq: {
    q: string;
    a: string;
  }[];
  shareQuote: string;
  readTime: string;
  updatedAt: string;
}

export const categories: {
  value: Category;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    value: "resignation",
    label: "Resignation",
    description: "Leave with grace and dignity",
    icon: "DoorOpen",
  },
  {
    value: "burnout-support",
    label: "Burnout Support",
    description: "Support yourself and others",
    icon: "Heart",
  },
  {
    value: "manager-replies",
    label: "Manager Replies",
    description: "Lead with empathy",
    icon: "Users",
  },
  {
    value: "difficult-conversations",
    label: "Difficult Conversations",
    description: "Speak with care",
    icon: "MessageCircle",
  },
  {
    value: "layoff-communication",
    label: "Layoff Communication",
    description: "Navigate hard news",
    icon: "ShieldAlert",
  },
];

export const replies: Reply[] = [
  // === RESIGNATION ===
  {
    id: "resignation-1",
    slug: "how-to-resign-gracefully",
    category: "resignation",
    categoryLabel: "Resignation",
    title: "How to Resign Gracefully",
    h1: "How to Resign Gracefully: A Thoughtful Email Template",
    metaTitle:
      "How to Resign Gracefully: Email Template & Examples | Human Workplace",
    metaDescription:
      "A real resignation email template that preserves relationships. Copy, personalize, and send with confidence.",
    situation:
      "You have decided to leave your job, but you want to maintain the relationships you have built. You are not burning bridges — you are closing a chapter with care.",
    situationShort:
      "Leaving a job while preserving relationships and professional reputation.",
    template: `Subject: Resignation — [Your Name]

Dear [Manager's Name],

I wanted to let you know that I have decided to move on from my role at [Company], and my last day will be [Date — typically two weeks from now].

This was not an easy decision. I have genuinely valued my time here — especially [mention one specific thing: a project, a skill you developed, or a relationship]. I am grateful for the trust you placed in me.

I want to make this transition as smooth as possible. I am happy to document my current work, hand off ongoing projects, and do whatever would be most helpful for the team.

Thank you again for everything. I hope our paths cross again.

Warmly,
[Your Name]`,
    whyItWorks: [
      "It opens with clarity — no beating around the bush.",
      "It acknowledges the relationship, not just the transaction.",
      "It offers to help with the transition, which signals maturity.",
      "It ends with warmth, leaving the door open for future connection.",
    ],
    variations: [
      {
        label: "More formal",
        text: `Dear [Manager's Name],

Please accept this note as formal notification of my resignation from [Company], effective [Date].

I have appreciated the opportunity to contribute to [specific team or project]. I am committed to ensuring a smooth transition and will prepare detailed handoff documentation.

Thank you for your leadership during my time here.

Sincerely,
[Your Name]`,
      },
      {
        label: "More personal (close relationship)",
        text: `Hey [Manager's Name],

I have some news — I have decided to take on a new opportunity, and my last day will be [Date].

I want you to know how much I have learned from you. The way you [specific thing they did] really shaped how I think about [topic].

I would love to stay in touch. Coffee sometime?

[Your Name]`,
      },
    ],
    mistakes: [
      "Announcing it to colleagues before your manager — always tell your manager first.",
      "Giving too much detail about why you are leaving — keep it brief and positive.",
      "Saying 'I am resigning effective immediately' unless absolutely necessary — it damages trust.",
      "Complaining or venting in the resignation email — this is not the place.",
    ],
    related: ["resignation-2", "resignation-3"],
    faq: [
      {
        q: "How much notice should I give?",
        a: "Two weeks is standard in the US. In Europe and other regions, one to three months is common. Check your contract.",
      },
      {
        q: "Should I mention where I am going?",
        a: "Only if you are comfortable. It is perfectly fine to say 'I have decided to pursue a new opportunity' without naming the company.",
      },
      {
        q: "What if my manager reacts badly?",
        a: "Stay calm and professional. Their reaction is not your responsibility. Focus on what you can control: your tone, your timing, and your transition plan.",
      },
      {
        q: "Should I send this email or have a conversation first?",
        a: "Have the conversation first, then send the email as a formal record. The conversation builds trust; the email creates clarity.",
      },
      {
        q: "Can I use this template for any industry?",
        a: "Yes. The principles — clarity, gratitude, transition support — apply across industries. Adjust the formality to match your workplace culture.",
      },
    ],
    shareQuote:
      "I wanted to let you know that I have decided to move on... This was not an easy decision.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "resignation-2",
    slug: "two-weeks-notice-email",
    category: "resignation",
    categoryLabel: "Resignation",
    title: "Two Weeks Notice Email",
    h1: "Two Weeks Notice Email: A Clear, Respectful Template",
    metaTitle:
      "Two Weeks Notice Email Template: Professional & Respectful | Human Workplace",
    metaDescription:
      "A straightforward two weeks notice email that covers the essentials without over-explaining. Copy-ready.",
    situation:
      "You need to give your two weeks notice in writing. You want it to be professional, clear, and brief — no drama, no oversharing.",
    situationShort:
      "Giving standard two weeks notice in a clear, professional email.",
    template: `Subject: Two Weeks' Notice — [Your Name]

Dear [Manager's Name],

I am writing to formally give my two weeks' notice. My last day at [Company] will be [Date].

I am committed to making this transition smooth. Over the next two weeks, I will [mention one or two specific handoff tasks].

Thank you for the opportunity to be part of the team.

Best,
[Your Name]`,
    whyItWorks: [
      "It is short — no one needs a novel for a two weeks notice.",
      "It states the last day clearly, avoiding confusion.",
      "It proactively mentions transition tasks, showing responsibility.",
      "It keeps the tone neutral and professional.",
    ],
    variations: [
      {
        label: "With reason (optional)",
        text: `Subject: Two Weeks' Notice — [Your Name]

Dear [Manager's Name],

I am writing to give my two weeks' notice. My last day will be [Date].

I have decided to [reason: pursue a new opportunity / focus on family / relocate]. I am grateful for my time here and want to ensure a smooth handoff.

Please let me know how I can best support the team during this transition.

Best,
[Your Name]`,
      },
    ],
    mistakes: [
      "Forgetting to state your last day clearly.",
      "Apologizing excessively — giving notice is a normal professional act.",
      "Including grievances or criticism — save that for an exit interview if at all.",
      "Sending it late on a Friday — give them time to process and plan.",
    ],
    related: ["resignation-1", "resignation-3"],
    faq: [
      {
        q: "Do I need to give a reason?",
        a: "No. A simple 'I have decided to move on' is sufficient. Only share what you are comfortable with.",
      },
      {
        q: "What if they ask me to leave immediately?",
        a: "Be prepared for this possibility, especially in sensitive roles. It is not personal — it is policy. Stay professional.",
      },
      {
        q: "Should I CC HR?",
        a: "Only if your company requires it or if your manager asks. Typically, your manager will forward it to HR.",
      },
    ],
    shareQuote:
      "I am writing to formally give my two weeks' notice. My last day will be [Date].",
    readTime: "2 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "resignation-3",
    slug: "resignation-without-burning-bridges",
    category: "resignation",
    categoryLabel: "Resignation",
    title: "Resignation Without Burning Bridges",
    h1: "How to Resign Without Burning Bridges",
    metaTitle:
      "How to Resign Without Burning Bridges: Email Template | Human Workplace",
    metaDescription:
      "Resign with dignity. A bridge-preserving email template for when you want to leave on the best possible terms.",
    situation:
      "You are leaving a job where you have strong relationships. You want to ensure people remember you fondly, not as someone who left messily.",
    situationShort:
      "Leaving while actively preserving professional relationships.",
    template: `Subject: Personal Update — [Your Name]

Dear [Manager's Name],

I have some personal news to share: I have accepted a new opportunity and will be leaving [Company]. My last day will be [Date].

I want to be clear about how much this team has meant to me. Working with you and the team on [specific project or experience] is something I will carry with me.

I am fully committed to making this transition smooth. I have started documenting [specific work] and am happy to train whoever takes over.

I would love to stay in touch. My personal email is [email] and I am on LinkedIn at [link].

Thank you for everything.

[Your Name]`,
    whyItWorks: [
      "It frames the resignation as 'personal news,' which feels less transactional.",
      "It names a specific memory, making the gratitude feel real.",
      "It proactively offers documentation and training.",
      "It explicitly invites future contact, keeping the relationship alive.",
    ],
    variations: [
      {
        label: "To a team (group email)",
        text: `Hi Team,

I wanted to share that I will be leaving [Company], with [Date] as my last day.

I have genuinely enjoyed working with all of you. The [specific project or moment] stands out as a highlight for me.

I have documented my current work [where] and am happy to answer questions over the next two weeks.

Please keep in touch — [personal email or LinkedIn].

[Your Name]`,
      },
    ],
    mistakes: [
      "Ghosting after giving notice — stay engaged until your last day.",
      "Badmouthing the company to colleagues during your notice period.",
      "Leaving without documenting your work — it hurts the team and your reputation.",
      "Not saying goodbye personally to people you worked closely with.",
    ],
    related: ["resignation-1", "resignation-2"],
    faq: [
      {
        q: "Should I send individual goodbye emails?",
        a: "To people you worked closely with, yes. A brief, personal note goes a long way.",
      },
      {
        q: "What if I am leaving because of a toxic environment?",
        a: "Still leave gracefully. Document your reasons for yourself, but do not vent in writing. Your professionalism will be remembered longer than the environment.",
      },
    ],
    shareQuote:
      "I want to be clear about how much this team has meant to me.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  // === BURNOUT SUPPORT ===
  {
    id: "burnout-1",
    slug: "email-template-for-burnout-leave",
    category: "burnout-support",
    categoryLabel: "Burnout Support",
    title: "Email Template for Burnout Leave",
    h1: "How to Request Time Off for Burnout: Email Template",
    metaTitle:
      "Burnout Leave Email Template: How to Request Time Off | Human Workplace",
    metaDescription:
      "A respectful email template for requesting burnout leave. Clear, honest, and professional without oversharing.",
    situation:
      "You are experiencing burnout and need time off to recover. You want to communicate this to your manager without going into unnecessary detail or sounding like you are giving up.",
    situationShort:
      "Requesting time off to recover from burnout in a professional way.",
    template: `Subject: Request for Leave — [Your Name]

Dear [Manager's Name],

I am writing to request some time away from work for health reasons. I would like to take [number] days off, starting [Date] and returning [Date].

I have been feeling mentally and physically exhausted, and I need this time to rest and recover so I can return to work fully present and effective.

Before I go, I will [mention handoff tasks: wrap up X, delegate Y, document Z]. I am also happy to be reached by email for anything truly urgent.

Thank you for your understanding.

[Your Name]`,
    whyItWorks: [
      "It frames the request around health, which is a legitimate and protected reason in most workplaces.",
      "It specifies dates, making it easy for your manager to plan.",
      "It proactively addresses the handoff, reducing your manager's anxiety.",
      "It does not over-explain — you do not owe a medical diagnosis.",
    ],
    variations: [
      {
        label: "More direct",
        text: `Dear [Manager's Name],

I need to take some time off for my mental health. I would like to be out from [Date] to [Date].

I will make sure [colleague] is briefed on [project] before I go. I will check email periodically but plan to be largely offline.

Thank you for supporting this.

[Your Name]`,
      },
      {
        label: "If you need longer leave",
        text: `Dear [Manager's Name],

I am writing to request an extended leave of absence for health reasons, beginning [Date]. I expect to need approximately [duration].

I have spoken with [HR / colleague] about coverage for my responsibilities. I will provide a more specific return date as soon as I am able.

I appreciate your support during this time.

[Your Name]`,
      },
    ],
    mistakes: [
      "Apologizing for needing rest — burnout is not a personal failing.",
      "Giving too much medical detail — keep it high-level.",
      "Not setting boundaries for contact — be clear about your availability.",
      "Waiting until you are completely broken — ask for help earlier.",
    ],
    related: ["burnout-2", "manager-replies-1"],
    faq: [
      {
        q: "Do I need a doctor's note?",
        a: "It depends on your company policy and local laws. In the US, FMLA may require documentation for extended leave. Check with HR.",
      },
      {
        q: "What if my manager is unsympathetic?",
        a: "Focus on the business impact: 'I need this time to return to full productivity.' If needed, involve HR.",
      },
      {
        q: "How much time should I request?",
        a: "Be honest about what you need. A week is a minimum for real recovery. Two to four weeks is not uncommon for significant burnout.",
      },
      {
        q: "Should I mention 'burnout' specifically?",
        a: "You can, but 'health reasons' or 'mental health' is sufficient. Use the language you are comfortable with.",
      },
    ],
    shareQuote:
      "I have been feeling mentally and physically exhausted, and I need this time to rest and recover.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "burnout-2",
    slug: "talking-to-your-manager-about-burnout",
    category: "burnout-support",
    categoryLabel: "Burnout Support",
    title: "Talking to Your Manager About Burnout",
    h1: "How to Talk to Your Manager About Burnout",
    metaTitle:
      "How to Talk to Your Manager About Burnout: What to Say | Human Workplace",
    metaDescription:
      "A guide for having the burnout conversation with your manager. Includes what to say, what not to say, and how to prepare.",
    situation:
      "You need to have a conversation with your manager about your burnout. You are worried about how it will be received and what it means for your career.",
    situationShort:
      "Preparing for and conducting a burnout conversation with your manager.",
    template: `Hi [Manager's Name],

I would like to schedule some time to talk about my workload and well-being. Would you be available for [15-20 minutes] this week?

I have been feeling overwhelmed lately, and I want to be proactive about addressing it before it affects my work or the team.

Thanks,
[Your Name]

---

During the conversation:

"I want to be honest with you. I have been feeling overwhelmed for the past [timeframe]. My workload has become unsustainable, and I am worried about the quality of my work slipping.

I am not looking to step back from responsibility — I am looking for support in prioritizing or redistributing some of my tasks so I can be effective where it matters most.

Some specific things I am struggling with: [list 2-3 concrete examples].

I would appreciate your guidance on how we can address this together."`,
    whyItWorks: [
      "It frames the conversation around work quality, not personal weakness.",
      "It shows you are being proactive, not reactive.",
      "It brings concrete examples, which makes the problem solvable.",
      "It asks for collaboration, not rescue — this invites your manager to be part of the solution.",
    ],
    variations: [
      {
        label: "If you need specific accommodations",
        text: `"I have been reflecting on what would help me be more effective. A few things come to mind:

1. [Specific request: e.g., 'Reducing my meeting load by one day a week']
2. [Specific request: e.g., 'Delegating the X project to someone else']
3. [Specific request: e.g., 'Taking Fridays off for the next month']

I am open to other ideas too. What do you think?"`,
      },
    ],
    mistakes: [
      "Waiting until you are in crisis — have the conversation early.",
      "Being vague — 'I am stressed' is less effective than 'I am struggling with X, Y, and Z.'",
      "Blaming others — focus on your experience, not your colleagues' shortcomings.",
      "Not preparing — write down your points beforehand so you stay on track.",
    ],
    related: ["burnout-1", "manager-replies-1"],
    faq: [
      {
        q: "Will this hurt my career?",
        a: "In healthy organizations, advocating for your well-being is seen as a strength. In toxic ones, it may reveal the culture is not a fit. Either way, you gain information.",
      },
      {
        q: "What if my manager says no?",
        a: "Ask for specific reasons. If the answer is still no, document the conversation and consider escalating to HR or exploring other options.",
      },
      {
        q: "Should I have this conversation in person or over email?",
        a: "In person or video is best for nuance. Use email to request the meeting, then have the real conversation face-to-face.",
      },
    ],
    shareQuote:
      "I am not looking to step back from responsibility — I am looking for support.",
    readTime: "4 min",
    updatedAt: "2025-06-01",
  },

  // === MANAGER REPLIES ===
  {
    id: "manager-replies-1",
    slug: "supportive-manager-response-to-burnout",
    category: "manager-replies",
    categoryLabel: "Manager Replies",
    title: "Supportive Manager Response to Burnout",
    h1: "How to Respond When a Team Member Says They Are Burnt Out",
    metaTitle:
      "Manager Response to Burnout: Supportive Email Template | Human Workplace",
    metaDescription:
      "A manager's guide to responding to burnout with empathy and action. Includes what to say and what to do next.",
    situation:
      "A team member has told you they are experiencing burnout. You want to respond in a way that shows you care, takes their concern seriously, and leads to concrete action.",
    situationShort:
      "Responding to an employee who has shared they are experiencing burnout.",
    template: `Subject: Re: Our conversation

Dear [Employee's Name],

Thank you for trusting me with this. It takes courage to speak up, and I want you to know that I hear you.

Your well-being matters, and it matters to the team too. Let us figure out how to get you the support you need.

Here is what I would like to propose:

1. [Specific action: e.g., "Reduce your meeting load starting next week"]
2. [Specific action: e.g., "Reassign the X project to Y"]
3. [Specific action: e.g., "Schedule a check-in in two weeks to see how you are feeling"]

I also want to make sure you know about [company resource: EAP, mental health days, etc.].

Let us find 20 minutes this week to talk through this in more detail. Does [day/time] work for you?

[Your Name]`,
    whyItWorks: [
      "It validates their courage immediately — this builds psychological safety.",
      "It moves quickly to action — empathy without action feels hollow.",
      "It offers specific proposals, not vague promises.",
      "It schedules a follow-up, showing ongoing commitment.",
    ],
    variations: [
      {
        label: "If they need immediate time off",
        text: `Dear [Employee's Name],

Thank you for telling me. Your health comes first, full stop.

Let us get you the time you need. I will approve [number] days off starting [Date]. We will figure out coverage together.

When you are ready, we will talk about what changes we can make to prevent this from happening again. There is no rush.

Take care of yourself.

[Your Name]`,
      },
      {
        label: "If you need to involve HR",
        text: `Dear [Employee's Name],

Thank you for sharing this with me. I want to make sure we get you the right support.

I am going to connect you with [HR person] who can walk you through our [EAP / leave options / mental health resources]. I will also be here to support you however I can.

Let us talk again after you have had a chance to connect with them.

[Your Name]`,
      },
    ],
    mistakes: [
      "Saying 'everyone is stressed' — this minimizes their experience.",
      "Asking for proof or justification — trust their self-assessment.",
      "Promising action but not following through — this destroys trust.",
      "Making it about you — 'I have been stressed too' shifts focus away from them.",
    ],
    related: ["burnout-1", "burnout-2"],
    faq: [
      {
        q: "What if their burnout is affecting their work?",
        a: "Address the work impact separately from the burnout. 'I have noticed X in your work. Let us figure out how to support you while maintaining team needs.'",
      },
      {
        q: "Should I tell the rest of the team?",
        a: "Only with the employee's explicit permission. Their health information is private.",
      },
      {
        q: "What if I do not have the authority to approve leave?",
        a: "Be their advocate. Escalate to whoever does have authority, and keep the employee informed throughout.",
      },
    ],
    shareQuote:
      "Thank you for trusting me with this. It takes courage to speak up.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "manager-replies-2",
    slug: "how-to-empathize-with-struggling-employee",
    category: "manager-replies",
    categoryLabel: "Manager Replies",
    title: "How to Empathize with a Struggling Employee",
    h1: "How to Empathize with a Struggling Employee: What to Say",
    metaTitle:
      "Empathizing with a Struggling Employee: Manager's Guide | Human Workplace",
    metaDescription:
      "What to say when an employee is going through a hard time. A manager's guide to empathy without overstepping.",
    situation:
      "An employee on your team is going through something difficult — personal loss, health issues, or just a rough patch. You want to acknowledge it without being intrusive.",
    situationShort:
      "Acknowledging an employee's difficult time with empathy and boundaries.",
    template: `Hey [Employee's Name],

I have noticed you seem a bit off lately, and I wanted to check in. I am not looking for details — I just want you to know that I see you, and I care.

If there is anything I can do to make work easier right now — adjusting deadlines, shifting responsibilities, or just giving you space — please let me know. No pressure to share anything you do not want to.

Take care,
[Your Name]`,
    whyItWorks: [
      "It notices without prying — 'you seem off' is observational, not diagnostic.",
      "It explicitly removes pressure to share — this respects boundaries.",
      "It offers concrete help, not just 'let me know if you need anything.'",
      "It is brief — a long message can feel overwhelming when someone is struggling.",
    ],
    variations: [
      {
        label: "After they have shared something specific",
        text: `Dear [Employee's Name],

Thank you for sharing that with me. I can not imagine how difficult this must be.

Here is what I want you to know: your job is secure, your priorities can shift, and we will figure this out together. There is no timeline for getting back to full capacity.

I will check in with you [frequency: weekly / biweekly] to see how you are doing. In the meantime, please do not hesitate to reach out.

[Your Name]`,
      },
    ],
    mistakes: [
      "Saying 'I know how you feel' — you probably do not.",
      "Offering unsolicited advice — just listen and support.",
      "Checking in once and never again — follow-through matters.",
      "Making promises you can not keep — be realistic about what you can offer.",
    ],
    related: ["manager-replies-1", "burnout-2"],
    faq: [
      {
        q: "What if they do not want to talk about it?",
        a: "Respect that. Let them know the door is open, then give them space. Check in again later.",
      },
      {
        q: "How often should I check in?",
        a: "Agree on a cadence together. Weekly is common at first, then adjust based on their preference.",
      },
    ],
    shareQuote:
      "I am not looking for details — I just want you to know that I see you, and I care.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  // === DIFFICULT CONVERSATIONS ===
  {
    id: "difficult-1",
    slug: "how-to-address-performance-issues-with-empathy",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "How to Address Performance Issues with Empathy",
    h1: "How to Address Performance Issues with Empathy: Manager's Guide",
    metaTitle:
      "Addressing Performance Issues with Empathy: What to Say | Human Workplace",
    metaDescription:
      "A manager's guide to discussing performance issues without destroying morale. Includes email template and conversation framework.",
    situation:
      "You need to address a performance issue with a team member. You want to be direct about the problem while preserving their dignity and motivation.",
    situationShort:
      "Discussing performance issues while preserving the employee's dignity.",
    template: `Subject: Check-in

Dear [Employee's Name],

I would like to schedule some time to talk about how things are going. I have noticed a few areas where I think we can work together to get you back on track, and I want to make sure we address them early.

This is not a disciplinary conversation — it is a support conversation. My goal is to understand what is getting in the way and figure out how I can help.

Are you available for [30 minutes] on [day]?

[Your Name]

---

During the conversation:

"I want to talk about something that has been on my mind. I have noticed [specific behavior or output] over the past [timeframe]. For example, [specific instance].

I am bringing this up because I believe in your potential here, and I want to make sure you have what you need to succeed.

Can you help me understand what might be contributing to this? Is there something I can do to support you better?"

[Listen. Then:]

"Here is what I would like to see change: [specific expectation]. Let us set a timeline of [timeframe] and check in [frequency]. Does that feel reasonable?"`,
    whyItWorks: [
      "It frames the conversation as support, not punishment — this lowers defensiveness.",
      "It uses specific examples, not vague generalizations — this makes the problem actionable.",
      "It asks for their perspective — this invites collaboration, not compliance.",
      "It ends with a clear agreement — this creates accountability without hostility.",
    ],
    variations: [
      {
        label: "If the issue is serious",
        text: `"I need to be direct with you. [Specific behavior] has fallen below the standard we need, and it is affecting [specific impact].

I want to be clear: this is serious, but it is also fixable. I am committed to helping you turn this around.

Here is what needs to change: [specific expectation]. We will check in [frequency] to review progress. If we do not see improvement by [date], we will need to discuss next steps.

I believe you can do this. Let us figure out how."`,
      },
    ],
    mistakes: [
      "Waiting too long — address issues early before they become patterns.",
      "Being vague — 'you need to do better' is not actionable.",
      "Making it personal — focus on behavior, not character.",
      "Not documenting — write a brief summary after the conversation for both of you.",
    ],
    related: ["manager-replies-2", "difficult-2"],
    faq: [
      {
        q: "Should I give them a warning?",
        a: "Frame it as a clear expectation with consequences, not a threat. 'If X does not improve by Y, we will need to discuss Z.'",
      },
      {
        q: "What if they get defensive?",
        a: "Stay calm. Acknowledge their feelings: 'I can see this is hard to hear.' Then return to specifics.",
      },
      {
        q: "How do I follow up without micromanaging?",
        a: "Set specific check-in dates in advance. Ask them to come prepared with updates on their progress.",
      },
    ],
    shareQuote:
      "This is not a disciplinary conversation — it is a support conversation.",
    readTime: "4 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "difficult-2",
    slug: "giving-negative-feedback-that-lands-well",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "Giving Negative Feedback That Lands Well",
    h1: "Giving Negative Feedback That Lands Well: A Manager's Template",
    metaTitle:
      "Giving Negative Feedback That Lands Well: Email & Conversation | Human Workplace",
    metaDescription:
      "How to deliver negative feedback so it is heard, not rejected. A real manager's template for difficult conversations.",
    situation:
      "You need to give negative feedback to a colleague or direct report. You want them to actually hear it and act on it, not shut down or get defensive.",
    situationShort:
      "Delivering negative feedback that leads to improvement, not defensiveness.",
    template: `Hey [Name],

I have some feedback I would like to share. It is about [specific situation], and I am bringing it up because I care about your growth here.

Here is what I observed: [specific behavior, without interpretation].

Here is the impact: [how it affected the team, project, or outcome].

Here is what I would love to see instead: [specific alternative behavior].

What do you think? I am curious about your perspective.

[Your Name]`,
    whyItWorks: [
      "It leads with care — 'I am bringing this up because I care' reframes feedback as an investment.",
      "It separates observation from interpretation — this reduces defensiveness.",
      "It names the impact — this makes the feedback feel relevant, not arbitrary.",
      "It asks for their perspective — this turns a monologue into a dialogue.",
    ],
    variations: [
      {
        label: "For peer-to-peer feedback",
        text: `Hey [Name],

Can I share something with you? I noticed [specific behavior] in [meeting/situation], and I wanted to flag it because I think it might be landing differently than you intend.

[Specific observation]. I found myself [your reaction].

I am not sure if you are aware of how it is coming across, so I wanted to mention it. Happy to talk more if helpful.

[Your Name]`,
      },
    ],
    mistakes: [
      "The 'feedback sandwich' — praise-criticism-praise feels manipulative.",
      "Using 'always' or 'never' — these are rarely true and feel like attacks.",
      "Giving feedback when you are angry — wait until you are calm.",
      "Not asking for their perspective — feedback should be a conversation, not a lecture.",
    ],
    related: ["difficult-1", "difficult-3"],
    faq: [
      {
        q: "What if they disagree?",
        a: "Listen to their perspective. You do not need to agree, but you do need to understand. Then restate your observation and move forward.",
      },
      {
        q: "Should I give feedback in person or in writing?",
        a: "In person for significant feedback. Use email to request the conversation or follow up with a summary.",
      },
      {
        q: "How do I know if my feedback landed?",
        a: "Watch for changed behavior. If nothing changes, follow up: 'I shared feedback about X. I have not seen a shift yet. What is getting in the way?'",
      },
    ],
    shareQuote:
      "I am bringing this up because I care about your growth here.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "difficult-3",
    slug: "how-to-apologize-professionally",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "How to Apologize Professionally",
    h1: "How to Apologize Professionally: Email Template & Examples",
    metaTitle:
      "How to Apologize Professionally: Email Template | Human Workplace",
    metaDescription:
      "A real professional apology template that takes responsibility without over-apologizing. Copy-ready for workplace mistakes.",
    situation:
      "You made a mistake at work — missed a deadline, sent the wrong information, or let someone down. You need to apologize in a way that rebuilds trust without groveling.",
    situationShort:
      "Apologizing for a workplace mistake while rebuilding trust.",
    template: `Subject: Re: [Original subject]

Dear [Name],

I want to address what happened with [specific mistake]. I take full responsibility — this was my error, and I am sorry for the impact it had on [you / the team / the project].

Here is what I am doing to fix it: [specific action].

Here is what I am doing to prevent it from happening again: [specific process change].

I understand if this affects your trust in me, and I am committed to earning it back. Please let me know if there is anything else I can do.

[Your Name]`,
    whyItWorks: [
      "It names the mistake specifically — vague apologies feel insincere.",
      "It takes responsibility — 'I am sorry you feel that way' is not an apology.",
      "It includes action — an apology without change is just words.",
      "It acknowledges the impact on trust — this shows emotional intelligence.",
    ],
    variations: [
      {
        label: "Quick apology (minor mistake)",
        text: `Hey [Name],

I made a mistake — [specific error]. Sorry about that. I have [fixed it / sent the corrected version].

Let me know if you need anything else.

[Your Name]`,
      },
      {
        label: "Apologizing to a client",
        text: `Dear [Client Name],

I want to personally address the issue with [specific problem]. This fell short of the standard we hold ourselves to, and I am truly sorry.

Here is how we are resolving it: [specific steps].

I am also [specific goodwill gesture: e.g., 'waiving the fee for this deliverable']. Your trust matters to us, and we are committed to earning it back.

Please reach out directly if you have any concerns.

[Your Name]
[Title]`,
      },
    ],
    mistakes: [
      "Saying 'I am sorry if you were offended' — this shifts blame to the other person.",
      "Over-apologizing — one sincere apology is better than five anxious ones.",
      "Making excuses — 'I was busy' undermines your accountability.",
      "Not following through — if you say you will fix it, fix it.",
    ],
    related: ["difficult-2", "difficult-1"],
    faq: [
      {
        q: "Should I apologize even if it was not entirely my fault?",
        a: "Apologize for your part. 'I am sorry for my role in this' is honest and accountable without taking blame that is not yours.",
      },
      {
        q: "How soon should I apologize?",
        a: "As soon as you realize the mistake. A delayed apology feels like you were hoping no one would notice.",
      },
      {
        q: "What if they do not accept my apology?",
        a: "Give them time. Focus on your actions, not their reaction. Consistent behavior rebuilds trust faster than repeated apologies.",
      },
    ],
    shareQuote:
      "I take full responsibility — this was my error, and I am sorry for the impact it had.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  // === LAYOFF COMMUNICATION ===
  {
    id: "layoff-1",
    slug: "manager-layoff-announcement-email",
    category: "layoff-communication",
    categoryLabel: "Layoff Communication",
    title: "Manager Layoff Announcement Email",
    h1: "How to Announce Layoffs to Your Team: Manager's Email Template",
    metaTitle:
      "Manager Layoff Announcement Email Template | Human Workplace",
    metaDescription:
      "A dignified layoff announcement email for managers. Clear, compassionate, and professional.",
    situation:
      "You need to announce layoffs to your remaining team. They are anxious, some of their colleagues are gone, and they need clarity about what happens next.",
    situationShort:
      "Announcing layoffs to the remaining team with clarity and compassion.",
    template: `Subject: An important update about our team

Team,

I need to share some difficult news. Due to [reason: restructuring / budget cuts / market conditions], we have made the painful decision to reduce our team size.

[Name] and [Name] are no longer with the company. This is not a reflection of their work — they are talented people who contributed greatly to what we have built.

I know this is unsettling. Here is what I can tell you about what comes next:

- [Specific information about team structure, priorities, or timeline]
- [Specific information about workload or responsibilities]
- [Specific information about support available to the team]

I do not have all the answers, and I will not pretend to. What I can promise is transparency as we learn more.

If you want to talk, my door is open. I will also hold a team meeting on [day/time] to answer questions.

[Your Name]`,
    whyItWorks: [
      "It names the people — avoiding names feels dehumanizing.",
      "It explicitly states this is not about performance — this reduces survivor guilt.",
      "It offers what you know and admits what you do not — this builds trust.",
      "It creates a specific time for questions — this channels anxiety into action.",
    ],
    variations: [
      {
        label: "If you had to lay off someone close to the team",
        text: `Team,

I have some very difficult news. [Name], who many of you have worked closely with, is no longer with the company.

I want to be direct about why: [brief, honest reason]. This decision was made at [leadership level], and I want you to know that I advocated for alternatives.

[Name] is a [genuine compliment about their work]. If you would like to reach out to them, I can share their contact information.

I will hold office hours this week for anyone who wants to talk. Here is my schedule: [times].

[Your Name]`,
      },
    ],
    mistakes: [
      "Using corporate euphemisms — 'right-sizing' or 'synergy optimization' feels cold.",
      "Not naming who was affected — this creates rumors and anxiety.",
      "Promising there will not be more layoffs unless you are certain — false hope is worse than uncertainty.",
      "Rushing through the announcement — give people time to process.",
    ],
    related: ["layoff-2", "layoff-3"],
    faq: [
      {
        q: "Should I send this email before or after individual conversations?",
        a: "After. Tell affected individuals first, then announce to the team. This respects the dignity of those leaving.",
      },
      {
        q: "What if I do not know if there will be more layoffs?",
        a: "Say that. 'I do not know if there will be more changes. I will share what I know as soon as I know it.'",
      },
      {
        q: "How do I handle the emotional aftermath?",
        a: "Be present. Hold extra one-on-ones. Acknowledge that people are grieving. Do not rush back to business as usual.",
      },
    ],
    shareQuote:
      "This is not a reflection of their work — they are talented people who contributed greatly.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "layoff-2",
    slug: "what-to-say-to-someone-who-got-laid-off",
    category: "layoff-communication",
    categoryLabel: "Layoff Communication",
    title: "What to Say to Someone Who Got Laid Off",
    h1: "What to Say to Someone Who Got Laid Off: A Supportive Guide",
    metaTitle:
      "What to Say to Someone Who Got Laid Off: Supportive Messages | Human Workplace",
    metaDescription:
      "The right words when a colleague gets laid off. What to say, what not to say, and how to actually help.",
    situation:
      "A colleague or friend was just laid off. You want to reach out but are not sure what to say. You do not want to say the wrong thing or make it worse.",
    situationShort:
      "Reaching out to a colleague who has been laid off with genuine support.",
    template: `Hey [Name],

I just heard the news, and I am so sorry. I know how much you cared about the work you were doing, and this is not fair.

I want you to know how much I valued working with you. [Specific memory or compliment about their work].

I would love to stay in touch. My personal email is [email] and I am on LinkedIn at [link].

If there is anything I can do — introductions, references, or just someone to talk to — please let me know. I mean it.

Take care of yourself.

[Your Name]`,
    whyItWorks: [
      "It validates the unfairness — 'this is not fair' acknowledges their reality.",
      "It names a specific memory — this makes the compliment feel real, not generic.",
      "It offers concrete help — 'anything I can do' is vague; naming specific offers shows sincerity.",
      "It does not rush to silver linings — let them grieve before pivoting to optimism.",
    ],
    variations: [
      {
        label: "If you are close friends",
        text: `[Name],

I am heartbroken for you. This sucks, and you do not deserve it.

I know you will land on your feet eventually, but I also know that does not help right now. So here is what I am offering:

1. I will review your resume and LinkedIn whenever you are ready.
2. I will intro you to [specific people] in my network.
3. I will be here to vent to, no solutions offered unless you ask.

Call me anytime.

[Your Name]`,
      },
      {
        label: "If you are a former manager",
        text: `Dear [Name],

I want to reach out personally. The decision to eliminate your role was driven by [reason], not by your performance. Your work on [specific project] was exceptional, and I was proud to have you on the team.

I have already told [reference contact] about you, and I would be happy to provide a detailed reference or LinkedIn recommendation.

Please stay in touch. I want to know where you land next — it will be somewhere great.

[Your Name]`,
      },
    ],
    mistakes: [
      "Saying 'everything happens for a reason' — this minimizes their pain.",
      "Asking 'were you expecting it?' — this puts them in a defensive position.",
      "Immediately offering job search advice — they may not be ready.",
      "Saying 'at least you got a severance' — do not compare their loss to a silver lining.",
    ],
    related: ["layoff-1", "layoff-3"],
    faq: [
      {
        q: "Should I reach out if we were not close?",
        a: "Yes. A brief, kind message from someone unexpected can mean a lot. Keep it simple: 'I heard the news and wanted to say I am thinking of you.'",
      },
      {
        q: "What if they do not respond?",
        a: "That is okay. They may be overwhelmed. Your message still mattered. Do not take it personally.",
      },
      {
        q: "How can I actually help?",
        a: "Offer specific, low-effort help: resume review, introductions, reference. Then follow through when they ask.",
      },
    ],
    shareQuote:
      "I know how much you cared about the work you were doing, and this is not fair.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "layoff-3",
    slug: "how-to-communicate-layoffs-to-team",
    category: "layoff-communication",
    categoryLabel: "Layoff Communication",
    title: "How to Communicate Layoffs to Your Team",
    h1: "How to Communicate Layoffs to Your Team: A Leader's Framework",
    metaTitle:
      "How to Communicate Layoffs to Your Team: Leader's Guide | Human Workplace",
    metaDescription:
      "A leader's framework for communicating layoffs with dignity. Includes email template, talking points, and follow-up strategy.",
    situation:
      "You are a leader who needs to communicate layoffs to your team. You need to balance transparency with compassion, and provide a path forward.",
    situationShort:
      "A comprehensive framework for leaders communicating layoffs to their team.",
    template: `Team,

Today is a hard day. I need to tell you that we are reducing our team, and [number] roles are being eliminated.

The people affected are [names or 'colleagues across X, Y, and Z teams']. This decision was made because of [honest, brief reason: market conditions, restructuring, etc.]. It is not a reflection of their performance.

Here is what happens next:

**Today:**
- Affected individuals are being notified individually right now.
- If you are receiving this email and have not had a conversation, your role is not affected.

**This week:**
- I will hold open office hours [times] for anyone who wants to talk.
- HR is available at [contact] for questions about benefits, severance, etc.

**Going forward:**
- Our immediate priorities are [specific priorities].
- I will share more about our team structure by [date].

I know you have questions, and I may not have all the answers yet. I commit to sharing what I know, when I know it.

[Your Name]`,
    whyItWorks: [
      "It opens with honesty — 'Today is a hard day' sets the right tone.",
      "It separates notification from announcement — affected people hear first.",
      "It provides a timeline — this reduces anxiety about what comes next.",
      "It commits to transparency — this is what people need most in uncertainty.",
    ],
    variations: [
      {
        label: "For a smaller team (5-10 people)",
        text: `Team,

I need to share some painful news. We are letting go of [Name] and [Name]. Their last day is [Date].

This is happening because [reason]. I want to be clear: this is about [reason], not about them. Both of them have been valuable members of this team.

I hate that this is happening. I also know that my job now is to support all of you — those leaving and those staying.

For those leaving: I will do everything I can to help with references, introductions, and anything else you need.

For those staying: I know you are wondering what this means for you. Let us talk. I am available [times] this week.

[Your Name]`,
      },
    ],
    mistakes: [
      "Announcing before telling affected individuals — this is a betrayal of trust.",
      "Using passive voice — 'roles were eliminated' avoids accountability.",
      "Giving false reassurance — only promise what you can guarantee.",
      "Disappearing after the announcement — your presence is needed most now.",
    ],
    related: ["layoff-1", "layoff-2"],
    faq: [
      {
        q: "How much detail should I share about the business reasons?",
        a: "Share enough to be credible, not so much that it creates new anxiety. 'Market conditions led us to restructure' is usually sufficient.",
      },
      {
        q: "What if people ask if more layoffs are coming?",
        a: "If you know, say so. If you do not know, say that. 'I do not have information about future changes, and I will share what I know as soon as I do.'",
      },
      {
        q: "How do I handle my own emotions?",
        a: "It is okay to show that this is hard for you too. But do not make the team comfort you. Process your own feelings outside of work.",
      },
    ],
    shareQuote:
      "Today is a hard day. I need to tell you that we are reducing our team.",
    readTime: "4 min",
    updatedAt: "2025-06-01",
  },
];

export function getReplyBySlug(slug: string): Reply | undefined {
  return replies.find((r) => r.slug === slug);
}

export function getRepliesByCategory(category: Category): Reply[] {
  return replies.filter((r) => r.category === category);
}

export function getRelatedReplies(ids: string[]): Reply[] {
  return replies.filter((r) => ids.includes(r.id));
}

export function getAllSlugs(): string[] {
  return replies.map((r) => r.slug);
}
