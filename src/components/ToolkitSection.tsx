import { toolkit } from "@/data/site";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

export function ToolkitSection() {
  return (
    <section id="toolkit" className="section overflow-hidden">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <p className="eyebrow mb-4">03 / Agent systems</p>
            <RevealText>
              <h2 className="section-title">Software that stops waiting.</h2>
            </RevealText>
            <p className="section-lede mt-8">
              The bigger question is what happens when software stops waiting for instructions and starts pursuing goals.
              That is where agents, memory, delegation, and verification become practical business infrastructure.
            </p>
          </div>
          <FadeIn className="grid gap-3 sm:grid-cols-2">
            {toolkit.map((item) => (
              <div key={item} className="glass-panel depth-card rounded-2xl p-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/72">{item}</span>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
