"use client";

import { useEffect } from "react";

/**
 * Next.js's client-side router does not reliably scroll to an in-page
 * anchor (#id) when navigating to this route from a different page, so
 * clicking a Link with a hash can silently land at the top of the page
 * instead of the target section. This forces the scroll once the page
 * has mounted and the target element actually exists in the DOM.
 */
export default function HashScrollFix() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    const timer = setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
