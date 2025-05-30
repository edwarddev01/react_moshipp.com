// app/components/domains/DomainHeroSection.tsx
import React, { useState } from "react";
import {
  Search,
  Globe,
  Sparkles,
  RefreshCw,
  X,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  Star,
  Calendar,
  Shield,
  Server,
  UploadCloudIcon,
  Upload,
  ArrowLeftRight,
} from "lucide-react";
import {
  domainService,
  type DomainCheckResponse,
} from "../../services/domainService";
import { useRecaptcha } from "~/context/RecaptchaContext";

// Importar el hook global de reCAPTCHA

// Estilos para animaciones (sin cambios)
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes pulse-glow {
    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes modalSlideIn {
    from { opacity: 0; transform: scale(0.95) translateY(-10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
  
  .gradient-animate {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
  
  .search-input:focus {
    transform: scale(1.02);
    transition: all 0.3s ease;
  }
  
  .modal-content {
    animation: modalSlideIn 0.3s ease-out;
  }
`;

interface DomainHeroSectionProps {
  onSearch?: (searchTerm: string) => void;
}

interface WhoisModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: DomainCheckResponse | null;
  isLoading: boolean;
  domain: string;
}

const WhoisModal: React.FC<WhoisModalProps> = ({
  isOpen,
  onClose,
  result,
  isLoading,
  domain,
}) => {
  if (!isOpen) return null;

  const getStatusInfo = () => {
    if (!result || result.error) {
      return {
        color: "red",
        bgColor: "bg-red-50 dark:bg-red-900/20",
        textColor: "text-red-600 dark:text-red-400",
        icon: AlertCircle,
        text: "Error en consulta",
      };
    }

    switch (result.status) {
      case "available":
        return {
          color: "green",
          bgColor: "bg-green-50 dark:bg-green-900/20",
          textColor: "text-green-600 dark:text-green-400",
          icon: Check,
          text: "Disponible",
        };
      case "registered":
      case "unavailable":
        return {
          color: "gray",
          bgColor: "bg-gray-50 dark:bg-gray-700",
          textColor: "text-gray-600 dark:text-gray-400",
          icon: X,
          text: "Registrado",
        };
      default:
        return {
          color: "yellow",
          bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
          textColor: "text-yellow-600 dark:text-yellow-400",
          icon: Info,
          text: "Desconocido",
        };
    }
  };

  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-500/50">
      <div className="modal-content bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center">
            <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Consulta Dominio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Domain being checked */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Dominio consultado:
            </h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <span className="text-xl font-mono text-blue-600 dark:text-blue-400">
                {domain}
              </span>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <RefreshCw className="h-12 w-12 text-blue-600 dark:text-blue-400 animate-spin mx-auto mb-4" />
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Consultando...
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Esto puede tomar unos segundos
              </p>
            </div>
          )}

          {/* Results */}
          {!isLoading && result && (
            <div className="space-y-6">
              {/* Status Card */}
              <div
                className={`p-6 rounded-xl border-2 ${statusInfo.bgColor} border-${statusInfo.color}-200 dark:border-${statusInfo.color}-800`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <StatusIcon
                      className={`h-8 w-8 ${statusInfo.textColor} mr-3`}
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {statusInfo.text}
                      </h4>
                      <p className={`text-sm ${statusInfo.textColor}`}>
                        Estado del dominio
                      </p>
                    </div>
                  </div>

                  {result.premium && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-sm rounded-full flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Premium
                    </span>
                  )}
                </div>

                {/* Price info if available */}
                {result.price && result.available && (
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Precio estimado:
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${result.price.toFixed(2)}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 ml-1">
                          /{result.currency || "año"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {!result.available && (
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm dark:text-gray-300">
                        Transfiere tu dominio con nosotros y disfruta de soporte 24/7. Si ya eres el propietario y tu dominio no está expirado, ¡da el paso ahora!
                      </span>
                      
                    </div>
                  </div>
                )}
              </div>

              {/* Technical Details */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Server className="h-5 w-5 mr-2" />
                  Detalles técnicos
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Estado:
                      </span>
                      <span
                        className={`font-semibold text-xs rounded-3xl px-1 py2 flex justify-center items-center ${
                          result.available
                            ? "bg-green-200 text-green-600"
                            : "text-red-600 bg-red-200"
                        }`}
                      >
                        {result.available ? "Disponible" : "No disponible"}
                      </span>
                    </div>
                    {result && result.register && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          Registrador:
                        </span>
                        <span className={`font-semibold`}>
                          {result.register}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Fuente:
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">
                        Whois Moshipp
                      </span>
                    </div>
                    {result && result.registry_expiry_date && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          Fecha de expiración:
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(result.registry_expiry_date)
                            .toUTCString()
                            .replace("00:00:00 GMT", "")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Error Details */}
              {result.error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Error en la consulta
                  </h4>
                  <p className="text-red-700 dark:text-red-300 mb-3">
                    {result.error}
                  </p>
                  <div className="text-sm text-red-600 dark:text-red-400">
                    <p>
                      <strong>Posibles causas:</strong>
                    </p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>El servidor WHOIS no responde</li>
                      <li>Formato de dominio inválido</li>
                      <li>Límite de consultas excedido</li>
                      <li>Error temporal del servicio</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4">
                {result.available && !result.error && (
                  <>
                    <button
                      onClick={() =>
                        window.open(
                          `https://clientes.moshipp.com/cart.php?a=add&domain=register&query=${domain}`,
                          "_parent"
                        )
                      }
                      className="flex-1 cursor-pointer bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <Check className="h-5 w-5 mr-2" />
                      Registrar dominio
                    </button>
                  </>
                )}
                {!result.available && !result.error && (
                  <>
                    <button
                      onClick={() =>
                        window.open(
                          `https://clientes.moshipp.com/cart.php?a=add&domain=transfer&query=${domain}`,
                          "_parent"
                        )
                      }
                      className="flex-1 cursor-pointer bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <ArrowLeftRight className="h-5 w-5 mr-2" />
                      Transferir dominio
                    </button>
                  </>
                )}

                <button
                  onClick={() =>
                    window.open(`https://whois.net/whois/${domain}`, "_blank")
                  }
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Ver WHOIS completo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DomainHeroSection: React.FC<DomainHeroSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [whoisResult, setWhoisResult] = useState<DomainCheckResponse | null>(
    null
  );
  const [queriedDomain, setQueriedDomain] = useState("");

  // Usar el hook global de reCAPTCHA
  const { isReady, executeRecaptcha } = useRecaptcha();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() && isReady) {
      setIsSearching(true);

      // Preparar el dominio para la consulta
      const domainToCheck = searchTerm.includes(".")
        ? searchTerm.trim()
        : `${searchTerm.trim()}.com`;
      setQueriedDomain(domainToCheck);
      setShowModal(true);
      setWhoisResult(null);

      try {
        // Obtener token de reCAPTCHA antes de la consulta
        const token = await executeRecaptcha("domain_check");

        if (!token) {
          throw new Error("Error de verificación de seguridad");
        }

        // Hacer la consulta WHOIS usando tu API con el token
        const result = await domainService.checkSingleDomain(
          domainToCheck,
          token
        );
        console.log(result);

        setWhoisResult(result);
      } catch (error: any) {
        setWhoisResult({
          domain: domainToCheck,
          available: false,
          status: "error",
          error: error.message || "Error al consultar Dominio",
        });
      } finally {
        setIsSearching(false);
      }

      // También ejecutar el callback original si existe
      onSearch?.(searchTerm.trim().toLowerCase());
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setWhoisResult(null);
    setQueriedDomain("");
  };

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <style>{animationStyles}</style>

        {/* Patrón decorativo de fondo */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0">
            <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-60 right-1/3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 mb-8">
              <Globe className="h-4 w-4 mr-2" />
              <span>Consulta dominio en tiempo real</span>
              <Sparkles className="h-4 w-4 ml-2" />
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              <span className="block">Encuentra tu</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent gradient-animate">
                dominio perfecto
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Consulta disponibilidad en tiempo real. Más de{" "}
              <span className="font-bold text-blue-600">500+ extensiones</span>{" "}
              disponibles con SSL gratuito, privacidad incluida y soporte 24/7.
            </p>

            {/* Buscador de dominios */}
            <div className="max-w-2xl mx-auto mb-16">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse-glow">
                  <div className="flex-1 flex items-center px-6 py-4">
                    <Globe className="h-6 w-6 text-gray-400 mr-3" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Busca tu dominio... ej: miempresa o miempresa.com"
                      className="search-input flex-1 text-lg bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
                      disabled={isSearching || !isReady}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearching || !searchTerm.trim() || !isReady}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSearching ? (
                      <RefreshCw className="h-5 w-5 animate-spin" />
                    ) : !isReady ? (
                      <>
                        <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                        Cargando...
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5 mr-2" />
                        Consultar
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Sugerencias rápidas */}
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Prueba:
                </span>
                {[
                  "mitienda.com",
                  "estudio.co",
                  "blog.net",
                  "portfolio.org",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchTerm(suggestion)}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    disabled={isSearching || !isReady}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {/* Información adicional */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  💡 Si no incluyes extensión, se verificará automáticamente
                  como .com
                </p>
                {!isReady && (
                  <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
                    🔐 Cargando sistema de seguridad...
                  </p>
                )}
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-float">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  500K+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Dominios registrados
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  99.9%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Tiempo de actividad
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Soporte técnico
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                  15min
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Activación rápida
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal WHOIS */}
      <WhoisModal
        isOpen={showModal}
        onClose={closeModal}
        result={whoisResult}
        isLoading={isSearching}
        domain={queriedDomain}
      />
    </>
  );
};

export default DomainHeroSection;
