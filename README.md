# KuchikiRenji — AI Engineer & Full-Stack Developer Portfolio

**Personal portfolio site** showcasing AI engineering, machine learning, and full-stack development work. Built with **Next.js**, **TypeScript**, and **Tailwind CSS** — production-ready, mobile-first, and optimized for Vercel.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

---

## About this project

This repository is **KuchikiRenji's** public portfolio: a single-page site with **Home**, **About**, **Projects**, **Resume**, **Skills**, and **Contact** sections. It highlights AI/ML and full-stack experience — from LLM-powered apps and RAG systems to document pipelines, model evaluation, and production deployments. The stack is type-safe (strict TypeScript), UI-first (Tailwind + Framer Motion), and Vercel-ready for fast, edge-friendly hosting.

---

## Features

- **Responsive layout** — Mobile-first design with sidebar and top navigation
- **Dark / light theme** — System-aware theme toggle
- **Strict TypeScript** — Path alias `@/*`, linting tuned for safe shipping
- **Sections** — Hero, biography, project cards, resume PDF, skill groups, contact links
- **No backend** — Static-friendly; contact section is link-based (form placeholder for future use)

---

## Tech stack

| Area | Technologies |
|------|--------------|
| **Framework** | Next.js 14 (App Router), React 18 |
| **Language** | TypeScript 5.6 |
| **Styling** | Tailwind CSS, Framer Motion |
| **Deployment** | Vercel (zero-config) |
| **Tooling** | ESLint, Prettier, path aliases |

---

## Getting started

**Prerequisites:** Node.js 18+ and npm (or yarn/pnpm).

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Then open **http://localhost:3000**.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

---

## Project structure

```
src/
├── app/          # App Router entry (layout, page)
├── components/   # Reusable UI (NavBar, ThemeToggle, etc.)
├── sections/     # Page sections (Hero, About, Projects, Contact, …)
├── layouts/      # Layout wrappers (MainLayout)
├── data/         # Typed data (projects, skills, highlights, navigation)
├── hooks/        # React hooks (theme, media query)
├── styles/       # Global styles (Tailwind)
├── utils/        # Helpers (e.g. cn)
public/           # Static assets (logo, resume PDF)
```

---

## Contact — KuchikiRenji

| Channel | Link / ID |
|---------|-----------|
| **Email** | [KuchikiRenji@outlook.com](mailto:KuchikiRenji@outlook.com) |
| **GitHub** | [github.com/KuchikiRenji](https://github.com/KuchikiRenji) |
| **Discord** | `kuchiki_renji` |

Reach out for collaboration, opportunities, or questions about AI engineering and full-stack development.

---

## License

Private / portfolio use. See repository visibility and your preferred license for sharing.
