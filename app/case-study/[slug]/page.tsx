import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/caseStudies";
import { ImageIcon } from "@/components/icons";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.industry} Case Study`,
    description: study.headline,
    alternates: { canonical: `/case-study/${study.slug}/` },
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 max-w-[760px]">
          <span className="caption-copy px-2.5 py-1 rounded-full bg-accent/10 text-accent w-fit inline-block mb-4">
            {study.industry}
          </span>
          <h1 className="h1-style mb-4">{study.headline}</h1>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 max-w-[760px] flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white border border-border p-6">
            {study.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[24px] font-semibold text-accent">{stat.value}</p>
                <p className="caption-copy leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="h3-style mb-3">The Starting Problem</h2>
            <p className="body-lg-copy text-neutral">{study.problem}</p>
          </div>

          <div>
            <h2 className="h3-style mb-3">The Fix</h2>
            <p className="body-lg-copy text-neutral">{study.fix}</p>
          </div>

          {study.quote && (
            <div className="rounded-2xl bg-ink p-8">
              <p className="text-white text-[19px] leading-relaxed">&quot;{study.quote}&quot;</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-dashed border-border bg-background flex flex-col items-center justify-center gap-2 aspect-[16/10]">
              <ImageIcon className="w-6 h-6 text-neutral" />
              <span className="caption-copy px-4 text-center">
                {study.slug}-before.png (1200x750)
              </span>
            </div>
            <div className="rounded-xl border border-dashed border-border bg-background flex flex-col items-center justify-center gap-2 aspect-[16/10]">
              <ImageIcon className="w-6 h-6 text-neutral" />
              <span className="caption-copy px-4 text-center">
                {study.slug}-after.png (1200x750)
              </span>
            </div>
          </div>
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
