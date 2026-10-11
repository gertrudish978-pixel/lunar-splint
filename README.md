# Lunar Splint Project

Website for a NASA HUNCH 2026–27 team taking on the Lunar Splint Design Challenge: a custom-fit, 3D-printable splint for an Achilles partial tear on a lunar base.

Built with Next.js (App Router) as a static export.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Editing content

Most text, survey numbers, the spec sheet and deliverable statuses are in `lib/content.ts`. Change a status (`"ok"`, `"wip"`, `"todo"`) there when the team makes a decision. Photos live in `public/images/`.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** once.
