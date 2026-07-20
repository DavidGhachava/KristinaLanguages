import type { Metadata } from "next";
import { HomePage } from "./HomePage";

export const metadata: Metadata = {
  title: "Уроки грузинского языка в Батуми — Кристина Беридзе",
  description: "Уроки грузинского с носителем языка: онлайн и очно в Батуми, для детей и взрослых. Индивидуально и в мини-группе — 20 ₾ за занятие.",
  alternates: { canonical: "https://kristinalanguages.com/" },
  openGraph: {
    title: "Уроки грузинского языка в Батуми",
    description: "Понятные занятия с носителем языка — онлайн и очно, для детей и взрослых.",
    url: "https://kristinalanguages.com/",
    siteName: "Кристина Беридзе — уроки грузинского",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "https://kristinalanguages.com/og.png", width: 1200, height: 630, alt: "Уроки грузинского языка с Кристиной Беридзе" }],
  },
  twitter: { card: "summary_large_image", title: "Уроки грузинского языка в Батуми", description: "Онлайн и очно с носителем языка — 20 ₾ за занятие.", images: ["https://kristinalanguages.com/og.png"] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kristinalanguages.com/#kristina",
      name: "Кристина Беридзе",
      jobTitle: "Преподаватель грузинского языка",
      email: "mailto:K.beridze1982@gmail.com",
      telephone: "+995571010750",
      address: { "@type": "PostalAddress", addressLocality: "Батуми", addressCountry: "GE" },
    },
    {
      "@type": "Service",
      "@id": "https://kristinalanguages.com/#lessons",
      name: "Уроки грузинского языка",
      description: "Индивидуальные занятия, мини-группы и онлайн-уроки грузинского языка для русскоговорящих детей и взрослых.",
      provider: { "@id": "https://kristinalanguages.com/#kristina" },
      areaServed: [{ "@type": "City", name: "Батуми" }, { "@type": "Country", name: "Грузия" }],
      availableChannel: [
        { "@type": "ServiceChannel", serviceLocation: { "@type": "Place", name: "Батуми, Грузия" } },
        { "@type": "ServiceChannel", serviceUrl: "https://kristinalanguages.com/" },
      ],
      offers: { "@type": "Offer", price: "20", priceCurrency: "GEL", availability: "https://schema.org/LimitedAvailability" },
    },
  ],
};

export default function Home() {
  return <><HomePage /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
