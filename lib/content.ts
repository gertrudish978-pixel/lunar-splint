// Content for the site, taken from the team's challenge brief, design notebook, assessment survey,
// NASA HUNCH presentation and Milestone 2 report (9/24/2026). Update statuses here as work moves.

export type Status = "ok" | "done" | "wip" | "todo";

export const statusLabel: Record<Status, string> = {
  ok: "Decided",
  done: "Done",
  wip: "In progress",
  todo: "Not started",
};

export const heroStats = [
  { value: "$1M", label: "launch cost per kilogram of anything sent from Earth" },
  { value: "4–8 h", label: "from injury to a printed, custom-fitted splint" },
  { value: "1/6 g", label: "lunar gravity: about 83% less load along the bone" },
];

// Brief facts shown as flip cards on the Challenge page; the back of each card lists the details.
export type FlipItem = { title: string; body: string; badge?: string };

export const scenarios: FlipItem[] = [
  { title: "Stress fracture", body: "Tibia, fibula or metatarsals. High risk from bone density loss. Intermediate." },
  { title: "Acute fall fracture", body: "Wrist, forearm, ankle or clavicle. High risk from habitat furniture and equipment. Beginner–intermediate." },
  { title: "Finger fracture / dislocation", body: "PIP and DIP joints. Moderate–high risk from fine motor tasks. Beginner." },
  { title: "Lateral ankle ligament tear", body: "Outer ankle. Moderate risk from uneven habitat flooring. Intermediate.", badge: "Our pick" },
  { title: "Achilles partial tear", body: "Back of the ankle. Moderate risk from repetitive movement in the habitat. Advanced." },
];

export const rubric: FlipItem[] = [
  { title: "Biomechanics accuracy", body: "Addresses 1/6 g, bone density loss, the habitat and long-term wear for the chosen injury.", badge: "25 pts" },
  { title: "Novelty & justification", body: "The innovation is well reasoned, clearly described and built into the design.", badge: "25 pts" },
  { title: "Design completeness", body: "Geometry, wall thickness, closure, infill, material and fit are all covered.", badge: "20 pts" },
  { title: "Mass & printability", body: "Realistic filament mass, print time considered, material justified for the habitat.", badge: "15 pts" },
  { title: "Presentation & defense", body: "Clear, confident answers, presented as if to the crew medical officer.", badge: "15 pts" },
];

export const splintMass = { value: "80–150 g", label: "filament in a typical ankle splint" };

// Mass budget guide, section 12 of the student brief. A typical hand splint is ~40–80 g.
export const massSteps: FlipItem[] = [
  { title: "Estimate volume", body: "Splint volume in cm³ from the CAD model or rough geometry." },
  { title: "Apply infill", body: "Multiply by the infill fraction (25% infill → × 0.25), then add the shell volume." },
  { title: "Multiply by density", body: "PLA 1.24, ABS 1.04, TPU ~1.2, PEEK 1.32 g/cm³." },
  { title: "Find launch cost", body: "Convert to kg and multiply by $1,000,000. Every gram costs about $1,000." },
  { title: "Justify the mass", body: "Compare against launching a full set of fixed-size splints, which weighs far more." },
];

