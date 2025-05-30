// app/components/serviceDetail/PlanDetailsModal.tsx
import React, { useEffect, useRef, useState } from "react";
import { X, Check, Shield, Zap, Server, Clock, ChevronDown, ChevronUp, Database, Globe, Mail, Star } from "lucide-react";
import type { Plan } from "~/types/plans";

// Animaciones y estilos para la modal
const modalStyles = `
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  }
  
  .modal-content {
    position: relative;
    width: 95%;
    max-width: 950px;
    max-height: 90vh;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    animation: slideUp 0.4s ease;
  }
  
  .modal-body {
    max-height: calc(90vh - 200px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
  }
  
  .modal-body::-webkit-scrollbar {
    width: 6px;
  }
  
  .modal-body::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .modal-body::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.5);
    border-radius: 20px;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out infinite 2s;
  }
  
  .animate-pulse-slow {
    animation: pulse 3s ease-in-out infinite;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientMove 15s ease infinite;
  }
  
  /* Estilos para las categorías */
  .category-container {
    transition: all 0.3s ease;
  }
  
  .category-header {
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .category-header:hover {
    background-color: rgba(59, 130, 246, 0.05);
  }
  
  .category-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
    opacity: 0;
    transform: translateY(-10px);
  }
  
  .category-content.expanded {
    max-height: 2000px;
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Estilos para características */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.75rem;
  }
  
  @media (min-width: 640px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .feature-item {
    transition: all 0.2s ease;
    border-radius: 8px;
    padding: 0.5rem;
  }
  
  .feature-item:hover {
    background-color: rgba(59, 130, 246, 0.05);
    transform: translateX(5px);
  }
  
  .premium-badge {
    background: linear-gradient(135deg, #FFD700, #FF8C00);
  }
  
  /* Categorías con diferentes colores */
  .category-storage .category-icon {
    color: #3B82F6; /* Azul */
  }
  
  .category-performance .category-icon {
    color: #10B981; /* Verde */
  }
  
  .category-domains .category-icon {
    color: #8B5CF6; /* Púrpura */
  }
  
  .category-email .category-icon {
    color: #EF4444; /* Rojo */
  }
  
  .category-security .category-icon {
    color: #F59E0B; /* Ámbar */
  }
  
  .category-other .category-icon {
    color: #6B7280; /* Gris */
  }
  
  /* Botón de acción */
  .action-button {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .action-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    z-index: -1;
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  .action-button:hover::after {
    transform: translateX(0);
  }
`;

// Iconos para las categorías
const categoryIcons: Record<string, React.ReactNode> = {
  storage: <Database className="category-icon h-5 w-5" />,
  performance: <Zap className="category-icon h-5 w-5" />,
  domains: <Globe className="category-icon h-5 w-5" />,
  email: <Mail className="category-icon h-5 w-5" />,
  security: <Shield className="category-icon h-5 w-5" />,
  other: <Star className="category-icon h-5 w-5" />
};

interface PlanDetailsModalProps {
  plan: Plan | null;
  isOpen: boolean;
  onClose: () => void;
}

// Función para agrupar características por categorías
const groupFeaturesByCategory = (features: Plan['features']) => {
  // Categorías comunes para características de hosting
  const categories = {
    storage: ["Espacio", "SSD", "NVMe", "Almacenamiento"],
    performance: ["RAM", "CPU", "Procesador", "Rendimiento", "LiteSpeed"],
    domains: ["Dominio", "Dominios"],
    email: ["Email", "Correo"],
    security: ["SSL", "Backups", "Seguridad", "Antivirus"],
    other: [] // Para características que no encajan en otras categorías
  };
  
  // Inicializar resultado
  const groupedFeatures: Record<string, typeof features> = {
    storage: [],
    performance: [],
    domains: [],
    email: [],
    security: [],
    other: []
  };
  
  // Agrupar características
  features.forEach(feature => {
    let assigned = false;
    
    // Intentar asignar a una categoría
    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(keyword => feature.name.includes(keyword))) {
        groupedFeatures[category].push(feature);
        assigned = true;
        break;
      }
    }
    
    // Si no se asignó a ninguna categoría, ponerlo en "other"
    if (!assigned) {
      groupedFeatures.other.push(feature);
    }
  });
  
  return groupedFeatures;
};

// Componente para cada categoría expandible
interface CategorySectionProps {
  category: string;
  title: string;
  features: Plan['features'];
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  title, 
  features, 
  icon, 
  defaultExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  if (features.length === 0) return null;
  
