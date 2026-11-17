import type { MetadataRoute } from "next";
import { projects, SITE } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/` },
    ...projects.map((p) => ({ url: `${SITE}/home/${p.slug}/` })),
    { url: `${SITE}/privacy-policy/` },
  ];
}
