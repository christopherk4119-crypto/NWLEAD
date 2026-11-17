import { site } from "@/lib/site";

export default function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    image: `${site.url}/images/hero-home-interior.jpg`,
    telephone: "+1-403-891-6380",
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: site.country },
    areaServed: site.serviceAreas.map((a) => ({ "@type": "Place", name: a === "All of Calgary" ? "Calgary, AB" : `${a}, Calgary, AB` })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handyman services",
      itemListElement: site.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.description } })),
    },
    // sameAs: [site.links.googleReviews] — CONFIRM WITH CLIENT
  };
  // openingHours — CONFIRM WITH CLIENT (only "closes 9 p.m." known)
  if (site.openingHoursSchema) data.openingHours = site.openingHoursSchema;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
