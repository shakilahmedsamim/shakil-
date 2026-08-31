# Tracking Guru — Marketing Site

Five-page Next.js (App Router) marketing site for a Google Ads management
and cross-platform conversion tracking agency serving clients in the UK,
US, and Canada. Google Ads is the only managed ad platform; conversion
tracking is platform-agnostic and also covers Meta, TikTok, and Pinterest.

## Stack

- Next.js 14 (App Router), React, TypeScript
- Tailwind CSS with the design tokens from the build brief (`tailwind.config.ts`)
- Web3Forms for the contact form, Calendly for scheduling, wa.me for WhatsApp
- `lib/tracking.ts` centralizes the (currently unwired) Google tag / Meta Pixel
  event contract: `trackFormSubmit`, `trackCallBooked`, `trackWhatsAppClick`

## Local development

```bash
npm install
npm run dev
```

## Build and deploy to cPanel

This repo defaults to a **static export** (`output: 'export'` in
`next.config.js`), which produces a plain `out/` folder that runs on any
cPanel shared-hosting plan with zero Node.js requirement.

```bash
npm run build
# upload the contents of out/ to your cPanel public_html (or subdomain) folder
```

**Before final deployment, confirm which cPanel path applies:**

- If the cPanel plan has **"Setup Node.js App" (Passenger)** support, you can
  instead remove `output: 'export'` from `next.config.js`, run `npm run build`,
  and deploy the standard `.next` output as a Node app.
- If the plan is **static-only** (most shared hosting), keep the static
  export as-is — this is the safer default and what ships in this repo.

## Assets the client needs to supply (see file-naming conventions inline)

- `about-founder.jpg` — founder photo, About page
- `case-study-01-before.png` / `case-study-01-after.png` (and so on) — Case
  Study screenshots, 1200x750px recommended
- Real client testimonials, names, business names, and cities (Home page)
- Real client logos / a current Google Partner badge
- YouTube video ID for the homepage founder video (replace `VIDEO_ID` in
  `app/page.tsx`)
- Final business name/branding to replace the "Tracking Guru" working name
  in `lib/site.ts`

## Tracking (Section 5 of the build brief)

No Google tag or Meta Pixel script is installed yet — this is a deliberate,
documented later phase (see `app/privacy-policy/page.tsx` and
`components/CookieBanner.tsx`). When that phase starts:

1. Add the Google tag (gtag.js) and Meta Pixel base code to `app/layout.tsx`.
2. Wire Enhanced Conversions for Leads and Meta Conversions API server-side,
   ideally via a Stape.io server GTM container, per Section 5 of the brief.
3. Wire Google Consent Mode v2 (Advanced) for UK/EEA visitors per Section 11,
   defaulting all four consent signals to denied until the cookie banner is
   answered.
