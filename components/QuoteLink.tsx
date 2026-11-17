"use client";
import type { ReactNode } from "react";

/** Scrolls to the quote form and pre-selects a service in the dropdown. */
export function selectService(service?: string) {
  if (service) window.dispatchEvent(new CustomEvent("prefill-service", { detail: service }));
}

export default function QuoteLink({ service, className = "", children }: { service?: string; className?: string; children: ReactNode }) {
  return (
    <a href="#contact" className={className} onClick={() => selectService(service)}>
      {children}
    </a>
  );
}
