// app/pages/about/components/HistorySection.tsx
import React from "react";
import { Award, Server } from "lucide-react";

const HistorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 mb-6">
              <Award className="h-4 w-4 mr-1" />
              <span>Nuestra trayectoria</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nuestra historia</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fundada en 2020 en Lorica, Córdoba, Moshipp nació con una misión clara: revolucionar la experiencia de hosting en Colombia ofreciendo servicios de calidad superior con un enfoque en la velocidad, seguridad y soporte excepcional.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Desde nuestros inicios, nos hemos dedicado a crear soluciones tecnológicas que permitan a empresas y emprendedores tener una presencia digital confiable, sin complicaciones técnicas y con un soporte técnico siempre disponible.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Hoy, seguimos creciendo con la misma pasión, innovando constantemente para ofrecer a nuestros clientes la mejor experiencia posible en alojamiento web.
            </p>
          </div>
          <div className="relative md:block hidden">
            <div className="relative z-10">
              <img 
                src="/about/server-room.png" 
                alt="Centro de datos Moshipp" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/600/400";
                }}
              />
            </div>
            
            {/* Elementos flotantes */}
            <div className="absolute top-4 -left-10 md:-left-16 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg shadow-md z-20 animate-float">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                  <Server className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Tecnología de punta
                </span>
              </div>
            </div>
            
            <div className="absolute bottom-4 -right-10 md:-right-16 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg shadow-md z-20 animate-float-delayed">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Fundada en 2020
                </span>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-purple-50 dark:bg-purple-900/20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;