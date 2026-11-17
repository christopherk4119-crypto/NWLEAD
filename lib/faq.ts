import { site } from "./site";

export const faqs = [
  {
    q: "Are estimates free?",
    a: "Yes. Tell us about the job, we'll book a time that suits you, then give you an estimate of the cost and how long it will take.",
  },
  {
    q: "Do you take small jobs?",
    a: "Yes. A lot of what we do is the small stuff: a leaky tap, a hole in the drywall, a light fixture, some caulking. Bundle a few together and knock out the list in one visit.",
  },
  {
    q: "Can you match my popcorn or textured ceiling?",
    a: "Yes. Ceiling repair and texture matching is part of our drywall specialty. The goal is a patch you can't find.",
  },
  {
    q: "Are you licensed and insured?",
    // CONFIRM WITH CLIENT: which licence(s) and their scope (e.g. electrical/plumbing work)
    a: `Yes. We're ${site.trust.licensed.toLowerCase()}.`,
  },
  {
    q: "Is your work guaranteed?",
    // CONFIRM WITH CLIENT: written guarantee terms and length
    a: "Yes, our work is 100% guaranteed. Ask Cam for the details when you get your estimate.",
  },
  {
    q: "How much does a handyman cost in Calgary?",
    // CONFIRM WITH CLIENT: hourly rate / minimum charge / how pricing works
    a: "It depends on the job. The quickest way to get a real number is a free estimate. Call or text " + site.phoneDisplay + ".",
  },
];
