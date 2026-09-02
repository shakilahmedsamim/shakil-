import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import DataFlowDiagram from "@/components/DataFlowDiagram";
import {
  ArrowRightIcon,
  CheckIcon,
  GoogleAdsLogo,
  MetaLogo,
  ShieldCheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Conversion Tracking Setup",
  description:
    "Google Ads conversion tracking, online and offline, plus Meta Conversions API and first-party server-side tagging for more accurate event data.",
  alternates: { canonical: "/conversion-tracking/" },
};

const googleOnlineItems = [
  "Google tag and GA4 event tracking for form submissions, calls, and purchases",
  "Enhanced Conversions for Leads, pairing GCLID with hashed contact data so matching holds up as browsers restrict cookies",
  "Verification that conversions are not double-counted between GA4 and Google Ads before the account optimizes against them",
];

const googleOfflineItems = [
  "GCLID captured and stored on the CRM lead record at first contact",
  "Offline conversion imports so a signed contract, completed consultation, or closed deal is fed back to Google Ads once it closes",
  "Uploads routed through the current Data Manager API, since the older Google Ads API offline conversion upload path is being phased out",
];

const metaItems = [
  "Meta Pixel and Conversions API implemented together with a shared event_id, so the same action reaches Meta once, not twice",
  "Event Match Quality (EMQ) reviewed in Meta Events Manager and improved by sending more of the customer parameters Meta actually uses to match",
  "Hashed email and phone data included in server events, so matching survives iOS privacy changes and ad blockers that would otherwise drop the pixel-only event",
];

const sameOriginPoints = [
  {
    title: "Cookies set from your own domain",
    body: "A server-side tagging container hosted on a subdomain of your own site, rather than a generic third-party domain, can set cookies as HttpOnly and read them in a first-party context.",
  },
  {
    title: "More resilient to Safari and browser restrictions",
    body: "First-party cookies are meaningfully more resilient to Safari's Intelligent Tracking Prevention and similar browser restrictions than third-party cookies, which is where a large share of lost conversions comes from.",
  },
  {
    title: "Fewer third-party connections on the page",
    body: "When the tagging server runs in a first-party context, the browser talks to fewer external domains directly, which also supports a tighter content security policy on the site itself.",
  },
];

const faqItems = [
  {
    question: "Why does Google Ads tracking come before Meta tracking in your setup?",
    answer:
      "Because Google Ads is the platform actually being managed and bid against, so its tracking, online and offline, has to be correct first. Meta and other platform tracking is built on top of that once the Google Ads side is verified.",
  },
  {
    question: "What does same-origin or first-party server-side tracking actually mean?",
    answer:
      "It means the server container that receives and forwards conversion events is hosted on a subdomain of your own website rather than a generic third-party domain, which lets it set cookies in a first-party context that are more resilient to Safari's Intelligent Tracking Prevention and similar browser restrictions.",
  },
  {
    question: "Can offline sales really be tracked back to a specific ad click?",
    answer:
      "Yes. Capturing the GCLID at first contact and storing it on the CRM lead record lets an automation push the closed-deal event back to Google's Enhanced Conversions for Leads once the deal is marked won, closing the loop between an offline sale and the ad click that started it.",
  },
];

export default function ConversionTrackingPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
              Conversion Tracking Setup
            </span>
            <h1 className="h1-style">
              Tracking Built for Google Ads First, Then Every Other Platform
            </h1>
            <p className="body-lg-copy text-neutral">
              Google Ads conversion tracking, online and offline, is built
              and verified first, since that is the platform your budget is
              actually bid against. Meta Conversions API and first-party
              server-side delivery are layered on top for the other
              platforms your data needs to reach.
            </p>
            <Link
              href="/book-a-call/"
              className="btn-primary w-fit inline-flex items-center gap-2"
            >
              Book My Free 30-Minute Audit
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-white border border-border shadow-sm p-6 flex flex-col gap-4">
            <div className="rounded-xl bg-accent/5 border border-accent/20 p-5 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-border shrink-0">
                <span className="flex" style={{ color: "#4285F4" }}>
                  <GoogleAdsLogo className="w-6 h-6" />
                </span>
              </span>
              <div>
                <p className="font-semibold text-ink">Google Ads</p>
                <p className="caption-copy">Online + offline, verified first</p>
              </div>
              <span className="caption-copy px-2.5 py-1 rounded-full bg-accent text-white ml-auto shrink-0">
                Priority 1
              </span>
            </div>

            <div className="flex justify-center">
              <ArrowRightIcon className="w-4 h-4 text-neutral rotate-90" />
            </div>

            <div className="rounded-xl bg-background border border-border p-5 flex items-center gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-border shrink-0">
                <span className="flex" style={{ color: "#0467DF" }}>
                  <MetaLogo className="w-5 h-5" />
                </span>
              </span>
              <div>
                <p className="font-semibold text-ink text-[15px]">Meta CAPI</p>
                <p className="caption-copy">Server-side, layered on top</p>
              </div>
              <span className="caption-copy px-2.5 py-1 rounded-full bg-white border border-border ml-auto shrink-0">
                Priority 2
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <h2 className="h2-style mb-3">
              One Server-Side Path, Every Platform Fed From It
            </h2>
            <p className="body-copy text-neutral">
              Events are captured once, from your website, store, or CRM,
              and delivered server-side from a tagging container hosted on
              your own domain, not a generic third-party one.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6 md:p-10">
            <DataFlowDiagram />
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border">
              <span className="flex" style={{ color: "#4285F4" }}>
                <GoogleAdsLogo className="w-5 h-5" />
              </span>
            </span>
            <h2 className="h2-style !text-[28px] md:!text-[32px]">
              Google Ads Conversion Tracking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-4">
              <h3 className="h3-style">Online</h3>
              <ul className="flex flex-col gap-3">
                {googleOnlineItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span className="body-copy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-4">
              <h3 className="h3-style">Offline</h3>
              <ul className="flex flex-col gap-3">
                {googleOfflineItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span className="body-copy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-background border border-border">
              <span className="flex" style={{ color: "#0467DF" }}>
                <MetaLogo className="w-5 h-5" />
              </span>
            </span>
            <h2 className="h2-style !text-[24px] md:!text-[28px]">
              Meta Conversions API and Server-Side Setup
            </h2>
          </div>
          <p className="body-copy text-neutral max-w-prose mb-8">
            Once Google Ads tracking is verified, the same discipline
            applies to Meta, for accounts that also run it or need it
            tracked even without us managing the ad spend.
          </p>
          <ul className="flex flex-col gap-4 max-w-[720px]">
            {metaItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                <span className="body-copy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-12">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto mb-4">
              <ShieldCheckIcon className="w-6 h-6" />
            </span>
            <h2 className="h2-style mb-3">Why Same-Origin Delivery Matters</h2>
            <p className="body-copy text-neutral">
              Server-side tagging can still lose accuracy if it runs on a
              generic third-party domain. Hosting it on your own domain is
              what actually closes the gap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sameOriginPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-white border border-border p-6 flex flex-col gap-2">
                <h3 className="h3-style !text-[18px]">{point.title}</h3>
                <p className="body-copy text-neutral">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6 max-w-[860px]">
          <h2 className="h2-style text-center mb-10">Common Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="section bg-ink">
        <div className="content-wrap px-6 text-center flex flex-col items-center gap-5">
          <h2 className="h2-style !text-white max-w-[22ch]">
            Find Out What Your Account Is Actually Tracking
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
