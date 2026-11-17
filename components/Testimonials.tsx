import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { reviews, site } from "@/lib/site";

// Real Google reviews, word for word. No star ratings or counts (not provided).
export default function Testimonials() {
  return (
    <section id="reviews" className="section bg-pine">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow !text-amber">From Google reviews</span>
          <h2 className="h2 !text-white">What neighbours say about Cam</h2>
        </Reveal>
        <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.name} delay={(i % 3) * 80} className="break-inside-avoid">
              <figure className="rounded-card bg-white p-6 shadow-soft">
                <Quote className="h-7 w-7 text-amber" aria-hidden="true" />
                <blockquote className="mt-3 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 font-semibold text-pine">
                  {r.name}
                  {"note" in r && r.note ? <span className="ml-2 text-sm font-normal text-slate">({r.note})</span> : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {/* CONFIRM WITH CLIENT: Google Business Profile review link */}
          <a href={site.links.googleReviews} className="btn-primary" target="_blank" rel="noopener noreferrer">See all reviews on Google</a>
          <a href="#contact" className="btn-outline-light">Book a Free Estimate</a>
        </div>
      </div>
    </section>
  );
}
