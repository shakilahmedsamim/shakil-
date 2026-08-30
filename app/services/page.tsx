import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Google Ads and Meta Ads management plus full online and offline conversion tracking, including Enhanced Conversions, Conversions API, and server-side tagging.",
  alternates: { canonical: "/services/" },
};

const campaignItems = [
  "Account structure and campaign setup",
  "Audience and keyword research",
  "Ad creative and copywriting",
  "Local Services Ads where applicable",
  "Performance Max campaign management",
  "Ongoing bid and budget optimization",
  "Monthly reporting in plain language",
];

const trackingItems = [
  "Google tag and GA4 event tracking setup",
  "Enhanced Conversions for Leads, combining GCLID with hashed contact data for more durable matching than legacy GCLID-only import",
  "Meta Pixel and Conversions API implementation with event deduplication",
  "Server-side tagging (server-side GTM) for accounts with meaningful spend, to recover conversions lost to browser tracking prevention",
  "Offline conversion imports, closing the loop between a phone call or in-person sale and the ad click that originally drove it",
];

const industries = [
  {
    name: "HVAC, Plumbing, and Home Services",
    level: "High competition",
    description:
      "High-value emergency and installation leads where cost per lead often runs from twenty to ninety dollars depending on trade and market, and where Local Services Ads plus a tightly geo-targeted Search campaign outperform broad automation.",
  },
  {
    name: "Personal Injury and Family Law",
    level: "High competition",
    description:
      "Some of the highest cost-per-click keywords in Google Ads, where tracking accuracy on phone call conversions is the difference between a profitable account and a wasted budget.",
  },
  {
    name: "Medical Aesthetics and Cosmetic Dentistry",
    level: "High competition",
    description:
      "High transaction values and a booking-driven funnel, where conversion tracking has to bridge an online form to an in-clinic consultation.",
  },
  {
    name: "Immigration and Family Law",
    level: "Lower competition",
    description:
      "Meaningfully lower cost-per-click than personal injury law while still carrying strong lifetime client value, and most firms in this category still have no conversion tracking beyond a bare contact form.",
  },
  {
    name: "B2B Professional and Managed Services",
    level: "Lower competition",
    description:
      "Bookkeeping, IT support, and commercial cleaning contracts see low ad competition and long sales cycles that almost always require offline conversion tracking to prove ROI, and very few competing agencies understand how to connect a CRM-closed deal back to the ad click that started it.",
  },
];

const automationTools = [
  {
    name: "Zapier",
    description:
      "The fastest setup and the simplest CRM triggers, with direct native support for Google Ads offline conversion import and Meta Conversions API. Best fit for straightforward \"deal marked Closed Won\" triggers with no custom logic required.",
  },
  {
    name: "Make.com",
    description:
      "Used when the automation needs more control, particularly for Meta's Conversions API, since Make's Facebook module supports the click ID, pixel cookie, and test event code fields that simpler modules leave out, meaning better match rates on Meta specifically.",
  },
  {
    name: "n8n",
    description:
      "Used when the client wants a self-hosted, fully custom pipeline with custom JavaScript steps and no per-operation cost ceiling, the right choice for high lead volume where operation-based pricing would get expensive.",
  },
];

const crmPlatforms = [
  "HubSpot",
  "Zoho CRM",
  "Pipedrive",
  "Salesforce",
  "GoHighLevel",
  "Bitrix24",
  "Odoo",
];

const onSitePlatforms = [
  {
    name: "Custom-built websites (React, Next.js, Node.js)",
    description:
      "The same stack this site itself uses. We implement server-side tagging directly via a dedicated server GTM container, most commonly hosted on Stape.io, since it is more affordable and far less operationally heavy than self-hosting a server container on AWS or Google Cloud.",
  },
  {
    name: "Shopify",
    description:
      "Using Stape's Conversion Tracking app to route Shopify's native Web Pixels events through a server GTM container instead of firing tags directly from the browser, recovering conversions otherwise lost to ad blockers and Safari or iOS tracking prevention. Shopify retired the old checkout.liquid and Additional Scripts tracking method, so Web Pixels is now the only supported path on every plan tier.",
  },
  {
    name: "WordPress",
    description:
      "Using the Stape GTM Server Side plugin, which also works alongside WooCommerce, to install the web GTM snippet, add a loader more resistant to ad blockers, and forward data layer events to the server container without custom code.",
  },
  {
    name: "Webflow, Wix, Squarespace, and similar page builders",
    description:
      "Server-side tracking is implemented through a hosted server GTM container, with the web container's tag injected via the platform's native custom-code or tracking-integration field.",
  },
];

