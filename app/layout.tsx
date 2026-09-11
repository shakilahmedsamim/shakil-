import type { Metadata, Viewport } from "next";
import fs from "fs";
import path from "path";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { site } from "@/lib/site";

const ogImagePath = path.join(process.cwd(), "public/images/uploads/og-image.jpg");
const ogImages = fs.existsSync(ogImagePath) ? [{ url: "/images/uploads/og-image.jpg", width: 1200, height: 630 }] : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Google Ads Management and Conversion Tracking`,
    template: `%s | ${site.name}`,
  },
  description:
    "Google Ads management with cross-platform conversion tracking (Google, Meta, TikTok, Pinterest) for local service businesses and B2B companies in the UK, US, and Canada.",
  authors: [{ name: "Shakil", url: `${site.url}/about/` }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Google Ads Management and Conversion Tracking`,
    description:
      "Google Ads management with cross-platform conversion tracking (Google, Meta, TikTok, Pinterest) for local service businesses and B2B companies in the UK, US, and Canada.",
    url: site.url,
    images: ogImages,
  },
  twitter: {
    card: ogImages ? "summary_large_image" : "summary",
    title: `${site.name} | Google Ads Management and Conversion Tracking`,
    description:
      "Google Ads management with cross-platform conversion tracking (Google, Meta, TikTok, Pinterest) for local service businesses and B2B companies in the UK, US, and Canada.",
    images: ogImages,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    areaServed: ["United Kingdom", "United States", "Canada"],
    description:
      "Google Ads management with cross-platform conversion tracking for local service businesses and B2B companies.",
    founder: {
      "@type": "Person",
      name: "Shakil",
      alternateName: "PPC Shakil",
      url: `${site.url}/about/`,
    },
  };

  return (
    <html lang="en">
      <body className="font-sans bg-background text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
