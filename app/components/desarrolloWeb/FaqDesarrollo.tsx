// app/components/desarrolloWeb/FaqDesarrollo.tsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Estilos para animaciones
const animationStyles = `
  .faq-item {
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 0.75rem;
  }
  
  .faq-item:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .faq-question {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .faq-answer {
    max-height: 0;
    opacity: 0;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .faq-answer.open {
    max-height: 500px;
    opacity: 1;
    margin-top: 1rem;
  }
  
  .faq-icon {
    transition: all 0.3s ease;
  }
  
  .flip {
    transform: rotate(180deg);
  }
  
  .faq-section-title {
    position: relative;
    display: inline-block;
  }
  
  .faq-section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 3px;
    width: 60px;
    margin: 0 auto;
    background: linear-gradient(to right, #144AE8, #144AE8);
    border-radius: 10px;
  }
`;

// Datos de preguntas frecuentes
const faqs = [
  {
    id: "timing",
    question: "¿Cuánto tiempo toma desarrollar un sitio web o aplicación?",
    answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web corporativo básico puede estar listo en 2-4 semanas, mientras que una aplicación web compleja o una tienda online puede tomar entre 1-3 meses. Durante nuestra consulta inicial, proporcionaremos un cronograma detallado basado en tus requerimientos específicos."
  },
  {
    id: "costs",
    question: "¿Cuánto cuesta un proyecto de desarrollo web?",
    answer: "Los costos varían dependiendo de varios factores: complejidad, funcionalidades requeridas, diseño, integraciones con terceros, etc. Ofrecemos soluciones para sitios básicos hasta aplicaciones avanzadas o tiendas online complejas. Cada presupuesto se elabora de forma personalizada según tus necesidades específicas."
  },
  {
    id: "seo",
    question: "¿Los sitios incluyen optimización para SEO?",
    answer: "Sí, todos nuestros desarrollos incluyen optimización SEO básica: estructura semántica HTML5, metadatos optimizados, URLs amigables, velocidad de carga optimizada, compatibilidad móvil y configuración inicial de etiquetas. También ofrecemos servicios de SEO avanzado como complemento para mejorar tu posicionamiento en buscadores."
  },
  {
    id: "technology",
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer: "Utilizamos las tecnologías más modernas y eficientes según los requerimientos de cada proyecto. Para frontend: React, Next.js, TypeScript y Tailwind CSS. Para backend: Node.js, Express y bases de datos como MongoDB o MySQL. También trabajamos con WordPress para proyectos que requieren un CMS robusto. Cada solución se elige estratégicamente para ofrecer el mejor rendimiento y escalabilidad."
  },
  {
    id: "react-benefits",
    question: "¿Por qué utilizar React para mi proyecto?",
    answer: "React ofrece numerosas ventajas: mejor rendimiento gracias a su Virtual DOM, desarrollo más rápido mediante componentes reutilizables, gran escalabilidad para proyectos que crecen con el tiempo, excelente soporte para aplicaciones de una sola página (SPA), y una comunidad enorme de desarrolladores que garantiza soporte y evolución continua. Todo esto se traduce en una mejor experiencia de usuario, mayor velocidad y un código más mantenible."
  },
  {
    id: "maintenance",
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer: "Sí, ofrecemos varios planes de mantenimiento post-lanzamiento que incluyen actualizaciones de seguridad, monitoreo de rendimiento, copias de seguridad regulares, soporte técnico y pequeñas modificaciones. Esto garantiza que tu sitio o aplicación permanezca seguro, actualizado y funcionando óptimamente. También puedes contratar horas de desarrollo para implementar nuevas funcionalidades o realizar cambios mayores."
  },
  {
    id: "hosting",
    question: "¿Proveen servicios de hosting y dominio?",
    answer: "Sí, ofrecemos soluciones completas que incluyen hosting optimizado para el tipo de desarrollo realizado, gestión de dominios, certificados SSL, correos corporativos y respaldos automáticos. Nuestros servidores están optimizados especialmente para ofrecer el máximo rendimiento en aplicaciones React, WordPress o cualquier otra tecnología que utilicemos en tu proyecto."
  },
  {
    id: "mobile",
    question: "¿Pueden desarrollar aplicaciones móviles?",
    answer: "Sí, desarrollamos aplicaciones móviles híbridas utilizando React Native, lo que permite crear apps para iOS y Android con un solo código base, reduciendo costos y tiempo de desarrollo. También ofrecemos desarrollo de Progressive Web Apps (PWAs) que funcionan como aplicaciones nativas en dispositivos móviles pero se acceden a través del navegador."
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="faq-item bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-4">
      <div 
        className="faq-question p-5 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </h3>
        <div className={`faq-icon ${isOpen ? 'flip' : ''}`}>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </div>
      
      <div className={`faq-answer px-5 pb-5 ${isOpen ? 'open' : ''}`}>
        <p className="text-gray-600 dark:text-gray-300">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FaqDesarrollo: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <style>{animationStyles}</style>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="faq-section-title">Preguntas frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Resolvemos tus dudas sobre nuestros servicios de desarrollo web y aplicaciones
          </p>
        </div>
        
        <div className="max-w-6xl grid grid-cols-2 mx-auto gap-4">
          {faqs.map((faq) => (
            <FaqItem 
              key={faq.id} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        {/* Pregunta adicional con CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              ¿Tienes alguna otra pregunta?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Estamos aquí para resolver todas tus dudas. Contáctanos y responderemos a la brevedad.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqDesarrollo;