import { Metadata } from "next";
import { ReactNode } from "react";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";

const description =
  "Guides, webinars, and resources to help educators and students get the most out of Zedu — your all-in-one learning workspace.";

export const metadata: Metadata = {
  title: "Resources | Zedu",
  description,
  openGraph: {
    title: "Resources | Zedu",
    description,
    url: siteUrl("/resources"),
    siteName: "Zedu",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Zedu Resources - guides and webinars for educators and students",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Zedu",
    description,
    images: [ogImageUrl("og-image-5.png")],
  },
  alternates: {
    canonical: siteUrl("/resources"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
