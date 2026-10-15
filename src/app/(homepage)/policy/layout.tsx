import type { Metadata } from "next";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy - Zedu" },
  description:
    "Read how Zedu collects, uses, discloses, and safeguards your information when you use zedu.chat and related apps.",
  openGraph: {
    title: "Privacy Policy - Zedu",
    description:
      "Read how Zedu collects, uses, discloses, and safeguards your information when you use zedu.chat and related apps.",
    url: siteUrl("/policy"),
    siteName: "Zedu",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Zedu privacy policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Zedu",
    description:
      "Read how Zedu collects, uses, discloses, and safeguards your information when you use zedu.chat and related apps.",
    images: [ogImageUrl("og-image-5.png")],
  },
  alternates: {
    canonical: siteUrl("/policy"),
  },
};

export default function PolicyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
