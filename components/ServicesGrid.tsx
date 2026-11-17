import Reveal from "./Reveal";
import QuoteLink from "./QuoteLink";
import ServiceIcon from "./ServiceIcon";
import { site } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <section id="services" className="section bg-pine text-white/85">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow !text-amber">Handyman services in Calgary</span>
          <h2 className="h2 !text-white">Everything on the list. One call.</h2>
          <p className="mt-4 text-lg">
            Small repairs, installs and bigger projects, inside and out. If it&apos;s on your to-do list, ask.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col rounded-card border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-[0_0_0_1px_#F2A33A,0_18px_40px_-14px_rgba(0,0,0,0.5)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-card bg-amber text-ink">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase !text-white">{s.title}</h3>
                <p className="mt-2 flex-1">{s.description}</p>
                <QuoteLink service={s.title} className="mt-5 inline-flex min-h-[44px] items-center font-semibold text-amber hover:underline">
                  Get Quote <span aria-hidden="true">&nbsp;→</span>
                </QuoteLink>
              </article>
            </Reveal>
          ))}
        </ul>
        {/* Electrical = light fixtures & small installs only. CONFIRM WITH CLIENT before listing more. */}
      </div>
    </section>
  );
}
