import toolsJson from "./tools.json";

/**
 * Registry of standalone interactive tools.
 *
 * To add a tool:
 *   1. Drop its self-contained HTML at  public/tools/<slug>/index.html
 *   2. Add one entry to data/tools.json (slug must match the folder name)
 *
 * The entry feeds the Resources page, sitemap.xml, and the post-build
 * nav/SEO injection (scripts/inject-tool-nav.mjs) automatically.
 */
export interface Tool {
  slug: string;
  title: string;
  description: string;
  /** ISO date, used for sitemap lastModified */
  date: string;
}

export const tools: Tool[] = toolsJson as Tool[];