const comparisonRows = [
  {
    them: "Installs a pixel and calls tracking done",
    us: "Verifies Enhanced Conversions and Conversions API events actually match, not just fire",
  },
  {
    them: "Reports on clicks and impressions",
    us: "Reports on cost per booked job and closed revenue",
  },
  {
    them: "Ignores offline sales entirely",
    us: "Builds a CRM-to-ad-platform pipeline so closed deals feed back into bidding",
  },
  {
    them: "One generic setup for every client",
    us: "Tracking method matched to the client's actual website platform and CRM",
  },
  {
    them: "Disappears after the pixel is installed",
    us: "Audits the account on a set cadence using named, documented tools",
  },
];

const faqItems = [
  {
    question: "What counts as a tracking audit checklist item?",
    answer:
      "A tracking audit checks whether an account is double-counting conversions, whether Enhanced Conversions is actually verified and not just switched on, and whether conversion values are real numbers instead of a flat placeholder value, since all three are common, silent causes of wasted ad spend.",
  },
  {
    question: "When does server-side tagging make sense?",
    answer:
      "Server-side tagging through a tool such as Stape.io makes sense once an account is spending enough that a meaningful share of conversions would otherwise be lost to browser tracking prevention or ad blockers, since the setup and hosting cost only pays for itself above a certain monthly spend threshold.",
  },
  {
    question: "Can offline sales really be tracked back to a specific ad click?",
    answer:
      "Yes: capturing the GCLID or fbclid at first contact and storing it on the CRM lead record lets an automation tool push the closed-deal event back to Google's Enhanced Conversions for Leads and Meta's Conversions API once the deal is marked won, closing the loop between an offline sale and the ad click that started it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6">
          <h1 className="h1-style max-w-[20ch]">
            Campaign Management and Conversion Tracking, Built Together
          </h1>
          <p className="body-lg-copy text-neutral max-w-prose mt-4">
            Running ads and tracking what they produce are not two separate
            jobs. We handle both, so every dollar of spend can be traced to
            whether it produced a real, closed sale.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-border p-8 flex flex-col gap-4">
            <h2 className="h3-style">Google Ads and Meta Ads Management</h2>
            <ul className="flex flex-col gap-3">
              {campaignItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                  <span className="body-copy">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8 flex flex-col gap-4">
            <h2 className="h3-style">Conversion Tracking (Online and Offline)</h2>
            <ul className="flex flex-col gap-3">
              {trackingItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                  <span className="body-copy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <h2 className="h2-style mb-3">Platforms and Integrations</h2>
          <p className="body-lg-copy text-neutral max-w-prose mb-10">
            Whatever platform your website runs on, the tracking method
            changes, the underlying goal does not: get real conversion data
            to the ad platform accurately, without slowing your site down.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="h3-style mb-3">Offline conversion automation</h3>
              <p className="body-copy text-neutral mb-5">
                When a lead closes offline, whether that is a signed
                contract, a completed phone consultation, or a paid invoice,
                that event needs to travel from wherever it lives back into
                Google Ads and Meta so the bidding algorithm can learn from
                real revenue instead of just form fills. We build this
                pipeline using whichever automation tool fits the client&apos;s
                technical setup and budget.
              </p>
              <div className="flex flex-col gap-4 mb-6">
                {automationTools.map((tool) => (
                  <div key={tool.name}>
                    <p className="font-semibold text-ink">{tool.name}</p>
                    <p className="body-copy text-neutral">{tool.description}</p>
                  </div>
                ))}
              </div>
              <p className="font-semibold text-ink mb-2">
                CRM platforms we connect for offline conversion tracking
              </p>
              <p className="body-copy text-neutral">{crmPlatforms.join(", ")}.</p>
            </div>

            <div>
              <h3 className="h3-style mb-3">Where we track online</h3>
              <div className="flex flex-col gap-5">
                {onSitePlatforms.map((platform) => (
                  <div key={platform.name}>
                    <p className="font-semibold text-ink">{platform.name}</p>
                    <p className="body-copy text-neutral">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <h2 className="h2-style mb-10">Industries We Specialize In</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-2">
                <span className="caption-copy text-accent">{industry.level}</span>
                <h3 className="h3-style">{industry.name}</h3>
                <p className="body-copy text-neutral">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <h2 className="h2-style mb-10">What Most Agencies Do vs What We Do</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="py-3 pr-6 caption-copy uppercase">What most agencies do</th>
                  <th className="py-3 caption-copy uppercase">What we do</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.them} className="border-b border-border">
                    <td className="py-4 pr-6 body-copy text-neutral align-top">{row.them}</td>
                    <td className="py-4 body-copy align-top">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6 max-w-[860px]">
          <h2 className="h2-style text-center mb-10">Common Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="section bg-ink">
        <div className="content-wrap px-6 text-center flex flex-col items-center gap-5">
          <h2 className="h2-style !text-white max-w-[22ch]">
            Get a Free 30-Minute Audit of Your Ad Account
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book Your Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
