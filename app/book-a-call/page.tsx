import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Free Call",
  description:
    "Book your free 30-minute Google Ads and conversion tracking audit. No payment required.",
  alternates: { canonical: "/book-a-call/" },
};

const bullets = [
  "We review your current campaigns and conversion setup live",
  "You get a written summary of the top three issues we find",
  "No pressure and no obligation to work with us afterward",
];

export default function BookACallPage() {
  return (
    <section className="section pt-12">
      <div className="content-wrap px-6 max-w-[860px] mx-auto text-center flex flex-col items-center gap-6">
        <h1 className="h1-style">Book Your Free 30-Minute Ad Account Audit</h1>
        <p className="body-lg-copy text-neutral max-w-prose">
          No payment required. On this call we will look at your current
          Google Ads account, check whether your conversion tracking is
          actually working across every platform you advertise on, and tell
          you what to fix first.
        </p>

        <ul className="flex flex-col gap-2 text-left">
          {bullets.map((bullet) => (
            <li key={bullet} className="body-copy">
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="content-wrap px-6 mt-10">
        <div className="bg-white rounded-2xl border border-border p-4 md:p-6 max-w-[860px] mx-auto">
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}
