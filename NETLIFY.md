# Netlify deployment

This repository is configured for Netlify's current Next.js runtime.

1. In Netlify, choose **Add new project → Import an existing project**.
2. Select GitHub and choose `DavidGhachava/KristinaLanguages`.
3. Keep the settings from `netlify.toml`: build command `npm run build`, publish directory `.next`, and Node.js 22.
4. Select **Deploy**. Future pushes to `main` deploy automatically.

Netlify supplies its maintained OpenNext adapter automatically. Do not add or pin the legacy `@netlify/plugin-nextjs` package.

The existing OpenAI Sites build remains available through `npm run build:sites`.
