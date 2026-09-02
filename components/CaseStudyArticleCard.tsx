import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import { ArrowRightIcon, ImageIcon } from "./icons";

export default function CaseStudyArticleCard({ study }: { study: CaseStudy }) {
  return (
    <article className="bg-white rounded-2xl border border-border p-6 md:p-8 grid md:grid-cols-2 gap-8">
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
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <p className="caption-copy">{stat.label}</p>
              <p className="h3-style">{stat.value}</p>
            </div>
          ))}
        </div>

        {study.quote && (
          <p className="body-copy italic text-neutral mt-2">&quot;{study.quote}&quot;</p>
        )}

        <Link
          href={`/case-study/${study.slug}/`}
          className="inline-flex items-center gap-1.5 text-[15px] font-medium text-accent hover:underline mt-2 w-fit"
        >
          Read Full Case Study
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-rows-2 gap-4">
        {/* Placeholders for real before/after screenshots. Recommended: 1200x750px, WebP.
            Alt text convention: "<industry> Google Ads account before tracking fix, showing <metric>"
            and "<industry> Google Ads account after tracking fix, showing <metric>". */}
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
    </article>
  );
}
