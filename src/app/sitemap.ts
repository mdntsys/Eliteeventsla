import type { MetadataRoute } from "next";
import { pageDivisions, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/rentals",
    ...pageDivisions.map((d) => `/${d.slug}`),
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
