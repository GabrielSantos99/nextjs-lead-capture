import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transforme sua empresa com impulsionando suas vendas",
  description: "Aumente seus resultados com soluções personalizadas para o seu negócio. Deixe seus dados e receba uma proposta exclusiva.",
  keywords: ['marketing digital', 'leads', 'vendas', 'negócios', 'landing page'],
  openGraph: {
    title: "Transforme sua empresa com impulsionando suas vendas",
    description: "Deixe seus dados e receba uma proposta exclusiva para alavancar seu negócio.",
    url: "http://localhost:3000",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
