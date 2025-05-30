// app/components/domains/DomainPricingSection.tsx
import React, { useState, useEffect } from "react";
import { 
  Check, 
  Star, 
  Sparkles, 
  Crown, 
  Zap,
  TrendingUp,
  AlertCircle,
  RefreshCw,
  Shield,
  Mail,
  Globe,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Search,
  X
} from "lucide-react";
import { domainService, type DomainPricing, type WHMCSCurrency } from "~/services/domainService";
import { Link } from "react-router";

interface ExtensionWithPricing {
  extension: string;
  pricing: DomainPricing;
  registerPrice: number;
  transferPrice: number;
  renewPrice: number;
  formattedRegisterPrice: string;
  formattedTransferPrice: string;
  formattedRenewPrice: string;
  popular?: boolean;
  new?: boolean;
  description: string;
  features: string[];
}

type SortField = 'extension' | 'register' | 'transfer' | 'renew';
type SortDirection = 'asc' | 'desc';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Anterior
      </button>

      <div className="flex items-center space-x-1">
        {getVisiblePages().map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400">
                <MoreHorizontal className="h-4 w-4" />
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Siguiente
        <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
};

const CustomSelect: React.FC<{
  value: string | number;
  onChange: (value: string) => void;
  options: { value: string | number; label: string }[];
  className?: string;
}> = ({ value, onChange, options, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full px-4 py-2 pr-8 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      >
        {options.map(option => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ChevronLeft className="h-4 w-4 text-gray-400 rotate-[-90deg]" />
      </div>
    </div>
  );
};

const SortButton: React.FC<{
  field: SortField;
  currentField: SortField;
  direction: SortDirection;
  onSort: (field: SortField) => void;
  children: React.ReactNode;
}> = ({ field, currentField, direction, onSort, children }) => {
  const isActive = currentField === field;
  
  return (
    <button
      onClick={() => onSort(field)}
      className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
    >
      <span>{children}</span>
      {isActive ? (
        direction === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
      ) : (
        <ArrowUpDown className="h-4 w-4 opacity-40" />
      )}
    </button>
  );
};

const DomainPricingSection: React.FC = () => {
  const [selectedYears, setSelectedYears] = useState(1);
  const [extensions, setExtensions] = useState<Record<string, DomainPricing>>({});
  const [categories, setCategories] = useState<Record<string, string[]>>({});
  const [currency, setCurrency] = useState<WHMCSCurrency | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Estados para paginación, ordenamiento y búsqueda
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [sortField, setSortField] = useState<SortField>('extension');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar datos de WHMCS
  useEffect(() => {
    const loadPricingData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await domainService.getAvailableExtensions();
        setExtensions(data.extensions);
        setCategories(data.categories);
        setCurrency(data.currency);
      } catch (err: any) {
        setError(err.message);
        console.error('Error loading pricing data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPricingData();
  }, []);

  // Reset página cuando cambia la búsqueda o filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYears, searchTerm]);

  // Formatear precio
  const formatPrice = (amount: number, currency: WHMCSCurrency): string => {
    const formattedAmount = new Intl.NumberFormat('es-CO', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);

    switch (currency.format) {
      case 1: // Prefix only
        return `${currency.prefix}${formattedAmount}`;
      case 2: // Suffix only
        return `${formattedAmount}${currency.suffix}`;
      case 3: // Prefix and suffix
        return `${currency.prefix}${formattedAmount}${currency.suffix}`;
      case 4: // Prefix with space and suffix
      default:
        return `${currency.prefix}${formattedAmount} ${currency.suffix}`;
    }
  };

  // Obtener descripciones personalizadas para extensiones
  const getExtensionDescription = (extension: string): string => {
    const descriptions: Record<string, string> = {
      '.com': 'El dominio más popular y confiable del mundo',
      '.co': 'Perfecto para empresas colombianas',
      '.net': 'Ideal para tecnología y redes',
      '.org': 'Para organizaciones y ONGs',
      '.store': 'Para tiendas online y e-commerce',
      '.company': 'Para empresas y corporaciones',
      '.business': 'Para cualquier tipo de negocio',
      '.shop': 'Para tiendas y comercio',
      '.tech': 'Para empresas de tecnología',
      '.app': 'Para aplicaciones y software',
      '.dev': 'Para desarrolladores',
      '.ai': 'Para inteligencia artificial',
      '.info': 'Para sitios informativos',
      '.biz': 'Para negocios y empresas',
      '.us': 'Dominio estadounidense',
      '.mx': 'Dominio mexicano'
    };

    return descriptions[extension] || `Dominio ${extension} disponible`;
  };

  // Obtener características de la extensión
  const getExtensionFeatures = (extension: string, pricing: DomainPricing): string[] => {
    const features = [];
    
    // Características basadas en addons
    if (pricing.addons.dns) features.push('DNS incluido');
    if (pricing.addons.email) features.push('Email incluido');
    if (pricing.addons.idprotect) features.push('Protección de identidad');
    
    return features;
  };

  // Preparar datos para mostrar (todas las extensiones con filtro de búsqueda)
  const getExtensionsForCategory = (): ExtensionWithPricing[] => {
    if (!currency) return [];
    
    // Obtener todas las extensiones de todas las categorías
    const allExtensions: string[] = [];
    Object.values(categories).forEach(categoryExtensions => {
      categoryExtensions.forEach(ext => {
        if (!allExtensions.includes(ext)) {
          allExtensions.push(ext);
        }
      });
    });

    // Si no hay extensiones, retornar array vacío
    if (allExtensions.length === 0) return [];

    return allExtensions.map(extension => {
      const tld = extension.replace('.', '');
      const pricing = extensions[tld];
      
      if (!pricing) return null;

      const registerPriceStr = pricing.register[selectedYears.toString()];
      const transferPriceStr = pricing.transfer[selectedYears.toString()];
      const renewPriceStr = pricing.renew[selectedYears.toString()];
      
      const registerPrice = parseFloat(registerPriceStr || '0');
      const transferPrice = parseFloat(transferPriceStr || '0');
      const renewPrice = parseFloat(renewPriceStr || '0');
      
      return {
        extension,
        pricing,
        registerPrice,
        transferPrice,
        renewPrice,
        formattedRegisterPrice: formatPrice(registerPrice, currency),
        formattedTransferPrice: formatPrice(transferPrice, currency),
        formattedRenewPrice: formatPrice(renewPrice, currency),
        popular: pricing.group === 'hot' || extension === '.com',
        new: pricing.categories.includes('New'),
        description: getExtensionDescription(extension),
        features: getExtensionFeatures(extension, pricing)
      };
    }).filter(Boolean).filter(domain => {
      // Filtrar por término de búsqueda
      if (!searchTerm.trim()) return true;
      
      const searchLower = searchTerm.toLowerCase();
      const extensionMatch = domain!.extension.toLowerCase().includes(searchLower);
      const descriptionMatch = domain!.description.toLowerCase().includes(searchLower);
      
      return extensionMatch || descriptionMatch;
    }) as ExtensionWithPricing[];
  };

  // Función de ordenamiento
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1); // Reset a la primera página al ordenar
  };

  // Aplicar ordenamiento
  const getSortedExtensions = () => {
    const extensions = getExtensionsForCategory();
    
    return extensions.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortField) {
        case 'extension':
          aValue = a.extension;
          bValue = b.extension;
          break;
        case 'register':
          aValue = a.registerPrice;
          bValue = b.registerPrice;
          break;
        case 'transfer':
          aValue = a.transferPrice;
          bValue = b.transferPrice;
          break;
        case 'renew':
          aValue = a.renewPrice;
          bValue = b.renewPrice;
          break;
        default:
          return 0;
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortDirection === 'asc' ? comparison : -comparison;
      } else {
        const comparison = (aValue as number) - (bValue as number);
        return sortDirection === 'asc' ? comparison : -comparison;
      }
    });
  };

  // Obtener datos paginados
  const getPaginatedExtensions = () => {
    const allExtensions = getSortedExtensions();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {
      extensions: allExtensions.slice(startIndex, endIndex),
      totalCount: allExtensions.length,
      totalPages: Math.ceil(allExtensions.length / itemsPerPage)
    };
  };



  const refreshPricing = async () => {
    domainService.clearCache();
    window.location.reload(); // Recargar para obtener datos frescos
  };

  // Función para limpiar búsqueda
  const clearSearch = () => {
    setSearchTerm('');
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RefreshCw className="h-12 w-12 mx-auto text-blue-600 dark:text-blue-400 animate-spin mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Cargando precios de dominios...
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Obteniendo información actualizada de nuestros servidores
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 mx-auto text-red-600 dark:text-red-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Error al cargar precios
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {error}
            </p>
            <button 
              onClick={refreshPricing}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Intentar nuevamente
            </button>
          </div>
        </div>
      </section>
    );
  }

  const { extensions: paginatedExtensions, totalCount, totalPages } = getPaginatedExtensions();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-6 border border-blue-200 dark:border-blue-800">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span>Precios actualizados en tiempo real</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comparador de precios de dominios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Compara precios de registro, transferencia y renovación en una sola vista. 
            {currency && ` Todos los precios están en ${currency.code}.`}
          </p>
        </div>

        {/* Controles */}
        <div className="mb-12 flex justify-between items-start space-y-6">
          {/* Buscador */}
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar extensión (ej: .com, .co, .tech)..."
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-xl leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
                </button>
              )}
            </div>
          </div>

          {/* Controles de años y elementos por página */}
          <div className="flex justify-end  items-center space-x-4 flex-wrap gap-y-4">
            <CustomSelect
              value={selectedYears}
              onChange={(value) => setSelectedYears(parseInt(value))}
              options={[1, 2, 3, 4, 5].map(year => ({
                value: year,
                label: `${year} año${year > 1 ? 's' : ''}`
              }))}
              className="w-32"
            />

            <CustomSelect
              value={itemsPerPage}
              onChange={(value) => setItemsPerPage(parseInt(value))}
              options={[
                { value: 10, label: '10 por página' },
                { value: 15, label: '15 por página' },
                { value: 25, label: '25 por página' },
                { value: 50, label: '50 por página' }
              ]}
              className="w-36"
            />

            {/* Información de resultados */}
          <div className="text-right block w-full px-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {searchTerm ? (
                <>
                  Mostrando {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, totalCount)} de {totalCount} dominios 
                  <span className="font-medium"> que coinciden con "{searchTerm}"</span>
                </>
              ) : (
                `Mostrando ${((currentPage - 1) * itemsPerPage) + 1} - ${Math.min(currentPage * itemsPerPage, totalCount)} de ${totalCount} dominios`
              )}
            </p>
            {searchTerm && totalCount === 0 && (
              <p className="text-orange-600 dark:text-orange-400 text-sm mt-2">
                No se encontraron dominios que coincidan con tu búsqueda
              </p>
            )}
          </div>
          </div>

          
        </div>

        {/* Tabla de dominios */}
        {paginatedExtensions.length > 0 ? (
          <>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                        <SortButton 
                          field="extension" 
                          currentField={sortField} 
                          direction={sortDirection} 
                          onSort={handleSort}
                        >
                          Extensión
                        </SortButton>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 hidden lg:table-cell">
                        Descripción
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                        <SortButton 
                          field="register" 
                          currentField={sortField} 
                          direction={sortDirection} 
                          onSort={handleSort}
                        >
                          Registro
                        </SortButton>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                        <SortButton 
                          field="transfer" 
                          currentField={sortField} 
                          direction={sortDirection} 
                          onSort={handleSort}
                        >
                          Transferencia
                        </SortButton>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                        <SortButton 
                          field="renew" 
                          currentField={sortField} 
                          direction={sortDirection} 
                          onSort={handleSort}
                        >
                          Renovación
                        </SortButton>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {paginatedExtensions.map((domain, index) => (
                      <tr 
                        key={domain.extension}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className="text-lg font-bold text-gray-900 dark:text-white">
                                {domain.extension}
                              </div>
                              <div className="flex items-center space-x-2 mt-1">
                                {domain.popular && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                                    <Star className="h-3 w-3 mr-1" />
                                    Popular
                                  </span>
                                )}
                                {domain.new && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300">
                                    <Sparkles className="h-3 w-3 mr-1" />
                                    Nuevo
                                  </span>
                                )}
                              </div>
                              {domain.features.length > 0 && (
                                <div className="flex items-center mt-2 lg:hidden">
                                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                                    {domain.pricing.addons.idprotect && <Shield className="h-3 w-3" />}
                                    {domain.pricing.addons.dns && <Globe className="h-3 w-3" />}
                                    {domain.pricing.addons.email && <Mail className="h-3 w-3" />}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 hidden lg:table-cell">
                          <div className="max-w-xs">
                            <p className="truncate">{domain.description}</p>
                            {domain.features.length > 0 && (
                              <div className="flex items-center space-x-2 mt-2">
                                {domain.pricing.addons.idprotect && (
                                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                    <Shield className="h-3 w-3 mr-1" />
                                    <span>Privacidad</span>
                                  </div>
                                )}
                                {domain.pricing.addons.dns && (
                                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                    <Globe className="h-3 w-3 mr-1" />
                                    <span>DNS</span>
                                  </div>
                                )}
                                {domain.pricing.addons.email && (
                                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                    <Mail className="h-3 w-3 mr-1" />
                                    <span>Email</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {domain.formattedRegisterPrice}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {selectedYears} año{selectedYears > 1 ? 's' : ''}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {domain.formattedTransferPrice}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {selectedYears} año{selectedYears > 1 ? 's' : ''}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {domain.formattedRenewPrice}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {selectedYears} año{selectedYears > 1 ? 's' : ''}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
                            <Link
                              to="https://clientes.moshipp.com/cart.php?a=add&domain=register"
                              className="w-full lg:w-auto px-3 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            >
                              Registrar
                            </Link>
                            <Link
                              to="https://clientes.moshipp.com/cart.php?a=add&domain=transfer"
                              className="w-full lg:w-auto px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors"
                            >
                              Transferir
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Componente de paginación */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {searchTerm ? 'No se encontraron resultados' : 'No hay extensiones disponibles'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {searchTerm ? (
                <>
                  No se encontraron dominios que coincidan con "{searchTerm}". 
                  <button 
                    onClick={clearSearch}
                    className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                  >
                    Limpiar búsqueda
                  </button>
                </>
              ) : (
                'No se encontraron extensiones disponibles.'
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainPricingSection;