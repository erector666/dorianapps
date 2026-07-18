import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/site";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

export function ProductShowcase() {
  return (
    <section id="systems" className="section overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(45,140,255,0.6),rgba(255,36,79,0.45),transparent)]" />
      <div className="container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="eyebrow mb-4">01 / Built from pressure</p>
            <RevealText>
              <h2 className="section-title">Software that earns trust in the field.</h2>
            </RevealText>
          </div>
          <p className="section-lede">
            I stopped being interested in technology that only looks impressive. These products are built around the
            hard parts: paperwork, missing context, mobile development, field coordination, and the need for systems that
            keep working after the demo ends.
          </p>
        </div>
        <FadeIn stagger={0.12} className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="glass-panel depth-card group overflow-hidden rounded-[1.5rem]">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-86 transition-transform duration-700 ease-out-expo group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(45,140,255,0.18),transparent_18rem),linear-gradient(180deg,transparent,rgba(3,5,10,0.86))]" />
              </div>
              <div className="p-6 md:p-8">
                <p className="eyebrow mb-3">{product.eyebrow}</p>
                <h3 className="font-display text-4xl font-bold">{product.name}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 bg-white/5 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/58"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={product.path}
                  className="mt-6 inline-flex rounded-full border border-white/14 bg-white/6 px-5 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white"
                >
                  Open page
                </Link>
              </div>
            </article>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
