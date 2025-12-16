# KuchikiRenji Frontend Scaffold

Production-ready Next.js (App Router) + TypeScript + Tailwind CSS setup tuned for Vercel.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` – start the local dev server
- `npm run build` – create the production build
- `npm run start` – serve the production build
- `npm run lint` – run ESLint
- `npm run format` – format with Prettier

## Structure

- `src/app` – App Router entry points
- `src/components` – reusable UI components
- `src/sections` – page-level sections
- `src/layouts` – layout wrappers
- `src/hooks` – React hooks
- `src/data` – typed data fixtures
- `src/styles` – global styles (Tailwind)
- `src/utils` – helpers such as `cn`
- `public` – static assets

## Notes

- Strict TypeScript + path alias `@/*`.
- Tailwind configured for the `src` tree.
- No backend wiring yet; contact section is a placeholder.

