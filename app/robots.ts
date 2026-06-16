import type { MetadataRoute } from "next";

import { siteMeta } from "@/data/site-meta";

/**
 * Generates a robots.txt file that allows full indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteMeta.siteUrl}/sitemap.xml`,
    host: siteMeta.siteUrl,
  };
}
