// app/components/desarrolloWeb/ProcesoDesarrollo.tsx
import React from "react";
import { 
  MessagesSquare, 
  Lightbulb, 
  PenTool, 
  Code, 
  
  Rocket,
  Repeat,
  ArrowRight,
  Presentation
} from "lucide-react";

// Estilos para animaciones
const animationStyles = `
  .proceso-card {
    transition: all 0.3s ease;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
  }
  
  .proceso-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .proceso-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    z-index: 1;
    pointer-events: none;
  }
  
  .proceso-step-number {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 7rem;
    font-weight: 800;
    line-height: 1;
    opacity: 0.05;
    z-index: 0;
    color: currentColor;
    transform: translate(10px, -20px);
    transition: all 0.3s ease;
  }
  
  .proceso-card:hover .proceso-step-number {
    opacity: 0.1;
    transform: translate(5px, -15px);
  }
  
  .proceso-card:hover .proceso-icon-wrapper {
    transform: scale(1.1);
  }
  
  .proceso-icon-wrapper {
    transition: all 0.3s ease;
    z-index: 2;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .proceso-section-title {
    position: relative;
    display: inline-block;
  }
  
  .proceso-section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 3px;
    width: 50px;
    background: linear-gradient(to right, #155cfa, #155af5);
    border-radius: 10px;
  }
`;

// Datos de los pasos del proceso
const procesosDesarrollo = [
  {
    number: 1,
    title: "Consulta y Planificación",
    description: "Definimos juntos los objetivos, funcionalidades y alcance del proyecto para establecer una estrategia clara.",
    icon: MessagesSquare,
    color: "bg-blue-500 dark:bg-blue-600",
    textColor: "text-blue-700 dark:text-blue-300",
    borderColor: "border-blue-200 dark:border-blue-800",
    bgColor: "bg-blue-50 dark:bg-blue-900/30"
  },
  {
    number: 2,
    title: "Diseño UX/UI",
    description: "Creamos wireframes y diseños visuales centrados en la experiencia de usuario y alineados con tu marca.",
    icon: PenTool,
    color: "bg-purple-500 dark:bg-purple-600",
    textColor: "text-purple-700 dark:text-purple-300",
    borderColor: "border-purple-200 dark:border-purple-800",
    bgColor: "bg-purple-50 dark:bg-purple-900/30"
  },
  {
    number: 3,
    title: "Desarrollo",
    description: "Programamos tu sitio o aplicación utilizando React y las tecnologías más modernas para un resultado óptimo.",
    icon: Code,
    color: "bg-green-500 dark:bg-green-600",
    textColor: "text-green-700 dark:text-green-300",
    borderColor: "border-green-200 dark:border-green-800",
    bgColor: "bg-green-50 dark:bg-green-900/30"
  },
  {
    number: 4,
    title: "Pruebas",
    description: "Realizamos pruebas exhaustivas para garantizar el funcionamiento correcto en todos los dispositivos y navegadores.",
    icon: Presentation,
    color: "bg-yellow-500 dark:bg-yellow-600",
    textColor: "text-yellow-700 dark:text-yellow-300",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/30"
  },
  {
    number: 5,
    title: "Despliegue",
    description: "Lanzamos tu proyecto y lo configuramos con análisis, SEO y herramientas de marketing digital.",
    icon: Rocket,
    color: "bg-red-500 dark:bg-red-600",
    textColor: "text-red-700 dark:text-red-300",
    borderColor: "border-red-200 dark:border-red-800",
    bgColor: "bg-red-50 dark:bg-red-900/30"
  },
  {
    number: 6,
    title: "Mantenimiento",
    description: "Ofrecemos soporte continuo, actualizaciones de seguridad y mejoras para mantener tu proyecto siempre al día.",
    icon: Repeat,
    color: "bg-indigo-500 dark:bg-indigo-600",
    textColor: "text-indigo-700 dark:text-indigo-300",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/30"
  }
];

const ProcesoDesarrollo: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <style>{animationStyles}</style>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="proceso-section-title">Nuestro proceso de desarrollo</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Seguimos una metodología ágil y transparente para convertir tus ideas en soluciones digitales efectivas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procesosDesarrollo.map((paso) => (
            <div 
              key={paso.number}
              className={`proceso-card ${paso.bgColor} border ${paso.borderColor} p-6 relative overflow-hidden shadow-md`}
            >
              <span className={`proceso-step-number ${paso.textColor}`}>{paso.number}</span>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`proceso-icon-wrapper ${paso.color} p-3 rounded-xl self-start mb-6`}>
                  <paso.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${paso.textColor}`}>
                  {paso.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {paso.description}
                </p>
                
                {paso.number < procesosDesarrollo.length && (
                  <div className="hidden md:block absolute -bottom-3 -right-3 text-gray-300 dark:text-gray-700">
                    <ArrowRight className="h-12 w-12 transform rotate-45" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Complemento informativo */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              <Lightbulb className="h-5 w-5 text-green-500 dark:text-green-400 inline-block mr-2" />
              Metodología ágil
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Trabajamos con sprints y entregas incrementales, manteniéndote involucrado en cada etapa del desarrollo para asegurar que el resultado final cumpla exactamente con tus expectativas y necesidades de negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcesoDesarrollo;