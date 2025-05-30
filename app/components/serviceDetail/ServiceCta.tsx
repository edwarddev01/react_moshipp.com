// app/components/serviceDetail/ServiceCta.tsx
import React from "react";
import { Link } from "react-router";
import { ArrowRight, Shield, MessageCircle, Phone } from "lucide-react";
import type { Plan } from "~/types/plans";

interface ServiceCtaProps {
  serviceName: string;
  serviceColor: string;
  plans: Plan[];
}

const ServiceCta: React.FC<ServiceCtaProps> = ({ serviceName, serviceColor, plans }) => {
  return (
    <section className={`relative bg-gradient-to-r from-blue-700 to-blue-800 py-16 px-4 overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0M30 60L60 30M0 30L30 0" stroke="white" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
          ¿Ninguno de nuestros planes se adapta a lo que necesitas?
        </h2>
        
        <p className="text-xl text-white/90 mb-2 max-w-3xl mx-auto">
          ¡No te preocupes! En Moshipp creamos soluciones personalizadas
        </p>
        
        <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
          Si buscas algo diferente o tienes necesidades específicas de {serviceName.toLowerCase()}, nuestro equipo técnico puede crear un plan a medida que se ajuste perfectamente a tu proyecto. Contáctanos y cuéntanos qué necesitas.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href={`https://wa.me/573506027870?text=Hola%2C%20estoy%20interesado%20en%20un%20plan%20personalizado%20de%20${serviceName}.%20¿Podrían%20ayudarme%3F`}            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat vía WhatsApp
          </a>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition"
          >
            Formulario de contacto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        {/* Beneficios de contactar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-3">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Asesoría gratuita</h3>
            <p className="text-white/80 text-sm">Te ayudamos a elegir la mejor solución sin costo</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-3">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Respuesta inmediata</h3>
            <p className="text-white/80 text-sm">Contacto directo con nuestros especialistas</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-3">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Planes a medida</h3>
            <p className="text-white/80 text-sm">Soluciones personalizadas según tus necesidades</p>
          </div>
        </div>
        
        {/* Sello de confianza */}
        <div className="flex justify-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm">
            <Shield className="h-4 w-4 mr-2" />
            <span>Más de 1000 clientes satisfechos nos respaldan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCta;