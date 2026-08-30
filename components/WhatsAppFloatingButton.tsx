"use client";

import { site } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/tracking";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick()}
      aria-label="Chat with us on WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-success text-white shadow-lg"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
