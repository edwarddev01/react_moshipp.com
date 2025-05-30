// app/components/desarrolloWeb/DesarrolloCta.tsx
import React from "react";
import { Link } from "react-router";
import { ArrowRight, Code, MessageSquare, CheckCircle } from "lucide-react";

// Estilos para animaciones
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

  .gradient-button {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
  .gradient-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #144AE8, #09415F);
    z-index: -1;
    transition: opacity 0.3s ease;
    opacity: 0;
  }
  
  .gradient-button:hover::before {
    opacity: 1;
  }
  
  .shine-effect {
    position: relative;
    overflow: hidden;
  }
  
  .shine-effect::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    transform: rotate(30deg);
    animation: shine 6s ease-in-out infinite;
  }
  
  @keyframes shine {
    0% {
      transform: scale(0.5) rotate(0);
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: scale(1.2) rotate(30deg);
      opacity: 0;
    }
  }
`;

const DesarrolloCta: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 py-16 px-4 overflow-hidden">
      <style>{animationStyles}</style>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-cta" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0M30 60L60 30M0 30L30 0" stroke="white" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/3 translate-x-1/4 shine-effect"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para impulsar tu presencia digital?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos hoy mismo para comenzar a trabajar en tu proyecto. Ofrecemos consultas gratuitas para evaluar tus necesidades y proporcionarte la mejor solución.
            </p>
            
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Presupuesto detallado y transparente</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Sin costos ocultos ni compromisos iniciales</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">Soporte continuo antes, durante y después del proyecto</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-blue-700 bg-white hover:bg-blue-50 transition"
              >
                Contactar ahora
                <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="gradient-button inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700/50 transition"
              >
                Ver portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Lado derecho - Elementos flotantes */}
          <div className="hidden md:block relative h-80">
            {/* Elementos flotantes con beneficios */}
            <div className="absolute top-0 right-0 bg-white dark:bg-gray-800 px-5 py-4 rounded-lg shadow-xl z-20 animate-float">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Experiencia en React
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Desarrollo frontend moderno
                  </span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-5 py-4 rounded-lg shadow-xl z-20 animate-float-delayed">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    WordPress Avanzado
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Temas y plugins personalizados
                  </span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-1/4 bg-white dark:bg-gray-800 px-5 py-4 rounded-lg shadow-xl z-20" style={{ animation: "float 6s ease-in-out infinite 1.5s" }}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                    eCommerce Profesional
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    WooCommerce y soluciones headless
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sello de confianza */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm">
            <StarIcon className="h-4 w-4 mr-2 text-yellow-300" fill="currentColor" />
            <span>Calificación 4.9/5 basada en más de 200 proyectos completados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Star icon
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Componente Globe icon
const Globe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// Componente ShoppingBag icon
const ShoppingBag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default DesarrolloCta;