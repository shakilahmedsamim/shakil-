import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import FounderVideo from "@/components/FounderVideo";
import LogoMarquee from "@/components/LogoMarquee";
import ReviewsSection from "@/components/ReviewsSection";
import {
  ArrowRightIcon,
  BarChartIcon,
  ClockIcon,
  LayersIcon,
  LayoutIcon,
  LinkIcon,
  ReplyIcon,
  ShieldCheckIcon,
  TargetIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Google Ads Management and Conversion Tracking Agency",
  description:
    "We build and manage Google Ads campaigns with full conversion tracking across every platform you advertise on, for local service and B2B businesses in the UK, US, and Canada.",
  alternates: { canonical: "/" },
};

const heroStats = [
  { icon: ClockIcon, value: "30 Min", label: "Free Strategy Call" },
  { icon: ReplyIcon, value: "1 Day", label: "Response Time" },
  { icon: ShieldCheckIcon, value: "100%", label: "Tracking Verified" },
];

const valueProps = [
  {
    icon: LayersIcon,
    heading: "Set Up Once, Track Forever",
    body: "Most agencies stop at pixel installation. We build enhanced conversions, server-side tagging, and offline conversion imports so your Smart Bidding actually learns from real revenue.",
  },
  {
    icon: TargetIcon,
    heading: "Ads That Match Your Sales Cycle",
    body: "Whether a lead converts online in minutes or over the phone in three weeks, we make sure that conversion gets attributed back to the exact ad and keyword that earned it.",
  },
  {
    icon: LinkIcon,
    heading: "Tracking That Covers Every Platform You Run",
    body: "We manage Google Ads directly, but your conversion data usually needs to reach more than one platform. We build and maintain tracking for Meta, TikTok, and Pinterest too, even on ad accounts we don't manage.",
  },
];

const offerCards = [
  {
    icon: TargetIcon,
    title: "Google Ads Management",
    description:
      "Search and Local Services Ads campaigns built around calls and form submissions for your service area, not raw impressions.",
    linkLabel: "See what's included",
    href: "/services/#google-ads-management",
  },
  {
    icon: BarChartIcon,
    title: "Conversion Tracking Setup",
    description:
      "Enhanced Conversions, server-side tagging, and offline imports, so every call, form, and closed deal is attributed to the ad that earned it.",
    linkLabel: "See the full tracking stack",
    href: "/services/#conversion-tracking",
  },
  {
    icon: LayoutIcon,
    title: "Landing Page Optimization",
    description:
      "The page an ad sends traffic to gets checked for message match, load speed, and a single clear next step, not left as an afterthought.",
    linkLabel: "See what we check",
    href: "/services/#landing-pages",
  },
];

const steps = [
  { title: "Free Audit", body: "We review your current account and flag exactly what is broken or wasted." },
  { title: "Tracking Setup", body: "We install enhanced conversions, server-side tagging, and offline imports." },
  { title: "Campaign Launch", body: "We build or restructure campaigns around your actual sales cycle." },
  { title: "Monthly Optimization", body: "We report plainly on what closed, then adjust budget toward it." },
];

const faqItems = [
  {
    question: "What is the difference between Google Ads conversion tracking and offline conversion tracking?",
    answer:
      "Google Ads conversion tracking measures actions that happen on your website, such as a form submission or a call from a click-to-call button, while offline conversion tracking imports actions that happen after the click, such as a signed contract or a completed sale, back into Google Ads and Meta so the bidding algorithm can optimize toward revenue instead of just clicks.",
  },
  {
    question: "Do I need a Google Ads agency if I already run my own campaigns?",
    answer:
      "You do not need an agency to run Google Ads, but most self-managed accounts we audit are missing enhanced conversions, server-side tagging, or offline conversion imports, which means the algorithm is bidding on incomplete data and wasting a portion of the budget as a result.",
  },
  {
    question: "How much does conversion tracking setup cost?",
    answer:
      "Conversion tracking setup cost depends on whether it is a standard client-side pixel and Google tag installation or a full server-side GTM container with offline conversion automation through a CRM, and we quote a specific number after the free audit once we know exactly what your account and website need.",
  },
  {
    question: "How long does it take to see results from Google Ads?",
    answer:
      "Most accounts show meaningful signal within two to four weeks once tracking is corrected and campaigns are structured around actual sales data, though the exact timeline depends on your industry's sales cycle and current monthly ad spend.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section pt-10 md:pt-16">
        <div className="content-wrap grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="caption-copy px-3 py-1.5 rounded-full bg-white border border-border">
                Google Ads Management
              </span>
              <span className="caption-copy px-3 py-1.5 rounded-full bg-success/10 text-success flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                5.0 Rated on Upwork &amp; Fiverr
              </span>
            </div>

            <h1 className="h1-style">
              Know Exactly Which Ads Turn Into{" "}
              <span className="text-accent">Paying Customers.</span>
            </h1>

            <p className="body-lg-copy text-neutral">
              We manage your Google Ads and build the tracking behind them,
              so every dollar of spend can be traced back to a real, closed
              sale, not just a click.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2">
                  Book My Free 30-Minute Audit
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-study/"
                  className="inline-flex items-center gap-1.5 text-[16px] font-medium text-ink hover:text-accent transition-colors"
                >
                  See Real Client Results
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <p className="caption-copy">
                No payment required, and no pressure to sign anything after.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <FounderVideo />
            <div className="grid grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white border border-border p-4 text-center flex flex-col items-center gap-1.5"
                >
                  <stat.icon className="w-5 h-5 text-accent" />
                  <span className="text-[22px] font-semibold text-accent">{stat.value}</span>
                  <span className="caption-copy leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="content-wrap px-6 flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-[14px] font-medium text-ink">
            <ShieldCheckIcon className="w-4 h-4 text-accent" />
            Platforms We Build and Verify Tracking For
          </span>
        </div>
        <LogoMarquee />
        {/* Add a real, current Google Partner badge near the nav or footer once earned; not a platform we track, so it stays out of this logo row. */}
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="flex justify-center mb-5">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent">
              What We Offer
            </span>
          </div>
          <h2 className="h2-style text-center max-w-[26ch] mx-auto mb-10">
            Google Ads, Tracking, and the Pages They Send Traffic To
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {offerCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-3"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                  <card.icon className="w-5 h-5" />
                </span>
                <h3 className="h3-style !text-[19px]">{card.title}</h3>
                <p className="body-copy text-neutral">{card.description}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:underline mt-1"
                >
                  {card.linkLabel}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <div className="max-w-[560px] mx-auto text-center mb-12">
            <p className="caption-copy uppercase tracking-wider text-accent mb-3">Why It Works</p>
            <h2 className="h2-style">Built for Accuracy, Not Just Activity</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.heading}
                className="bg-white rounded-2xl border border-border shadow-sm p-8 flex flex-col gap-4 transition-shadow hover:shadow-md"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                  <prop.icon className="w-6 h-6" />
                </span>
                <h3 className="h3-style">{prop.heading}</h3>
                <p className="body-copy text-neutral">{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <h2 className="h2-style text-center mb-10">What Clients Say</h2>
          <ReviewsSection />
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <h2 className="h2-style text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-2">
                <span className="caption-copy text-accent">Step {i + 1}</span>
                <h3 className="h3-style">{step.title}</h3>
                <p className="body-copy text-neutral">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6 max-w-[860px]">
          <h2 className="h2-style text-center mb-10">Common Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
