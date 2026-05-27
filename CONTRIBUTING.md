# Contributing to KindReply

Thank you for your interest in contributing to KindReply. This document outlines the guidelines for content, code, and pull requests.

## Content Guidelines

### Tone and Voice

All content on KindReply should feel:

- **Human** — like it was written by a real person who has been in that situation
- **Calm** — non-reactive, grounded, and emotionally steady
- **Non-corporate** — avoid buzzwords, jargon, or overly formal language

### What Not to Include

Do not submit content that:

- Promises medical, therapeutic, or diagnostic outcomes
- Uses language like "cure," "treat," "therapy," "diagnosis," or "heal"
- Claims to replace professional mental health support
- Feels robotic, templated, or AI-generated

### Privacy-First Principle

KindReply does not save or upload user input. **Do not submit features that:**

- Store user data in localStorage, sessionStorage, cookies, or IndexedDB
- Send user input to any external API, analytics, or logging service
- Require user accounts, logins, or authentication

The only exception is ephemeral, in-memory UI state (e.g., copy button feedback, toggle states) that disappears on page refresh.

## Code Guidelines

### Before Submitting a PR

1. Run the build locally and ensure it passes:

   ```bash
   npm run build
   ```

2. Verify the static export is generated correctly in the `out/` directory.

3. Check that no new environment variables or API keys are introduced.

### Tech Stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS
- Lucide React (icons only)

Avoid adding new dependencies unless absolutely necessary.

## Pull Request Process

1. Fork the repository and create a feature branch
2. Make your changes following the guidelines above
3. Run `npm run build` and confirm zero errors
4. Submit a PR with a clear description of what changed and why

## Questions?

Open an issue or reach out at hello@kindreply.co.
