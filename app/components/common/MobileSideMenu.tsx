// app/components/common/MobileSideMenu.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Home,
  Users,
  MessageCircle,
  Code,
  ExternalLink,
  Shield,
  Server,
  Database,
  Layout,
  Mail,
  Zap,
  Monitor,
  Globe,
  Cloud,
  HardDrive,
  ServerCogIcon,
  GlobeLockIcon,
  BookOpen,
  Video,
  Phone,
  Clock,
  CheckCircle,
  Headphones
} from "lucide-react";

// Tipos para servicios (mismos que el MegaMenu)
interface MegaMenuCategory {
  id: string;
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

interface MegaMenuItem {
  id: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  url: string;
  category: string;
  featured: boolean;
  external?: boolean;
}

// Tipos para soporte
interface SupportCategory {
  id: string;
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

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

// Datos de servicios
const categories: MegaMenuCategory[] = [
  {
    id: "hosting",
    name: "Hosting Web",
    description: "Soluciones de alojamiento para todo tipo de sitios",
    icon: Globe,
    color: "text-blue-500"
  },
  {
    id: "hosting-reseller",
    name: "Hosting Reseller", 
    description: "Revende hosting y gestiona tus clientes",
    icon: GlobeLockIcon,
    color: "text-yellow-500"
  },
  {
    id: "servidores",
    name: "Servidores",
    description: "Servidores virtuales con control total",
    icon: Server,
    color: "text-purple-500"
  },
  {
    id: "email",
    name: "Email Corporativo",
    description: "Correo profesional con tu dominio",
    icon: Mail,
    color: "text-red-500"
  },
  {
    id: "desarrollo",
    name: "Desarrollo Web",
    description: "Creación y optimización de sitios web",
    icon: Code,
    color: "text-green-500"
  }
];

const menuItems: MegaMenuItem[] = [
  {
    id: "cloud-wordpress",
    title: "Cloud WordPress",
    description: "Optimizado para WordPress",
    icon: Layout,
    color: "text-blue-600",
    url: "/servicios/cloud-wordpress",
    category: "hosting",
    featured: true
  },
  {
    id: "hosting-cpanel",
    title: "Hosting cPanel",
    description: "Panel de control popular",
    icon: HardDrive,
    color: "text-orange-500",
    url: "/servicios/hosting-cpanel",
    category: "hosting",
    featured: true
  },
  {
    id: "hosting-sd-cpanel",
    title: "Hosting SD cPanel",
    description: "cPanel sin dominio gratuito",
    icon: HardDrive,
    color: "text-orange-500",
    url: "/servicios/hosting-sd-cpanel",
    category: "hosting",
    featured: false
  },
  {
    id: "hosting-plesk",
    title: "Hosting Plesk",
    description: "Gestión con herramientas modernas",
    icon: Code,
    color: "text-indigo-500",
    url: "/servicios/hosting-plesk",
    category: "hosting",
    featured: true
  },
  {
    id: "hosting-sd-plesk",
    title: "Hosting SD Plesk",
    description: "Plesk sin dominio gratuito",
    icon: Code,
    color: "text-indigo-500",
    url: "/servicios/hosting-sd-plesk",
    category: "hosting",
    featured: false
  },
  {
    id: "hosting-empresarial",
    title: "Hosting Empresarial",
    description: "Alto rendimiento empresarial",
    icon: Monitor,
    color: "text-gray-700",
    url: "/servicios/hosting-empresarial",
    category: "hosting",
    featured: false
  },
  {
    id: "reseller-hosting",
    title: "Reseller cPanel",
    description: "Revendedor con cPanel/WHM",
    icon: Globe,
    color: "text-green-500",
    url: "/servicios/reseller-hosting",
    category: "hosting-reseller",
    featured: true
  },
  {
    id: "reseller-hosting-plesk",
    title: "Reseller Plesk",
    description: "Revendedor con Plesk",
    icon: Globe,
    color: "text-purple-500",
    url: "/servicios/reseller-hosting-plesk",
    category: "hosting-reseller",
    featured: false
  },
  {
    id: "vps",
    title: "VPS Hosting",
    description: "Recursos garantizados",
    icon: Database,
    color: "text-purple-500",
    url: "/servicios/vps-hosting",
    category: "servidores",
    featured: true
  },
  {
    id: "vps-n8n",
    title: "VPS con N8N",
    description: "Automatización de flujos",
    icon: Zap,
    color: "text-amber-500",
    url: "/servicios/vps-n8n",
    category: "servidores",
    featured: false
  },
  {
    id: "servidores-dedicados",
    title: "Servidores Dedicados",
    description: "Máxima potencia y control",
    icon: ServerCogIcon,
    color: "text-blue-500",
    url: "/servicios/servidores-dedicados",
    category: "servidores",
    featured: false
  },
  {
    id: "microsoft365",
    title: "Microsoft 365",
    description: "Correo + productividad",
    icon: Mail,
    color: "text-blue-600",
    url: "/servicios/microsoft365",
    category: "email",
    featured: true
  },
  {
    id: "google-workspace",
    title: "Google Workspace",
    description: "Gmail + apps Google",
    icon: Cloud,
    color: "text-red-500",
    url: "/servicios/google-workspace",
    category: "email",
    featured: false
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    description: "Soluciones personalizadas",
    icon: Code,
    color: "text-green-500",
    url: "/desarrollo-web",
    category: "desarrollo",
    featured: true
  }
];

// Datos de soporte
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
    featured: true,
    external: true
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
    external: true
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
    external: true,
    category: "contacto-directo",
    featured: false
  },
  {
    id: "llamada-soporte",
    title: "Soporte telefónico",
    description: "Habla directamente con un especialista",
    icon: Phone,
    color: "text-blue-500",
    url: "tel:+573506027870",
    external: true,
    category: "contacto-directo",
    featured: false
  },
  {
    id: "email-soporte",
    title: "Email de soporte",
    description: "Envía tu consulta por correo electrónico",
    icon: Mail,
    color: "text-red-500",
    url: "mailto:info@moshipp.com",
    external: true,
    category: "contacto-directo",
    featured: false
  },
  // Estado del Servicio
  {
    id: "estado-servidores",
    title: "Estado de servidores",
    description: "Monitoreo en tiempo real de nuestros servidores",
    icon: Monitor,
    color: "text-green-600",
    url: "https://clientes.moshipp.com/serverstatus.php",
    category: "estado-servicio",
    featured: true,
    external: true
  },
  {
    id: "mantenimientos",
    title: "Mantenimientos programados",
    description: "Información sobre próximos mantenimientos",
    icon: Clock,
    color: "text-yellow-500",
    url: "https://clientes.moshipp.com/announcements",
    category: "estado-servicio",
    featured: false,
    external: true
  }
];

