// app/components/common/MegaMenu.tsx
import React from "react";
import { Link } from "react-router";
import {
  Server,
  Database,
  Layout,
  Code,
  Mail,
  Zap,
  Monitor,
  Globe,
  Cloud,
  HardDrive,
  ArrowRight,
  ServerCogIcon,
  GlobeLockIcon
} from "lucide-react";

// Definición de tipos
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
}

// Datos del mega menú
const categories: MegaMenuCategory[] = [
  {
    id: "hosting",
    name: "Hosting Web",
    description: "Soluciones de alojamiento para todo tipo de sitios y aplicaciones web",
    icon: Globe,
    color: "text-blue-500"
  },
  {
    id: "hosting-reseller",
    name: "Hosting Reseller",
    
    description: "Revende hosting con cPanel o Plesk y gestiona tus propios clientes",
    icon: GlobeLockIcon,
    color: "text-yellow-500"
  },
  {
    id: "servidores",
    name: "Servidores",
    description: "Potentes servidores virtuales con control total y rendimiento garantizado",
    icon: Server,
    color: "text-purple-500"
  },
  {
    id: "email",
    name: "Email Corporativo",
    description: "Correo profesional con tu dominio para comunicación empresarial",
    icon: Mail,
    color: "text-red-500"
  },
  {
    id: "desarrollo",
    name: "Desarrollo Web",
    description: "Servicios de creación y optimización de sitios y aplicaciones web",
    icon: Code,
    color: "text-green-500"
  }
];

const menuItems: MegaMenuItem[] = [
  {
    id: "cloud-wordpress",
    title: "Cloud WordPress",
    description: "Optimizado específicamente para sitios WordPress",
    icon: Layout,
    color: "text-blue-600",
    url: "/servicios/cloud-wordpress",
    category: "hosting",
    featured: true
  },
  {
    id: "hosting-cpanel",
    title: "Hosting cPanel",
    description: "Control total de tu hosting con el panel más popular",
    icon: HardDrive,
    color: "text-orange-500",
    url: "/servicios/hosting-cpanel",
    category: "hosting",
    featured: true
  },
  {
    id: "hosting-sd-cpanel",
    title: "Hosting SD cPanel",
    description: "Control total de tu hosting con el panel más popular",
    icon: HardDrive,
    color: "text-orange-500",
    url: "/servicios/hosting-sd-cpanel",
    category: "hosting",
    featured: false
  },
  
  
  {
    id: "hosting-plesk",
    title: "Hosting Plesk",
    description: "Gestión intuitiva con herramientas de desarrollo",
    icon: Code,
    color: "text-indigo-500",
    url: "/servicios/hosting-plesk",
    category: "hosting",
    featured: true
  },
  {
    id: "hosting-sd-plesk",
    title: "Hosting SD Plesk",
    description: "Gestión intuitiva con herramientas de desarrollo (No incluye dominio gratuito)",
    icon: Code,
    color: "text-indigo-500",
    url: "/servicios/hosting-sd-plesk",
    category: "hosting",
    featured: false
  },
  {
    id: "hosting-empresarial",
    title: "Hosting Empresarial",
    description: "Soluciones de alto rendimiento para aplicaciones críticas",
    icon: Monitor,
    color: "text-gray-700",
    url: "/servicios/hosting-empresarial",
    category: "hosting",
    featured: false
  },
  {
    id: "reseller-hosting",
    title: "Reseller Hosting cPanel",
    description: "Revendedor de hosting con cPanel/WHM",
    icon: Globe,
    color: "text-green-500",
    url: "/servicios/reseller-hosting",
    category: "hosting-reseller",
    featured: true
  },
  {
    id: "reseller-hosting-plesk",
    title: "Reseller Hosting Plesk",
    description: "Revendedor de hosting con Plesk Obsidian",
    icon: Globe,
    color: "text-purple-500",
    url: "/servicios/reseller-hosting-plesk",
    category: "hosting-reseller",
    featured: false
  },
  {
    id: "vps",
    title: "VPS Hosting",
    description: "Servidores Virtuales con recursos garantizados",
    icon: Database,
    color: "text-purple-500",
    url: "/servicios/vps-hosting",
    category: "servidores",
    featured: true
  },
 
  {
    id: "vps-n8n",
    title: "VPS con N8N",
    description: "Optimizado para automatización de flujos de trabajo",
    icon: Zap,
    color: "text-amber-500",
    url: "/servicios/vps-n8n",
    category: "servidores",
    featured: false
  },
   {
    id: "servidores-dedicados",
    title: "Servidores Dedicados",
    description: "Máxima potencia y control total para tus aplicaciones",
    icon: ServerCogIcon,
    color: "text-blue-500",
    url: "/servicios/servidores-dedicados",
    category: "servidores",
    featured: false
  },
  {
    id: "microsoft365",
    title: "Microsoft 365",
    description: "Correo corporativo con herramientas de productividad",
    icon: Mail,
    color: "text-blue-600",
    url: "/servicios/microsoft365",
    category: "email",
    featured: true
  },
  {
    id: "google-workspace",
    title: "Google Workspace",
    description: "Gmail profesional con apps de Google integradas",
    icon: Cloud,
    color: "text-red-500",
    url: "/servicios/google-workspace",
    category: "email",
    featured: false
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    description: "Soluciones web personalizadas con tecnologías modernas",
    icon: Code,
    color: "text-green-500",
    url: "/desarrollo-web",
    category: "desarrollo",
    featured: true
  }
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  // Estado para rastrear la categoría activa
  const [activeCategory, setActiveCategory] = React.useState<string>(categories[0].id);
  
  // Filtrar los elementos del menú por categoría seleccionada
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  // Obtener categoría activa
  const currentCategory = categories.find(cat => cat.id === activeCategory);

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
          {/* Panel izquierdo - Categorías */}
          <div className="col-span-4 border-r border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Nuestros Servicios</h3>
            <ul className="space-y-1">
              {categories.map((category) => (
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
                    <span className="font-medium">{category.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/servicios"
                className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
                onClick={onClose}
              >
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Panel central - Lista de servicios */}
          <div className="col-span-8">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
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
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;