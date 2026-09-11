import fs from "fs";
import path from "path";
import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const founderPhotoExists = fs.existsSync(
  path.join(process.cwd(), "public/images/uploads/about-founder.jpg")
);

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="content-wrap px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            {founderPhotoExists ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/images/uploads/about-founder.jpg"
                alt="Shakil"
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
            ) : (
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-white font-bold text-[15px] shrink-0">
                P
              </span>
            )}
            <p className="text-[20px] font-bold tracking-tight text-ink">
              <span className="text-accent">PPC</span> Shakil
            </p>
          </div>
          <p className="caption-copy mt-3 max-w-[32ch]">
            Google Ads management and cross-platform conversion tracking for
            local service businesses and B2B companies across the{" "}
            {site.regions}.
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
          <p className="caption-copy uppercase tracking-wide mb-3">Services</p>
          <ul className="flex flex-col gap-2 text-[15px] text-ink">
            <li><Link href="/google-ads-management/" className="hover:text-accent">Google Ads Management</Link></li>
            <li><Link href="/google-ads-audit/" className="hover:text-accent">Google Ads Audit</Link></li>
            <li><Link href="/conversion-tracking/" className="hover:text-accent">Conversion Tracking</Link></li>
            <li><Link href="/landing-page-optimization/" className="hover:text-accent">Landing Page Optimization</Link></li>
          </ul>
        </div>

        <div>
          <p className="caption-copy uppercase tracking-wide mb-3">Contact</p>
          <ul className="flex flex-col gap-2 text-[15px] text-ink">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
            </li>
            <li>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Message on WhatsApp
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
          <p className="caption-copy">Google Partner</p>
        </div>
      </div>
    </footer>
  );
}
