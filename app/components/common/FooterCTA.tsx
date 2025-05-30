// app/components/common/FooterCTA.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  Zap, 
  Server, 
  Shield, 
  Clock, 
  Check, 
  MessageSquare,
  Globe,
  RefreshCw,
  Lock
} from 'lucide-react';

// Estilos CSS para animaciones y efectos visuales
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  
  .pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
  
  .cta-button {
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  }
  
  .cta-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  .cta-button:hover::after {
    transform: translateX(100%);
  }
  
  .icon-circle {
    transition: all 0.3s ease;
  }
  
  .icon-group:hover .icon-circle {
    transform: scale(1.1);
  }
  
  .icon-group:hover .icon {
    transform: rotate(15deg);
  }
  
  .icon {
    transition: all 0.3s ease;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-slow-rotate {
    animation: rotate 20s linear infinite;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease forwards;
  }
  
  .animate-fadeInUp-delay-1 {
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: 0.1s;
    opacity: 0;
  }
  
  .animate-fadeInUp-delay-2 {
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: 0.2s;
    opacity: 0;
  }
  
  .animate-fadeInUp-delay-3 {
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }
`;

const FooterCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 overflow-hidden">
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
      
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl -ml-32 -mb-32"></div>
      
      {/* Partículas */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full opacity-60 pulse-slow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-60 pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* Círculo decorativo con rotación */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
        <div className="w-full h-full animate-slow-rotate">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white mb-6 animate-fadeInUp">
            <Zap className="h-4 w-4 mr-1" />
            <span>Migración sin complicaciones</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6 animate-fadeInUp-delay-1">
            ¿Migrar desde <span className="multicolor-underline">otro proveedor</span> de hosting?
          </h2>
          
          <p className="mt-4 text-lg leading-7 text-blue-100 max-w-3xl mx-auto animate-fadeInUp-delay-2">
            ¿Estás cansado de la falta de rapidez y seguridad en tu sitio web? 
            ¡Migra a Moshipp y obtén un servicio de hosting de calidad superior!
          </p>
          
         
          
          {/* Botones de acción */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contacto"
              className="cta-button inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg transform transition-all"
            >
              Solicitar migración
              <MessageSquare className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/servicios"
              className="cta-button inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700/30 transform transition-all"
            >
              Ver planes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          {/* Sello de confianza */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm backdrop-blur-sm">
              <Shield className="h-4 w-4 mr-2 text-blue-200" />
              <span>Más de 10,000 sitios web migrados con éxito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;