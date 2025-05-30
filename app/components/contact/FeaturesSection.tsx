// app/pages/contact/components/FeaturesSection.tsx
import React from 'react';
import { PlusCircle, Zap, Cloud } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Soporte Premium",
    description: "Contamos con un equipo especializado disponible para ayudarte en lo que necesites.",
    icon: PlusCircle,
  },
  {
    id: 2,
    title: "Respuesta Rápida",
    description: "Nos comprometemos a responder todas tus consultas en menos de 24 horas.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Soluciones en la Nube",
    description: "Ofrecemos soluciones completas para llevar tu negocio a la nube con máxima seguridad.",
    icon: Cloud,
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">¿Por qué contactarnos?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Nuestro compromiso es brindarte el mejor servicio y ayudarte a resolver cualquier duda o problema
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`p-8 text-center ${
                  index < features.length - 1 
                    ? "border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700" 
                    : ""
                }`}
              >
                <div className="w-16 h-16 bg-blue-600/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;