import type { Metadata } from "next";
import { siteUrl } from "~/lib/env-urls";
import { FeatureSection } from "./_components/home/FeatureSection";
import HeroSection from "./_components/home/Herosection";
import { ArticlesSection } from "./_components/home/ArticlesSection";
import { PricingSection } from "./_components/home/PricingSection";
import { WhySection } from "./_components/home/WhySection";
import { FAQSection } from "./_components/home/FAQSection";
import { DynamicFooter } from "./_components/footer/dynamic-footer";
import { getHomeStructuredData } from "./_lib/homeStructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Zedu | One Workspace for Your Entire Cohort",
  },
  description:
    "Stop juggling chat groups, meeting links and shared folders. Zedu puts your cohort's classes, conversations and resources in one workspace.",
  openGraph: {
    title: "Zedu | One Workspace for Your Entire Cohort",
    description:
      "Stop juggling chat groups, meeting links and shared folders. Zedu puts your cohort's classes, conversations and resources in one workspace.",
    url: siteUrl("/"),
    siteName: "Zedu",
    images: [
      {
        url: siteUrl("/og/zedu-home-share.png"),
        width: 1200,
        height: 630,
        alt: "Zedu | One Workspace for Your Entire Cohort",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zedu | One Workspace for Your Entire Cohort",
    description:
      "Stop juggling chat groups, meeting links and shared folders. Zedu puts your cohort's classes, conversations and resources in one workspace.",
    images: [siteUrl("/og/zedu-home-share.png")],
  },
  alternates: {
    canonical: siteUrl("/"),
  },
};

const HomePage = () => {
  const structuredData = JSON.stringify(getHomeStructuredData()).replace(
    /</g,
    "\\u003c"
  );

  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <HeroSection />
      <FeatureSection />
      <ArticlesSection />
      <PricingSection />
      <WhySection />
      <FAQSection />
      <DynamicFooter
        text="Run Your Next Cohort Without Limits"
        description="Join thousands of educators building better learning experiences."
      />
    </section>
  );
};

export default HomePage;
