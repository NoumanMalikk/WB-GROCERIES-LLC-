import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/store-config";

export default function robots(): MetadataRoute.Robots {
  const site = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/account", "/wishlist", "/api/"],
    },
    sitemap: `${site}/sitemap.xml`,
  };
}
