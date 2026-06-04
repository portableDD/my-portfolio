# Emmanuel Dorcas — Portfolio

Personal portfolio site for Emmanuel Dorcas Temitope — Full-Stack Developer & UI/UX Designer.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. Single-page, fully static, deployed on Vercel.

## Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS v3 + shadcn/ui (custom dark theme)
- **Animations**: Framer Motion
- **PDF viewer**: react-pdf (pdfjs-dist)
- **Icons**: lucide-react + react-icons
- **Fonts**: Playfair Display (headings) + Inter (body) via `next/font/google`

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # type-check + production build
npm run lint      # ESLint
npm run start     # serve the production build
```

## Project structure

```
app/
  layout.tsx        # Root layout, metadata, fonts
  page.tsx          # Single page — renders all sections in order
  globals.css       # Tailwind base, CSS variables, utility classes

components/
  sections/         # Hero, About, Experience, Projects, Skills, Contact
  Navbar.tsx        # Fixed navbar with scroll-spy active state
  Footer.tsx
  Logo.tsx          # SVG "D" lettermark (also used as favicon)
  CVModal.tsx       # react-pdf viewer modal (client-only, ssr: false)

lib/
  data.ts           # Single source of truth — all content lives here
  animations.ts     # Shared Framer Motion variants
  utils.ts

hooks/
  use-typewriter.ts
  use-scroll-spy.ts

public/
  favicon.svg
  images/profile.jpg
  Emmanuel-Dorcas-Resume.pdf
  projects/         # Project screenshots
```

## Adding content

All site content is in `lib/data.ts` — edit that file to update experience, projects, skills, or personal info. No other files need to change for content updates.

## Assets

Place new project screenshots in `public/projects/` and reference them in the `projects` array in `lib/data.ts`.

The CV PDF lives at `public/Emmanuel-Dorcas-Resume.pdf` — replace the file to update it.
