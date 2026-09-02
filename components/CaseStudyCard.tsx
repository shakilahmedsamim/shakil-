import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import { ArrowRightIcon } from "./icons";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-4">
      <span className="caption-copy px-2.5 py-1 rounded-full bg-accent/10 text-accent w-fit">
        {study.industry}
      </span>

      <h3 className="h3-style !text-[19px]">{study.headline}</h3>

      <div className="grid grid-cols-3 gap-2 py-4 border-y border-border">
        {study.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-[19px] font-semibold text-neutral">{stat.value}</p>
            <p className="caption-copy leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="body-copy text-neutral">{study.problem}</p>

      <Link
        href={`/case-study/${study.slug}/`}
        className="btn-primary mt-auto inline-flex items-center justify-center gap-2"
      >
        Read Full Case Study
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </div>
  );
}
