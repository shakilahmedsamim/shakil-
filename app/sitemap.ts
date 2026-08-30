import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "about/",
    "services/",
    "case-study/",
    "contact/",
    "book-a-call/",
    "privacy-policy/",
  ];

  return routes.map((route) => ({
    url: `${site.url}/${route}`,
    lastModified: new Date(),
  }));
}
