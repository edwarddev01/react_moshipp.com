// app/components/serviceDetail/ServiceHero.tsx
import React, { useState, useEffect } from "react";
import { CheckCircle, Server, Shield, Clock } from "lucide-react";
import type { Service } from "~/types/services";

// Estilos CSS para animaciones de esta sección
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out infinite 2s;
  }
`;

interface ServiceHeroProps {
  service: Service;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative overflow-hidden ${service.color} py-16 px-4`}>
      {/* Estilos CSS para animaciones */}
      <style>{animationStyles}</style>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0M30 60L60 30M0 30L30 0" stroke="white" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 left-40 w-4 h-4 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-5 h-5 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-center md:text-left transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-6">
              {service.icon && <service.icon className="h-4 w-4 mr-1" />}
              <span>{service.category || 'Hosting'}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              {service.title}
            </h1>
            
            <p className="text-lg text-white/90 mb-6">
              {service.description}
            </p>
            
            {/* Precio estimado */}
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white/20 text-white mb-8">
              <span className="font-bold mr-1">{service.price}</span>
            </div>
            
            {/* Características destacadas */}
            {service.features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-1 rounded-full bg-white/30 mr-3 mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Ilustración o elementos visuales */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Elementos decorativos*/}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-white/10 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/20 z-0"></div>
              
              {/* Iconos flotantes con beneficios */}
              <div className="absolute top-0 -left-10 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
                    <Server className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Alto rendimiento
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float-delayed">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Seguridad avanzada
                  </span>
                </div>
              </div>
              
              <div 
                className="absolute -bottom-10 left-20 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20"
                style={{ animation: "float 6s ease-in-out infinite 1s" }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-2">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Soporte 24/7
                  </span>
                </div>
              </div>
              
              {/* Contenido principal - Si hay imagen la muestra, si no muestra el icono */}
              {service.image ? (
                <div className="relative z-10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full mix-blend-color h-auto rounded-lg" 
                  />
                </div>
              ) : (
                <div className="relative z-10 w-64 h-64 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  {service.icon && (
                    <service.icon className="h-32 w-32 text-white" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;