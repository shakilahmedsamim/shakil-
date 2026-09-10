import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { CheckIcon, ImageIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Tracking Guru exists: an agency built specifically around fixing broken ad tracking and wasted ad spend for local service and B2B businesses.",
  alternates: { canonical: "/about/" },
};

const faqItems = [
  {
    question: "Is this a one-person operation or a full agency?",
    answer:
      "Tracking Guru is run as a specialist practice rather than a large generalist agency, which means direct access to the person actually making changes in the account, not an account manager relaying requests to someone else.",
  },
  {
    question: "Why specialize in Google Ads and tracking instead of offering full-service marketing?",
    answer:
      "Diagnosing a broken pixel, a missing Enhanced Conversion, or a double-counted event is the specific, repeated work done every week, not an occasional task inside a broader retainer covering SEO, social, and design at the same time.",
  },
  {
    question: "Which industries does Tracking Guru specialize in?",
    answer:
      "Home services trades such as HVAC and plumbing, legal verticals including personal injury and immigration law, medical aesthetics and cosmetic dentistry, and B2B professional and managed services, all industries where tracking accuracy and offline conversion attribution have an outsized effect on ad performance.",
  },
  {
    question: "Do you only work with businesses in the UK, US, and Canada?",
    answer:
      "Client management and reporting are scheduled around UK, US, and Canada time zones, since consistent overlap for calls and campaign changes matters more than serving every region at once.",
  },
];

const whatIDo = [
  "Set up and manage Google Ads accounts so tracking is correct before the first dollar is spent",
  "Diagnose and fix broken conversion tracking on existing accounts, so fewer leads get miscounted or lost",
  "Build offline conversion pipelines so a closed deal that started on a phone call still counts as a real conversion",
  "Report on cost per lead and cost per booked job in plain numbers, not platform-generated vanity metrics",
];

export default function AboutPage() {
  return (
    <>
      <section className="section pt-12">
        <div className="content-wrap px-6 grid md:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Client to upload a real founder photo via GitHub. Suggested filename: about-founder.jpg, recommended size 800x800px. */}
          <div className="w-full aspect-square rounded-2xl bg-white border border-dashed border-border flex flex-col items-center justify-center gap-3 overflow-hidden">
            <ImageIcon className="w-8 h-8 text-neutral" />
            <span className="caption-copy px-6 text-center">
              Founder photo placeholder
              <br />
              (about-founder.jpg)
            </span>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="h1-style">Who I Am</h1>
              <p className="body-lg-copy text-neutral">
                I run Tracking Guru, a Google Ads management and conversion
                tracking agency working with local service businesses and
                B2B companies across the UK, US, and Canada. [Client to
                replace with a first-person paragraph naming real experience,
                years in the field, and location context.]
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">Why I Do This</h2>
              <p className="body-lg-copy text-neutral">
                [Client to replace with a specific, first-person paragraph.
                State the concrete problem that led to starting this agency,
                for example a pattern of accounts spending money on ads with
                broken or missing conversion tracking, or agencies that
                report on clicks and impressions instead of booked jobs and
                closed revenue. Keep it specific and checkable, not a
                general statement about being passionate about marketing.]
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">What I Actually Do</h2>
              <ul className="flex flex-col gap-3">
                {whatIDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span className="body-copy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">What This Means for You</h2>
              <p className="body-lg-copy text-neutral">
                Working with a specialist instead of a generalist marketing
                agency means faster diagnosis when tracking breaks, because
                identifying a broken pixel or a missing enhanced conversion
                is the specific thing I do every week, not an occasional task
                inside a broader retainer. It also means no learning curve on
                your account and no account manager standing between you and
                the person actually making changes.
              </p>
            </div>

            <Link href="/book-a-call/" className="btn-primary w-fit">
              Book Your Free 30-Minute Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6 max-w-[860px]">
          <h2 className="h2-style text-center mb-10">Common Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>
    </>
  );
}
