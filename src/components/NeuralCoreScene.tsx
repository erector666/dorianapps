"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { prefersReducedMotion } from "@/utils/motion";

const PRODUCT_TEXTURES = [
  "/assets/screenshots/fenix-live-map.png",
  "/assets/screenshots/docvault.png",
  "/assets/3.jfif"
];

export function NeuralCoreScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const mount = canvasRef.current;
    if (!root || !mount || prefersReducedMotion()) return;

    const mobile = window.matchMedia("(max-width: 800px)").matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02050a, 0.055);

    const camera = new THREE.PerspectiveCamera(mobile ? 47 : 40, window.innerWidth / window.innerHeight, 0.1, 80);
    camera.position.set(0, 0, mobile ? 8.2 : 8.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.1 : 1.55));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.78;
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.03).texture;
    scene.environment = environment;
    room.dispose();

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), mobile ? 0.18 : 0.28, 0.28, 0.82);
    composer.addPass(bloom);

    const machine = new THREE.Group();
    machine.position.set(mobile ? 0.95 : 2.35, mobile ? 1.25 : 0.05, 0);
    machine.rotation.set(-0.06, -0.18, 0.015);
    scene.add(machine);

    const metal = new THREE.MeshPhysicalMaterial({
      color: 0x151b24,
      metalness: 0.96,
      roughness: 0.19,
      clearcoat: 0.6,
      clearcoatRoughness: 0.16,
      envMapIntensity: 1.2
    });
    const darkMetal = new THREE.MeshPhysicalMaterial({
      color: 0x03060a,
      metalness: 0.88,
      roughness: 0.28,
      clearcoat: 0.35,
      envMapIntensity: 0.9
    });
    const silver = new THREE.MeshPhysicalMaterial({
      color: 0x526170,
      metalness: 1,
      roughness: 0.12,
      envMapIntensity: 1.15
    });
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0x7ebcff,
      metalness: 0.05,
      roughness: 0.04,
      transmission: 0.92,
      thickness: 1.35,
      ior: 1.48,
      transparent: true,
      opacity: 0.72,
      envMapIntensity: 1.25
    });
    const blueEnergy = new THREE.MeshStandardMaterial({ color: 0x08285c, emissive: 0x1368d8, emissiveIntensity: 1.8, roughness: 0.28, metalness: 0.4 });
    const redEnergy = new THREE.MeshStandardMaterial({ color: 0x450511, emissive: 0xc20d2b, emissiveIntensity: 0.9, roughness: 0.34, metalness: 0.35 });

    const outerShell = new THREE.Group();
    machine.add(outerShell);

    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(2.42, 0.2, 28, 160), metal);
    const outerTrim = new THREE.Mesh(new THREE.TorusGeometry(2.42, 0.225, 12, 160), silver);
    outerTrim.scale.set(1.012, 1.012, 0.17);
    outerTrim.position.z = 0.04;
    const midRing = new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.12, 24, 150), darkMetal);
    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(1.38, 0.065, 18, 140), silver);
    outerShell.add(outerRing, outerTrim, midRing, innerRing);

    const radialSupports = new THREE.Group();
    const supportGeometry = new THREE.BoxGeometry(0.88, 0.12, 0.18);
    for (let index = 0; index < 12; index += 1) {
      const angle = (index / 12) * Math.PI * 2;
      const support = new THREE.Mesh(supportGeometry, index % 3 === 0 ? silver : metal);
      support.position.set(Math.cos(angle) * 2.1, Math.sin(angle) * 2.1, 0.02);
      support.rotation.z = angle;
      radialSupports.add(support);
    }
    machine.add(radialSupports);

    const diagnosticLights = new THREE.Group();
    const lightGeometry = new THREE.BoxGeometry(0.19, 0.035, 0.04);
    for (let index = 0; index < 28; index += 1) {
      const angle = (index / 28) * Math.PI * 2;
      const light = new THREE.Mesh(lightGeometry, index % 9 === 0 ? redEnergy : blueEnergy);
      light.position.set(Math.cos(angle) * 2.15, Math.sin(angle) * 2.15, 0.23);
      light.rotation.z = angle + Math.PI / 2;
      diagnosticLights.add(light);
    }
    machine.add(diagnosticLights);

    const lensAssembly = new THREE.Group();
    machine.add(lensAssembly);
    const rearLens = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.38, 96), glass);
    rearLens.rotation.x = Math.PI / 2;
    rearLens.position.z = 0.12;
    const opticalCore = new THREE.Mesh(new THREE.SphereGeometry(0.74, 64, 64), blueEnergy);
    opticalCore.scale.z = 0.52;
    opticalCore.position.z = 0.32;
    const coreGlass = new THREE.Mesh(new THREE.SphereGeometry(1.02, 64, 64), glass);
    coreGlass.scale.z = 0.38;
    coreGlass.position.z = 0.44;
    lensAssembly.add(rearLens, opticalCore, coreGlass);

    const aperture = new THREE.Group();
    aperture.position.z = 0.74;
    lensAssembly.add(aperture);
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0.12, -0.16);
    bladeShape.lineTo(1.16, -0.25);
    bladeShape.quadraticCurveTo(1.02, 0.16, 0.53, 0.31);
    bladeShape.lineTo(0.08, 0.14);
    bladeShape.closePath();
    const bladeGeometry = new THREE.ExtrudeGeometry(bladeShape, { depth: 0.045, bevelEnabled: true, bevelSize: 0.018, bevelThickness: 0.012, bevelSegments: 2 });
    bladeGeometry.center();
    const apertureBlades: THREE.Mesh[] = [];
    for (let index = 0; index < 10; index += 1) {
      const angle = (index / 10) * Math.PI * 2;
      const blade = new THREE.Mesh(bladeGeometry, darkMetal);
      blade.position.set(Math.cos(angle) * 0.67, Math.sin(angle) * 0.67, 0);
      blade.rotation.z = angle + 0.38;
      aperture.add(blade);
      apertureBlades.push(blade);
    }
    const sensorCap = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.11, 64), glass);
    sensorCap.rotation.x = Math.PI / 2;
    sensorCap.position.z = 0.14;
    const sensorLight = new THREE.Mesh(new THREE.SphereGeometry(0.085, 32, 32), blueEnergy);
    sensorLight.scale.z = 0.38;
    sensorLight.position.z = 0.23;
    aperture.add(sensorCap, sensorLight);

    const energyRings = new THREE.Group();
    machine.add(energyRings);
    [1.08, 1.52, 2.08].forEach((radius, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, index === 1 ? 0.025 : 0.014, 10, 160), index === 2 ? redEnergy : blueEnergy);
      ring.position.z = 0.82 + index * 0.04;
      energyRings.add(ring);
    });

    const circuitCage = new THREE.Group();
    machine.add(circuitCage);
    for (let index = 0; index < 8; index += 1) {
      const arc = new THREE.Mesh(new THREE.TorusGeometry(2.72 + index * 0.035, 0.012, 8, 32, Math.PI * 0.42), index % 4 === 0 ? redEnergy : blueEnergy);
      arc.rotation.z = (index / 8) * Math.PI * 2;
      arc.rotation.x = index % 2 ? 0.26 : -0.18;
      circuitCage.add(arc);
    }

    const particleCount = mobile ? 180 : 420;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 0.35 + Math.random() * 2.95;
      const angle = Math.random() * Math.PI * 2;
      particlePositions[index * 3] = Math.cos(angle) * radius;
      particlePositions[index * 3 + 1] = Math.sin(angle) * radius;
      particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 1.9;
      const red = index % 41 === 0;
      particleColors[index * 3] = red ? 1 : 0.18;
      particleColors[index * 3 + 1] = red ? 0.04 : 0.52;
      particleColors[index * 3 + 2] = red ? 0.12 : 1;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: mobile ? 0.022 : 0.016, vertexColors: true, transparent: true, opacity: 0.86, depthWrite: false });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    machine.add(particles);

    const productPlanes = new THREE.Group();
    machine.add(productPlanes);
    const textureLoader = new THREE.TextureLoader();
    const planeGeometry = new THREE.PlaneGeometry(2.5, 1.4);
    const planeFrames: THREE.Group[] = [];
    PRODUCT_TEXTURES.forEach((source, index) => {
      const frame = new THREE.Group();
      const texture = textureLoader.load(source);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
      const screenMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0, side: THREE.DoubleSide, toneMapped: false });
      const screen = new THREE.Mesh(planeGeometry, screenMaterial);
      const border = new THREE.LineSegments(
        new THREE.EdgesGeometry(planeGeometry),
        new THREE.LineBasicMaterial({ color: index === 1 ? 0x4d8fff : 0x9abfff, transparent: true, opacity: 0 })
      );
      frame.add(screen, border);
      frame.position.set(index === 1 ? -3.9 : 3.9, (index - 1) * 1.65, -1.4 - index * 0.3);
      frame.rotation.y = index === 1 ? 0.5 : -0.5;
      frame.scale.setScalar(0.72);
      frame.visible = false;
      productPlanes.add(frame);
      planeFrames.push(frame);
    });

    const blueKey = new THREE.PointLight(0x2c83ff, 15, 14, 1.5);
    blueKey.position.set(2.8, 2.2, 4.5);
    const whiteRim = new THREE.PointLight(0xddeaff, 10, 12, 1.4);
    whiteRim.position.set(-3.2, 2.5, 3.4);
    const redRim = new THREE.PointLight(0xff173d, 3.5, 10, 1.7);
    redRim.position.set(2.8, -2.8, 2.2);
    const ambient = new THREE.AmbientLight(0x1e304c, 0.55);
    scene.add(blueKey, whiteRim, redRim, ambient);

    const pointer = { x: 0, y: 0, speed: 0 };
    let scrollProgress = 0;
    let raf = 0;
    let lastPointerX = 0;
    const onPointer = (event: PointerEvent) => {
      const nextX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.x = nextX;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
      pointer.speed = Math.min(Math.abs(nextX - lastPointerX) * 7, 1);
      lastPointerX = nextX;
      root.style.setProperty("--pointer-x", `${pointer.x * 18}px`);
      root.style.setProperty("--pointer-y", `${pointer.y * 13}px`);
    };
    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollProgress = window.scrollY / max;
      root.style.setProperty("--flow", scrollProgress.toFixed(4));
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 800 ? 1.1 : 1.55));
    };
    const render = () => {
      raf = requestAnimationFrame(render);
      const time = performance.now() * 0.001;
      pointer.speed *= 0.93;

      const targetX = mobile ? 0.9 : 2.25 - Math.sin(scrollProgress * Math.PI) * 0.45;
      const targetY = mobile ? 1.05 - scrollProgress * 1.25 : (scrollProgress - 0.45) * -0.55;
      machine.position.x += (targetX - machine.position.x) * 0.025;
      machine.position.y += (targetY - machine.position.y) * 0.025;
      machine.rotation.y += (pointer.x * 0.3 + scrollProgress * 0.82 - machine.rotation.y) * 0.035;
      machine.rotation.x += (-pointer.y * 0.2 + Math.sin(time * 0.45) * 0.035 - machine.rotation.x) * 0.035;

      camera.position.z += ((mobile ? 8.1 : 8.4) - scrollProgress * 0.65 - camera.position.z) * 0.025;
      camera.position.x += (pointer.x * -0.18 - camera.position.x) * 0.025;
      camera.position.y += (pointer.y * 0.12 - camera.position.y) * 0.025;
      camera.lookAt(machine.position.x * 0.18, machine.position.y * 0.08, 0);

      outerShell.rotation.z = time * 0.055 + scrollProgress * 1.8;
      radialSupports.rotation.z = -time * 0.09 - scrollProgress * 1.2;
      diagnosticLights.rotation.z = time * 0.12;
      circuitCage.rotation.z = -time * 0.075 + pointer.x * 0.08;
      energyRings.rotation.z = time * 0.16;
      energyRings.rotation.x = Math.sin(time * 0.7) * 0.05;
      particles.rotation.z = -time * 0.08;
      particles.rotation.y = time * 0.035;

      const open = 0.48 + Math.sin(time * 1.25) * 0.09 + pointer.speed * 0.3 + Math.min(scrollProgress * 0.22, 0.22);
      aperture.rotation.z = -time * 0.18;
      apertureBlades.forEach((blade, index) => {
        const angle = (index / apertureBlades.length) * Math.PI * 2;
        const radius = 0.58 + open * 0.33;
        blade.position.x = Math.cos(angle) * radius;
        blade.position.y = Math.sin(angle) * radius;
        blade.rotation.z = angle + 0.28 + open * 0.42;
      });
      opticalCore.scale.set(1 + Math.sin(time * 2.1) * 0.06, 1 + Math.sin(time * 2.1) * 0.06, 0.5);
      lensAssembly.rotation.y += (pointer.x * 0.16 - lensAssembly.rotation.y) * 0.04;
      lensAssembly.rotation.x += (-pointer.y * 0.13 - lensAssembly.rotation.x) * 0.04;
      blueEnergy.emissiveIntensity = 1.7 + Math.sin(time * 2.4) * 0.28 + pointer.speed * 0.6;

      const productPhase = THREE.MathUtils.clamp((scrollProgress - 0.23) / 0.46, 0, 1);
      planeFrames.forEach((frame, index) => {
        const center = 0.17 + index * 0.34;
        const visibility = Math.max(0, 1 - Math.abs(productPhase - center) * 3.8);
        frame.visible = visibility > 0.025;
        const screen = frame.children[0] as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
        const border = frame.children[1] as THREE.LineSegments<THREE.EdgesGeometry, THREE.LineBasicMaterial>;
        screen.material.opacity = visibility * 0.58;
        border.material.opacity = visibility * 0.52;
        frame.position.x = (index === 1 ? -3.7 : 3.7) + (1 - visibility) * (index === 1 ? -1.2 : 1.2);
        frame.rotation.y = (index === 1 ? 0.45 : -0.45) + pointer.x * 0.06;
      });

      bloom.strength = (mobile ? 0.16 : 0.26) + pointer.speed * 0.08;
      composer.render();
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        render();
      }
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    onScroll();
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
          object.geometry?.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if ("map" in material && material.map instanceof THREE.Texture) material.map.dispose();
            material.dispose();
          });
        }
      });
      environment.dispose();
      pmrem.dispose();
      composer.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={rootRef} className="neural-core-scene" aria-hidden="true">
      <div className="neural-core-photo">
        <Image src="/assets/neural-core-v2.png" alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div ref={canvasRef} className="neural-core-webgl" />
      <div className="neural-core-vignette" />
      <div className="neural-core-scan" />
    </div>
  );
}
