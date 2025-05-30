// components/serviceDetail/DynamicSectionsManager.tsx
import React from "react";
import type { Service } from "~/types/services";
import DetailedFeaturesSection from "./DetailedFeaturesSection";
import BenefitsSection from "./BenefitsSection";
import TechSpecsSection from "./TechSpecsSection";
import ImplementationStepsSection from "./ImplementationStepsSection";


interface DynamicSectionsManagerProps {
  service: Service;
}

const DynamicSectionsManager: React.FC<DynamicSectionsManagerProps> = ({ 
  service 
}) => {
  const { sections } = service;

  if (!sections) return null;

  return (
    <div className="">
      {/* Características detalladas */}
      {sections.detailedFeatures && (
        <DetailedFeaturesSection 
          features={sections.detailedFeatures}
          serviceColor={service.color}
        />
      )}

      {/* Beneficios clave */}
      {sections.benefits && (
        <BenefitsSection 
          benefits={sections.benefits}
          serviceColor={service.color}
        />
      )}


      {/* Especificaciones técnicas */}
      {sections.techSpecs && (
        <TechSpecsSection 
          techSpecs={sections.techSpecs}
          serviceColor={service.color}
        />
      )}

      
    </div>
  );
};

export default DynamicSectionsManager;