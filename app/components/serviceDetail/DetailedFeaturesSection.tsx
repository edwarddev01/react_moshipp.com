import React from "react";
import type { ServiceFeature } from "~/types/services";

interface DetailedFeaturesSectionProps {
  features: ServiceFeature[];
  serviceColor: string;
}

const DetailedFeaturesSection: React.FC<DetailedFeaturesSectionProps> = ({
  features,
  serviceColor,
}) => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl mb-8 shadow-lg">
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
                d="M13 10V3L4 14h7v7l9-11h-7z" 
              />
            </svg>
          </div>
          
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Características</span>
            <span className="block text-blue-600 dark:text-blue-400">destacadas</span>
          </h2>
          
          <p className="text-lg  text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Descubre todas las funcionalidades que hacen único a nuestro servicio
          </p>
          
          {/* Animated decorative elements */}
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className="group relative"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl dark:shadow-gray-900/30 border border-white/20 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-3 hover:rotate-1 group-hover:bg-white dark:group-hover:bg-gray-800">
                  
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating background elements */}
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    
                    {/* Icon Container */}
                    {IconComponent && (
                      <div className="mb-6">
                        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${serviceColor} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                          {/* Icon inner glow */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
                          
                          {/* Pulse ring */}
                          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping opacity-0 group-hover:opacity-75"></div>
                          
                          <IconComponent className="relative w-8 h-8 text-white" />
                        </div>
                        
                        {/* Feature number badge */}
                        <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-300">
                          <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Text Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-md">
                        {feature.description}
                      </p>
                      
                      {/* Progress line */}
                      <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20"></div>
                    </div>
                  </div>

                  {/* Corner decorative element */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>

                {/* Connecting line for visual flow (only for larger screens) */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 opacity-30"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-200"></div>
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            
            <p className="text-lg font-medium bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Innovación y calidad en cada característica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeaturesSection;