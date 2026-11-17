import Logo from "./Logo";
import MeasureLine from "./MeasureLine";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "Facebook", href: site.links.facebook },
    { label: "Instagram", href: site.links.instagram },
  ].filter((s) => s.href);
  return (
    <footer className="bg-ink pb-28 pt-14 text-white/75 md:pb-10">
      <div className="container-x">
        <MeasureLine animated={false} className="mb-10 opacity-60" />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 italic">{site.tagline}</p>
          </div>
          <div className="space-y-2">
            <a href={site.phoneHref} className="block text-xl font-bold text-white hover:text-amber">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="block break-all hover:text-amber">{site.email}</a>
            <p>{site.hoursDetail}</p>
            <p>{site.homeBase} · Calgary, {site.region}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="space-y-2">
              {nav.map((n) => (<li key={n.href}><a href={n.href} className="hover:text-amber">{n.label}</a></li>))}
              {/* CONFIRM WITH CLIENT: Google review link */}
              <li><a href={site.links.googleReviews} className="hover:text-amber" target="_blank" rel="noopener noreferrer">Google Reviews</a></li>
              {socials.map((s) => (<li key={s.label}><a href={s.href} className="hover:text-amber" target="_blank" rel="noopener noreferrer">{s.label}</a></li>))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-sm">{site.services.map((s) => s.title).join(" · ")} · Commercial &amp; Facility Services</p>
        <p className="mt-6 text-sm text-white/50">© {year} {site.name}, Calgary, {site.regionLong}</p>
      </div>
    </footer>
  );
}
