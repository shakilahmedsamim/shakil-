"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { MenuIcon, CloseIcon } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur transition-all duration-200 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="content-wrap flex items-center justify-between px-6">
        <Link href="/" className="text-[19px] font-semibold text-ink">
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
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

      {open && (
        <div className="fixed inset-0 z-50 bg-background md:hidden flex flex-col">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-4 text-[20px] font-medium text-ink border-b border-border"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
