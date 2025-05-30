import React from "react";
import type { ServiceStep } from "~/types/services";

interface ImplementationStepsSectionProps {
  steps: ServiceStep[];
  serviceColor: string;
}

const ImplementationStepsSection: React.FC<ImplementationStepsSectionProps> = ({
  steps,
  serviceColor,
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proceso de Implementación
          </h2>
          <p className="text-xl text-gray-600">
            Te acompañamos paso a paso en todo el proceso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full ${serviceColor} flex items-center justify-center text-white font-bold mr-6`}>
                {step.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  {step.duration && (
                    <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationStepsSection;