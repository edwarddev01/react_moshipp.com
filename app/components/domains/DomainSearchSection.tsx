// app/components/domains/DomainSearchSection.tsx
import React, { useState, useEffect } from "react";
import { 
  Check, 
  ShoppingCart, 
  X, 
  Plus,
  Star,
  AlertCircle
} from "lucide-react";

interface DomainSearchResult {
  domain: string;
  available: boolean;
  price: string;
  premium?: boolean;
}

interface DomainSearchSectionProps {
  searchTerm?: string;
}

const DomainSearchSection: React.FC<DomainSearchSectionProps> = ({ searchTerm }) => {
  const [searchResults, setSearchResults] = useState<DomainSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState<DomainSearchResult[]>([]);

  // Simulación de búsqueda de dominios
  const simulateSearch = async (term: string) => {
    if (!term) return;
    
    setIsLoading(true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const extensions = [".com", ".co", ".net", ".org", ".store", ".tech", ".app", ".dev"];
    const results: DomainSearchResult[] = extensions.map(ext => ({
      domain: `${term}${ext}`,
      available: Math.random() > 0.3, // 70% de probabilidad de estar disponible
      price: ext === ".com" ? "$14.99" : ext === ".co" ? "$24.99" : "$19.99",
      premium: Math.random() > 0.8 // 20% de probabilidad de ser premium
    }));
    
    setSearchResults(results);
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchTerm) {
      simulateSearch(searchTerm);
    }
  }, [searchTerm]);

  const addToCart = (domain: DomainSearchResult) => {
    setCart(prev => {
      const exists = prev.find(item => item.domain === domain.domain);
      if (exists) return prev;
      return [...prev, domain];
    });
  };

  const removeFromCart = (domainName: string) => {
    setCart(prev => prev.filter(item => item.domain !== domainName));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, domain) => {
      const price = parseFloat(domain.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  const clearCart = () => setCart([]);

  if (!searchTerm && searchResults.length === 0) {
    return null; // No mostrar la sección si no hay búsqueda
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de resultados */}
        {searchTerm && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Resultados para "<span className="text-blue-600">{searchTerm}</span>"
            </h2>
            {isLoading && (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600 dark:text-gray-300">Verificando disponibilidad...</span>
              </div>
            )}
          </div>
        )}

        {/* Resultados de búsqueda */}
        {searchResults.length > 0 && !isLoading && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid gap-4">
              {searchResults.map((result, index) => (
                <div
                  key={result.domain}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    result.available
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-4 ${
                        result.available ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                          {result.domain}
                          {result.premium && (
                            <span className="ml-2 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-xs rounded-full flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              Premium
                            </span>
                          )}
                        </h3>
                        <p className={`text-sm flex items-center ${
                          result.available ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          {result.available ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Disponible
                            </>
                          ) : (
                            <>
                              <X className="h-4 w-4 mr-1" />
                              No disponible
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          {result.price}
                        </span>
                        <p className="text-sm text-gray-500 dark:text-gray-400">/año</p>
                      </div>
                      {result.available ? (
                        <button
                          onClick={() => addToCart(result)}
                          disabled={cart.find(item => item.domain === result.domain) !== undefined}
                          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          {cart.find(item => item.domain === result.domain) ? 'Agregado' : 'Agregar'}
                        </button>
                      ) : (
                        <button className="bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 px-6 py-2 rounded-lg font-medium cursor-not-allowed flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          No disponible
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Carrito de dominios */}
        {cart.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <ShoppingCart className="h-6 w-6 mr-3 text-blue-600" />
                  Carrito de dominios ({cart.length})
                </h3>
                <button
                  onClick={clearCart}
                  className="text-gray-500 hover:text-red-500 transition-colors text-sm"
                >
                  Limpiar carrito
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {cart.map((domain) => (
                  <div key={domain.domain} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {domain.domain}
                        </span>
                        {domain.premium && (
                          <span className="ml-2 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">
                            Premium
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-900 dark:text-white text-lg">
                        {domain.price}
                      </span>
                      <button
                        onClick={() => removeFromCart(domain.domain)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-6 flex items-center justify-between">
                <div>
                  <span className="text-lg text-gray-600 dark:text-gray-300">Total:</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white ml-2">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/año</span>
                </div>
                <div className="flex gap-3">
                  <button className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-medium transition-colors hover:bg-gray-300 dark:hover:bg-gray-500">
                    Guardar para después
                  </button>
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Proceder al checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainSearchSection;