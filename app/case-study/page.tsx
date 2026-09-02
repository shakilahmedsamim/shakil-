import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real accounts we have worked on across the industries we specialize in, with client-approved before-and-after tracking and campaign results.",
  alternates: { canonical: "/case-study/" },
};

export default function CaseStudyPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6">
          <h1 className="h1-style max-w-[22ch]">Real Accounts, Client-Approved Numbers</h1>
          <p className="body-lg-copy text-neutral max-w-prose mt-4">
            These are real accounts the agency has worked on, with metrics
            the client has approved for sharing. Company names are withheld
            where confidentiality applies, and figures are added as each
            client approves sharing them.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
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
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
