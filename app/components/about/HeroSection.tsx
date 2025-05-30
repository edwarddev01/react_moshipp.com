// app/pages/about/components/HeroSection.tsx
import React from "react";
import { Users } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-6">
            <Users className="h-4 w-4 mr-1" />
            <span>Conozca nuestro equipo</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Conozca</span>
            <span className="text-blue-600 dark:text-blue-400">Moshipp</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos su aliado tecnológico, ofreciendo servicios de hosting rápidos, confiables y seguros para potenciar su presencia en línea. Conoce nuestra historia, valores y el equipo que hace posible nuestro servicio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;