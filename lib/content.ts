/**
 * Single source of truth for all site copy.
 * Voice: terse, declarative, Hemingway — pulled from BlueAlly's
 * Executive Briefing and "Reading Your AI Value Assessment" decks.
 */

export const site = {
  name: "BlueAlly",
  tagline: "Conquer Complexity.",
  phone: "(888) 301-9289",
  phoneHref: "tel:+18883019289",
  email: "ai@blueally.com",
  emailHref: "mailto:ai@blueally.com",
  website: "https://www.blueally.com",
  legalName: "BlueAlly Technology Solutions LLC",
  address: "1225 Crescent Green, Suite 115, Cary, NC 27518",
  bookHref: "mailto:ai@blueally.com?subject=Book%20the%20AI%20Use%20Case%20Workshop",
} as const;

export const navLinks = [
  { label: "The Stakes", href: "#stakes" },
  { label: "Method", href: "#method" },
  { label: "Principle", href: "#principle" },
  { label: "Workshop", href: "#workshop" },
  { label: "Offerings", href: "#offerings" },
  { label: "Proof", href: "#proof" },
] as const;

export const hero = {
  eyebrow: "Executive Briefing · Enterprise AI",
  headlineTop: "Move AI from pilot purgatory",
  headlineEm: "to production.",
  sub: "95% of enterprise AI initiatives fail to create value. The technology is rarely the problem. The gap is method, not ambition — and a method is exactly what we bring. One team, end to end, from the boardroom question to the measured result.",
  ctaPrimary: { label: "Book the workshop", href: site.bookHref },
  ctaSecondary: { label: "See the method", href: "#method" },
  trust: [
    "Grounded in MIT & BCG research",
    "SOC 2 · ISO 42001",
    "NIST AI RMF",
    "NVIDIA Partner",
  ],
} as const;

/** Hero "Sample AI Value Assessment" card data (illustrative). */
export const sampleAssessment = {
  label: "Sample · AI Value Assessment",
  totalValue: 17.4, // $M, base case
  totalValueLabel: "Base-case annual value",
  range: { low: 10.4, high: 22.6 }, // conservative → optimistic
  pillars: [
    { name: "Cost Optimization", pct: 62, color: "var(--ba-bright)" },
    { name: "Revenue Enhancement", pct: 24, color: "var(--ba-navy)" },
    { name: "Risk Mitigation", pct: 12, color: "var(--ba-green)" },
    { name: "Cash Flow", pct: 2, color: "var(--ba-light-blue)" },
  ],
  readiness: 7.2, // out of 10
  readinessThreshold: 6.0,
  recovery: 86, // % friction-to-value recovery
  useCasesValidated: 12,
} as const;

export const stakes = {
  eyebrow: "The Honest Stakes",
  heading: "Most AI work fails. The work that does not, wins by a wide margin.",
  stats: [
    { value: 95, suffix: "%", label: "of enterprise AI initiatives fail to create value", source: "MIT, State of AI in Business 2025" },
    { value: 5, suffix: "%", label: "of companies capture nearly all the value", source: "MIT GenAI Divide" },
    { value: 1.5, suffix: "×", label: "the revenue growth of AI leaders versus peers", source: "BCG AI Value Creation 2025" },
    { value: 3, suffix: "×", label: "higher odds of scaling when you focus on three use cases", source: "BCG · MIT" },
  ],
  kicker: "The companies that win do not do more. They do less, on purpose.",
  constants: [
    { label: "Higher quality", body: "The machine checks every line. Mistakes are caught before they cost." },
    { label: "More speed", body: "Hours of search and drafting collapse into minutes." },
    { label: "Lower cost", body: "Work removed, reduced, or done at higher quality." },
    { label: "More delight", body: "The same team ships more — and does the work that matters." },
  ],
} as const;

export const failureModes = {
  eyebrow: "Why They Fail",
  heading: "Five failure modes drive nearly every stalled program.",
  modes: [
    { numeral: "I", title: "No clear ROI", body: "Work begins before the math. When value can't be proven, funding goes." },
    { numeral: "II", title: "No executive sponsor", body: "The project lives in IT. Strategy never signs the page." },
    { numeral: "III", title: "Too many use cases", body: "Twenty pilots, none of them deep. Focus traded for breadth." },
    { numeral: "IV", title: "Pilot purgatory", body: "The demo works. The integration does not. Only 26% ever scale." },
    { numeral: "V", title: "Going it alone", body: "In-house builds fail 67% of the time. Partners cut that in half." },
  ],
  kicker: "Notice the pattern: four of the five are people and method. Only one is the model.",
} as const;

