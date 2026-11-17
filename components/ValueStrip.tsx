import { site } from "@/lib/site";

export default function ValueStrip() {
  return (
    <section aria-label="Call or text" className="bg-amber">
      <div className="container-x flex flex-col items-center justify-center gap-2 py-5 text-center font-display text-2xl font-bold uppercase text-ink sm:flex-row sm:gap-4 sm:text-3xl">
        <span>One call. The whole to-do list.</span>
        <span className="hidden sm:inline" aria-hidden="true">|</span>
        <span>
          Call or text <a href={site.phoneHref} className="underline decoration-2 underline-offset-4 hover:text-pine">{site.phoneDisplay}</a>
        </span>
      </div>
    </section>
  );
}
