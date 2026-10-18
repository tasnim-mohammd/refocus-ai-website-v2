# Refocus AI — Website v2

Landing page for [Refocus AI](https://refocus-ai.com): AI strategy, custom AI solutions, automation, analytics and training. Based in Dubai, UAE.

Built from the "Desktop — v2" / "Mobile — v2" frames in the Figma file *Refocus AI — Website Redesign*.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4 (design tokens live in `src/index.css` under `@theme`)
- lucide-react icons
- Fonts: Poppins (headings) and Inter (body) from Google Fonts

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  content.ts            # all copy, contact details, services, stats, testimonials
  index.css             # Tailwind import, colour/font tokens, glass + gradient utilities
  App.tsx               # page composition
  components/
    ui.tsx              # Button, SectionLabel, SectionHeading, Container
    Header.tsx          # floating glass nav + mobile menu
    Hero.tsx            # hero collage + client logos
    WhyChoose.tsx       # 01 — bento grid
    Services.tsx        # 02 — service cards
    Capabilities.tsx    # 03 — numbers band
    Testimonials.tsx    # 04 — carousel (auto-advances every 7s, pauses on hover)
    Footer.tsx          # closing CTA (#contact) + footer
  assets/
    images/             # optimised WebP photos
    logos/              # Refocus + client logos (navy versions for the light theme)
```

To change text, numbers, emails or testimonials, edit `src/content.ts`.

## Deploy

Works on Vercel with the default Vite settings: build command `npm run build`, output directory `dist`.
