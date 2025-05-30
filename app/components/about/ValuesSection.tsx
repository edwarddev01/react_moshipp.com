// app/pages/about/components/ValuesSection.tsx
import React from "react";
import { Heart } from "lucide-react";
import { values } from "~/data/aboutData";


const ValuesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 mb-6">
            <Heart className="h-4 w-4 mr-1" />
            <span>Principios fundamentales</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nuestros valores</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Los principios que guían nuestras decisiones y definen nuestra cultura empresarial
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-t-4 border-blue-600 dark:border-blue-500 hover:shadow-xl transition-shadow duration-300">
              <div className={`${value.color} mb-6`}>
                <div className={`w-16 h-16 rounded-full ${value.bgColor} flex items-center justify-center`}>
                  <value.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;