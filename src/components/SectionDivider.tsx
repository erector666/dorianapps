/**
 * Thin horizontal rule with a gradient transparent → accent → transparent.
 * Used to separate major sections with a touch of the current accent color.
 */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      role="separator"
      className={`h-px w-full ${className}`}
      style={{
        background: "linear-gradient(90deg, transparent 0%, var(--accent-hex, var(--color-accent)) 50%, transparent 100%)",
        opacity: 0.3,
      }}
    />
  );
}
