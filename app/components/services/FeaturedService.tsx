import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Check, Star, Zap, Shield, Clock, Server } from 'lucide-react';
import { services } from '~/data/services';

// Estilos CSS para animaciones y efectos visuales
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes float-delayed {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 6s ease-in-out infinite 2s;
  }

  .multicolor-underline {
    position: relative;
    display: inline-block;
  }
  
  .multicolor-underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #FFD700, #FF8C00, #1E90FF, #9370DB, #0000CD);
    border-radius: 1.5px;
  }
  
  .card-highlight {
    position: relative;
    overflow: hidden;
  }
  
  .card-highlight::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background: linear-gradient(
      60deg,
      rgba(59, 130, 246, 0.05) 0%,
      rgba(59, 130, 246, 0) 30%,
      rgba(59, 130, 246, 0) 70%,
      rgba(59, 130, 246, 0.05) 100%
    );
    animation: shine 3s infinite;
    pointer-events: none;
  }
  
  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(25deg);
    }
    100% {
      transform: translateX(100%) rotate(25deg);
    }
  }
  
  .feature-item {
    transition: all 0.3s ease;
  }
  
  .feature-item:hover {
    transform: translateX(5px);
  }
  
  .price-tag {
    transition: all 0.3s ease;
  }
  
  .price-tag:hover {
    transform: scale(1.05);
  }
`;

const FeaturedService: React.FC = () => {
  // Encontrar el servicio WordPress Hosting
  const wordpressHosting = services.find(service => service.id === "hosting-wordpress");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animación de entrada para los elementos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!wordpressHosting) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Estilos CSS para animaciones */}
      <style>{animationStyles}</style>
      
      {/* Patrones decorativos */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      {/* Partículas decorativas */}
      <div className="absolute top-20 right-10 w-6 h-6 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-40 left-40 w-5 h-5 bg-green-500 rounded-full opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-32 left-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-4">
            <Star className="h-4 w-4 mr-1" />
            <span>Servicio recomendado</span>
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            ¿No estás seguro de <span className="multicolor-underline">qué elegir</span>?
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nuestro plan de hosting WordPress optimizado es la elección perfecta para la mayoría de sitios web, con el mejor equilibrio entre rendimiento y precio.
          </p>
        </div>
        
        <div 
          className={`max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl card-highlight transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
          style={{transitionDelay: "200ms"}}
        >
          <div className="relative">
            {/* Etiqueta de más popular */}
            <div className="absolute -right-12 top-6 bg-yellow-500 text-white font-bold py-1 px-10 transform rotate-45 shadow-md z-10">
              Más popular
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                {/* Título y descripción */}
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mr-4 ${wordpressHosting.color} shadow-lg transform transition-transform hover:scale-110`}>
                    <wordpressHosting.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {wordpressHosting.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        +2,500 clientes activos
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  {wordpressHosting.description}
                </p>
                
                {/* Características con animación */}
                <ul className="mb-8 space-y-4">
                  {wordpressHosting.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start feature-item">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Elementos flotantes con beneficios */}
                <div className="relative mt-2 mb-8 hidden md:block">
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      <Server className="h-4 w-4 mr-1" />
                      <span>SSD NVMe</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                      <Shield className="h-4 w-4 mr-1" />
                      <span>SSL Gratis</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Soporte 24/7</span>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
                      <Zap className="h-4 w-4 mr-1" />
                      <span>Velocidad óptima</span>
                    </div>
                  </div>
                </div>
                
                {/* Botón de acción */}
                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    to={wordpressHosting.url}
                    className="inline-flex py-3 px-6 bg-blue-600 hover:bg-blue-700 items-center justify-center text-white font-medium rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Ver planes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    30 días de garantía de devolución
                  </span>
                </div>
              </div>
              
              {/* Imagen a la derecha con elementos decorativos */}
              <div className="flex items-center justify-center relative">
                {/* Elementos decorativos */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/20 z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 z-0"></div>
                
                {/* Imagen principal con sombra y borde */}
                <div className="relative z-10 p-2 ">
                  <img 
                    src="/services/wordpress-hosting.png" 
                    alt="WordPress Hosting" 
                    className="w-full h-auto rounded" 
                  />
                  
                  {/* Elemento flotante - Uptime */}
                  <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-md z-20 animate-float">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
                        <Server className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                        99.9% Uptime
                      </span>
                    </div>
                  </div>
                  
                  {/* Elemento flotante - Velocidad */}
                  <div 
                    className="absolute -bottom-4 right-10 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-md z-20"
                    style={{ animation: "float 6s ease-in-out infinite 1s" }}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                        <Zap className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                        Optimizado WP
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Etiqueta de precio mejorada */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-full shadow-lg price-tag">
                  <div className="text-center">
                  
                    <div className="font-bold text-white text-xl">
                      {wordpressHosting.price}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sección inferior con testimonios o extra info */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 flex items-center justify-center border-t border-blue-100 dark:border-blue-800/50">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 md:gap-6">
              <div className="flex items-center">
                <img 
                  src="/avatars/avatar.avif" 
                  alt="Cliente satisfecho" 
                  className="w-8 h-8 rounded-full mr-2" 
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "Migré mi sitio y la velocidad mejoró un 240%"
                </span>
              </div>
              <div className="h-4 w-px bg-blue-200 dark:bg-blue-700 hidden md:block"></div>
              <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                Pruébalo sin riesgos con nuestra garantía de 30 días
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;