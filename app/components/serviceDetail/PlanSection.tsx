// app/components/serviceDetail/PlanSection.tsx
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { Check, ChevronDown, X } from "lucide-react";
import type { Plan } from "~/types/plans";
import PlanDetailsModal from "./PlanDetailsModal";

// Estilos CSS para animaciones
const animationStyles = `
  .plan-card {
    transition: all 0.3s ease;
  }
  
  .plan-card:hover {
    transform: translateY(-5px);
  }
  
  .plan-card.highlighted {
    transform: scale(1.05);
    z-index: 10;
  }
  
  .plan-card.highlighted:hover {
    transform: scale(1.05) translateY(-5px);
  }
  
  .billing-selector {
    position: relative;
    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
    border-radius: 10px;
    padding: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: inline-flex;
  }
  
  .dark .billing-selector {
    background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
  }
  
  .billing-toggle {
    position: relative;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .billing-button {
    position: relative;
    padding: 8px 16px;
    border: none;
    background: transparent;
    color: #64748b;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 2;
    white-space: nowrap;
  }
  
  .dark .billing-button {
    color: #9ca3af;
  }
  
  .billing-button:hover {
    color: #475569;
  }
  
  .dark .billing-button:hover {
    color: #d1d5db;
  }

  .billing-button:focus {
    --tw-ring-shadow: none;
    box-shadow: none;
  }

  .billing-button.active {
    color: #3b82f6;
    font-weight: 600;
  }
  
  .billing-slider {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: white;
    border-radius: 6px;
    transition: transform 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  .dark .billing-slider {
    background: #4b5563;
  }
  
  .billing-slider.annual {
    transform: translateX(100%);
  }
  
  .savings-badge {
    background: #10b981;
    font-size: 10px;
    padding: 2px 6px;
    margin-left: 4px;
  }

  /* Estilos para el tooltip del dominio gratuito */
  .domain-tooltip {
    position: relative;
    cursor: help;
    border-bottom: 1px dotted currentColor;
    display: inline-block;
  }

  .domain-tooltip::before {
    content: attr(data-tooltip);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #1f2937;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 13px;
    line-height: 1.4;
    white-space: pre-line;
    width:100%;
    max-width: 420px;
    text-align: left;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 5px;
  }

  .dark .domain-tooltip::before {
    background: #374151;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .domain-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom-color: #1f2937;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1001;
    margin-top: 1px;
  }

  .dark .domain-tooltip::after {
    border-bottom-color: #374151;
  }

  .domain-tooltip:hover::before,
  .domain-tooltip:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(5px);
  }

  .domain-tooltip:hover::after {
    transform: translateX(-50%) translateY(1px);
  }
`;

// Función para cambiar COP a formato de precio
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
};

// Función para verificar si un valor de feature es válido
const isFeatureValid = (value: any) => {
  if (
    value === false ||
    value === 0 ||
    value === "" ||
    value === null ||
    value === undefined
  ) {
    return false;
  }
  return true;
};

interface PlanSectionProps {
  plans: Plan[];
  serviceName: string;
}

