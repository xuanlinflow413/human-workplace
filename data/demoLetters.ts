export type Tone = "warm" | "confident" | "concise" | "career-change";

export interface ToneOption {
  value: Tone;
  label: string;
  description: string;
}

export const toneOptions: ToneOption[] = [
  { value: "warm", label: "Warm", description: "Friendly and genuine" },
  { value: "confident", label: "Confident", description: "Direct and assured" },
  { value: "concise", label: "Concise", description: "Short and focused" },
  { value: "career-change", label: "Career change", description: "Pivoting paths" },
];

export interface ParsedJD {
  jobTitle: string;
  companyName: string;
  keyRequirement: string;
}

export interface DemoLetter {
  id: string;
  jobTitle: string;
  companyName: string;
  sampleJobDescription: string;
  sampleFitDetail: string;
  tone: Tone;
  generatedCoverLetter: string;
}

// Pre-generated high-quality demo letters — no API calls needed
export const demoLetters: DemoLetter[] = [
  {
    id: "product-manager",
    jobTitle: "Product Manager",
    companyName: "Stripe",
    sampleJobDescription: `We're looking for a Product Manager to lead our checkout experience team. You'll work with engineers, designers, and data scientists to build payment flows that convert better. Need someone who can analyze drop-off data, run A/B tests, and translate user research into clear product specs. 3+ years in product management required. Experience in fintech or e-commerce preferred.`,
    sampleFitDetail: "I led checkout optimization at a Shopify store that increased conversion by 23% through simplifying the payment flow and adding Apple Pay",
    tone: "confident",
    generatedCoverLetter: `Dear Hiring Manager,

I noticed the Product Manager role on Stripe's checkout team and it caught my attention because of the focus on payment flows that actually convert better, not just look cleaner on the surface.

At my last company, I led checkout optimization for a Shopify store and increased conversion by 23%. The biggest win came from simplifying the payment flow and adding Apple Pay — turns out reducing friction at the final step matters more than fancy design. I spent a lot of time looking at drop-off data, running A/B tests, and trying to understand why people who added items to their cart never finished buying. That experience taught me that small changes in the right place often beat big redesigns that miss the point.

I work best when I can dig into the data, talk to users, and then translate what I learn into clear direction for the team. I also know when to stop researching and start shipping — the best insights don't matter if they never make it to production.

I'd welcome the chance to talk about how I can help Stripe's merchants sell more.

Best,
Alex Chen`,
  },
  {
    id: "frontend-developer",
    jobTitle: "Frontend Developer",
    companyName: "Vercel",
    sampleJobDescription: `Join Vercel as a Frontend Developer working on our dashboard and analytics platform. You'll build React components, optimize performance for millions of users, and contribute to our design system. Strong TypeScript skills required. Experience with Next.js and modern CSS architecture a plus.`,
    sampleFitDetail: "I've built three production Next.js apps with TypeScript, including one that handles 50k+ daily active users with sub-100ms page loads",
    tone: "warm",
    generatedCoverLetter: `Dear Hiring Manager,

I came across the Frontend Developer role at Vercel and it immediately stood out because of the focus on building components that millions of people actually use every day.

Over the past few years, I've built three production Next.js apps with TypeScript. The largest one handles over 50,000 daily active users with sub-100ms page loads. Getting there meant learning to care about things I used to ignore — bundle size, hydration patterns, and when to reach for server components versus client ones. I also spent time contributing to our internal design system, which taught me that good components aren't just reusable; they're predictable and well-documented.

I tend to do my best work when I can see how my code directly affects the user experience, and when I have room to iterate based on what I learn from real usage. I also appreciate working in environments where people care about craft and where the goal is to build something genuinely useful rather than just technically impressive.

I'd love to learn more about the dashboard team and how I can contribute to making the Vercel experience even better.

Best,
Sam Rivera`,
  },
  {
    id: "customer-support",
    jobTitle: "Customer Support Specialist",
    companyName: "Notion",
    sampleJobDescription: `Notion is hiring a Customer Support Specialist to help our growing user base. You'll troubleshoot technical issues, write help documentation, and identify patterns to improve the product. Need someone patient, curious, and good at explaining complex features simply. Experience with SaaS products preferred.`,
    sampleFitDetail: "I spent two years doing support at a small SaaS startup and discovered I actually enjoy the detective work of figuring out why something broke for a specific user",
    tone: "warm",
    generatedCoverLetter: `Dear Hiring Manager,

I saw the Customer Support Specialist role at Notion and it caught my eye because of the emphasis on explaining complex features simply — that's harder than it sounds, and it's something I've gotten good at through practice.

I spent two years doing support at a small SaaS startup. At first, I thought it would be repetitive, but I discovered I actually enjoy the detective work of figuring out why something broke for a specific user. Sometimes it's a bug, sometimes it's a gap in the documentation, and sometimes the user found an edge case we never considered. I started keeping notes on patterns I noticed and eventually helped the product team prioritize three fixes that reduced related tickets by 40%.

I work best when I can dig into a problem, understand it fully, and then help the user walk away feeling confident rather than confused. I also believe good support documentation prevents problems before they happen, which saves everyone time.

I'd love to talk about how I can help Notion's users get the most out of the product.

Best,
Jordan Park`,
  },
  {
    id: "marketing-manager",
    jobTitle: "Marketing Manager",
    companyName: "Figma",
    sampleJobDescription: `Figma seeks a Marketing Manager to drive adoption among design teams at mid-market companies. You'll create campaigns, manage events, and partner with sales to tell compelling product stories. Need strong writing skills, data literacy, and experience with B2B SaaS marketing. Design tool familiarity a bonus.`,
    sampleFitDetail: "I ran marketing at a design tool startup and grew our user base from 2k to 15k through targeted content and community events",
    tone: "confident",
    generatedCoverLetter: `Dear Hiring Manager,

I was drawn to the Marketing Manager role at Figma because of the focus on telling product stories that actually resonate with design teams, not just generating leads that go nowhere.

At my last company, a design tool startup, I grew our user base from 2,000 to 15,000 through targeted content and community events. The biggest lesson I learned was that designers don't want to be sold to — they want to see how other designers solved real problems. Our best-performing campaign featured three design teams talking openly about their workflow changes, and it drove more qualified signups than any paid ad we ran that quarter.

I work best when I understand the product deeply and can translate technical capabilities into stories that make people want to try it. I also know how to measure what matters — not just impressions, but whether the right people are engaging and eventually converting into active users.

I'd welcome the chance to talk through how I can help Figma reach more mid-market design teams with stories that actually land.

Best,
Morgan Lee`,
  },
  {
    id: "data-analyst",
    jobTitle: "Data Analyst",
    companyName: "Airbnb",
    sampleJobDescription: `Airbnb is looking for a Data Analyst to join our host acquisition team. You'll analyze funnel metrics, build dashboards, and run experiments to improve host onboarding. Strong SQL and Python skills required. Experience with A/B testing and statistical analysis essential. Tableau or similar BI tool experience preferred.`,
    sampleFitDetail: "I taught myself SQL to analyze customer churn at my last company and found that 40% of cancellations happened because of a specific UX issue we could fix",
    tone: "warm",
    generatedCoverLetter: `Dear Hiring Manager,

I came across the Data Analyst role on Airbnb's host acquisition team and it immediately caught my attention because of the focus on understanding why people start hosting — or why they don't.

At my last company, I taught myself SQL because I was frustrated that we were making decisions based on gut feeling instead of data. I analyzed customer churn and found that 40% of cancellations happened because of a specific UX issue during onboarding — something the product team had suspected but couldn't prove. Fixing it reduced churn by half in the next quarter. That experience taught me that good analysis doesn't just describe what happened; it points to what to do next.

I work best when I can dig into messy data, find patterns that aren't obvious, and then communicate what I found in a way that helps people make better decisions. I also know that the best dashboard is the one people actually use, not the one with the most charts.

I'd love to learn more about the host acquisition challenges and how I can help.

Best,
Riley Kim`,
  },
  {
    id: "ux-designer",
    jobTitle: "UX Designer",
    companyName: "Linear",
    sampleJobDescription: `Linear is hiring a UX Designer to help us build the future of software development tools. You'll design intuitive workflows for complex engineering tasks, prototype interactions, and work closely with engineers who care deeply about craft. Need a portfolio showing systems thinking and attention to interaction details.`,
    sampleFitDetail: "I've been using Linear for two years and have strong opinions about which workflows feel magical and which still have friction",
    tone: "warm",
    generatedCoverLetter: `Dear Hiring Manager,

I noticed the UX Designer role at Linear and it stood out immediately because of the emphasis on designing for engineers who care about craft — that's a rare combination, and it's exactly the kind of challenge I enjoy.

I've been using Linear for two years, both at work and on personal projects. I have strong opinions about which workflows feel magical — like the command palette and cycle management — and which still have friction that could be smoothed out. I keep a running list of micro-interactions that delight me and ones that make me pause, because I believe the best design is invisible until it isn't.

I tend to do my best work when I'm embedded with engineers, prototyping early, and iterating based on how people actually use the product rather than how we think they should. I also care deeply about systems thinking — individual screens matter, but the real test is whether the whole experience holds together.

I'd love to talk about how I can help Linear stay opinionated and refined as you grow.

Best,
Casey Nguyen`,
  },
  {
    id: "operations-manager",
    jobTitle: "Operations Manager",
    companyName: "Webflow",
    sampleJobDescription: `Webflow needs an Operations Manager to streamline our internal processes as we scale. You'll map workflows, identify bottlenecks, and implement tools that help teams work better together. Experience with process improvement, project management, and cross-functional coordination required. Startup experience preferred.`,
    sampleFitDetail: "I joined a 20-person startup that grew to 80 in 18 months, and I became the person everyone asked when they needed to figure out how to get things done across teams",
    tone: "confident",
    generatedCoverLetter: `Dear Hiring Manager,

I was drawn to the Operations Manager role at Webflow because of the focus on helping teams work better together as you scale — that's the exact challenge I've spent the last two years figuring out.

I joined a 20-person startup that grew to 80 people in 18 months. As we added teams, things that used to be simple — like getting feedback on a project or knowing who owned a decision — started breaking down. I became the person everyone asked when they needed to figure out how to get things done across teams. I mapped our key workflows, identified where handoffs were failing, and implemented lightweight processes that helped people move faster without adding bureaucracy.

I work best when I can see the whole system, find the real bottlenecks — not just the obvious ones — and fix them in ways that stick. I also know that the best process is one that people actually follow because it helps them, not because it's mandated.

I'd welcome the chance to talk about how I can help Webflow scale smoothly.

Best,
Taylor Brooks`,
  },
  {
    id: "career-change",
    jobTitle: "Junior Software Engineer",
    companyName: "GitLab",
    sampleJobDescription: `GitLab is hiring Junior Software Engineers for our remote-first team. You'll work on real features, get mentorship from senior engineers, and contribute to our open-source codebase. We value growth mindset over specific experience. Bootcamp graduates and career changers welcome. Ruby on Rails or Go experience a plus.`,
    sampleFitDetail: "I spent five years as a high school math teacher and completed a coding bootcamp last year, building a classroom management app that three schools now use",
    tone: "career-change",
    generatedCoverLetter: `Dear Hiring Manager,

I recently found the Junior Software Engineer role at GitLab and it stood out because of the emphasis on growth mindset over specific experience — that's exactly the kind of environment I thrive in.

For five years, I taught high school math. I loved breaking down complex concepts into steps that students could actually follow, and I got good at spotting where someone was stuck before they even asked for help. Last year, I completed a coding bootcamp and built a classroom management app that three schools now use. Building something real taught me more than any tutorial could — especially about debugging, reading documentation, and knowing when to ask for help.

I learn quickly, ask good questions, and care about doing work that matters to the people it serves. I'm comfortable starting from a place of not knowing everything, and I've found that my fresh perspective often helps teams see problems differently. My teaching background also means I'm good at explaining technical decisions to non-technical stakeholders.

I'd value a conversation about how I can grow with GitLab and contribute to your open-source mission.

Best,
Jamie Foster`,
  },
  {
    id: "entry-level",
    jobTitle: "Marketing Coordinator",
    companyName: "Notion",
    sampleJobDescription: `Notion is looking for a Marketing Coordinator to support our content and community teams. You'll help manage our social channels, coordinate events, and track campaign performance. This is an entry-level role perfect for recent graduates. Strong writing skills and genuine interest in productivity tools required.`,
    sampleFitDetail: "I started a Notion template shop in college that now has 10k downloads, and I learned more about what users actually want than any class could teach me",
    tone: "warm",
    generatedCoverLetter: `Dear Hiring Manager,

I saw the Marketing Coordinator role at Notion and it immediately caught my attention because of the focus on content and community — two things I've been doing on my own without realizing it was marketing.

In college, I started a Notion template shop as a side project. It now has over 10,000 downloads. I learned more about what users actually want from that experience than any marketing class could teach me. I figured out which templates people actually used versus which ones just looked pretty. I responded to comments and DMs, adjusted my offerings based on feedback, and tracked which social posts drove real downloads versus vanity engagement. I even started a small newsletter sharing productivity tips, which grew to 800 subscribers.

I work best when I can experiment, measure what happens, and iterate quickly. I'm also genuinely interested in productivity tools — not because they're trendy, but because I've seen how the right workflow can help someone do better work with less stress. I believe good marketing starts with understanding the user, not pushing a message.

I'd love to talk about how I can support Notion's content and community efforts.

Best,
Avery Patel`,
  },
  {
    id: "remote-job",
    jobTitle: "Content Strategist",
    companyName: "Buffer",
    sampleJobDescription: `Buffer is hiring a fully remote Content Strategist to lead our blog and educational content. You'll develop content calendars, write in-depth guides, and measure what actually drives engagement. Must be self-directed and excellent at async communication. Experience with social media marketing and SEO writing required.`,
    sampleFitDetail: "I've worked remotely for three years and have a system for staying connected with teammates across time zones without burning out",
    tone: "concise",
    generatedCoverLetter: `Dear Hiring Manager,

I saw the Content Strategist role at Buffer and it stood out because of the focus on content that actually drives engagement, not just fills a publishing calendar.

I've worked remotely for three years and have developed a system for staying connected with teammates across time zones without burning out. I write detailed async updates, document decisions clearly, and know when a quick Loom video saves everyone a meeting. I've also learned that remote work requires more intentional communication, not less — and that the best remote teams trust each other to deliver without constant check-ins.

In my current role, I write in-depth guides and track what actually drives engagement versus what just gets clicks. I've found that the content that performs best is usually the content that solves a real problem for the reader, not the content that chases the latest trend. I also care about making content accessible — clear structure, plain language, and genuinely useful takeaways.

I'm happy to discuss how I can help Buffer's content efforts reach the right people.

Best,
Quinn Sullivan`,
  },
  {
    id: "nonprofit",
    jobTitle: "Program Coordinator",
    companyName: "Code for America",
    sampleJobDescription: `Code for America is seeking a Program Coordinator to support our civic tech initiatives. You'll manage project timelines, coordinate with government partners, and help measure program impact. Need someone organized, empathetic, and genuinely interested in using technology to improve public services. Nonprofit or government experience a plus.`,
    sampleFitDetail: "I volunteered with a local food bank to build their scheduling system and saw firsthand how the right tech can help people who actually need it",
    tone: "warm",
    generatedCoverLetter: `Dear Hiring Manager,

I came across the Program Coordinator role at Code for America and it immediately resonated with me because of the focus on using technology to improve public services — that's exactly the kind of work I want to do more of.

Last year, I volunteered with a local food bank to help build their volunteer scheduling system. It was a simple web app, but it reduced no-shows by 60% and freed up staff time they could spend actually helping people. I saw firsthand how the right technology, applied thoughtfully, can help organizations that are under-resourced but deeply committed to their mission. I also learned that government and nonprofit partners move differently than tech companies — and that patience and relationship-building matter as much as technical skill.

I work best when I know my effort is helping people who need it, not just improving metrics on a dashboard. I'm organized, I communicate clearly, and I know how to keep projects moving when there are multiple stakeholders with different priorities.

I'd love to talk about how I can support Code for America's civic tech initiatives.

Best,
Samira Johnson`,
  },
  {
    id: "startup",
    jobTitle: "Founding Engineer",
    companyName: "Reflect",
    sampleJobDescription: `Reflect is an early-stage startup building AI-powered note-taking. We're hiring our first engineer to work directly with the founders. You'll own the entire frontend, make key architecture decisions, and ship daily. Need someone who thrives in ambiguity, learns fast, and cares deeply about craft. Previous startup experience preferred but not required.`,
    sampleFitDetail: "I was the first hire at my last startup and helped us get from zero to our first paying customers in four months by focusing relentlessly on what users actually needed",
    tone: "confident",
    generatedCoverLetter: `Dear Hiring Manager,

I noticed the Founding Engineer role at Reflect and it caught my attention because of the emphasis on shipping daily and making key architecture decisions — that's the kind of environment where I do my best work.

I was the first hire at my last startup. When I joined, there was no product, no users, and a lot of uncertainty. Four months later, we had our first paying customers. The key was focusing relentlessly on what users actually needed rather than what we thought would be impressive. I owned the frontend, made architecture decisions I later had to live with, and learned that shipping something imperfect today often beats shipping something perfect next month.

I thrive in ambiguity. I don't need a detailed spec to start building, and I'm comfortable making decisions with incomplete information. I also care deeply about craft — not for its own sake, but because I believe users can feel when something is built with care.

I'd welcome the chance to talk about how I can help Reflect build something people genuinely want to use.

Best,
Drew Nakamura`,
  },
];

