import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 11.5a7.75 7.75 0 0 1-8 7.5 9.2 9.2 0 0 1-3.32-.61L4 20l1.66-3.71A7.24 7.24 0 0 1 4 11.5 7.75 7.75 0 0 1 12 4a7.75 7.75 0 0 1 8 7.5Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
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
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="contact-row">
            <span className="contact-icon">
              <ChatIcon />
            </span>
            <span>
              <span className="contact-label">WhatsApp principal</span>
              <span className="contact-value">{siteConfig.whatsappDisplay}</span>
            </span>
          </a>

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

          <div className="contact-row items-start">
            <span className="contact-icon mt-0.5">
              <PhoneIcon />
            </span>
            <span>
              <span className="contact-label">Telefones adicionais</span>
              <span className="mt-2 flex flex-col gap-1.5">
                {siteConfig.phones
                  .filter((phone) => phone.display !== siteConfig.whatsappDisplay)
                  .map((phone) => (
                    <a key={phone.href} href={phone.href} className="contact-value transition hover:text-white">
                      {phone.display}
                    </a>
                  ))}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
