// app/components/desarrolloWeb/BeneficiosDesarrollo.tsx
import React from "react";
import { 
  Zap, 
  Search, 
  ShieldCheck, 
  LayoutGrid, 
  SmartphoneNfc, 
  Globe, 
  DollarSign,
  LineChart
} from "lucide-react";

// Estilos para animaciones
const animationStyles = `
  .beneficio-card {
    transition: all 0.3s ease;
    border-radius: 1rem;
    overflow: hidden;
  }
  
  .beneficio-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .icon-container {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  .icon-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    z-index: -1;
  }
  
  .beneficio-card:hover .icon-container {
    transform: scale(1.1) rotate(5deg);
  }
  
  .beneficio-title {
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
  }
  
  .beneficio-title::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
  }
  
  .beneficio-card:hover .beneficio-title::after {
    width: 100%;
  }
  
  /* Gradient section background */
  .gradient-bg {
    background: linear-gradient(135deg, #144AE8, #3b82f6);
    position: relative;
    overflow: hidden;
  }
  
  .gradient-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
  }
`;

// Datos de beneficios
const beneficios = [
  {
    id: "velocidad",
    title: "Velocidad optimizada",
    description: "Sitios web rápidos que cargan en menos de 2 segundos, mejorando la experiencia de usuario y el SEO.",
    icon: Zap,
    color: "text-yellow-500 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20"
  },
  {
    id: "seo",
    title: "SEO desde el inicio",
    description: "Implementamos las mejores prácticas de SEO técnico para mejorar tu posicionamiento en buscadores.",
    icon: Search,
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    id: "seguridad",
    title: "Seguridad avanzada",
    description: "Protección contra vulnerabilidades y ataques comunes con actualizaciones constantes.",
    icon: ShieldCheck,
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    id: "escalabilidad",
    title: "Escalabilidad",
    description: "Soluciones que crecen con tu negocio, desde startups hasta grandes empresas.",
    icon: LineChart,
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    id: "responsive",
    title: "100% Responsive",
    description: "Diseño adaptable a todos los dispositivos, desde móviles hasta pantallas de escritorio.",
    icon: SmartphoneNfc,
    color: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/20"
  },
  {
    id: "personalizado",
    title: "Código personalizado",
    description: "Desarrollo a medida según tus necesidades específicas, no plantillas genéricas.",
    icon: LayoutGrid,
    color: "text-indigo-500 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20"
  },
  {
    id: "internacional",
    title: "Multilenguaje",
    description: "Sitios preparados para múltiples idiomas y expansión internacional.",
    icon: Globe,
    color: "text-teal-500 dark:text-teal-400",
    bgColor: "bg-teal-100 dark:bg-teal-900/20"
  },
  {
    id: "roi",
    title: "Mayor ROI",
    description: "Soluciones enfocadas en la conversión para maximizar el retorno de tu inversión.",
    icon: DollarSign,
    color: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20"
  }
];

const BeneficiosDesarrollo: React.FC = () => {
  return (
    <section className="py-20 gradient-bg text-white relative">
      <style>{animationStyles}</style>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl font-bold mb-6">
            Beneficios de nuestro desarrollo web
          </h2>
          <p className="text-xl text-white/90">
            Creamos soluciones digitales que no solo se ven bien, sino que generan resultados medibles para tu negocio.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio) => (
            <div 
              key={beneficio.id}
              className="beneficio-card bg-white/10 backdrop-blur-sm border border-white/20 p-6"
            >
              <div className={`icon-container ${beneficio.bgColor} p-3 rounded-xl inline-flex mb-5`}>
                <beneficio.icon className={`h-6 w-6 ${beneficio.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                <span className="beneficio-title">{beneficio.title}</span>
              </h3>
              
              <p className="text-white/80">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Complemento de estadísticas */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="text-4xl font-bold mb-2">+98%</div>
            <p className="text-white/80">Tasa de satisfacción de clientes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="text-4xl font-bold mb-2">+200</div>
            <p className="text-white/80">Proyectos entregados con éxito</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="text-4xl font-bold mb-2">+5 años</div>
            <p className="text-white/80">De experiencia en desarrollo web</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosDesarrollo;