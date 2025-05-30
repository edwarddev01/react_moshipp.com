// app/routes/desarrollo-web.tsx

import { generateMetadata } from "~/utils/meta-utils";
import type { Route } from "./+types/home";
import AboutPage from "~/pages/about/AboutPage";
import TermsPage from "~/pages/terms/TermsPage";
import PrivacyPage from "~/pages/privacy/privacy";


export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    title: "Términos de servicio  | Moshipp",
    description: "Moshipp es una empresa de desarrollo web y hosting en Colombia, especializada en crear sitios web y aplicaciones a medida con tecnologías modernas como React y Node.js.",
    keywords: "moshipp, desarrollo web, react, wordpress, aplicaciones web, tiendas online, sitios corporativos, hosting, tecnología",
    canonical: "https://moshipp.com/nosotros",
  })
}

// Script para JSON-LD (Schema.org)
export function scripts() {
  return [
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Desarrollo Web con React",
        "provider": {
          "@type": "Organization",
          "name": "Moshipp",
          "url": "https://moshipp.com"
        },
        "description": "Creamos sitios web y aplicaciones a medida que impulsan su negocio con las tecnologías más modernas, incluyendo React, Node.js y mucho más. Diseño personalizado, rendimiento optimizado y código limpio.",
        "areaServed": "Colombia",
        "serviceType": "Desarrollo Web",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "COP",
            "description": "Precios personalizados según requerimientos"
          }
        }
      })
    },
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma desarrollar un sitio web o aplicación?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web corporativo básico puede estar listo en 2-4 semanas, mientras que una aplicación web compleja o una tienda online puede tomar entre 1-3 meses. Durante nuestra consulta inicial, proporcionaremos un cronograma detallado basado en tus requerimientos específicos."
            }
          },
          {
            "@type": "Question",
            "name": "¿Por qué utilizar React para mi proyecto?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "React ofrece numerosas ventajas: mejor rendimiento gracias a su Virtual DOM, desarrollo más rápido mediante componentes reutilizables, gran escalabilidad para proyectos que crecen con el tiempo, excelente soporte para aplicaciones de una sola página (SPA), y una comunidad enorme de desarrolladores que garantiza soporte y evolución continua. Todo esto se traduce en una mejor experiencia de usuario, mayor velocidad y un código más mantenible."
            }
          },
          {
            "@type": "Question",
            "name": "¿Ofrecen mantenimiento después del lanzamiento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, ofrecemos varios planes de mantenimiento post-lanzamiento que incluyen actualizaciones de seguridad, monitoreo de rendimiento, copias de seguridad regulares, soporte técnico y pequeñas modificaciones. Esto garantiza que tu sitio o aplicación permanezca seguro, actualizado y funcionando óptimamente."
            }
          }
        ]
      })
    },
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://moshipp.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servicios",
            "item": "https://moshipp.com/servicios"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Desarrollo Web con React",
            "item": "https://moshipp.com/desarrollo-web"
          }
        ]
      })
    }
  ];
}

export default function PrivacyRoute() {
  return <PrivacyPage />;
}