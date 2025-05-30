// app/components/common/SupportMenu.tsx
import React, { useState } from "react";
import { Link } from "react-router";
import {
  BookOpen,
  Video,
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  Clock,
  CheckCircle,
  Headphones,
  Users,
  Monitor
} from "lucide-react";

// Definición de tipos para categorías de soporte
interface SupportCategory {
  id: string;
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

// Definición de tipos para elementos del menú de soporte
interface SupportMenuItem {
  id: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  url: string;
  external?: boolean;
  featured?: boolean;
  category: string;
}

// Categorías de soporte (similar al MegaMenu)
const supportCategories: SupportCategory[] = [
  {
    id: "autoayuda",
    name: "Autoayuda",
    description: "Encuentra respuestas y aprende por ti mismo",
    icon: BookOpen,
    color: "text-blue-500"
  },
  {
    id: "contacto-directo",
    name: "Contacto directo",
    description: "Habla directamente con nuestro equipo",
    icon: Headphones,
    color: "text-green-500"
  },
  {
    id: "estado-servicio",
    name: "Estado del servicio",
    description: "Información sobre el funcionamiento de nuestros servicios",
    icon: Monitor,
    color: "text-purple-500"
  }
];

// Elementos del menú de soporte organizados por categoría
const supportItems: SupportMenuItem[] = [
  // Autoayuda
  {
    id: "base-conocimiento",
    title: "Base de Conocimiento",
    description: "Artículos y guías para resolver tus dudas más frecuentes",
    icon: BookOpen,
    color: "text-blue-600",
    url: "https://clientes.moshipp.com/knowledgebase",
    category: "autoayuda",
    featured: true
  },
  {
    id: "tutoriales",
    title: "Tutoriales en video",
    description: "Aprende paso a paso con nuestros videos explicativos",
    icon: Video,
    color: "text-red-500",
    url: "https://www.youtube.com/@moshipp",
    category: "autoayuda",
    featured: true,
    external:true
  },
  // Contacto Directo
  {
    id: "chat-soporte",
    title: "Chat en vivo",
    description: "Conversación directa con nuestro equipo de soporte",
    icon: MessageCircle,
    color: "text-green-500",
    url: "https://wa.me/573506027870",
    external: true,
    category: "contacto-directo",
    featured: true
  },
  {
    id: "ticket-soporte",
    title: "Crear ticket",
    description: "Envía una consulta detallada a nuestro equipo técnico",
    icon: Mail,
    color: "text-orange-500",
    url: "https://clientes.moshipp.com/submitticket.php",
    category: "contacto-directo"
  },
  {
    id: "llamada-soporte",
    title: "Soporte telefónico",
    description: "Habla directamente con un especialista",
    icon: Phone,
    color: "text-blue-500",
    url: "tel:+573506027870",
    external: true,
    category: "contacto-directo"
  },
  {
    id: "email-soporte",
    title: "Email de soporte",
    description: "Envía tu consulta por correo electrónico",
    icon: Mail,
    color: "text-red-500",
    url: "mailto:info@moshipp.com",
    external: true,
    category: "contacto-directo"
  },
  // Estado del Servicio
  {
    id: "estado-servidores",
    title: "Estado de servidores",
    description: "Monitoreo en tiempo real de nuestros servidores",
    icon: Monitor,
    color: "text-green-600",
    url: "https://uptime.moshipp.cloud/status/moshipp",
    category: "estado-servicio",
    featured: true
  },
  {
    id: "mantenimientos",
    title: "Mantenimientos programados",
    description: "Información sobre próximos mantenimientos",
    icon: Clock,
    color: "text-yellow-500",
    url: "https://clientes.moshipp.com/announcements",
    category: "estado-servicio"
  }
];

// Información de contacto
const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+57 350 602 7870",
    url: "https://wa.me/573506027870",
    color: "text-green-500"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@moshipp.com",
    url: "mailto:info@moshipp.com",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Vie: 9am - 6pm",
    color: "text-gray-500"
  }
];

interface SupportMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportMenu: React.FC<SupportMenuProps> = ({ isOpen, onClose }) => {
  // Estado para rastrear la categoría activa (igual que el MegaMenu)
  const [activeCategory, setActiveCategory] = useState<string>(supportCategories[0].id);
  
  // Filtrar los elementos del menú por categoría seleccionada
  const filteredItems = supportItems.filter(item => item.category === activeCategory);
  
  // Obtener categoría activa
  const currentCategory = supportCategories.find(cat => cat.id === activeCategory);

  // Si el menú no está abierto, no renderizar nada
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-[80px] right-0 left-0 w-full bg-white dark:bg-gray-900 shadow-xl rounded-b-xl ring-1 ring-gray-200 dark:ring-gray-700 z-50 transition ease-out duration-200"
      style={{ backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Panel izquierdo - Categorías de soporte */}
          <div className="col-span-4 border-r border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Centro de Soporte</h3>
            <ul className="space-y-1">
              {supportCategories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition ${
                      activeCategory === category.id
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    <category.icon className={`h-5 w-5 mr-3 ${category.color}`} />
                    <div>
                      <span className="font-medium block">{category.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{category.description}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
           
          </div>

          {/* Panel central - Elementos de soporte */}
          <div className="col-span-5">
            <div className="flex items-center mb-6">
              {currentCategory && (
                <>
                  <currentCategory.icon className={`h-6 w-6 mr-3 ${currentCategory.color}`} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentCategory.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{currentCategory.description}</p>
                  </div>
                </>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  target={item.external?"_blank":"_parent"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition group"
                  onClick={onClose}
                >
                  <div className={`mt-1 mr-4 p-2 rounded-lg`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                      {item.featured && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded">Popular</span>
                      )}
                      {item.external && (
                        <ExternalLink className="ml-2 h-3 w-3 text-gray-400" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Panel derecho - Información y estado */}
          <div className="col-span-3">
            {/* Información de contacto */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contacto directo</h4>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <contact.icon className={`h-5 w-5 mr-3 ${contact.color}`} />
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {contact.title}:
                      </span>
                      {contact.url ? (
                        <a
                          href={contact.url}
                          target={contact.url.startsWith('http') ? '_blank' : undefined}
                          rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="ml-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          onClick={onClose}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                          {contact.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estado del servicio */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-green-800 dark:text-green-400">
                  Todos los sistemas operativos
                </span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500 mb-3">
                Uptime: 99.9% este mes
              </p>
              <a
                href="https://uptime.moshipp.cloud/status/moshipp"
                className="text-xs text-green-700 dark:text-green-400 hover:underline"
                onClick={onClose}
              >
                Ver estado detallado →
              </a>
            </div>
            {/* Call to action */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">¿Necesitas ayuda inmediata?</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
                Nuestro equipo está disponible para resolver cualquier consulta técnica.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                onClick={onClose}
              >
                <span>Contactar soporte</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMenu;