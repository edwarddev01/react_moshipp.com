import React, { useState, useEffect } from "react";
import { FileText, Shield, Scale } from "lucide-react";

const TermsHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 to-indigo-800 dark:from-gray-800 dark:to-gray-900 py-16 px-4">
      {/* Background pattern */}
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
            <FileText className="h-4 w-4 mr-1" />
            <span>Términos de servicio</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Términos y condiciones de <span className="text-white dark:text-blue-400">Moshipp</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Conozca nuestras políticas y términos de uso para garantizar una experiencia 
            transparente y segura con nuestros servicios de hosting y dominios.
          </p>

          {/* Iconos informativos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 dark:text-blue-400 text-blue-100" />
              </div>
              <h3 className="text-white font-semibold mb-2">Seguridad y privacidad</h3>
              <p className="dark:text-gray-400 text-gray-300  text-sm">
                Protegemos sus datos y garantizamos la privacidad de su información
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <Scale className="h-6 w-6 dark:text-green-400 text-green-100" />
              </div>
              <h3 className="text-white font-semibold mb-2">Términos justos</h3>
              <p className="dark:text-gray-400 text-gray-300 text-sm">
                Condiciones transparentes y equitativas para todos nuestros usuarios
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 dark:text-purple-400 text-purple-100" />
              </div>
              <h3 className="text-white font-semibold mb-2">Políticas claras</h3>
              <p className="dark:text-gray-400 text-gray-300 text-sm">
                Documentación detallada y fácil de entender sobre nuestros servicios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsHero;