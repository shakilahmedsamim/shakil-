import {
  GoogleAdsLogo,
  GoogleAnalyticsLogo,
  GoogleTagManagerLogo,
  HubSpotLogo,
  MetaLogo,
  PinterestLogo,
  ShopifyLogo,
  TikTokLogo,
  WordPressLogo,
} from "./icons";

const platforms = [
  { name: "Google Ads", Logo: GoogleAdsLogo },
  { name: "Google Tag Manager", Logo: GoogleTagManagerLogo },
  { name: "Google Analytics", Logo: GoogleAnalyticsLogo },
  { name: "Meta", Logo: MetaLogo },
  { name: "TikTok", Logo: TikTokLogo },
  { name: "Pinterest", Logo: PinterestLogo },
  { name: "Shopify", Logo: ShopifyLogo },
  { name: "WordPress", Logo: WordPressLogo },
  { name: "HubSpot", Logo: HubSpotLogo },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-12 pr-12 shrink-0" aria-hidden={ariaHidden}>
      {platforms.map((platform) => (
        <div key={platform.name} className="flex items-center gap-2.5 shrink-0">
          <platform.Logo className="w-5 h-5 text-neutral" />
          <span className="text-[15px] font-medium text-neutral whitespace-nowrap">
            {platform.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