// Banned phrases that sound like generic AI/corporate speak
const BANNED_PHRASES = [
  "i am writing to apply for",
  "highly motivated",
  "passionate about",
  "leverage my skills",
  "leverage my experience",
  "dynamic team",
  "synergy",
  "synergies",
  "think outside the box",
  "go-getter",
  "self-starter",
  "proven track record of",
  "results-oriented",
  "detail-oriented",
  "team player",
  "hardworking",
  "dedicated professional",
  "excellent communication skills",
  "fast-paced environment",
  "multitasking",
  "core competencies",
  "value proposition",
  "game changer",
  "disruptive",
  "innovative solutions",
  "world-class",
  "cutting-edge",
  "state-of-the-art",
  "seamless",
  "holistic approach",
  "boil the ocean",
  "move the needle",
  "circle back",
  "touch base",
  "reach out",
  "going forward",
  "at this point in time",
];

function containsBannedPhrase(text: string): boolean {
  const lower = text.toLowerCase();
  return BANNED_PHRASES.some((phrase) => lower.includes(phrase));
}

function sanitizeOutput(text: string): string {
  let cleaned = text;
  BANNED_PHRASES.forEach((phrase) => {
    const regex = new RegExp(phrase.replace(/\s+/g, "\\s+"), "gi");
    cleaned = cleaned.replace(regex, "");
  });
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n").replace(/ {2,}/g, " ").trim();
  return cleaned;
}

