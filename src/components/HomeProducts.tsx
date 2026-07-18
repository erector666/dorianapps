"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const products = [
  {
    number: "01",
    name: "FENIX",
    type: "Operational intelligence",
    line: "The field, finally in one system.",
    copy: "Workers, projects, vehicles, work sessions, documents, and live locations become one operational picture.",
    image: "/assets/screenshots/fenix-live-map.png",
    href: "/products/fenix-construction-tracker",
    alt: "FENIX live construction operations map"
  },
  {
    number: "02",
    name: "DocVault",
    type: "Document intelligence",
    line: "Paperwork becomes working memory.",
    copy: "Private documents turn into structured, searchable information that a business can retrieve and act on.",
    image: "/assets/screenshots/docvault.png",
    href: "/products/docvault",
    alt: "DocVault private AI document platform"
  },
  {
    number: "03",
    name: "CodexPilot",
    type: "Developer intelligence",
    line: "Repository context, wherever the work moves.",
    copy: "Mobile AI coding, local models, and repository-level control designed around intent, evidence, and review.",
    image: "/assets/3.jfif",
    href: "/products/codexpilot",
    alt: "Developer working with a code repository"
  }
];

function ProductMoment({ product, index }: { product: (typeof products)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const onPointer = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty("--tilt-x", `${-y * 5}deg`);
      element.style.setProperty("--tilt-y", `${x * 7}deg`);
      element.style.setProperty("--glare-x", `${(x + 0.5) * 100}%`);
      element.style.setProperty("--glare-y", `${(y + 0.5) * 100}%`);
    };
    const reset = () => {
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
    };
    element.addEventListener("pointermove", onPointer);
    element.addEventListener("pointerleave", reset);
    return () => {
      element.removeEventListener("pointermove", onPointer);
      element.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section ref={ref} className="flow-product" data-stage={index + 2}>
      <div className="flow-product-index">{product.number} / 03</div>
      <div className="flow-product-copy">
        <p className="flow-kicker">{product.type}</p>
        <h2>{product.name}</h2>
        <h3>{product.line}</h3>
        <p>{product.copy}</p>
        <Link href={product.href} className="flow-link">Open system <span aria-hidden="true">↗</span></Link>
      </div>
      <Link href={product.href} className="flow-product-frame" aria-label={`Explore ${product.name}`}>
        <div className="flow-product-screen">
          <Image src={product.image} alt={product.alt} fill sizes="(max-width: 800px) 92vw, 54vw" className="object-cover" />
          <div className="flow-product-reflection" />
        </div>
        <div className="flow-frame-meta"><span>LIVE SYSTEM</span><span>DORIAN / {product.number}</span></div>
      </Link>
    </section>
  );
}

export function HomeProducts() {
  return (
    <div id="systems" className="flow-products">
      <div className="flow-container flow-products-intro">
        <p className="flow-kicker">Three products / One direction</p>
        <h2>The intelligence moves closer to the work.</h2>
      </div>
      {products.map((product, index) => <ProductMoment key={product.name} product={product} index={index} />)}
    </div>
  );
}
