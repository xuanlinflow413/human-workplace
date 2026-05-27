# Human Workplace

A curated collection of real, professional, and emotionally intelligent workplace replies.

## What it is

Human Workplace provides copy-ready replies for the hardest moments at work — resignation, burnout, difficult conversations, layoff communication, and more. Every reply is written to sound like a real person, not a chatbot template.

## Live Site

- **Production**: https://kindreply.co

## Features

- **13 high-quality reply templates** across 5 workplace categories
- **One-click copy** for every template and variation
- **Multiple tones** — formal, personal, or somewhere in between
- **Why it works** — explanations for every reply
- **Common mistakes** — what to avoid
- **FAQ** — answers to real questions
- **Shareable quote cards** — copy a formatted quote to share
- **Fully static** — no database, no login, no tracking
- **SEO optimized** — sitemap, robots.txt, Open Graph, JSON-LD
- **Mobile responsive**

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons
- Cloudflare Pages (static export)

## Project Structure

```
app/
  page.tsx              # Homepage
  layout.tsx            # Root layout with SEO metadata
  globals.css           # Tailwind + custom CSS variables
  workplace/
    page.tsx            # Category listing page
    [slug]/
      page.tsx          # Individual reply detail page
  about/
    page.tsx            # About page
  privacy/
    page.tsx            # Privacy policy
  terms/
    page.tsx            # Terms of service
  robots.txt/
    route.ts            # Dynamic robots.txt
  sitemap.xml/
    route.ts            # Dynamic sitemap
components/
  Header.tsx            # Sticky navigation
  Footer.tsx            # Site footer
  CopyButton.tsx        # One-click copy with feedback
  ShareQuote.tsx        # Shareable quote card UI
data/
  replies.ts            # All reply data (hardcoded)
lib/
  utils.ts              # Utility functions (cn)
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deploy

### Cloudflare Pages (Recommended)

```bash
npx wrangler pages deploy out --project-name=human-workplace --branch=main
```

Requires `CLOUDFLARE_API_TOKEN` environment variable.

### Manual Upload

Upload the contents of the `out/` directory to any static hosting service.

## Categories

| Category | Count | Description |
|----------|-------|-------------|
| Resignation | 3 | Leave with grace and dignity |
| Burnout Support | 2 | Support yourself and others |
| Manager Replies | 2 | Lead with empathy |
| Difficult Conversations | 3 | Speak with care |
| Layoff Communication | 3 | Navigate hard news |

## License

MIT
