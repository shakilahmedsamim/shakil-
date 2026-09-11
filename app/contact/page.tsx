import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import WhatsAppLink from "@/components/WhatsAppLink";
import { ArrowRightIcon, ClockIcon, GlobeIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send your details for a free Google Ads and conversion tracking audit, or message me directly on WhatsApp or email.",
  alternates: { canonical: "/contact/" },
};

const faqItems = [
  {
    question: "What happens after I submit the contact form?",
    answer:
      "The details submitted are reviewed and a reply comes back within one business day, usually faster, either by email or WhatsApp depending on what was provided, with next steps for the free audit.",
  },
  {
    question: "Is WhatsApp or email faster for a response?",
    answer:
      "Both are checked on the same schedule, so either channel gets a reply within one business day. WhatsApp is a good fit for a quick question, while email works better for anything that needs detail, like account access instructions.",
  },
  {
    question: "Do I need to book a call, or can I just send my details?",
    answer:
      "Either works. Sending details through the form lets the account get reviewed asynchronously before a reply, while booking a call directly skips straight to a live 30-minute audit on the calendar.",
  },
  {
    question: "What information should I include to get the most useful reply?",
    answer:
      "Your website, whether you are currently running Google Ads, and a short description of your business and goals lets the reply address your specific account instead of a generic response.",
  },
];

export default function ContactPage() {
  return (
    <section className="section pt-12">
      <div className="content-wrap px-6">
        <h1 className="h1-style max-w-[20ch] mb-4">Send Your Details for a Free Audit</h1>
        <p className="body-lg-copy text-neutral max-w-prose mb-10">
          Tell me about your business and goals below, and I will reply
          within one business day with what I see and what to fix first.
        </p>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 bg-white rounded-2xl border border-border p-6">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent shrink-0">
                  <MailIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink text-[15px]">Email</p>
                  <a href={`mailto:${site.email}`} className="body-copy text-accent underline">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink text-[15px]">WhatsApp</p>
                  <WhatsAppLink className="body-copy text-accent underline">
                    Message on WhatsApp
                  </WhatsAppLink>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent shrink-0">
                  <ClockIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink text-[15px]">Response time</p>
                  <p className="body-copy text-neutral">
                    I reply within one business day, usually faster.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent shrink-0">
                  <GlobeIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink text-[15px]">Time zones</p>
                  <p className="body-copy text-neutral">
                    I work across UK, US, and Canada time zones.
                  </p>
                </div>
              </div>

              <p className="caption-copy border-t border-border pt-4">
                What you submit here is used only to respond to your
                enquiry. It is not sold or shared with third parties.
              </p>
            </div>

            <div className="rounded-2xl bg-ink p-6 flex flex-col gap-3">
              <p className="font-semibold text-white">Prefer to just pick a time?</p>
              <p className="body-copy !text-[#B0B0B5]">
                Skip the form and book a free 30-minute call directly on the
                calendar.
              </p>
              <Link
                href="/book-a-call/"
                className="btn-primary bg-accent w-fit inline-flex items-center gap-2 mt-1"
              >
                Book a Free Call
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrap px-6 max-w-[860px] mt-20">
        <h2 className="h2-style text-center mb-10">Common Questions</h2>
        <Faq items={faqItems} />
      </div>
    </section>
  );
}
