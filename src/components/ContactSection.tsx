import Link from "next/link";
import { RevealText } from "@/components/RevealText";

type ContactSectionProps = {
  headingLevel?: "h1" | "h2";
};

export function ContactSection({ headingLevel = "h2" }: ContactSectionProps) {
  const Heading = headingLevel;

  return (
    <section id="contact" className="section pb-10">
      <div className="container">
        <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(45,140,255,0.22),transparent_26rem),radial-gradient(circle_at_18%_88%,rgba(255,36,79,0.16),transparent_24rem)]" />
          <div className="relative">
          <p className="eyebrow mb-5">05 / Build the workforce</p>
          <RevealText>
            <Heading className="max-w-5xl pb-3 font-display text-[clamp(2.8rem,7vw,7rem)] font-black leading-[0.9]">
              Turn AI into dependable execution.
            </Heading>
          </RevealText>
          <p className="section-lede mt-8">
            If you are building an AI product, redesigning an inefficient operation, or exploring how autonomous agents
            can create a real competitive advantage, book a conversation with me. Follow what I am building, testing,
            breaking, and learning behind the scenes.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products/docvault"
              className="focus-ring rounded-full bg-white px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.22em] text-black"
            >
              View DocVault
            </Link>
            <Link
              href="/products/fenix-construction-tracker"
              className="focus-ring rounded-full border border-white/16 bg-white/6 px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.22em]"
            >
              View FENIX
            </Link>
          </div>
          </div>
        </div>
        <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-white/12 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-white/52 md:flex-row">
          <span>Dorian Apps / AI products and operational software</span>
          <span>Nik / Switzerland / Remote</span>
        </footer>
      </div>
    </section>
  );
}
