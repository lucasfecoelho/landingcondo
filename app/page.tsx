import Image from "next/image";
import karinaPhoto from "../karinafoto.png";
import patriciaPhoto from "../patriciafoto.png";
import { ActivityCard } from "@/components/ActivityCard";
import { Button } from "@/components/Button";
import { ContactCTA } from "@/components/ContactCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TeamCard } from "@/components/TeamCard";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Transparência total",
  "Atendimento humanizado",
  "Valorização do patrimônio",
  "Gestão estratégica",
];

const activities = [
  {
    title: "Gestão Administrativa",
    icon: "document" as const,
    items: [
      "Convocação de assembleias ordinárias e extraordinárias",
      "Representação legal do condomínio",
      "Cumprimento da convenção, regimento interno e decisões de assembleia",
      "Participação em reuniões do conselho",
    ],
  },
  {
    title: "Gestão Financeira",
    icon: "finance" as const,
    items: [
      "Elaboração de orçamento anual",
      "Cobrança de contribuições condominiais",
      "Aplicação e cobrança de multas",
      "Prestação de contas à assembleia",
      "Redução da inadimplência",
    ],
  },
  {
    title: "Manutenção e Segurança",
    icon: "maintenance" as const,
    items: [
      "Conservação e manutenção das áreas comuns",
      "Plano de manutenção preventiva",
      "Seguro da edificação",
      "Cumprimento das normas da ABNT 16.280",
      "Segurança dos moradores",
    ],
  },
  {
    title: "Relacionamento e Convivência",
    icon: "people" as const,
    items: [
      "Gestão de funcionários próprios e terceirizados",
      "Mediação de conflitos",
      "Gestão de contratos",
      "Campanhas educativas",
    ],
  },
];

const team = [
  {
    name: "Karina Nápoles",
    role: "Síndica Profissional",
    description: "Terapeuta sistêmica, empresária, com experiência de 7 anos na área condominial.",
    courses: [
      "Curso prático de síndico — Qualisíndicos",
      "Curso de prevenção em segurança condominial",
      "Curso de engenharia e arquitetura condominial para síndicos",
      "Qualidade no atendimento — Sebrae DF",
      "Curso de formação de portaria, zeladoria, rondas e encarregados",
      "Workshop de síndicos e síndicos profissionais",
      "Curso de formação de síndico profissional",
    ],
    image: karinaPhoto,
    imagePosition: "center center",
  },
  {
    name: "Patricia Marioto Rosa",
    role: "Síndica Profissional",
    description: "Psicóloga, empresária, com experiência de 10 anos na área condominial como síndica e na realização de eventos.",
    courses: [
      "Graduada em Psicologia pela Universidade Estadual de Maringá — UEM",
      "Especializada em Terapia Cognitiva Comportamental",
      "Especializada em Avaliação e Diagnóstico Psicológico",
      "Experiência como Analista de Recrutamento e Seleção",
      "Curso Compliance",
      "Curso de Dicas de Engenharia e Arquitetura",
    ],
    image: patriciaPhoto,
    imagePosition: "center top",
  },
];

