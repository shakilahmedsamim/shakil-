import { FiverrLogo, StarIcon, UpworkLogo } from "./icons";

type PlatformReview = {
  platform: "Upwork" | "Fiverr";
  rating: number;
  title: string;
  quote: string;
  initials: string;
  reviewerName: string;
  reviewerSubtitle: string;
};

const platformReviews: PlatformReview[] = [
  {
    platform: "Upwork",
    rating: 5.0,
    title: "TikTok Ads Manager Pixel Setup & First Ad Launch",
    quote:
      "Shakil has helped me to setup my TikTok Pixel and configured it with GTM. He is someone who I can rely on for my future projects regarding GTM and GA4 Tracking Setup.",
    initials: "UC",
    reviewerName: "Upwork Client",
    reviewerSubtitle: "TikTok Pixel & GTM setup",
  },
  {
    platform: "Upwork",
    rating: 5.0,
    title: "Tracking analytics and data",
    quote: "Great skills, helped a lot with Facebook and Meta ads tracking. Highly recommend.",
    initials: "MA",
    reviewerName: "Meta Ads Client",
    reviewerSubtitle: "Tracking analytics and data",
  },
  {
    platform: "Upwork",
    rating: 5.0,
    title: "Facebook CRM and Conversion API Configuration",
    quote: "Great work! Thank you.",
    initials: "CC",
    reviewerName: "CRM Client",
    reviewerSubtitle: "Facebook CAPI configuration",
  },
  {
    platform: "Upwork",
    rating: 5.0,
    title: "Conversions API & Catalog Setup",
    quote: "Good work done. Appreciate it.",
    initials: "CS",
    reviewerName: "Catalog Setup Client",
    reviewerSubtitle: "Conversions API specialist",
  },
  {
    platform: "Fiverr",
    rating: 5.0,
    title: "GTM, Analytics & Pinterest Conversion Tracking",
    quote:
      "Shakil was absolutely fantastic. He is very technical and good at his job. He knows everything about Google Tag Manager, Google Analytics and conversions linking this to Pinterest.",
    initials: "U",
    reviewerName: "umedrahman96",
    reviewerSubtitle: "United Kingdom",
  },
  {
    platform: "Fiverr",
    rating: 5.0,
    title: "API Setup Collaboration",
    quote:
      "He has very deep knowledge to set up the API. I am impressed by his technical skillset and his collaboration. I will get back to you soon.",
    initials: "I",
    reviewerName: "itsharry27",
    reviewerSubtitle: "Pakistan",
  },
];

function Stars({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5 text-success">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: "Upwork" | "Fiverr" }) {
  const Logo = platform === "Upwork" ? UpworkLogo : FiverrLogo;
  return (
    <span className="caption-copy flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background border border-border text-ink">
      <Logo className="w-3.5 h-3.5" />
      {platform}
    </span>
  );
}

export default function ReviewsSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-ink p-8 flex flex-col justify-between gap-6">
          <p className="text-white text-[19px] md:text-[21px] leading-relaxed">
            His expertise in conversion tracking, data accuracy, and
            platform integrations is outstanding. He quickly identifies
            issues others miss and implements clean, reliable tracking that
            gives real clarity on performance.
          </p>
          <div>
            <p className="text-white font-semibold">Yarne de Win</p>
            <p className="caption-copy !text-[#B0B0B5]">
              Google Ads, CRO & Copywriting Specialist
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-border p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="caption-copy text-accent uppercase tracking-wide">
              Multi-Platform Proof
            </span>
            <Stars className="w-5 h-5" />
            <p className="body-lg-copy">
              Clients hire me when their ad platforms need clean conversion
              data, better event quality, and tracking they can trust before
              scaling spend.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platformReviews.map((review) => (
          <div
            key={review.title}
            className="rounded-2xl bg-white border border-border p-7 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <PlatformBadge platform={review.platform} />
              <div className="flex items-center gap-1.5">
                <Stars />
                <span className="caption-copy">{review.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-ink text-[17px]">{review.title}</h3>
              <p className="body-copy text-neutral">{review.quote}</p>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent font-semibold text-[13px] shrink-0">
                {review.initials}
              </span>
              <div>
                <p className="text-[14px] font-medium text-ink">{review.reviewerName}</p>
                <p className="caption-copy">{review.reviewerSubtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
