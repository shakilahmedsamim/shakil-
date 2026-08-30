import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Google Ads, Meta Ads and Conversion Tracking`,
    template: `%s | ${site.name}`,
  },
  description:
    "Google Ads and Meta Ads management with full online and offline conversion tracking for local service businesses and B2B companies in the UK, US, and Canada.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Google Ads, Meta Ads and Conversion Tracking`,
    description:
      "Google Ads and Meta Ads management with full online and offline conversion tracking for local service businesses and B2B companies in the UK, US, and Canada.",
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: `${site.name} | Google Ads, Meta Ads and Conversion Tracking`,
    description:
      "Google Ads and Meta Ads management with full online and offline conversion tracking for local service businesses and B2B companies in the UK, US, and Canada.",
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
      "Google Ads and Meta Ads management with online and offline conversion tracking for local service businesses and B2B companies.",
    sameAs: [],
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
