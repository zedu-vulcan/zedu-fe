import type { MetadataRoute } from "next";
import { siteUrl } from "~/lib/env-urls";

const FALLBACK_SITE_URL = "https://zedu.chat";

type PublicPage = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/**
 * Every public marketing page under app/(homepage) that should be indexed.
 * Pages that need a session (account) or are only reachable through an
 * invitation link are deliberately left out.
 */
const PUBLIC_PAGES: PublicPage[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/download", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/bootcamps", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/schools", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/solutions/universities",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/products/channels", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/buzz", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/products/file-management",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/resources", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact-sales", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contributors", changeFrequency: "monthly", priority: 0.4 },
  { path: "/policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
];

/**
 * Serves /sitemap.xml for the marketing site so search engines can discover
 * every public page instead of relying on internal links.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl() || FALLBACK_SITE_URL;
  const lastModified = new Date();

  return PUBLIC_PAGES.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
