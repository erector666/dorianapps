import { readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const pkg = JSON.parse(read("package.json"));
const dependencies = {
  ...pkg.dependencies,
  ...pkg.devDependencies
};

for (const name of ["next", "react", "react-dom", "gsap", "@studio-freight/lenis", "split-type", "three"]) {
  assert(dependencies[name], `Missing required dependency: ${name}`);
}

assert(!dependencies["framer-motion"], "framer-motion must not be installed for this animation system");

const requiredFiles = [
  "src/providers/SmoothScroll.tsx",
  "src/components/RevealText.tsx",
  "src/components/FadeIn.tsx",
  "src/components/StatCounter.tsx",
  "src/components/Marquee.tsx",
  "src/components/HeroCanvas.tsx",
  "src/components/HeroCanvasDynamic.tsx",
  "src/components/HeroScrubVideo.tsx",
  "src/components/HeroSection.tsx",
  "src/components/NeuralCoreScene.tsx",
  "src/utils/motion.ts",
  "tailwind.config.ts"
];

for (const relativePath of requiredFiles) {
  assert(existsSync(join(root, relativePath)), `Missing required file: ${relativePath}`);
}

const smoothScroll = read("src/providers/SmoothScroll.tsx");
assert(smoothScroll.includes("new Lenis"), "SmoothScroll must instantiate Lenis");
assert(smoothScroll.includes("ScrollTrigger.update"), "SmoothScroll must wire Lenis to ScrollTrigger");
assert(smoothScroll.includes("gsap.ticker.add"), "SmoothScroll must use GSAP ticker");
assert(smoothScroll.includes("gsap.ticker.remove"), "SmoothScroll must remove the ticker callback");

const revealText = read("src/components/RevealText.tsx");
assert(revealText.includes("SplitType"), "RevealText must use SplitType");
assert(revealText.includes("prefersReducedMotion"), "RevealText must check reduced motion");
assert(revealText.includes("ctx.revert()"), "RevealText must clean up GSAP context");

const heroDynamic = read("src/components/HeroCanvasDynamic.tsx");
assert(heroDynamic.includes("dynamic("), "HeroCanvas must be dynamically imported");
assert(heroDynamic.includes("ssr: false"), "HeroCanvas dynamic import must disable SSR");

const heroCanvas = read("src/components/HeroCanvas.tsx");
assert(heroCanvas.includes("new THREE.WebGLRenderer"), "HeroCanvas must create a WebGL renderer");
assert(heroCanvas.includes("renderer.dispose()"), "HeroCanvas must dispose renderer");
assert(heroCanvas.includes("geometry.dispose()"), "HeroCanvas must dispose geometry");
assert(heroCanvas.includes("material.dispose()"), "HeroCanvas must dispose material");
assert(heroCanvas.includes("ScrollTrigger.create"), "HeroCanvas must fade/scale with ScrollTrigger");

const neuralCore = read("src/components/NeuralCoreScene.tsx");
assert(neuralCore.includes("new THREE.WebGLRenderer"), "NeuralCoreScene must create a WebGL renderer");
assert(neuralCore.includes("new THREE.TorusGeometry"), "NeuralCoreScene must render real 3D geometry");
assert(neuralCore.includes("pointermove"), "NeuralCoreScene must react to pointer movement");
assert(neuralCore.includes("scrollProgress"), "NeuralCoreScene must react continuously to scroll progress");
assert(neuralCore.includes("renderer.dispose()"), "NeuralCoreScene must dispose its renderer");

const heroScrub = read("src/components/HeroScrubVideo.tsx");
assert(heroScrub.includes("currentTime"), "HeroScrubVideo must scrub video currentTime");
assert(heroScrub.includes("1 / 24"), "HeroScrubVideo must quantize to 24fps steps");
assert(heroScrub.includes("requestAnimationFrame"), "HeroScrubVideo must throttle with requestAnimationFrame");
assert(heroScrub.includes("prefersReducedMotion"), "HeroScrubVideo must check reduced motion");

const mediaFiles = [
  "public/media/hero-scrub-desktop.mp4",
  "public/media/hero-scrub-mobile.mp4"
];

for (const relativePath of mediaFiles) {
  const absolutePath = join(root, relativePath);
  assert(existsSync(absolutePath), `Missing generated media: ${relativePath}`);
  assert(statSync(absolutePath).size > 20000, `Generated media is too small to be a real video: ${relativePath}`);
}

console.log("Animation system checks passed.");
