"use client";

import { m, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`container ${className}`}>{children}</div>;

export const GlassCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`glass-card ${className}`}>{children}</div>;

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <m.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</m.div>;
}

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{text && <p className="section-lead">{text}</p>}</div>;
}

export function PrimaryLink({ children, href = "#contact", small = false }: { children: ReactNode; href?: string; small?: boolean }) {
  return <a className={`button primary ${small ? "small" : ""}`} href={href} data-cta="availability">{children}<ArrowRight aria-hidden="true" size={small ? 16 : 18} /></a>;
}

export function SecondaryLink({ children, href }: { children: ReactNode; href: string }) {
  return <a className="button secondary" href={href} data-cta={href.includes("wa.me") ? "whatsapp" : undefined} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{children}</a>;
}