function extractJobTitle(jd: string): string {
  const patterns = [
    /(?:we are (?:looking for|hiring) (?:a|an)\s+)([^.\n,]{3,60})/i,
    /(?:job title|position|role)[\s:]*([^\n,]{3,60})/i,
    /(?:^|\n)([^\n]{3,60})(?:\n|\r|$)/,
  ];
  for (const p of patterns) {
    const m = jd.match(p);
    if (m) {
      const raw = m[1].trim();
      const cleaned = raw
        .replace(/\s+/g, " ")
        .replace(/\b(?:a|an)\s+/i, "")
        .replace(/\b(?:to|for|with|and)\s+.{3,40}$/i, "")
        .trim();
      if (cleaned.length >= 3 && cleaned.length <= 60) return cleaned;
    }
  }
  return "this role";
}

function extractCompanyName(jd: string): string {
  const patterns = [
    /(?:at|join|@)\s+([A-Z][A-Za-z0-9\s&]{1,40})(?:\s*[,.]|\s*\n|\s*$)/,
    /(?:company|organization)[\s:]*([A-Z][A-Za-z0-9\s&]{1,40})/i,
    /([A-Z][A-Za-z0-9\s&]{2,40})(?:\s+is\s+(?:a|an)\s+)/,
  ];
  for (const p of patterns) {
    const m = jd.match(p);
    if (m) {
      const raw = m[1].trim();
      if (raw.length >= 2 && raw.length <= 40) return raw;
    }
  }
  return "your company";
}

