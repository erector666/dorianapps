import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pagePath = join(root, "src", "app", "page.tsx");
const layoutPath = join(root, "src", "app", "layout.tsx");
const globalsPath = join(root, "src", "app", "globals.css");
const dataPath = join(root, "src", "data", "site.ts");

function readSourceTree(dir) {
  return readdirSync(dir)
    .flatMap((entry) => {
      const absolute = join(dir, entry);
      if (statSync(absolute).isDirectory()) {
        return readSourceTree(absolute);
      }
      if (!/\.(ts|tsx|css)$/.test(entry)) {
        return [];
      }
      return readFileSync(absolute, "utf8");
    })
    .join("\n");
}

const page = readFileSync(pagePath, "utf8");
const layout = readFileSync(layoutPath, "utf8");
const globals = readFileSync(globalsPath, "utf8");
const data = readFileSync(dataPath, "utf8");
const all = [page, layout, globals, data, readSourceTree(join(root, "src"))].join("\n");
const contactPage = readFileSync(join(root, "src", "app", "contact", "page.tsx"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredSections = [
  'id="top"',
  'id="systems"',
  'id="work"',
  'id="toolkit"',
  'id="process"',
  'id="contact"'
];

for (const marker of requiredSections) {
  assert(all.includes(marker), `Missing required section marker: ${marker}`);
}

const requiredCopy = [
  "Dorian Apps",
  "Nikolcho Velkovski",
  "Nik",
  "autonomous agents",
  "operational software",
  "DocVault",
  "CodexPilot",
  "FENIX Construction Tracker",
  "Fenix Plus SA",
  "fenixplus.ch"
];

for (const text of requiredCopy) {
  assert(all.includes(text), `Missing required page copy: ${text}`);
}

const requiredAssets = [
  "public/assets/1strong portrait.jfif",
  "public/assets/2 at laptop dev.jfif",
  "public/assets/3.jfif",
  "public/assets/screenshots/docvault.png",
  "public/assets/screenshots/0brain-dashboard.png",
  "public/assets/screenshots/fenix-live-map.png",
  "public/assets/screenshots/fenix-login.png",
  "public/media/hero-scrub-desktop.mp4",
  "public/media/hero-scrub-mobile.mp4"
];

for (const asset of requiredAssets) {
  assert(existsSync(join(root, asset)), `Missing referenced asset: ${asset}`);
}

assert(!all.includes("Coming Soon"), "Old construction banner copy should not be present");
assert(!all.includes("Under Construction"), "Old construction badge should not be present");
assert(!all.includes("reactive systems studio"), "Dorian Apps identity must not conflict with the primary company label");
assert(!all.includes("AI systems studio"), "Dorian Apps identity must not use the old generic AI systems studio label");
assert(!all.includes("hello@dorianapps.com"), "Do not publish an unverified contact email");
assert(layout.includes("SmoothScroll"), "Layout must wire SmoothScroll provider");
assert(layout.includes("next/font"), "Fonts must be loaded with next/font");
assert(globals.includes("prefers-reduced-motion"), "Reduced-motion CSS must be present");
assert(globals.includes("--color-accent"), "Design tokens must include accent color");
assert(page.includes("<HomeExperience"), "Page must render the redesigned home experience");
assert(all.includes("<NeuralCoreScene"), "Home experience must include the persistent neural core scene");
assert(all.includes("flow-product-frame"), "Home experience must include reactive product interface planes");
assert(existsSync(join(root, "public/assets/neural-core-v2.png")), "Missing generated photorealistic neural core asset");
assert(contactPage.includes('headingLevel="h1"'), "Contact route must render its primary heading as an h1");

const requiredRoutes = [
  "src/app/products/docvault/page.tsx",
  "src/app/products/codexpilot/page.tsx",
  "src/app/products/fenix-construction-tracker/page.tsx",
  "src/app/work/fenix-plus-sa/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx"
];

for (const route of requiredRoutes) {
  assert(existsSync(join(root, route)), `Missing required route: ${route}`);
}

const dataFile = readFileSync(join(root, "src", "data", "site.ts"), "utf8");
const fenixTrackerBlock = dataFile.slice(dataFile.indexOf('slug: "fenix-construction-tracker"'), dataFile.indexOf('slug: "fenix-plus-sa"'));
const fenixPlusBlock = dataFile.slice(dataFile.indexOf('slug: "fenix-plus-sa"'));
assert(fenixTrackerBlock.includes("fenix-live-map.png"), "FENIX Construction Tracker must own the live map screenshot");
assert(fenixTrackerBlock.includes("fenix-login.png"), "FENIX Construction Tracker must own the login screenshot");
assert(!fenixPlusBlock.includes("fenix-live-map.png"), "Fenix Plus SA must not use the tracker live map screenshot");
assert(!fenixPlusBlock.includes("fenix-login.png"), "Fenix Plus SA must not use the tracker login screenshot");

console.log("Next site smoke checks passed.");
