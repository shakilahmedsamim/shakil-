import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import TestimonialCard from "@/components/TestimonialCard";
import { CheckIcon, LayersIcon, LinkIcon, TargetIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Google Ads, Meta Ads and Conversion Tracking Agency",
  description:
    "We build and manage Google Ads and Meta Ads campaigns with full online and offline conversion tracking for local service and B2B businesses in the UK, US, and Canada.",
  alternates: { canonical: "/" },
};

const heroBullets = [
  "Google Ads, Meta Ads, and cross-platform campaign management",
  "Full online and offline conversion tracking, so closed deals feed back into your ad accounts",
  "Server-side tracking setup that survives iOS privacy changes and ad blockers",
  "Transparent monthly reporting, no jargon, no vanity metrics",
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
    heading: "One Team, Both Platforms",
    body: "Google and Meta read signals differently. We manage both from one dashboard so your budget shifts to whichever platform is actually producing booked jobs, not whichever platform is easier to report on.",
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
            <h1 className="h1-style">
              Google Ads and Meta Ads That Track Every Real Sale, Not Just Every Click
            </h1>
            <p className="body-lg-copy text-neutral">
              We build and manage paid ad campaigns for local service
              businesses and B2B companies across the UK, US, and Canada,
              with conversion tracking set up correctly from day one so your
              budget goes toward what actually closes.
            </p>
            <ul className="flex flex-col gap-3">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                  <span className="body-copy">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <Link href="/book-a-call/" className="btn-primary w-fit">
                Book Your Free 30-Minute Audit
              </Link>
              <p className="caption-copy">
                No payment required. We will look at your current account and
                tell you exactly what is costing you money.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-white">
            {/* Replace VIDEO_ID with the founder-led YouTube video the client supplies. */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
              title={`Founder introduction video`}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <p className="caption-copy text-center mb-6">
            Certifications and platforms we work within
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            {/* Replace with real, current certification badges only once earned: Google Partner, Meta Business Partner. */}
            <span className="text-[15px] font-medium text-neutral">Google Partner</span>
            <span className="text-[15px] font-medium text-neutral">Meta Business Partner</span>
            <span className="text-[15px] font-medium text-neutral">Google Ads</span>
            <span className="text-[15px] font-medium text-neutral">Meta Ads</span>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6 grid md:grid-cols-3 gap-8">
          {valueProps.map((prop) => (
            <div key={prop.heading} className="flex flex-col gap-4">
              <prop.icon className="w-8 h-8 text-accent" />
              <h3 className="h3-style">{prop.heading}</h3>
              <p className="body-copy text-neutral">{prop.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <h2 className="h2-style text-center mb-10">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placeholder cards: client to supply real quotes, names, business names, and cities before launch. Do not fabricate. */}
            <TestimonialCard
              quote="[Client to supply a real, specific quote]"
              name="[Client name]"
              business="[Business name]"
              location="[City]"
            />
            <TestimonialCard
              quote="[Client to supply a real, specific quote]"
              name="[Client name]"
              business="[Business name]"
              location="[City]"
            />
            <TestimonialCard
              quote="[Client to supply a real, specific quote]"
              name="[Client name]"
              business="[Business name]"
              location="[City]"
            />
          </div>
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