export const method = {
  eyebrow: "Part One · The Method",
  heading: "Seven steps turn a business challenge into measurable value.",
  intro: "A method, not a slide deck. Seven steps, one team. Each step closes a familiar way to fail.",
  steps: [
    { n: 1, name: "Anchor to strategy", line: "Begin with the business, not the tool — tied to real drivers and OKRs.", deliverable: "Strategy Brief with named OKRs and sponsors", closes: "No executive sponsor" },
    { n: 2, name: "Inventory functions", line: "Scan every function for operational friction — where time and money leak.", deliverable: "Function & Friction Map", closes: "Going it alone" },
    { n: 3, name: "Set KPIs to benchmarks", line: "Compared to top-quartile peers, not to last year.", deliverable: "KPI framework with baselines and targets", closes: "No clear ROI" },
    { n: 4, name: "Map friction points", line: "Name the delay, the error, the rework — in operator language.", deliverable: "Friction inventory", closes: "Pilot purgatory" },
    { n: 5, name: "Match to AI primitives", line: "Pair each friction point with the right capability, from proven patterns.", deliverable: "Solution architecture per use case", closes: "Pilot purgatory" },
    { n: 6, name: "Quantify impact", line: "Revenue, cost, cash, and risk. Probability-weighted. CFO-defensible.", deliverable: "Business Value Map with the math shown", closes: "No clear ROI" },
    { n: 7, name: "Score, rank & sequence", line: "Plot on the Value-Readiness Matrix. Bet on the three most likely to scale.", deliverable: "Prioritized portfolio of three use cases", closes: "Too many use cases" },
  ],
  pillars: [
    { title: "Strategic alignment", body: "Every step ties to a real business objective — no tech looking for a problem." },
    { title: "Measurable value", body: "Improvements map to four dimensions: revenue, cost, cash, and risk." },
    { title: "Objective priority", body: "Use cases scored on value, feasibility, and fit — not opinion." },
  ],
} as const;

export const principle = {
  eyebrow: "Part Two · The Principle",
  heading: "Name the verb before the model.",
  intro: "Seven disciplines still do the heavy lifting. Generative AI is additive, not a replacement. Keep a deterministic core. Add GenAI for the glue.",
  traditional: [
    { verb: "See", body: "Computer Vision — detect & read images" },
    { verb: "Read", body: "Natural Language — classify & extract text" },
    { verb: "Predict", body: "Machine Learning — forecast & score data" },
    { verb: "Find", body: "Enterprise Search — retrieve the buried answer" },
    { verb: "Know", body: "Knowledge Graphs — encode facts as truth" },
    { verb: "Reason", body: "Solvers — decide under hard limits" },
    { verb: "Act", body: "Robotics & RPA — sense and act, at scale" },
  ],
  generative: [
    { verb: "Create", body: "Generative AI — produce new text & code" },
    { verb: "Orchestrate", body: "Agentic Systems — plan, call tools, loop" },
  ],
  compound: [
    { name: "RAG", body: "Search retrieves; the LLM writes a cited answer." },
    { name: "ML + LLM", body: "The model scores; the LLM explains and acts." },
    { name: "Neuro-symbolic", body: "The LLM plans the steps; a solver enforces the rules." },
    { name: "Graph-grounded", body: "The graph supplies truth; the LLM reads and updates it." },
  ],
  kicker: "The disciplines become the tools. The LLM becomes the planner and the interface. Don't pay the LLM tax.",
} as const;

