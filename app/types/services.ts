// types/services.ts


export interface Category {
  id: string;
  name: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.FC<{ className?: string }>;
}

export interface ServiceTestimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface ServiceTechSpec {
  category: string;
  specs: Array<{
    name: string;
    value: string;
  }>;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export interface ServiceComparison {
  feature: string;
  ourService: string | boolean;
  competitor1?: string | boolean;
  competitor2?: string | boolean;
}

export interface ServiceGalleryItem {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

// Secciones dinámicas opcionales
export interface ServiceSections {
  // Características detalladas
  detailedFeatures?: ServiceFeature[];
  
  // Beneficios clave
  benefits?: ServiceBenefit[];
  
  // Testimonios
  testimonials?: ServiceTestimonial[];
  
  // Proceso de implementación
  implementationSteps?: ServiceStep[];
  
  // Especificaciones técnicas
  techSpecs?: ServiceTechSpec[];
  
  // Comparación con competencia
  comparison?: {
    title: string;
    competitors: string[];
    features: ServiceComparison[];
  };
  
  // Galería
  gallery?: ServiceGalleryItem[];
  
  // Casos de uso
  useCases?: Array<{
    title: string;
    description: string;
    example: string;
    icon: React.FC<{ className?: string }>;
  }>;
  
  // FAQ específicas del servicio
  faqs?: ServiceFaq[];
}

export interface Service {
  id: string;
  title: string;
  image?: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  url: string;
  price: string;
  category: string;
  featured: boolean;
  features: string[];
  
  // Nuevas secciones opcionales
  sections?: ServiceSections;
}