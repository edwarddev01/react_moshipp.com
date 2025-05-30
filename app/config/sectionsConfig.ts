import type { ServiceSections } from "~/types/services";

// config/sectionsConfig.ts
export interface SectionConfig {
  key: keyof ServiceSections;
  component: string;
  order: number;
  position: 'before-plans' | 'after-plans' | 'both';
  defaultEnabled: boolean;
}

// Configuración global del orden de secciones
export const sectionsConfig: SectionConfig[] = [
  {
    key: 'detailedFeatures',
    component: 'DetailedFeaturesSection',
    order: 1,
    position: 'before-plans',
    defaultEnabled: true,
  },
  {
    key: 'benefits',
    component: 'BenefitsSection',
    order: 2,
    position: 'before-plans',
    defaultEnabled: true,
  },
  {
    key: 'useCases',
    component: 'UseCasesSection',
    order: 3,
    position: 'before-plans',
    defaultEnabled: true,
  },
  {
    key: 'techSpecs',
    component: 'TechSpecsSection',
    order: 4,
    position: 'before-plans',
    defaultEnabled: false,
  },
  {
    key: 'implementationSteps',
    component: 'ImplementationStepsSection',
    order: 5,
    position: 'before-plans',
    defaultEnabled: true,
  },
  {
    key: 'gallery',
    component: 'GallerySection',
    order: 6,
    position: 'before-plans',
    defaultEnabled: false,
  },
  {
    key: 'comparison',
    component: 'ComparisonSection',
    order: 7,
    position: 'after-plans',
    defaultEnabled: false,
  },
  {
    key: 'testimonials',
    component: 'TestimonialsSection',
    order: 8,
    position: 'after-plans',
    defaultEnabled: true,
  },
  {
    key: 'faqs',
    component: 'ServiceFaqSection',
    order: 9,
    position: 'after-plans',
    defaultEnabled: true,
  },
];

// Hook para obtener secciones ordenadas por posición
export const useSectionsByPosition = (
  sections: ServiceSections | undefined,
  position: 'before-plans' | 'after-plans'
) => {
  if (!sections) return [];
  
  return sectionsConfig
    .filter(config => 
      config.position === position || config.position === 'both'
    )
    .filter(config => sections[config.key])
    .sort((a, b) => a.order - b.order)
    .map(config => ({
      ...config,
      data: sections[config.key],
    }));
};

// Utilidad para verificar si una sección debe mostrarse
export const shouldShowSection = (
  sectionKey: keyof ServiceSections,
  sections: ServiceSections | undefined,
  customConfig?: Partial<SectionConfig>
): boolean => {
  if (!sections || !sections[sectionKey]) return false;
  
  const config = sectionsConfig.find(c => c.key === sectionKey);
  if (!config) return false;
  
  return customConfig?.defaultEnabled ?? config.defaultEnabled;
};