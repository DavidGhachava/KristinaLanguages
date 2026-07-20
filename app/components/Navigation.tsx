"use client";

import { BookOpenCheck, LayoutGrid, Mail, Menu, MessageSquareHeart, UserRound, UsersRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { PrimaryLink } from "./UI";

const links = [
  { label: "Обо мне", detail: "О Кристине", href: "#about", icon: UserRound },
  { label: "Форматы", detail: "Как заниматься", href: "#formats", icon: LayoutGrid },
  { label: "Программа", detail: "Что изучаем", href: "#program", icon: BookOpenCheck },
  { label: "Для кого", detail: "Кому подойдёт", href: "#audience", icon: UsersRound },
  { label: "Что ценят", detail: "Подход к урокам", href: "#reviews", icon: MessageSquareHeart },
  { label: "Контакты", detail: "Написать Кристине", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); addEventListener("scroll", onScroll, { passive: true }); return () => removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; addEventListener("keydown", close); return () => removeEventListener("keydown", close); }, []);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
    <div className="nav-container">
      <a className="wordmark" href="#top" aria-label="Кристина Беридзе — на главную"><span>KB</span><strong>Кристина Беридзе</strong></a>
      <nav className="desktop-nav" aria-label="Основная навигация">{links.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="nav-cta"><PrimaryLink small>Узнать о местах</PrimaryLink></div>
      <button className="menu-toggle" type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <button className={`menu-backdrop ${open ? "open" : ""}`} type="button" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />
    <nav id="mobile-menu" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Мобильная навигация">
      <div className="mobile-menu-top"><div><small>Навигация</small><strong>Куда перейти?</strong></div><span>ქართული</span></div>
      <div className="mobile-link-grid">{links.map(({ label, detail, href, icon: Icon }, index) => <a key={href} href={href} onClick={() => setOpen(false)} style={{ "--item-index": index } as CSSProperties}><span className="mobile-link-icon"><Icon aria-hidden="true" /></span><span><strong>{label}</strong><small>{detail}</small></span><i>{String(index + 1).padStart(2, "0")}</i></a>)}</div>
      <PrimaryLink>Узнать о свободных местах</PrimaryLink>
      <div className="mobile-socials"><a href="https://wa.me/995571010750" target="_blank" rel="me noreferrer" aria-label="Написать Кристине в WhatsApp"><FaWhatsapp aria-hidden="true" /><span>WhatsApp</span></a><a href="https://www.facebook.com/kristina.beridze.3" target="_blank" rel="me noreferrer" aria-label="Профиль Кристины в Facebook"><FaFacebookF aria-hidden="true" /><span>Facebook</span></a></div>
    </nav>
  </header>;
}
