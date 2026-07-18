import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import type { CaseItem } from "@/data/site";

export function CasePage({ item }: { item: CaseItem }) {
  return (
    <main className="site-shell">
      <Header />
      <section className="relative overflow-hidden pt-32">
        <div className="container grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">{item.eyebrow}</p>
            <h1 className="max-w-[11ch] pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              {item.name}
            </h1>
            <p className="section-lede mt-6">{item.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="focus-ring rounded-full bg-[var(--color-accent)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111]"
              >
                Home
              </Link>
              {item.externalUrl ? (
                <a
                  href={item.externalUrl}
                  className="focus-ring rounded-full border border-[var(--color-border)] px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em]"
                >
                  Visit {item.externalUrl.replace("https://", "")}
                </a>
              ) : null}
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/11] bg-black">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {item.secondaryImage ? (
                <Image
                  src={item.secondaryImage}
                  alt={`${item.name} secondary screen`}
                  width={360}
                  height={240}
                  className="absolute bottom-5 right-5 w-[42%] rounded-xl border border-white/10 shadow-2xl"
                />
              ) : null}
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {item.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {fact.label}
                  </span>
                  <strong className="mt-2 block text-sm text-[var(--color-text)]">{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
