import { Footprints, Layers, Mountain, Fence, ImageIcon } from "lucide-react";
import Reveal from "./Reveal";
import QuoteLink from "./QuoteLink";

// REPLACE WITH CLIENT'S REAL PROJECT PHOTOS (they have these on their current site and in their Google reviews).
// No stock photos here by design. Swap each tile's gradient for <Image src="/images/project-*.jpg" ... />.
const projects = [
  { title: "NW Condo Deck: Treated 2x6 on Deck Blocks", icon: Fence, gradient: "from-[#1F4D47] to-[#2f6b62]" },
  { title: "NW Patio Stone Sidewalk", icon: Footprints, gradient: "from-[#4B5563] to-[#1F4D47]" },
  { title: "Popcorn Ceiling Repair & Texture Match", icon: Layers, gradient: "from-[#163833] to-[#4B5563]" },
  { title: "Kids' Climbing Wall", icon: Mountain, gradient: "from-[#2f6b62] to-[#163833]" },
];

export default function PastProjects() {
  return (
    <section id="projects" className="section bg-pine">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow !text-amber">Recent work</span>
          <h2 className="h2 !text-white">Past projects around Calgary</h2>
          <p className="mt-4 text-lg text-white/80">A few jobs Cam has done for neighbours. Photos coming soon.</p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <figure className={`relative flex aspect-square flex-col justify-between overflow-hidden rounded-card bg-gradient-to-br ${p.gradient} p-4 text-white shadow-soft sm:p-5`}>
                <div className="flex items-start justify-between">
                  <p.icon className="h-9 w-9 text-amber" aria-hidden="true" />
                  <ImageIcon className="h-4 w-4 text-white/40" aria-label="Photo coming soon" />
                </div>
                <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-amber/30" aria-hidden="true" />
                <figcaption className="relative font-display text-lg font-bold uppercase leading-tight sm:text-xl">{p.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <div className="mt-10">
          <QuoteLink className="btn-primary">Start Your Project</QuoteLink>
        </div>
      </div>
    </section>
  );
}
