"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "./icons";

/**
 * Illustrative example of the Google Ads auction mechanic, grounded in
 * Google's own documentation: Ad Rank is not simply bid x Quality Score
 * (Quality Score itself is a diagnostic tool, not an auction input), but
 * bid combined with ad and landing page quality does determine both
 * whether an ad shows and where, and advertisers pay only enough to
 * clear the threshold and beat the next-ranked competitor, not their max
 * bid. Sources: support.google.com/google-ads/answer/6366577,
 * /answer/1722122, /answer/6167118.
 */
const competitors = [
  {
    name: "Competitor A",
    bid: 8.0,
    quality: "Poor",
    qualityScore: 1,
    isYou: false,
    url: "www.competitor-a.net",
    headline: "Click Here For HVAC Services",
    description: "Best prices guaranteed. Call today for more information.",
  },
  {
    name: "You",
    bid: 4.5,
    quality: "Great",
    qualityScore: 3,
    isYou: true,
    url: "www.yoursite.com",
    headline: "Same-Day HVAC Repair | Call Now",
    description: "Licensed and insured technicians. Free estimate, no obligation.",
  },
  {
    name: "Competitor B",
    bid: 6.0,
    quality: "Average",
    qualityScore: 2,
    isYou: false,
    url: "www.competitorb.com",
    headline: "HVAC Services Available",
    description: "We offer heating and cooling services in your area.",
  },
];

const ranked = competitors
  .map((c) => ({ ...c, adRank: c.bid * c.qualityScore }))
  .sort((a, b) => b.adRank - a.adRank);

const winner = ranked[0];
const runnerUp = ranked[1];
const actualCpc = runnerUp.adRank / winner.qualityScore + 0.01;

const qualityColor: Record<string, string> = {
  Poor: "#BD081C",
  Average: "#E37400",
  Great: "#0A7D4F",
};

export default function AdAuctionDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 items-start">
        {ranked.map((c, i) => (
          <div key={c.name} className="flex flex-col items-center gap-3">
            <div className="h-7">
              {c.isYou && (
                <span
                  className={`flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-[12px] font-semibold transition-opacity duration-500 ${
                    revealed ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "900ms" }}
                >
                  <CheckIcon className="w-3.5 h-3.5" />
                  #1 Position
                </span>
              )}
            </div>

            <div
              className={`w-full rounded-xl bg-white p-4 flex flex-col gap-1.5 transition-all duration-700 ease-out ${
                c.isYou ? "border border-border shadow-sm" : "border border-border"
              } ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{
                transitionDelay: `${i * 150}ms`,
                borderLeftWidth: c.isYou ? "4px" : "1px",
                borderLeftColor: c.isYou ? "#0066FF" : undefined,
              }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-success border border-success rounded px-1 leading-4">
                  Ad
                </span>
                <span className="text-[12px] text-neutral truncate">{c.url}</span>
              </div>
              <p className="text-[15px] font-medium text-accent leading-snug">{c.headline}</p>
              <p className="text-[13px] text-neutral leading-snug">{c.description}</p>
            </div>

            <p className={`font-semibold text-[15px] ${c.isYou ? "text-accent" : "text-ink"}`}>
              {c.name}
            </p>
            <div className="flex flex-col items-center gap-1 caption-copy">
              <span>Bid: ${c.bid.toFixed(2)}</span>
              <span style={{ color: qualityColor[c.quality] }}>Quality: {c.quality}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 text-center md:text-left">
          <p className="caption-copy uppercase tracking-wider text-accent mb-1">
            What You Actually Pay
          </p>
          <p className="body-copy text-neutral">
            You only pay enough to clear the threshold and beat the
            advertiser ranked below you, never your full max bid.
          </p>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <div className="text-center">
            <p className="caption-copy">Max bid</p>
            <p className="text-[22px] font-semibold text-neutral line-through decoration-2">
              ${winner.bid.toFixed(2)}
            </p>
          </div>
          <div className="text-center">
            <p className="caption-copy">You pay</p>
            <p className="text-[22px] font-semibold text-success">
              ${actualCpc.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <p className="caption-copy text-center max-w-[60ch] mx-auto">
        Illustrative example. Google does not publish an exact Ad Rank
        formula; this shows the real mechanic confirmed in Google&apos;s own
        documentation, that bid and quality together determine rank, and
        actual cost is based on the competitor below you, not your max bid.
      </p>
    </div>
  );
}
