import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section id="faq" className="section bg-cream-dark">
      <div className="container-x max-w-3xl">
        <Reveal>
          <span className="eyebrow">Questions</span>
          <h2 className="h2">Handyman FAQ</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group card p-0 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-4 rounded-card px-6 py-4 font-semibold text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber/60">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-6 pb-5">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-primary">Still wondering? Call {site.phoneDisplay}</a>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
