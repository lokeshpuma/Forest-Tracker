# ForestTracker

A forest and environmental monitoring application built with Next.js and React for tracking forests, wildlife, water bodies, resources, and officers.

## Features

- Forest, wildlife, water body, resource, and officer management
- Dashboard with charts and recent activity
- Demo login flow (client-side session for static hosting)
- Responsive UI with light/dark theme

## Tech Stack

- Next.js 15 (static export)
- React 18
- Tailwind CSS
- Radix UI

## Local Development

```bash
git clone https://github.com/lokeshpuma/ForestTracker-2.git
cd ForestTracker-2
npm install
npm run dev
```

Open [http://localhost:3000/ForestTracker-2](http://localhost:3000/ForestTracker-2) (base path matches GitHub Pages).

## Build

```bash
npm run build
```

Static files are written to the `out/` directory.

## GitHub Pages Deployment

This repo deploys automatically to GitHub Pages on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time GitHub setup:**

1. Open **Settings → Pages** for the repository.
2. Set **Source** to **GitHub Actions**.

**Live site:** [https://lokeshpuma.github.io/ForestTracker-2/](https://lokeshpuma.github.io/Forest-Tracker/)

Manual deploy (optional):

```bash
npm run deploy
```

## Configuration
- `basePath` / `assetPrefix`: `/ForestTracker-2` (project site URL on GitHub Pages)
- `output: "export"` in `next.config.mjs` for static HTML export
- `images: { unoptimized: true }` in `next.config.mjs` to prevent build failures when using Next.js `<Image />` components with static exports

## License

MIT
