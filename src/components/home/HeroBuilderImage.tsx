import Image from "next/image";

export function HeroBuilderImage() {
  return (
    <div className="hero-builder-image">
      <Image
        src="/assets/the-builder.webp"
        alt="Nik Velkovski — AI product builder and systems developer"
        width={800}
        height={900}
        priority
        className="w-full h-auto object-cover rounded-xl opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-base/60 to-transparent rounded-xl" aria-hidden="true" />
    </div>
  );
}
