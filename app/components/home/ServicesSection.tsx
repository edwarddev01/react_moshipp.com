// app/components/home/ServicesSection.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  
} from "lucide-react";
import type { Service } from "~/types/services";
import { categories, services } from "~/data/services";



const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl transition-all duration-300 overflow-hidden h-full 
      ${
        service.featured
          ? "shadow-xl ring-1 ring-blue-600/10 transform hover:-translate-y-2"
          : "shadow-md hover:shadow-xl transform hover:-translate-y-2"
      }`}
    >
      {service.featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
            Recomendado
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <div
          className={`${
            service.featured
              ? "bg-blue-600/10 dark:bg-blue-900/30"
              : "bg-gray-100 dark:bg-gray-700"
          } w-16 h-16 rounded-full flex items-center justify-center mb-4`}
        >
          <service.icon
            className={`h-8 w-8 ${
              service.featured
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
          />
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="mb-6 space-y-2 flex-grow">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">
            {service.price}
          </div>
          <Link
            to={service.url}
            className={`inline-flex w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 items-center justify-center text-white font-medium rounded-lg transition-all hover:shadow-md 
            `}
          >
            Ver planes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("destacados");
  const [visibleServices, setVisibleServices] = useState<Service[]>([]);

  useEffect(() => {
    filterServices(activeCategory);
  }, [activeCategory]);

  const filterServices = (category: string) => {
    let filteredServices: Service[];

    if (category === "destacados") {
      filteredServices = services.filter((service) => service.featured);
    } else {
      filteredServices = services.filter(
        (service) => service.category === category
      );
    }

    setVisibleServices(filteredServices);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2 block">
            Soluciones de alojamiento
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Soluciones completas para tu presencia en línea con tecnología de
            última generación, rendimiento optimizado y soporte técnico
            especializado.
          </p>
        </div>

        {/* Tabs de categorías */}
        <div className="flex flex-wrap justify-center mb-10 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 m-1 rounded-full font-medium text-sm transition-all 
              ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service) => (
            <div key={service.id} className="service-card animate-fadeIn">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Botón para ver todos los planes */}
        <div className="mt-16 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Ver todos nuestros planes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        
      </div>

      <style >{`
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
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
