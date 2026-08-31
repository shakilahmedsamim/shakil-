"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { generateEventId, trackFormSubmit } from "@/lib/tracking";

export default function HeroLeadForm() {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const gclidRef = useRef<HTMLInputElement>(null);
  const fbclidRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid") || sessionStorage.getItem("gclid") || "";
    const fbclid = params.get("fbclid") || sessionStorage.getItem("fbclid") || "";
    if (gclidRef.current) gclidRef.current.value = gclid;
    if (fbclidRef.current) fbclidRef.current.value = fbclid;
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setResult("Sending...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", site.web3formsAccessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Thanks. We will get back to you within one business day.");
        const email = formData.get("email")?.toString();
        trackFormSubmit(generateEventId(), { email });
        form.reset();
      } else {
        setResult("Something went wrong. Please try again or message us on WhatsApp.");
      }
    } catch {
      setResult("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 bg-white rounded-2xl border border-border shadow-lg p-6 md:p-7"
    >
      <div>
        <p className="h3-style !text-[20px]">Get Your Free 30-Minute Audit</p>
        <p className="caption-copy mt-1">No payment required. Takes 30 seconds to request.</p>
      </div>

      <div className="form-field">
        <label htmlFor="hero-name">Name</label>
        <input id="hero-name" className="form-input" type="text" name="name" required />
      </div>

      <div className="form-field">
        <label htmlFor="hero-email">Business email</label>
        <input id="hero-email" className="form-input" type="email" name="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="hero-phone">Phone</label>
        <input id="hero-phone" className="form-input" type="tel" name="phone" required />
      </div>

      <div className="form-field">
        <label htmlFor="hero-ad_platform">What are you currently running ads on?</label>
        <select id="hero-ad_platform" name="ad_platform" className="form-input">
          <option>Google Ads</option>
          <option>Meta Ads</option>
          <option>Both</option>
          <option>Neither yet</option>
        </select>
      </div>

      <input ref={gclidRef} type="hidden" name="gclid" />
      <input ref={fbclidRef} type="hidden" name="fbclid" />
      <input type="hidden" name="form_source" value="Homepage Hero" />

      <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60">
        Get My Free Audit
      </button>

      <span role="status" className="caption-copy min-h-[1.2em]">
        {result}
      </span>
    </form>
  );
}
