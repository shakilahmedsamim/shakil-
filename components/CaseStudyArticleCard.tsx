import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import { ArrowRightIcon } from "./icons";
import BeforeAfterStrip from "./BeforeAfterStrip";

export default function CaseStudyArticleCard({ study }: { study: CaseStudy }) {
  return (
    <article className="bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 min-w-0">
          <span className="caption-copy text-accent">{study.industry}</span>

          <div>
            <p className="font-semibold text-ink mb-1">The problem</p>
            <p className="body-copy text-neutral">{study.problem}</p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-1">The fix</p>
            <p className="body-copy text-neutral">{study.fix}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 min-w-0">
          <div className="flex gap-8">
            {study.stats.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="caption-copy">{stat.label}</p>
                <p className="h3-style">{stat.value}</p>
              </div>
            ))}
          </div>

          {study.quote && (
            <p className="body-copy italic text-neutral">&quot;{study.quote}&quot;</p>
          )}

          <Link
            href={`/case-study/${study.slug}/`}
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:underline mt-auto w-fit"
          >
            Read Full Case Study
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <BeforeAfterStrip />
    </article>
  );
}
