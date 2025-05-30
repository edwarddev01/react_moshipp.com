import React, { useState, useEffect } from "react";
import { Shield, Lock, UserCheck } from "lucide-react";

const PrivacyHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 to-indigo-800 dark:from-gray-800 dark:to-gray-900 py-16 px-4">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0M30 60L60 30M0 30L30 0" stroke="white" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white mb-6">
            <Shield className="h-4 w-4 mr-1" />
            <span>Política de privacidad</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Protegemos su <span className="text-white dark:text-blue-400">Privacidad</span>
          </h1>
          
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Conozca cómo recopilamos, utilizamos y protegemos su información personal para 
            garantizar una experiencia segura y confiable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-indigo-200 dark:text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Datos Seguros</h3>
              <p className="dark:text-gray-400 text-gray-300 text-sm">
                Implementamos medidas de seguridad robustas para proteger su información
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-6 w-6 text-indigo-200 dark:text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Control Total</h3>
              <p className="dark:text-gray-400 text-gray-300 text-sm">
                Usted tiene control sobre cómo se utiliza su información personal
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-indigo-200 dark:text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Transparencia</h3>
              <p className="dark:text-gray-400 text-gray-300 text-sm">
                Información clara sobre cómo manejamos sus datos personales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;