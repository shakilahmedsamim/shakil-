"use client";

import { site } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function WhatsAppLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick()}
      className={className}
    >
      {children}
    </a>
  );
}
