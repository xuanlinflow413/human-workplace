# KindReply

> A quiet website for thoughtful replies, difficult conversations, and private writing tools.

## Live Site

**https://kindreply.co**

## What it is

KindReply provides copy-ready replies for the hardest moments at work — resignation, burnout, difficult conversations, layoff communication, and more. Every reply is written to sound like a real person, not a chatbot template.

It also includes **Type & Release**, a private micro tool where you can write what you do not want to send. Nothing is saved or uploaded.

## Core Features

- **Workplace Replies** — 13 high-quality templates across 5 categories
- **One-click copy** for every template and variation
- **Multiple tones** — formal, personal, or somewhere in between
- **Why it works** — explanations for every reply
- **Common mistakes** — what to avoid
- **FAQ** — answers to real questions
- **Shareable quote cards** — copy a formatted quote to share
- **Type & Release** — a private writing space. Nothing is saved or uploaded
- **Privacy-first static site** — no database, no login, no tracking
- **SEO optimized** — sitemap, robots.txt, Open Graph, JSON-LD, canonical URLs
- **Security headers** — CSP, X-Frame-Options, HSTS via Cloudflare Pages
- **Mobile responsive**

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Project Structure

```
app/
  page.tsx                    # Homepage
  layout.tsx                  # Root layout with SEO metadata
  globals.css                 # Tailwind + custom CSS variables
  not-found.tsx               # 404 page
  workplace/
    page.tsx                  # Category listing page
    [slug]/
      page.tsx                # Individual reply detail page
  type-and-release/
    page.tsx                  # Type & Release micro tool
  about/
    page.tsx                  # About page
  privacy/
    page.tsx                  # Privacy policy
  terms/
    page.tsx                  # Terms of service
  robots.txt/
    route.ts                  # Dynamic robots.txt
  sitemap.xml/
    route.ts                  # Dynamic sitemap
components/
  Header.tsx                  # Sticky navigation
  Footer.tsx                  # Site footer
  CopyButton.tsx              # One-click copy with feedback
  ShareQuote.tsx              # Shareable quote card UI
  TypeReleaseTool.tsx         # Type & Release writing interface
  CrisisResources.tsx         # Crisis support resources
public/
  _headers                    # Cloudflare Pages security headers
  og-image.png                # Open Graph / Twitter Card image
data/
  replies.ts                  # All reply data (hardcoded)
lib/
  utils.ts                    # Utility functions (cn)
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build
```

The static export is generated in the `out/` directory.

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

## Privacy

KindReply is a fully static website. We do not collect, store, or process any personal information.

**Type & Release** specifically does not save or upload user input. Everything typed stays in the browser and disappears when the page is closed or refreshed.

## Roadmap

- [ ] More difficult conversation scenarios
- [ ] More micro emotional tools
- [ ] Better social sharing cards (auto-generated OG images per page)

## Disclaimer

This project is not medical advice. If you are in crisis, please reach out to a qualified professional or use the crisis resources listed on the [Type & Release](https://kindreply.co/type-and-release/) page.

## License

[MIT](./LICENSE)
