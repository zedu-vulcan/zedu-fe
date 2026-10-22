import type { Metadata } from "next";
import PolicyContent from "./component/PolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Zedu",
  description:
    "Read the official Zedu Privacy Policy. Learn how we collect, use, protect, and handle your personal information across our learning workspace and services.",
  alternates: {
    canonical: "/policy",
  },
  openGraph: {
    title: "Privacy Policy | Zedu",
    description:
      "Read the official Zedu Privacy Policy. Learn how we collect, use, protect, and handle your personal information.",
    url: "/policy",
    type: "website",
  },
};

export default function PolicyPage() {
  return <PolicyContent />;
}
