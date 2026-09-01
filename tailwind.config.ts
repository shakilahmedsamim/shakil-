import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        ink: "#1D1D1F",
        accent: "#0066FF",
        "accent-dark": "#0052CC",
        neutral: "#6E6E73",
        success: "#0A7D4F",
        border: "#E5E5E7",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "hero-desktop": ["56px", { lineHeight: "1.4", fontWeight: "600" }],
        "hero-mobile": ["34px", { lineHeight: "1.4", fontWeight: "600" }],
        "h2-desktop": ["40px", { lineHeight: "1.4", fontWeight: "600" }],
        "h2-mobile": ["28px", { lineHeight: "1.4", fontWeight: "600" }],
        "h3-desktop": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "h3-mobile": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["19px", { lineHeight: "1.6" }],
        "body-lg-mobile": ["17px", { lineHeight: "1.6" }],
        body: ["17px", { lineHeight: "1.6" }],
        "body-mobile": ["16px", { lineHeight: "1.6" }],
        caption: ["13px", { lineHeight: "1.4", fontWeight: "500" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "70ch",
      },
      spacing: {
        "section-desktop": "96px",
        "section-mobile": "56px",
      },
      borderRadius: {
        btn: "8px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "flow-pulse": {
          "0%": { left: "-12%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "108%", opacity: "0" },
        },
      },
      animation: {
        // 84s = 28s x 3, matching the tripled row width in LogoMarquee so
        // the per-logo scroll speed stays the same as an untripled pass.
        marquee: "marquee 84s linear infinite",
        // Separate, slower timing for the wider review cards in
        // ReviewsSection, which only need a single duplicated pass (no
        // tripling) since each card is already much wider than a logo.
        "marquee-reviews": "marquee 50s linear infinite",
        // A signal travelling along the "How It Works" connector line.
        "flow-pulse": "flow-pulse 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
