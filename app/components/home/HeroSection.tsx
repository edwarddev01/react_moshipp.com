// app/components/home/HeroSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from '~/hooks/useTranslation';
import {
  ArrowRight,
  Check,
  Clock,
  Shield,
  Zap,
  Server,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const floatAnimationStyle = `
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
`;

// Estilo para el subrayado multicolor
const multicolorLineStyle = `
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
`;

// Slider de partners animation - Mejorado para carrusel infinito
const sliderStyle = `
  .partners-slider {
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
  }
  
  .slider-container {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .slider-container.no-transition {
    transition: none;
  }
  
  .slider-item {
    flex-shrink: 0;
    padding: 0 10px;
    transition: all 0.3s ease;
  }
  
  .slider-controls {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .slider-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #CBD5E0;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .slider-dot.active {
    background-color: #3B82F6;
    transform: scale(1.2);
  }
  
  .slider-nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #E2E8F0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .slider-nav-button:hover {
    background-color: #F3F4F6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .slider-nav-button.prev {
    left: 0;
  }
  
  .slider-nav-button.next {
    right: 0;
  }
`;

const HeroSection: React.FC = () => {
  const { t } = useTranslation('home');
  // Array de partners
  const partners = [
    { name: "cPanel", logo: "/logos/cpanel.png" },
    { name: "Plesk", logo: "/logos/plesk.webp" },
    { name: "WordPress", logo: "/logos/wordpress-logo.png" },
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
  ];

  // Estados para el slider infinito
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Para slider infinito, creamos un array duplicado al inicio y final
  const clonedPartners = [...partners, ...partners, ...partners];
  const offset = partners.length;
  const totalItems = clonedPartners.length;
  
  // Referencia para el contenedor
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Actualizar la cantidad de items por vista según el tamaño de la pantalla
  const updateItemsPerView = () => {
    if (window.innerWidth < 640) {
      setItemsPerView(3);
    } else if (window.innerWidth < 1024) {
      setItemsPerView(4);
    } else {
      setItemsPerView(6);
    }
  };

  // Funciones para navegación del slider infinito
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex + offset);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  // Reposicionar cuando llega al inicio o fin sin animación
  useEffect(() => {
    if (currentSlide <= 0 || currentSlide >= totalItems - itemsPerView) {
      // Esperar a que termine la transición actual
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        
        // Desactivar transición para reposicionar instantáneamente
        if (sliderContainerRef.current) {
          sliderContainerRef.current.classList.add('no-transition');
        }
        
        // Reposicionar al clon equivalente
        if (currentSlide <= 0) {
          setCurrentSlide(offset);
        } else if (currentSlide >= totalItems - itemsPerView) {
          setCurrentSlide(offset);
        }
        
        // Reactivar transición
        setTimeout(() => {
          if (sliderContainerRef.current) {
            sliderContainerRef.current.classList.remove('no-transition');
          }
          setIsTransitioning(false);
        }, 50);
      }, 500); // Esperar a que termine la transición actual
      
      return () => clearTimeout(timer);
    }
  }, [currentSlide, totalItems, itemsPerView, offset]);

  // Auto rotate el slider cada 3 segundos
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isTransitioning) {
      interval = setInterval(() => {
        goToNextSlide();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, isTransitioning]);

  // Actualizar items por vista cuando cambia el tamaño de la ventana
  useEffect(() => {
    updateItemsPerView();
    
    const handleResize = () => {
      updateItemsPerView();
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular tamaño de item y offset para transformación
  const itemWidth = 100 / clonedPartners.length;
  const translateX = currentSlide * itemWidth;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Estilos de animación float y línea multicolor */}
      <style>{floatAnimationStyle + multicolorLineStyle + sliderStyle}</style>

      {/* Patrón decorativo */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
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
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="200"
                r="80"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="200"
                r="40"
                stroke="#3B82F6"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 left-40 w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-5 h-5 bg-purple-500 dark:bg-purple-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-60 right-32 w-5 h-5 bg-pink-500 dark:bg-pink-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-6 h-6 bg-yellow-500 dark:bg-yellow-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-6">
              <Zap className="h-4 w-4 mr-1" />
              <span>Hosting de Alto Rendimiento</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hosting y dominios</span>
              <span className="multicolor-underline text-blue-600 dark:text-blue-400">
                en Colombia
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              Ofrecemos hosting rápido y seguro con cPanel, WordPress, Plesk,
              VPS y Reseller. También email corporativo premium, desarrollo web
              y más.
              <span className="font-medium text-blue-600 dark:text-blue-400">
                {" "}
                ¡Descubre Moshipp!
              </span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/servicios/wordpress-hosting"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ver planes
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition hover:shadow"
              >
                Contáctanos
              </Link>
            </div>

            {/* Sección de respaldos tecnológicos/partners - Slider infinito */}
            <div className="mt-8">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                Tecnologías que nos respaldan:
              </p>
              <div className="partners-slider px-8 relative">
              
                
                {/* Contenedor del slider infinito */}
                <div
                  ref={sliderContainerRef}
                  className="slider-container"
                  style={{
                    transform: `translateX(-${translateX}%)`,
                    width: `${totalItems * 100 / itemsPerView}%`,
                  }}
                >
                  {clonedPartners.map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="slider-item"
                      style={{ width: `${itemWidth}%` }}
                    >
                      <div className="group flex flex-col items-center p-2 mx-1 transition-all hover:cursor-pointer rounded-lg">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          title={partner.name}
                          className="h-10 w-auto mx-auto opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Imagen/Ilustración */}
          <div className="md:flex hidden justify-center md:justify-end mx-auto lg:mx-0">
            <div className="relative">
              {/* Imagen principal con gradiente y sombra */}
              <div className="relative z-10">
                <img
                  src="/home/hero2.png"
                  alt="Servicios de hosting"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Elementos visuales de diseño */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-700 z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-blue-50 dark:bg-blue-900/30 z-0"></div>

              {/* Elemento flotante con datos - Uptime */}
              <div className="absolute top-4 -left-10 md:-left-20 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#001DAC] dark:bg-blue-600 flex items-center justify-center text-white mr-2">
                    <Server className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    99.9% Uptime
                  </span>
                </div>
              </div>

              {/* Segundo elemento flotante - SSL */}
              <div className="absolute bottom-4 -right-10 md:-right-16 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float-delayed">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                    <Lock className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    SSL Gratuito
                  </span>
                </div>
              </div>

              {/* Tercer elemento flotante - Soporte */}
              <div
                className="absolute -bottom-10 left-10 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20"
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

              {/* Cuarto elemento flotante - Seguridad */}
              <div
                className="absolute -top-6 right-16 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20"
                style={{ animation: "float 6s ease-in-out infinite 3s" }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white mr-2">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Seguridad Avanzada
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

export default HeroSection;