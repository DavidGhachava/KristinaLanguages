import type { Metadata } from "next";
import { HomePage } from "./HomePage";

const title = "Уроки грузинского в Батуми — Кристина Беридзе";
const description = "Уроки грузинского языка с носителем в Батуми и онлайн. Для детей и взрослых, с нуля и продолжающих. Индивидуально и в мини-группах — 20 ₾.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Кристина Беридзе", url: "https://kristinalanguages.com/" }],
  creator: "Кристина Беридзе",
  publisher: "Кристина Беридзе",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: "https://kristinalanguages.com/" },
  openGraph: {
    title,
    description,
    url: "https://kristinalanguages.com/",
    siteName: "Кристина Беридзе — уроки грузинского",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "https://kristinalanguages.com/og.png", width: 1200, height: 630, alt: "Уроки грузинского языка в Батуми и онлайн с Кристиной Беридзе" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://kristinalanguages.com/og.png"] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://kristinalanguages.com/#website",
      url: "https://kristinalanguages.com/",
      name: "Кристина Беридзе — уроки грузинского",
      inLanguage: "ru",
      publisher: { "@id": "https://kristinalanguages.com/#kristina" },
    },
    {
      "@type": "WebPage",
      "@id": "https://kristinalanguages.com/#webpage",
      url: "https://kristinalanguages.com/",
      name: title,
      description,
      inLanguage: "ru",
      isPartOf: { "@id": "https://kristinalanguages.com/#website" },
      about: { "@id": "https://kristinalanguages.com/#lessons" },
      primaryImageOfPage: { "@type": "ImageObject", url: "https://kristinalanguages.com/images/hero-studio-1600.webp", width: 1600, height: 1067 },
    },
    {
      "@type": "Person",
      "@id": "https://kristinalanguages.com/#kristina",
      name: "Кристина Беридзе",
      url: "https://kristinalanguages.com/",
      jobTitle: "Преподаватель грузинского языка",
      email: "mailto:K.beridze1982@gmail.com",
      telephone: "+995571010750",
      sameAs: ["https://www.facebook.com/kristina.beridze.3"],
      address: { "@type": "PostalAddress", addressLocality: "Батуми", addressCountry: "GE" },
    },
    {
      "@type": "Service",
      "@id": "https://kristinalanguages.com/#lessons",
      name: "Уроки грузинского языка в Батуми и онлайн",
      serviceType: "Обучение грузинскому языку",
      description: "Индивидуальные занятия, мини-группы и онлайн-уроки грузинского языка для русскоговорящих детей и взрослых, от начального до среднего уровня.",
      provider: { "@id": "https://kristinalanguages.com/#kristina" },
      audience: { "@type": "Audience", audienceType: "Русскоговорящие дети и взрослые" },
      areaServed: [{ "@type": "City", name: "Батуми" }, { "@type": "Country", name: "Грузия" }],
      availableChannel: [
        { "@type": "ServiceChannel", serviceLocation: { "@type": "Place", name: "Батуми, Грузия" } },
        { "@type": "ServiceChannel", serviceUrl: "https://kristinalanguages.com/#contact" },
      ],
      offers: { "@id": "https://kristinalanguages.com/#offer" },
    },
    {
      "@type": "Offer",
      "@id": "https://kristinalanguages.com/#offer",
      url: "https://kristinalanguages.com/#contact",
      price: "20",
      priceCurrency: "GEL",
      availability: "https://schema.org/LimitedAvailability",
      seller: { "@id": "https://kristinalanguages.com/#kristina" },
      itemOffered: { "@id": "https://kristinalanguages.com/#lessons" },
    },
  ],
};

export default function Home() {
  return <><HomePage /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></>;
}
