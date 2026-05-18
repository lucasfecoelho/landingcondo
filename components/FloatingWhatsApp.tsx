import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="floating-whatsapp"
    >
      <span className="floating-whatsapp-dot" />
      WhatsApp
    </a>
  );
}
