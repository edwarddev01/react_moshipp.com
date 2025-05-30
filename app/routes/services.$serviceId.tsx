// app/routes/servicios.$serviceId.tsx
import { json, type LoaderFunction } from '@remix-run/node';

import ServiceDetailContainer from '~/pages/services/ServiceDetailContainer';
import { services } from '~/data/services';
import { generateMetadata } from "~/utils/meta-utils";
import type { Route } from '../+types/root';
import { useLoaderData } from 'react-router';


// Definir el tipo para los datos cargados
type LoaderData = {
  service: {
    id: string;
    title: string;
    description: string;
    metaDescription?: string;
    features: string[];
    pricing: {
      monthly: number;
      annual: number;
    };
    category: string;
    icon?: string;
    badge?: string;
    isPopular?: boolean;
  };
};

// Función loader para cargar los datos del servicio
export const loader: LoaderFunction = async ({ params }) => {
  const { serviceId } = params;
  
  if (!serviceId) {
    throw new Response('No se encontró el servicio', { status: 404 });
  }
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    throw new Response('Servicio no encontrado', { status: 404 });
  }
  
  return json({ service });
};

// Función para generar metadata dinámica
export function meta({ data }: { data: LoaderData | undefined }) {
  if (!data?.service) {
    return generateMetadata({
      title: "Servicio no encontrado - Moshipp",
      description: "El servicio que buscas no existe o ha sido movido.",
    });
  }

  const { service } = data;
  
  const title = `${service.title} | Moshipp`;
  const description = service.metaDescription || service.description || `Conoce nuestro servicio de ${service.title.toLowerCase()}. ${service.features.slice(0, 2).join(', ')} y mucho más.`;
  
  return generateMetadata({
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      service.category.toLowerCase(),
      'hosting colombia',
      'dominios',
      'moshipp',
      'servidor web',
      'hosting profesional',
      ...service.features.map(f => f.toLowerCase())
    ].join(', '),
    canonical: `https://moshipp.com/servicios/${service.id}`,
  });
}

// Generar datos estructurados JSON-LD dinámicos
export function scripts({ data }: { data: LoaderData }) {
  if (!data?.service) {
    return [];
  }

  const { service } = data;

  return [
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": service.title,
        "description": service.description,
        "category": service.category,
        "brand": {
          "@type": "Brand",
          "name": "Moshipp"
        },
        "provider": {
          "@type": "Organization",
          "name": "Moshipp",
          "url": "https://moshipp.com",
          "logo": "https://moshipp.com/common/moshipp-logo-black.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+573506027870",
            "email": "info@moshipp.com",
            "contactType": "customer service",
            "availableLanguage": ["Spanish"],
            "areaServed": "CO"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": service.pricing.monthly.toString(),
          "priceCurrency": "COP",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": service.pricing.monthly,
            "priceCurrency": "COP",
            "unitText": "MONTH",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "minValue": 1
            }
          },
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Moshipp"
          },
          "url": `https://moshipp.com/servicios/${service.id}`,
          "validFrom": new Date().toISOString(),
          "areaServed": {
            "@type": "Country",
            "name": "Colombia"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "url": `https://moshipp.com/servicios/${service.id}`,
        "additionalProperty": service.features.map(feature => ({
          "@type": "PropertyValue",
          "name": "Feature",
          "value": feature
        }))
      })
    },
    {
      async: true,
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": service.title,
        "description": service.description,
        "url": `https://moshipp.com/servicios/${service.id}`,
        "mainEntity": {
          "@type": "Product",
          "name": service.title,
          "description": service.description
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
              "name": "Servicios",
              "item": "https://moshipp.com/servicios"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": `https://moshipp.com/servicios/${service.id}`
            }
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Moshipp",
          "url": "https://moshipp.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://moshipp.com/common/moshipp-logo-black.png"
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
            "name": `¿Qué incluye el servicio de ${service.title}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Nuestro servicio de ${service.title} incluye: ${service.features.join(', ')}. Perfecto para empresas que buscan una solución confiable y profesional.`
            }
          },
          {
            "@type": "Question",
            "name": `¿Cuál es el precio del ${service.title}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `El ${service.title} tiene un costo de $${service.pricing.monthly.toLocaleString('es-CO')} COP mensuales o $${service.pricing.annual.toLocaleString('es-CO')} COP anuales. Contáctanos para conocer ofertas especiales.`
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo puedo contratar este servicio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puedes contratar nuestros servicios contactándonos a través de WhatsApp (+57 350 602 7870), email (info@moshipp.com) o mediante nuestro formulario de contacto en la página web."
            }
          },
          {
            "@type": "Question",
            "name": "¿Ofrecen soporte técnico?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, ofrecemos soporte técnico especializado de lunes a viernes de 9am a 6pm. Nuestro equipo está disponible para resolver cualquier consulta técnica que tengas."
            }
          }
        ]
      })
    }
  ];
}

// Componente de la ruta que renderiza el contenedor del servicio
export default function ServiceDetailRoute() {
  const { service } = useLoaderData<LoaderData>();
  
  return <ServiceDetailContainer  />;
}