interface MobileSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

const MobileSideMenu: React.FC<MobileSideMenuProps> = ({ isOpen, onClose, currentPath }) => {
  const [currentView, setCurrentView] = useState<'main' | 'services' | 'category' | 'support' | 'support-category'>('main');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSupportCategory, setSelectedSupportCategory] = useState<string | null>(null);

  // Reset al cerrar el menú
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCurrentView('main');
        setSelectedCategory(null);
        setSelectedSupportCategory(null);
      }, 300);
    }
  }, [isOpen]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getMobileLinkClasses = (path: string) => {
    const isActive = currentPath === path;
    return `flex items-center w-full px-4 py-3 text-left transition-colors rounded-lg ${
      isActive
        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('category');
  };

  const handleSupportCategorySelect = (categoryId: string) => {
    setSelectedSupportCategory(categoryId);
    setCurrentView('support-category');
  };

  const goBackToServices = () => {
    setCurrentView('services');
    setSelectedCategory(null);
  };

  const goBackToSupport = () => {
    setCurrentView('support');
    setSelectedSupportCategory(null);
  };

  const goBackToMain = () => {
    setCurrentView('main');
    setSelectedCategory(null);
    setSelectedSupportCategory(null);
  };

  const filteredItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : [];

  const filteredSupportItems = selectedSupportCategory 
    ? supportItems.filter(item => item.category === selectedSupportCategory)
    : [];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const selectedSupportCategoryData = supportCategories.find(cat => cat.id === selectedSupportCategory);

  // Función para obtener el título del header
  const getHeaderTitle = () => {
    switch (currentView) {
      case 'main': return 'Menú';
      case 'services': return 'Servicios';
      case 'category': return selectedCategoryData?.name || 'Servicios';
      case 'support': return 'Soporte';
      case 'support-category': return selectedSupportCategoryData?.name || 'Soporte';
      default: return 'Menú';
    }
  };

  // Función para manejar navegación hacia atrás
  const handleBackNavigation = () => {
    switch (currentView) {
      case 'category':
        goBackToServices();
        break;
      case 'support-category':
        goBackToSupport();
        break;
      case 'services':
      case 'support':
        goBackToMain();
        break;
      default:
        goBackToMain();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Menú lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              {currentView !== 'main' && (
                <button
                  onClick={handleBackNavigation}
                  className="p-1 mr-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {getHeaderTitle()}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Contenido del menú */}
          <div className="flex-1 overflow-y-auto">
            {/* Vista principal */}
            {currentView === 'main' && (
              <div className="p-4 space-y-2">
                <Link to="/" className={getMobileLinkClasses("/")} onClick={onClose}>
                  <Home className="h-5 w-5 mr-3" />
                  <span>Inicio</span>
                </Link>

                <button
                  onClick={() => setCurrentView('services')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <Server className="h-5 w-5 mr-3" />
                    <span>Servicios</span>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </button>

                <button
                  onClick={() => setCurrentView('support')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <Headphones className="h-5 w-5 mr-3" />
                    <span>Soporte</span>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </button>

                <Link to="/desarrollo-web" className={getMobileLinkClasses("/desarrollo-web")} onClick={onClose}>
                  <Code className="h-5 w-5 mr-3" />
                  <span>Desarrollo Web</span>
                </Link>

                <Link to="/nosotros" className={getMobileLinkClasses("/nosotros")} onClick={onClose}>
                  <Users className="h-5 w-5 mr-3" />
                  <span>Nosotros</span>
                </Link>

                <Link to="/contacto" className={getMobileLinkClasses("/contacto")} onClick={onClose}>
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <span>Contacto</span>
                </Link>
              </div>
            )}

            {/* Vista de categorías de servicios */}
            {currentView === 'services' && (
              <div className="p-4 space-y-3">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 px-4">
                    Explora nuestras categorías de servicios
                  </p>
                </div>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="flex items-center justify-between w-full p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <div className="flex items-start">
                      <category.icon className={`h-6 w-6 mr-3 mt-0.5 ${category.color}`} />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                ))}
              </div>
            )}

            {/* Vista de categorías de soporte */}
            {currentView === 'support' && (
              <div className="p-4 space-y-3">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 px-4">
                    ¿En qué podemos ayudarte hoy?
                  </p>
                </div>
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleSupportCategorySelect(category.id)}
                    className="flex items-center justify-between w-full p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <div className="flex items-start">
                      <category.icon className={`h-6 w-6 mr-3 mt-0.5 ${category.color}`} />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                ))}
              </div>
            )}

            {/* Vista de servicios por categoría */}
            {currentView === 'category' && selectedCategoryData && (
              <div className="p-4 space-y-3">
                <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <selectedCategoryData.icon className={`h-5 w-5 mr-2 ${selectedCategoryData.color}`} />
                    <h3 className="font-medium text-gray-900 dark:text-white">{selectedCategoryData.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedCategoryData.description}</p>
                </div>
                
                {filteredItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="flex items-start p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
                    onClick={onClose}
                  >
                    <div className="mt-1 mr-3">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{item.title}</h4>
                        {item.featured && (
                          <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 mt-1 ml-2 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            )}

            {/* Vista de soporte por categoría */}
            {currentView === 'support-category' && selectedSupportCategoryData && (
              <div className="p-4 space-y-3">
                <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <selectedSupportCategoryData.icon className={`h-5 w-5 mr-2 ${selectedSupportCategoryData.color}`} />
                    <h3 className="font-medium text-gray-900 dark:text-white">{selectedSupportCategoryData.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedSupportCategoryData.description}</p>
                </div>
                
                {filteredSupportItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-start p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
                    onClick={onClose}
                  >
                    <div className="mt-1 mr-3">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{item.title}</h4>
                        {item.featured && (
                          <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded">
                            Popular
                          </span>
                        )}
                        {item.external && (
                          <ExternalLink className="ml-2 h-3 w-3 text-gray-400" />
                        )}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 mt-1 ml-2 flex-shrink-0" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer del menú */}
          {currentView === 'main' && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <a
                href="https://clientes.moshipp.com/clientarea.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                onClick={onClose}
              >
                <Shield className="h-5 w-5 mr-2" />
                <span>Área de Clientes</span>
                <ExternalLink className="h-4 w-4 ml-2 opacity-70" />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileSideMenu;