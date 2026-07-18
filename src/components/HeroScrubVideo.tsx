"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/utils/motion";

export function HeroScrubVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const [source, setSource] = useState("/media/hero-scrub-mobile.mp4");

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const syncSource = () => setSource(query.matches ? "/media/hero-scrub-desktop.mp4" : "/media/hero-scrub-mobile.mp4");
    syncSource();
    query.addEventListener("change", syncSource);
    return () => query.removeEventListener("change", syncSource);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;

    if (prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const updateVideo = (progress: number) => {
      const frame = 1 / 24;
      const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 6;
      const targetMax = Math.max(duration - frame, 0);
      const rawTime = progress * targetMax;
      const currentTime = Math.min(Math.round(rawTime / frame) * frame, targetMax);
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA && Math.abs(video.currentTime - currentTime) > 0.001) {
        video.currentTime = currentTime;
      }
    };

    const schedule = (progress: number) => {
      progressRef.current = progress;
      if (frameRef.current !== null) {
        return;
      }
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        updateVideo(progressRef.current);
      });
    };

    const onLoadedMetadata = () => updateVideo(progressRef.current);
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const trigger = ScrollTrigger.create({
        trigger: "#top",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => schedule(self.progress)
      });

      cleanup = () => trigger.kill();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [source]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <video
        key={source}
        ref={videoRef}
        className="h-full w-full object-cover opacity-62 saturate-125 md:opacity-64"
        src={source}
        muted
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(45,140,255,0.28),transparent_30rem),radial-gradient(circle_at_22%_64%,rgba(255,36,79,0.18),transparent_24rem),linear-gradient(90deg,rgba(3,5,10,0.98),rgba(3,5,10,0.74)_44%,rgba(3,5,10,0.5)),linear-gradient(0deg,#03050a_0%,rgba(3,5,10,0.24)_48%,rgba(3,5,10,0.88)_100%)]" />
    </div>
  );
}
