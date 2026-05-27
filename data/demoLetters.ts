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
  const sentences = jd
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20 && s.length < 200);

  const keywords = [
    "experience",
    "skill",
    "ability",
    "proficiency",
    "knowledge",
    "background",
    "expertise",
    "track record",
    "proven",
    "demonstrated",
    "familiar",
    "comfortable",
    "strong",
    "deep",
    "solid",
  ];

  for (const s of sentences) {
    const lower = s.toLowerCase();
    if (keywords.some((k) => lower.includes(k))) {
      const clean = s
        .replace(/^[-•\d.\s]+/, "")
        .replace(/\s+/g, " ")
        .trim();
      if (clean.length >= 20 && clean.length <= 180) return clean;
    }
  }

  if (sentences.length > 0) {
    const s = sentences[0]
      .replace(/^[-•\d.\s]+/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (s.length >= 20 && s.length <= 180) return s;
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

function pickOpening(tone: Tone): string {
  switch (tone) {
    case "warm":
      return "I came across";
    case "confident":
      return "I was drawn to";
    case "concise":
      return "I saw";
    case "career-change":
      return "I recently found";
    default:
      return "I came across";
  }
}

function pickBodyConnector(tone: Tone): string {
  switch (tone) {
    case "warm":
      return "What stood out to me was";
    case "confident":
      return "What I bring is";
    case "concise":
      return "Here is why I fit:";
    case "career-change":
      return "Here is how my background connects:";
    default:
      return "What stood out to me was";
  }
}

function pickClosing(tone: Tone): string {
  switch (tone) {
    case "warm":
      return "I would love to learn more about the team and how I can contribute.";
    case "confident":
      return "I would welcome the chance to talk through how I can add value here.";
    case "concise":
      return "I am happy to discuss how I can help the team move forward.";
    case "career-change":
      return "I would value a conversation about how I can grow with you.";
    default:
      return "I would love to learn more about the team and how I can contribute.";
  }
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

  const opening = pickOpening(tone);
  const connector = pickBodyConnector(tone);
  const closing = pickClosing(tone);

  const paragraphs: string[] = [];

  paragraphs.push(
    `Dear Hiring Manager,\n\n${opening} the ${parsed.jobTitle} role at ${parsed.companyName} and it immediately caught my attention because of ${parsed.keyRequirement}.`
  );

  if (tone === "career-change") {
    paragraphs.push(
      `${connector}\n\n${detail}. I have spent time building transferable skills that map directly onto what this role requires — not through identical titles, but through consistent outcomes. I learn quickly, adapt to new contexts, and care about doing work that matters to the people it serves.`
    );
  } else if (tone === "concise") {
    paragraphs.push(
      `${connector}\n\n${detail}. That aligns with ${parsed.keyRequirement}, and it is the kind of work I want to do more of.`
    );
  } else if (tone === "confident") {
    paragraphs.push(
      `${connector}\n\n${detail}. That directly supports ${parsed.keyRequirement}, and I have a track record of delivering results in similar environments. I work best when I understand the goal clearly, then figure out the most direct path to get there.`
    );
  } else {
    paragraphs.push(
      `${connector}\n\n${detail}. That connects naturally with ${parsed.keyRequirement}, and it is the kind of challenge I genuinely enjoy. I tend to do my best work when I can see how my effort directly helps the team or the customer.`
    );
  }

  paragraphs.push(`${closing}\n\nBest,\n${name}`);

  return paragraphs.join("\n\n");
}
