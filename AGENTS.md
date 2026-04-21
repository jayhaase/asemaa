# Repository Guidelines

## Project Structure & Module Organization
- Core Eleventy templates live in `src/index.njk` and `src/gallery.njk`; shared layouts and partials sit under `src/_includes`.
- Data loaders such as `src/_data/locations.js` and `src/_data/contentful.js` fetch Contentful entries and seed the Alpine stores.
- Tailwind sources are in `src/assets/css`; compiled output and generated assets land in `_site/`, which is always regenerated.
- Static imagery (e.g., `src/assets/images`) is referenced through Eleventy filters so the iframe host receives stable paths.

## Build, Test, and Development Commands
- `npm install` sets up Eleventy, Tailwind, and Contentful SDK dependencies.
- `npm run start` runs Eleventy and Tailwind in watch mode at `http://localhost:8080`.
- `npm run build` produces the deployable `_site/` bundle; use it before committing large template changes.
- `npm run dev:css` and `npm run dev:11ty` are available when you need to troubleshoot styling or template builds separately.

## Coding Style & Naming Conventions
- Use four-space indentation in Nunjucks, HTML, and inline JavaScript to match existing files.
- Favor ES modules (`const`, `let`, arrow functions) in Eleventy data files; keep exports small and focused on a single concern.
- Compose UI with Tailwind utility classes; keep custom classes in `tailwind.config.js` rather than ad-hoc inline styles.
- Name data keys in camelCase (`turtleMapSettings`, `locationsArray`) to stay consistent with Alpine store usage.

## Testing Guidelines
- There is no automated test suite yet; rely on `npm run build` to surface template or data errors.
- After data updates, confirm the map renders by loading the dev server and exercising the location dropdown across breakpoints.
- When adjusting iframe messaging, inspect the browser console for `postMessage` warnings and verify height syncing inside the host page.

## Commit & Pull Request Guidelines
- Follow the repository’s informal style: short present-tense commit subjects (e.g., "Refine map height syncing") with optional context in the body.
- Reference Contentful entry IDs or Netlify deploy URLs when relevant so reviewers can trace data and build outputs.
- Pull requests should include a concise summary, screenshots or GIFs for visual changes, and links to dependent tickets or Contentful entries.

## Configuration & Data Sources
- All content and data dependencies are pulled from Contentful at Eleventy build time; do not introduce additional runtime fetches.
- Duplicate `.env.example` to `.env` and supply Contentful space ID and access token before running builds.
- Keep secret values out of commits; Netlify environment variables power production builds.
- If adding new data files, export plain objects or arrays so Eleventy auto-injects them without extra wiring.