const PlanSection: React.FC<PlanSectionProps> = ({ plans, serviceName }) => {
  const [billingCycle, setBillingCycle] = useState<"Mensual" | "Anual">(
    "Mensual"
  );
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!plans.some((plan) => plan.billingCycle === "Mensual")) {
      setBillingCycle("Anual");
    }
  }, [plans]);

  // Obtener el precio según el ciclo de facturación
  const getPlanPrice = (plan: Plan) => {
    if (billingCycle === "Anual" && plan.annualPrice) {
      return plan.annualPrice;
    }
    return plan.price;
  };

  // Obtener el ahorro en porcentaje al elegir facturación anual
  const getAnnualSavingsPercentage = (plan: Plan) => {
    if (!plan.annualPrice) return 0;
    const monthlyTotal = plan.price * 12;
    const savings = monthlyTotal - plan.annualPrice;
    const percentage = (savings / monthlyTotal) * 100;
    return Math.round(percentage);
  };

  // Abrir modal con detalles del plan
  const openPlanDetails = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Opcional: limpiar el plan seleccionado después de un tiempo para la animación
    setTimeout(() => setSelectedPlan(null), 300);
  };

  // Si no hay planes, mostrar una sección alternativa
  if (plans.length === 0) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 ">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Información de {serviceName}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Actualmente este servicio no tiene planes predefinidos.
              Contáctanos para obtener una cotización personalizada.
            </p>

            <div className="mt-8">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <style>{animationStyles}</style>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Elige el plan{" "}
            <span className="text-blue-600 dark:text-blue-400">perfecto</span>{" "}
            para ti
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Todos nuestros planes incluyen soporte técnico dedicado, SSL
            gratuito, y panel de control intuitivo.
          </p>

          {/* Selector de ciclo de facturación */}
          {plans.some((plan) => plan.annualPrice) && (
            <div className="flex justify-center mt-8 mb-12">
              <div className="billing-selector">
                <div className="billing-toggle">
                  <div
                    className={`billing-slider ${
                      billingCycle === "Anual" ? "annual" : ""
                    }`}
                  ></div>
                  <button
                    className={`billing-button min-w-[115px] ${
                      billingCycle === "Mensual" ? "active" : ""
                    }`}
                    onClick={() => setBillingCycle("Mensual")}
                  >
                    Mensual
                  </button>
                  <button
                    className={`billing-button min-w-[115px] ${
                      billingCycle === "Anual" ? "active" : ""
                    } flex items-center`}
                    onClick={() => setBillingCycle("Anual")}
                  >
                    Anual
                    <span className="savings-badge text-white rounded-full font-medium">
                      Ahorra
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tarjetas de planes */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan-card transition-all duration-3000 relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border ${
                plan.highlight
                  ? "border-blue-500 dark:border-blue-400 highlighted"
                  : "border-gray-200 dark:border-gray-700"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Etiqueta de más popular */}
              {plan.highlight && plan.tag && (
                <div className="font-semibold text-sm text-center bg-blue-600 text-white  py-2 px-10 transform shadow-md z-10">
                  {plan.tag}
                </div>
              )}

              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  {/* Mostrar dominio gratuito si está disponible */}
                  {plan.domainFree && billingCycle === "Anual" && (
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                      <span 
                        className="domain-tooltip"
                        data-tooltip="✨ Oferta válida solo para el primer año&#10;Extensiones incluidas:&#10;• .com • .com.co • .net • .org • .co&#10;&#10;Renovación a precio regular."
                      >
                        Incluye dominio gratuito por el primer año.*
                      </span>
                    </p>
                  )}
                </div>

                {/* Precio */}
                <div className="mt-4 mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                      {formatPrice(getPlanPrice(plan))}
                    </span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">
                      /{billingCycle === "Mensual" ? "mes" : "año"}
                    </span>
                  </div>

                  {/* Mostrar ahorro anual en porcentaje */}
                  {billingCycle === "Anual" && plan.annualPrice && (
                    <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                      Ahorras {getAnnualSavingsPercentage(plan)}% al año
                    </div>
                  )}
                </div>

                {/* Características principales */}
                <ul className="mb-8 space-y-3">
                  {plan.features.slice(0, 6).map((feature, idx) => {
                    const isValid = isFeatureValid(feature.value);
                    return (
                      <li key={idx} className="flex items-start font-sans">
                        <div
                          className={`p-1 rounded-full mr-3 mt-0.5 flex-shrink-0 ${
                            !isValid
                              ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                              : feature.highlighted
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          }`}
                        >
                          {!isValid ? (
                            <X className="h-4 w-4" />
                          ) : (
                            <Check className="h-4 w-4" />
                          )}
                        </div>
                        <span
                          className={`text-gray-700 text-md dark:text-gray-300 ${
                            !isValid
                              ? "line-through text-gray-400 dark:text-gray-500"
                              : feature.highlighted
                              ? "font-medium"
                              : ""
                          }`}
                        >
                          {typeof feature.value === "boolean"
                            ? feature.name
                            : !isValid
                            ? feature.name
                            : `${feature.name}: ${feature.value}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Botón de acción */}
                <a
                  href={plan.url || `#${plan.id}`}
                  className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-all ${
                    plan.highlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                  }`}
                >
                  Seleccionar plan
                </a>
              </div>

              {/* Ver todas las características */}
              <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  className="flex cursor-pointer items-center justify-center w-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
                  onClick={() => openPlanDetails(plan)}
                >
                  Ver todas las características
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para detalles del plan */}
      <PlanDetailsModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default PlanSection;