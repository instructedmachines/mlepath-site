# mlepath.com

Static marketing site for MLE Path. Next.js (App Router, `output: "export"`) → plain
static files → GitHub Pages at `https://mlepath.com`.

Pages: Home, Offerings, Resources, About, Contact — one shared `SiteNav`/`SiteFooter`,
design per the MLE Path Design System handoff. Content lives in `data/*.ts`, not in JSX.

## Add a new tool (2 steps + push)

1. Drop the self-contained HTML at `public/tools/<slug>/index.html`
2. Add one entry to `data/tools.ts` (slug must match the folder name)
3. Commit & push — the tool deploys to `mlepath.com/tools/<slug>/`, appears on
   /resources, and lands in sitemap.xml automatically

Tools are served as-is: no React wrapping, no nav injection, no build coupling.

## Deploy (first-time setup)

1. Push this repo to GitHub (`main` branch)
2. Repo → Settings → Pages → Source: **GitHub Actions** (the workflow in
   `.github/workflows/deploy.yml` builds and deploys on every push to main)
3. Settings → Pages → Custom domain: `mlepath.com` (the `public/CNAME` file keeps it
   set), then enable **Enforce HTTPS** once the cert is issued

DNS (at your registrar): apex `mlepath.com` A records → GitHub Pages IPs
(185.199.108.153 / .109. / .110. / .111.), optional `www` CNAME → `<username>.github.io`.
**Do not touch `go.mlepath.com` or `learn.mlepath.com`** — short links and Kajabi live there.

## Local dev

```
npm install
npm run dev      # dev server
npm run build    # static export → out/
```

## Fonts

Avenir Next TTFs are licensed and not committed. Drop them into `public/fonts/`
(see the README there); until then the site falls back to Nunito Sans.

## Never reintroduce (removed from the old site on purpose)

Prices/discount codes on-site, waitlist or early-access CTAs, lorem-ipsum pricing
cards, `© Untitled` footer, `ilya@bigtechmentor.com`, the Buzzsprout admin link,
the `github.com/organizations/...` admin URL.
