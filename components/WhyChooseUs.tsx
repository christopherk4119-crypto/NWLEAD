import Reveal from "./Reveal";
import { site } from "@/lib/site";

const blocks = [
  { emoji: "📞", title: "We actually call you back", body: "One customer said another company took 3 days to call back. Cam called right away. That's the standard." },
  { emoji: "🙋", title: "You talk to the owner", body: "Cam books the job, gives the estimate and does the work. A real person, not a franchise call centre." },
  { emoji: "🧱", title: "Drywall specialist", body: "Patching, mudding, taping and ceiling texture matching is what Cam's known for, backed by 25 years of experience." },
  { emoji: "🛡️", title: "Licensed, insured & guaranteed", body: `${site.trust.licensed}. Our work is ${site.trust.guarantee}.` },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Handyman NW Calgary</span>
          <h2 className="h2">Why NW Calgary calls Cam</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="card p-6">
              <div className="text-4xl" aria-hidden="true">{b.emoji}</div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight">{b.title}</h3>
              <p className="mt-2">{b.body}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-primary">Book a Free Estimate</a>
          <a href={site.smsHref} className="btn-outline-dark">Text {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