function extractKeyRequirement(jd: string): string {
  const cleanJd = jd
    .replace(/^[-•\d.\s]+/gm, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = cleanJd
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 15 && s.length < 180);

  const skipPatterns = [
    /^\d+\+?\s*years?\s+of\s+/i,
    /^required\b/i,
    /^must\s+have\b/i,
    /^preferred\b/i,
    /^bonus\b/i,
    /^\d+\s*\+?\s*years?\s+experience/i,
    /^(?:we are|we're)\s+(?:looking for|hiring|seeking)/i,
    /^(?:job title|position|role)\s*[:\-]/i,
  ];

  const keywords = [
    "experience", "skill", "ability", "proficiency", "knowledge",
    "background", "expertise", "track record", "proven", "demonstrated",
    "familiar", "comfortable", "strong", "deep", "solid",
    "responsibility", "lead", "manage", "build", "ship", "deliver",
    "improve", "grow", "scale", "design", "develop", "create", "own",
    "drive", "collaborate", "strategy",
  ];

  for (const s of sentences) {
    const lower = s.toLowerCase();
    if (skipPatterns.some((p) => p.test(s))) continue;
    if (keywords.some((k) => lower.includes(k))) {
      const clean = s
        .replace(/^[-•\d.\s]+/, "")
        .replace(/\s+/g, " ")
        .trim();
      if (clean.length >= 15 && clean.length <= 160) return clean;
    }
  }

  for (const s of sentences) {
    if (skipPatterns.some((p) => p.test(s))) continue;
    const clean = s
      .replace(/^[-•\d.\s]+/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (clean.length >= 15 && clean.length <= 160) return clean;
  }

  return "the work outlined in the posting";
}

export function parseJD(jd: string): ParsedJD {
  const text = jd.trim();
  return {
    jobTitle: extractJobTitle(text),
    companyName: extractCompanyName(text),
    keyRequirement: extractKeyRequirement(text),
  };
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter((w) => w.length > 0).length;
}

export function generateCoverLetter(
  jd: string,
  userDetail: string,
  tone: Tone,
  userName: string
): string {
  const parsed = parseJD(jd);
  const name = userName.trim() || "[Your Name]";
  const detail = userDetail.trim() || "relevant experience";

  // Tone-specific templates that produce 180-260 words
  const templates: Record<Tone, string> = {
    warm: `Dear Hiring Manager,

I came across the ${parsed.jobTitle} role at ${parsed.companyName} and it immediately caught my attention because of the focus on ${parsed.keyRequirement}.

${detail}. That connects naturally with the work you described, and it is the kind of challenge I genuinely enjoy. I tend to do my best work when I can see how my effort directly helps the team or the customer, and when I have room to iterate based on what I learn. I also appreciate working in environments where people are direct with each other and where the goal is to build something useful rather than to sound impressive.

I would love to learn more about the team and how I can contribute.

Best,
${name}`,

    confident: `Dear Hiring Manager,

I was drawn to the ${parsed.jobTitle} role at ${parsed.companyName} because of the focus on ${parsed.keyRequirement}.

${detail}. That directly supports the work you described. I have a record of delivering results in similar situations, and I work best when the goal is clear and the feedback loop is short. I am comfortable making decisions with incomplete information and I know how to balance moving quickly with doing things well. I also value teams that give honest feedback and expect the same in return.

I would welcome the chance to talk through how I can add value here.

Best,
${name}`,

    concise: `Dear Hiring Manager,

I saw the ${parsed.jobTitle} role at ${parsed.companyName} and it stood out because of the focus on ${parsed.keyRequirement}.

${detail}. That aligns with the work you described, and it is the kind of work I want to do more of. I work well in small teams, ship often, and prefer to let results speak for themselves. I am direct in my communication and I focus on what actually moves things forward.

I am happy to discuss how I can help the team move forward.

Best,
${name}`,

    "career-change": `Dear Hiring Manager,

I recently found the ${parsed.jobTitle} role at ${parsed.companyName} and it stood out because of the focus on ${parsed.keyRequirement}.

${detail}. Over the past few years I have built skills that map onto what this role needs — not through identical titles, but through work that produced real outcomes. I learn quickly, ask good questions, and care about doing work that matters to the people it serves. I am comfortable starting from a place of not knowing everything, and I have found that my fresh perspective often helps teams see problems differently.

I would value a conversation about how I can grow with you.

Best,
${name}`,
  };

  let letter = templates[tone];

  // Check for banned phrases and sanitize if found
  if (containsBannedPhrase(letter)) {
    letter = sanitizeOutput(letter);
  }

  // Word count check: target 180-260 words
  const words = countWords(letter);
  if (words < 180) {
    const bridge = tone === "concise"
      ? "I work well in small teams and ship often."
      : "I work well when I understand the context and can iterate quickly.";
    letter = letter.replace("\n\nBest,", `\n\n${bridge}\n\nBest,`);
  } else if (words > 260) {
    const shorterReq = parsed.keyRequirement.length > 80
      ? parsed.keyRequirement.slice(0, 80) + "..."
      : parsed.keyRequirement;
    letter = letter.replace(parsed.keyRequirement, shorterReq);
  }

  return letter;
}
