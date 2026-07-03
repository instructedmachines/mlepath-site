/**
 * Post-build step: wraps every standalone tool in a branded shell page.
 *
 * Tool bundles may take over the whole document at boot (document.write-style),
 * so in-page header injection cannot survive. Instead, for each tool in
 * data/tools.json this script rewrites the BUILD OUTPUT (out/tools/<slug>/):
 *
 *   index.html  -> small static shell: MLE Path header + full-height iframe,
 *                  plus title/description/canonical/OG meta from the registry
 *   app.html    -> the original untouched tool HTML (gets noindex + canonical)
 *
 * Source files in public/tools/ stay untouched — tools remain drop-in
 * standalone HTML. Runs automatically via `npm run build`.
 */
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");
const OUT = path.join(ROOT, "out");
const BASE = "https://mlepath.com";

const tools = JSON.parse(await readFile(path.join(ROOT, "data", "tools.json"), "utf8"));

const NAV_LINKS = [
  ["Offerings", `${BASE}/offerings/`],
  ["Resources", `${BASE}/resources/`],
  ["About", `${BASE}/about/`],
  ["Contact", `${BASE}/contact/`],
]
  .map(
    ([label, href]) =>
      `<a href="${href}" style="font-size:14px;text-decoration:none;font-weight:500;color:#4f4f4f;padding:4px 0">${label}</a>`
  )
  .join("");

const CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 34" fill="#0a78f5" style="width:24px;height:20px;display:block" aria-hidden="true"><path d="M7 0 L24 17 L7 34 L0 34 L17 17 L0 0 Z"></path><path d="M25 0 L42 17 L25 34 L18 34 L35 17 L18 0 Z"></path></svg>`;

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function shellFor(tool, hasPreview) {
  const title = `${tool.title} · MLE Path`;
  const canonical = `${BASE}/tools/${tool.slug}/`;
  const previewMeta = hasPreview
    ? `
<meta property="og:image" content="${canonical}preview.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${canonical}preview.jpg">`
    : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(tool.description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(tool.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="MLE Path">
<meta property="og:type" content="website">${previewMeta}
<link rel="icon" href="${BASE}/icon.svg" type="image/svg+xml">
<style>
  html, body { margin: 0; height: 100%; background: #fffff0; }
  body { display: flex; flex-direction: column; }
  iframe { flex: 1; width: 100%; border: 0; display: block; }
</style>
</head>
<body>
<header data-mlepath-nav style="flex:none;background:rgba(255,255,240,0.95);border-bottom:1px solid #d3d3d3;font-family:'Avenir Next',Avenir,'Nunito Sans','Segoe UI',-apple-system,sans-serif">
  <div style="max-width:1060px;margin:0 auto;padding:11px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
    <a href="${BASE}/" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;font-weight:700;font-size:18px;letter-spacing:-0.02em;color:#222222">
      ${CHEVRON}
      <span>MLE <span style="color:#0a78f5">Path</span></span>
    </a>
    <nav style="display:flex;align-items:center;gap:20px;flex-wrap:wrap" aria-label="MLE Path">
      ${NAV_LINKS}
    </nav>
  </div>
</header>
<iframe src="./app.html" title="${esc(tool.title)}"></iframe>
</body>
</html>
`;
}

let stamped = 0;
for (const tool of tools) {
  const dir = path.join(OUT, "tools", tool.slug);
  const indexFile = path.join(dir, "index.html");
  const appFile = path.join(dir, "app.html");
  if (!existsSync(indexFile)) {
    console.warn(`inject-tool-nav: SKIP ${tool.slug} — ${indexFile} not found`);
    continue;
  }
  let appHtml = await readFile(indexFile, "utf8");
  if (appHtml.includes("data-mlepath-nav")) continue; // already a shell (shouldn't happen on fresh builds)

  // The app page should not be indexed separately from its shell.
  const appMeta = `<meta name="robots" content="noindex"><link rel="canonical" href="${BASE}/tools/${tool.slug}/">`;
  appHtml = appHtml.replace(/<head([^>]*)>/i, `<head$1>${appMeta}`);

  await writeFile(appFile, appHtml);
  const hasPreview = existsSync(path.join(ROOT, "public", "tools", tool.slug, "preview.jpg"));
  await writeFile(indexFile, shellFor(tool, hasPreview));
  stamped++;
  console.log(`inject-tool-nav: shelled ${tool.slug}`);
}
console.log(`inject-tool-nav: done (${stamped}/${tools.length})`);
