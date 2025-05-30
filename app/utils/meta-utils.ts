// app/utils/meta-utils.ts

/**
 * Interfaz para definir los metadatos básicos de la página
 */
export interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product' | string;
  robots?: string;
}

/**
 * Función para generar metadatos para una página
 * Combina los metadatos por defecto con los específicos de la página
 * 
 * @param pageMetadata - Metadatos específicos de la página
 * @param baseUrl - URL base del sitio (opcional)
 * @param siteName - Nombre del sitio (opcional)
 * @returns Array de metadatos para la función meta de Remix
 */
export function generateMetadata(
  pageMetadata: PageMetadata, 
  baseUrl: string = 'https://moshipp.com',
  siteName: string = 'Moshipp',
  
) {
  const {
    title = "Hosting y Dominios en Colombia | Servicios Web Profesionales",
    description = "Hosting y dominios confiables con servidores en Colombia. Planes de WordPress, cPanel, VPS y desarrollo web con soporte 24/7 y 99.9% uptime garantizado.",
    keywords = "hosting, dominios, wordpress, cpanel, colombia, desarrollo web, vps, servidores, reseller, plesk",
    image = "/images/og-image.jpg",
    canonical = "/",
    type = "website",
    robots = "index, follow"
  } = pageMetadata;

  // Construir título completo con nombre del sitio
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  // Construir URL canónica completa
  const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
  
  // Construir URL de imagen completa
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: robots },
    { name: "author", content: siteName },
    
    // URL canónica
    { tagName: "link", rel: "canonical", href: fullCanonical },
    
    // Open Graph - para compartir en redes sociales
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: fullCanonical },
    { property: "og:image", content: fullImage },
    { property: "og:image:alt", content: `${siteName} - ${title}` },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: "es_CO" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@moshipp" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullImage },
    { name: "twitter:image:alt", content: `${siteName} - ${title}` },
    
    // Otras etiquetas meta que no cambian con frecuencia
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#336699" },
  ];
}