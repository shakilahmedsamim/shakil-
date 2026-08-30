/**
 * Central tracking module.
 *
 * Every conversion signal on the site (Google tag + Meta Pixel, and later
 * the server-side Conversions API / Enhanced Conversions calls made from a
 * backend such as Stape.io's server GTM container) should fire through one
 * of the three functions below, never scattered ad hoc across components.
 *
 * IMPORTANT: no Google tag (gtag.js) or Meta Pixel script is installed yet
 * in this build (see Section 11 of the build brief: tracking wiring is a
 * later phase, once there is a live ad account and a consent plan behind
 * it). These functions are safe no-ops until that phase, guarded so they
 * never throw if `window.gtag` / `window.fbq` are not present, and they
 * log to the console in development so the event contract is visible and
 * testable ahead of time.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function getClickIds() {
  if (typeof window === "undefined") return { gclid: "", fbclid: "" };
  const params = new URLSearchParams(window.location.search);
  return {
    gclid: params.get("gclid") || sessionStorage.getItem("gclid") || "",
    fbclid: params.get("fbclid") || sessionStorage.getItem("fbclid") || "",
  };
}

/** Call once on app load to persist gclid/fbclid across the visit. */
export function captureClickIds() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid");
  const fbclid = params.get("fbclid");
  if (gclid) sessionStorage.setItem("gclid", gclid);
  if (fbclid) sessionStorage.setItem("fbclid", fbclid);
}

/** Fires on Web3Forms success: generate_lead (GA4) + Lead (Meta). */
export function trackFormSubmit(eventId: string, data?: { email?: string }) {
  const { gclid, fbclid } = getClickIds();
  if (typeof window === "undefined") return;

  window.gtag?.("event", "generate_lead", {
    event_id: eventId,
    gclid,
    fbclid,
  });

  window.fbq?.("track", "Lead", {}, { eventID: eventId });

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[tracking] trackFormSubmit", { eventId, gclid, fbclid, data });
  }
}

/** Fires on Calendly booking-confirmed postMessage: schedule_call (GA4) + Schedule (Meta). */
export function trackCallBooked(eventId: string) {
  const { gclid, fbclid } = getClickIds();
  if (typeof window === "undefined") return;

  window.gtag?.("event", "schedule_call", {
    event_id: eventId,
    gclid,
    fbclid,
  });

  window.fbq?.("track", "Schedule", {}, { eventID: eventId });

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[tracking] trackCallBooked", { eventId, gclid, fbclid });
  }
}

/** Fires before a WhatsApp link opens: contact_whatsapp (GA4) + Contact (Meta). */
export function trackWhatsAppClick() {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "contact_whatsapp");
  window.fbq?.("track", "Contact");

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[tracking] trackWhatsAppClick");
  }
}

export function generateEventId() {
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}
