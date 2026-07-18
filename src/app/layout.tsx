import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Citoyen — Livret du citoyen 2026",
    template: "%s · Citoyen",
  },
  description:
    "Entraînement interactif au Livret du citoyen : cartes de révision, QCM, questions ouvertes et textes à trous pour préparer l'examen civique.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Citoyen",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5fe" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b1f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${publicSans.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
