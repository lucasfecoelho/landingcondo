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

function BrandSymbol() {
  return (
    <span className="brand-symbol" aria-hidden="true">
      <span className="brand-tower brand-tower-left" />
      <span className="brand-tower brand-tower-right" />
    </span>
  );
}

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
      <div className="header-inner container-shell">
        <a href="#inicio" className="brand-link min-w-0" aria-label="START Gestão Condominial">
          <BrandSymbol />
          <span className="brand-text min-w-0">
            <span className="brand-name">
              START
            </span>
            <span className="block text-[0.67rem] uppercase tracking-[0.22em] text-white/68">Gestão Condominial</span>
          </span>
        </a>

        <nav className="site-nav hidden lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" variant="inverted">
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
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" variant="inverted" className="mt-3 w-full">
            Solicitar proposta
          </Button>
        </nav>
      </div>
    </header>
  );
}
