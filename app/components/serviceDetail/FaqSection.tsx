// app/components/serviceDetail/FaqSection.tsx
import React from "react";
import { Link } from "react-router";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  serviceName: string;
  faqs?: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ serviceName, faqs }) => {
  // Si no hay FAQs específicas, usar estas genéricas
  const defaultFaqs: FaqItem[] = [
    {
      question: `¿Qué incluye el servicio de ${serviceName}?`,
      answer: `Nuestro servicio de ${serviceName.toLowerCase()} incluye todas las características mencionadas anteriormente. Los detalles específicos varían según el plan seleccionado.`
    },
    {
      question: '¿Hay alguna garantía de devolución?',
      answer: 'Sí, ofrecemos una garantía de satisfacción de 30 días. Si no estás satisfecho con nuestro servicio dentro de los primeros 30 días, te devolvemos tu dinero.'
    },
    {
      question: '¿Cómo es el proceso de activación?',
      answer: 'Una vez realizado el pago, activamos tu servicio en los siguientes 15 minutos durante horario laboral. Recibirás un correo electrónico con toda la información de acceso.'
    },
    {
      question: '¿Puedo cambiar de plan en el futuro?',
      answer: 'Sí, puedes actualizar o cambiar tu plan en cualquier momento según tus necesidades, sin penalizaciones.'
    }
  ];

  const faqsToDisplay = faqs || defaultFaqs;

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Respuestas a las dudas más comunes sobre {serviceName.toLowerCase()}.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqsToDisplay.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            ¿Tienes otras preguntas? Estamos aquí para ayudarte.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
