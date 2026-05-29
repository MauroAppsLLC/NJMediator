# John F. Gelson — Mediation & Resolution Services

Marketing website for John F. Gelson, built with [SvelteKit](https://kit.svelte.dev/) and prerendered to static HTML for deployment on Netlify.

## Stack

- SvelteKit (Svelte 5) + Vite
- `@sveltejs/adapter-static` — every page is prerendered to static HTML
- Plain CSS with design tokens (no CSS framework)
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts

## Getting started

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build -> ./build
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  app.css                  Design tokens (palette, type) + base styles
  app.html                 HTML shell, font links, favicon
  lib/
    site.js                Shared contact info + nav links
    components/            Header, Footer, StatGrid, FeatureGrid, SectionRule, ImageSlot
  routes/
    +layout.svelte         Sticky header + footer wrapper
    +layout.js             prerender = true
    +page.svelte           Home
    about/+page.svelte     About
    practice/+page.svelte  Practice
    contact/+page.svelte   Contact
static/
  images/                  john-gelson-portrait.png (real); other imagery uses placeholders
  favicon.svg
```

## Design tokens

Defined in `src/app.css` per the client design doc:

| Token         | Value     |
| ------------- | --------- |
| Off White     | `#F8F7F4` |
| Warm Gray     | `#EAE7E2` |
| Charcoal      | `#1F2430` |
| Navy Accent   | `#1C2E4A` |
| Gold Accent   | `#B0895A` |

## Contact form

The contact form does not use a backend. On submit it composes a `mailto:` link
(prefilled subject + body) and opens the visitor's email client, addressed to
`jgelson@njmediator.com`. See `src/routes/contact/+page.svelte`.

## Image placeholders

Office/desk/map imagery uses the `ImageSlot` component, which renders a clearly
marked placeholder until real photos are supplied. To swap one in, pass `src` and
`alt`:

```svelte
<ImageSlot src="{base}/images/office.jpg" alt="Office interior" ratio="4 / 3" />
```

John's real portrait is already wired into the Home and About heroes.

## Deployment (Netlify)

`netlify.toml` is configured:

- Build command: `npm run build`
- Publish directory: `build`

Connect the repo in Netlify (or run `netlify deploy`) and it will build and publish
the static output automatically.
