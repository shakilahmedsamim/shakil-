import {
  GlobeIcon,
  GoogleAdsLogo,
  HubSpotLogo,
  LinkedInLogo,
  MetaLogo,
  PinterestLogo,
  ShieldCheckIcon,
  ShopifyLogo,
  TikTokLogo,
  WooCommerceLogo,
  WordPressLogo,
} from "./icons";

const VIEW_W = 1000;
const VIEW_H = 500;
const X_POSITIONS = [100, 300, 500, 700, 900];
const TOP_Y = 60;
const HUB_Y = 250;
const BOTTOM_Y = 440;

const sourceNodes = [
  { Icon: GlobeIcon, label: "Website", color: "#0066FF" },
  { Icon: ShopifyLogo, label: "Shopify", color: "#7AB55C" },
  { Icon: WordPressLogo, label: "WordPress", color: "#21759B" },
  { Icon: WooCommerceLogo, label: "WooCommerce", color: "#96588A" },
  { Icon: HubSpotLogo, label: "CRM", color: "#FF7A59" },
];

const destinationNodes = [
  { Icon: MetaLogo, label: "Meta", color: "#0467DF" },
  { Icon: GoogleAdsLogo, label: "Google Ads", color: "#4285F4" },
  { Icon: TikTokLogo, label: "TikTok", color: "#000000" },
  { Icon: PinterestLogo, label: "Pinterest", color: "#BD081C" },
  { Icon: LinkedInLogo, label: "LinkedIn", color: "#0A66C2" },
];

function toPercent(x: number, y: number) {
  return { left: `${(x / VIEW_W) * 100}%`, top: `${(y / VIEW_H) * 100}%` };
}

function Node({
  x,
  y,
  Icon,
  label,
  color,
  size = 56,
}: {
  x: number;
  y: number;
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
      style={toPercent(x, y)}
    >
      <span
        className="flex items-center justify-center rounded-2xl bg-white border border-border shadow-sm"
        style={{ width: size, height: size, color }}
      >
        <Icon className="w-6 h-6" />
      </span>
      <span className="caption-copy whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function DataFlowDiagram() {
  return (
    <div className="overflow-x-auto">
      <div className="relative mx-auto min-w-[720px] max-w-[1000px] aspect-[2/1]">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          {X_POSITIONS.map((x, i) => (
            <path
              key={`in-${i}`}
              id={`flow-in-${i}`}
              d={`M ${x} ${TOP_Y} L ${X_POSITIONS[2]} ${HUB_Y}`}
              stroke="#0066FF"
              strokeOpacity={0.25}
              strokeWidth={2}
              fill="none"
            />
          ))}
          {X_POSITIONS.map((x, i) => (
            <path
              key={`out-${i}`}
              id={`flow-out-${i}`}
              d={`M ${X_POSITIONS[2]} ${HUB_Y} L ${x} ${BOTTOM_Y}`}
              stroke="#0A7D4F"
              strokeOpacity={0.25}
              strokeWidth={2}
              fill="none"
            />
          ))}

          {X_POSITIONS.map((_, i) => (
            <circle key={`dot-in-${i}`} r={5} fill="#0066FF">
              <animateMotion
                dur="2.8s"
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href={`#flow-in-${i}`} />
              </animateMotion>
            </circle>
          ))}
          {X_POSITIONS.map((_, i) => (
            <circle key={`dot-out-${i}`} r={5} fill="#0A7D4F">
              <animateMotion
                dur="2.8s"
                begin={`${1.4 + i * 0.35}s`}
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href={`#flow-out-${i}`} />
              </animateMotion>
            </circle>
          ))}
        </svg>

        {sourceNodes.map((node, i) => (
          <Node key={node.label} x={X_POSITIONS[i]} y={TOP_Y} {...node} />
        ))}

        <Node
          x={X_POSITIONS[2]}
          y={HUB_Y}
          Icon={ShieldCheckIcon}
          label="Server-Side Tagging"
          color="#0066FF"
          size={72}
        />

        {destinationNodes.map((node, i) => (
          <Node key={node.label} x={X_POSITIONS[i]} y={BOTTOM_Y} {...node} />
        ))}
      </div>

      <div className="flex justify-center gap-8 mt-4">
        <span className="flex items-center gap-2 caption-copy">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Events from your site or CRM
        </span>
        <span className="flex items-center gap-2 caption-copy">
          <span className="w-2 h-2 rounded-full bg-success" />
          Delivered server-side to ad platforms
        </span>
      </div>
    </div>
  );
}
