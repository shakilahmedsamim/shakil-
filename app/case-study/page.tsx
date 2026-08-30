import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "Real accounts we have worked on, with client-approved before-and-after tracking and campaign results.",
  alternates: { canonical: "/case-study/" },
};

type CaseStudy = {
  id: string;
  industry: string;
  problem: string;
  fix: string;
  metricLabel: string;
  before: string;
  after: string;
  quote?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "case-study-01",
    industry: "[Client to supply: industry, e.g. Residential HVAC]",
    problem: "[Client to supply the one-sentence starting problem, e.g. conversions were being double-counted and Enhanced Conversions was switched on but never verified.]",
    fix: "[Client to supply the specific tracking or campaign fix applied, e.g. rebuilt GA4 event tracking, verified Enhanced Conversions for Leads, and connected offline conversion imports from the CRM.]",
    metricLabel: "Cost per lead",
    before: "[Before figure]",
    after: "[After figure]",
    quote: "[Optional one-sentence client quote]",
  },
  {
    id: "case-study-02",
    industry: "[Client to supply: industry]",
    problem: "[Client to supply the one-sentence starting problem.]",
    fix: "[Client to supply the specific tracking or campaign fix applied.]",
    metricLabel: "Conversion rate",
    before: "[Before figure]",
    after: "[After figure]",
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6">
          <h1 className="h1-style max-w-[22ch]">Real Accounts, Client-Approved Numbers</h1>
          <p className="body-lg-copy text-neutral max-w-prose mt-4">
            These are real accounts the agency has worked on, with metrics
            the client has approved for sharing. Company names are withheld
            where confidentiality applies.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 flex flex-col gap-10">
          {caseStudies.map((study) => (
            <article key={study.id} className="bg-white rounded-2xl border border-border p-6 md:p-8 grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <span className="caption-copy text-accent">{study.industry}</span>
                <div>
                  <p className="font-semibold text-ink mb-1">The problem</p>
                  <p className="body-copy text-neutral">{study.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink mb-1">The fix</p>
                  <p className="body-copy text-neutral">{study.fix}</p>
                </div>

                <div className="flex gap-8 mt-2">
                  <div>
                    <p className="caption-copy">Before</p>
                    <p className="h3-style">{study.before}</p>
                  </div>
                  <div>
                    <p className="caption-copy">After</p>
                    <p className="h3-style text-success">{study.after}</p>
                  </div>
                </div>
                <p className="caption-copy">{study.metricLabel}</p>

                {study.quote && (
                  <p className="body-copy italic text-neutral mt-2">&quot;{study.quote}&quot;</p>
                )}
              </div>

              <div className="grid grid-rows-2 gap-4">
                {/* Placeholders for real before/after screenshots. Recommended: 1200x750px, WebP.
                    Alt text convention: "<industry> Google Ads account before tracking fix, showing <metric>"
                    and "<industry> Google Ads account after tracking fix, showing <metric>". */}
                <div className="rounded-xl border border-dashed border-border bg-background flex items-center justify-center aspect-[16/10]">
                  <span className="caption-copy px-4 text-center">
                    {study.id}-before.png (1200x750)
                  </span>
                </div>
                <div className="rounded-xl border border-dashed border-border bg-background flex items-center justify-center aspect-[16/10]">
                  <span className="caption-copy px-4 text-center">
                    {study.id}-after.png (1200x750)
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-ink">
        <div className="content-wrap px-6 text-center flex flex-col items-center gap-5">
          <h2 className="h2-style !text-white max-w-[22ch]">
            Want Results Like This for Your Account?
          </h2>
          <p className="caption-copy !text-[#B0B0B5]">Start with a free audit.</p>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book Your Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
