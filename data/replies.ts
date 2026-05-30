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
    title: "The Email That Lets You Leave With Your Head High",
    h1: "How to Resign Gracefully: A Thoughtful Email Template",
    metaTitle:
      "How to Resign Gracefully: Email Template & Examples | KindReply",
    metaDescription:
      "A real resignation email template that preserves relationships. Copy, personalize, and send with confidence.",
    situation: "It is Sunday night. You have made the decision. Tomorrow you will tell your manager you are leaving. You want to write something that feels honest — not corporate, not overly emotional, just human. You want them to remember you as someone who cared enough to do this right.",
    situationShort: "The moment you decide to leave, and want to be remembered for how you handled it.",
    template: `Subject: Resignation — [Your Name]

Dear [Manager's Name],

I wanted to let you know that I have decided to move on from my role at [Company], and my last day will be [Date — typically two weeks from now].

This was not an easy decision. I have genuinely valued my time here — especially [mention one specific thing: a project, a skill you developed, or a relationship]. I am grateful for the trust you placed in me.

I want to make this transition as smooth as possible. I am happy to document my current work, hand off ongoing projects, and do whatever would be most helpful for the team.

Thank you again for everything. I hope our paths cross again.

Warmly,
[Your Name]`,
    whyItWorks: [
      "It opens with clarity because ambiguity creates anxiety — your manager deserves to know immediately, not decode your intent.",
      "It names one specific thing you valued because generic gratitude feels like a form letter; a real memory shows you were paying attention.",
      "It offers to help with the transition because leaving gracefully means not leaving a mess for others to clean up.",
      "It ends with warmth and an open door because the people you worked with are still people — and relationships outlast jobs.",
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
      "This was not an easy decision. I have genuinely valued my time here.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "resignation-2",
    slug: "two-weeks-notice-email",
    category: "resignation",
    categoryLabel: "Resignation",
    title: "The Two-Week Notice That Does Not Overthink It",
    h1: "Two Weeks Notice Email: A Clear, Respectful Template",
    metaTitle:
      "Two Weeks Notice Email Template: Professional & Respectful | KindReply",
    metaDescription:
      "A straightforward two weeks notice email that covers the essentials without over-explaining. Copy-ready.",
    situation: "You need to give notice, and you do not want to write a novel. You want something clean, respectful, and done — so you can focus on the actual conversation, not the wording.",
    situationShort: "When you need to give notice without the drama or the essay.",
    template: `Subject: Two Weeks' Notice — [Your Name]

Dear [Manager's Name],

I am writing to formally give my two weeks' notice. My last day at [Company] will be [Date].

I am committed to making this transition smooth. Over the next two weeks, I will [mention one or two specific handoff tasks].

Thank you for the opportunity to be part of the team.

Best,
[Your Name]`,
    whyItWorks: [
      "It is short because your manager does not need your life story — they need a date and a plan.",
      "It states the last day clearly because ambiguity around timing creates scheduling chaos for everyone.",
      "It proactively mentions transition tasks because responsibility signals maturity, even as you leave.",
      "It keeps the tone neutral because this is a professional formality, not a personal confession.",
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
      "I am committed to making this transition smooth.",
    readTime: "2 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "resignation-3",
    slug: "resignation-without-burning-bridges",
    category: "resignation",
    categoryLabel: "Resignation",
    title: "Leaving Without Leaving Scars",
    h1: "How to Resign Without Burning Bridges",
    metaTitle:
      "How to Resign Without Burning Bridges: Email Template | KindReply",
    metaDescription:
      "Resign with dignity. A bridge-preserving email template for when you want to leave on the best possible terms.",
    situation: "You are walking away from a team you actually care about. You want them to know this is not about them — and you want to make sure the door stays open, because these are people you might want to work with again.",
    situationShort: "When you are leaving people behind, not just a job.",
    template: `Subject: Personal Update — [Your Name]

Dear [Manager's Name],

I have some personal news to share: I have accepted a new opportunity and will be leaving [Company]. My last day will be [Date].

I want to be clear about how much this team has meant to me. Working with you and the team on [specific project or experience] is something I will carry with me.

I am fully committed to making this transition smooth. I have started documenting [specific work] and am happy to train whoever takes over.

I would love to stay in touch. My personal email is [email] and I am on LinkedIn at [link].

Thank you for everything.

[Your Name]`,
    whyItWorks: [
      "It frames the resignation as 'personal news' because that wording feels less like a transaction and more like a conversation between humans.",
      "It names a specific memory because 'I will miss you all' is forgettable; 'I will never forget how we built X together' is not.",
      "It proactively offers documentation and training because the best goodbye is one where no one has to pick up the pieces.",
      "It explicitly invites future contact because the best professional relationships do not end when the job does.",
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
    title: "Asking for Time When You Have Nothing Left",
    h1: "How to Request Time Off for Burnout: Email Template",
    metaTitle:
      "Burnout Leave Email Template: How to Request Time Off | KindReply",
    metaDescription:
      "A respectful email template for requesting burnout leave. Clear, honest, and professional without oversharing.",
    situation: "You are exhausted in a way that sleep does not fix. You need time away, but you are worried about how it will look — will they think you are weak? Will they question your commitment? You need words that make this feel like a reasonable request, not a confession.",
    situationShort: "When you are running on empty and need permission to stop.",
    template: `Subject: Request for Leave — [Your Name]

Dear [Manager's Name],

I am writing to request some time away from work for health reasons. I would like to take [number] days off, starting [Date] and returning [Date].

I have been feeling mentally and physically exhausted, and I need this time to rest and recover so I can return to work fully present and effective.

Before I go, I will [mention handoff tasks: wrap up X, delegate Y, document Z]. I am also happy to be reached by email for anything truly urgent.

Thank you for your understanding.

[Your Name]`,
    whyItWorks: [
      "It frames the request around health because that is what this is — and health is a legitimate reason that requires no further justification.",
      "It specifies dates because vagueness creates anxiety for your manager; clarity creates space for them to plan.",
      "It proactively addresses the handoff because the less your manager has to worry about coverage, the more they can focus on supporting you.",
      "It does not over-explain because you do not owe details about your health — you owe your work your best self, and right now you need time to get back to that.",
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
      "I need this time to rest and recover so I can return fully present.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "burnout-2",
    slug: "talking-to-your-manager-about-burnout",
    category: "burnout-support",
    categoryLabel: "Burnout Support",
    title: "The Conversation You Keep Putting Off",
    h1: "How to Talk to Your Manager About Burnout",
    metaTitle:
      "How to Talk to Your Manager About Burnout: What to Say | KindReply",
    metaDescription:
      "A guide for having the burnout conversation with your manager. Includes what to say, what not to say, and how to prepare.",
    situation: "You have been struggling for weeks, maybe months. Every morning is harder than the last. You know you need to talk to your manager, but the thought of saying the words out loud makes your chest tight. You need a script that feels honest without feeling vulnerable.",
    situationShort: "When you know you need to say something, but the words keep getting stuck.",
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
      "It frames the conversation around work quality because that shifts the focus from 'what is wrong with you' to 'how do we fix this together' — which is much easier to say out loud.",
      "It shows you are being proactive because asking for help before things fall apart demonstrates strength, not weakness.",
      "It brings concrete examples because 'I am overwhelmed' is easy to dismiss; 'I am struggling with X, Y, and Z' is a problem to solve.",
      "It asks for collaboration because people want to help when they feel needed — and this invites your manager to be part of the solution, not just a witness to your struggle.",
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
      "I am not looking to step back — I am looking for support.",
    readTime: "4 min",
    updatedAt: "2025-06-01",
  },

  // === MANAGER REPLIES ===
  {
    id: "manager-replies-1",
    slug: "supportive-manager-response-to-burnout",
    category: "manager-replies",
    categoryLabel: "Manager Replies",
    title: "When Someone on Your Team Says They Are Burnt Out",
    h1: "How to Respond When a Team Member Says They Are Burnt Out",
    metaTitle:
      "Manager Response to Burnout: Supportive Email Template | KindReply",
    metaDescription:
      "A manager's guide to responding to burnout with empathy and action. Includes what to say and what to do next.",
    situation: "They just told you. Maybe in a one-on-one, maybe over Slack, maybe with tears. However it came out, they trusted you with something hard. Now you need to respond in a way that makes them feel heard — and leads to actual change, not just sympathy.",
    situationShort: "The moment a team member trusts you with their burnout — and you need to earn that trust.",
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
      "It validates their courage immediately because speaking up about burnout is terrifying — acknowledging that bravery makes them feel seen, not judged.",
      "It moves quickly to action because empathy without follow-through feels hollow; people need to know something will actually change.",
      "It offers specific proposals because 'we will figure it out' is vague and anxiety-inducing; 'here is exactly what I am proposing' creates safety.",
      "It schedules a follow-up because one conversation is not enough — ongoing commitment shows this was not just a box to check.",
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
    slug: "how-to-empathize-with-a-struggling-employee",
    category: "manager-replies",
    categoryLabel: "Manager Replies",
    title: "Noticing When Someone Is Not Okay",
    h1: "How to Empathize with a Struggling Employee: What to Say",
    metaTitle:
      "Empathizing with a Struggling Employee: Manager's Guide | KindReply",
    metaDescription:
      "What to say when an employee is going through a hard time. A manager's guide to empathy without overstepping.",
    situation: "You have watched them fade. The person who used to light up in meetings is now quiet. The reliable performer is missing deadlines. You do not know what is going on, but you know something is. You want to reach out without being intrusive, without making them perform their pain for you.",
    situationShort: "When you see someone struggling and want to offer support without demanding a performance.",
    template: `Hey [Employee's Name],

I have noticed you seem a bit off lately, and I wanted to check in. I am not looking for details — I just want you to know that I see you, and I care.

If there is anything I can do to make work easier right now — adjusting deadlines, shifting responsibilities, or just giving you space — please let me know. No pressure to share anything you do not want to.

Take care,
[Your Name]`,
    whyItWorks: [
      "It notices without prying because 'you seem off' is observational, not diagnostic — it says 'I see you' without saying 'explain yourself.'",
      "It explicitly removes pressure to share because when someone is struggling, the last thing they need is to feel obligated to perform their pain for you.",
      "It offers concrete help because 'let me know if you need anything' puts the burden on them; naming specific options makes it easier to accept.",
      "It is brief because a long message can feel overwhelming when someone is already carrying too much — sometimes the kindest thing is to keep it short.",
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
      "I see you, and I care. No pressure to share anything you do not want to.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  // === DIFFICULT CONVERSATIONS ===
  {
    id: "difficult-1",
    slug: "how-to-address-performance-issues-with-empathy",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "The Performance Conversation Nobody Wants to Have",
    h1: "How to Address Performance Issues with Empathy: Manager's Guide",
    metaTitle:
      "Addressing Performance Issues with Empathy: What to Say | KindReply",
    metaDescription:
      "A manager's guide to discussing performance issues without destroying morale. Includes email template and conversation framework.",
    situation: "You have been avoiding it. The missed deadlines, the dropped balls, the conversations you have had in your head a dozen times. Now you have to actually say it out loud — and you need to do it in a way that preserves their dignity while being clear about what needs to change.",
    situationShort: "When you have to tell someone they are not meeting expectations — and you want them to still feel like a person afterward.",
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
      "It frames the conversation as support because when someone hears they are underperforming, their first instinct is defensiveness — 'I want to help' disarms that before it starts.",
      "It uses specific examples because 'you need to do better' is cruel in its vagueness; naming exactly what you observed makes the problem solvable.",
      "It asks for their perspective because nobody wants to be talked at — inviting them into the conversation turns it from a verdict into a collaboration.",
      "It ends with a clear agreement because ambiguity creates anxiety; knowing exactly what is expected and when you will check in gives them a path forward.",
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
    title: "Feedback That Actually Lands",
    h1: "Giving Negative Feedback That Lands Well: A Manager's Template",
    metaTitle:
      "Giving Negative Feedback That Lands Well: Email & Conversation | KindReply",
    metaDescription:
      "How to deliver negative feedback so it is heard, not rejected. A real manager's template for difficult conversations.",
    situation: "You have feedback they need to hear. Not the easy kind — the kind that stings. You have seen them shut down before, or get defensive, or nod along and change nothing. This time you want to say it in a way they can actually hear, absorb, and act on.",
    situationShort: "When you have hard feedback and you are tired of watching it bounce off.",
    template: `Hey [Name],

I have some feedback I would like to share. It is about [specific situation], and I am bringing it up because I care about your growth here.

Here is what I observed: [specific behavior, without interpretation].

Here is the impact: [how it affected the team, project, or outcome].

Here is what I would love to see instead: [specific alternative behavior].

What do you think? I am curious about your perspective.

[Your Name]`,
    whyItWorks: [
      "It leads with care because 'I am bringing this up because I care' reframes feedback from criticism to investment — and that one shift changes everything about how it is received.",
      "It separates observation from interpretation because when you say 'you were dismissive,' they hear an attack; when you say 'you interrupted three times,' they hear a fact they can work with.",
      "It names the impact because feedback feels arbitrary until someone understands why it matters — the impact makes it real.",
      "It asks for their perspective because a monologue feels like a lecture; a dialogue feels like a conversation between people who respect each other.",
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
    title: "The Apology That Rebuilds What You Broke",
    h1: "How to Apologize Professionally: Email Template & Examples",
    metaTitle:
      "How to Apologize Professionally: Email Template | KindReply",
    metaDescription:
      "A real professional apology template that takes responsibility without over-apologizing. Copy-ready for workplace mistakes.",
    situation: "You messed up. Maybe it was a missed deadline, maybe it was something you said, maybe it was an email sent too quickly. Now someone is hurt, or frustrated, or disappointed in you. You need to own it — fully, without excuses — and show them it will not happen again.",
    situationShort: "When you have let someone down and you need to earn back their trust.",
    template: `Subject: Re: [Original subject]

Dear [Name],

I want to address what happened with [specific mistake]. I take full responsibility — this was my error, and I am sorry for the impact it had on [you / the team / the project].

Here is what I am doing to fix it: [specific action].

Here is what I am doing to prevent it from happening again: [specific process change].

I understand if this affects your trust in me, and I am committed to earning it back. Please let me know if there is anything else I can do.

[Your Name]`,
    whyItWorks: [
      "It names the mistake specifically because 'I am sorry for what happened' is vague and feels evasive; 'I am sorry I missed the deadline you needed' is specific and accountable.",
      "It takes responsibility because 'I am sorry you feel that way' is not an apology — it is blame dressed up in polite language; real accountability means saying 'this was my error.'",
      "It includes action because words are cheap; showing exactly what you are doing to fix it and prevent it proves you mean what you say.",
      "It acknowledges the impact on trust because pretending everything is fine ignores the real damage; naming it shows you understand what is at stake.",
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
      "I take full responsibility. This was my error, and I am sorry for the impact.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  // === LAYOFF COMMUNICATION ===
  {
    id: "layoff-1",
    slug: "manager-layoff-announcement-email",
    category: "layoff-communication",
    categoryLabel: "Layoff Communication",
    title: "Telling the Team Someone Is Gone",
    h1: "How to Announce Layoffs to Your Team: Manager's Email Template",
    metaTitle:
      "Manager Layoff Announcement Email Template | KindReply",
    metaDescription:
      "A dignified layoff announcement email for managers. Clear, compassionate, and professional.",
    situation: "The decision was made above you, or maybe you had to make it yourself. Either way, people you care about are gone, and the people who remain are looking at you for answers. You need to say something that honors the people who left while giving the survivors something to hold onto.",
    situationShort: "When people are gone and the ones left need you to say something that matters.",
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
      "It names the people because avoiding names feels dehumanizing — like they were just numbers on a spreadsheet; saying their names honors their humanity.",
      "It explicitly states this is not about performance because survivor guilt is real, and people need to know they are not next on some hidden list.",
      "It offers what you know and admits what you do not because false confidence destroys trust faster than honest uncertainty ever could.",
      "It creates a specific time for questions because anxiety needs somewhere to go — channeling it into a scheduled conversation is better than letting it fester in Slack DMs.",
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
    title: "Reaching Out When Someone Just Lost Their Job",
    h1: "What to Say to Someone Who Got Laid Off: A Supportive Guide",
    metaTitle:
      "What to Say to Someone Who Got Laid Off: Supportive Messages | KindReply",
    metaDescription:
      "The right words when a colleague gets laid off. What to say, what not to say, and how to actually help.",
    situation: "You just got the message, or saw the LinkedIn post, or heard through someone else. They are gone. You want to say something, but everything you think of sounds hollow — let me know if you need anything feels like nothing, and everything happens for a reason feels like an insult.",
    situationShort: "When a colleague just got laid off and you want to say something that actually means something.",
    template: `Hey [Name],

I just heard the news, and I am so sorry. I know how much you cared about the work you were doing, and this is not fair.

I want you to know how much I valued working with you. [Specific memory or compliment about their work].

I would love to stay in touch. My personal email is [email] and I am on LinkedIn at [link].

If there is anything I can do — introductions, references, or just someone to talk to — please let me know. I mean it.

Take care of yourself.

[Your Name]`,
    whyItWorks: [
      "It validates the unfairness because 'this is not fair' acknowledges their reality in a way that 'everything happens for a reason' never could — it says 'you are right to be upset.'",
      "It names a specific memory because generic compliments feel like copy-paste sympathy; recalling something real you worked on together makes it clear this is personal.",
      "It offers concrete help because 'anything I can do' is well-meaning but useless; naming specific offers — introductions, references, resume help — makes it easy for them to accept.",
      "It does not rush to silver linings because grief needs space; pushing someone to see the bright side before they are ready just makes them feel unseen.",
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
      "I know how much you cared about this work, and this is not fair.",
    readTime: "3 min",
    updatedAt: "2025-06-01",
  },

  {
    id: "layoff-3",
    slug: "how-to-communicate-layoffs-to-your-team",
    category: "layoff-communication",
    categoryLabel: "Layoff Communication",
    title: "The Hardest Email a Leader Ever Writes",
    h1: "How to Communicate Layoffs to Your Team: A Leader's Framework",
    metaTitle:
      "How to Communicate Layoffs to Your Team: Leader's Guide | KindReply",
    metaDescription:
      "A leader's framework for communicating layoffs with dignity. Includes email template, talking points, and follow-up strategy.",
    situation: "You have been up all night, or maybe you have not slept at all. The decisions were made, the conversations happened behind closed doors, and now you have to tell everyone else. You need to be clear, you need to be compassionate, and you need to give people a reason to still trust you tomorrow.",
    situationShort: "When you are the one who has to tell everyone — and you know nothing you say will make this okay.",
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
      "It opens with honesty because 'Today is a hard day' sets the right tone immediately — it tells people this is serious without trying to soften the blow with corporate language.",
      "It separates notification from announcement because affected people deserve to hear first; announcing to everyone at once betrays the trust of those leaving.",
      "It provides a timeline because uncertainty is the hardest part of layoffs; knowing what happens today, this week, and next gives people something to hold onto.",
      "It commits to transparency because in the absence of information, people invent their own — and what they invent is usually worse than the truth.",
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
      "Today is a hard day. I commit to sharing what I know, when I know it.",
    readTime: "4 min",
    updatedAt: "2025-06-01",
  },{
    id: "burnout-3",
    slug: "asking-for-a-mental-health-day",
    category: "burnout-support",
    categoryLabel: "Burnout Support",
    title: "The One-Line Request That Actually Gets Approved",
    h1: "How to Ask for a Mental Health Day (With a Template That Works)",
    metaTitle: "How to Ask for a Mental Health Day | KindReply",
    metaDescription: "Exact words to request a mental health day without oversharing or guilt. A simple message that protects your wellbeing, your privacy, and your peace of mind.",
    situation: "You wake up at 6:47 a.m. with your heart already racing before your feet touch the floor. The idea of opening your laptop makes your chest tighten. You reach for your phone, scroll for eleven minutes, then set it back down. You know you need a day — not to vacation, not to slack off, but to stop the spiral before it gets worse. But the words feel impossible. Will they think you&apos;re lazy? Will this go in your file? You stare at the blank message box for twenty minutes, typing and deleting, typing and deleting.",
    situationShort: "You need a day to protect your mental health but don&apos;t know how to ask without sounding unprofessional or weak.",
    template: `Subject: Taking a sick day today

Hi [Manager&apos;s Name],

I&apos;m not feeling well enough to work today and need to take a sick day. I&apos;ll be back tomorrow and will catch up on anything urgent then.

Thanks for understanding,
[Your Name]`,
    whyItWorks: [
      "It uses the word &quot;sick&quot; because mental health is health, and you do not owe details about your health to your employer.",
      "It is one line because over-explaining invites negotiation, and this is not a negotiation.",
      "It names your return date because it signals responsibility and removes the anxiety of an open-ended absence.",
      "It skips the apology because you are not doing something wrong — you are maintaining the one body and mind you have to do your job with."
    ],
    variations: [
      {
        label: "If you want to be slightly more direct",
        text: `Subject: Out today

Hi [Manager&apos;s Name],

I need to take a sick day today for my mental health. I&apos;ll be back online tomorrow and will handle anything urgent then.

[Your Name]`
      },
      {
        label: "If you need more than one day",
        text: `Subject: Out until [Day]

Hi [Manager&apos;s Name],

I need to take a few sick days to take care of my health. I&apos;ll be back on [Date]. I&apos;ve briefed [Coworker] on anything time-sensitive, and I&apos;ll catch up on the rest when I return.

[Your Name]`
      }
    ],
    mistakes: [
      "Oversharing details about your health — your personal information is private and protected.",
      "Apologizing repeatedly (&quot;I&apos;m so sorry, I know this is bad timing&quot;) — it frames your health as an inconvenience you caused.",
      "Asking permission with language like &quot;Would it be okay if...&quot; — you are informing, not requesting a favor.",
      "Promising to work from home or check email — a mental health day means actually stepping away, not doing your job from bed."
    ],
    related: ["burnout-1", "burnout-2", "burnout-4", "difficult-conversations-4"],
    faq: [
      {
        q: "Do I have to say it&apos;s a mental health day?",
        a: "No. In most workplaces, &quot;sick day&quot; covers mental and physical health. You only need to disclose what you are comfortable sharing."
      },
      {
        q: "Can my employer ask for a doctor&apos;s note?",
        a: "It depends on your company policy and local labor laws. For a single day, most employers do not require documentation."
      },
      {
        q: "What if my manager guilt-trips me?",
        a: "That is a reflection of poor management, not your work ethic. Document the interaction and consider looping in HR if it becomes a pattern."
      },
      {
        q: "How often is too often?",
        a: "If you find yourself needing mental health days frequently, that is a signal that your workload, environment, or wellbeing needs deeper attention — not a reason to ignore your needs."
      }
    ],
    shareQuote: "You do not need to earn the right to rest. You only need the courage to say you need it.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "difficult-conversations-3",
    slug: "saying-no-to-unpaid-overtime",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "When They Ask for More and You Have Nothing Left to Give",
    h1: "How to Say No to Unpaid Overtime (Without Burning Bridges)",
    metaTitle: "How to Decline Unpaid Overtime | KindReply",
    metaDescription: "Exact words to decline unpaid overtime without damaging relationships or sounding ungrateful. Protect your time and energy — you have a right to rest.",
    situation: "It is 5:42 p.m. on a Thursday. Your manager drops a &quot;quick&quot; project on your desk and says, &quot;We really need this by morning.&quot; You have dinner plans you have already canceled twice. Your paycheck does not stretch to cover the hours they keep taking. Your jaw clenches. You feel the familiar squeeze in your throat — the one that says if you say no, you are not a team player. But if you say yes, you are giving away pieces of yourself you will never get back. You open your notes app and stare at the cursor.",
    situationShort: "Your employer expects unpaid overtime and you need to decline without jeopardizing your job or reputation.",
    template: `Hi [Manager&apos;s Name],

I want to make sure I understand the timeline. Is this project expected to be completed outside of regular hours, or should I prioritize it during my standard schedule tomorrow?

I&apos;m happy to help, and I also want to be upfront that I have commitments outside of work this evening that I can&apos;t move. If this is urgent, could we look at what can be deprioritized or if there&apos;s support available?

Thanks,
[Your Name]`,
    whyItWorks: [
      "It asks for clarification instead of assuming, because sometimes managers do not realize they are implying unpaid work.",
      "It states your boundary plainly (&quot;I can&apos;t move&quot;) without over-apologizing, which models that your time is real and non-negotiable.",
      "It offers a problem-solving frame (&quot;what can be deprioritized&quot;) because collaboration is not the same as self-sacrifice.",
      "It removes the shame by treating your outside commitments as legitimate, which they are — you are a whole person, not a resource on standby."
    ],
    variations: [
      {
        label: "If the overtime pattern is ongoing",
        text: `Hi [Manager&apos;s Name],

I&apos;ve been putting in extra hours regularly, and I want to check in about how we&apos;re handling workload and coverage. I&apos;m committed to the team, and I also need to make sure my schedule is sustainable long-term. Can we find a time to talk through priorities and resourcing?

[Your Name]`
      },
      {
        label: "If you are willing to do some overtime but need boundaries",
        text: `Hi [Manager&apos;s Name],

I can stay for an hour tonight, but I need to leave by 7 p.m. To make that work, could you help me identify the one or two most critical pieces to finish?

[Your Name]`
      }
    ],
    mistakes: [
      "Saying yes while silently resenting it — resentment leaks out eventually, usually in ways that hurt you more than them.",
      "Apologizing for having a life outside work — you do not need to justify existing beyond your job description.",
      "Making it personal (&quot;You always do this to me&quot;) — keep it focused on workload and sustainability, not character attacks.",
      "Saying no in a way that sounds flippant or defensive — firm and kind is the goal, not cold or combative."
    ],
    related: ["difficult-conversations-1", "difficult-conversations-2", "burnout-1", "burnout-2"],
    faq: [
      {
        q: "Can my employer fire me for saying no to unpaid overtime?",
        a: "In at-will employment states, you can be fired for almost any non-discriminatory reason. However, if you are non-exempt, unpaid overtime may also violate wage laws. Know your classification and local labor laws."
      },
      {
        q: "What if everyone else is doing the overtime?",
        a: "Peer pressure is real, but &quot;everyone else&quot; does not pay your bills or manage your burnout. Your boundaries are yours to set."
      },
      {
        q: "How do I say no without sounding lazy?",
        a: "Frame it around sustainability and quality: &quot;I want to do this well, and I know I won&apos;t be at my best after a 12-hour day.&quot;"
      },
      {
        q: "What if they say this is just how the job is?",
        a: "Then you have information about whether this job fits your life. That is not failure — that is clarity."
      }
    ],
    shareQuote: "Your time is not a favor you grant your employer. It is a contract. Enforce it.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "difficult-conversations-4",
    slug: "telling-your-boss-youre-overwhelmed",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "The Words You Rehearse in the Bathroom Mirror",
    h1: "How to Tell Your Boss You&apos;re Overwhelmed (Without Sounding Incompetent)",
    metaTitle: "How to Tell Your Boss You&apos;re Overwhelmed | KindReply",
    metaDescription: "Honest words for telling your boss you're overwhelmed without sounding incompetent or weak. Start the conversation that protects your health and your job.",
    situation: "You are in the bathroom stall on the third floor, staring at your phone, practicing the sentence for the seventh time. Your inbox has 47 unread emails. Three projects are past due. Your hands are a little shaky. You used to love this job, but now you fantasize about getting sick just to have a reason to stop. You are not lazy. You are drowning. And you need your boss to know before you quietly quit or loudly break down.",
    situationShort: "You are drowning in workload and need to tell your boss before you burn out or break down.",
    template: `Hi [Manager&apos;s Name],

I want to be transparent with you: I&apos;m feeling overwhelmed by my current workload. I&apos;m committed to doing good work, and right now I&apos;m concerned that the volume is affecting the quality I can deliver.

Could we find 15 minutes this week to look at my priorities together? I&apos;d really value your input on what to focus on and what might be able to shift.

Thanks,
[Your Name]`,
    whyItWorks: [
      "It leads with transparency, not apology, because overwhelm is a workload issue — not a personal flaw.",
      "It connects volume to quality, which speaks your boss&apos;s language and frames the problem as business risk, not weakness.",
      "It asks for a specific, time-bound meeting because overwhelm feels endless, and a calendar invite makes it concrete and solvable.",
      "It invites collaboration (&quot;look at my priorities together&quot;) because good managers want to help, they just need to know where the pain is."
    ],
    variations: [
      {
        label: "If you need to flag it in a 1:1",
        text: `During our 1:1, I&apos;d like to talk about my current workload. I&apos;m stretched across too many priorities and I&apos;m worried something important is going to slip. I&apos;d love your help figuring out what to focus on.`
      },
      {
        label: "If the overwhelm is due to a specific project",
        text: `Hi [Manager&apos;s Name],

I want to flag that [Project Name] is requiring significantly more time than we scoped, and it&apos;s starting to crowd out my other responsibilities. Can we talk about adjusting the timeline or getting additional support?

[Your Name]`
      }
    ],
    mistakes: [
      "Waiting until you are in crisis to speak up — the earlier you flag it, the more options you both have.",
      "Apologizing for being overwhelmed (&quot;I&apos;m so sorry, I know I should be able to handle this&quot;) — you are not failing, the load is failing you.",
      "Dumping everything at once without prioritizing — come with a sense of what matters most, even if you need help sorting the rest.",
      "Expecting your boss to read your mind — they may have no idea how much is on your plate until you tell them explicitly."
    ],
    related: ["burnout-1", "burnout-2", "burnout-3", "difficult-conversations-1", "difficult-conversations-6"],
    faq: [
      {
        q: "Will my boss think I can&apos;t handle my job?",
        a: "A good boss will see self-awareness and proactive communication. A bad boss might judge you — but that is information about them, not you."
      },
      {
        q: "What if they just tell me to work harder?",
        a: "That is a red flag. If your boss responds to overwhelm with more pressure, document the conversation and consider escalating to HR or planning your exit."
      },
      {
        q: "Should I come with solutions?",
        a: "It helps, but it is not required. Sometimes the solution is simply visibility: your boss cannot fix what they do not know about."
      },
      {
        q: "What if I cry during the conversation?",
        a: "It is okay. You are human. Take a breath, ask for a moment if you need one, and remember that emotion at work is not unprofessional — it is evidence that you care."
      }
    ],
    shareQuote: "Overwhelm is not a character flaw. It is a signal — and saying it out loud is the first step.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "burnout-4",
    slug: "returning-to-work-after-burnout",
    category: "burnout-support",
    categoryLabel: "Burnout Support",
    title: "Walking Back In After Falling Apart",
    h1: "How to Return to Work After Burnout (With Confidence and Boundaries)",
    metaTitle: "Returning to Work After Burnout | KindReply",
    metaDescription: "Honest words for returning to work after burnout. Rebuild trust, set clear boundaries, and protect the recovery you fought hard for. One step at a time.",
    situation: "You have been out for three weeks. The leave was necessary — your body made the decision your mind was too afraid to. Now your return date is Monday, and your stomach knots every time you think about opening your email. You check the time: 11:23 p.m. on Sunday. You are not the same person who left. You have boundaries now, or at least the beginning of them. But you do not know how to walk back in without pretending nothing happened, or without oversharing what did.",
    situationShort: "You are returning to work after burnout leave and need to re-enter with boundaries and dignity.",
    template: `Hi [Manager&apos;s Name],

I&apos;m writing to confirm I&apos;ll be returning to work on [Date]. I appreciate the team&apos;s support during my time away.

As I transition back, I want to be intentional about setting myself up for sustainable success. I&apos;d like to schedule a brief check-in early next week to discuss my current priorities and make sure we&apos;re aligned on what comes next.

Looking forward to reconnecting,
[Your Name]`,
    whyItWorks: [
      "It confirms your return without over-explaining your absence, because your medical history is yours and yours alone.",
      "It uses the word &quot;sustainable&quot; to signal that you are not returning to the same conditions that broke you down.",
      "It requests a check-in because re-entry is a transition, not a switch you flip, and alignment prevents the old overwhelm from creeping back in.",
      "It models professionalism without performance — you do not have to prove your worth by pretending you are invincible."
    ],
    variations: [
      {
        label: "If you need specific accommodations",
        text: `Hi [Manager&apos;s Name],

I&apos;m returning on [Date] and wanted to give you a heads-up on a few things that will help me transition back smoothly. I&apos;ll need to keep my calendar lighter than usual for the first two weeks, and I may need to step away for brief breaks during the day. I&apos;m confident these adjustments will help me get back to full productivity quickly.

Can we schedule a short check-in for my first morning back?

[Your Name]`
      },
      {
        label: "If you are returning to a new team or role",
        text: `Hi [Manager&apos;s Name],

I&apos;m looking forward to returning on [Date] and getting up to speed with the team. I&apos;d appreciate a brief orientation to anything that has shifted while I was out, and I&apos;d like to set up a regular 1:1 rhythm to make sure I&apos;m integrating smoothly.

Thanks,
[Your Name]`
      }
    ],
    mistakes: [
      "Pretending nothing happened — you do not owe details, but you also do not have to act like the burnout was a vacation.",
      "Agreeing to catch up on everything immediately — re-entry is a ramp, not a cliff.",
      "Over-explaining your absence to coworkers — &quot;I was out on medical leave&quot; is enough.",
      "Dropping the boundaries that kept you healthy — the point of recovery is not to return to the thing that broke you."
    ],
    related: ["burnout-1", "burnout-2", "burnout-3", "difficult-conversations-4"],
    faq: [
      {
        q: "Do I have to tell my coworkers why I was out?",
        a: "No. &quot;I was on medical leave&quot; or &quot;I was out for a few weeks&quot; is sufficient. Anyone who pushes for more is being inappropriate."
      },
      {
        q: "What if my workload is the same as before?",
        a: "That is the moment to use your voice. The return is your opportunity to renegotiate the conditions that led to burnout."
      },
      {
        q: "How do I handle the guilt of being away?",
        a: "Guilt is common, but it is not accurate. You did not abandon your team — you preserved your ability to contribute at all."
      },
      {
        q: "What if I realize I&apos;m not ready to come back?",
        a: "Listen to that. Talk to your doctor, HR, or someone you trust outside work. Returning too early can undo your recovery."
      }
    ],
    shareQuote: "You did not fall apart because you were weak. You were human for too long in an inhuman system.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "difficult-conversations-5",
    slug: "telling-a-coworker-they-hurt-your-feelings",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "The Message You Draft and Delete Five Times",
    h1: "How to Tell a Coworker They Hurt Your Feelings (Without Making It Worse)",
    metaTitle: "Telling a Coworker They Hurt You | KindReply",
    metaDescription: "A real template for addressing hurt feelings with a coworker. Clear, kind, and designed to repair the relationship without escalating conflict.",
    situation: "They said it in the meeting. Or maybe they said it in Slack and then deleted it, but you saw. Now it is 9:30 p.m. and you are lying in bed replaying the moment, drafting responses in your head, wondering if you are overreacting. You like this person, or at least you have to work with them. But something they did landed wrong, and it is sitting in your chest like a stone. You do not want to blow up the relationship. You just want them to know.",
    situationShort: "A coworker said or did something that hurt you, and you want to address it without destroying the working relationship.",
    template: `Hi [Coworker&apos;s Name],

I want to talk with you about something that&apos;s been on my mind. In [the meeting / our conversation / your message], when you said [specific thing], it landed in a way that really hurt me.

I&apos;m bringing it up because I value our working relationship and I&apos;d rather address it directly than let it sit. I&apos;m not assuming bad intent — I just wanted you to know how it affected me.

I&apos;d welcome the chance to talk it through if you&apos;re open to it.

[Your Name]`,
    whyItWorks: [
      "It names the specific moment and words because vagueness invites defensiveness, and specificity invites understanding.",
      "It separates intent from impact (&quot;I&apos;m not assuming bad intent&quot;) because most people do not mean to hurt you, but impact still matters.",
      "It frames the relationship as worth protecting, which lowers the other person&apos;s guard and invites repair instead of argument.",
      "It offers a conversation rather than a verdict, because real resolution happens in dialogue, not in a one-sided accusation."
    ],
    variations: [
      {
        label: "If you want to keep it lighter",
        text: `Hey [Coworker&apos;s Name],

I wanted to flag something quickly. When you said [specific thing] earlier, it stung more than I think you probably intended. I know we&apos;re both juggling a lot, and I just wanted to be honest about how it landed with me. No big deal, just wanted to clear the air.

[Your Name]`
      },
      {
        label: "If it happened in a group setting",
        text: `Hi [Coworker&apos;s Name],

I wanted to follow up on what happened in [meeting]. When [specific thing was said], I felt embarrassed and a bit singled out. I wanted to mention it privately because I don&apos;t think that was your intent, and I&apos;d rather we address it one-on-one than let it linger.

[Your Name]`
      }
    ],
    mistakes: [
      "Bringing it up in front of others — shame escalates conflict; privacy invites repair.",
      "Using absolute language (&quot;You always...&quot; or &quot;You never...&quot;) — it triggers defensiveness and derails the conversation.",
      "Expecting them to read your mind — if you do not say it, they may never know, and the resentment will grow in you.",
      "Apologizing for having feelings (&quot;Sorry if this is dramatic&quot;) — your hurt is real and you do not need to minimize it to make it palatable."
    ],
    related: ["difficult-conversations-1", "difficult-conversations-2", "difficult-conversations-8"],
    faq: [
      {
        q: "What if they get defensive?",
        a: "Defensiveness is common. Stay calm, restate your observation, and give them space to process. You cannot control their reaction, only your delivery."
      },
      {
        q: "What if they say I&apos;m too sensitive?",
        a: "That is a dismissal, not a response. You are allowed to feel hurt, and &quot;too sensitive&quot; is often a way to avoid accountability."
      },
      {
        q: "Should I do this in person or over message?",
        a: "In person or video is usually better for nuance, but a thoughtful message is valid if face-to-face feels unsafe or too intense."
      },
      {
        q: "What if it keeps happening?",
        a: "Document the pattern and escalate to your manager or HR. One conversation is repair; repeated harm is a behavior problem."
      }
    ],
    shareQuote: "The conversation you fear having is often the one that saves the relationship.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "difficult-conversations-6",
    slug: "asking-for-help-at-work",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "Admitting You Are In Over Your Head",
    h1: "How to Ask for Help at Work (Without Sounding Incompetent)",
    metaTitle: "How to Ask for Help at Work | KindReply",
    metaDescription: "Exact words to ask for help at work without undermining your credibility. Clear, specific, and human — because everyone gets stuck and needs support sometimes.",
    situation: "You have been staring at the spreadsheet for two hours. It is 3:14 p.m. You have watched three tutorials. You have Googled until your eyes burn. The deadline is tomorrow and you are no closer than when you started. You close the tab, open it again, close it again. The voice in your head says you should know this by now. That asking for help will expose you as a fraud. But the other voice — the quieter, braver one — says that staying stuck is not strength, and that everyone who is good at their job once had to ask someone how.",
    situationShort: "You are stuck on a task and need to ask for help without feeling like a failure or burden.",
    template: `Hi [Coworker&apos;s or Manager&apos;s Name],

I&apos;m working on [specific task / project] and I&apos;ve hit a point where I could use some guidance. I&apos;ve tried [what you have attempted], and I&apos;m still not clear on [specific thing you need help with].

Would you have 10-15 minutes to walk through it with me? I want to make sure I&apos;m approaching it correctly rather than spinning my wheels.

Thanks,
[Your Name]`,
    whyItWorks: [
      "It names what you have already tried because it shows initiative and prevents the other person from suggesting things you have done.",
      "It asks for a specific, bounded amount of time (&quot;10-15 minutes&quot;) because vague requests feel heavy, and time-bound ones feel manageable.",
      "It frames the ask around doing it right, not just getting it done, which signals professionalism and care for quality.",
      "It normalizes help-seeking by treating it as a standard part of work, which it is — no one succeeds alone."
    ],
    variations: [
      {
        label: "If you need help from a peer",
        text: `Hey [Name],

You&apos;re really good at [skill], and I&apos;m struggling with [specific thing]. I&apos;ve tried [attempts], but I&apos;m still stuck. Could I borrow 10 minutes of your brain? I&apos;d really appreciate it.

[Your Name]`
      },
      {
        label: "If you need ongoing mentorship",
        text: `Hi [Manager&apos;s Name],

I&apos;ve realized I need more support in [area] to grow into my role effectively. Would you be open to a regular 15-minute check-in so I can ask questions and get feedback? I want to develop this skill rather than stay stuck.

[Your Name]`
      }
    ],
    mistakes: [
      "Waiting until the last minute — asking for help at 11 p.m. the night before a deadline feels like an emergency, not a learning moment.",
      "Apologizing excessively (&quot;I&apos;m so sorry to bother you, I know you&apos;re busy&quot;) — it frames your need as an inconvenience rather than a normal part of work.",
      "Being vague about what you need (&quot;I don&apos;t get any of this&quot;) — it puts the burden on the other person to diagnose your problem.",
      "Pretending you understand when you don&apos;t — nodding along wastes both of your time and sets you up to fail later."
    ],
    related: ["difficult-conversations-1", "difficult-conversations-4", "difficult-conversations-2"],
    faq: [
      {
        q: "Will people think I&apos;m incompetent if I ask for help?",
        a: "Research consistently shows that people who ask for help are perceived as more competent, not less. It signals self-awareness and a commitment to doing good work."
      },
      {
        q: "How many times is too many times to ask the same person?",
        a: "If you find yourself asking the same person repeatedly for the same thing, that is a signal you need training or documentation — not a reason to stay silent."
      },
      {
        q: "What if no one has time to help me?",
        a: "Escalate to your manager. Part of their job is making sure you have the resources to succeed, including time from others."
      },
      {
        q: "Should I ask in public or private?",
        a: "Private is usually safer for your ego and more respectful of the other person&apos;s time. Public asks can work in highly collaborative cultures."
      }
    ],
    shareQuote: "Asking for help is not admitting defeat. It is admitting you are human — and that is what makes teams work.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "resignation-4",
    slug: "declining-a-promotion-professionally",
    category: "resignation",
    categoryLabel: "Resignation",
    title: "Saying No to More When You Already Have Too Much",
    h1: "How to Decline a Promotion Professionally (Without Burning Bridges)",
    metaTitle: "How to Decline a Promotion | KindReply",
    metaDescription: "Honest words for turning down a promotion without burning bridges or sounding ungrateful. Protect your wellbeing while keeping trust and respect intact.",
    situation: "They called you into the conference room at 2:00 p.m. with smiles. The offer is flattering — more money, a better title, your name on bigger things. But your chest tightens instead of expanding. You nod while they talk, but your leg bounces under the table. You know what this role did to the last person. You know your life cannot absorb another 20 hours a week. You are supposed to be grateful. You are supposed to say yes. But everything in you is screaming no, and you have never been taught how to say that to an opportunity.",
    situationShort: "You have been offered a promotion that you know will harm your wellbeing, and you need to decline with grace.",
    template: `Hi [Manager&apos;s Name],

Thank you so much for offering me the [Role Name] position. I genuinely appreciate the confidence you have in me, and I have thought carefully about this.

At this point in my life, I need to be realistic about my capacity. Taking on this role right now would mean compromising either the quality of my work or my health, and I&apos;m not willing to do either. For that reason, I need to respectfully decline.

I care about this team and I want to keep contributing in my current capacity. I hope we can continue the conversation about other ways I can grow here that align with where I am.

Thank you again for thinking of me,
[Your Name]`,
    whyItWorks: [
      "It opens with genuine gratitude because the offer is a compliment, even if the timing or fit is wrong.",
      "It declines without over-explaining because your reasons are yours, and long justifications invite debate.",
      "It names your non-negotiables (quality and health) because they are valid criteria for decision-making, not selfishness.",
      "It leaves the door open for other growth because you are not rejecting your career — you are rejecting this specific ask at this specific time."
    ],
    variations: [
      {
        label: "If you want to suggest an alternative",
        text: `Hi [Manager&apos;s Name],

I&apos;m honored by the offer for [Role Name]. After careful thought, I don&apos;t think I can take it on in the way it deserves right now. What I would be excited about is [specific alternative — e.g., leading a project, mentoring, developing a skill]. Could we explore what growth might look like in that direction instead?

[Your Name]`
      },
      {
        label: "If you are open to revisiting later",
        text: `Hi [Manager&apos;s Name],

Thank you for the [Role Name] offer. I need to decline for now due to personal commitments outside of work that require my full attention. I&apos;d love to revisit this conversation in [timeframe] if the opportunity is still available.

[Your Name]`
      }
    ],
    mistakes: [
      "Saying yes out of guilt or flattery — a promotion you resent becomes a prison with a better title.",
      "Over-apologizing or framing it as a personal failure — declining with clarity is a strength, not a shortcoming.",
      "Disappearing or ghosting the conversation — it damages trust and makes you seem unprofessional.",
      "Badmouthing the role or the team — keep your decline focused on your fit and capacity, not on what is wrong with the opportunity."
    ],
    related: ["resignation-1", "resignation-5", "burnout-1", "burnout-2"],
    faq: [
      {
        q: "Will this hurt my career?",
        a: "A single declined promotion, handled well, rarely damages a career. A promotion accepted resentfully often leads to burnout, poor performance, and eventual departure — which does more harm."
      },
      {
        q: "Should I give my real reasons?",
        a: "You can share as much or as little as you are comfortable with. &quot;I need to prioritize my health and current commitments&quot; is honest and sufficient."
      },
      {
        q: "What if they try to convince me?",
        a: "Hold your boundary. A respectful manager will accept your decision. One who pressures you is showing you how they handle consent."
      },
      {
        q: "Can I change my mind later?",
        a: "Sometimes. If you leave the door open graciously, you may be able to revisit the conversation. But do not decline as a negotiation tactic — that erodes trust."
      }
    ],
    shareQuote: "The best career move is not always up. Sometimes it is the courage to say: not this, not now.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "difficult-conversations-7",
    slug: "talking-to-a-toxic-manager-calmly",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "Staying Human in a Room That Feels Unsafe",
    h1: "How to Talk to a Toxic Manager Calmly (And Protect Yourself)",
    metaTitle: "Talking to a Toxic Manager | KindReply",
    metaDescription: "Honest words for addressing toxic behavior from your manager. Calm, clear, and designed to protect your dignity while documenting exactly what happened.",
    situation: "Your manager just did it again. The sarcasm in front of the team. The deadline moved without warning. The &quot;feedback&quot; that lands like a personal attack. It is 4:17 p.m. Your hands are shaking. You close your laptop halfway, then open it again. You want to scream, or cry, or quit on the spot. But you need this job, at least for now. So you are looking for a way to have the conversation that does not make things worse, that does not let them off the hook, and that does not require you to become someone you are not.",
    situationShort: "Your manager is toxic and you need to address their behavior without escalating or sacrificing your dignity.",
    template: `Hi [Manager&apos;s Name],

I wanted to follow up on [specific incident or pattern]. When [specific thing happened], it had a real impact on my ability to [work effectively / feel supported / meet expectations].

I&apos;m bringing this up because I want us to have a working relationship where I can do my best work. I&apos;m open to hearing your perspective, and I also want to be clear about what I need from here: [specific need, e.g., clearer communication, advance notice, respectful tone].

I appreciate you taking the time to talk this through.

[Your Name]`,
    whyItWorks: [
      "It names a specific incident because toxic managers often deny vague accusations, but specifics are harder to dismiss.",
      "It connects their behavior to your work impact, which frames the issue as a business problem they are incentivized to care about.",
      "It states your need clearly because toxic managers often exploit ambiguity, and clarity is a form of self-protection.",
      "It stays calm and professional because your dignity is not dependent on their behavior — it is dependent on yours."
    ],
    variations: [
      {
        label: "If you need to document via email after a verbal conversation",
        text: `Hi [Manager&apos;s Name],

I wanted to follow up on our conversation today about [topic]. As we discussed, I need [specific need] to [meet expectations / work effectively]. I appreciate your commitment to [agreed action], and I&apos;ll plan to check in with you [timeframe] to see how it&apos;s going.

[Your Name]`
      },
      {
        label: "If you are setting a hard boundary",
        text: `Hi [Manager&apos;s Name],

I need to be direct with you: [specific behavior] is not acceptable to me, and it is affecting my work. I am committed to this team, and I need our working relationship to be respectful and professional. I hope we can move forward on that basis.

[Your Name]`
      }
    ],
    mistakes: [
      "Expecting them to change — some toxic managers will not, and your safety plan needs to include that possibility.",
      "Getting emotional in the moment — your feelings are valid, but in unsafe dynamics, calm documentation protects you more than catharsis.",
      "Having the conversation without documentation — follow up in writing so there is a record of what was said.",
      "Isolating yourself — talk to HR, a trusted colleague, or someone outside work. Toxic managers thrive on making you feel alone.",
    ],
    related: ["manager-replies-1", "difficult-conversations-1", "difficult-conversations-2", "resignation-5"],
    faq: [
      {
        q: "What if they retaliate?",
        a: "Document everything. Retaliation for reporting misconduct is illegal in many jurisdictions. Know your rights and consider consulting an employment lawyer."
      },
      {
        q: "Should I go to HR first?",
        a: "It depends. If the behavior is illegal (harassment, discrimination), yes. If it is toxic but not illegal, documenting and attempting direct communication first can strengthen your case."
      },
      {
        q: "What if I am too afraid to say anything?",
        a: "That is understandable. Your safety comes first. Start by documenting privately and talking to someone you trust outside the organization."
      },
      {
        q: "Can a toxic manager really change?",
        a: "Some can with accountability and coaching. Many cannot. Do not sacrifice your wellbeing waiting to find out which kind you have."
      }
    ],
    shareQuote: "You cannot control whether they listen. But you can control whether you stay silent.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "difficult-conversations-8",
    slug: "setting-boundaries-without-sounding-rude",
    category: "difficult-conversations",
    categoryLabel: "Difficult Conversations",
    title: "The Art of Saying No Without Saying Sorry",
    h1: "How to Set Boundaries at Work Without Sounding Rude",
    metaTitle: "Setting Work Boundaries Politely | KindReply",
    metaDescription: "Exact words to set workplace boundaries without guilt or over-explaining. Say no with clarity, keep your relationships intact, and protect your time and energy.",
    situation: "It happens again at 6:15 p.m. The Slack message. The &quot;quick favor.&quot; The assumption that your evening belongs to them. You read it twice. You set your phone face-down on the desk. You used to say yes automatically, the apology already forming in your throat. But something shifted. You are tired of being available and exhausted. You want to draw a line, but every version you draft sounds rude, or cold, or like you are asking for too much. You are not. You just need the words.",
    situationShort: "You need to set a boundary at work but every version you draft sounds rude, cold, or unreasonable.",
    template: `Hi [Name],

Thanks for thinking of me. I&apos;m not available to take this on right now — I&apos;m at capacity with my current priorities and want to make sure I&apos;m delivering on those well.

If the timeline is flexible, I could revisit this [specific timeframe]. Otherwise, I hope you can find the right support for it.

[Your Name]`,
    whyItWorks: [
      "It thanks them first because acknowledgment softens the decline and keeps the tone collaborative.",
      "It uses &quot;I&apos;m not available&quot; instead of &quot;I can&apos;t&quot; because it frames the boundary as a fact, not a personal failing.",
      "It names your current priorities because it shows your no is about focus and quality, not laziness or dislike.",
      "It offers a conditional alternative if appropriate, which shows good faith without abandoning your boundary."
    ],
    variations: [
      {
        label: "If you want to be warmer",
        text: `Hi [Name],

I really appreciate you reaching out. I have to say no this time — I&apos;m protecting some focused time on [current work] and I know I wouldn&apos;t be able to give this the attention it deserves. I hope you understand!

[Your Name]`
      },
      {
        label: "If it is about after-hours availability",
        text: `Hi [Name],

I&apos;m offline after 6 p.m. on weekdays and not checking messages until I&apos;m back online. If this is urgent, [specific alternative — e.g., &quot;please call my cell&quot; or &quot;the on-call person is [Name]&quot;]. Otherwise, I&apos;ll pick this up first thing tomorrow.

[Your Name]`
      }
    ],
    mistakes: [
      "Over-explaining — the more reasons you give, the more openings you create for negotiation.",
      "Apologizing for having limits — &quot;I&apos;m so sorry&quot; frames your boundary as an offense you committed.",
      "Saying yes while hoping they will read your reluctance — people rarely do, and you end up resentful.",
      "Making your boundary conditional on their reaction — a boundary is not a boundary if it only stands when others approve of it."
    ],
    related: ["difficult-conversations-1", "difficult-conversations-2", "difficult-conversations-3", "burnout-1"],
    faq: [
      {
        q: "Will setting boundaries hurt my career?",
        a: "Boundaries done well build respect. Colleagues know what to expect from you, and managers see someone who manages their workload thoughtfully."
      },
      {
        q: "What if they ignore my boundary?",
        a: "Repeat it calmly and consistently. If they continue to violate it, that is a them problem — and you may need to escalate or reassess the relationship."
      },
      {
        q: "How do I set boundaries with a manager?",
        a: "Frame it around doing your best work: &quot;I want to make sure I&apos;m delivering quality, and I know I can&apos;t do that if I&apos;m spread across too many things.&quot;"
      },
      {
        q: "What if I feel guilty?",
        a: "Guilt is common when you are new to boundaries. It does not mean you are doing something wrong — it means you are doing something different."
      }
    ],
    shareQuote: "A boundary is not a wall. It is a door with a handle — and you decide who turns it.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  },
  {
    id: "resignation-5",
    slug: "resigning-after-being-disrespected",
    category: "resignation",
    categoryLabel: "Resignation",
    title: "Leaving With Your Dignity When They Took Everything Else",
    h1: "How to Resign After Being Disrespected (With a Template That Protects You)",
    metaTitle: "Resigning After Disrespect | KindReply",
    metaDescription: "A dignified resignation template for when you have been disrespected. Professional, brief, and designed to protect your wellbeing and future references.",
    situation: "It was the last straw, though there have been so many straws you lost count months ago. The public humiliation. The broken promises. The way they looked at you like you were nothing. You used to believe hard work earned respect. Now you know better. You are done. But some part of you still wants to write the email that tells them exactly who they are. You want to be the bigger person. You also want to burn the building down. This template is for the space between those two truths.",
    situationShort: "You have been repeatedly disrespected at work and you are resigning with your dignity intact.",
    template: `Subject: Resignation — [Your Name]

Hi [Manager&apos;s Name],

Please accept this as formal notice of my resignation from my position at [Company Name], effective [Last Day — typically two weeks from date].

I am grateful for the opportunities I have had here, and I am committed to ensuring a smooth transition during my remaining time.

Thank you,
[Your Name]`,
    whyItWorks: [
      "It is brief because you do not owe a detailed explanation to people who have already shown they do not respect you.",
      "It maintains professionalism because your dignity is not dependent on their behavior — it is yours to keep or give away.",
      "It includes a transition commitment because it protects your reputation and references, which matter more than the satisfaction of a parting shot.",
      "It skips the grievance air because the people who disrespected you are not the people who will suddenly understand — your energy is better spent moving forward."
    ],
    variations: [
      {
        label: "If you want to leave immediately",
        text: `Subject: Resignation — [Your Name]

Hi [Manager&apos;s Name],

Please accept this as formal notice of my resignation from [Company Name], effective immediately.

I have made this decision based on my wellbeing and professional values. I am happy to provide a brief handoff document if helpful.

[Your Name]`
      },
      {
        label: "If you want to be slightly more direct",
        text: `Subject: Resignation — [Your Name]

Hi [Manager&apos;s Name],

I am resigning from my position at [Company Name], effective [Last Day].

I have appreciated some of my time here, and I have also been treated in ways that do not align with my values. I am choosing to move on."

I will complete my current responsibilities and document anything the team needs.

[Your Name]`
      }
    ],
    mistakes: [
      "Writing the angry email and sending it — cathartic, but it can follow you. Write it, save it, sleep on it.",
      "Expecting the resignation to finally make them see — they likely will not, and your closure cannot depend on their remorse.",
      "Quitting without a plan for income or healthcare — protect your practical needs even as you protect your dignity.",
      "Badmouthing the company to colleagues on your way out — it feels good briefly, but it can damage your professional network."
    ],
    related: ["resignation-1", "difficult-conversations-7", "burnout-1", "burnout-2"],
    faq: [
      {
        q: "Do I have to give two weeks&apos; notice?",
        a: "In most U.S. states, two weeks is standard but not legally required unless your contract says so. If your mental health requires an immediate exit, that is valid."
      },
      {
        q: "Should I tell HR why I am leaving?",
        a: "You can, especially if the disrespect involved harassment or discrimination. An exit interview is optional, and you control how much you share."
      },
      {
        q: "What if they ask me to stay?",
        a: "A counteroffer rarely fixes a toxic culture. If disrespect was the issue, more money or a title change will not solve it."
      },
      {
        q: "How do I handle my last two weeks?",
        a: "Do your work, document your handoff, and protect your energy. You do not need to perform gratitude you do not feel."
      }
    ],
    shareQuote: "You do not need their apology to heal. You need your own permission to leave.",
    readTime: "3 min",
    updatedAt: "2025-06-15"
  }
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

export function getAllReplies(): Reply[] {
  return replies;
}
