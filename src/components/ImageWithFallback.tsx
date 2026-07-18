"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function ImageWithFallback({
  src,
  fallbackSrc = "/assets/neural-core-v2.png",
  alt,
  ...props
}: ImageProps & { fallbackSrc?: string }) {
  const [error, setError] = useState(false);
  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
