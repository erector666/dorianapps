import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dorian Apps",
  description:
    "Get in touch with Nik Velkovski at Dorian Apps. Start a conversation about AI products, autonomous agents, or operational software — no sales pitch, just direct discussion about your operational reality.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
