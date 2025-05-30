// components/domains/DomainChecker.tsx
import React, { useState } from 'react';
import { Search, Globe, Loader, AlertCircle, Check, X, Star } from 'lucide-react';
import { domainService, type DomainCheckResponse } from '~/services/domainService';


const DomainChecker: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<DomainCheckResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!domain.trim()) {
      setError('Por favor ingresa un dominio');
      return;
    }

    setIsChecking(true);
    setError(null);
    setResult(null);

    try {
      // Verificar si el dominio incluye extensión
      const domainToCheck = domain.includes('.') ? domain : `${domain}.com`;
      const response = await domainService.checkSingleDomain(domainToCheck);
      setResult(response);
    } catch (err: any) {
      setError(err.message || 'Error al verificar el dominio');
    } finally {
      setIsChecking(false);
    }
  };

  const getStatusColor = (status: string, hasError?: boolean) => {
    if (hasError) return 'text-red-600 bg-red-50 border-red-200';
    switch (status) {
      case 'available':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'registered':
      case 'unavailable':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      default:
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    }
  };

  const getStatusIcon = (status: string, hasError?: boolean) => {
    if (hasError) return <AlertCircle className="h-5 w-5" />;
    switch (status) {
      case 'available':
        return <Check className="h-5 w-5" />;
      case 'registered':
      case 'unavailable':
        return <X className="h-5 w-5" />;
      default:
        return <Globe className="h-5 w-5" />;
    }
  };

  const getStatusText = (status: string, hasError?: boolean) => {
    if (hasError) return 'Error en verificación';
    switch (status) {
      case 'available':
        return 'Disponible para registrar';
      case 'registered':
        return 'Ya registrado';
      case 'unavailable':
        return 'No disponible';
      default:
        return `Estado: ${status}`;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Verificador de dominios en tiempo real
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Consulta WHOIS usando tu API de WHMCS
        </p>
      </div>

      {/* Formulario de búsqueda */}
      <form onSubmit={handleCheck} className="mb-6">
        <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden">
          <div className="flex-1 flex items-center px-4 py-3">
            <Globe className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Ej: midominio.com o solo midominio"
              className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
              disabled={isChecking}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 font-semibold transition-colors flex items-center"
          >
            {isChecking ? (
              <Loader className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Search className="h-5 w-5 mr-2" />
                Verificar
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg">
          <div className="flex items-center text-red-700 dark:text-red-300">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Resultado */}
      {result && (
        <div className={`p-6 rounded-xl border-2 ${getStatusColor(result.status, !!result.error)}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {getStatusIcon(result.status, !!result.error)}
              <div className="ml-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                  {result.domain}
                  {result.premium && (
                    <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Premium
                    </span>
                  )}
                </h3>
                <p className="text-sm opacity-75">
                  {getStatusText(result.status, !!result.error)}
                </p>
              </div>
            </div>
            
            {result.price && !result.error && (
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${result.price.toFixed(2)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  /año
                </div>
              </div>
            )}
          </div>

          {/* Información adicional */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Estado WHOIS:</span>
              <span className="font-mono">{result.status}</span>
            </div>
            {result.currency && (
              <div className="flex justify-between">
                <span className="font-medium">Moneda:</span>
                <span>{result.currency}</span>
              </div>
            )}
            {result.error && (
              <div className="mt-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <strong>Error detallado:</strong>
                <p className="mt-1">{result.error}</p>
              </div>
            )}
          </div>

          {/* Acciones */}
          {result.available && !result.error && (
            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Registrar ahora
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Agregar al carrito
              </button>
            </div>
          )}
        </div>
      )}

      {/* Información técnica */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
          Información técnica
        </h4>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <li>• Consulta en tiempo real via API WHMCS</li>
          <li>• Información WHOIS actualizada</li>
          <li>• Verificación de disponibilidad instantánea</li>
          <li>• Precios estimados según extensión</li>
        </ul>
      </div>
    </div>
  );
};

export default DomainChecker;