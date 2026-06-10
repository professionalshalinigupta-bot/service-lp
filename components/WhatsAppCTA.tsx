"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_PHONE = "9779811852942";
const DEFAULT_WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

type LeadDetails = {
  name?: string;
  email?: string;
  whatsapp?: string;
  business?: string;
  website?: string;
};

function buildMessage(details: LeadDetails) {
  const lines = [
    "Hi Shalini, I just booked my free consultation call.",
    "",
    "My details:",
    `Name: ${details.name || ""}`,
    `Email: ${details.email || ""}`,
    `WhatsApp: ${details.whatsapp || ""}`,
    `Business: ${details.business || ""}`,
    `Website/Facebook: ${details.website || ""}`
  ];

  return lines.join("\n");
}

export default function WhatsAppCTA({ whatsappUrl }: { whatsappUrl?: string }) {
  const [href, setHref] = useState(whatsappUrl || DEFAULT_WHATSAPP_URL);

  useEffect(() => {
    const saved = window.sessionStorage.getItem("consultationLeadDetails");
    const details = saved ? (JSON.parse(saved) as LeadDetails) : {};
    const message = encodeURIComponent(buildMessage(details));
    const baseUrl = whatsappUrl || DEFAULT_WHATSAPP_URL;
    const separator = baseUrl.includes("?") ? "&" : "?";

    setHref(`${baseUrl}${separator}text=${message}`);
  }, [whatsappUrl]);

  return (
    <div className="flex flex-col items-center">
      <a
        href={href}
        className="focus-ring mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-[8px] bg-[#1FAF64] px-7 text-base font-bold text-white shadow-[0_18px_45px_rgba(31,175,100,0.24)] transition hover:bg-[#178F51]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
