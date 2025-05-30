// app/components/services/ServicesGrid.tsx
import React from 'react';
import ServiceCard from './ServiceCard';
import type { Service } from '~/types/services';


interface ServicesGridProps {
  services: Service[];
  activeCategory: string;
  searchQuery: string;
  onResetFilters: () => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  services, 
  activeCategory, 
  searchQuery, 
  onResetFilters 
}) => {
  if (services.length === 0) {
    return (
      <div className="text-center py-16 col-span-3 w-full">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          No encontramos servicios que coincidan con tu búsqueda
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Intenta con otros términos o categorías
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
        >
          Ver todos los servicios
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="service-card animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default ServicesGrid;