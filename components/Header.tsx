"use client";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "bg-pine shadow-soft" : "bg-gradient-to-b from-black/40 to-transparent"}`}>
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <a href="#top" aria-label={`${site.name} home`} className="rounded focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber/60">
          <Logo />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="flex items-center gap-1.5 text-sm text-white/85">
            <MapPin className="h-4 w-4 text-amber" aria-hidden="true" /> Serving {site.homeBase}
          </span>
          <a href={site.phoneHref} className="flex items-center gap-2 text-lg font-bold text-white hover:text-amber">
            <Phone className="h-5 w-5 text-amber" aria-hidden="true" /> {site.phoneDisplay}
          </a>
        </div>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm font-medium text-white/90">
            {nav.map((n) => (
              <li key={n.href}><a className="hover:text-amber" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !min-h-[44px] !px-4 text-sm sm:inline-flex">Book a Free Estimate</a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber/60 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-pine md:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-semibold text-white hover:text-amber">{n.label}</a>
              </li>
            ))}
            <li className="pt-2"><a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">Book a Free Estimate</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
