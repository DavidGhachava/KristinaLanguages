import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["cyrillic", "latin"], display: "swap", preload: true });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["cyrillic", "latin"], display: "swap", preload: true });

export const metadata: Metadata = {
  title: "Уроки грузинского в Батуми — Кристина Беридзе",
  description: "Уроки грузинского языка с носителем в Батуми и онлайн.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#F7FAFF", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${inter.variable} ${manrope.variable}`}>{children}</body></html>;
}
