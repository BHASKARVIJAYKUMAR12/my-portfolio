# Bhaskar Vijay Kumar Golusu — Portfolio

A professional portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Deployed on **Vercel**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

## Features

- **Hero Section** — Animated introduction with name, tagline, CTAs, and social links
- **About Section** — Professional summary, specializations, stats, and quick info
- **Skills Section** — Tabbed animated progress bars (Frontend / Backend / Tools & DevOps)
- **Projects Section** — Expandable project cards with hover overlays and tech stack tags
- **Experience Section** — Timeline layout with education and certifications sidebar
- **Contact Section** — Contact form (mailto), contact info, and resume download
- **Dark / Light Mode** — System preference detection + manual toggle, persisted in localStorage
- **Fully Responsive** — Mobile-first design with hamburger menu
- **Smooth Animations** — Scroll-triggered reveals using Framer Motion
- **SEO Optimized** — Open Graph metadata, semantic HTML

## Tech Stack

| Layer     | Technology                        |
| --------- | --------------------------------- |
| Framework | Next.js 16 (App Router)           |
| Language  | TypeScript                        |
| Styling   | Tailwind CSS v4                   |
| Icons     | Lucide React + custom social SVGs |
| Animation | Framer Motion                     |
| CI/CD     | GitHub Actions                    |
| Hosting   | Vercel                            |

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme variables, animations, scrollbar
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── Navbar.tsx            # Sticky nav, dark mode toggle, mobile menu
│   ├── Hero.tsx              # Hero section with animated background
│   ├── About.tsx             # About me, stats, specializations
│   ├── Skills.tsx            # Tabbed skill progress bars
│   ├── Projects.tsx          # Project cards with hover overlay
│   ├── Experience.tsx        # Work timeline + education sidebar
│   ├── Contact.tsx           # Contact form + info + resume download
│   ├── Footer.tsx            # Footer with links and social icons
│   └── SocialIcons.tsx       # GitHub, LinkedIn, X SVG icons
└── data/
    └── portfolio.ts          # ⭐ All portfolio content (single source of truth)
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

**All content is controlled from a single file:** `src/data/portfolio.ts`

Edit this file to update:

- Personal info (name, email, phone, location, social links)
- Skills (frontend, backend, tools — names and proficiency levels)
- Projects (title, description, tech stack, links, featured flag)
- Work experience (company, role, duration, bullet points, tech used)
- Education and certifications

### Adding Your Resume

Place your resume PDF in the `public/` folder and update the `resumeUrl` in `portfolio.ts`.

### Adding Your Photo

Place your photo in the `public/` folder and update the `avatarUrl` in `portfolio.ts`.

### Changing Theme Colors

Edit CSS custom properties in `src/app/globals.css` under `:root` (light) and `.dark` (dark).

## CI/CD & Deployment

### Build & Deploy Workflow

A single workflow (`.github/workflows/build-deploy.yml`) handles both build verification and deployment. It is triggered **manually only** from the `develop` branch via GitHub Actions.

When triggered, you choose whether to:
- **Build only** (`no`) — runs lint + build to verify everything compiles
- **Preview** — builds and deploys to a Vercel preview URL
- **Production** — builds and deploys to your live production URL

**Setup required GitHub Secrets:**

| Secret              | How to get it                                                             |
| ------------------- | ------------------------------------------------------------------------- |
| `VERCEL_TOKEN`      | [Vercel Dashboard → Settings → Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID`     | Run `vercel link` locally, check `.vercel/project.json`                   |
| `VERCEL_PROJECT_ID` | Run `vercel link` locally, check `.vercel/project.json`                   |

**To run:**

1. Go to **Actions** tab in your GitHub repo
2. Select **"Build & Deploy"** workflow
3. Click **"Run workflow"** → select `develop` branch → choose deploy option → **Run**

### Quick Deploy (Alternative)

You can also deploy directly by connecting your GitHub repo to Vercel:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `my-portfolio` repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Set the **Production Branch** to `develop` in Vercel project settings

## License

This project is open source and available for personal use.
