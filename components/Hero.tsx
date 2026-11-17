import Image from "next/image";
import { Check, MessageSquare, Phone } from "lucide-react";
import MeasureLine from "./MeasureLine";
import { site } from "@/lib/site";

const trust = [
  `Based in ${site.homeBase}`,
  site.trust.experience,
  "Free estimates",
  "Residential & commercial",
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-pine pt-[72px]">
      <Image
        src="/images/hero-home-interior.jpg"
        alt="Bright, tidy living room in a Calgary home"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-pine/80 to-pine/40" />

      <div className="container-x py-16">
        <div className="max-w-2xl">
          <p className="eyebrow !text-amber">NW Calgary&apos;s owner-operated handyman</p>
          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Your to-do list, done right.
            <span className="mt-2 block text-amber">Calgary&apos;s NW Handyman.</span>
          </h1>
          <MeasureLine className="my-6 max-w-sm" />
          <p className="max-w-xl text-lg text-white/90 sm:text-xl">
            Cam handles the repairs, installs and projects you keep putting off. Drywall and ceiling repair,
            carpentry, painting, decks, fixtures and assembly, for homes and businesses across Calgary.
            And yes, we actually call you back.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary text-lg">Book a Free Estimate</a>
            <a href={site.phoneHref} className="btn-outline-light text-lg"><Phone className="h-5 w-5" aria-hidden="true" />Call {site.phoneDisplay}</a>
            <a href={site.smsHref} className="btn-outline-light text-lg" aria-label={`Text ${site.phoneDisplay}`}><MessageSquare className="h-5 w-5" aria-hidden="true" /><span className="sm:sr-only">Text Us</span></a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 text-white sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber text-ink"><Check className="h-4 w-4" aria-hidden="true" /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
