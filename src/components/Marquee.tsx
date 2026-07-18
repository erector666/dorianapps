interface Props {
  items: string[];
  separator?: string;
}

export function Marquee({ items, separator = "/" }: Props) {
  const doubled = [...items, ...items];

  return (
    <div className="ticker-wrap" aria-label="Dorian Apps product ticker">
      <div className="ticker-inner">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="ticker-item px-6 font-mono text-sm uppercase tracking-wider text-white/68"
          >
            {item}
            <span className="mx-4 text-[var(--color-accent)]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
