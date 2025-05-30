import React from "react";
import type { ServiceBenefit } from "~/types/services";

interface BenefitsSectionProps {
  benefits: ServiceBenefit[];
  serviceColor: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  benefits,
  serviceColor,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
            ¿Por qué elegirnos?
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Los beneficios que obtendrás con nuestro servicio de excelencia
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2">
                  
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-start space-x-6">
                    
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-16 h-16 rounded-xl ${serviceColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                        <IconComponent className="relative w-8 h-8 text-white" />
                      </div>
                      
                      {/* Connecting line for visual flow */}
                      <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-600 mx-auto mt-4"></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-md">
                        {benefit.description}
                      </p>
                      
                      {/* Subtle accent line */}
                      <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-24"></div>
                    </div>
                  </div>

                  {/* Card number indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">Y muchos beneficios más por descubrir</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;