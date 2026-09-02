import { ArrowRightIcon, CheckIcon, XCircleIcon } from "./icons";

export default function BeforeAfterStrip() {
  return (
    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center rounded-2xl bg-white border border-border p-6 md:p-8">
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#BD081C]/10 text-[#BD081C] shrink-0">
          <XCircleIcon className="w-5 h-5" />
        </span>
        <div>
          <p className="caption-copy uppercase tracking-wider mb-1">Before</p>
          <p className="body-copy text-neutral">
            Conversions untracked, double-counted, or reported as raw clicks
            with no link back to a real booked job or closed sale.
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center text-neutral">
        <ArrowRightIcon className="w-5 h-5" />
      </div>

      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-success/10 text-success shrink-0">
          <CheckIcon className="w-5 h-5" />
        </span>
        <div>
          <p className="caption-copy uppercase tracking-wider mb-1 text-success">After</p>
          <p className="body-copy">
            Every conversion source verified, deduplicated, and fed back to
            the ad platform so bidding optimizes against real results.
          </p>
        </div>
      </div>
    </div>
  );
}
