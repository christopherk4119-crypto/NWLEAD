/**
 * ALL business details live here. Edit this file to update the whole site.
 * Anything marked // CONFIRM WITH CLIENT is a placeholder or unverified.
 */

export type ServiceIcon =
  | "drywall"
  | "wrench"
  | "hammer"
  | "paint"
  | "plug"
  | "fence"
  | "trees"
  | "bath"
  | "shield";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export const site = {
  name: "Handyman Calgary NW",
  ownerFirstName: "Cam",
  ownerLastName: "", // CONFIRM WITH CLIENT
  tagline: "Helping you make time for the rest of your life!",

  phoneDisplay: "403-891-6380",
  phoneHref: "tel:+14038916380",
  smsHref: "sms:+14038916380",
  email: "handymancalgarynw@gmail.com",

  // Service-area business: street address is intentionally NOT shown.
  homeBase: "NW Calgary",
  city: "Calgary",
  region: "AB",
  regionLong: "Alberta",
  country: "CA",

  // Google shows "closes 9 p.m." only. CONFIRM WITH CLIENT: full days/hours.
  hoursShort: "Open until 9 p.m.",
  hoursDetail: "Open until 9 p.m. (full hours coming soon)", // CONFIRM WITH CLIENT
  openingHoursSchema: null as string | null, // e.g. "Mo-Su 08:00-21:00" — CONFIRM WITH CLIENT

  // PHOTOS (max 3). null = show the branded graphic instead. To use a photo, drop it in
  // /public/images/ and set the path, e.g. hero: "/images/hero-home-interior.jpg". See CREDITS.md.
  photos: {
    hero: null as string | null,
    drywall: null as string | null,
    commercial: null as string | null,
  },

  url: "https://www.handymancalgarynw.com", // CONFIRM WITH CLIENT: final domain

  links: {
    googleReviews: "#", // CONFIRM WITH CLIENT: Google Business Profile review link
    facebook: "", // CONFIRM WITH CLIENT (leave empty to hide)
    instagram: "", // CONFIRM WITH CLIENT (leave empty to hide)
  },

  // Stated by the business on their current site.
  trust: {
    experience: "25 years of experience",
    licensed: "Licensed, insured & WCB-compliant", // CONFIRM WITH CLIENT: which licence(s)/scope
    guarantee: "100% guaranteed", // CONFIRM WITH CLIENT: written guarantee terms
    freeEstimates: true,
  },

  // CONFIRM WITH CLIENT: surrounding towns (Cochrane, Airdrie, etc.?) — none listed yet.
  serviceAreas: [
    "NW Calgary",
    "Arbour Lake",
    "All of Calgary",
  ],
  // Shown as chips on the service-area map. Only Calgary quadrants (they serve all of Calgary).
  areaChips: ["NW Calgary", "Arbour Lake", "NE Calgary", "SW Calgary", "SE Calgary", "Downtown Calgary"],

  services: [
    {
      id: "drywall",
      title: "Drywall & Ceiling Repair",
      description:
        "Holes, cracks and water damage patched, mudded and taped. Popcorn and textured ceilings matched so the repair disappears.",
      icon: "drywall",
    },
    {
      id: "repairs",
      title: "Repairs & Maintenance",
      description:
        "Leaky taps, running toilets, slow drains, sticky drawers and tired caulking. The small stuff that piles up.",
      icon: "wrench",
    },
    {
      id: "carpentry",
      title: "Carpentry & Custom Builds",
      description:
        "Framing, closets built to fit, shelving (glass too) and one-off builds, like a kids' climbing wall.",
      icon: "hammer",
    },
    {
      id: "painting",
      title: "Painting, Flooring & Tile",
      description: "Fresh paint, new floors and tile work, done tidy and finished properly.",
      icon: "paint",
    },
    {
      id: "installs",
      title: "Assembly & Installs",
      description:
        "Furniture assembly, blinds, smart doorbells and light fixture changes. Unboxed, put together, put up.",
      icon: "plug",
    },
    {
      id: "decks",
      title: "Decks, Fences & Pergolas",
      description: "Wood and cedar decks, fences and pergolas, built new or repaired.",
      icon: "fence",
    },
    {
      id: "landscape",
      title: "Landscaping & Hardscape",
      description:
        "Allan Block retaining walls, patio stones, sidewalks, flower beds, plus tree planting and pruning.",
      icon: "trees",
    },
    {
      id: "remodels",
      title: "Remodels & Pre-Listing Repairs",
      description:
        "Basement and bathroom remodels, and the fix-up list before you sell your home.",
      icon: "bath",
    },
    {
      id: "safety",
      title: "Safety & Aging in Place",
      description:
        "Grab bars, railings and mobility upgrades that make home easier and safer to live in.",
      icon: "shield",
    },
  ] satisfies Service[],

  // Extra dropdown options in the quote form (in addition to the services above)
  extraFormOptions: ["Commercial / Office Work", "Other"],

  // Commercial clients shown as logos on their old site.
  // CONFIRM WITH CLIENT: permission to name these publicly.
  commercialClients: ["National Bank of Canada", "Lifemark"],

  colors: {
    darkBase: "#1F4D47", // pine green
    lightBase: "#FAF6EF", // cream
    cta: "#F2A33A", // amber (use dark text on it)
    ctaHover: "#D98A1F",
    text: "#4B5563", // slate
  },
} as const;

// Real Google reviews — word for word (first name + last initial). No ratings/counts shown.
export const reviews = [
  {
    name: "Trevor M.",
    text: "We hired Cam to handle our ceiling repairs and some drywall finishing, and they did a great job. They blended the patches into the ceiling so well you can't see where the work was done. The drywall finishing on the walls was perfectly prepped for painting. Excellent craftsmanship and great communication.",
  },
  {
    name: "Cher L.",
    text: "Had a big hole in my living room wall after removing a gas fireplace. Thanks to Cam that hole is now gone and covered up perfectly as if it never existed. Thanks Cam! You will definitely be hearing from me in the future if I need more help.",
  },
  {
    name: "Paige C.",
    text: "Unbelievably responsive, professional, kind and knowledgeable. 100% recommend for any of your handy man needs! Thank you so much Cam, I will recommend you time and time again.",
  },
  {
    name: "Brenda P.",
    note: "Commercial client",
    text: "Our company hired Cam to do work in our Calgary office. There were a lot of road blocks from the building management, but Cam navigated them professionally and with expertise. Will definitely be using Handyman for any future projects.",
  },
  {
    name: "Tom R.",
    text: "Cam built a climbing wall for my grandkids. He did what we agreed, when we agreed with excellent quality and a reasonable price. Good experience - I would hire him again.",
  },
  {
    name: "Brendan W.",
    text: "Excellent quality work. Started and completed the project quickly. Cam and team were super knowledgeable and also very friendly to work with.",
  },
] as const;

export const formServiceOptions = [
  ...site.services.map((s) => s.title),
  ...site.extraFormOptions,
];

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Drywall", href: "#drywall" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
