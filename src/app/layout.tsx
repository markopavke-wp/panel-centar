import { Syne, Manrope } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Panel Centar | Sendvič paneli Niš",
    template: "%s | Panel Centar",
  },
  description:
    "Sendvič paneli za hale, magacine, garaže, hladnjače i pomoćne objekte. Brza gradnja, termoizolacija i moderan izgled. 25+ godina iskustva. Niš.",
  keywords: [
    "sendvič paneli",
    "Panel Centar",
    "Niš",
    "PIR paneli",
    "PUR paneli",
    "krovni paneli",
    "zidni paneli",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${syne.variable} ${manrope.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
