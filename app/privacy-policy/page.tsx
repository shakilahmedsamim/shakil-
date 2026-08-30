import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Tracking Guru handles the information you submit through this site.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section pt-12">
      <div className="content-wrap px-6 max-w-prose">
        <h1 className="h1-style mb-6">Privacy Policy</h1>

        <p className="body-copy text-neutral mb-4">
          This page describes what {site.name} collects through this
          website and why. It is written in plain language rather than
          legal boilerplate.
        </p>

        <h2 className="h3-style mt-8 mb-3">What we collect</h2>
        <p className="body-copy text-neutral mb-4">
          When you submit the contact form, we collect your name, business
          email address, what you are currently running ads on, and the
          message you write. When you book a call through Calendly, Calendly
          collects your name, email, and the time you select. We use this
          information only to respond to your enquiry and prepare for any
          call you book.
        </p>

        <h2 className="h3-style mt-8 mb-3">Advertising tracking</h2>
        <p className="body-copy text-neutral mb-4">
          No advertising tracking, such as a Google tag or Meta Pixel, is
          active on this site at this time. This page will be updated
          before any such tracking goes live, describing exactly what is
          collected and how to opt out.
        </p>

        <h2 className="h3-style mt-8 mb-3">Cookies</h2>
        <p className="body-copy text-neutral mb-4">
          This site may use cookies for basic, first-party analytics only.
          You can accept or reject this in the cookie banner shown on your
          first visit. Rejecting does not affect your ability to use the
          site, submit the contact form, or book a call.
        </p>

        <h2 className="h3-style mt-8 mb-3">Third-party services</h2>
        <p className="body-copy text-neutral mb-4">
          Form submissions are processed by Web3Forms. Call bookings are
          processed by Calendly. Each service processes the data you submit
          to them under their own privacy policy.
        </p>

        <h2 className="h3-style mt-8 mb-3">Contact</h2>
        <p className="body-copy text-neutral">
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
