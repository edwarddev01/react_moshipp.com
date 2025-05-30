// app/routes/dominios.tsx

import { generateMetadata } from "~/utils/meta-utils";

import DomainsPage from "~/pages/domains/DomainsPage";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    title: "Dominios - Registro y Gestión | Moshipp",
    description: "Registra tu dominio perfecto desde $14.99/año. Más de 500 extensiones disponibles con SSL gratuito, privacidad incluida y soporte 24/7. Encuentra el dominio ideal para tu proyecto.",
    keywords: "dominios, registro dominios, dominios colombia, .com, .co, ssl gratuito, hosting dominios, nombres de dominio",
    canonical: "https://moshipp.com/dominios",
    image: "https://moshipp.com/images/dominios-og.jpg"
  });
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
        "name": "Registro y Gestión de Dominios",
        "provider": {
          "@type": "Organization",
          "name": "Moshipp",
          "url": "https://moshipp.com",
          "logo": "https://moshipp.com/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+57-300-123-4567",
            "contactType": "customer service",
            "areaServed": "CO",
            "availableLanguage": ["Spanish"]
          }
        },
        "description": "Registro de dominios con más de 500 extensiones disponibles. SSL gratuito, privacidad incluida y soporte técnico 24/7. Encuentra el dominio perfecto para tu proyecto desde $14.99/año.",
        "areaServed": {
          "@type": "Country",
          "name": "Colombia"
        },
        "serviceType": "Domain Registration",
        "category": "Web Services",
        "offers": [
          {
            "@type": "Offer",
            "name": "Dominio .com",
            "price": "14.99",
            "priceCurrency": "USD",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-01-01",
            "description": "Registro de dominio .com por 1 año con SSL gratuito"
          },
          {
            "@type": "Offer", 
            "name": "Dominio .co",
            "price": "24.99",
            "priceCurrency": "USD",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-01-01",
            "description": "Registro de dominio .co por 1 año con SSL gratuito"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Extensiones de Dominio",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dominios Populares",
                "description": ".com, .co, .net, .org"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Dominios para Negocios",
                "description": ".store, .company, .business, .shop"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Dominios de Tecnología",
                "description": ".tech, .app, .dev, .ai"
              }
            }
          ]
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
            "name": "¿Qué incluye el registro de un dominio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cada registro de dominio incluye: Certificado SSL gratuito para seguridad, protección de privacidad WHOIS, DNS premium con infraestructura global, panel de control fácil de usar, soporte técnico 24/7, y activación en menos de 15 minutos. Todo sin costos adicionales."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puedo transferir mi dominio desde otro proveedor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, facilitamos la transferencia de dominios desde cualquier proveedor. El proceso es simple: proporcionas el código de autorización (EPP/Auth Code), iniciamos la transferencia y en 5-7 días tu dominio estará completamente migrado. La transferencia extiende la renovación por un año adicional."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué extensiones de dominio están disponibles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ofrecemos más de 500 extensiones de dominio incluyendo: populares (.com, .co, .net, .org), para negocios (.store, .company, .business), tecnología (.tech, .app, .dev, .ai), geográficas (.co, .us, .mx), y muchas más. Cada extensión tiene precios y características específicas."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma activar un dominio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los dominios nuevos se activan instantáneamente, generalmente en menos de 15 minutos. Las transferencias de dominio pueden tomar entre 5-7 días dependiendo del registrador actual. Una vez completado, recibirás confirmación por email con todos los detalles de acceso."
            }
          },
          {
            "@type": "Question",
            "name": "¿Ofrecen renovación automática?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, ofrecemos renovación automática opcional para que nunca pierdas tu dominio. Puedes activarla o desactivarla en cualquier momento desde tu panel de control. Te enviamos recordatorios antes del vencimiento para que tengas control total sobre tus dominios."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué es la protección de privacidad WHOIS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La protección WHOIS oculta tu información personal (nombre, dirección, teléfono, email) del directorio público WHOIS, reemplazándola con información de nuestro servicio de privacidad. Esto te protege del spam y mantiene tu información personal segura. Está incluida gratuitamente con todos nuestros dominios."
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
            "name": "Dominios",
            "item": "https://moshipp.com/dominios"
          }
        ]
      })
    },
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Registro de Dominios - Moshipp",
        "description": "Página para registro y gestión de dominios web con más de 500 extensiones disponibles",
        "url": "https://moshipp.com/dominios",
        "mainEntity": {
          "@type": "Service",
          "name": "Registro de Dominios",
          "provider": {
            "@type": "Organization",
            "name": "Moshipp"
          }
        },
        "breadcrumb": {
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
              "name": "Dominios",
              "item": "https://moshipp.com/dominios"
            }
          ]
        }
      })
    }
  ];
}

export default function DomainRoute() {
  return <DomainsPage />;
}