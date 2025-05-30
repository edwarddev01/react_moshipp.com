// app/components/domains/DomainFaqSection.tsx
import React, { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Globe,
  Shield,
  Clock,
  CreditCard,
  RefreshCw,
  Search
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
}

const DomainFaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "¿Qué incluye el registro de un dominio?",
      answer: "Cada registro de dominio incluye: Protección de privacidad WHOIS, panel de control fácil de usar, soporte técnico 24/7, y activación en menos de 15 minutos. Todo sin costos adicionales.",
      category: "general",
      icon: Globe
    },
    {
      id: "2", 
      question: "¿Puedo transferir mi dominio desde otro proveedor?",
      answer: "Sí, facilitamos la transferencia de dominios desde cualquier proveedor. El proceso es simple: proporcionas el código de autorización (EPP/Auth Code), iniciamos la transferencia y en 5-7 días tu dominio estará completamente migrado. La transferencia extiende la renovación por un año adicional.",
      category: "transfer",
      icon: RefreshCw
    },
    {
      id: "3",
      question: "¿Qué extensiones de dominio están disponibles?",
      answer: "Ofrecemos más de 150 extensiones de dominio incluyendo: populares (.com, .co, .net, .org), para negocios (.store, .company, .business), tecnología (.tech, .app, .dev, .ai), geográficas (.co, .us, .mx), y muchas más. Cada extensión tiene precios y características específicas.",
      category: "general",
      icon: Search
    },
    {
      id: "4",
      question: "¿Cuánto tiempo toma activar un dominio?",
      answer: "Los dominios nuevos se activan instantáneamente, generalmente en menos de 15 minutos. Las transferencias de dominio pueden tomar entre 5-7 días dependiendo del registrador actual. Una vez completado, recibirás confirmación por email con todos los detalles de acceso.",
      category: "general",
      icon: Clock
    },
    {
      id: "5",
      question: "¿Ofrecen renovación automática?",
      answer: "Sí, ofrecemos renovación automática opcional para que nunca pierdas tu dominio. Puedes activarla o desactivarla en cualquier momento desde tu panel de control. Te enviamos recordatorios antes del vencimiento para que tengas control total sobre tus dominios.",
      category: "billing",
      icon: CreditCard
    },
    {
      id: "6",
      question: "¿Qué es la protección de privacidad WHOIS?",
      answer: "La protección WHOIS oculta tu información personal (nombre, dirección, teléfono, email) del directorio público WHOIS, reemplazándola con información de nuestro servicio de privacidad. Esto te protege del spam y mantiene tu información personal segura. Está incluida gratuitamente con todos nuestros dominios.",
      category: "privacy",
      icon: Shield
    },
    {
      id: "7",
      question: "¿Puedo cambiar los nameservers de mi dominio?",
      answer: "Sí, tienes control total sobre los nameservers de tu dominio. Puedes cambiarlos en cualquier momento desde tu panel de control para apuntar a tu hosting preferido. También ofrecemos DNS premium incluido si prefieres usar nuestros servidores.",
      category: "technical",
      icon: Globe
    },
    {
      id: "8",
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), transferencias bancarias, PSE para Colombia, PayPal, y otros métodos de pago locales. Todos los pagos son procesados de forma segura con encriptación SSL.",
      category: "billing",
      icon: CreditCard
    },
    {
      id: "9",
      question: "¿Puedo registrar múltiples dominios a la vez?",
      answer: "Sí, nuestro sistema permite registrar múltiples dominios en una sola transacción. Esto es especialmente útil para proteger tu marca registrando diferentes extensiones (.com, .co, .net) del mismo nombre.",
      category: "general",
      icon: Globe
    },
    {
      id: "10",
      question: "¿Qué sucede si mi dominio expira?",
      answer: "Si tu dominio expira, entra en un período de gracia de 20 días donde aún puedes renovarlo sin costo adicional. Después de este período, entra en 'redemption' por 20 días más con una tarifa de recuperación. Enviamos múltiples recordatorios antes del vencimiento para evitar que esto suceda.",
      category: "billing",
      icon: Clock
    }
  ];

  const categories = [
    { id: "all", name: "Todas", icon: HelpCircle },
    { id: "general", name: "General", icon: Globe },
    { id: "transfer", name: "Transferencias", icon: RefreshCw },
    { id: "privacy", name: "Privacidad", icon: Shield },
    { id: "billing", name: "Facturación", icon: CreditCard },
    { id: "technical", name: "Técnico", icon: Search }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = selectedCategory === "all" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-6">
            <HelpCircle className="h-4 w-4 mr-2" />
            <span>Preguntas frecuentes</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Tienes dudas sobre dominios?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre registro, 
            transferencia y gestión de dominios. Si no encuentras lo que buscas, 
            nuestro equipo está aquí para ayudarte.
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Lista de FAQ */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-2 grid md:grid-cols-2 grid-cols-1 gap-4">
            {filteredFAQs.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-8 pb-6">
                    <div className="pl-14">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default DomainFaqSection;