import Image from "next/image";
import { Phone, ClipboardCheck, Layers, PaintRoller } from "lucide-react";
import Reveal from "./Reveal";
import QuoteLink from "./QuoteLink";
import MeasureLine from "./MeasureLine";
import { site } from "@/lib/site";
import DrywallGraphic from "./DrywallGraphic";

const steps = [
  { icon: Phone, title: "Call or text", body: `Tell Cam what's going on. ${site.phoneDisplay}, or send the form.` },
  { icon: ClipboardCheck, title: "Free estimate", body: "We book a time that suits you, then give you the cost and how long it'll take." },
  { icon: Layers, title: "Repair & texture match", body: "Patch, mud and tape. Popcorn and textured ceilings matched to what's already there." },
  { icon: PaintRoller, title: "Paint-ready finish", body: "Smooth walls and crisp corners, ready for paint. You can't tell where the hole was." },
];

export default function FeaturedService() {
  return (
    <section id="drywall" className="section bg-cream">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our specialty: drywall repair Calgary</span>
            <h2 className="h2">Walls and ceilings that look like nothing ever happened.</h2>
            <p className="mt-5 text-lg">
              Drywall is what Cam is known for. Holes from a removed fireplace, cracked ceilings, water damage,
              popcorn ceiling repair. He blends the patch so well you can&apos;t find it.
            </p>
            <blockquote className="mt-6 border-l-4 border-amber pl-4 italic text-ink">
              &ldquo;They blended the patches into the ceiling so well you can&apos;t see where the work was done.&rdquo;
              <footer className="mt-1 text-sm not-italic text-slate">Trevor M., Google review</footer>
            </blockquote>
          </Reveal>
          <Reveal delay={100} className="relative">
            {site.photos.drywall ? (
              <Image src={site.photos.drywall} alt="Paint roller on a smooth, freshly finished wall" width={1200} height={900} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-card object-cover shadow-lift" />
            ) : (
              <DrywallGraphic />
            )}
          </Reveal>
        </div>

        <MeasureLine className="mt-16" />

        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 150} className="relative flex gap-4 md:flex-col">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card bg-pine text-amber">
                <s.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-widest text-amber-deep">Step {i + 1}</p>
                <h3 className="font-display text-2xl font-bold uppercase">{s.title}</h3>
                <p className="mt-1">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <QuoteLink service="Drywall & Ceiling Repair" className="btn-primary">Get a Drywall Estimate</QuoteLink>
          <a href={site.phoneHref} className="btn-outline-dark">Call {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
