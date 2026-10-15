import type { Metadata } from "next";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service - Zedu" },
  description:
    "Read the Zedu Terms of Service, including acceptance of terms, acceptable use of the app, and how your use is covered by our Privacy Policy.",
  openGraph: {
    title: "Terms of Service - Zedu",
    description:
      "Read the Zedu Terms of Service, including acceptance of terms, acceptable use of the app, and how your use is covered by our Privacy Policy.",
    url: siteUrl("/terms-of-service"),
    siteName: "Zedu",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Zedu terms of service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Zedu",
    description:
      "Read the Zedu Terms of Service, including acceptance of terms, acceptable use of the app, and how your use is covered by our Privacy Policy.",
    images: [ogImageUrl("og-image-5.png")],
  },
  alternates: {
    canonical: siteUrl("/terms-of-service"),
  },
};

export default function TermsOfServiceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