// The six design requirements, from section 4 of the student brief.
export const requirements: FlipItem[] = [
  { title: "Adequate immobilization", body: "Immobilizes the chosen injury in 1/6 gravity, accounting for the altered force mechanics." },
  { title: "Printable in the habitat", body: "Prints on a habitat FDM or SLA printer in ABS, PLA or TPU for prototypes, with a flight-grade material (PEEK, TPU or CF-PEEK) chosen and justified." },
  { title: "Long-term wearability", body: "Worn for weeks: skin contact, hygiene, ventilation, one-handed operation and skin breakdown are all considered." },
  { title: "Lunar-specific innovation", body: "At least one innovation from the brief's list (A–E), built into the design rather than just mentioned." },
  { title: "Material justification", body: "Material choice backed against biocompatibility, long-term skin contact, cleaning and sterilization, and habitat temperatures." },
  { title: "Mass budget", body: "Filament mass in grams and its launch cost at about $1M/kg, with a case for why it beats a simpler alternative." },
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

export const prototypeName = "OrthoPrint";

export const spec: { label: string; value: string; status?: Status }[] = [
  { label: "Injury", value: "Lateral ankle ligament tear", status: "ok" },
  { label: "Site", value: "Outer (lateral) side of the ankle" },
  { label: "Healing time", value: "3–26 weeks, depending on severity" },
  { label: "Habitat risk", value: "Moderate: rolled ankles on uneven habitat flooring" },
  { label: "Fit", value: "Custom, printed on demand from a scan of the patient's limb", status: "ok" },
  {
    label: "How it goes on",
    value: "Unlatches and fits on vertically, then latches closed. Replaced an earlier slip-on sock design",
    status: "ok",
  },
  {
    label: "Closure",
    value: "Reusable, zip-tie style printed straps wrapped in an athletic-tape X pattern",
    status: "ok",
  },
  {
    label: "Shell wall",
    value: "Solid wall for support; small ventilation holes being re-tested",
    status: "wip",
  },
  { label: "Prototype materials", value: "PLA, ABS and TPU (PETG also tested)", status: "wip" },
  { label: "Flight material", value: "CF-PEEK (recommended)", status: "ok" },
  { label: "CAD", value: "Detail drawing done 9/30/2026, model being refined", status: "wip" },
  { label: "Mass & print time", value: "To be measured from the final CAD model", status: "todo" },
];

export const innovations = [
  {
    tag: "Chosen",
    name: "Single-piece ratchet closure",
    body: "Reusable, zip-tie style straps printed in one piece with no loose parts, so the astronaut can tighten or release them with one hand. They wrap the ankle in the X pattern athletic trainers use with tape, three times around.",
  },
  {
    tag: "Chosen",
    name: "Integrated hygiene features",
    body: "A breathable, sanitary design that can be cleaned and inspected during weeks of wear. We removed the large holes because they made the splint too flexible, and we are re-testing small, well-placed openings that avoid pressure points.",
  },
  {
    tag: "Chosen",
    name: "Thermal phase design",
    body: "A TPU element that is flexible enough to wrap around the leg at habitat temperature and firm when needed. Our next test is finding the temperature at which the filament starts to soften instead of staying firm.",
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
    takeaway: "Nearly two-thirds picked the ankle, which backs our focus on an ankle ligament injury.",
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
    src: "/images/research.jpg",
    alt: "Presentation slide showing a 3D-printed cast with breathable holes and a radiotherapy mesh mask.",
    caption: "3D-printed casts look sturdy and breathable, but a fully solid shell risks pressing on pressure points. That pushed us toward adjustable straps",
    meta: "Research · presentation",
  },
  {
    src: "/images/sketches.jpg",
    alt: "Hand sketches of hole patterns and two splint designs, one with an adjustable buckle.",
    caption: "Brainstorm sketches by Gertrudis Hernandez and Nancy De La Cruz: hole patterns, a one-size cast, and a design with an adjustable buckle",
    meta: "Sketches · team",
  },
  {
    src: "/images/mesh-mask.jpg",
    alt: "Patient lying down wearing a white mesh radiotherapy mask molded to their face.",
    caption: "Radiotherapy mesh mask: a lattice molded to one person, which pointed us toward scan-to-fit",
    meta: "Web research · 8/19",
  },
  {
    src: "/images/hose-clamp.jpg",
    alt: "Stainless steel hose clamp with a slotted band.",
    caption: "Hose clamp: a one-piece band that tightens in small steps. Together with a reusable zip tie, it led to our latch",
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
    src: "/images/trainer-brace.jpg",
    alt: "Black ankle brace with straps lying on a table.",
    caption: "An older brace from the trainer's storage room, for comparison",
    meta: "Team photo · 9/18",
  },
];

export const prototypeSlides = [
  {
    src: "/images/cad-sample.jpg",
    alt: "CAD views of a square test sample with a grid of round holes.",
    caption: "CAD test sample with a grid of round holes, used to compare flexibility",
  },
  {
    src: "/images/prototype-samples.jpg",
    alt: "Printed PETG and TPU test squares at 0.635 mm and 5.715 mm thick next to a quarter.",
    caption: "Printed PETG and TPU samples at 0.635 mm and 5.715 mm thick",
  },
  {
    src: "/images/testing.jpg",
    alt: "Load tests hanging weights from printed samples, and a sample whose layers separated.",
    caption: "Hanging-weight test up to 2,550 g. The weight began to separate the layers",
  },
  {
    src: "/images/cad-drawing.jpg",
    alt: "Engineering detail drawing of the splint with strap dimensions in millimetres, by Jose Hernandez, 9/30/2026.",
    caption: "Detail drawing with strap dimensions in mm, by Jose P. Hernandez (9/30/2026)",
  },
];

export const testResults = [
  { sample: "PETG, holes", result: "Very flexible, but started to break after constant bending", outcome: "Rejected" },
  {
    sample: "TPU, holes",
    result: "Hung weights in steps of 1,000 g, 2,000 g and 2,550 g (1,000 + 1,000 + 500 + 50). The layers started to separate",
    outcome: "Rejected",
  },
  { sample: "Triangle hole pattern", result: "Did not hold up", outcome: "Rejected" },
  { sample: "TPU, solid (no holes)", result: "Much less flexible, firm when bent, and moulds slightly to the finger", outcome: "Chosen" },
  { sample: "Straps at key points", result: "Increased support and kept the ankle from moving", outcome: "Chosen" },
];

export const criteriaMet = [
  "Can be fabricated on demand",
  "Adequate immobilization",
  "Printable on a habitat FDM or SLA printer",
  "Long-term habitat wearability",
  "At least one lunar-specific innovation",
];

export const nextSteps = [
  "Change the thickness of the straps",
  "Test the load at which the straps break",
  "Find the temperature at which the filament softens",
  "Re-test small ventilation holes against the solid wall",
];

export const deliverables: { title: string; body: string; status: Status }[] = [
  {
    title: "Biomechanics rationale",
    body: "1–2 pages on how gravity, bone loss and long-term wear change the design for a lateral ankle ligament tear.",
    status: "wip",
  },
  {
    title: "Annotated concept sketch",
    body: "Brainstorm sketches and design concepts by Nancy and Gertrudis, with each feature labeled.",
    status: "done",
  },
  {
    title: "CAD model with cross-section",
    body: "Detail drawing finished 9/30/2026. The model is being refined after testing.",
    status: "wip",
  },
  {
    title: "Mass and print-time estimate",
    body: "Grams of filament, launch cost and print time, measured from the final CAD model.",
    status: "todo",
  },
  {
    title: "Five-minute design review",
    body: "Briefing the lunar base medical officer and defending every choice, starting at PDR.",
    status: "wip",
  },
];

// Team project timeline, from our presentation.
export const timeline: { when: string; what: string; done?: boolean; current?: boolean }[] = [
  { when: "Aug", what: "Project selection: formed the team and chose the challenge", done: true },
  { when: "Aug 21", what: "Proposal and objectives", done: true },
  { when: "Sept", what: "Research and brainstorming", done: true },
  { when: "Sept 18", what: "Concept decision signed", done: true },
  { when: "Sept 24", what: "Milestone 2: solid prototype and new latch design", done: true },
  { when: "Oct", what: "Prototype #1, testing and feedback", current: true },
  { when: "Oct 21–22", what: "Preliminary Design Review, South Texas" },
  { when: "Nov–Dec", what: "Prototype #2, testing, documentation and changes" },
  { when: "Feb–Mar", what: "Final product and presentation" },
  { when: "Mid-April", what: "NASA HUNCH evaluation" },
];

// From the NASA HUNCH PDR/CDR/FDR calendar (times in GMT-5).
export const pdr = {
  region: "South Texas",
  location: "Mercedes, TX",
  dates: "Oct 21–22, 2026",
  start: "2026-10-21T08:15:00-05:00",
};

export const reviews = [
  { name: "PDR", body: "Preliminary Design Review with a 40–50% prototype, at the South Texas review in Mercedes on Oct 21–22, 2026. This is our next milestone.", current: true },
  { name: "CDR", body: "Critical Design Review with a 90% working prototype." },
  { name: "FDR", body: "Final Design Review with a 100% working prototype. By invitation, at NASA Johnson Space Center in Houston." },
];

export const teamName = "Lunova";

export const school = "Gladys Porter Early College High School";

export const team = [
  {
    name: "Gertrudis Hernandez",
    photo: "/images/team/gertrudis.jpg",
    role: "Design coordination, expert outreach and latch research. Brainstorm sketches. Athletic-trainer interview",
  },
  { name: "Jose P. Hernandez", photo: "/images/team/jose.jpg", role: "CAD detail drawings" },
  { name: "Nancy De La Cruz", photo: "/images/team/nancy.jpg", role: "Sketches and designs" },
];

export const teachers = "Lupita C. Vasquez and Claudia Cortez";
