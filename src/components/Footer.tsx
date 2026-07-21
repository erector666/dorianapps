import Link from "next/link";
import { identity } from "@/data/site";
import { primaryLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14" role="contentinfo">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
          {/* Wordmark */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-lg font-bold tracking-[-0.01em] text-text">
              DORIAN APPS
            </span>
            <span className="text-sm text-muted max-w-[22ch]">
              Software for work that has outgrown spreadsheets
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer" className="flex flex-wrap gap-6 sm:gap-8">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-[0.12em] uppercase text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p className="m-0 font-mono text-[0.58rem] tracking-[0.12em] uppercase text-muted">
            © {new Date().getFullYear()} Dorian Apps — {identity.location}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.12em] uppercase text-text border-b border-white/20 pb-0.5 hover:border-accent transition-colors"
          >
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
