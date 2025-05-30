// app/components/services/ServicesHero.tsx
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Server, 
  Code, 
  Globe, 
  Database, 
  Shield, 
  Zap
} from 'lucide-react';
import { Link } from 'react-router';

interface ServicesHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

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

  .search-input-focus:focus-within {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }

  .popular-service {
    transition: all 0.3s ease;
  }
  
  .popular-service:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const ServicesHero: React.FC<ServicesHeroProps> = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [isVisible, setIsVisible] = useState(false);

  // Servicios populares para mostrar como sugerencias rápidas
  const popularServices = [
    { name: "WordPress Hosting", icon: <Globe className="h-5 w-5" />, link: "/servicios/wordpress-hosting", color: "bg-blue-500" },
    { name: "Servidores VPS", icon: <Server className="h-5 w-5" />, link: "/servicios/vps", color: "bg-green-500" },
    { name: "Desarrollo Web", icon: <Code className="h-5 w-5" />, link: "/servicios/desarrollo", color: "bg-purple-500" },
  ];

  useEffect(() => {
    // Animación de entrada para los elementos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4">
      {/* Estilos CSS para animaciones */}
      <style>{animationStyles}</style>
      
      {/* Patrón decorativo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-y-0 right-0 w-1/2">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="200"
                r="80"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="200"
                r="40"
                stroke="#ffffff"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 left-40 w-4 h-4 bg-green-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-5 h-5 bg-purple-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-60 right-32 w-5 h-5 bg-pink-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-6 h-6 bg-yellow-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div 
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/30 text-white mb-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <Zap className="h-4 w-4 mr-1" />
              <span>Soluciones Profesionales</span>
            </div>

            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: "100ms"}}
            >
              <span className="block">Nuestros </span>
              <span className="multicolor-underline">servicios</span>
            </h1>
            
            <p 
              className={`text-xl text-blue-100 mb-8 max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: "200ms"}}
            >
              Soluciones profesionales de hosting, servidores y desarrollo web para 
              <span className="font-medium text-white"> impulsar tu presencia digital</span>.
            </p>
            
            {/* Barra de búsqueda con efecto de elevación */}
            <form 
              onSubmit={handleSubmit} 
              className={`relative max-w-xl mx-auto lg:mx-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: "300ms"}}
            >
              <div className="search-input-focus flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300">
                <div className="pl-5">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar servicios..."
                  className="w-full py-4 px-4 text-gray-700 focus:ring-transparent dark:text-gray-200 bg-transparent focus:outline-none border-none"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 cursor-pointer  text-white px-6 py-4 font-medium transition-colors"
                >
                  Buscar
                </button>
              </div>
            </form>
            
            {/* Categorías populares */}
            <div 
              className={`mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: "400ms"}}
            >
              <p className="text-sm font-medium text-blue-200 mb-3">
                Servicios populares:
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {popularServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="popular-service inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium"
                  >
                    <span className={`w-6 h-6 rounded-full ${service.color} flex items-center justify-center mr-2`}>
                      {service.icon}
                    </span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Ilustración o imagen decorativa */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Imagen principal */}
              <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img
                  src="/services/services-hero.png"
                  alt="Nuestros servicios"
                  className="w-full  h-auto  mx-auto"
                />
                {/* Si no tienes esta imagen, puedes comentar esta sección o crear una imagen genérica */}
              </div>

              {/* Elementos visuales de diseño */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-500/30 z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-white/10 z-0"></div>

              {/* Elemento flotante - Hosting */}
              <div className="absolute top-4 -left-10 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
                    <Server className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Hosting Premium
                  </span>
                </div>
              </div>

              {/* Elemento flotante - Seguridad */}
              <div className="absolute bottom-10 -right-10 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float-delayed">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Seguridad 24/7
                  </span>
                </div>
              </div>

              {/* Elemento flotante - Rendimiento */}
              <div
                className="absolute -bottom-8 left-20 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20"
                style={{ animation: "float 6s ease-in-out infinite 1s" }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-2">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Alto Rendimiento
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;