// app/pages/contact/components/ContactCardsSection.tsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCardsSection: React.FC = () => {
  const contactCards = [
    {
      id: 1,
      title: 'Llámanos',
      content: '+57 3506027870',
      icon: Phone,
      href: 'tel:+573506027870',
    },
    {
      id: 2,
      title: 'Dirección de Email',
      content: 'info@moshipp.com',
      icon: Mail,
      href: 'mailto:info@moshipp.com',
    },
    {
      id: 3,
      title: 'Dirección',
      content: 'Lorica - Cordoba, Colombia',
      icon: MapPin,
      href: 'https://maps.google.com/?q=Lorica,Cordoba,Colombia',
    },
  ];

  return (
    <section className="relative z-10 -mt-10 mb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <div 
              key={card.id} 
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 overflow-visible pt-12"
            >
              {/* Borde decorativo superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Icono - ahora está posicionado absolutamente respecto al contenedor padre */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                      <card.icon size={28} />
                    </div>
                  </div>
                  
                  {/* Título - ajustamos el espaciado para compensar la posición del icono */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  
                  {/* Contenido */}
                  <a 
                    href={card.href} 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {card.content}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCardsSection;