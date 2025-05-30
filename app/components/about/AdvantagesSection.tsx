// app/pages/about/components/AdvantagesSection.tsx
import React from "react";
import { advantages } from "~/data/aboutData";


const AdvantagesSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-indigo-900 py-16 overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">¿Por qué elegir Moshipp?</h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Descubra las ventajas que nos diferencian y que han convertido a Moshipp en la elección preferida de empresas y emprendedores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20">
              <div className={`${advantage.color} mb-4`}>
                <advantage.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
              <p className="text-blue-100">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;