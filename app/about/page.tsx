import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { CheckIcon, ImageIcon } from "@/components/icons";
import UploadedImage from "@/components/UploadedImage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Ads Specialist Focused on Measurable Business Results",
  description:
    "Meet Shakil, a Google Ads specialist helping businesses across the UK, US, and Canada manage, optimize, and measure Google Ads campaigns with accurate conversion tracking.",
  alternates: { canonical: "/about/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shakil",
  alternateName: "PPC Shakil",
  jobTitle: "Google Ads and Conversion Tracking Specialist",
  url: `${site.url}/about/`,
  email: `mailto:${site.email}`,
  worksFor: {
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
  },
  knowsAbout: [
    "Google Ads",
    "Google Ads Management",
    "Conversion Tracking",
    "Enhanced Conversions",
    "Server-Side Tagging",
    "Landing Page Optimization",
    "PPC Advertising",
  ],
};

const services = [
  {
    title: "Google Ads Management",
    body: "I manage and optimize Google Ads campaigns with a focus on qualified traffic, relevant search intent, and measurable business outcomes. This includes campaign structure, keyword and search-term analysis, targeting, bidding, ad performance, budget allocation, negative keywords, and ongoing optimization.",
  },
  {
    title: "Google Ads Account Setup & Strategy",
    body: "I help businesses build Google Ads accounts around clear goals rather than simply launching campaigns with default settings. The goal is to create a structure that makes performance easier to understand, optimize, and scale.",
  },
  {
    title: "Google Ads Optimization",
    body: "I analyze campaign and conversion data to identify where budget is being wasted, where opportunities are being missed, and which parts of an account need improvement. The focus is not on making the dashboard look better. It is on making better decisions with the available data.",
  },
  {
    title: "Conversion Tracking",
    body: "Accurate conversion tracking is the foundation underneath effective Google Ads management. I set up, audit, and troubleshoot conversion tracking so important actions such as leads, calls, forms, bookings, and other business conversions can be measured correctly.",
  },
  {
    title: "Offline Conversion Tracking",
    body: "For businesses where the final result happens after the initial lead, I can help connect offline outcomes back to the advertising journey. This makes it possible to understand which Google Ads leads turn into meaningful business results instead of optimizing only for the first form submission or phone call.",
  },
];

const outcomeQuestions = [
  "Are the right people finding the business?",
  "Are Google Ads campaigns attracting qualified prospects?",
  "Are important conversions being measured correctly?",
  "Which campaigns, keywords, and search terms are producing valuable leads?",
  "Is advertising spend being allocated toward the opportunities that matter most?",
];

const whoIWorkWith = [
  "Already spend money on Google Ads but are unsure whether the account is being managed effectively",
  "Are generating leads but cannot confidently measure where those leads come from",
  "Have inconsistent or broken conversion tracking",
  "Want a specialist focused specifically on Google Ads rather than full-service marketing",
  "Need help understanding which campaigns and search terms are actually contributing to business results",
  "Want a Google Ads strategy built around measurable outcomes instead of vanity metrics",
];

