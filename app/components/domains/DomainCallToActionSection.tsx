// app/components/domains/DomainCallToActionSection.tsx
import React, { useState } from "react";
import { Link } from "react-router";
import { 
  Globe, 
  Clock,
  Shield,
  HelpCircle
} from "lucide-react";

const DomainCallToActionSection: React.FC = () => {
  const [email, setEmail] = useState("");

 

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 rounded-full bg-white"></div>
      </div>

      {/* Patrón de puntos */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
       {/* Sección de contacto */}
        <div className="rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ¿No encontraste tu respuesta?
            </h3>
            
            <p className="text-xl text-blue-100 mb-8">
              Nuestro equipo de expertos en dominios está disponible 24/7 para ayudarte 
              con cualquier pregunta específica que tengas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a target="_blank" href="https://wa.me/licenciadigital" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center">
                <HelpCircle className="h-5 w-5 mr-2" />
                Chat en vivo
              </a>
              <Link to="/contacto" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contactar soporte
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Respuesta en &lt; 30min</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <span>Soporte en español</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                <span>Expertos certificados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainCallToActionSection;