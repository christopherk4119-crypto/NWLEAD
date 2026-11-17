import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function ServiceArea() {
  return (
    <section id="area" className="section bg-cream">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Service area</span>
          <h2 className="h2">Serving NW Calgary &amp; all of Calgary</h2>
          <p className="mt-4 text-lg">
            Cam is based in {site.homeBase}, near Arbour Lake, and takes jobs right across the city.
          </p>
          {/* CONFIRM WITH CLIENT: surrounding towns (none listed yet) */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.areaChips.map((a, i) => (
              <li key={a} className={`rounded-full px-4 py-2 text-sm font-semibold ${i === 0 ? "bg-amber text-ink" : "border border-pine/30 bg-white text-pine"}`}>{a}</li>
            ))}
          </ul>
          <a href={site.phoneHref} className="btn-primary mt-8">Not sure if we cover you? Call {site.phoneDisplay}</a>
        </Reveal>

        <Reveal delay={100}>
          {/* Stylized map: Calgary quadrants with NW highlighted. Decorative. */}
          <svg viewBox="0 0 400 320" className="w-full" role="img" aria-label="Simple map of Calgary with the northwest quadrant highlighted">
            <rect x="0" y="0" width="400" height="320" rx="16" fill="#1F4D47" />
            <g stroke="#FAF6EF" strokeOpacity=".08">
              {Array.from({ length: 12 }).map((_, i) => (<line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="320" />))}
              {Array.from({ length: 10 }).map((_, i) => (<line key={`h${i}`} x1="0" y1={i * 36} x2="400" y2={i * 36} />))}
            </g>
            <path d="M40 40h150v120H40z" fill="#F2A33A" fillOpacity=".9" />
            <path d="M210 40h150v120H210zM40 180h150v100H40zM210 180h150v100H210z" fill="#FAF6EF" fillOpacity=".12" />
            {/* Bow River */}
            <path d="M0 150 C 80 120, 120 190, 200 165 S 320 130, 400 190" fill="none" stroke="#9ec9c1" strokeWidth="6" strokeLinecap="round" strokeOpacity=".7" />
            <line x1="200" y1="20" x2="200" y2="300" stroke="#F2A33A" strokeWidth="2" strokeDasharray="6 6" />
            <line x1="20" y1="170" x2="380" y2="170" stroke="#F2A33A" strokeWidth="2" strokeDasharray="6 6" />
            <text x="115" y="95" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="26" fill="#14211F">NW</text>
            <text x="115" y="122" textAnchor="middle" fontFamily="sans-serif" fontWeight="600" fontSize="13" fill="#14211F">Home base</text>
            <text x="285" y="105" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="22" fill="#FAF6EF" fillOpacity=".7">NE</text>
            <text x="115" y="240" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="22" fill="#FAF6EF" fillOpacity=".7">SW</text>
            <text x="285" y="240" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="22" fill="#FAF6EF" fillOpacity=".7">SE</text>
            <circle cx="70" cy="62" r="9" fill="#14211F" /><circle cx="70" cy="62" r="4" fill="#F2A33A" />
          </svg>
          <p className="mt-3 flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4 text-amber-deep" aria-hidden="true" />Calgary, {site.region}</p>
        </Reveal>
      </div>
    </section>
  );
}
