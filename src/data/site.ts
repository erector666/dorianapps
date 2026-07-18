export const identity = {
  company: "Dorian Apps",
  founder: "Nik",
  legalName: "Nikolcho Velkovski",
  label: "AI product builder and autonomous-agent systems developer",
  location: "Switzerland / Macedonia / Remote",
  thesis: "Turning real operational pressure into dependable AI products, tools, and agentic workforces."
};

export const metrics = [
  { value: 5, suffix: "+", label: "AI products in motion" },
  { value: 7, suffix: "", label: "Agent loops tested" },
  { value: 24, suffix: "/7", label: "Real-world operator mindset" }
];

export const marqueeItems = [
  "AI products built from real business friction",
  "Autonomous agents / persistent memory / verification gates",
  "Field Ops - field operations from one system",
  "DocVault - administrative chaos into searchable intelligence",
  "CodexPilot - mobile AI coding and repository control",
  "0Brain - persistent memory for autonomous agents",
  "Dorian Apps - practical systems by Nikolcho Velkovski"
];

export type CaseItem = {
  slug: string;
  name: string;
  eyebrow: string;
  type: "product" | "website";
  path: string;
  externalUrl?: string;
  image: string;
  secondaryImage?: string;
  alt: string;
  description: string;
  longDescription: string;
  tags: string[];
  facts: { label: string; value: string }[];
  accent?: { hue: number; hex: string };
};

export const products: CaseItem[] = [
  {
    slug: "docvault",
    name: "DocVault",
    eyebrow: "Document intelligence product",
    type: "product",
    path: "/products/docvault",
    externalUrl: "https://docvault.dev",
    image: "/assets/screenshots/docvault.png",
    alt: "DocVault dark mode document intelligence dashboard",
    description:
      "An AI-powered document platform designed to turn administrative chaos into structured, searchable information.",
    longDescription:
      "DocVault is product work by Dorian Apps around private document storage, retrieval, extraction, and AI-assisted answers. It exists for the kind of paperwork that slows real companies down: invoices, contracts, tax letters, insurance files, notices, and scattered administrative records that should become usable operational memory.",
    tags: ["AI search", "Document memory", "Operations"],
    facts: [
      { label: "Domain", value: "docvault.dev" },
      { label: "Category", value: "AI document management" },
      { label: "Owner", value: "Dorian Apps" }
    ],
    accent: { hue: 42, hex: "#F59E0B" }
  },
  {
    slug: "codexpilot",
    name: "CodexPilot",
    eyebrow: "Android coding agent product",
    type: "product",
    path: "/products/codexpilot",
    image: "/assets/3.jfif",
    alt: "Developer workstation used for CodexPilot",
    description:
      "A mobile AI coding experiment for steering repositories, local models, and agentic development work away from the desk.",
    longDescription:
      "CodexPilot is Dorian Apps product work around mobile AI coding, local language models, and tools that let developers work with entire repositories from wherever they are. The goal is not a thin remote control. It is a practical interface for keeping intent, review discipline, and repository context alive when the developer is moving.",
    tags: ["Android", "Coding agents", "Repository control"],
    facts: [
      { label: "Platform", value: "Android" },
      { label: "Category", value: "Developer tooling" },
      { label: "Builder", value: "Nikolcho Velkovski" }
    ],
    accent: { hue: 187, hex: "#06B6D4" }
  },
  {
    slug: "fenix-construction-tracker",
    name: "Field Ops",
    eyebrow: "Construction operations product",
    type: "product",
    path: "/products/fenix-construction-tracker",
    image: "/assets/screenshots/fenix-live-map.png",
    secondaryImage: "/assets/screenshots/fenix-login.png",
    alt: "Field Ops live satellite map",
    description:
      "A construction operations system for workers, projects, vehicles, sessions, documents, locations, and field data.",
    longDescription:
      "Field Ops came from direct exposure to construction operations in Switzerland, where delays, paperwork, missing information, scattered communication, and outdated processes cost real time and money. The tracker focuses on operational visibility: workers, projects, vehicles, work sessions, documents, locations, and the data a company needs from one system.",
    tags: ["Live map", "Construction", "Field operations"],
    facts: [
      { label: "Screens", value: "Login / Live map" },
      { label: "Category", value: "Construction tracking" },
      { label: "Status", value: "Separate app" }
    ],
    accent: { hue: 160, hex: "#10B981" }
  },
  {
    slug: "0brain",
    name: "0Brain",
    eyebrow: "Persistent memory & agent verification",
    type: "product",
    path: "/products/0brain",
    image: "/assets/3.jfif",
    alt: "0Brain persistent memory and agent verification system",
    description:
      "Persistent memory infrastructure for autonomous agents — remembers, delegates, challenges, and proves.",
    longDescription:
      "0Brain is the persistent memory and agent verification layer. It gives autonomous agents long-term recall, structured delegation, and proof-of-work verification loops. The agent loop is Investigate → Delegate → Remember → Challenge → Verify — a system that treats memory as load-bearing infrastructure, not a cache.",
    tags: ["Memory", "Agents", "Verification"],
    facts: [
      { label: "Loop", value: "5-stage agent cycle" },
      { label: "Category", value: "Agent infrastructure" },
      { label: "Status", value: "Active development" }
    ],
    accent: { hue: 258, hex: "#8B5CF6" }
  }
];

export const work: CaseItem[] = [
  {
    slug: "fenix-plus-sa",
    name: "Fenix Plus SA",
    eyebrow: "Company website project",
    type: "website",
    path: "/work/fenix-plus-sa",
    externalUrl: "https://fenixplus.ch",
    image: "/assets/2 at laptop dev.jfif",
    alt: "Fenix Plus SA website work represented through Dorian Apps workstation imagery",
    description:
      "Company website work built by Nikolcho Velkovski for Fenix Plus SA at fenixplus.ch.",
    longDescription:
      "Fenix Plus SA is not the construction tracker app. It is company website work built by Nikolcho Velkovski, published at fenixplus.ch, and presented separately from the operational software. The distinction matters: clean systems start by naming what each product actually is.",
    tags: ["fenixplus.ch", "Company website", "Client work"],
    facts: [
      { label: "Website", value: "fenixplus.ch" },
      { label: "Type", value: "Company website" },
      { label: "Built by", value: "Nikolcho Velkovski" }
    ],
    accent: { hue: 42, hex: "#D4A853" }
  }
];

export const allCases = [...products, ...work];

export const toolkit = [
  "Autonomous agent orchestration",
  "Persistent memory systems",
  "Delegation and verification loops",
  "Next.js / TypeScript",
  "Three.js / GSAP ScrollTrigger",
  "Local language model experiments",
  "Construction operations software",
  "AI product engineering"
];

export const process = [
  {
    step: "01",
    title: "Pressure",
    body: "Start from real friction: delays, paperwork, missing information, scattered communication, and business pressure."
  },
  {
    step: "02",
    title: "System",
    body: "Shape the product, data model, routes, states, memory, and actions around what the operation actually needs."
  },
  {
    step: "03",
    title: "Agents",
    body: "Add specialist agents only where they can investigate, divide work, preserve context, or verify evidence."
  },
  {
    step: "04",
    title: "Audit",
    body: "Break the system, challenge weak solutions, tighten the interface, and prove the work survives real use."
  },
  {
    step: "05",
    title: "Workforce",
    body: "Ship practical software that gives small teams more memory, intelligence, and execution capacity."
  }
];
