"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/utils/motion";

gsap.registerPlugin(ScrollTrigger);

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current || prefersReducedMotion()) {
      return;
    }

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    camera.position.z = 6.8;

    const particleCount = isMobile ? 150 : 320;
    const positions = new Float32Array(particleCount * 3);
    const seeds = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    const blue = new THREE.Color("#2d8cff");
    const white = new THREE.Color("#ffffff");
    const red = new THREE.Color("#ff244f");

    for (let index = 0; index < particleCount; index += 1) {
      const radius = 1.2 + Math.random() * 4.2;
      const angle = Math.random() * Math.PI * 2;
      const vertical = (Math.random() - 0.5) * 4.2;
      const layer = index % 5;
      positions[index * 3] = Math.cos(angle) * radius + (layer === 0 ? 1.2 : 0);
      positions[index * 3 + 1] = vertical;
      positions[index * 3 + 2] = Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 1.4;
      seeds[index] = Math.random() * Math.PI * 2;

      const color = index % 13 === 0 ? red : index % 3 === 0 ? white : blue;
      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.04 : 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.86,
      depthWrite: false
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const linePositions = new Float32Array((particleCount - 1) * 6);
    for (let index = 0; index < particleCount - 1; index += 1) {
      const source = index * 3;
      const targetIndex = (index + 3 + (index % 11)) % particleCount;
      const target = targetIndex * 3;
      linePositions[index * 6] = positions[source];
      linePositions[index * 6 + 1] = positions[source + 1];
      linePositions[index * 6 + 2] = positions[source + 2];
      linePositions[index * 6 + 3] = positions[target];
      linePositions[index * 6 + 4] = positions[target + 1];
      linePositions[index * 6 + 5] = positions[target + 2];
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#2d8cff"),
      transparent: true,
      opacity: 0.18
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const coreGeometry = new THREE.IcosahedronGeometry(isMobile ? 0.78 : 1.02, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.055,
      wireframe: true
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.set(isMobile ? 0 : 1.5, 0.1, -0.8);
    scene.add(core);

    const cursor = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      cursor.x = (event.clientX / window.innerWidth - 0.5) * 2;
      cursor.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.matchMedia("(max-width: 768px)").matches ? 1 : Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", onResize);

    const trigger = ScrollTrigger.create({
      trigger: "#top",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const scale = 1 - self.progress * 0.16;
        gsap.set(mount, {
          opacity: 1 - self.progress * 0.85,
          scale,
          transformOrigin: "50% 50%"
        });
        core.rotation.z = self.progress * Math.PI * 1.4;
        core.position.y = 0.1 + self.progress * 0.7;
      }
    });

    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = performance.now() * 0.001;
      const position = geometry.attributes.position as THREE.BufferAttribute;

      for (let index = 0; index < particleCount; index += 1) {
        const offset = index * 3;
        position.array[offset + 1] += Math.sin(elapsed * 0.9 + seeds[index]) * 0.001;
        position.array[offset] += Math.cos(elapsed * 0.55 + seeds[index]) * 0.00045;
      }

      position.needsUpdate = true;
      points.rotation.y += (cursor.x * 0.26 + elapsed * 0.025 - points.rotation.y) * 0.035;
      points.rotation.x += (-cursor.y * 0.14 - points.rotation.x) * 0.035;
      lines.rotation.copy(points.rotation);
      core.rotation.x += 0.003;
      core.rotation.y += 0.004;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      trigger.kill();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      scene.remove(points);
      scene.remove(lines);
      scene.remove(core);
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />;
}
