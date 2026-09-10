"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks, serviceLinks, site } from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";
import { ChevronDownIcon, CloseIcon, MailIcon, MenuIcon, WhatsAppIcon } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
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
    <header className="sticky top-0 z-50 w-full bg-accent shadow-md">
      <div className="content-wrap flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className={`flex items-center rounded-xl bg-white shadow-md px-4 py-2 transition-transform duration-300 ease-out ${
            scrolled ? "translate-y-0" : "translate-y-2.5"
          }`}
        >
          <span className="text-[18px] font-semibold text-ink whitespace-nowrap">{site.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.href} ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex items-center gap-1 text-[15px] font-medium text-white/90 hover:text-white transition-colors"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDownIcon
                    className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full right-0 mt-4 w-72 rounded-2xl bg-white border border-border shadow-lg p-2">
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
                className="text-[15px] font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <span className="w-px h-5 bg-white/25" aria-hidden="true" />

          <WhatsAppLink className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
            <WhatsAppIcon className="w-4 h-4" />
          </WhatsAppLink>

          <Link
            href="/book-a-call/"
            className="rounded-full bg-white text-accent font-semibold text-[15px] px-5 py-2.5 hover:bg-white/90 transition-colors"
          >
            Book a Free Call
          </Link>
        </nav>

        <button
          className="md:hidden flex items-center justify-center w-11 h-11 text-white"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
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
