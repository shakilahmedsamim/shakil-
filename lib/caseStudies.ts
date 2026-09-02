export type CaseStudy = {
  slug: string;
  industry: string;
  headline: string;
  problem: string;
  fix: string;
  stats: { label: string; value: string }[];
  quote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hvac-plumbing-home-services",
    industry: "HVAC, Plumbing & Home Services",
    headline: "Fixing Tracking Before Scaling Spend",
    problem:
      "[Client to supply the one-sentence starting problem, for example: conversions were being double-counted and Local Services Ads leads were not tied to the campaign that produced them.]",
    fix:
      "[Client to supply the specific tracking or campaign fix applied, for example: rebuilt GA4 event tracking, verified Enhanced Conversions for Leads, and connected Local Services Ads call tracking.]",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "personal-injury-family-law",
    industry: "Personal Injury & Family Law",
    headline: "Attributing Phone Call Conversions Accurately",
    problem:
      "[Client to supply the one-sentence starting problem, for example: high cost-per-click keywords were bidding on incomplete data because phone call conversions were not tracked.]",
    fix:
      "[Client to supply the specific fix applied, for example: implemented call tracking tied to the originating keyword and campaign, feeding qualified calls back into Smart Bidding.]",
    stats: [
      { label: "Qualified Calls", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "medical-aesthetics-cosmetic-dentistry",
    industry: "Medical Aesthetics & Cosmetic Dentistry",
    headline: "Bridging Online Forms to In-Clinic Bookings",
    problem:
      "[Client to supply the one-sentence starting problem, for example: online form conversions were tracked, but in-clinic consultations that closed were never fed back to the ad account.]",
    fix:
      "[Client to supply the specific fix applied, for example: built an offline conversion import from the booking system so a completed consultation counts as a real conversion.]",
    stats: [
      { label: "Booked Consults", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "immigration-family-law",
    industry: "Immigration & Family Law",
    headline: "Adding Tracking Where There Was None",
    problem:
      "[Client to supply the one-sentence starting problem, for example: the account had no conversion tracking beyond a bare contact form, so Smart Bidding had nothing to optimize toward.]",
    fix:
      "[Client to supply the specific fix applied, for example: installed Google tag and GA4 event tracking, verified Enhanced Conversions for Leads, and set up offline conversion imports for signed retainers.]",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "b2b-professional-managed-services",
    industry: "B2B Professional & Managed Services",
    headline: "Connecting a Long Sales Cycle Back to the Ad Click",
    problem:
      "[Client to supply the one-sentence starting problem, for example: deals took weeks to close, so there was no way to prove which campaigns were actually producing signed contracts.]",
    fix:
      "[Client to supply the specific fix applied, for example: built a CRM-to-ad-platform pipeline so a deal marked Closed Won pushes an offline conversion back to the ad account.]",
    stats: [
      { label: "Closed Deals", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "residential-cleaning-services",
    industry: "Residential Cleaning Services",
    headline: "Rebuilding Campaigns Around High-Intent Local Searches",
    problem:
      "[Client to supply the one-sentence starting problem, for example: broad-match keywords were pulling in low-intent clicks and lead volume had stalled.]",
    fix:
      "[Client to supply the specific fix applied, for example: restructured campaigns around high-intent local search terms and verified call and form tracking.]",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
];
