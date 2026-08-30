import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="content-wrap px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-[19px] font-semibold text-ink">{site.name}</p>
          <p className="caption-copy mt-3 max-w-[32ch]">
            Google Ads, Meta Ads, and full online and offline conversion
            tracking for local service businesses and B2B companies across
            the {site.regions}.
          </p>
        </div>

        <div>
          <p className="caption-copy uppercase tracking-wide mb-3">Site</p>
          <ul className="flex flex-col gap-2 text-[15px] text-ink">
            <li><Link href="/about/" className="hover:text-accent">About</Link></li>
            <li><Link href="/services/" className="hover:text-accent">Services</Link></li>
            <li><Link href="/case-study/" className="hover:text-accent">Case Study</Link></li>
            <li><Link href="/contact/" className="hover:text-accent">Contact</Link></li>
            <li><Link href="/book-a-call/" className="hover:text-accent">Book a Free Call</Link></li>
          </ul>
        </div>

        <div>
          <p className="caption-copy uppercase tracking-wide mb-3">Contact</p>
          <ul className="flex flex-col gap-2 text-[15px] text-ink">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
            </li>
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                WhatsApp: +{site.whatsappNumber}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="caption-copy uppercase tracking-wide mb-3">Legal</p>
          <ul className="flex flex-col gap-2 text-[15px] text-ink">
            <li><Link href="/privacy-policy/" className="hover:text-accent">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="content-wrap px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="caption-copy">
            &copy; {new Date().getFullYear()} {site.name}. Serving clients across the UK, US, and Canada.
          </p>
          <p className="caption-copy">Google Partner &middot; Meta Business Partner</p>
        </div>
      </div>
    </footer>
  );
}
