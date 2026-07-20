"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PrimaryLink } from "./UI";

const links = [["Обо мне", "#about"], ["Форматы", "#formats"], ["Программа", "#program"], ["Для кого", "#audience"], ["Отзывы", "#reviews"], ["Контакты", "#contact"]];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); addEventListener("scroll", onScroll, { passive: true }); return () => removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
    <div className="nav-container">
      <a className="wordmark" href="#top" aria-label="Кристина Беридзе — на главную"><span>კბ</span><strong>Кристина Беридзе</strong></a>
      <nav className="desktop-nav" aria-label="Основная навигация">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="nav-cta"><PrimaryLink small>Узнать о местах</PrimaryLink></div>
      <button className="menu-toggle" type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Мобильная навигация">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<PrimaryLink>Узнать о свободных местах</PrimaryLink></nav>
  </header>;
}