export const matrix = {
  eyebrow: "The Value-Readiness Matrix",
  heading: "What to deploy, what to prepare, what to park.",
  intro: "Plot every candidate on value against readiness. The quadrant tells you what to do, and in what order.",
  quadrants: [
    { key: "champions", title: "Champions", tag: "Deploy now", body: "High value, ready to ship. Funded first.", value: "high", readiness: "high" },
    { key: "strategic", title: "Strategic", tag: "Plan a sprint", body: "High value, readiness gap. Sponsor a 90-day sprint.", value: "high", readiness: "low" },
    { key: "quickwins", title: "Quick Wins", tag: "Ship fast", body: "Modest value, fast. Build the muscle, prove the loop.", value: "low", readiness: "high" },
    { key: "foundation", title: "Foundation", tag: "Build first", body: "Not yet. Note them. Revisit when capability arrives.", value: "low", readiness: "low" },
  ],
  weights: [
    { name: "Organizational capacity", pct: 35 },
    { name: "Data readiness", pct: 30 },
    { name: "AI governance", pct: 20 },
    { name: "Technical infrastructure", pct: 15 },
  ],
  threshold: "6.0 is the line between piloting and producing. Above six, deploy with confidence. Below six, invest in readiness first.",
} as const;

export const epoch = {
  eyebrow: "EPOCH · Human in the Loop",
  heading: "Half the AI value lives at the touch.",
  intro: "The machine does the cold work. The human stays where the value lives. We embed an EPOCH check on every use case.",
  items: [
    { letter: "E", title: "Empathy & emotional intelligence", body: "Reading what a customer feels, not what they typed." },
    { letter: "P", title: "Presence & connectedness", body: "Relationships compound; transactions don't." },
    { letter: "O", title: "Opinion, judgment & ethics", body: "Calling the hard, ambiguous decision." },
    { letter: "C", title: "Creativity & imagination", body: "The move outside the training distribution." },
    { letter: "H", title: "Hope, vision & leadership", body: "Pointing to a future the data can't see." },
  ],
} as const;

export const workshop = {
  eyebrow: "Part Three · The Workshop",
  heading: "Two days. A ranked portfolio. A fundable plan.",
  intro: "We bring the method. You bring the people who do the work. In two days you leave with three funded use cases — and a plan finance can fund.",
  phases: [
    { n: "01", title: "Identify", body: "Three high-impact AI use cases, anchored to your strategic priorities. Every one tied to a measurable outcome." },
    { n: "02", title: "Assess", body: "Organizational readiness across four dimensions — Skills, Data, Infrastructure, and Governance." },
    { n: "03", title: "Architect", body: "End-to-end AI workflows with comparison diagrams, PRDs, and an architecture blueprint for each use case." },
  ],
  deliverables: [
    { n: 1, title: "AI Strategy Brief", body: "Business drivers, OKRs, and where AI fits. One page the team signs." },
    { n: 2, title: "Prioritized Portfolio", body: "Three use cases, ranked — each with friction, pattern, KPI, and owner." },
    { n: 3, title: "Business Value Map", body: "Revenue, cost, cash, and risk sized for every use case, math attached." },
    { n: 4, title: "Value-Readiness Matrix", body: "Champions, Quick Wins, Strategic, Foundation — what to do, in order." },
    { n: 5, title: "Readiness Assessment", body: "Skills, Data, Infrastructure, Governance — graded out of ten, gaps named." },
    { n: 6, title: "Workflows & Architecture", body: "Current-state vs AI-powered diagrams, blueprints, and PRDs." },
    { n: 7, title: "90-Day Roadmap", body: "Owners, dates, success metrics — a plan finance can fund and the team can ship." },
  ],
  differentiators: [
    "Three use cases, not thirty — we rank by value and readiness, then bet on the three most likely to scale.",
    "Value in four lenses — every use case sized across revenue, cost, cash, and risk, with the math shown.",
    "Readiness scored honestly — graded 1–10. Six is the pilot-to-enterprise line.",
    "A plan finance can fund — owners, dates, and success metrics. Quick wins now; a sprint where readiness is the lever.",
  ],
} as const;