const condominiums = [
  { name: "EASY", units: "36 unidades · 8 lojas", location: "Noroeste" },
  { name: "Condomínio GET", units: "36 unidades", location: "Park Sul · Residencial e comercial" },
  { name: "Condomínio Essence", units: "33 unidades", location: "Park Sul" },
  { name: "Condomínio Persona Versare", units: "84 unidades", location: "310 Noroeste" },
  { name: "Condomínio Mykonos", units: "60 unidades", location: "109 Noroeste" },
  { name: "Condomínio Urbam", units: "84 unidades", location: "306 Noroeste" },
  { name: "Condomínio Contemporâneo", units: "60 unidades", location: "106 Noroeste" },
  { name: "Residencial Diamond", units: "48 unidades", location: "Quadra 208 · Águas Claras" },
  { name: "Residencial Via Classique", units: "120 unidades · Área de lazer", location: "SQNW 107 Noroeste" },
  { name: "Residencial Sophistique", units: "24 unidades", location: "SQNW 111, bloco F · Noroeste" },
  { name: "Residencial Gran Reserva Biografia", units: "24 unidades", location: "SQNW 108, bloco E · Noroeste" },
  { name: "Residencial Bonanza", units: "8 unidades", location: "Park Way" },
];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20h16M7 20V5h10v15M10 8h1M13 8h1M10 12h1M13 12h1M10 16h1M13 16h1" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 10.5c0 5.25-8 10.5-8 10.5S4 15.75 4 10.5a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="hero-section scroll-mt-24">
          <Image
            src="/images/hero-condo.jpg"
            alt="Condomínio moderno"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay" />

          <div className="container-shell relative z-10 flex min-h-[46rem] items-center py-28 sm:min-h-[48rem] lg:min-h-screen">
            <Reveal direction="left">
              <div className="max-w-4xl text-white">
                <span className="hero-badge">Brasília · DF</span>
                <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-[2.35rem] leading-[1.02] sm:text-[3.15rem] lg:text-[4.35rem]">
                  Síndico profissional em Brasília com <span className="text-[var(--gold)] italic">excelência</span> em gestão condominial
                </h1>
                <p className="mt-6 max-w-2xl text-[1rem] leading-7 text-white/82 sm:text-[1.15rem] sm:leading-8">
                  A START Gestão Condominial oferece uma administração profissional, humanizada e estratégica para condomínios residenciais, comerciais e mistos.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                    Solicitar proposta
                  </Button>
                  <Button href="#atuacao" variant="inverted" className="w-full sm:w-auto">
                    Conheça nossa atuação
                  </Button>
                </div>

                <div className="mt-12 grid gap-4 sm:max-w-xl sm:grid-cols-3">
                  {[
                    { value: "12+", label: "Condomínios" },
                    { value: "700+", label: "Unidades" },
                    { value: "10 anos", label: "de experiência" },
                  ].map((item) => (
                    <div key={item.label} className="hero-stat">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="sobre" className="section-padding scroll-mt-24 bg-[var(--background)]">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
            <Reveal direction="left">
              <SectionTitle
                eyebrow="Quem somos"
                title={
                  <>
                    Uma gestão idealizada por <span className="text-[var(--gold-strong)] italic">síndicas profissionais</span>.
                  </>
                }
              />
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="about-copy">
                <p>
                  A <strong>START Gestão Condominial</strong> foi idealizada por síndicas profissionais que, ao longo dos anos, se capacitaram por meio de cursos, workshops e congressos, desenvolvendo ampla experiência na gestão de condomínios e pessoas.
                </p>
                <p>
                  Atuamos com foco em excelência, transparência e valorização do patrimônio condominial. Somos uma empresa inovadora e especializada em administração de condomínios residenciais, comerciais e mistos.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {highlights.map((highlight, index) => (
                    <Reveal key={highlight} delay={index * 60}>
                      <div className="highlight-card">
                        <span>0{index + 1}</span>
                        <strong>{highlight}</strong>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="objective-section section-padding">
          <div className="container-shell relative z-10 max-w-5xl text-center">
            <Reveal>
              <SectionTitle
                eyebrow="Nosso objetivo"
                tone="light"
                align="center"
                title={
                  <>
                    Atuação técnica, transparente e alinhada aos <span className="text-[var(--gold)] italic">interesses do condomínio</span>.
                  </>
                }
                description={
                  <p>
                    Prestar serviço de síndico profissional nos termos da lei, convenção e regimento interno do condomínio, garantindo uma atuação técnica, transparente e alinhada aos interesses do condomínio.
                  </p>
                }
              />
              <p className="mx-auto mt-8 max-w-3xl border-t border-white/14 pt-6 text-sm leading-7 text-white/68 sm:text-base">
                As atividades operacionais podem ser executadas pelas profissionais do quadro da empresa, sendo a representação legal exercida pela profissional definida em conjunto com o contratante.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="atuacao" className="section-padding scroll-mt-24 bg-[var(--surface-muted)]">
          <div className="container-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Atuação"
                align="center"
                title={
                  <>
                    Atividades desenvolvidas pela <span className="text-[var(--gold-strong)] italic">START</span>
                  </>
                }
                description="Uma cobertura completa em quatro frentes da gestão condominial."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
              {activities.map((activity, index) => (
                <Reveal key={activity.title} delay={index * 70}>
                  <ActivityCard {...activity} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="section-padding scroll-mt-24 bg-[var(--background)]">
          <div className="container-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Equipe"
                align="center"
                title={
                  <>
                    Profissionais que fazem a <span className="text-[var(--gold-strong)] italic">diferença</span>
                  </>
                }
              />
            </Reveal>

            <div className="mx-auto mt-10 grid max-w-5xl gap-7 md:grid-cols-2 lg:gap-10">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 100}>
                  <TeamCard {...member} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="condominios" className="section-padding scroll-mt-24 bg-[var(--surface-muted)]">
          <div className="container-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Portfólio"
                align="center"
                title={
                  <>
                    Nossos <span className="text-[var(--gold-strong)] italic">condomínios</span>
                  </>
                }
                description="Uma vitrine da experiência da START em Brasília e região."
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {condominiums.map((condominium, index) => (
                <Reveal key={condominium.name} delay={index * 45}>
                  <article className="condominium-card">
                    <span className="condominium-icon">
                      <BuildingIcon />
                    </span>
                    <h3>{condominium.name}</h3>
                    <p>{condominium.units}</p>
                    <span>
                      <PinIcon />
                      {condominium.location}
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal className="block">
          <ContactCTA />
        </Reveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
