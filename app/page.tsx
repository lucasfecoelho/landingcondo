import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ActivityCard } from "@/components/ActivityCard";
import { CondominiumCarousel, type Condominium } from "@/components/CondominiumCarousel";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TeamCard } from "@/components/TeamCard";

const activities = [
  {
    title: "Gestão administrativa",
    icon: "document" as const,
    items: [
      "Convocação de assembleias ordinárias e extraordinárias",
      "Cumprimento da convenção, regimento interno e decisões de assembleias",
      "Prestação de contas",
      "Participação em reuniões do conselho",
      "Elaboração de orçamento anual",
    ],
  },
  {
    title: "Gestão financeira e jurídica",
    icon: "finance" as const,
    items: [
      "Cobrança das contribuições condominiais",
      "Aplicação e cobrança de multas",
      "Medidas administrativas e jurídicas para redução da inadimplência",
      "Representação do condomínio em juízo ou fora dele",
    ],
  },
  {
    title: "Manutenção e segurança",
    icon: "maintenance" as const,
    items: [
      "Conservação e manutenção das áreas comuns",
      "Plano de manutenção preventiva",
      "Realização do seguro da edificação",
      "Cumprimento das normas da ABNT 16.280",
      "Ações voltadas à segurança dos moradores",
    ],
  },
  {
    title: "Pessoas, contratos e convivência",
    icon: "people" as const,
    items: [
      "Gerenciamento de equipes próprias ou terceirizadas",
      "Gerenciamento de contratos",
      "Mediação de conflitos",
      "Campanhas educativas",
      "Proposição de soluções para melhorar a convivência",
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
    image: "/images/karinafoto.png",
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
    image: "/images/patriciafoto.png",
    imagePosition: "center top",
  },
];

const condominiumData = [
  { name: "EASY", units: "36 unidades · 8 lojas", location: "Noroeste", image: "/images/condominios/easy.jpg" },
  { name: "Condomínio GET", units: "36 unidades", location: "Park Sul · Residencial e comercial", image: "/images/condominios/get.jpg" },
  { name: "Condomínio Essence", units: "33 unidades", location: "Park Sul", image: "/images/condominios/essence.jpg" },
  { name: "Condomínio Persona Versare", units: "84 unidades", location: "310 Noroeste", image: "/images/condominios/persona-versare.jpg" },
  { name: "Condomínio Mykonos", units: "60 unidades", location: "109 Noroeste", image: "/images/condominios/mykonos.jpg" },
  { name: "Condomínio Urbam", units: "84 unidades", location: "306 Noroeste", image: "/images/condominios/urbam.jpg" },
  { name: "Condomínio Contemporâneo", units: "60 unidades", location: "106 Noroeste", image: "/images/condominios/contemporaneo.jpg" },
  { name: "Residencial Diamond", units: "48 unidades", location: "Quadra 208 · Águas Claras", image: "/images/condominios/diamond.jpg" },
  { name: "Residencial Via Classique", units: "120 unidades · Área de lazer", location: "SQNW 107 Noroeste", image: "/images/condominios/via-classique.jpg" },
  { name: "Residencial Sophistique", units: "24 unidades", location: "SQNW 111, bloco F · Noroeste", image: "/images/condominios/sophistique.jpg" },
  { name: "Residencial Gran Reserva Biografia", units: "24 unidades", location: "SQNW 108, bloco E · Noroeste", image: "/images/condominios/gran-reserva-biografia.jpg" },
  { name: "Residencial Bonanza", units: "8 unidades", location: "Park Way", image: "/images/condominios/bonanza.jpg" },
];

const condominiums: Condominium[] = condominiumData.map((condominium) => ({
  ...condominium,
  hasImage: existsSync(join(process.cwd(), "public", condominium.image.replace(/^\//, ""))),
}));

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.45" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" />
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
                <div className="mt-10 grid gap-4 sm:max-w-xl sm:grid-cols-3">
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
                    Uma gestão próxima, técnica e comprometida com <span className="text-[var(--gold-strong)] italic">pessoas e patrimônio</span>.
                  </>
                }
              />
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div className="about-copy">
                <div className="about-feature">
                  <span className="about-kicker">Apresentação</span>
                  <p>
                    A <strong>Start Gestão Condominial</strong> é uma empresa especializada em administração e sindicatura profissional para condomínios residenciais, comerciais e mistos. Com uma atuação moderna, próxima e estratégica, a Start une conhecimento técnico, experiência prática e cuidado humano para oferecer uma gestão condominial mais eficiente, transparente e segura.
                  </p>
                  <p>
                    Mais do que administrar rotinas, a Start trabalha para preservar e valorizar o patrimônio dos condôminos, fortalecer a convivência e contribuir para que cada condomínio seja um lugar melhor para se viver.
                  </p>
                </div>

                <div className="about-feature about-feature-muted">
                  <span className="about-kicker">Nossa essência</span>
                  <p>
                    A Start Gestão Condominial nasceu da experiência de profissionais que encontraram na gestão de condomínios uma forma de unir técnica, responsabilidade e cuidado com pessoas. Ao longo dos anos, suas sócias se especializaram por meio de cursos, workshops, congressos e vivência prática no mercado condominial, consolidando uma atuação pautada pela organização, transparência e compromisso com cada condomínio atendido.
                  </p>
                  <p>
                    Mais do que administrar rotinas, a Start atua para preservar o patrimônio, melhorar a convivência e tornar o condomínio um ambiente mais seguro, organizado e agradável para todos.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="objective-section section-padding">
          <div className="container-shell relative z-10">
            <Reveal>
              <div className="objective-card">
                <span className="objective-target">
                  <TargetIcon />
                </span>
                <SectionTitle
                  eyebrow="Nosso objetivo"
                  tone="light"
                  title={
                    <>
                      Sindicatura profissional estruturada, segura e <span className="text-[var(--gold)] italic">alinhada à realidade do condomínio</span>.
                    </>
                  }
                  description={
                    <>
                      <p>
                        O objetivo da Start Gestão Condominial é oferecer um serviço de sindicatura profissional estruturado, seguro e alinhado à legislação, à convenção e ao regimento interno de cada condomínio.
                      </p>
                      <p>
                        A empresa atua com suporte técnico e operacional por meio de suas profissionais, garantindo organização nas rotinas, acompanhamento das demandas e representação legal definida em conjunto com o contratante.
                      </p>
                    </>
                  }
                />
              </div>
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

            <Reveal delay={80}>
              <CondominiumCarousel condominiums={condominiums} />
            </Reveal>
          </div>
        </section>

        <Reveal className="block">
          <ContactCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
