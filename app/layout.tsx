import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "START Gestão Condominial",
  description:
    "Gestão condominial profissional e síndico profissional em Brasília/DF com organização da rotina, comunicação clara e acompanhamento próximo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-[family-name:var(--font-sans)] antialiased">{children}</body>
    </html>
  );
}
