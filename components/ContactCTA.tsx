import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 11.7a7.8 7.8 0 0 1-11.4 6.9L4 20l1.48-4.35A7.78 7.78 0 1 1 20 11.7Z" />
      <path d="M9 8.6c.2-.42.42-.43.7-.43h.5c.16 0 .4.06.61.49.22.52.74 1.8.8 1.93.07.13.1.29.02.46-.2.42-.42.66-.72 1 .52.9 1.25 1.63 2.16 2.13.36-.45.58-.72.92-.72.17 0 .33.04.48.12.16.08 1.5.72 1.75.85.26.13.43.2.49.32.06.12.06.72-.17 1.28-.24.57-1.32 1.1-1.83 1.14-.47.04-1.08.06-1.74-.1-.4-.1-.92-.3-1.58-.58-2.78-1.2-4.6-3.98-4.74-4.16-.14-.18-1.13-1.5-1.13-2.86 0-1.35.72-2.02.98-2.29.25-.27.55-.34.74-.34Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.25 6.9h.01" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m5.5 7.5 6.5 5 6.5-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.4 5.5c.3-.7 1.1-1 1.8-.8l1.9.6c.7.2 1.1.9 1 1.6l-.3 1.8a1.8 1.8 0 0 0 .5 1.5l1.5 1.5a1.8 1.8 0 0 0 1.5.5l1.8-.3c.7-.1 1.4.3 1.6 1l.6 1.9c.2.7-.1 1.5-.8 1.8l-1.2.5c-1.6.7-4.5-.5-7.4-3.4-2.9-2.9-4.1-5.8-3.4-7.4l.4-1.3Z" />
    </svg>
  );
}

export function ContactCTA() {
  const contactPhones = siteConfig.phones;

  return (
    <section id="contato" className="contact-section scroll-mt-24">
      <div className="container-shell relative grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="eyebrow text-[var(--gold)]">Contato</p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-[1.95rem] leading-[1.08] text-white sm:text-[2.4rem] lg:text-[2.85rem]">
            Entre em contato e <span className="text-[var(--gold)] italic">solicite sua proposta</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/78 sm:text-[1.05rem] sm:leading-8">
            Fale com a START Gestão Condominial e descubra como uma gestão profissional pode transformar a rotina do seu condomínio.
          </p>
          <Button href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="mt-7 w-full sm:w-auto">
            Falar no WhatsApp
          </Button>
        </div>

        <div className="contact-panel">
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="contact-row contact-row-primary">
            <span className="contact-icon contact-icon-whatsapp">
              <WhatsAppIcon />
            </span>
            <span>
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">{siteConfig.whatsappDisplay}</span>
            </span>
          </a>

          {contactPhones.map((phone) => (
            <a key={phone.href} href={phone.href} className="contact-row">
              <span className="contact-icon">
                <PhoneIcon />
              </span>
              <span>
                <span className="contact-label">Telefone</span>
                <span className="contact-value">{phone.display}</span>
              </span>
            </a>
          ))}

          <a href={siteConfig.instagramHref} target="_blank" rel="noreferrer" className="contact-row">
            <span className="contact-icon">
              <InstagramIcon />
            </span>
            <span>
              <span className="contact-label">Instagram</span>
              <span className="contact-value">{siteConfig.instagramHandle}</span>
            </span>
          </a>

          <a href={`mailto:${siteConfig.email}`} className="contact-row">
            <span className="contact-icon">
              <MailIcon />
            </span>
            <span>
              <span className="contact-label">E-mail</span>
              <span className="contact-value">{siteConfig.email}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
