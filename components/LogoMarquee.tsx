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

/**
 * Real official brand colors (from Simple Icons), applied via inline style
 * rather than a Tailwind class since these are per-logo, not part of the
 * site's own palette. Never recolor these into the site's accent blue.
 */
const platforms = [
  { name: "Google Ads", Logo: GoogleAdsLogo, color: "#4285F4" },
  { name: "Google Tag Manager", Logo: GoogleTagManagerLogo, color: "#246FDB" },
  { name: "Google Analytics", Logo: GoogleAnalyticsLogo, color: "#E37400" },
  { name: "Meta", Logo: MetaLogo, color: "#0467DF" },
  { name: "TikTok", Logo: TikTokLogo, color: "#000000" },
  { name: "Pinterest", Logo: PinterestLogo, color: "#BD081C" },
  { name: "Shopify", Logo: ShopifyLogo, color: "#7AB55C" },
  { name: "WordPress", Logo: WordPressLogo, color: "#21759B" },
  { name: "HubSpot", Logo: HubSpotLogo, color: "#FF7A59" },
];

// A single pass of 9 logos isn't wide enough to fill a desktop viewport, so
// tripling it inside each half keeps the marquee full-width on any screen.
// This must stay an odd multiple >= 1 for both halves to look identical.
const loopUnit = [...platforms, ...platforms, ...platforms];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-12 pr-12 shrink-0" aria-hidden={ariaHidden}>
      {loopUnit.map((platform, i) => (
        <div key={`${platform.name}-${i}`} className="flex items-center gap-2.5 shrink-0">
          <span className="flex" style={{ color: platform.color }}>
            <platform.Logo className="w-5 h-5" />
          </span>
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
      {/* Exactly two copies keeps the translateX(-50%) loop seamless; each
          copy is tripled internally (see loopUnit) so neither copy ever
          runs out before the next begins, on any viewport width. Duration
          is scaled up 3x to match, so per-logo scroll speed stays the same
          as a single, un-tripled pass. */}
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
