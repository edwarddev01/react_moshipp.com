// app/components/services/ServiceCard.tsx
import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import type { Service } from '~/types/services';


interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2">
      <div className="p-6 flex flex-col h-full">
        {/* Ícono con color dinámico */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.color}`}>
          <service.icon className="h-8 w-8 text-white" />
        </div>
        
        {/* Título y Descripción */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>
        
        {/* Características */}
        {service.features && service.features.length > 0 && (
          <ul className="mb-6 space-y-2 flex-grow">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Precio y Enlace */}
        <div className="mt-auto">
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
            {service.price}
          </div>
          <Link
            to={service.url}
            className="inline-flex w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 items-center justify-center text-white font-medium rounded-lg transition-all hover:shadow-md"
          >
            Ver detalles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;