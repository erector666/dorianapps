import { Header } from "@/components/Header";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import Link from "next/link";
import { identity, process, toolkit } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dorian Apps",
  description:
    "Nik Velkovski — builder of production AI systems. Based in Switzerland / Macedonia / Remote, building practical AI products, autonomous agents, and operational software from real business friction.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="site-shell">

      {/* Hero with portrait */}
      <section className="relative overflow-hidden pt-32">
        <div className="container grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">About</p>
            <h1 className="max-w-5xl pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              {identity.founder} builds practical AI systems from real operational pressure.
            </h1>
            <p className="section-lede mt-8">
              {identity.company} is the product studio of {identity.legalName}: AI products, autonomous agent systems,
              developer tools, construction operations software, and document intelligence. The work is shaped by the
              difference between software that appears impressive and software that can be trusted to do useful work.
            </p>
            <p className="section-lede mt-4">
              Based in {identity.location}, the projects are driven by one thesis: {identity.thesis}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="focus-ring rounded-full bg-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-gray-200 transition-colors">
                Start a project
              </Link>
              <Link href="/products/docvault" className="focus-ring rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
                Explore products
              </Link>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/5] bg-black">
              <ImageWithFallback src="/assets/portrait-1.webp" alt="Nik Velkovski portrait" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / Process */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5">Methodology</p>
          <h2 className="section-title mb-12">How the work moves</h2>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <div key={i} className="relative border-r border-white/10 p-6 last:border-r-0 min-h-[18rem]">
                <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">{step.step}</span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5">Capabilities</p>
          <h2 className="section-title mb-12">What I work with</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolkit.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] font-mono text-[0.6rem] font-bold text-black">{i + 1}</span>
                <span className="text-sm text-[var(--color-text)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section border-t border-white/10">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/5] bg-black">
              <ImageWithFallback src="/assets/portrait-2.webp" alt="Nik Velkovski at workstation" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-5">The builder</p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] font-black leading-[0.92] mb-8">Operational pressure taught me what software actually needs to do.</h2>
            <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
              <p>
                I entered technology through the problems that software had failed to solve. Construction work in Switzerland
                made one thing clear: delays, scattered communication, and missing information are not abstract inefficiencies.
                They cost real money, real time, and real trust.
              </p>
              <p>
                That experience shaped every product I build. The standard is not "does it work in a demo?" — it is
                "does it survive real use when someone's operation depends on it?"
              </p>
              <p>
                Now I build AI products, autonomous agent systems, and operational software for teams that need
                intelligence that carries the work — not just chat windows that sound clever.
              </p>
              <p>
                I work from Switzerland, Macedonia, and remotely. Every system I ship is shaped by one question:
                will this actually help someone do their job better tomorrow than they could yesterday?
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
                Work together <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Experience snapshot */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5">Timeline</p>
          <h2 className="section-title mb-12">Where the work came from</h2>
          <div className="space-y-0 border-l-2 border-white/10 pl-8">
            {[
              { year: "2018–2020", title: "Construction operations, Switzerland", body: "Direct exposure to the real cost of disconnected tools, missing information, and paper-driven workflows." },
              { year: "2020–2022", title: "Field Ops system prototype", body: "Built the first version of what became the construction tracker — live maps, worker profiles, session logging." },
              { year: "2022–2024", title: "Product studio formation", body: "Dorian Apps takes shape. DocVault, CodexPilot, and 0Brain emerge as independent product lines solving different operational problems." },
              { year: "2024–Present", title: "Autonomous agent systems", body: "Focused on persistent memory, delegation, verification loops, and the infrastructure autonomous agents need to be dependable." },
            ].map((item, i) => (
              <div key={i} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">{item.year}</span>
                <h3 className="mt-2 font-display text-xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
