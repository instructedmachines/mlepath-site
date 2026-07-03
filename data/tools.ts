/**
 * Registry of standalone interactive tools.
 *
 * To add a tool:
 *   1. Drop its self-contained HTML at  public/tools/<slug>/index.html
 *   2. Add one entry here (slug must match the folder name)
 * The entry feeds the Resources page and sitemap.xml automatically.
 */
export interface Tool {
  slug: string;
  title: string;
  description: string;
  /** ISO date, used for sitemap lastModified */
  date: string;
}

export const tools: Tool[] = [
  {
    slug: "the-signal-ladders",
    title: "The Signal Ladders",
    description:
      "Which job-search channels still carry signal in the AI/ML market — and which are noise.",
    date: "2026-07-02",
  },
];
