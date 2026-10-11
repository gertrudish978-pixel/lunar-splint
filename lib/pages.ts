// Site pages, in nav order. Used by the nav and the home page cards.
export const pages = [
  { slug: "challenge", label: "Challenge", blurb: "Why a lunar base needs its own splint, and the constraints the Moon adds." },
  { slug: "design", label: "Design", blurb: "Our Achilles splint: spec sheet, innovations, concept sketch and mass budget." },
  { slug: "survey", label: "Survey", blurb: "What 56 classmates told us about fit, comfort and 3D-printed devices." },
  { slug: "research", label: "Research", blurb: "Photos and notes from our design notebook and athletic-trainer interview." },
  { slug: "roadmap", label: "Roadmap", blurb: "The five deliverables and our path through PDR, CDR and FDR." },
  { slug: "team", label: "Team", blurb: "Meet Team Lunova and our teachers." },
] as const;
