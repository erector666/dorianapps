export interface NavLink {
  href: string;
  label: string;
  cta?: boolean;
}

export const primaryLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/approach", label: "Approach" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ctaLink: NavLink = {
  href: "/contact",
  label: "Start a project",
  cta: true,
};
