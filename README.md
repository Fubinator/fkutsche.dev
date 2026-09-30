# Fabian Kutsche: personal website

An Astro and Tailwind CSS personal website built around the CV in `../cv`. Static HTML, locally hosted fonts, responsive layouts, and no analytics or client-side framework runtime.

## Develop

Requires Node.js 22.19+.

```sh
npm install --include=dev
npm run dev
```

Open http://localhost:4321.

```sh
npm run build    # Astro type checks and production build
npm run preview  # Serve the production build
npm run test:e2e # Browser and accessibility smoke checks (starts preview)
```

Before running browser checks for the first time, run `npx playwright install chromium`.

## Update content

- Page copy, experience, and skills: `src/pages/index.astro`
- Design and responsive styles: `src/styles/global.css`
- Downloadable CVs: `public/cv/` (plain/ATS versions copied from `../cv/cv-kutsche-fabian-en-plain.pdf` and `../cv/cv-de-ats.pdf`)
- Domain and canonical URL: `astro.config.mjs`

Experience and qualifications come from the supplied CV. Product descriptions were refined using [turingsecure](https://turingsecure.com/) and [Kodado](https://kodado.dev/); contribution statements remain based on the CV. Product graphics are conceptual illustrations, not screenshots. Review the availability date, current-role label, and expected degree completion when they change.

## Deploy

Run `npm run build` and publish `dist/` to a static host. The configured production domain is `https://www.fkutsche.dev`. No server, database, or environment variables are required.

For Vercel, `vercel.json` sets the Astro framework, npm install/build commands, and `dist` output directory. `package.json` selects Node.js 22 (22.19+). Connect `Fubinator/fkutsche.dev`, use `main` as the production branch, and leave the Root Directory at the repository root. Keep the existing domain assignments. These committed build settings override the old Remix project's corresponding settings.

Tailwind is integrated using the [official Vite plugin setup](https://tailwindcss.com/docs/installation/framework-guides/astro).
