# START Gestão Condominial Landing Page

Landing page institucional da START Gestão Condominial, criada para apresentar a empresa, transmitir confiança e direcionar potenciais clientes para contato pelo WhatsApp.

## Objetivo do projeto

Construir uma presença digital moderna, responsiva e de fácil manutenção para a START, com foco em:

- apresentar a empresa e sua atuação;
- explicar as frentes da gestão condominial;
- destacar a equipe atual e os condomínios atendidos;
- gerar contatos comerciais pelo WhatsApp principal.

## Stack utilizada

- Next.js
- React
- TypeScript
- Tailwind CSS

## Como instalar as dependências

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Depois, abra `http://localhost:3000` no navegador.

## Como gerar o build

```bash
npm run build
```

Para executar a versão de produção localmente:

```bash
npm run start
```

## Como publicar na Vercel

1. Envie o projeto para um repositório Git.
2. Acesse a Vercel e importe o repositório.
3. Mantenha as configurações padrão detectadas para projetos Next.js.
4. Clique em publicar.

## Estrutura de pastas

```text
app/
  globals.css      estilos globais, tokens visuais e motion
  layout.tsx       estrutura base, metadados e viewport responsivo
  page.tsx         conteúdo principal da landing page

components/
  ActivityCard.tsx
  Button.tsx
  CondominiumCarousel.tsx
  ContactCTA.tsx
  FloatingWhatsApp.tsx
  Footer.tsx
  Header.tsx
  Reveal.tsx
  SectionTitle.tsx
  TeamCard.tsx

lib/
  site.ts          dados centrais de contato e informações da empresa
```

## Observações para edição

- Textos principais da página ficam em `app/page.tsx`.
- Contatos, Instagram, e-mail e WhatsApp ficam centralizados em `lib/site.ts`.
- Cores, espaçamentos, animações e ajustes responsivos ficam em `app/globals.css`.
- As fotos atuais da equipe estão em `public/images/karinafoto.png` e `public/images/patriciafoto.png`.
- A imagem principal do hero está em `public/images/hero-condo.jpg`.
- As futuras fotos dos condomínios devem ser adicionadas em `public/images/condominios/`.

## Escopo desta fase

Esta fase contempla apenas a landing page pública.

Não há, neste momento:

- área administrativa;
- autenticação;
- banco de dados;
- login;
- painel de gerenciamento.

## Verificação de tipos

```bash
npm run check
```
