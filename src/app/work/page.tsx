import { Header } from "@/components/Header";
import { work, products } from "@/data/site";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Dorian Apps",
  description: "Systems built for real operational pressure. Products and projects by Nik Velkovski.",
};

export default function WorkPage() {
  const allWork = [...products, ...work];

  return (
    <>
      <Header />
      <main id="main-content" className="site-shell">
        {/* Hero */}
        <section className="section pt-32">
          <div className="container">
            <p className="eyebrow mb-5">System Registry</p>
            <h1 className="section-title mb-6">Built systems</h1>
            <p className="section-lede">
              Each system below started with a real operational problem. Products, projects, and experiments — catalogued as they were built.
            </p>
          </div>
        </section>

        {/* Work grid */}
        <section className="section border-t border-white/10">
          <div className="container">
            <div className="card-grid">
              {allWork.map((item) => (
                <Link
                  key={item.slug}
                  href={item.path}
                  className="glass-panel rounded-2xl p-6 group transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: item.accent?.hex ?? "var(--accent-active)" }}>
                      {item.type === "product" ? "Product" : "Project"}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/10">
          <div className="container text-center">
            <h2 className="section-title mb-6 mx-auto">Have an operational problem?</h2>
            <p className="section-lede mx-auto mb-10">Describe what is breaking or taking too much time. We build systems for work that has outgrown spreadsheets.</p>
            <Link href="/contact" className="cta-primary">
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
