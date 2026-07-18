import { identity } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/15 px-0 py-10" role="contentinfo">
      <div className="experience-container flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
        {/* Wordmark */}
        <div className="flex flex-col gap-1">
          <span className="font-display text-lg font-bold tracking-[-0.01em] text-text">
            DORIAN APPS
          </span>
          <span className="font-body text-sm text-muted">
            AI-native software studio
          </span>
        </div>

        {/* Location + Contact */}
        <div className="flex flex-col gap-3 text-right">
          <p className="m-0 font-mono text-xs tracking-[0.14em] uppercase text-muted">
            {identity.location}
          </p>
          <a
            href="/contact"
            className="inline-flex justify-end font-mono text-xs font-semibold tracking-[0.14em] uppercase text-text border-b border-white/20 pb-0.5 hover:border-white/60 transition-colors"
          >
            Start a project
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="experience-container mt-8 pt-4 border-t border-white/10">
        <p className="m-0 font-mono text-[0.58rem] tracking-[0.12em] uppercase text-muted">
          © {new Date().getFullYear()} Dorian Apps. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
