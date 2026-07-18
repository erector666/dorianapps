import Image from "next/image";
import Link from "next/link";
import { work } from "@/data/site";
import { RevealText } from "@/components/RevealText";

export function WorkSection() {
  return (
    <section id="work" className="section overflow-hidden">
      <div className="container grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow mb-4">02 / The contrast</p>
          <RevealText>
            <h2 className="section-title">Physical work by day. Systems by night.</h2>
          </RevealText>
            <p className="section-lede mt-8">
            I do not approach this as someone standing outside the problem. I approach it after dealing with deadlines,
            bureaucracy, clients, and operational pressure, then building the tools that should have existed in the first
            place.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Construction reality", "Business friction", "AI execution"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/12 bg-white/[0.035] p-4 font-mono text-xs uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel-strong depth-card relative overflow-hidden rounded-[2rem]">
          <Image
            src="/assets/3.jfif"
            alt="Dorian working at a keyboard beside notes and code"
            width={1200}
            height={900}
            className="h-full min-h-[30rem] w-full object-cover opacity-86"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,140,255,0.22),transparent_24rem),radial-gradient(circle_at_80%_80%,rgba(255,36,79,0.17),transparent_22rem),linear-gradient(180deg,transparent,rgba(3,5,10,0.88))]" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Behind the scenes</p>
            <p className="mt-2 max-w-lg text-sm leading-6 text-white/72">
              Testing, breaking, auditing, rebuilding, and pushing systems until they become more than impressive demos.
              {` ${work[0].name}`} remains separate client web work, not the tracker product.
            </p>
            <Link
              href="/work/fenix-plus-sa"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-black"
            >
              Open case
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