export const offerings = {
  eyebrow: "Part Four · The Offerings",
  heading: "One partner. End to end.",
  intro: "The BlueAlly AI Operating System — three pillars on one foundation, advised, governed, and run around the clock.",
  advisory: {
    title: "Advisory Services",
    sub: "From boardroom to business case.",
    items: ["AI Workshops", "Use-Case Discovery", "Value & ROI Modeling", "Readiness & CoE", "Roadmap & Enablement"],
  },
  pillars: [
    {
      title: "Agent Services",
      status: "Available now",
      body: "Create and secure AI agents where your business already works.",
      items: ["Low-code agent creation", "Agentic workflows & copilots", "Security & guardrails, HITL"],
      get: "A working, governed agent in weeks.",
    },
    {
      title: "Dev Services",
      status: "Fed from the workshop",
      body: "Build, deploy, and maintain AI applications on your data.",
      items: ["LLM & RAG applications", "Model customization & fine-tune", "CV, voice, and document AI"],
      get: "A production app, grounded in your data.",
    },
    {
      title: "AI Factory Services",
      status: "Roadmap to scale",
      body: "Purpose-built AI infrastructure, hardware to application.",
      items: ["GPU compute & network fabric", "Storage & VectorDB", "Validated reference architectures"],
      get: "Scale on a vendor-agnostic stack.",
    },
  ],
  foundation: {
    title: "Data Lake · Amplifi",
    sub: "The foundation every AI workload depends on.",
    items: ["Ingest & migrate", "Store & secure", "Architect & model", "Govern & master", "Serve & consume"],
    get: "Vector-aware, governed data that fuels every pillar.",
  },
  wrap: [
    { title: "AI Defense & Governance", body: "Govern the data first. Least privilege, semantic firewall, kill switch, output lineage on every artifact." },
    { title: "Compliance", body: "Audit-ready by design. NIST AI RMF mapped to controls, ISO/IEC 42001 attestation, model cards & lineage." },
    { title: "Managed Services", body: "Keep AI running: 24×7 MLOps/SRE, FinOps on token & GPU cost, drift & quality monitoring, red-team." },
  ],
} as const;

export const proof = {
  eyebrow: "The Payoff",
  heading: "Pilots that ship. A platform that compounds.",
  roi: [
    { value: "$2.1M", label: "labor saved — 30% faster proposals at an engineering firm" },
    { value: "360K", label: "work hours saved a year in document processing" },
    { value: "95%", label: "faster advisor response in customer service" },
    { value: "80% / 60%", label: "cost cut and time saved in bank loan processing; 2–4× capacity" },
  ],
  cases: [
    { industry: "Healthcare", weeks: "16 weeks", title: "Large healthcare system", body: "Manual scheduling created cascading inefficiencies across every department.", results: ["28% increase in capacity", "$2.4M annual savings", "92% patient satisfaction"] },
    { industry: "Manufacturing", weeks: "20 weeks", title: "Global engineering & construction firm", body: "Legacy document management and reactive maintenance cost millions in lost productivity.", results: ["45% maintenance cost decrease", "99.2% equipment availability", "80% faster proposals"] },
    { industry: "Life Sciences", weeks: "3+ years", title: "Fortune 50 pharmaceutical research", body: "Navigating the AI landscape while holding pharmaceutical-grade security and compliance.", results: ["2,000 AI creators empowered", "300K+ AI interactions", "30–60% faster research"] },
  ],
  timeline: [
    { window: "0–6 months", body: "Inventory & matrix scoring. One or two compound pilots on trusted RAG, with guardrails." },
    { window: "6–12 months", body: "Pilots shipped into real workflows. Adoption and impact measured. Agentic patterns where they pay." },
    { window: "12–18 months", body: "Scale what proves ROI. A reusable platform: retrieval, eval, observability. Policy as code." },
  ],
} as const;

export const whyBlueAlly = {
  eyebrow: "Why BlueAlly",
  heading: "Strategy shops write reports. Vendors sell tools. We close the gap.",
  arc: ["Strategy", "Data", "Architecture", "Readiness", "Build", "Adopt", "Measure"],
  points: [
    { title: "A method, not a deck", body: "We do the work that closes the gap between a strategy report and a shipped tool." },
    { title: "Readiness graded, not asserted", body: "Behaviorally anchored scores, 1–10. We name the line between pilot and enterprise." },
    { title: "End to end, one team", body: "Strategy, data, architecture, readiness, build, adopt, measure — people who have done it." },
  ],
  certs: ["SOC 2 Type II", "ISO 42001", "NVIDIA Partner", "AWS Partner", "Cisco Partner", "Dell Partner"],
} as const;

export const finalCta = {
  eyebrow: "The Next Step",
  heading: "Put two days on the calendar.",
  body: "We bring the method. You bring the people. In two days, you leave with three funded use cases, and a plan finance can fund.",
  steps: [
    { n: "01", title: "Scope the workshop", body: "Pick the functions where friction hurts most." },
    { n: "02", title: "Pick the people", body: "The doers and a sponsor who can clear the path." },
    { n: "03", title: "Change the trajectory", body: "Two days that move from ambition to a plan." },
  ],
} as const;
