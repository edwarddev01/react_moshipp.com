import { generateMetadata } from "~/utils/meta-utils";
import type { Route } from "./+types/home";
import ServicesPage from "~/pages/services/ServicesPage";

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    title: "Moshipp - Hosting y Dominios en Colombia | Servicios Web Profesionales",
  })
}

// Script para JSON-LD (Schema.org)
// Nota: React Router puede necesitar un enfoque diferente para scripts JSON-LD
// Considera usar React Helmet o una solución personalizada para esto
export function scripts() {
  return [
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Moshipp",
        "url": "https://moshipp.com",
        "logo": "https://moshipp.com/common/moshipp-logo-black.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+573506027870",
          "email": "info@moshipp.com",
          "contactType": "customer service",
          "availableLanguage": ["Spanish"]
        },
        "sameAs": [
          "https://www.facebook.com/moshipp/",
          "https://twitter.com/moshipp",
          "https://www.instagram.com/moshipp/"
        ]
      })
    },
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Moshipp",
        "url": "https://moshipp.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://moshipp.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ];
}

export default function Services() {
  return <ServicesPage />;
}