const faqItems = [
  {
    question: "Is PPC Shakil a Google Ads agency or a one-person specialist?",
    answer:
      "PPC Shakil is a specialist-led Google Ads practice run by Shakil. The focus is Google Ads management, optimization, strategy, and conversion tracking rather than offering a broad full-service marketing agency.",
  },
  {
    question: "What does a Google Ads specialist actually do?",
    answer:
      "A Google Ads specialist manages and optimizes paid search campaigns based on business goals and performance data. This can include account structure, keyword research, search-term analysis, bidding, targeting, ad performance, budget allocation, conversion tracking, and ongoing optimization.",
  },
  {
    question: "Why specialize in Google Ads instead of offering full-service marketing?",
    answer:
      "Google Ads is a specialized channel that can require constant attention to campaign structure, search intent, bidding, data, and conversion quality. By focusing primarily on Google Ads, I can concentrate on the details that directly affect paid search performance instead of trying to cover every area of marketing.",
  },
  {
    question: "Does conversion tracking matter for Google Ads?",
    answer:
      "Yes. Google Ads performance depends heavily on the quality of the conversion data being used for measurement and optimization. If important conversions are missing, duplicated, or incorrectly configured, campaign performance can be difficult to evaluate accurately.",
  },
  {
    question: "Can you help with Google Ads conversion tracking?",
    answer:
      "Yes. Alongside Google Ads management, I work with conversion tracking to help businesses measure important actions such as forms, calls, leads, bookings, and other conversions more accurately.",
  },
  {
    question: "Do you work with businesses outside your local area?",
    answer:
      "Yes. I work with businesses across the UK, US, and Canada. Google Ads and conversion tracking can be managed remotely, allowing me to work with businesses regardless of where they are located within those markets.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "My approach is focused on measurable outcomes rather than vanity metrics. I look at the relationship between Google Ads activity, conversion data, and the actual business goal so that optimization decisions are based on useful information rather than surface-level platform numbers.",
  },
  {
    question: "What should I expect from working with PPC Shakil?",
    answer:
      "You should expect a specialist focused on Google Ads performance, clear communication about what the data is showing, and a practical approach to improving campaigns and measurement. The goal is to make your Google Ads investment easier to understand and easier to optimize.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="section pt-12">
        <div className="content-wrap px-6 grid md:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Upload a real founder photo to public/images/uploads/about-founder.jpg (via GitHub) and it will replace this placeholder automatically. Recommended size: 800x800px. */}
          <UploadedImage
            src="/images/uploads/about-founder.jpg"
            alt="Shakil"
            className="w-full aspect-square rounded-2xl object-cover border border-border"
            fallback={
              <div className="w-full aspect-square rounded-2xl bg-white border border-dashed border-border flex flex-col items-center justify-center gap-3 overflow-hidden">
                <ImageIcon className="w-8 h-8 text-neutral" />
                <span className="caption-copy px-6 text-center">
                  Founder photo placeholder
                  <br />
                  (about-founder.jpg)
                </span>
              </div>
            }
          />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2">
                <span className="w-[15px] h-[3px] rounded-full bg-accent" />
                <span className="text-[14px] text-neutral">About Shakil</span>
              </span>
              <h1 className="h1-style">
                Google Ads Specialist Focused on Measurable Business Results
              </h1>
              <p className="body-lg-copy text-neutral">
                I&apos;m Shakil, the person behind PPC Shakil. I specialize in
                Google Ads management, optimization, strategy, and conversion
                tracking for businesses across the UK, US, and Canada.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">Why I Focus on Google Ads</h2>
              <p className="body-lg-copy text-neutral">
                Google Ads can generate demand quickly, but managing an
                account properly requires more than turning campaigns on and
                watching the dashboard.
              </p>
              <p className="body-copy text-neutral">
                A campaign can look healthy inside Google Ads while the
                underlying business results tell a different story. Leads may
                be tracked incorrectly, conversions may be duplicated,
                valuable actions may be missing, or campaigns may be
                optimized around actions that do not represent real business
                value.
              </p>
              <p className="body-copy text-neutral">
                That&apos;s why my approach starts with the business goal and
                works backwards. I focus on understanding what the business
                actually wants from Google Ads, making sure the account is
                measuring the right actions, and then using that information
                to make better advertising decisions.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">What I Actually Do</h2>
              <div className="flex flex-col gap-5 mt-1">
                {services.map((item) => (
                  <div key={item.title} className="border-l-2 border-accent/25 pl-4">
                    <p className="font-semibold text-ink text-[17px] mb-1">{item.title}</p>
                    <p className="body-copy text-neutral">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">What This Means for Your Business</h2>
              <p className="body-lg-copy text-neutral">
                When you work with a Google Ads specialist instead of a
                generalist marketing agency, the goal is simple: your
                advertising decisions should be based on what is actually
                happening in the account and in the business.
              </p>
              <p className="body-copy text-neutral">
                I don&apos;t believe that more clicks automatically mean
                better performance. The important questions are:
              </p>
              <ul className="flex flex-col gap-2 mt-1">
                {outcomeQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <span className="body-copy">{question}</span>
                  </li>
                ))}
              </ul>
              <p className="body-copy text-neutral mt-2">
                Those are the questions I use to guide Google Ads management
                and optimization. My role is to help turn Google Ads data
                into clearer decisions, better campaign performance, and a
                more reliable paid search system.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">Who I Work With</h2>
              <p className="body-lg-copy text-neutral">
                I work with businesses in the UK, US, and Canada that use
                Google Ads to generate leads, enquiries, calls, bookings, or
                other measurable business opportunities. My work is
                particularly useful for businesses that:
              </p>
              <ul className="flex flex-col gap-3 mt-1">
                {whoIWorkWith.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span className="body-copy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="h2-style">Why PPC Shakil</h2>
              <p className="body-lg-copy text-neutral">
                I keep the focus narrow: Google Ads first, with conversion
                tracking supporting the data behind it. That means I can
                spend my time understanding the details that affect paid
                search performance rather than spreading attention across
                every area of digital marketing.
              </p>
              <p className="body-copy text-neutral">
                If your business is already investing in Google Ads, I want
                you to know what is happening with that investment, what is
                working, what is not, and where the next improvement should
                come from.
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
