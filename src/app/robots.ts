import type { MetadataRoute } from "next";
import { siteUrl } from "~/lib/env-urls";

/**
 * Serves /robots.txt for the marketing site.
 *
 * Only the public marketing pages should be crawled. Everything behind a
 * login (workspaces, auth flows, invitations) is disallowed so crawlers do
 * not waste budget on pages that only render a sign-in prompt.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/auth/",
          "/account",
          "/accept_general_invitation",
          "/accept_org_invitation",
          "/*/home/",
          "/api/",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