  return (
    <div className={`category-container mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden category-${category}`}>
      <div 
        className="category-header px-4 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800/60"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm">
            {icon || <div className="w-5 h-5" />}
          </div>
          <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {title} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({features.length})</span>
          </h5>
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </div>
      
      <div className={`category-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="p-4 bg-white dark:bg-gray-800">
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item flex items-start p-2">
                <div className={`p-1 rounded-full ${feature.highlighted ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'} mr-3 mt-0.5 flex-shrink-0`}>
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center flex-wrap">
                    <span className={`text-gray-700 dark:text-gray-300 ${feature.highlighted ? 'font-medium' : ''}`}>
                      {typeof feature.value === 'boolean' ? feature.name : feature.name}
                    </span>
                    {feature.isPremium && (
                      <span className="premium-badge ml-2 px-1.5 py-0.5 text-xs font-bold text-white rounded-full">
                        PRO
                      </span>
                    )}
                  </div>
                  {typeof feature.value !== 'boolean' && feature.value && (
                    <div className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
                      <strong>{feature.value}</strong>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlanDetailsModal: React.FC<PlanDetailsModalProps> = ({ plan, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Cerrar la modal si se hace clic fuera de ella
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Manejar tecla Escape para cerrar la modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen || !plan) return null;
  
  // Agrupar características por categoría
  const groupedFeatures = groupFeaturesByCategory(plan.features);
  
  // Preparar colores según el plan (destacado o no)
  const headerGradient = plan.highlight 
    ? "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 animate-gradient" 
    : "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 animate-gradient";
  
  // Contar el total de características
  const totalFeatures = plan.features.length;
  
  return (
    <div className="modal-backdrop">
      <style>{modalStyles}</style>
      <div ref={modalRef} className="modal-content max-w-3xl flex flex-col">
        {/* Encabezado con gradiente animado */}
        <div className={`${headerGradient} relative overflow-hidden p-8 flex-shrink-0`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)"></rect>
            </svg>
          </div>
          
          {/* Elementos de diseño */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/4 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-40 h-40 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/2"></div>
          
          {/* Botón de cerrar */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors rounded-full bg-black/20 hover:bg-black/30 p-1.5 z-20"
            aria-label="Cerrar modal"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              {/* Etiqueta destacada si aplica */}
              {plan.highlight && plan.tag && (
                <div className="mb-2 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-md inline-flex items-center">
                  <Star className="h-3 w-3 mr-1" fill="white" />
                  {plan.tag}
                </div>
              )}
              
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold text-white">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(plan.price)}</span>
                <span className="ml-1 text-blue-200">/{plan.billingCycle.toLowerCase()}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-white font-medium">{totalFeatures} características incluidas</span>
            </div>
          </div>
          
          {/* Características principales flotantes */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm border border-white/10">
              <Server className="h-4 w-4 mr-1.5" />
              <span>Alto rendimiento</span>
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm border border-white/10">
              <Shield className="h-4 w-4 mr-1.5" />
              <span>Seguridad avanzada</span>
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm border border-white/10">
              <Clock className="h-4 w-4 mr-1.5" />
              <span>Soporte 24/7</span>
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm border border-white/10">
              <Zap className="h-4 w-4 mr-1.5" />
              <span>Instalación instantánea</span>
            </div>
          </div>
        </div>
        
        {/* Contenido principal - categorías expandibles */}
        <div className="modal-body bg-gray-50 dark:bg-gray-800 p-6">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            Detalle de características
          </h4>
          
          {/* Categorías */}
          <div className="space-y-4">
            <CategorySection 
              category="storage"
              title="Almacenamiento"
              features={groupedFeatures.storage}
              icon={categoryIcons.storage}
              defaultExpanded={true}
            />
            
            <CategorySection 
              category="performance"
              title="Rendimiento"
              features={groupedFeatures.performance}
              icon={categoryIcons.performance}
              defaultExpanded={true}
            />
            
            <CategorySection 
              category="domains"
              title="Dominios"
              features={groupedFeatures.domains}
              icon={categoryIcons.domains}
            />
            
            <CategorySection 
              category="email"
              title="Correo Electrónico"
              features={groupedFeatures.email}
              icon={categoryIcons.email}
            />
            
            <CategorySection 
              category="security"
              title="Seguridad"
              features={groupedFeatures.security}
              icon={categoryIcons.security}
            />
            
            <CategorySection 
              category="other"
              title="Características adicionales"
              features={groupedFeatures.other}
              icon={categoryIcons.other}
            />
          </div>
        </div>
        
        {/* Footer con botón de acción */}
        <div className="bg-white dark:bg-gray-900 p-6 flex-shrink-0 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <Shield className="h-4 w-4 text-green-500 mr-2" />
            <span>Garantía de satisfacción de 30 días</span>
          </div>
          
          <a
            href={plan.url || `#${plan.id}`}
            className={`action-button w-full md:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg shadow-lg ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-800 hover:bg-blue-900 text-white'} transition-all`}
          >
            Seleccionar {plan.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsModal;