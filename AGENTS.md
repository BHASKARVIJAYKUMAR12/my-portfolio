<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Agent

## Project Overview

This is the **professional portfolio** of **Bhaskar Vijay Kumar Golusu**, a Full Stack Developer. It is a single-page application built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, designed to be deployed on **Vercel**.

## Tech Stack

| Layer     | Technology                                     |
| --------- | ---------------------------------------------- |
| Framework | Next.js 16 (App Router, `src/` directory)      |
| Language  | TypeScript (strict)                            |
| Styling   | Tailwind CSS v4 (`@import "tailwindcss"` syntax)|
| Icons     | lucide-react + custom SVG social icons         |
| Animation | Framer Motion                                  |
| Hosting   | Vercel                                         |
| CI/CD     | GitHub Actions (build on push, manual deploy)  |

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme variables (light/dark), scrollbar, animations
│   ├── layout.tsx           # Root layout with fonts, SEO metadata
│   └── page.tsx             # Main page composing all section components
├── components/
│   ├── Navbar.tsx           # Sticky nav, dark mode toggle, mobile hamburger menu
│   ├── Hero.tsx             # Animated hero with name, tagline, CTAs, social links
│   ├── About.tsx            # Bio, specialization cards, stats, quick info
│   ├── Skills.tsx           # Tabbed skill bars (Frontend / Backend / Tools)
│   ├── Projects.tsx         # Project cards grid with expand/collapse, hover overlay
│   ├── Experience.tsx       # Timeline with education & certifications sidebar
│   ├── Contact.tsx          # Contact form (mailto), contact info, resume download
│   ├── Footer.tsx           # Quick links, social icons, scroll-to-top
│   └── SocialIcons.tsx      # GitHub, LinkedIn, X (Twitter) SVG icon components
└── data/
    └── portfolio.ts         # ⭐ SINGLE SOURCE OF TRUTH for all portfolio content
```

## Critical Rules

1. **All portfolio content lives in `src/data/portfolio.ts`** — personal info, skills, projects, experience, education, certifications. Never hardcode content in components.
2. **Styling uses CSS custom properties** defined in `globals.css` under `:root` and `.dark` selectors. Tailwind theme references them via `@theme inline`. Use `text-primary`, `bg-card`, `border-card-border`, etc.
3. **Social icons** (GitHub, LinkedIn, Twitter/X) are custom SVGs in `SocialIcons.tsx` because `lucide-react` removed brand icons. All other icons come from `lucide-react`.
4. **Dark mode** is toggled via a `.dark` class on `<html>`, stored in `localStorage("theme")`, with system preference fallback. Implemented in `Navbar.tsx`.
5. **Animations** use Framer Motion `useInView` with `once: true` for scroll-triggered reveals.
6. **No backend** — the contact form uses a `mailto:` link. No API routes exist.
7. **Resume** is a static PDF at `/public/BhaskarVijayKumar_CV_20032026.pdf`.
8. **Avatar** is at `/public/Professional_pic.png`.

## How to Make Changes

### Update personal info, skills, projects, or experience
Edit `src/data/portfolio.ts` only. Components read from this file.

### Add a new project
Add an entry to the `projects` array in `portfolio.ts` with `featured: true` to show it by default, or `false` to show only when "View All" is clicked.

### Add a new section
1. Create `src/components/NewSection.tsx` (use `"use client"` directive)
2. Import and add it to `src/app/page.tsx` between existing sections
3. Add a nav link in `navLinks` array in `portfolio.ts`

### Change theme colors
Edit CSS variables in `globals.css` under `:root` (light) and `.dark` (dark).

## Commands

| Command         | Purpose                        |
| --------------- | ------------------------------ |
| `npm run dev`   | Start dev server (localhost:3000) |
| `npm run build` | Production build               |
| `npm run lint`  | ESLint check                   |
| `npm start`     | Serve production build locally |

## CI/CD

- **`.github/workflows/build.yml`** — Runs lint + build on every push/PR to `develop` and `main`.
- **`.github/workflows/deploy.yml`** — Manual deployment to Vercel from `develop` branch only. Requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as GitHub secrets.

## Important Notes

- The project uses **Tailwind CSS v4** with the new `@import "tailwindcss"` and `@theme inline` syntax — NOT the v3 `tailwind.config.js` approach.
- Next.js 16 with Turbopack is used for builds.
- All components are client components (`"use client"`) because they use React hooks and Framer Motion.
