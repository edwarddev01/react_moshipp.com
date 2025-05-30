// app/pages/about/components/MissionVisionSection.tsx
import React from "react";
import { Target, Zap } from "lucide-react";

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-6">
            <Target className="h-4 w-4 mr-1" />
            <span>Nuestros objetivos</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Misión y Visión</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Lo que nos impulsa y hacia dónde nos dirigimos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-500/5 z-0 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mb-6 relative z-10">
              <Zap className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Nuestra misión</h3>
            <p className="text-gray-700 dark:text-gray-300 relative z-10">
              Proporcionar soluciones de hosting web excepcionales que permitan a nuestros clientes tener una presencia en línea rápida, segura y confiable. Nos comprometemos a ofrecer un servicio de atención al cliente de primer nivel, asegurando que cada cliente reciba el soporte necesario para alcanzar sus objetivos digitales.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-500/5 z-0 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full mb-6 relative z-10">
              <Target className="h-8 w-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Nuestra visión</h3>
            <p className="text-gray-700 dark:text-gray-300 relative z-10">
              Ser el proveedor de hosting líder en Colombia, reconocido por la calidad de nuestros servicios, la innovación constante y el compromiso con la satisfacción del cliente. Aspiramos a expandir nuestra presencia en Latinoamérica, llevando nuestra experiencia y soluciones tecnológicas a más empresas y emprendedores de la región.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;