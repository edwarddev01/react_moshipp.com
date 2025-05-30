// app/components/home/FaqSection.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Datos de preguntas frecuentes
const faqs = [
  {
    id: 1,
    question: '¿Qué es cPanel y cómo puedo usarlo?',
    answer: 'cPanel es un panel de control de hosting web intuitivo y fácil de usar. Permite a los usuarios administrar sus sitios web, correos electrónicos, bases de datos y mucho más a través de una interfaz web amigable. cPanel ofrece una amplia variedad de características, como la creación y gestión de correos electrónicos, la instalación de aplicaciones en un solo clic, el acceso a estadísticas detalladas del sitio web, la gestión de bases de datos y mucho más.',
  },
  {
    id: 2,
    question: '¿Cómo puedo hacer una copia de seguridad de mi sitio web?',
    answer: 'Con cPanel, puedes hacer una copia de seguridad de tu sitio web fácilmente. Solo tienes que ir a la sección "Copias de seguridad" y seguir los pasos para realizar una copia de seguridad completa de tu sitio web. Además, en Moshipp realizamos dos copias de seguridad semanales de forma automática para garantizar que tus datos estén siempre protegidos.',
  },
  {
    id: 3,
    question: '¿Puedo migrar mi sitio web desde otro proveedor de hosting?',
    answer: 'Sí, en Moshipp ofrecemos herramientas y asistencia para ayudarte a migrar tu sitio web desde otro proveedor de hosting. El proceso varía según el proveedor anterior, pero nuestro equipo de soporte puede guiarte a través del proceso para que la transición sea lo más suave posible.',
  },
  {
    id: 4,
    question: '¿Qué es el WordPress Toolkit?',
    answer: 'WordPress Toolkit es una herramienta que te permite administrar tu WordPress como un experto. Con esta herramienta, puedes gestionar actualizaciones, clonar sitios web y realizar copias de seguridad con un solo clic, todo desde un panel intuitivo. Es parte de nuestros planes de WordPress Hosting.',
  },
  {
    id: 5,
    question: '¿Ofrecen soporte técnico 24/7?',
    answer: 'Sí, nuestro equipo de soporte técnico está disponible las 24 horas del día, los 7 días de la semana para ayudar a resolver cualquier problema o responder a cualquier pregunta que puedas tener sobre nuestros servicios de hosting.',
  },
  {
    id: 6,
    question: '¿Qué medidas de seguridad implementan en sus servicios?',
    answer: 'En Moshipp, tomamos la seguridad en serio. Utilizamos medidas de seguridad avanzadas para proteger tu sitio web de ataques malintencionados y de malware. Esto incluye firewalls avanzados, protección DDoS, monitoreo constante de amenazas, certificados SSL gratuitos y más.',
  },
];

const FaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Alternar el estado de apertura de un elemento
  const toggleItem = (id: number) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((item) => item !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  // Verificar si un elemento está abierto
  const isItemOpen = (id: number) => openItems.includes(id);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Respuestas a las preguntas más comunes sobre nuestros servicios de hosting.
          </p>
        </div>

        <div className="max-w-7xl grid grid-cols-2 gap-5 mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-6">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <div className="ml-6 flex-shrink-0">
                  {isItemOpen(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  isItemOpen(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-base text-gray-600 dark:text-gray-300">
            ¿No encontraste la respuesta que buscabas? Contáctanos para obtener más información.
          </p>
          <div className="mt-6">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;