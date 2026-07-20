import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["cyrillic", "latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["cyrillic", "latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kristinalanguages.com"),
  title: "Уроки грузинского языка в Батуми — Кристина Беридзе",
  description: "Уроки грузинского языка онлайн и в Батуми с носителем языка.",
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }], apple: "/favicon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F7FAFF" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${inter.variable} ${manrope.variable}`}>{children}</body></html>;
}
