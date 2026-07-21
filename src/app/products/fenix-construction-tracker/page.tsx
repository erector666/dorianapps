import { Header } from "@/components/Header";
import Image from "next/image";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import Link from "next/link";
import { products } from "@/data/site";
import type { Metadata } from "next";

const fenix = products.find((p) => p.slug === "fenix-construction-tracker")!;

export const metadata: Metadata = {
  title: `${fenix.name} | Dorian Apps`,
  description: fenix.description,
};

const features = [
  "Live satellite map with real-time worker and vehicle locations",
  "Project management with work sessions, documents, and field data",
  "Worker profiles with certifications, assignments, and attendance tracking",
  "Document storage linked to specific projects and work sessions",
  "Operational dashboard with at-a-glance field intelligence",
];

const techStack = [
  "React / TypeScript (PWA)",
  "Firebase (Auth, Firestore, Storage)",
  "Google Maps / Satellite API",
  "Capacitor for cross-platform deployment",
  "Real-time location sync with geofencing",
];

const useCases = [
  { title: "Construction Site Visibility", body: "See every worker, vehicle, and project on one live map. No more phone calls to figure out who is where." },
  { title: "Work Session Tracking", body: "Log hours, materials, and progress per project. Documents attach directly to sessions — no more lost paperwork." },
  { title: "Fleet & Resource Management", body: "Track vehicles, equipment, and certifications. Know what is available, where, and for how long." },
];

export default function FenixConstructionTrackerPage() {
  return (
    <main id="main-content" className="site-shell">
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32">
        {/* Topographic background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.06]">
          <Image src="/assets/contour-pattern.svg" alt="" fill className="object-cover" />
        </div>
        <div className="container relative z-10 grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5" style={{ color: fenix.accent?.hex }}>{fenix.eyebrow}</p>
            <h1 className="max-w-[11ch] pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              {fenix.name}
            </h1>
            <p className="section-lede mt-6">{fenix.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="focus-ring rounded-full px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: fenix.accent?.hex }}>
                Request demo
              </Link>
              <Link href="/products/docvault" className="focus-ring rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
                Explore DocVault
              </Link>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[2rem]" style={{ borderColor: fenix.accent?.hex ? `${fenix.accent.hex}44` : undefined }}>
            <div className="relative aspect-[16/11] bg-black">
              <ImageWithFallback src={fenix.image} alt={fenix.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              {fenix.secondaryImage ? (
                <Image src={fenix.secondaryImage} alt="FENIX login screen" width={360} height={240} className="absolute bottom-5 right-5 w-[42%] rounded-xl border border-white/10 shadow-2xl" />
              ) : null}
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {fenix.facts.map((fact) => (
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
          <p className="eyebrow mb-5" style={{ color: fenix.accent?.hex }}>Capabilities</p>
          <h2 className="section-title mb-12">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6">
                <span className="mb-3 block font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: fenix.accent?.hex }}>0{i + 1}</span>
                <p className="text-sm leading-relaxed text-[var(--color-text)]">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: fenix.accent?.hex }}>Architecture</p>
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
          <p className="eyebrow mb-5" style={{ color: fenix.accent?.hex }}>Applied</p>
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
          <h2 className="section-title mb-6 mx-auto">The field, finally in one system.</h2>
          <p className="section-lede mx-auto mb-10">Workers, projects, vehicles, sessions, documents, and live locations — one operational picture your entire team can trust.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="focus-ring rounded-full px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: fenix.accent?.hex }}>
              Request a demo
            </Link>
            <Link href="/products/codexpilot" className="focus-ring rounded-full border border-white/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
              Explore CodexPilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
