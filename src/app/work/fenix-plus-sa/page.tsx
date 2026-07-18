import { Header } from "@/components/Header";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import Link from "next/link";
import { work } from "@/data/site";
import type { Metadata } from "next";

const item = work.find((w) => w.slug === "fenix-plus-sa")!;

export const metadata: Metadata = {
  title: `${item.name} | Dorian Apps`,
  description: item.description,
};

export default function FenixPlusSaPage() {
  return (
    <main className="site-shell">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32">
        <div className="container grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5" style={{ color: item.accent?.hex }}>{item.eyebrow}</p>
            <h1 className="max-w-[11ch] pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              {item.name}
            </h1>
            <p className="section-lede mt-6">{item.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {item.externalUrl ? (
                <a
                  href={item.externalUrl}
                  className="focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors"
                  style={{ background: item.accent?.hex }}
                >
                  Visit {item.externalUrl.replace("https://", "")} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <Link href="/work/fenix-plus-sa" className="focus-ring rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
                Project details
              </Link>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[2rem]" style={{ borderColor: item.accent?.hex ? `${item.accent.hex}44` : undefined }}>
            <div className="relative aspect-[16/11] bg-black">
              <ImageWithFallback src={item.image} alt={item.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {item.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">{fact.label}</span>
                  <strong className="mt-2 block text-sm text-[var(--color-text)]">{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Context */}
      <section className="section border-t border-white/10">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow mb-5" style={{ color: item.accent?.hex }}>Context</p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,5rem)] font-black leading-[0.92] mb-8">A company website that names what it actually is.</h2>
          </div>
          <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
            <p>
              Fenix Plus SA is a Swiss construction and services company. This project is not the construction tracker app —
              it is company website work built by {item.facts[2]?.value || "Nikolcho Velkovski"}, published at{" "}
              <a href={item.externalUrl} className="underline decoration-white/20 hover:decoration-white/60 transition-colors" style={{ color: item.accent?.hex }}>
                fenixplus.ch
              </a>.
            </p>
            <p>
              The distinction matters. Clean systems start by naming what each product actually is. The operational
              tracker (Field Ops) is a separate product. This website represents the company behind the work —
              its services, its team, its presence.
            </p>
            <p>
              The site presents the company's construction services, contact information, and credentials in a
              clear, modern format designed to build trust with potential clients and partners in Switzerland.
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: item.accent?.hex }}>Scope</p>
          <h2 className="section-title mb-12">What was delivered</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Company Profile", body: "Complete about section with company history, services overview, and team presentation." },
              { title: "Service Pages", body: "Dedicated pages for construction services, roadworks, demolition, and civil engineering." },
              { title: "Contact & Location", body: "Integrated contact form, Google Maps location, phone, and email — built for Swiss client expectations." },
              { title: "Responsive Design", body: "Mobile-first layout that works on construction site tablets and office desktops alike." },
              { title: "Multilingual Ready", body: "Structure prepared for French, German, and Italian — the three main Swiss languages." },
              { title: "Performance", body: "Fast, SEO-optimised static site built with modern tooling for reliable, low-maintenance hosting." },
            ].map((detail, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6">
                <span className="mb-3 block font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: item.accent?.hex }}>0{i + 1}</span>
                <h3 className="font-display text-lg font-bold leading-tight">{detail.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{detail.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="section border-t border-white/10">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border px-4 py-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]" style={{ borderColor: `${item.accent?.hex}44`, color: item.accent?.hex }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-white/10">
        <div className="container text-center">
          <h2 className="section-title mb-6 mx-auto">Need a company website?</h2>
          <p className="section-lede mx-auto mb-10">Clean, fast, SEO-optimised sites that present your business clearly — built by someone who understands operations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {item.externalUrl ? (
              <a href={item.externalUrl} className="focus-ring rounded-full px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: item.accent?.hex }}>
                Visit {item.externalUrl.replace("https://", "")} <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <Link href="/contact" className="focus-ring rounded-full border border-white/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
