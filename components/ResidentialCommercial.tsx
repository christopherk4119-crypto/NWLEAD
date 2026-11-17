import Image from "next/image";
import { Building2, Home } from "lucide-react";
import Reveal from "./Reveal";
import QuoteLink from "./QuoteLink";
import { site } from "@/lib/site";

const residential = ["Home repairs & maintenance", "Drywall & ceiling repair", "Painting", "Installs & assembly", "Aging-in-place upgrades"];
const commercial = ["Facility services", "Tenant improvements", "Office repairs", "Condo & property maintenance"];

export default function ResidentialCommercial() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Homes and businesses</span>
          <h2 className="h2">Homeowners and property managers both call Cam.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="card flex flex-col p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-card bg-pine text-amber"><Home className="h-7 w-7" aria-hidden="true" /></div>
            <h3 className="mt-5 font-display text-3xl font-bold uppercase">Residential</h3>
            <p className="mt-2">The fixes and upgrades that make your place feel finished.</p>
            <ul className="mt-5 space-y-2">
              {residential.map((r) => (<li key={r} className="flex gap-2"><span className="text-amber-deep" aria-hidden="true">▸</span>{r}</li>))}
            </ul>
            <div className="mt-auto pt-8">
              <QuoteLink service="Repairs & Maintenance" className="btn-primary">Book a Free Estimate</QuoteLink>
            </div>
          </Reveal>

          <Reveal delay={100} className="card flex flex-col overflow-hidden bg-pine text-white/85">
            <Image
              src="/images/commercial-office-hallway.jpg"
              alt="Clean office hallway in a commercial building"
              width={1200}
              height={600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-card bg-amber text-ink"><Building2 className="h-7 w-7" aria-hidden="true" /></div>
                <h3 className="font-display text-3xl font-bold uppercase !text-white">Commercial</h3>
              </div>
              <p className="mt-3">Commercial handyman work in Calgary. We work with building management so your job gets done.</p>
              <ul className="mt-5 space-y-2">
                {commercial.map((c) => (<li key={c} className="flex gap-2"><span className="text-amber" aria-hidden="true">▸</span>{c}</li>))}
              </ul>
              {/* CONFIRM WITH CLIENT: permission to name these commercial clients */}
              <p className="mt-6 text-sm text-white/70">Trusted by businesses including {site.commercialClients.join(", ")} and others.</p>
              <div className="mt-auto pt-8">
                <QuoteLink service="Commercial / Office Work" className="btn-primary">Request a Commercial Quote</QuoteLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
