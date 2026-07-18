import { Header } from "@/components/Header";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import Link from "next/link";
import { products } from "@/data/site";
import type { Metadata } from "next";

const codexpilot = products.find((p) => p.slug === "codexpilot")!;

export const metadata: Metadata = {
  title: `${codexpilot.name} | Dorian Apps`,
  description: codexpilot.description,
};

const features = [
  "Mobile-first AI coding interface for Android",
  "Full repository context awareness — not just file-at-a-time",
  "Local LLM support for offline, private coding sessions",
  "Intent-based editing: describe the change, review the diff, apply with confidence",
  "Review discipline built in: every change is inspectable before it lands",
];

const techStack = [
  "Kotlin / Jetpack Compose (Android native)",
  "LiteRT-LM for on-device local models",
  "Git integration via JGit",
  "Diff viewer with syntax-aware highlighting",
  "Hermes Agent protocol for remote agent delegation",
];

const useCases = [
  { title: "Mobile Code Review", body: "Review pull requests, inspect diffs, and approve changes from anywhere — not just at a desk with a wide monitor." },
  { title: "Offline Development", body: "Work on repos with local models when connectivity is limited. No cloud dependency, no latency, no privacy trade-offs." },
  { title: "Intent-Driven Editing", body: "Describe what the code should do. CodexPilot proposes the change, shows the diff, and lets you decide before anything is committed." },
];

export default function CodexPilotPage() {
  return (
    <main className="site-shell">
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32">
        <div className="container grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5" style={{ color: codexpilot.accent?.hex }}>{codexpilot.eyebrow}</p>
            <h1 className="max-w-[11ch] pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              {codexpilot.name}
            </h1>
            <p className="section-lede mt-6">{codexpilot.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="focus-ring rounded-full px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: codexpilot.accent?.hex }}>
                Get early access
              </Link>
              <Link href="/products/docvault" className="focus-ring rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
                Explore products
              </Link>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[2rem]" style={{ borderColor: codexpilot.accent?.hex ? `${codexpilot.accent.hex}44` : undefined }}>
            <div className="relative aspect-[16/11] bg-black">
              <ImageWithFallback src={codexpilot.image} alt={codexpilot.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {codexpilot.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">{fact.label}</span>
                  <strong className="mt-2 block text-sm text-[var(--color-text)]">{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: codexpilot.accent?.hex }}>Capabilities</p>
          <h2 className="section-title mb-12">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6">
                <span className="mb-3 block font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: codexpilot.accent?.hex }}>0{i + 1}</span>
                <p className="text-sm leading-relaxed text-[var(--color-text)]">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: codexpilot.accent?.hex }}>Architecture</p>
          <h2 className="section-title mb-12">Tech stack</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-[var(--color-text)]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: codexpilot.accent?.hex }}>Applied</p>
          <h2 className="section-title mb-12">Use cases</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <div key={i} className="glass-panel-strong rounded-2xl p-8">
                <h3 className="mb-3 font-display text-2xl font-bold leading-tight">{uc.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-white/10">
        <div className="container text-center">
          <h2 className="section-title mb-6 mx-auto">Code from anywhere.</h2>
          <p className="section-lede mx-auto mb-10">Mobile AI coding with full repository context, local models, and review discipline — wherever the work moves.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="focus-ring rounded-full px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: codexpilot.accent?.hex }}>
              Request access
            </Link>
            <Link href="/products/0brain" className="focus-ring rounded-full border border-white/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
              Explore 0Brain
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
