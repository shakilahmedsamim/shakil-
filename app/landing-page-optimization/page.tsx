import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { ArrowRightIcon, CheckIcon, ClockIcon, ShieldCheckIcon, TargetIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Landing Page Optimization",
  description:
    "Landing pages built around message match, real Core Web Vitals, and one clear call to action, so the page an ad sends traffic to actually converts.",
  alternates: { canonical: "/landing-page-optimization/" },
};

const proofPoints = [
  {
    icon: TargetIcon,
    title: "One Call to Action, Repeated",
    body: "This page has exactly one primary action, repeated at the top, middle, and bottom. No competing offer is splitting your attention right now, and that is deliberate.",
  },
  {
    icon: ClockIcon,
    title: "No Delay Before the Page Loads",
    body: "There is no heavy embed loading before this content, no popup blocking the page, and no font-loading flash. That is the same standard applied to every page built for a client.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built to Pass Real Core Web Vitals",
    body: "Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1, measured from real visitors, not just a lab score.",
  },
];

const comparisonRows = [
  {
    them: "One homepage sent every ad click, regardless of which ad or keyword it came from",
    us: "Headline and hero copy matched to the exact ad group or campaign the click came from",
  },
  {
    them: "Two or three competing offers on the same screen",
    us: "One clear call to action per screen, repeated, never diversified",
  },
  {
    them: "A Lighthouse score checked once, then never revisited",
    us: "Core Web Vitals checked against real mobile field data on an ongoing basis",
  },
  {
    them: "A contact form with ten fields because more data seemed better",
    us: "Four fields or fewer, since form length is one of the highest-leverage levers on conversion rate",
  },
  {
    them: "Tap targets and forms tested only by resizing a desktop browser",
    us: "Tap targets, forms, and booking widgets tested on an actual phone",
  },
];

const checklist = [
  "Message match between the ad and the headline the click lands on",
  "Largest Contentful Paint image preloaded so the hero never causes a slow first paint",
  "Fixed-height containers reserved for embeds so nothing shifts while the page loads",
  "One primary call to action per screen, in first person, describing the outcome",
  "Forms kept to four fields or fewer unless there is a specific reason to add more",
  "Every tap target at least 44 by 44 pixels, tested on a real phone, not a resized window",
];

const faqItems = [
  {
    question: "Is landing page optimization included with Google Ads management?",
    answer:
      "It can be, since a well-tracked campaign sending traffic to a slow or unfocused page still underperforms. It is also available on its own for an existing site that already has traffic but a low conversion rate.",
  },
  {
    question: "Do you build new landing pages, or only improve existing ones?",
    answer:
      "Both. An existing page can be audited and improved in place, or a new page can be built from scratch when a campaign needs message match to a specific niche or offer that the current site does not address.",
  },
  {
    question: "What counts as a real Core Web Vitals pass?",
    answer:
      "A real pass means Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1, measured from actual visitor data in Google Search Console or PageSpeed Insights field data, not a one-time lab test.",
  },
];

export default function LandingPageOptimizationPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 max-w-[760px]">
          <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit inline-block mb-4">
            Landing Page Optimization
          </span>
          <h1 className="h1-style mb-4">
            The Page an Ad Sends Traffic to Decides Whether It Was Worth It
          </h1>
          <p className="body-lg-copy text-neutral mb-6">
            A well-tracked, well-targeted ad still fails if the page it
            sends traffic to is slow, unfocused, or saying something
            different from the ad itself. This page was built under the
            same rules described below, so you are looking at the standard
            before you take my word for it.
          </p>
          <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2">
            Book My Free 30-Minute Audit
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 grid md:grid-cols-3 gap-6">
          {proofPoints.map((point) => (
            <div key={point.title} className="rounded-2xl bg-white border border-border shadow-sm p-6 flex flex-col gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                <point.icon className="w-5 h-5" />
              </span>
              <h3 className="h3-style !text-[18px]">{point.title}</h3>
              <p className="body-copy text-neutral">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <h2 className="h2-style text-center mb-10">
            What Most Landing Pages Do vs What This One Does
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="py-3 pr-6 caption-copy uppercase">What most pages do</th>
                  <th className="py-3 caption-copy uppercase">What this page does</th>
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

          <div className="flex justify-center mt-10">
            <Link href="/book-a-call/" className="btn-primary inline-flex items-center gap-2">
              Book My Free 30-Minute Audit
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6 max-w-[720px]">
          <h2 className="h2-style text-center mb-10">What Actually Gets Checked</h2>
          <ul className="flex flex-col gap-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                <span className="body-copy">{item}</span>
              </li>
            ))}
          </ul>
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
            See What Your Landing Page Is Actually Costing You
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
