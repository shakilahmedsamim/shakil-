import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { ArrowRightIcon, CheckIcon, ClipboardIcon, XCircleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Google Ads Audit",
  description:
    "A real Google Ads account audit: account settings and security, conversion tracking accuracy, wasted spend, Quality Score factors, and bidding strategy alignment.",
  alternates: { canonical: "/google-ads-audit/" },
};

type Finding = { label: string; status: "pass" | "fail" };

const sampleFindings: Finding[] = [
  { label: "Enhanced Conversions verified, not just switched on", status: "fail" },
  { label: "Conversions not double-counted across GA4 and Ads", status: "fail" },
  { label: "Negative keyword list actively maintained", status: "pass" },
  { label: "Call tracking tied to keyword and campaign", status: "fail" },
  { label: "Account access limited to current team members", status: "pass" },
  { label: "Bidding strategy matched to actual sales cycle", status: "fail" },
];

const auditAreas = [
  {
    title: "Account settings and security",
    body: "Who has access, what changed recently in the account history, and whether basic settings like location and language targeting actually match who you sell to.",
  },
  {
    title: "Conversion tracking accuracy",
    body: "Whether Enhanced Conversions is verified and not just switched on, whether conversions are being double-counted between GA4 and Google Ads, and whether conversion values are real numbers instead of a flat placeholder.",
  },
  {
    title: "Wasted spend and search terms",
    body: "What people are actually typing before your ad shows, and how much of the budget is going to searches that were never going to become a customer.",
  },
  {
    title: "Ad quality and landing page experience",
    body: "How closely your ads match the intent behind the search, and whether the landing page a click lands on actually supports the offer in the ad.",
  },
  {
    title: "Bidding strategy alignment",
    body: "Whether the bidding strategy fits how long your sales cycle actually is, since a strategy built for instant online purchases behaves badly on a business where the sale closes on a phone call weeks later.",
  },
];

const faqItems = [
  {
    question: "What exactly happens on a Google Ads audit call?",
    answer:
      "We go through your account live, section by section: account settings and security, conversion tracking accuracy, wasted spend, ad quality, and bidding strategy, and you get a written summary of the top issues found afterward.",
  },
  {
    question: "Is the audit really free?",
    answer:
      "Yes. There is no payment required and no obligation to continue afterward. The audit exists to give you an honest, specific answer on what is working and what is not.",
  },
  {
    question: "Do I need to give you access to my Google Ads account?",
    answer:
      "Read-only access is enough for the audit itself, so nothing in your account can be changed during the call.",
  },
];

export default function GoogleAdsAuditPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 grid lg:grid-cols-[1fr_420px] gap-14 items-start">
          <div className="flex flex-col gap-6">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
              Google Ads Audit
            </span>
            <h1 className="h1-style max-w-[18ch]">
              What I Actually Check When I Audit a Google Ads Account
            </h1>
            <p className="body-lg-copy text-neutral">
              Most audits are a list of generic recommendations generated
              from an account export. This one is not. I go through the
              account live, section by section, and tell you specifically
              what is broken, what is wasted, and what to fix first.
            </p>
            <p className="body-copy text-neutral">
              An account can look busy and still be losing money quietly.
              Impressions and clicks can climb every month while the
              conversion data behind them is wrong, which means Smart
              Bidding is optimizing toward the wrong signal without anyone
              noticing. The five areas below are where that usually starts.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {auditAreas.map((area, i) => (
                <div key={area.title} className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-[14px] shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{area.title}</p>
                    <p className="body-copy text-neutral">{area.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2 mt-4">
              Book My Free 30-Minute Audit
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="hidden lg:block sticky top-28">
            <div className="rotate-2 rounded-2xl bg-white border border-border shadow-xl p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
                <ClipboardIcon className="w-5 h-5 text-accent" />
                <p className="font-semibold text-ink text-[15px]">Sample Audit Findings</p>
              </div>
              <ul className="flex flex-col gap-4">
                {sampleFindings.map((finding) => (
                  <li key={finding.label} className="flex items-start gap-3">
                    {finding.status === "pass" ? (
                      <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    ) : (
                      <XCircleIcon className="w-5 h-5 mt-0.5 text-[#BD081C] shrink-0" />
                    )}
                    <span className="text-[14px] text-ink">{finding.label}</span>
                  </li>
                ))}
              </ul>
              <p className="caption-copy mt-5 pt-4 border-t border-border">
                Illustrative example. Your real findings depend on your
                actual account.
              </p>
            </div>
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
            See What Your Own Account Is Actually Doing
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
