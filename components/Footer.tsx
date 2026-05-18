import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Equipe", href: "#equipe" },
  { label: "Condomínios", href: "#condominios" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container-shell grid gap-10 md:grid-cols-[1.1fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="brand-mark brand-mark-muted">S</span>
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.14em] text-white">
                {siteConfig.shortName}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/52">Gestão Condominial</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/66">
            Síndico profissional em Brasília com gestão técnica, comunicação clara e presença ativa na rotina do condomínio.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Navegação</h3>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-title">Contato</h3>
          <div className="mt-4 grid gap-3">
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="footer-link">
              {siteConfig.whatsappDisplay}
            </a>
            {siteConfig.phones
              .filter((phone) => phone.display !== siteConfig.whatsappDisplay)
              .map((phone) => (
                <a key={phone.href} href={phone.href} className="footer-link">
                  {phone.display}
                </a>
              ))}
            <a href={`mailto:${siteConfig.email}`} className="footer-link">
              {siteConfig.email}
            </a>
            <a href={siteConfig.instagramHref} target="_blank" rel="noreferrer" className="footer-link">
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm leading-6 text-white/52 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © 2022 START Gestão Condominial</p>
        <p>CNPJ 45.386.449/0001-78</p>
      </div>
    </footer>
  );
}
