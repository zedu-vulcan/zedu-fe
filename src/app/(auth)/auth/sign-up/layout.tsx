import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "~/lib/env-urls";

const title = "Sign up for Zedu | Free for Bootcamps and Cohorts";
const description =
  "Set up a workspace for your class, bootcamp or learning community, with channels, conversations and learning resources in one place. No credit card needed.";
const image = siteUrl("/og/zedu-home-share.png");

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl("/auth/sign-up"),
    siteName: "Zedu",
    images: [{ url: image, width: 1200, height: 630, alt: title }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  alternates: { canonical: siteUrl("/auth/sign-up") },
};

export default function SignUpLayout({ children }: { children: ReactNode }) {
  return children;
}
