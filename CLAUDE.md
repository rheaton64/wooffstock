# Wooffstock Website

A website for Wooffstock, a charity event benefiting local animal rescues. The event is organized by Nadine Ashby and a planning committee in the Pound Ridge, NY area.

**Event:** Saturday, May 2nd, 2026 · 7:00–9:30 PM · Waccabuc Country Club Carriage House, Waccabuc, NY

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Package manager:** pnpm
- **Hosting:** Vercel
- **Payments:** Clover Hosted Checkout (via `/api/checkout` route)
- **Styling:** Plain CSS with CSS custom properties (no Tailwind, no CSS modules)
- **Fonts:** Playfair Display, Josefin Sans, Sacramento (loaded via `next/font/google` in `layout.tsx`)

## Project Structure

```
src/
  app/
    layout.tsx          — Root layout, fonts, metadata
    page.tsx            — Composes all section components
    globals.css         — ALL styles live here (design system, every section)
    api/checkout/
      route.ts          — Clover Hosted Checkout API route
    checkout/
      success/page.tsx  — Post-payment success page
      failure/page.tsx  — Post-payment failure page
  components/
    Navbar.tsx          — Fixed nav with scroll effect (client component)
    Hero.tsx            — Hero banner with logo, event details, CTA
    About.tsx           — Event description + planning committee
    Entertainment.tsx   — 8 feature cards (art, jazz, wine, etc.)
    Music.tsx           — Rufus Jones Jazz Trio section
    Honoree.tsx         — Dr. Renee Bayha bio + photos
    Rescues.tsx         — 5 rescue organization cards
    News.tsx            — Press coverage + video embed
    TicketSection.tsx   — Ticket selection, cart, checkout (client component)
    Footer.tsx          — Contact info + branding
    FadeIn.tsx          — Reusable scroll animation wrapper (IntersectionObserver)
public/
  images/               — All site images (extracted from original HTML)
reference/
  wooffstock-original.html — The original monolithic HTML file for reference
```

## Key Patterns

**Styling:** Everything is in `globals.css` using class names. There are no CSS modules or component-scoped styles. The design system uses CSS custom properties defined in `:root` (e.g. `--gold`, `--cream`, `--charcoal`).

**Client vs Server components:** Most components are server components. Only these are client components (`"use client"`):
- `Navbar.tsx` — scroll event listener
- `Hero.tsx` — smooth scroll click handler
- `TicketSection.tsx` — cart state + checkout flow
- `FadeIn.tsx` — IntersectionObserver

**Scroll animations:** Sections use the `<FadeIn>` wrapper component for scroll-triggered fade-in animations. Wrap any content in `<FadeIn>` to animate it on scroll.

**Images:** Most images use `next/image` for optimization. The honoree photos are an exception — they use plain `<img>` tags because `next/image` doesn't play well with fixed-height CSS cropping via `object-fit: cover`.

## Payment Flow (Clover)

1. User selects tickets/quantities in `TicketSection`
2. "Proceed to Checkout" calls `POST /api/checkout` with line items (prices in cents)
3. API route creates a Clover Hosted Checkout session (server-side, keeps private key secret)
4. Browser redirects to Clover's hosted payment page
5. After payment, Clover redirects back to `/checkout/success` or `/checkout/failure`

Donations use the same flow — a single line item with the custom amount.

**Environment variables** (set in `.env.local` or Vercel dashboard):
- `CLOVER_MERCHANT_ID` — from Clover Dashboard
- `CLOVER_PRIVATE_KEY` — from Clover Dashboard > Settings > Ecommerce > API Tokens
- `CLOVER_ENVIRONMENT` — `"sandbox"` for testing, `"production"` for live

## Common Tasks

**Change event details** (date, time, venue): Update `Hero.tsx` and `Footer.tsx`.

**Edit ticket tiers** (names, prices, features): Edit the `tiers` array at the top of `TicketSection.tsx`. Prices are in dollars here; the component converts to cents before sending to Clover.

**Add/remove rescue organizations:** Edit the `rescues` array in `Rescues.tsx`. Add logos to `public/images/`.

**Update the honoree:** Edit `Honoree.tsx`. Replace photos in `public/images/`.

**Change styling:** Edit `src/app/globals.css`. The color palette is in the `:root` CSS variables at the top.

**Add a new section:** Create a component in `src/components/`, add its styles to `globals.css`, and add it to `page.tsx`.

## Development

```bash
pnpm install
pnpm dev       # starts dev server on localhost:3000
pnpm build     # production build (run to verify before committing)
```
