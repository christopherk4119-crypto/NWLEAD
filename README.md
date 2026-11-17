# Handyman Calgary NW: website

Single-page site. Next.js (App Router, TypeScript) + Tailwind CSS. Deploy-ready for Vercel.

## Local setup
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check (Next.js 16)
```

## Edit business details
**Everything** (name, phone, email, hours, services, areas, links, colours, reviews) lives in `lib/site.ts`.
FAQ answers are in `lib/faq.ts`. Search the project for `CONFIRM WITH CLIENT` to find every placeholder.

## Form endpoint
1. Create a free form at https://formspree.io and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Set it as an environment variable `NEXT_PUBLIC_FORM_ENDPOINT`:
   - locally: create `.env.local` with `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx`
   - on Vercel: Project → Settings → Environment Variables
3. Until it's set, the form shows a "please call or text" message instead of failing silently.

Photo uploads are not included (Formspree file uploads need a paid plan).

## Swap the logo
Put a transparent PNG at `public/logo.png` (200×80 slot), then in `components/Logo.tsx` replace the `<svg>` with the `<Image>` line in the comment. The favicon is `app/icon.svg`.

## Swap the photos
The site works with **zero** photos: each slot falls back to a branded graphic. To add one (max 3), save it in `public/images/` and set its path in `lib/site.ts` → `photos`. See `public/images/CREDITS.md`:
- `hero-living-room.jpg`: hero + social share image
- `service-paint-ready-wall.jpg`: drywall section
- `commercial-office-corridor.jpg`: commercial panel


## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo (framework auto-detects as Next.js).
3. Add `NEXT_PUBLIC_FORM_ENDPOINT` under Environment Variables.
4. Deploy, then add the custom domain and update `url` in `lib/site.ts` (used for sitemap, canonical and OG tags).
