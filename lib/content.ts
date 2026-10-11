// Content for the site, taken from the team's challenge brief, purpose statement,
// design notebook and assessment survey. Update statuses here as decisions are made.

export type Status = "ok" | "wip" | "todo";

export const statusLabel: Record<Status, string> = {
  ok: "Decided",
  wip: "In progress",
  todo: "Not started",
};

export const heroStats = [
  { value: "$1M", label: "launch cost per kilogram of anything sent from Earth" },
  { value: "4–8 h", label: "from injury to a printed, custom-fitted splint" },
  { value: "1/6 g", label: "lunar gravity: about 83% less load along the bone" },
];

export const challengeFigures = [
  { value: "5", label: "injury scenarios to choose from" },
  { value: "6", label: "design requirements to meet" },
  { value: "100", label: "point judging rubric" },
  { value: "80–150 g", label: "filament in a typical ankle splint" },
];

export const constraints = [
  {
    tag: "1/6 gravity",
    title: "Different loads",
    body: "Axial load on bone is about 83% lower, but sideways and twisting forces from stumbles stay close to Earth values. Lunar gait is bouncy and loads joints in unfamiliar ways.",
  },
  {
    tag: "−1 to 2% / month",
    title: "Bone loss",
    body: "Astronauts lose 1–2% bone mineral density per month in transit. After six months they may arrive with 6–12% less, so healing is slower and re-injury risk stays high.",
  },
  {
    tag: "8–12+ weeks",
    title: "No hospital",
    body: "The splint has to last the whole healing arc. The patient may have to take it off and put it back on alone, possibly with one hand.",
  },
  {
    tag: "~20 °C habitat",
    title: "Long-term wear",
    body: "The habitat is shirt-sleeve and climate controlled, so skin health, sweat and hygiene over weeks of wear become the main environmental problem.",
  },
];

export const spec: { label: string; value: string; status?: Status }[] = [
  { label: "Injury", value: "Achilles partial tear", status: "ok" },
  { label: "Site", value: "Posterior ankle" },
  { label: "Difficulty", value: "Advanced (highest of the five scenarios)" },
  { label: "Habitat risk", value: "Moderate: repetitive movement during daily exercise" },
  { label: "Fit", value: "Custom, generated from a scan of the patient's limb", status: "ok" },
  {
    label: "Lunar innovation",
    value: "Choosing between a swelling-adaptive lattice and a single-piece ratchet closure",
    status: "wip",
  },
  { label: "Prototype material", value: "To be chosen from PLA, ABS or TPU", status: "wip" },
  { label: "Flight material", value: "To be argued from PEEK, TPU or CF-PEEK", status: "todo" },
  { label: "Mass & print time", value: "Estimate due with the CAD model", status: "todo" },
  { label: "CAD", value: "Being modelled by a team member's brother", status: "todo" },
];

export const innovations = [
  {
    tag: "Exploring",
    name: "Swelling-adaptive lattice",
    body: "Variable-density gyroid or honeycomb that gives as the ankle swells, so the crew doesn't need to keep re-adjusting it. Inspired by the radiotherapy mesh mask and lattice boot.",
  },
  {
    tag: "Exploring",
    name: "Single-piece ratchet closure",
    body: "A printed friction lock with no loose parts, screws or Velcro, usable with one hand. Inspired by hose clamps and a reusable zip tie.",
  },
  {
    tag: "Option",
    name: "Rehab-progressive locking",
    body: "Locked for full immobilization early on, then pins come out for controlled motion, so one splint covers the whole recovery.",
  },
  {
    tag: "Option",
    name: "Integrated hygiene openings",
    body: "Fenestrations and ventilation channels for cleaning, skin checks and moisture control during weeks of wear.",
  },
];

// Densities from the challenge brief's mass budget guide (g/cm³).
export const materials = [
  { name: "PEEK", density: 1.32, label: "PEEK · 1.32 g/cm³" },
  { name: "TPU", density: 1.2, label: "TPU · ~1.2 g/cm³" },
  { name: "PLA", density: 1.24, label: "PLA · 1.24 g/cm³" },
  { name: "ABS", density: 1.04, label: "ABS · 1.04 g/cm³" },
];

// Assessment survey: 56 responses, Aug 26–27, 2026.
export const surveyTotal = 56;

