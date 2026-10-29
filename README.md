# Danny Byrne — developer portfolio

React portfolio featuring an introduction, technical toolkit, selected projects, and a working care coordination demo. This is the newer portfolio repository: its previous latest commit was December 2024; `devsite-next` was last updated in March 2022.

## Run locally

Requires Node.js 22 and npm. The lockfile is committed.

```bash
npm ci
npm run devstart
```

Open http://localhost:3000. No API credentials or environment file are needed for the active About and Selected work pages or the bundled Kindred demo.

## Build and serve

```bash
npm run build
npm start
```

The Express server serves `build/` at http://localhost:3000 and falls back to `index.html` for client routes. Set `PORT` for a different port. `npm start` serves an existing build; it does not build automatically. Keep `NODE_ENV` unset or use `production` when serving the production build.

For a static host, deploy **only the contents of `build/`** and configure a fallback to `/index.html` for `/About`, `/Portfolio`, and other client routes. Preserve normal static-file and directory serving, including `/demos/kindred/`. Do not upload the repository root as web content.

## Featured project: Kindred

Open `/demos/kindred/` from the portfolio or directly. The demo is bundled under `public/demos/kindred/`, so visitors do not need GitHub access, a download, or the separate private Site preview.

It includes fictional data, a daily overview, appointment editing, weekly calendar navigation, completion toggles, local persistence, reset, and a printable care plan. It is a fresh implementation with no Microsoft product code or branding. Its source link currently points to the review branch in `care-tracker`.

To update it, replace the three authored static files in `public/demos/kindred/` from the demo’s `dist/` folder and rebuild the portfolio. The project thumbnail is `public/images/kindred-preview.jpg`.

## Project structure

- `src/components/About.js`: introduction, featured demo, background, toolkit.
- `src/components/Portfolio.js`: project descriptions, live-demo and source links.
- `src/components/Layout.js`: accessible site navigation and page shell.
- `src/index.css`: responsive layout and shared visual styling.
- `server/server.js`: production static serving and route fallback.

Legacy contact, resume, and other components remain outside the active routes. The contact form depends on EmailJS configuration and is not part of the active site.

## Checks

```bash
npm run build
CI=true npm test -- --watchAll=false --runTestsByPath src/__tests__/App.test.js
```

The focused navigation tests cover access to Selected work and the same-origin demo link. Older contact tests target inactive legacy components and are not part of this focused validation.

## Deployment scope

This branch prepares the portfolio for deployment; it does not change custom-domain DNS or the existing hosting account. The bundled demo becomes publicly accessible when this portfolio build is deployed to a public host.

## DOCX publishing demo

The Selected work page features Fieldnotes, a neutral DOCX-to-React demo served at `/demos/fieldnotes/`. It uses new fictional documents and an original illustration. Its source is in `danny-byrne/docx-publishing-demo` with fresh history. The portfolio no longer links to the personal article project. The original personal repository was not modified or hidden.

To update Fieldnotes, run `npm ci && npm run build` in its repository, replace `public/demos/fieldnotes/` with that `dist/` output, and rebuild the portfolio.
