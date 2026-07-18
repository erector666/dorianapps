// Navigation link definitions — single source of truth for Header, Footer, and sitemap.

export interface NavLink {
  href: string;
  label: string;
  /** If true, renders as a highlighted CTA-style link */
  cta?: boolean;
}

export const primaryLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/products/docvault", label: "DocVault" },
  { href: "/products/codexpilot", label: "CodexPilot" },
  { href: "/products/fenix-construction-tracker", label: "Field Ops" },
  { href: "/products/0brain", label: "0Brain" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ctaLink: NavLink = {
  href: "/contact",
  label: "Start",
  cta: true,
};
