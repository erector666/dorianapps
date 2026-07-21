import { Header } from "@/components/Header";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import Link from "next/link";
import { products } from "@/data/site";
import type { Metadata } from "next";

const docvault = products.find((p) => p.slug === "docvault")!;

export const metadata: Metadata = {
  title: `${docvault.name} | Dorian Apps`,
  description: docvault.description,
};

const features = [
  "Private AI document search with structured retrieval",
  "Multi-format ingestion: PDFs, invoices, contracts, tax letters",
  "Role-based access and encrypted storage",
  "Full-text extraction with citation-backed answers",
  "Organisational memory that grows with every document",
];

const techStack = [
  "Next.js / TypeScript",
  "Supabase (Auth + Storage + Vector)",
  "OpenAI embeddings + RAG pipeline",
  "PostgreSQL with pgvector",
  "Vercel Edge deployment",
];

const useCases = [
  { title: "Administrative Overload", body: "Turn months of scattered paperwork — invoices, contracts, notices — into a single, searchable knowledge base that answers questions with citations." },
  { title: "Compliance & Audit", body: "Every document is indexed, versioned, and retrievable. Prove what was known, when, and by whom." },
  { title: "Team Memory", body: "When key people leave, the documents stay. DocVault preserves institutional knowledge as structured, queryable memory." },
];

export default function DocVaultPage() {
  return (
    <main id="main-content" className="site-shell">
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32">
        <div className="container grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5" style={{ color: docvault.accent?.hex }}>{docvault.eyebrow}</p>
            <h1 className="max-w-[11ch] pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              {docvault.name}
            </h1>
            <p className="section-lede mt-6">{docvault.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {docvault.externalUrl ? (
                <a href={docvault.externalUrl} className="focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white border border-white/20 hover:bg-white/10 transition-colors" style={{ borderColor: docvault.accent?.hex, color: docvault.accent?.hex }}>
                  Visit {docvault.externalUrl.replace("https://", "")} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <Link href="/contact" className="focus-ring rounded-full bg-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-gray-200 transition-colors">
                Inquire
              </Link>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[2rem]" style={{ borderColor: docvault.accent?.hex ? `${docvault.accent.hex}44` : undefined }}>
            <div className="relative aspect-[16/11] bg-black">
              <ImageWithFallback src={docvault.image} alt={docvault.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {docvault.facts.map((fact) => (
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
          <p className="eyebrow mb-5" style={{ color: docvault.accent?.hex }}>Capabilities</p>
          <h2 className="section-title mb-12">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6">
                <span className="mb-3 block font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: docvault.accent?.hex }}>0{i + 1}</span>
                <p className="text-sm leading-relaxed text-[var(--color-text)]">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: docvault.accent?.hex }}>Architecture</p>
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
          <p className="eyebrow mb-5" style={{ color: docvault.accent?.hex }}>Applied</p>
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
          <h2 className="section-title mb-6 mx-auto">Ready to organise your documents?</h2>
          <p className="section-lede mx-auto mb-10">Turn administrative chaos into structured, searchable intelligence your team can act on.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {docvault.externalUrl ? (
              <a href={docvault.externalUrl} className="focus-ring rounded-full px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: docvault.accent?.hex }}>
                Open DocVault <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <Link href="/contact" className="focus-ring rounded-full border border-white/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
