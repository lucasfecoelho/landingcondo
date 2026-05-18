import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, ArrowRight, Phone, Mail, Instagram, MessageCircle,
  Building2, Users, Wrench, HeartHandshake, ShieldCheck, FileText,
  Calculator, Megaphone, Scale, Gavel, ClipboardCheck, AlertCircle,
  PiggyBank, HardHat, UsersRound, Sparkles, GraduationCap, MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import heroImg from "@/assets/hero-condo.jpg";
import karinaImg from "@/assets/karinafoto.jpg";
import patriciaImg from "@/assets/patriciafoto.jpg";

export const Route = createFileRoute("/")({ component: Index });

const WHATSAPP = "https://wa.me/5561981621749";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Equipe", href: "#equipe" },
  { label: "Condomínios", href: "#condominios" },
  { label: "Contato", href: "#contato" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-soft">
            <span className="font-display text-gold font-bold text-lg">S</span>
          </div>
          <div className="leading-tight">
            <div className={`font-display font-semibold text-base ${scrolled ? "text-primary" : "text-primary"}`}>START</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Gestão Condominial</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 shadow-soft">
              Solicitar proposta <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-primary" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80 hover:text-primary font-medium">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button className="w-full bg-primary text-primary-foreground rounded-full">Solicitar proposta</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Condomínio moderno em Brasília" width={1600} height={1000} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-primary-foreground animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-medium tracking-wider uppercase mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Brasília · DF
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-6">
            Síndico profissional em Brasília com <span className="text-gold italic">excelência</span> em gestão condominial
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed">
            A START Gestão Condominial oferece uma administração profissional, humanizada e estratégica para condomínios residenciais, comerciais e mistos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-full px-7 h-12 shadow-elegant font-semibold">
                Solicitar proposta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#atuacao">
              <Button size="lg" variant="outline" className="rounded-full px-7 h-12 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                Conheça nossa atuação
              </Button>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "12+", l: "Condomínios" },
              { v: "700+", l: "Unidades" },
              { v: "10 anos", l: "Experiência" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold/60 pl-4">
                <div className="font-display text-2xl md:text-3xl font-semibold text-gold">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">Quem somos</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-4 leading-tight">
            Uma gestão idealizada por <span className="italic text-gold">síndicas profissionais</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            A <strong className="text-primary">START Gestão Condominial</strong> foi idealizada por síndicas profissionais que, ao longo dos anos, se capacitaram por meio de cursos, workshops e congressos, desenvolvendo ampla experiência na gestão de condomínios e pessoas.
          </p>
          <p>
            Atuamos com foco em <strong className="text-primary">excelência, transparência e valorização do patrimônio condominial</strong>. Somos uma empresa inovadora e especializada em administração de condomínios residenciais, comerciais e mistos.
          </p>
          <p>
            Na gestão de condomínios residenciais, a atuação da START é voltada não apenas para a preservação e valorização do patrimônio dos condôminos, mas também para a <strong className="text-primary">integração entre pessoas, qualidade de vida</strong> dos moradores e melhoria contínua da convivência condominial.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            {[
              { icon: ShieldCheck, t: "Transparência total" },
              { icon: HeartHandshake, t: "Atendimento humanizado" },
              { icon: Building2, t: "Valorização do patrimônio" },
              { icon: Sparkles, t: "Gestão estratégica" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/60 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-primary">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Objetivo() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">Nosso objetivo</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          Atuação técnica, transparente e alinhada aos <span className="italic text-gold">interesses do condomínio</span>.
        </h2>
        <p className="mt-8 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          Prestar serviço de síndico profissional nos termos da lei, convenção e regimento interno do condomínio, garantindo uma atuação técnica, transparente e alinhada aos interesses do condomínio.
        </p>
        <div className="mt-10 inline-block max-w-3xl text-sm md:text-base text-primary-foreground/70 border-t border-gold/30 pt-6 italic">
          As atividades operacionais podem ser executadas pelas profissionais do quadro da empresa, sendo a representação legal exercida pela profissional definida em conjunto com o contratante.
        </div>
      </div>
    </section>
  );
}

const ACTIVITIES = [
  {
    title: "Gestão Administrativa",
    icon: FileText,
    items: [
      { i: Gavel, t: "Convocação de assembleias ordinárias e extraordinárias" },
      { i: Scale, t: "Representação legal do condomínio" },
      { i: ClipboardCheck, t: "Cumprimento da convenção, regimento interno e decisões de assembleia" },
      { i: UsersRound, t: "Participação em reuniões do conselho" },
    ],
  },
  {
    title: "Gestão Financeira",
    icon: Calculator,
    items: [
      { i: PiggyBank, t: "Elaboração de orçamento anual" },
      { i: Calculator, t: "Cobrança de contribuições condominiais" },
      { i: AlertCircle, t: "Aplicação e cobrança de multas" },
      { i: FileText, t: "Prestação de contas à assembleia" },
      { i: ShieldCheck, t: "Redução da inadimplência" },
    ],
  },
  {
    title: "Manutenção e Segurança",
    icon: Wrench,
    items: [
      { i: Wrench, t: "Conservação e manutenção das áreas comuns" },
      { i: HardHat, t: "Plano de manutenção preventiva" },
      { i: ShieldCheck, t: "Seguro da edificação" },
      { i: ClipboardCheck, t: "Cumprimento das normas da ABNT 16.280" },
      { i: ShieldCheck, t: "Segurança dos moradores" },
    ],
  },
  {
    title: "Relacionamento e Convivência",
    icon: HeartHandshake,
    items: [
      { i: Users, t: "Gestão de funcionários próprios e terceirizados" },
      { i: HeartHandshake, t: "Mediação de conflitos" },
      { i: FileText, t: "Gestão de contratos" },
      { i: Megaphone, t: "Campanhas educativas" },
    ],
  },
];

function Atuacao() {
  return (
    <section id="atuacao" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">Atuação</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-4 leading-tight">
            Atividades desenvolvidas pela <span className="italic text-gold">START</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Uma cobertura completa em quatro frentes da gestão condominial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {ACTIVITIES.map((g) => (
            <div key={g.title} className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft">
                  <g.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary">{g.title}</h3>
              </div>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it.t} className="flex items-start gap-3 text-foreground/80">
                    <it.i className="h-4 w-4 mt-1 text-gold flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{it.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: "Karina Nápoles",
    role: "Síndica Profissional",
    img: karinaImg,
    bio: "Terapeuta sistêmica, empresária, com experiência de 7 anos na área condominial.",
    items: [
      "Curso prático de síndico — Qualisíndicos",
      "Curso de prevenção em segurança condominial",
      "Curso de engenharia e arquitetura condominial para síndicos",
      "Qualidade no atendimento — Sebrae DF",
      "Curso de formação de portaria, zeladoria, rondas e encarregados",
      "Workshop de síndicos e síndicos profissionais",
      "Curso de formação de síndico profissional",
    ],
  },
  {
    name: "Patricia Marioto Rosa",
    role: "Síndica Profissional",
    img: patriciaImg,
    bio: "Psicóloga, empresária, com experiência de 10 anos na área condominial como síndica e na realização de eventos.",
    items: [
      "Graduada em Psicologia pela Universidade Estadual de Maringá — UEM",
      "Especializada em Terapia Cognitiva Comportamental",
      "Especializada em Avaliação e Diagnóstico Psicológico",
      "Experiência como Analista de Recrutamento e Seleção",
      "Curso Compliance",
      "Curso de Dicas de Engenharia e Arquitetura",
    ],
  },
];

function Equipe() {
  return (
    <section id="equipe" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">Equipe</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-4 leading-tight">
            Profissionais que fazem a <span className="italic text-gold">diferença</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {TEAM.map((p) => (
            <div key={p.name} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden bg-secondary relative">
                <img src={p.img} alt={p.name} width={800} height={1000} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-primary">{p.name}</h3>
                <div className="text-gold text-sm tracking-wider uppercase mt-1 font-medium">{p.role}</div>
                <p className="text-muted-foreground mt-4 leading-relaxed">{p.bio}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="mt-6 rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                      Ver currículo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl text-primary">{p.name}</DialogTitle>
                      <div className="text-gold text-sm uppercase tracking-wider font-medium">{p.role}</div>
                    </DialogHeader>
                    <p className="text-foreground/80 leading-relaxed">{p.bio}</p>
                    <div className="mt-2">
                      <h4 className="font-display text-lg text-primary mb-3 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-gold" /> Formação e cursos
                      </h4>
                      <ul className="space-y-2">
                        {p.items.map((it) => (
                          <li key={it} className="flex items-start gap-3 text-sm text-foreground/80">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CONDOS = [
  { name: "EASY", units: "36 unidades · 8 lojas", local: "Noroeste" },
  { name: "Condomínio GET", units: "36 unidades", local: "Park Sul · Residencial e comercial" },
  { name: "Condomínio Essence", units: "33 unidades", local: "Park Sul" },
  { name: "Condomínio Persona Versare", units: "84 unidades", local: "310 Noroeste" },
  { name: "Condomínio Mykonos", units: "60 unidades", local: "109 Noroeste" },
  { name: "Condomínio Urbam", units: "84 unidades", local: "306 Noroeste" },
  { name: "Condomínio Contemporâneo", units: "60 unidades", local: "106 Noroeste" },
  { name: "Residencial Diamond", units: "48 unidades", local: "Quadra 208 · Águas Claras" },
  { name: "Residencial Via Classique", units: "120 unidades · Área de lazer", local: "SQNW 107 Noroeste" },
  { name: "Residencial Sophistique", units: "24 unidades", local: "SQNW 111, bloco F · Noroeste" },
  { name: "Residencial Gran Reserva Biografia", units: "24 unidades", local: "SQNW 108, bloco E · Noroeste" },
  { name: "Residencial Bonanza", units: "8 unidades", local: "Park Way" },
];

function Condominios() {
  return (
    <section id="condominios" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">Portfólio</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-4 leading-tight">
            Nossos <span className="italic text-gold">condomínios</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Uma vitrine da experiência da START em Brasília e região.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONDOS.map((c, i) => (
            <div
              key={c.name}
              className="group relative bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gradient-hero transition-colors">
                <Building2 className="h-6 w-6 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary leading-tight">{c.name}</h3>
              <div className="mt-3 text-sm text-foreground/70 font-medium">{c.units}</div>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-gold" /> {c.local}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-semibold">Contato</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
            Entre em contato e <span className="italic text-gold">solicite sua proposta</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed">
            Fale com a START Gestão Condominial e descubra como uma gestão profissional pode transformar a rotina do seu condomínio.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-block mt-8">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-full px-8 h-13 shadow-elegant font-semibold">
              <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
            </Button>
          </a>
        </div>

        <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-8 lg:p-10 space-y-5">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary-foreground/10 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
              <MessageCircle className="h-5 w-5 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60">WhatsApp principal</div>
              <div className="font-medium text-lg">(61) 98162-1749</div>
            </div>
          </a>

          <a href="https://instagram.com/start_gestao_condominial" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary-foreground/10 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
              <Instagram className="h-5 w-5 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Instagram</div>
              <div className="font-medium">@start_gestao_condominial</div>
            </div>
          </a>

          <a href="mailto:startcondominial@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary-foreground/10 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
              <Mail className="h-5 w-5 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60">E-mail</div>
              <div className="font-medium">startcondominial@gmail.com</div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
              <Phone className="h-5 w-5 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Telefones adicionais</div>
              <div className="font-medium">(61) 99325-7374 · (61) 99298-9123</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-10 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
            <span className="font-display text-gold font-bold">S</span>
          </div>
          <div>
            <div className="font-display font-semibold text-primary-foreground">START Gestão Condominial</div>
            <div className="text-xs text-primary-foreground/60">CNPJ 45.386.449/0001-78</div>
          </div>
        </div>
        <div className="text-xs text-primary-foreground/60">Copyright © 2022 START Gestão Condominial</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Objetivo />
        <Atuacao />
        <Equipe />
        <Condominios />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