export const surveyCharts: {
  title: string;
  question: string;
  rows: { label: string; count: number; highlight?: boolean }[];
  takeaway: string;
}[] = [
  {
    title: "Time on their feet",
    question: "How often would you say you are on your feet?",
    rows: [
      { label: "Often", count: 30, highlight: true },
      { label: "Always", count: 24, highlight: true },
      { label: "Not at all", count: 2 },
    ],
    takeaway: "96% spend a lot of time standing or walking, so the splint has to be comfortable and durable for active people.",
  },
  {
    title: "Finding the right size",
    question: "How often do you struggle to find a size that fits perfectly?",
    rows: [
      { label: "Always", count: 6, highlight: true },
      { label: "Often", count: 24, highlight: true },
      { label: "Not at all", count: 26 },
    ],
    takeaway: "54% struggle with sizing. One-size-fits-all doesn't work, which supports a custom, scan-based fit.",
  },
  {
    title: "Most-injured limb",
    question: "What limb do you see getting injured more often?",
    rows: [
      { label: "Ankle", count: 35, highlight: true },
      { label: "Arm", count: 14 },
      { label: "Fingers", count: 7 },
    ],
    takeaway: "Nearly two-thirds picked the ankle, which backs our focus on the Achilles and ankle area.",
  },
  {
    title: "Do medical devices help?",
    question: "Do you think medical devices are beneficial for one's healing journey?",
    rows: [
      { label: "Always", count: 31, highlight: true },
      { label: "Often", count: 24, highlight: true },
      { label: "Not at all", count: 1 },
    ],
    takeaway: "55 of 56 see value in medical devices during recovery.",
  },
];

export const concerns = [
  {
    topic: "Strength and breaking",
    quote: "Potential snapping, or not meeting the standards to hold up.",
    response: "Stiffness and wall thickness sized for lunar loads, with reinforcement against twisting",
  },
  {
    topic: "Comfort, rough edges and skin",
    quote: "Can the material cause allergic reactions or skin rashes?",
    response: "Biocompatible flight material, smooth finished edges, soft TPU contact layer",
  },
  {
    topic: "Fit and adjustment",
    quote: "How easy it would be to clean and adjust if my body changes.",
    response: "Custom fit from a limb scan plus an adjustable closure for swelling",
  },
  {
    topic: "Cleaning and getting wet",
    quote: "Since it's a 3D printed medical splint could it get wet?",
    response: "Hygiene openings and a material that can be cleaned over weeks of wear",
  },
  {
    topic: "How long it takes to make",
    quote: "How long would it take to make?",
    response: "Print-time estimate targeting the 4–8 hour window",
  },
];

export const gallery = [
  {
    src: "/images/mesh-mask.jpg",
    alt: "Patient lying down wearing a white mesh radiotherapy mask molded to their face.",
    caption: "Radiotherapy mesh mask: a lattice molded to one person, which pointed us toward scan-to-fit",
    meta: "Web research · 8/19",
  },
  {
    src: "/images/lattice-boot.jpg",
    alt: "3D-printed white lattice ankle boot with blue sole and openings.",
    caption: "Lattice ankle boot: openings and a fitted shell in one print",
    meta: "Web research",
    contain: true,
  },
  {
    src: "/images/hose-clamp.jpg",
    alt: "Stainless steel hose clamp with a slotted band.",
    caption: "Hose clamp: a one-piece band that tightens in small steps, a model for a ratchet closure",
    meta: "Web research",
    contain: true,
  },
  {
    src: "/images/sam-splint-xl.jpg",
    alt: "Orange SAM Splint XL package on a table.",
    caption: "SAM Splint XL from our school's athletic trainer, used for larger limbs",
    meta: "Team photo · 9/18",
  },
  {
    src: "/images/splint-sample.jpg",
    alt: "Hand holding a thin flexible orange and blue splint material sample.",
    caption: "Moldable splint material sample. Thinner and softer than we expected",
    meta: "Team photo · 9/18",
  },
  {
    src: "/images/trainer-brace.jpg",
    alt: "Black ankle brace with straps lying on a table.",
    caption: "An older brace from the trainer's storage room, for comparison",
    meta: "Team photo · 9/18",
  },
];

export const deliverables: { title: string; body: string; status: Status }[] = [
  {
    title: "Biomechanics rationale",
    body: "1–2 pages on how gravity, bone loss and long-term wear change the design. Our purpose statement is the starting point.",
    status: "todo",
  },
  {
    title: "Annotated concept sketch",
    body: "Every feature labeled with its reason, with the innovation clearly marked.",
    status: "todo",
  },
  {
    title: "CAD model with cross-section",
    body: "Geometry, wall thickness, infill zones, closure and material.",
    status: "todo",
  },
  {
    title: "Mass and print-time estimate",
    body: "Grams of filament, launch cost and print time, justified against a fixed-size inventory.",
    status: "todo",
  },
  {
    title: "Five-minute design review",
    body: "Briefing the lunar base medical officer and defending every choice.",
    status: "todo",
  },
];

export const reviews = [
  { name: "PDR", body: "Preliminary Design Review with a 40–50% prototype. This is our next milestone.", current: true },
  { name: "CDR", body: "Critical Design Review with a 90% working prototype." },
  { name: "FDR", body: "Final Design Review with a 100% working prototype. By invitation, at NASA Johnson Space Center in Houston." },
];

export const team = [
  { name: "Nancy De La Cruz", initials: "ND", role: "Student engineer" },
  { name: "Gertrudis Hernandez", initials: "GH", role: "Student engineer" },
  { name: "Jose Hernandez", initials: "JH", role: "Student engineer" },
];

export const teachers = "Lupita C. Vasquez and Claudia Cortez";
