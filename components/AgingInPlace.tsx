import { Accessibility, Grip, StretchHorizontal } from "lucide-react";
import QuoteLink from "./QuoteLink";
import Reveal from "./Reveal";

const items = [
  { icon: Grip, title: "Grab bars", body: "In the bathroom, by the tub, wherever you need a steady hand." },
  { icon: StretchHorizontal, title: "Railings", body: "Stairs, steps and entries that feel solid underfoot." },
  { icon: Accessibility, title: "Mobility upgrades", body: "Small changes that make it easier to stay in the home you love." },
];

export default function AgingInPlace() {
  return (
    <section aria-labelledby="aging-title" className="bg-cream-dark py-14">
      <div className="container-x">
        <Reveal className="flex flex-col gap-8 rounded-card border-2 border-dashed border-amber/70 bg-white p-6 sm:p-8 lg:flex-row lg:items-center">
          <div className="lg:w-1/3">
            <span className="eyebrow">Aging in place Calgary</span>
            <h2 id="aging-title" className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">Safety &amp; aging in place</h2>
            <QuoteLink service="Safety & Aging in Place" className="btn-outline-dark mt-5">Ask About Safety Upgrades</QuoteLink>
          </div>
          <ul className="grid flex-1 gap-5 sm:grid-cols-3">
            {items.map((i) => (
              <li key={i.title} className="flex gap-3 sm:flex-col">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-pine text-amber"><i.icon className="h-6 w-6" aria-hidden="true" /></div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase">{i.title}</h3>
                  <p className="text-sm">{i.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
