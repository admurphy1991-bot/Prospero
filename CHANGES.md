# Prospero site update — font swap + Luca's feedback

Drop this `public/` folder over your existing one (same relative paths) and commit/push.
Only these files changed or were added — everything else in the repo is untouched.

## What changed

**Font swap (Option A)** — Archivo, Inter and IBM Plex Mono are gone. The whole
site now uses PP Supply Sans Regular, self-hosted (no more Google Fonts calls).
Since we only own the Regular weight, every heading/label that was bold now
relies on size and letter-spacing for hierarchy instead of font-weight — no
synthetic (browser-faked) bold anywhere.

- `public/assets/fonts/PPSupplySans-Regular.woff2` (primary, ~21KB) and
  `.otf` (fallback) — new, self-hosted.
- `public/index.html`, `public/book-demo.html` — `@font-face` added, Google
  Fonts `<link>` tags removed, all `font-weight` values normalized to 400.

**Luca's feedback, from the Slack thread:**

1. Stat numbers ("90%", "7×", "0") were flush against the divider lines —
   added horizontal padding to `.stat`.
2. Logo was low-quality everywhere — it turns out the repo's `assets/logo-lockup-blue.png`
   and `icon-*.png` were actually re-compressed JPEGs saved with a `.png`
   extension. Replaced with the real, crisp PNGs from your brand project.
3 & 4. Section eyebrows ("THE PROBLEM" etc.) and all other mono-styled text
   (tags, stat labels, SVG labels in the compliance-gap diagram) now render
   in PP Supply Sans instead of IBM Plex Mono.
5. Footer logo on the dark background was the blue-on-white lockup — nearly
   invisible on black. Built a proper white-on-transparent version
   (`logo-lockup-dark.png`) and pointed the footer at it. Note: the "dark
   mode" lockup file in your brand project (`lockupdark.png`) turned out to
   have a fully opaque white background with white text on it — i.e. the
   wordmark is baked in as invisible. I rebuilt a working transparent
   version from the blue lockup instead; worth regenerating a proper
   transparent white export at the source (Figma/Canva) when you get a
   chance, since I only reconstructed the wordmark's silhouette.
6. `book-demo.html` had a bare logo + "back to site" header. It now has the
   same nav links as the main site (How it works / Product / Who it's for /
   Outcomes), sticky + blurred like the homepage.
7. No favicon before — added `public/favicon.png` (the brand icon mark) and
   linked it from both pages.

## Not touched / worth knowing

- The root-level `index.html` and `book-demo.html` (outside `public/`) are
  stale duplicates — `server.js` only ever serves the `public/` versions, so
  I left the root copies alone. You may want to delete them at some point to
  avoid confusion.
- `public/prospero-dark.png` / `prospero-light.png` and `icon-dark.png` /
  `icon-light.png` aren't referenced anywhere in the HTML — I updated
  `icon-*.png` to the crisp versions anyway since they're brand assets, but
  they're currently unused.
