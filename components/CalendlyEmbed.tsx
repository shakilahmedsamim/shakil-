"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { generateEventId, trackCallBooked } from "@/lib/tracking";

/**
 * Lazy-loads the Calendly inline widget only once it scrolls near the
 * viewport, and reserves its final height up front, so it never becomes
 * the LCP element and never causes layout shift while it loads.
 */
export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [shouldLoad]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "object" || !event.data) return;
      const eventName = (event.data as { event?: string }).event;
      if (eventName === "calendly.event_scheduled" || eventName === "calendly.date_and_time_selected") {
        trackCallBooked(generateEventId());
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: 700 }}>
      {shouldLoad && (
        <div
          className="calendly-inline-widget"
          data-url={site.calendlyUrl}
          style={{ minWidth: 320, height: 700 }}
        />
      )}
    </div>
  );
}
