// app/components/desarrolloWeb/TecnologiasSection.tsx
import React from "react";
import { 
  Code, 
  LayoutGrid, 
  ShoppingBag, 
  Database, 
  Smartphone, 
  Settings,
  Cpu,
  Globe,
  PenTool,
  Cloud,
  Repeat,
  Server,
  Zap
} from "lucide-react";

// Estilos de animación
const animationStyles = `
  .tech-card {
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .tech-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .tech-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #3B82F6, #10B981);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  
  .tech-card:hover::after {
    transform: translateY(0);
  }
  
  .tech-icon {
    transition: all 0.3s ease;
  }
  
  .tech-card:hover .tech-icon {
    transform: scale(1.1);
  }
  
  .tech-title {
    position: relative;
    display: inline-block;
  }
  
  .tech-title::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }
  
  .tech-card:hover .tech-title::after {
    width: 100%;
  }
`;

// Datos de tecnologías
const technologies = [
  {
    id: "react",
    name: "React",
    description: "Componentes reutilizables e interfaces de usuario interactivas con la biblioteca más popular de JavaScript.",
    icon: Code,
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    borderColor: "border-blue-200 dark:border-blue-700",
    logo: "/tecnologias/react-logo.webp"
  },
  {
    id: "wordpress",
    name: "WordPress",
    description: "Sitios web a medida con el CMS más usado del mundo. Temas y plugins personalizados para tu negocio.",
    icon: LayoutGrid,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    borderColor: "border-blue-200 dark:border-blue-700",
    logo: "/tecnologias/wordpress-logo.png"
  },
  {
    id: "ecommerce",
    name: "eCommerce",
    description: "Tiendas online con WooCommerce o soluciones headless commerce modernas para vender en línea.",
    icon: ShoppingBag,
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    borderColor: "border-purple-200 dark:border-purple-700",
    logo: "/tecnologias/woocommerce-logo.webp"
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "Aplicaciones backend eficientes y escalables con JavaScript/TypeScript en el servidor.",
    icon: Server,
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    borderColor: "border-green-200 dark:border-green-700",
    logo: "/tecnologias/nodejs-logo.png"
  },
  {
    id: "mobile",
    name: "Desarrollo Móvil",
    description: "Aplicaciones móviles híbridas con React Native que funcionan tanto en iOS como en Android.",
    icon: Smartphone,
    color: "text-indigo-500 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    borderColor: "border-indigo-200 dark:border-indigo-700",
    logo: "/tecnologias/react-logo.webp"
  },
  {
    id: "api",
    name: "APIs RESTful",
    description: "Desarrollo de APIs modernas para conectar tu aplicación con otros servicios y sistemas.",
    icon: Settings,
    color: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    borderColor: "border-red-200 dark:border-red-700",
    logo: "/tecnologias/api-icon.png"
  },
  {
    id: "performance",
    name: "Optimización de Rendimiento",
    description: "Mejora la velocidad de carga y la experiencia de usuario de tu sitio web existente.",
    icon: Zap,
    color: "text-yellow-500 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    borderColor: "border-yellow-200 dark:border-yellow-700",
    logo: "/tecnologias/performance-icon.png"
  },
  {
    id: "ux",
    name: "Diseño UX/UI",
    description: "Interfaces de usuario modernas, intuitivas y atractivas que conectan con tus usuarios.",
    icon: PenTool,
    color: "text-pink-500 dark:text-pink-400",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    borderColor: "border-pink-200 dark:border-pink-700",
    logo: "/tecnologias/ux-icon.png"
  }
];

const TecnologiasSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <style>{animationStyles}</style>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestras tecnologías y servicios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Utilizamos las tecnologías más modernas para crear soluciones digitales que impulsan el crecimiento de tu negocio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div 
              key={tech.id}
              className={`tech-card bg-white dark:bg-gray-800 rounded-xl p-6 border ${tech.borderColor} shadow-lg`}
            >
              <div className="mb-6 flex justify-between items-start">
                <div className={`tech-icon ${tech.bgColor} p-3 rounded-lg`}>
                  <tech.icon className={`h-6 w-6 ${tech.color}`} />
                </div>
                
                {tech.logo && (
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="h-12 w-auto"
                  />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                <span className="tech-title">{tech.name}</span>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Badges de tecnologías adicionales */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Otras tecnologías que utilizamos
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              Next.js
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              TypeScript
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              Tailwind CSS
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              Redux
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              MySQL
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              MongoDB
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              Express
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              Firebase
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              GraphQL
            </span>
            <span className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
              Docker
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnologiasSection;