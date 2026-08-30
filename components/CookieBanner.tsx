"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (!existing) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage failures, still dismiss the banner
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white">
      <div className="content-wrap px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[14px] text-ink max-w-[65ch]">
          This site may use cookies for basic analytics. No advertising
          tracking is active. Read our{" "}
          <Link href="/privacy-policy/" className="text-accent underline">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={() => respond("rejected")} className="btn-secondary !py-2.5 !px-5 text-[14px]">
            Reject
          </button>
          <button onClick={() => respond("accepted")} className="btn-primary !py-2.5 !px-5 text-[14px]">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
