import type { MetadataRoute } from "next";

import { siteMeta } from "@/data/site-meta";
import { getAllArticles } from "@/lib/content";

/**
 * Generates a sitemap containing the homepage and all articles.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  return [
    {
      url: siteMeta.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...articles.map((article) => ({
      url: `${siteMeta.siteUrl}/articles/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
