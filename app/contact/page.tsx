import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import WhatsAppLink from "@/components/WhatsAppLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free 30-minute Google Ads and conversion tracking audit. Book a call, message us on WhatsApp, or send your details directly.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="section pt-12">
      <div className="content-wrap px-6">
        <h1 className="h1-style max-w-[18ch] mb-4">Book Your Free Audit or Send Us Your Details</h1>
        <p className="body-lg-copy text-neutral max-w-prose mb-10">
          Pick whichever channel works for you. Every path reaches the same
          person, not a queue.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <ContactForm />

            <div className="flex flex-col gap-3 bg-white rounded-2xl border border-border p-6">
              <p className="body-copy">
                <span className="font-semibold">Email:</span>{" "}
                <a href={`mailto:${site.email}`} className="text-accent underline">
                  {site.email}
                </a>
              </p>
              <p className="body-copy">
                <span className="font-semibold">WhatsApp:</span>{" "}
                <WhatsAppLink className="text-accent underline">
                  +{site.whatsappNumber}
                </WhatsAppLink>
              </p>
              <p className="body-copy">
                <span className="font-semibold">Response time:</span> We
                reply within one business day, usually faster.
              </p>
              <p className="body-copy">
                <span className="font-semibold">Time zones:</span> We work
                across UK, US, and Canada time zones. The Calendly widget
                automatically shows available times in your own time zone.
              </p>
              <p className="caption-copy">
                What you submit here is used only to respond to your
                enquiry and, if you book a call, to prepare for it. It is
                not sold or shared with third parties.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-4 md:p-6">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
