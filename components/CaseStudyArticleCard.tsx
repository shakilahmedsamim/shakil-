import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import { ArrowRightIcon, CheckIcon, XCircleIcon } from "./icons";

export default function CaseStudyArticleCard({ study }: { study: CaseStudy }) {
  return (
    <article className="bg-white rounded-2xl border border-border p-6 md:p-8 grid md:grid-cols-2 gap-8">
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

        <div className="flex flex-wrap gap-8 mt-2">
          {study.stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
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

      <div className="grid grid-rows-2 gap-4 min-w-0">
        <div className="rounded-xl border border-border bg-background p-6 flex flex-col items-center justify-center gap-2 text-center">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#BD081C]/10 text-[#BD081C]">
            <XCircleIcon className="w-5 h-5" />
          </span>
          <p className="caption-copy uppercase tracking-wider">Before</p>
          <p className="body-copy text-neutral">
            Conversions untracked or double-counted
          </p>
        </div>
        <div className="rounded-xl border border-border bg-background p-6 flex flex-col items-center justify-center gap-2 text-center">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-success/10 text-success">
            <CheckIcon className="w-5 h-5" />
          </span>
          <p className="caption-copy uppercase tracking-wider text-success">After</p>
          <p className="body-copy">
            Verified and fed back to the ad platform
          </p>
        </div>
      </div>
    </article>
  );
}
