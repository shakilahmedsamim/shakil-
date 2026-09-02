import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import {
  ArrowRightIcon,
  CheckIcon,
  GoogleAdsLogo,
  MapPinIcon,
  ShopifyLogo,
  ShoppingCartIcon,
  WooCommerceLogo,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Google Ads Management",
  description:
    "Google Ads campaign management for local service businesses and ecommerce brands, built around calls, bookings, and purchases instead of raw clicks.",
  alternates: { canonical: "/google-ads-management/" },
};

const localItems = [
  "Search campaigns built around the exact services and service area you cover, not broad match guesswork",
  "Local Services Ads setup and Google Guaranteed verification where it fits your trade",
  "Call tracking tied to the keyword and campaign that produced the call, not just a phone number on the page",
  "Negative keyword lists that keep job seekers, DIYers, and out-of-area searches out of your budget",
];

const ecommerceItems = [
  "Shopping and Performance Max campaigns built around your actual product feed and margins, not a single default asset group",
  "Product feed structure and labeling that lets you separate high-margin and low-margin products in bidding",
  "Purchase and add-to-cart tracking verified against your actual order data, not just platform-reported conversions",
  "Campaign structure that protects brand search spend from being cannibalized by broad Performance Max targeting",
];

const processSteps = [
  { title: "Account Review", body: "We look at what is already running, what is tracked correctly, and what is wasting budget." },
  { title: "Structure Rebuild", body: "Campaigns are organized around your services or product catalog, not left as one broad group." },
  { title: "Tracking Verification", body: "Every conversion source is checked before the account starts optimizing against it." },
  { title: "Ongoing Management", body: "Bids, budgets, and negative keywords are adjusted against real bookings or purchases." },
];

const faqItems = [
  {
    question: "Do you manage Google Ads for ecommerce stores or only local service businesses?",
    answer:
      "Both. Local service accounts are built around Search and Local Services Ads with call tracking, while ecommerce accounts are built around Shopping and Performance Max with product feed structure and purchase tracking verified against real order data.",
  },
  {
    question: "What platforms do you build ecommerce campaigns for?",
    answer:
      "Campaign management covers Google Ads directly, and conversion tracking is built to work with whatever platform the store runs on, including Shopify and WooCommerce, since accurate purchase and cart data has to come from the store itself, not just the ad platform.",
  },
  {
    question: "How is Google Ads management priced?",
    answer:
      "Pricing depends on account size, catalog size for ecommerce accounts, and how much tracking work is needed, and a specific number is quoted after the free audit rather than a flat rate that ignores what your account actually needs.",
  },
];

export default function GoogleAdsManagementPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
              Google Ads Management
            </span>
            <h1 className="h1-style">
              Google Ads Built Around Bookings and Purchases, Not Clicks
            </h1>
            <p className="body-lg-copy text-neutral">
              Whether you run a local service business or sell products
              online, the campaign structure, tracking, and bidding strategy
              are different problems. We build each one the way it actually
              needs to work.
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2">
                Book My Free 30-Minute Audit
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <p className="caption-copy">
                No payment required. We will look at your current account and
                tell you exactly what is costing you money.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-border shadow-sm p-6 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-background border border-border p-5 flex flex-col items-center text-center gap-2">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-border text-accent">
                  <MapPinIcon className="w-5 h-5" />
                </span>
                <p className="font-semibold text-ink text-[14px]">Local Service</p>
                <p className="caption-copy">Search + LSA + call tracking</p>
              </div>
              <div className="rounded-xl bg-background border border-border p-5 flex flex-col items-center text-center gap-2">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-border text-accent">
                  <ShoppingCartIcon className="w-5 h-5" />
                </span>
                <p className="font-semibold text-ink text-[14px]">Ecommerce</p>
                <p className="caption-copy">Shopping + Performance Max</p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRightIcon className="w-4 h-4 text-neutral rotate-90" />
            </div>

            <div className="rounded-xl bg-accent/5 border border-accent/20 p-5 flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-border shrink-0">
                <span className="flex" style={{ color: "#4285F4" }}>
                  <GoogleAdsLogo className="w-6 h-6" />
                </span>
              </span>
              <div>
                <p className="font-semibold text-ink">One Google Ads Account</p>
                <p className="caption-copy">Structured, tracked, and bid the way each business model needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
              <MapPinIcon className="w-6 h-6" />
            </span>
            <h2 className="h3-style">For Local Service Businesses</h2>
            <ul className="flex flex-col gap-3">
              {localItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                  <span className="body-copy">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
              <ShoppingCartIcon className="w-6 h-6" />
            </span>
            <h2 className="h3-style">For Ecommerce Brands</h2>
            <ul className="flex flex-col gap-3">
              {ecommerceItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                  <span className="body-copy">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 border-t border-border pt-4 mt-1">
              <span className="caption-copy">Tracking built for</span>
              <span className="flex items-center gap-1.5" style={{ color: "#7AB55C" }}>
                <ShopifyLogo className="w-4 h-4" />
                <span className="caption-copy !text-inherit font-semibold">Shopify</span>
              </span>
              <span className="flex items-center gap-1.5" style={{ color: "#96588A" }}>
                <WooCommerceLogo className="w-4 h-4" />
                <span className="caption-copy !text-inherit font-semibold">WooCommerce</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <h2 className="h2-style text-center mb-12">How Management Actually Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
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

      <section className="section bg-ink">
        <div className="content-wrap px-6 text-center flex flex-col items-center gap-5">
          <h2 className="h2-style !text-white max-w-[22ch]">
            Get a Free 30-Minute Audit of Your Ad Account
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
