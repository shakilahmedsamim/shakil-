"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Real Google Core Web Vitals thresholds (web.dev/articles/lcp,
 * web.dev/articles/inp, web.dev/articles/cls): LCP "Good" is under
 * 2.5s, INP "Good" is under 200ms, CLS "Good" is under 0.1. The scores
 * shown are the targets this page is built against, not a live
 * measurement.
 */
const metrics = [
  { key: "LCP", label: "Largest Contentful Paint", value: 1.9, max: 2.5, unit: "s", pct: 92 },
  { key: "INP", label: "Interaction to Next Paint", value: 140, max: 200, unit: "ms", pct: 88 },
  { key: "CLS", label: "Cumulative Layout Shift", value: 0.04, max: 0.1, unit: "", pct: 96 },
];

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function CoreWebVitalsGauge() {
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
    <div ref={containerRef} className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-4 md:gap-8">
        {metrics.map((metric, i) => (
          <div key={metric.key} className="flex flex-col items-center gap-3">
            <div className="relative w-[104px] h-[104px] md:w-[128px] md:h-[128px]">
              <svg viewBox="0 0 104 104" className="w-full h-full -rotate-90">
                <circle
                  cx="52"
                  cy="52"
                  r={RADIUS}
                  fill="none"
                  stroke="#E5E5E7"
                  strokeWidth="8"
                />
                <circle
                  cx="52"
                  cy="52"
                  r={RADIUS}
                  fill="none"
                  stroke="#0A7D4F"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={
                    revealed ? CIRCUMFERENCE * (1 - metric.pct / 100) : CIRCUMFERENCE
                  }
                  style={{
                    transition: "stroke-dashoffset 1.4s ease-out",
                    transitionDelay: `${i * 200}ms`,
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[20px] md:text-[24px] font-semibold text-ink">
                  {metric.value}
                  {metric.unit}
                </span>
                <span className="caption-copy text-success">Good</span>
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold text-ink text-[14px]">{metric.key}</p>
              <p className="caption-copy max-w-[16ch] mx-auto">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="caption-copy text-center max-w-[62ch] mx-auto">
        Google&apos;s own &quot;Good&quot; thresholds: LCP under 2.5s, INP
        under 200ms, CLS under 0.1. These are the targets every page built
        for a client is measured against using real visitor field data, not
        a one-time lab score.
      </p>
    </div>
  );
}
