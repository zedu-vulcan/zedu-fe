import type { Metadata } from "next";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore guides, insights, and tools to help universities, schools, and bootcamps run better learning communities.",
  openGraph: {
    title: "Zedu Resources - Guides and Tools for Modern Learning Teams",
    description:
      "Explore guides, insights, and tools to help universities, schools, and bootcamps run better learning communities.",
    url: siteUrl("/resources"),
    siteName: "Zedu",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Zedu resources for modern learning teams",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zedu Resources - Guides and Tools for Modern Learning Teams",
    description:
      "Explore guides, insights, and tools to help universities, schools, and bootcamps run better learning communities.",
    images: [ogImageUrl("og-image-5.png")],
  },
  alternates: {
    canonical: siteUrl("/resources"),
  },
};

export default function ResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
