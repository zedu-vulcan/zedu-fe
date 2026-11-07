import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  School,
  Building2,
  Sparkles,
  Layers,
  Video,
  DollarSign,
  ShieldCheck,
  Check,
  X,
  MessageSquare,
  Users,
  Code2,
} from "lucide-react";
import { ArrowBtn, OutlineBtn } from "~/app/(homepage)/_components/ui/Button";
import { DynamicFooter } from "~/app/(homepage)/_components/footer/dynamic-footer";
import { ogImageUrl, siteUrl } from "~/lib/env-urls";

export const metadata: Metadata = {
  title: "Platform Comparisons: Zedu vs. Slack, Discord, WhatsApp & Teams",
  description:
    "Compare Zedu with Slack, Discord, WhatsApp, and Microsoft Teams for bootcamps, schools, and cohort learning. See how structured channels, built-in Buzz calling, and cohort-friendly pricing compare.",
  keywords: [
    "Discord alternative for bootcamps",
    "Slack alternative for learning communities",
    "WhatsApp alternative for bootcamps",
    "Microsoft Teams alternative for education",
    "bootcamp communication platform",
    "Zedu comparisons",
    "education chat software",
    "cohort management platform",
  ],
  openGraph: {
    title:
      "Platform Comparisons: Zedu vs. Slack, Discord, WhatsApp & Teams | Zedu",
    description:
      "Explore how Zedu's education-first platform stacks up against Slack, Discord, WhatsApp, and Microsoft Teams for bootcamps, academies, and cohort communities.",
    url: siteUrl("/compare"),
    siteName: "Zedu",
    images: [
      {
        url: ogImageUrl("og-image-5.png"),
        width: 1200,
        height: 630,
        alt: "Zedu platform comparisons overview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Platform Comparisons: Zedu vs. Slack, Discord, WhatsApp & Teams | Zedu",
    description:
      "Compare Zedu with Slack, Discord, WhatsApp, and Microsoft Teams for cohort education and bootcamps.",
    images: [ogImageUrl("og-image-5.png")],
  },
  alternates: {
    canonical: siteUrl("/compare"),
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

interface MatrixRow {
  feature: string;
  zedu: string;
  slack: string;
  discord: string;
  whatsapp: string;
  teams: string;
  highlight?: boolean;
}

const comparisonMatrix: { category: string; rows: MatrixRow[] }[] = [
  {
    category: "Economics & Cohort Pricing",
    rows: [
      {
        feature: "Pricing Model for 100+ Cohorts",
        zedu: "Predictable Flat Pricing (NGN / USD)",
        slack: "Per-seat ($7.25–$15.00/user/mo)",
        discord: "Free server / Nitro subscriptions",
        whatsapp: "Free (Zero cohort tools)",
        teams: "Part of M365 per-user licensing",
        highlight: true,
      },
      {
        feature: "Message & Resource History",
        zedu: "Full retention (No paywall)",
        slack: "90-day lockout on free tier",
        discord: "Unlimited server history",
        whatsapp: "Dependent on phone storage",
        teams: "Subject to M365 IT retention",
        highlight: true,
      },
      {
        feature: "Billing Currency Support",
        zedu: "Local currencies (NGN & USD)",
        slack: "USD only (FX conversion penalty)",
        discord: "USD only",
        whatsapp: "N/A",
        teams: "USD / M365 reseller billing",
      },
    ],
  },
  {
    category: "Learning & Cohort Structure",
    rows: [
      {
        feature: "Syllabus & Module Channels",
        zedu: "Built-in cohort mapping",
        slack: "Manual channel creation",
        discord: "Manual role gates & bot setup",
        whatsapp: "Single noisy message stream",
        teams: "Complex nested channel tabs",
        highlight: true,
      },
      {
        feature: "Centralized File Explorer",
        zedu: "Built-in workspace repository",
        slack: "Scattered in channel attachments",
        discord: "Buried in chat history",
        whatsapp: "Phone gallery downloads",
        teams: "SharePoint cloud drive",
        highlight: true,
      },
      {
        feature: "Cohort Archiving & Lifecycles",
        zedu: "1-click cohort archiving",
        slack: "Manual channel archiving",
        discord: "Manual permission revocation",
        whatsapp: "Manual group deletion / abandonment",
        teams: "IT admin lifecycle policies",
      },
    ],
  },
  {
    category: "Developer & Collaboration Tools",
    rows: [
      {
        feature: "Code Snippets & Syntax Highlighting",
        zedu: "Multi-language syntax highlighting",
        slack: "Basic markdown & text snippets",
        discord: "Markdown codeblocks",
        whatsapp: "No syntax formatting (Screenshots)",
        teams: "Basic monospace code blocks",
        highlight: true,
      },
      {
        feature: "Live Audio & Video Huddles (Buzz)",
        zedu: "Native Buzz calls with screen share",
        slack: "Slack Huddles (Limited on free)",
        discord: "Always-on voice channels",
        whatsapp: "Mobile calls (No desktop screen share)",
        teams: "Scheduled Teams meeting links",
        highlight: true,
      },
      {
        feature: "Student Privacy & Contact Safety",
        zedu: "100% private (No phone numbers shared)",
        slack: "Email visible to workspace members",
        discord: "Open DMs by default",
        whatsapp: "Phone numbers exposed to strangers",
        teams: "Domain enterprise account",
        highlight: true,
      },
    ],
  },
];

export default function ComparePage() {
  return (
    <div className="relative isolate w-full bg-white text-[#1f2530]">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-10 pb-14 text-center sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600 sm:text-sm">
          <Sparkles className="h-4 w-4" />
          <span>Platform Comparisons</span>
        </div>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight text-[#1f2530] sm:text-4xl md:text-5xl lg:text-5xl">
          The Right Communication Platform for Modern Education
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#5a6170] sm:text-base md:text-lg">
          General-purpose chat tools were built for gaming servers and corporate
          offices. See how Zedu provides the purpose-built structure, built-in
          calling, code formatting, and cohort-friendly economics that modern
          academies need.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <ArrowBtn text="Start Free Cohort" linkToHome />
          <OutlineBtn text="Book a Demo" href="/contact-sales" />
        </div>
      </section>

      {/* Comparison Cards Hub */}
      <section className="border-t border-neutral-100 bg-[#FAFAFF] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1f2530] sm:text-3xl">
              Select a Platform Comparison
            </h2>
            <p className="mt-2 text-sm text-[#5a6170] sm:text-base">
              Unbiased, factual breakdowns of features, cohort economics, and
              student experience
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Zedu vs Discord */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                    Discord
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    Community & Voice
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-neutral-900 sm:text-xl">
                  Zedu vs. Discord
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Discord is great for casual gamer hangouts, but bootcamps
                  struggle with gaming alerts, noise, and lost curriculum
                  resources.
                </p>

                <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Cohort module channels & File Explorer</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Distraction-free, safe educational boundary</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <Link
                  href="/compare/zedu-vs-discord"
                  className="inline-flex w-full items-center justify-between rounded-xl bg-primary-50 px-3.5 py-2.5 text-xs font-semibold text-primary-600 transition hover:bg-primary-100"
                >
                  <span>Read Discord Breakdown</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Zedu vs Slack */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                    Slack
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    Enterprise SaaS
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-neutral-900 sm:text-xl">
                  Zedu vs. Slack
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Slack charges $7.25–$15.00/user/month list pricing with 90-day
                  history limits on free plans, creating huge costs for cohorts.
                </p>

                <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Predictable flat pricing — no per-seat tax</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Full history & curriculum retention</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <Link
                  href="/compare/zedu-vs-slack"
                  className="inline-flex w-full items-center justify-between rounded-xl bg-primary-50 px-3.5 py-2.5 text-xs font-semibold text-primary-600 transition hover:bg-primary-100"
                >
                  <span>Read Slack Breakdown</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Zedu vs WhatsApp */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    WhatsApp
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    Group Messaging
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-neutral-900 sm:text-xl">
                  Zedu vs. WhatsApp
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Group chats lack code syntax, drown assignments in noise, and
                  expose student phone numbers. Discover why academies outgrow
                  WhatsApp.
                </p>

                <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Syntax-highlighted code snippets</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>100% student contact privacy & safety</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <Link
                  href="/compare/zedu-vs-whatsapp"
                  className="inline-flex w-full items-center justify-between rounded-xl bg-primary-50 px-3.5 py-2.5 text-xs font-semibold text-primary-600 transition hover:bg-primary-100"
                >
                  <span>Read WhatsApp Breakdown</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Zedu vs Microsoft Teams */}
            <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    MS Teams
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    Enterprise IT
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-neutral-900 sm:text-xl">
                  Zedu vs. Teams
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Teams is weighed down by heavy desktop clients, complex tenant
                  IT bureaucracy, and high bandwidth requirements. Zedu is fast
                  and lightweight.
                </p>

                <div className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>60-second setup without IT ticketing</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-neutral-700">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Lightweight low-bandwidth performance</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <Link
                  href="/compare/zedu-vs-teams"
                  className="inline-flex w-full items-center justify-between rounded-xl bg-primary-50 px-3.5 py-2.5 text-xs font-semibold text-primary-600 transition hover:bg-primary-100"
                >
                  <span>Read Teams Breakdown</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Master Platform Comparison Table */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1f2530] sm:text-3xl">
              Master Platform Comparison
            </h2>
            <p className="mt-2 text-sm text-[#5a6170] sm:text-base">
              See how Zedu compares side-by-side with Slack, Discord, WhatsApp,
              and Microsoft Teams
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full min-w-[760px] text-left text-sm text-neutral-700">
              <thead className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-900 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-4 w-1/4">
                    Features & Capabilities
                  </th>
                  <th
                    scope="col"
                    className="bg-primary-50/70 px-4 py-4 text-primary-700"
                  >
                    Zedu (Education)
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Slack
                  </th>
                  <th scope="col" className="px-4 py-4">
                    Discord
                  </th>
                  <th scope="col" className="px-4 py-4">
                    WhatsApp
                  </th>
                  <th scope="col" className="px-4 py-4">
                    MS Teams
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {comparisonMatrix.map((section, sIdx) => (
                  <>
                    <tr key={`cat-${sIdx}`} className="bg-neutral-50/80">
                      <td
                        colSpan={6}
                        className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-500"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.rows.map((row, rIdx) => (
                      <tr
                        key={`row-${sIdx}-${rIdx}`}
                        className={`transition hover:bg-neutral-50/50 ${
                          row.highlight ? "bg-blue-50/20" : ""
                        }`}
                      >
                        <td className="px-6 py-4 font-medium text-neutral-900">
                          {row.feature}
                        </td>
                        <td className="bg-primary-50/40 px-4 py-4 font-semibold text-primary-700">
                          {row.zedu}
                        </td>
                        <td className="px-4 py-4 text-xs text-neutral-600 sm:text-sm">
                          {row.slack}
                        </td>
                        <td className="px-4 py-4 text-xs text-neutral-600 sm:text-sm">
                          {row.discord}
                        </td>
                        <td className="px-4 py-4 text-xs text-neutral-600 sm:text-sm">
                          {row.whatsapp}
                        </td>
                        <td className="px-4 py-4 text-xs text-neutral-600 sm:text-sm">
                          {row.teams}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bootcamp Stack Cost & ROI Breakdown Card */}
      <section className="border-t border-neutral-100 bg-[#FAFAFF] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary-100 bg-white p-8 shadow-sm sm:p-12">
            <div className="text-center">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Cohort ROI Model
              </span>
              <h2 className="mt-3 text-2xl font-bold text-neutral-900 sm:text-3xl">
                How Much Does Your Academy Save with Zedu?
              </h2>
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                Real cost comparison for a mid-sized tech academy running 100
                active students per cohort
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Traditional Fractured Stack */}
              <div className="rounded-2xl border border-rose-200 bg-rose-50/30 p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  Standard Workplace Stack
                </span>
                <h3 className="mt-2 text-xl font-bold text-neutral-900">
                  Slack Pro + Zoom Pro
                </h3>
                <div className="mt-4 space-y-3 text-sm text-neutral-700">
                  <div className="flex justify-between border-b border-rose-100 pb-2">
                    <span>100 Slack Pro seats ($8.75/seat/mo)</span>
                    <span className="font-semibold text-neutral-900">
                      $875 / mo
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-rose-100 pb-2">
                    <span>Zoom Pro Host Add-on</span>
                    <span className="font-semibold text-neutral-900">
                      $15 / mo
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 text-base font-bold text-rose-700">
                    <span>Total Annual Stack Cost</span>
                    <span>$10,680 / yr</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-neutral-500">
                  * Plus currency conversion fees, manual WhatsApp groups, and
                  lost student history.
                </p>
              </div>

              {/* Purpose-Built Zedu Stack */}
              <div className="rounded-2xl border-2 border-primary-500 bg-primary-50/30 p-6 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                  Purpose-Built Education
                </span>
                <h3 className="mt-2 text-xl font-bold text-neutral-900">
                  Zedu Cohort Flat Subscription
                </h3>
                <div className="mt-4 space-y-3 text-sm text-neutral-700">
                  <div className="flex justify-between border-b border-primary-100 pb-2">
                    <span>Unlimited students & mentors</span>
                    <span className="font-semibold text-neutral-900">
                      Included
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-primary-100 pb-2">
                    <span>Built-in Buzz Video/Audio Calling</span>
                    <span className="font-semibold text-neutral-900">
                      Included
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 text-base font-bold text-primary-700">
                    <span>Total Annual Zedu Flat Cost</span>
                    <span>~$588 / yr</span>
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-emerald-500 p-3 text-center text-xs font-bold text-white shadow-sm sm:text-sm">
                  Net Academy Savings: Over $10,000 / year (94% Savings)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Education Needs Dedicated Software */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1f2530] sm:text-3xl">
              Why Bootcamps Choose Purpose-Built Education Software
            </h2>
            <p className="mt-2 text-sm text-[#5a6170] sm:text-base">
              The four foundational pillars separating Zedu from general-purpose
              workplace chat
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">
                Cohort Organization
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Channels automatically map to syllabus milestones, cohorts, and
                project groups without manual role headaches.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">
                Built-in Buzz Calling
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Real-time audio and video calls with screen sharing, call
                timers, and participant controls directly inside your channels.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">
                Predictable Economics
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Predictable cohort-based pricing designed for education so
                expanding enrollment doesn&apos;t penalize your budget.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-neutral-900">
                Focused & Distraction-Free
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                A professional environment without outside gaming popups, public
                advertising, or default open server direct messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation to Solutions */}
      <section className="border-t border-neutral-100 bg-[#FAFAFF] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#1f2530] sm:text-3xl">
              Explore Zedu for Your Organization
            </h2>
            <p className="mt-2 text-sm text-[#5a6170] sm:text-base">
              Tailored solutions for modern educators, mentors, and
              administrators
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/solutions/bootcamps"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md"
            >
              <div>
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900 transition group-hover:text-primary-600">
                  Bootcamps
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Run structured cohorts with lesson channels, live calls,
                  files, and mentor feedback.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-600">
                Learn more{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/solutions/schools"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md"
            >
              <div>
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                  <School className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900 transition group-hover:text-primary-600">
                  K-12 & Schools
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Safe, organized communication connecting teachers, students,
                  and administration.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-600">
                Learn more{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/solutions/universities"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md"
            >
              <div>
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900 transition group-hover:text-primary-600">
                  Universities
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Campus-wide collaboration with department channels and secure
                  academic spaces.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-600">
                Learn more{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/pricing"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md"
            >
              <div>
                <div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900 transition group-hover:text-primary-600">
                  Pricing Plans
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Predictable cohort plans designed to scale without per-seat
                  penalty fees.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-600">
                View Pricing{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Footer Banner */}
      <DynamicFooter
        text="Ready to Experience Education-First Communication?"
        description="Launch your next cohort with organized channels, built-in live video classrooms, and predictable pricing."
      />
    </div>
  );
}
