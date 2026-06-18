# BlueAlly AI — Flagship Website

A bold, brand-perfect marketing site for **BlueAlly Technology Solutions** that educates visitors on BlueAlly's unique, method-first approach to enterprise AI — from the stakes through the seven-step method, the principle, the value-readiness matrix, the two-day workshop, the AI Operating System, and the proof — closing with a clear call to action.

**Tagline:** *Conquer Complexity.*

## Highlights

- **Single flagship page** with sticky anchor nav: Stakes → Why-they-fail → Method → Principle → Value-Readiness Matrix → EPOCH → Workshop → Calculator → Offerings → Proof → Why BlueAlly → CTA.
- **Light & dark mode**, fully responsive (mobile-first).
- **Four interactive elements:** an animated *Sample AI Value Assessment* card, an interactive Value-Readiness Matrix, a deterministic trapped-value ROI calculator, and a **Claude-powered AI assistant** grounded in BlueAlly's methodology.
- **Brand-locked** to the official BlueAlly palette (Navy `#001278`, Bright Blue `#02A2FD`, Green `#36BF78`), **DM Sans** typography, and the official logos.
- Voice: terse, declarative, warm — the Hemingway register of the source briefings.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (hex tokens, never oklch) · **Framer Motion** · **next-themes**
- **Vercel AI SDK** (`ai` + `@ai-sdk/anthropic`) → Claude `claude-haiku-4-5` for the assistant

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

The AI assistant needs an Anthropic key at runtime. Set one in `.env.local`:

```bash
ANTHROPIC_API_KEY=sk-ant-...
# (AI_PROVIDER_KEY / CLAUDE_KEY are also accepted as fallbacks)
```

Everything else runs without secrets. `npm run build` produces the optimized production build.

## Content

All site copy lives in [`lib/content.ts`](lib/content.ts) — sourced from BlueAlly's Executive Briefing and "Reading Your AI Value Assessment" decks. The assistant's grounding lives in [`lib/chat-system-prompt.ts`](lib/chat-system-prompt.ts).

---

© BlueAlly Technology Solutions LLC. Built to the official BlueAlly brand guidelines.
