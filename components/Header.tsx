"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { Button } from "./Button";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Equipe", href: "#equipe" },
  { label: "Condomínios", href: "#condominios" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container-shell flex min-h-[4.75rem] items-center justify-between gap-3 lg:min-h-20">
        <a href="#inicio" className="min-w-0 leading-tight" aria-label="START Gestão Condominial">
          <span className="min-w-0 leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.16em] text-white transition lg:text-[1.08rem]">
              START
            </span>
            <span className="block text-[0.67rem] uppercase tracking-[0.22em] text-white/68">Gestão Condominial</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
            Solicitar proposta
          </Button>
        </div>

        <button
          type="button"
          className="menu-button lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Abrir menu</span>
          <span className="relative block h-4 w-5">
            <span className={`menu-line top-0 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`menu-line top-[7px] ${isOpen ? "opacity-0" : ""}`} />
            <span className={`menu-line top-[14px] ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div className={`mobile-menu-shell lg:hidden ${isOpen ? "is-open" : ""}`}>
        <nav id="mobile-menu" className="container-shell flex flex-col py-3" aria-label="Mobile">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-3.5 text-sm text-white/78 transition hover:text-white last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="mt-3 w-full">
            Solicitar proposta
          </Button>
        </nav>
      </div>
    </header>
  );
}
