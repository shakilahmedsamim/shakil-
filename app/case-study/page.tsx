import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyArticleCard from "@/components/CaseStudyArticleCard";
import Faq from "@/components/Faq";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real accounts we have worked on across the industries we specialize in, with client-approved before-and-after tracking and campaign results.",
  alternates: { canonical: "/case-study/" },
};

const faqItems = [
  {
    question: "Are these case studies real accounts or hypothetical examples?",
    answer:
      "These are real accounts the agency has worked on. Company names are withheld where confidentiality applies, and specific figures are only published once each client approves sharing them, which is why some metrics still show as pending.",
  },
  {
    question: "Why don't all case studies show specific numbers yet?",
    answer:
      "Client-approved figures are added as each business signs off on sharing their numbers publicly, since publishing a client's cost-per-lead or revenue data without explicit approval is not something this agency does.",
  },
  {
    question: "Do you have case studies outside the industries listed here?",
    answer:
      "The industries shown are where the deepest, repeated experience is, but the same tracking-first approach applies to other local service and B2B verticals. A free audit will show how the same method applies to your specific account.",
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
            where confidentiality applies, and figures are added as each
            client approves sharing them.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 flex flex-col gap-10">
          {caseStudies.map((study) => (
            <CaseStudyArticleCard key={study.slug} study={study} />
          ))}
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
