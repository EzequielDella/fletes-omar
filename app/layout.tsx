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
  title: "Fletes Omar | Mudanzas y Fletes en Mar del Plata",

  description:
    "Fletes,mini fletes y mudanzas en Mar del Plata. Servicio rápido, económico y confiable para hogares, departamentos y empresas.",

  keywords: [
    "fletes mar del plata",
  "mini fletes mar del plata",
  "mudanzas mar del plata",
  "fletes económicos mar del plata",
  "traslados mar del plata",
  "camion de mudanza",
  "mudanzas particulares",
  "fletes para empresas",
  "servicio de fletes",
  ],

  openGraph: {
    title: "Fletes Omar",

    description:
      "Fletes y mudanzas rápidas en Mar del Plata.",

    url: "https://fletesomar.com.ar",

    siteName: "Fletes Omar",

    locale: "es_AR",

    type: "website",

    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Fletes Omar",
      },
    ],
  },

  icons: {
    icon: "/fleteIcono.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}