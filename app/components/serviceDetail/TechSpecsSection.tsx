import React from "react";
import type { ServiceTechSpec } from "~/types/services";

interface TechSpecsSectionProps {
  techSpecs: ServiceTechSpec[];
  serviceColor: string;
}

const TechSpecsSection: React.FC<TechSpecsSectionProps> = ({
  techSpecs,
  serviceColor,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-18 h-18 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl mb-8 shadow-lg">
            <svg 
              className="w-9 h-9 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-2">
            Especificaciones técnicas
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Detalles técnicos de nuestro servicio de alta calidad
          </p>
          
          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Tech Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {techSpecs.map((category, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl dark:shadow-gray-900/30 border border-white/20 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-transparent to-indigo-50/30 dark:from-cyan-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating background decoration */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-cyan-100/40 to-indigo-100/40 dark:from-cyan-800/20 dark:to-indigo-800/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {category.category}
                    </h3>
                    
                    {/* Category Icon */}
                    <div className={`w-12 h-12 rounded-xl ${serviceColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
                      <svg 
                        className="relative w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Specifications List */}
                  <div className="space-y-1">
                    {category.specs.map((spec, specIndex) => (
                      <div 
                        key={specIndex} 
                        className="group/spec flex justify-between items-center p-3 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          {/* Spec indicator dot */}
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60 group-hover/spec:opacity-100 group-hover/spec:scale-125 transition-all duration-300"></div>
                          
                          <span className="text-gray-600 dark:text-gray-300 font-medium group-hover/spec:text-gray-900 dark:group-hover/spec:text-white transition-colors duration-300">
                            {spec.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="font-bold  dark:text-white bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover/spec:from-cyan-600 group-hover/spec:to-blue-600 transition-all duration-300">
                            {spec.value}
                          </span>
                          
                          {/* Value highlight indicator */}
                          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover/spec:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-24"></div>
                </div>

                {/* Category number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-700/80 dark:to-gray-600/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-4 right-4 w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                  Tecnología de vanguardia
                </span>
                <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-pulse delay-200"></div>
              </div>
              
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </div>
            
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl">
              Especificaciones diseñadas para ofrecer el máximo rendimiento y confiabilidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;