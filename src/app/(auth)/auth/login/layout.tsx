import { Metadata } from "next";
import { ReactNode } from "react";
import { siteUrl } from "~/lib/env-urls";

const description =
  "Return to your classes, channels and cohort conversations in Zedu's shared learning workspace.";

export const metadata: Metadata = {
  title: "Log in | Zedu",
  description,
  openGraph: {
    title: "Log in | Zedu",
    description,
    url: siteUrl("/auth/login"),
    siteName: "Zedu",
    images: [
      {
        url: siteUrl("/og/zedu-home-share.png"),
        width: 1200,
        height: 630,
        alt: "Zedu - learning communities in one workspace",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Log in | Zedu",
    description,
    images: [siteUrl("/og/zedu-home-share.png")],
  },
  alternates: { canonical: siteUrl("/auth/login") },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children;
}
