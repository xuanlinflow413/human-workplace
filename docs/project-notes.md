# KindReply — Project Notes

## Project Positioning

KindReply is a quiet website for thoughtful replies, difficult conversations, and private writing tools like Type & Release.

It sits at the intersection of:
- **Practical utility** — copy-ready replies for hard workplace moments
- **Emotional intelligence** — every reply explains why it works
- **Privacy-first design** — no data collection, no tracking, no accounts

The tone is human, calm, and non-corporate. Nothing feels like it came from a chatbot.

---

## Current Version Features

### Workplace Replies
- 13 reply templates across 5 categories
- Resignation, Burnout Support, Manager Replies, Difficult Conversations, Layoff Communication
- Each reply includes: template, variations (different tones), why it works, common mistakes, FAQ
- One-click copy for templates and variations
- Shareable quote cards with attribution

### Type & Release
- Private writing space for messages you do not want to send
- Nothing is saved or uploaded — purely client-side
- Fade animation on "release"
- Crisis resources section for users who may need professional support

### Technical
- Fully static export (Next.js `output: 'export'`)
- SEO: sitemap.xml, robots.txt, Open Graph, Twitter Cards, JSON-LD Schema, canonical URLs
- Security headers via Cloudflare Pages `_headers`: CSP, X-Frame-Options, HSTS, etc.
- Mobile responsive
- Zero runtime dependencies on external APIs or databases

---

## What We Do Not Do

- No user accounts or authentication
- No data persistence (localStorage, cookies, server-side storage)
- No analytics or tracking pixels
- No medical, therapeutic, or diagnostic claims
- No AI-generated content — all replies are hand-written
- No ads or affiliate links

---

## Future Direction

### Short Term
- [ ] Add more difficult conversation scenarios
- [ ] Add more micro emotional tools (beyond Type & Release)
- [ ] Auto-generated OG images per reply page (dynamic social cards)

### Medium Term
- [ ] Multi-language support (i18n)
- [ ] RSS feed for new replies
- [ ] Dark mode toggle

### Long Term
- [ ] Email newsletter for new reply releases
- [ ] Community-submitted reply suggestions (via GitHub issues)
- [ ] Printable PDF guides for specific scenarios

---

## Domain & Brand

- **Primary domain**: https://kindreply.co
- **Brand name**: KindReply
- **Tagline**: Real replies for hard moments. Professional, kind, and human.
- **Email**: hello@kindreply.co

---

## Deployment

- **Platform**: Cloudflare Pages
- **Build command**: `npm run build`
- **Output directory**: `out/`
- **Security headers**: `public/_headers`
