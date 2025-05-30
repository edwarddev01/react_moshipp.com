// app/pages/contact/components/ContactHeroSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  Clock,
  Shield,
  Zap,
  Server,
  Mail,
  Phone,
  MessageSquare,
  Headphones,
  ChevronRight,
  MessageCircleCode,
} from "lucide-react";

// Estilos para animaciones flotantes
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

// Slider de características de soporte animation
const sliderStyle = `
  .support-slider {
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
`;

const ContactHeroSection: React.FC = () => {
  // Array de características de soporte
  const supportFeatures = [
    {
      name: "Soporte 24/7",
      icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "Respuesta rápida",
      icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "Asistencia técnica",
      icon: <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "Soporte multicanal",
      icon: <Headphones className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "Atención personalizada",
      icon: (
        <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      ),
    },
  ];

  // Estados para el slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Para slider, creamos un array duplicado
  const clonedFeatures = [
    ...supportFeatures,
    ...supportFeatures,
    ...supportFeatures,
  ];
  const offset = supportFeatures.length;
  const totalItems = clonedFeatures.length;

  // Referencia para el contenedor
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Actualizar la cantidad de items por vista según el tamaño de la pantalla
  const updateItemsPerView = () => {
    if (window.innerWidth < 640) {
      setItemsPerView(3);
    } else if (window.innerWidth < 1024) {
      setItemsPerView(4);
    } else {
      setItemsPerView(5);
    }
  };

  // Reposicionar cuando llega al inicio o fin sin animación
  useEffect(() => {
    if (currentSlide <= 0 || currentSlide >= totalItems - itemsPerView) {
      // Esperar a que termine la transición actual
      const timer = setTimeout(() => {
        setIsTransitioning(true);

        // Desactivar transición para reposicionar instantáneamente
        if (sliderContainerRef.current) {
          sliderContainerRef.current.classList.add("no-transition");
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
            sliderContainerRef.current.classList.remove("no-transition");
          }
          setIsTransitioning(false);
        }, 50);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentSlide, totalItems, itemsPerView, offset]);

  // Auto rotate el slider cada 3 segundos
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isTransitioning) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => prev + 1);
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
  const itemWidth = 100 / clonedFeatures.length;
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
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>Estamos aquí para ayudarte</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Contáctanos</span>
              <span className="multicolor-underline text-blue-600 dark:text-blue-400">
                Moshipp
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              Estamos aquí para ayudarte con cualquier consulta sobre nuestros
              servicios de hosting, dominios y soluciones web. Nuestro equipo de
              expertos está
              <span className="font-medium text-blue-600 dark:text-blue-400">
                {" "}
                listo para brindarte la mejor atención.
              </span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#form-contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Enviar mensaje
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/licenciadigital"
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition hover:shadow"
              >
                Chat via WhatsApp
                <MessageCircleCode className="ml-2 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Imagen/Ilustración */}
          <div className="md:flex hidden justify-center md:justify-end mx-auto lg:mx-0">
            <div className="relative">
              {/* Imagen principal con gradiente y sombra */}
              <div className="relative z-10">
                <img
                  src="/contact/contact-hero.png"
                  alt="Contacto y soporte Moshipp"
                  className="w-full  h-auto rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/api/placeholder/600/400";
                  }}
                />
              </div>

              {/* Elementos visuales de diseño */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-700 z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-blue-50 dark:bg-blue-900/30 z-0"></div>

              {/* Elemento flotante - Email */}
              <div className="absolute top-4 -left-10 md:-left-20 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#001DAC] dark:bg-blue-600 flex items-center justify-center text-white mr-2">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    info@moshipp.com
                  </span>
                </div>
              </div>

              {/* Segundo elemento flotante - Teléfono */}
              <div className="absolute bottom-4 -right-10 md:-right-16 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md z-20 animate-float-delayed">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    +57 350 602 7870
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
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Respuesta rápida
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

export default ContactHeroSection;
