import type { Metadata } from "next";
import Image from "next/image";
import {
  BellRing,
  FolderOpen,
  HeartHandshake,
  Lock,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";
import { ArrowBtn, OutlineBtn } from "~/app/(homepage)/_components/ui/Button";
import { WhyCard } from "~/app/(homepage)/_components/ui/WhyCard";
import { ComparisonShowcase } from "~/app/(homepage)/_components/ui/ComparisonShowcase";
import { DynamicFooter } from "../../_components/footer/dynamic-footer";

const PAGE_DESCRIPTION =
  "Stay connected with your child's learning journey. Zedu helps parents and guardians receive clear announcements, track school updates, and communicate securely with educators.";

export const metadata: Metadata = {
  title: "Zedu for Parents & Guardians | Safe, Structured School Communication",
  description: PAGE_DESCRIPTION,
  keywords: [
    "parents and guardians platform",
    "school communication for parents",
    "parent teacher messaging app",
    "safe school updates",
    "student progress tracking",
    "education collaboration platform",
    "Zedu parents",
  ],
  icons: {
    icon: "/TelexIcon.svg",
  },
  openGraph: {
    title: "Zedu for Parents & Guardians - Connected to Your Child's Learning",
    description: PAGE_DESCRIPTION,
    url: siteUrl("/solutions/parents"),
    siteName: "Zedu",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Zedu for parents and guardians solution preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zedu for Parents & Guardians - School Communication Made Simple",
    description: PAGE_DESCRIPTION,
    images: [ogImageUrl("og-image-5.png")],
  },
  alternates: {
    canonical: siteUrl("/solutions/parents"),
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
  applicationName: "Zedu",
  creator: "Zedu",
  publisher: "Zedu",
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Parents & Guardians",
      item: siteUrl("/solutions/parents"),
    },
  ],
};

const whyCards = [
  {
    title: "Dedicated Parent Channels",
    desc: "School news, class schedules, and event reminders in organized announcement channels so nothing gets buried.",
  },
  {
    title: "Private Teacher Direct Messaging",
    desc: "Communicate directly and securely with teachers and school counselors without sharing personal phone numbers.",
  },
  {
    title: "Safe & Controlled Environment",
    desc: "Role-based permissions ensure communications remain protected, respectful, and family-friendly.",
  },
];

const features = [
  {
    icon: BellRing,
    title: "Timely Announcements",
    desc: "Receive urgent school alerts, emergency notifications, and weekly updates straight to your mobile phone or browser.",
  },
  {
    icon: MessageSquare,
    title: "Direct Teacher Access",
    desc: "Ask questions regarding homework, attendance, or upcoming tests through private, respectful message threads.",
  },
  {
    icon: FolderOpen,
    title: "Centralized Resource Files",
    desc: "Access report cards, permission slips, syllabi, and event calendars stored securely beside the conversation.",
  },
  {
    icon: ShieldCheck,
    title: "Child Safety & Privacy",
    desc: "Strict school verification and admin moderation keep your child's learning space safe and compliant.",
  },
];

const comparisonData = {
  withoutTitle: "Without Zedu",
  withoutItems: [
    "Important notices are lost in crowded social media or personal messaging groups",
    "Parents miss crucial deadlines because school letters remain at the bottom of backpacks",
    "Teachers and parents exchange personal phone numbers, blurring communication boundaries",
    "School updates are scattered across separate emails, apps, and paper flyers",
  ],
  withTitle: "With Zedu",
  withItems: [
    "All school notices, homework updates, and newsletters organized in dedicated channels",
    "Direct, private, and professional messaging channels between educators and parents",
    "Instant notifications for school closures, exam dates, and field trip permissions",
    "One unified workspace to keep every family member aligned and informed",
  ],
};

const steps = [
  {
    title: "Join your school community",
    desc: "Receive an invitation link or email from your school administrator.",
  },
  {
    title: "Connect with teachers",
    desc: "Access your child's classrooms, subject channels, and grade-level feeds.",
  },
  {
    title: "Stay informed in real time",
    desc: "Get instant alerts for homework, events, and school-wide announcements.",
  },
  {
    title: "Support learning at home",
    desc: "Review shared assignments and resources to help your child excel.",
  },
];

const faqs = [
  {
    question: "How do parents and guardians get access to Zedu?",
    answer:
      "Your school or learning institution sends you a secure invite link or code to join their verified workspace.",
  },
  {
    question: "Can I access Zedu from my phone?",
    answer:
      "Yes. Zedu works across all modern web browsers and mobile devices, keeping you connected wherever you go.",
  },
  {
    question: "Is communication private and secure?",
    answer:
      "Yes. Direct messages between parents and educators are confidential, and school channels are strictly moderated by institution administrators.",
  },
  {
    question: "Can I manage multiple children in different grades?",
    answer:
      "Yes. You can switch between different classroom channels or cohorts seamlessly from a single parent account.",
  },
  {
    question: "Is there any cost for parents to use Zedu?",
    answer:
      "No. Zedu is completely free for parents and guardians whose schools have adopted the platform.",
  },
];

const ParentsSolutionsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <section
        aria-labelledby="parents-hero"
        className="relative isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[30%] w-screen -translate-x-1/2 bg-gradient-to-t from-blue-50/30 to-white"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 rounded-[28px] px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14 lg:px-12 lg:py-14 min-h-[85dvh]">
          <div className="flex flex-col items-center gap-5 text-center lg:max-w-[490px] lg:items-start lg:text-left">
            <h1
              id="parents-hero"
              className="text-3xl font-semibold leading-tight text-[#1f2530] sm:text-4xl lg:text-[44px] lg:leading-[1.12]"
            >
              Stay connected with your child&apos;s{" "}
              <span className="text-primary-500">learning journey</span>
            </h1>
            <p className="max-w-[46ch] text-sm leading-relaxed text-[#5a6170] sm:text-base">
              A safe, structured bridge between home and school. Receive clear
              announcements, track classroom milestones, and communicate
              seamlessly with educators.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <ArrowBtn text="Get Started for Free" href="/auth/sign-up" />
              <OutlineBtn text="Talk to Sales" href="/contact-sales" />
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-3xl">
            <div className="relative aspect-[16/11] w-full sm:aspect-[4/3] lg:aspect-[16/10]">
              <Image
                src="/images/homepage/solutions/schools-hero.jpg"
                alt="Parents and teachers collaborating using Zedu"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 680px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="parents-why"
        className="relative isolate overflow-hidden space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16 mt-5"
      >
        <div>
          <h2
            id="parents-why"
            className="text-3xl font-semibold leading-tight text-[#1f2530] sm:text-4xl lg:text-[44px] text-center lg:leading-[1.12]"
          >
            Built for Transparent Parent-School Engagement
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((card) => (
            <WhyCard
              key={card.title}
              title={card.title}
              desc={card.desc}
              showBadge
              showArrow
              className="h-full"
              headingLevel="h3"
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="parents-features"
        className="relative isolate overflow-hidden space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      >
        <div className="flex flex-col items-center text-center gap-4">
          <h2
            id="parents-features"
            className="text-3xl font-semibold leading-tight text-[#1f2530] sm:text-4xl lg:text-[44px] text-center lg:leading-[1.12]"
          >
            Everything Families Need to Stay Informed
          </h2>
          <p className="max-w-[95%] text-xs text-neutral-600 sm:max-w-[90%] sm:text-base md:max-w-[65%] lg:max-w-[45%] lg:text-lg">
            Direct teacher messaging, class announcements, and secure file
            sharing designed with student safety at the center.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="flex h-full flex-col gap-4 rounded-2xl bg-[#F9F7FD] p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-500 text-white">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                </span>
                <h3 className="text-lg font-semibold text-[#1f2530] sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {feature.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="parents-comparison"
        className="relative isolate overflow-hidden space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      >
        <div className="flex flex-col items-center text-center gap-4">
          <h2
            id="parents-comparison"
            className="text-3xl font-semibold leading-tight text-[#1f2530] sm:text-4xl lg:text-[44px] lg:leading-[1.12]"
          >
            Clear Communication Without the Clutter
          </h2>
        </div>

        <ComparisonShowcase
          withoutTitle={comparisonData.withoutTitle}
          withoutItems={comparisonData.withoutItems}
          withTitle={comparisonData.withTitle}
          withItems={comparisonData.withItems}
          ctaText="Explore Zedu for Families"
          ctaHref="/auth/sign-up"
        />
      </section>

      <section
        aria-labelledby="parents-steps"
        className="relative isolate overflow-hidden space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      >
        <div className="flex flex-col items-center text-center gap-4">
          <h2
            id="parents-steps"
            className="text-3xl font-semibold leading-tight text-[#1f2530] sm:text-4xl lg:text-[44px] lg:leading-[1.12]"
          >
            How Zedu Connects Home and Classroom
          </h2>
          <p className="max-w-[95%] text-xs text-neutral-600 sm:max-w-[90%] sm:text-base md:max-w-[65%] lg:max-w-[45%] lg:text-lg">
            Four simple steps to keep parents engaged, informed, and confident
            in their child&apos;s education.
          </p>
        </div>

        <ol className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-primary-500"
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-[#1f2530]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="parents-faq"
        className="relative isolate overflow-hidden space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      >
        <div className="flex flex-col items-center text-center gap-4">
          <h2
            id="parents-faq"
            className="text-3xl font-semibold leading-tight text-[#1f2530] sm:text-4xl lg:text-[44px] lg:leading-[1.12]"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto w-full max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-5 py-4 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[#1f2530] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-primary-500 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div>
        <DynamicFooter
          text="Bring Home and Classroom Together"
          description="Empower educators, parents, and students with transparent, structured communication built for school success."
        />
      </div>
    </>
  );
};

export default ParentsSolutionsPage;
