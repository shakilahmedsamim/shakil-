import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
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
    "google-ads-management/",
    "google-ads-audit/",
    "conversion-tracking/",
    "landing-page-optimization/",
    ...caseStudies.map((study) => `case-study/${study.slug}/`),
  ];

  return routes.map((route) => ({
    url: `${site.url}/${route}`,
    lastModified: new Date(),
  }));
}
