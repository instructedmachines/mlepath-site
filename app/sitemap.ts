import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";

export const dynamic = "force-static";

const BASE = "https://mlepath.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/offerings/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/resources/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact/`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE}/tools/${tool.slug}/`,
    lastModified: new Date(tool.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...toolPages];
}
