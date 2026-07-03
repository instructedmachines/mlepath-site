/**
 * Capture an animated GIF + static JPG fallback of a tool page.
 *
 * Usage:
 *   node scripts/capture-tool-media.mjs \
 *     --url https://mlepath.com/tools/the-signal-ladders/ \
 *     --clicks "Former boss|Shipped project at work|Portfolio of toy demos" \
 *     --out signal-ladders
 *
 * Produces <out>.gif (animated, ~800px wide) and <out>.jpg (fallback frame).
 * Requires: npm i -D playwright-core && npx playwright-core install chromium
 * plus ImageMagick (`convert`) on PATH.
 *
 * Each click target is matched by visible text (first match). A frame is
 * captured before any interaction and after each click. Clicks inside iframes
 * (tool shell pages) are handled automatically.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { chromium } from "playwright-core";

const args = Object.fromEntries(
  process.argv.slice(2).join(" ").split("--").filter(Boolean)
    .map((s) => { const i = s.indexOf(" "); return [s.slice(0, i).trim(), s.slice(i + 1).trim()]; })
);
const URL_ = args.url ?? "https://mlepath.com/tools/the-signal-ladders/";
const CLICKS = (args.clicks ?? "").split("|").map((s) => s.trim()).filter(Boolean);
const OUT = args.out ?? "tool";
const WIDTH = Number(args.width ?? 800);
const HOLD = Number(args.hold ?? 170); // GIF frame delay, centiseconds
const [VW, VH] = (args.viewport ?? "1280x1180").split("x").map(Number);

const tmp = mkdtempSync(path.join(os.tmpdir(), "toolmedia-"));
const frames = [];

const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: VW, height: VH }, deviceScaleFactor: 2 });
await page.goto(URL_, { waitUntil: "load", timeout: 30000 });
await page.waitForTimeout(3000); // let the bundle boot

async function snap(name) {
  const file = path.join(tmp, `${String(frames.length).padStart(2, "0")}-${name}.png`);
  await page.screenshot({ path: file });
  frames.push(file);
  console.log("frame:", name);
}

/** find the target in the page or any iframe, click, and mark with a cursor dot */
async function clickText(text) {
  for (const frame of page.frames()) {
    const loc = frame.getByText(text, { exact: false }).first();
    try {
      await loc.waitFor({ state: "visible", timeout: 2000 });
      await loc.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await loc.click();
      await page.waitForTimeout(800); // let the verdict render
      return true;
    } catch { /* try next frame */ }
  }
  console.warn(`clickText: "${text}" not found`);
  return false;
}

await snap("initial");
for (const text of CLICKS) {
  if (await clickText(text)) await snap(text.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30));
}

await browser.close();

// Assemble GIF (longer hold on first + last frames) and JPG fallback (last frame).
const gifArgs = [];
frames.forEach((f, i) => {
  const delay = i === 0 || i === frames.length - 1 ? HOLD * 1.6 : HOLD;
  gifArgs.push("-delay", String(Math.round(delay)), f);
});
execFileSync("convert", [...gifArgs, "-resize", String(WIDTH), "-layers", "optimize", "-loop", "0", `${OUT}.gif`]);
execFileSync("convert", [frames[frames.length - 1], "-resize", "1456", "-quality", "88", `${OUT}.jpg`]);
rmSync(tmp, { recursive: true, force: true });
console.log(`wrote ${OUT}.gif (${frames.length} frames) and ${OUT}.jpg`);
