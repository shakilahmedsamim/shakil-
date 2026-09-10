"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks, serviceLinks, site } from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";
import { ChevronDownIcon, CloseIcon, MailIcon, MenuIcon, StarIcon, WhatsAppIcon } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      if (y < 80) {
        setTopBarVisible(true);
      } else if (y > lastScrollY.current) {
        setTopBarVisible(false);
      } else {
        setTopBarVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`hidden md:block bg-ink overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          topBarVisible ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="content-wrap flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 text-[13px] text-[#B0B0B5] hover:text-white transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5" />
              {site.email}
            </a>
            <WhatsAppLink className="flex items-center gap-1.5 text-[13px] text-[#B0B0B5] hover:text-white transition-colors">
              <WhatsAppIcon className="w-3.5 h-3.5" />
              +{site.whatsappNumber}
            </WhatsAppLink>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[13px] text-[#B0B0B5]">
              Serving clients across the {site.regions}
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-white font-medium">
              <StarIcon className="w-3.5 h-3.5 text-accent" />
              Google Partner
            </span>
          </div>
        </div>
      </div>

      <div
        className={`w-full border-b border-border bg-background/95 backdrop-blur transition-all duration-200 ${
          scrolled ? "py-2 shadow-sm" : "py-4"
        }`}
      >
        <div className="content-wrap flex items-center justify-between px-6">
          <Link href="/" className="text-[19px] font-semibold text-ink">
            {site.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.href} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 text-[16px] font-medium text-ink hover:text-accent transition-colors"
                    aria-expanded={servicesOpen}
                  >
                    Services
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-white border border-border shadow-lg p-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-3 py-2.5 rounded-lg text-[15px] text-ink hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[16px] font-medium text-ink hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/book-a-call/" className="btn-primary !py-2.5 !px-5 text-[15px]">
              Book a Free Call
            </Link>
          </nav>

          <button
            className="md:hidden flex items-center justify-center w-11 h-11 text-ink"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background md:hidden flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="text-[19px] font-semibold text-ink">{site.name}</span>
            <button
              className="flex items-center justify-center w-11 h-11 text-ink"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <Link
            href="/book-a-call/"
            className="btn-primary mx-6 mt-6"
            onClick={() => setOpen(false)}
          >
            Book a Free Call
          </Link>

          <nav className="flex flex-col gap-1 px-6 mt-8">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.href} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-4 text-[20px] font-medium text-ink"
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col pb-3">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setOpen(false)}
                          className="py-2.5 text-[16px] text-neutral"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-4 text-[20px] font-medium text-ink border-b border-border"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex flex-col gap-3 px-6 mt-6 pt-6 border-t border-border">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-[15px] text-neutral">
              <MailIcon className="w-4 h-4" />
              {site.email}
            </a>
            <WhatsAppLink className="flex items-center gap-2 text-[15px] text-neutral">
              <WhatsAppIcon className="w-4 h-4" />
              +{site.whatsappNumber}
            </WhatsAppLink>
          </div>
        </div>
      )}
    </header>
  );
}
