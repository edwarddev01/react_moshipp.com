// services/domainService.ts
import axios from 'axios';
import React from 'react';

// Interfaces actualizadas para WHMCS
export interface WHMCSCurrency {
  id: number;
  code: string;
  prefix: string;
  suffix: string;
  format: number;
  rate: string;
}

export interface DomainAddons {
  dns: boolean;
  email: boolean;
  idprotect: boolean;
}

export interface GracePeriod {
  days: number;
  price: string;
}

export interface RedemptionPeriod {
  days: number;
  price: string;
}

export interface DomainPricing {
  categories: string[];
  addons: DomainAddons;
  group: string;
  register: Record<string, string>;
  transfer: Record<string, string>;
  renew: Record<string, string>;
  grace_period?: GracePeriod;
  grace_period_days?: number;
  grace_period_fee?: string;
  redemption_period?: RedemptionPeriod | null;
  redemption_period_days?: number;
  redemption_period_fee?: string;
}

export interface WHMCSPricingResponse {
  success: boolean;
  currency: WHMCSCurrency;
  pricing: Record<string, DomainPricing>;
}

export interface DomainCheckResponse {
  domain: string;
  available: boolean;
  register?: string,
  registry_expiry_date?: string,
  status: string;
  price?: number;
  formattedPrice?: string;
  currency?: string;
  premium?: boolean;
  error?: string;
  pricing?: DomainPricing;
  years?: number;
}

export interface DomainRegistrationData {
  domain: string;
  years: number;
  registrant: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organization?: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };
  nameservers?: string[];
  autoRenew?: boolean;
  privacy?: boolean;
}

export interface WHMCSResponse {
  success: boolean;
  status?: string;
  register?:string,
  registry_expiry_date?:string,
  domain?: string;
  error?: string;
  details?: any;
}

class DomainService {
  private baseURL = 'http://localhost:5000';
  private pricingCache: WHMCSPricingResponse | null = null;
  private cacheExpiry: number = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  private getAuthHeaders() {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  // Obtener precios de WHMCS con cache
  async getTLDPricing(forceRefresh = false): Promise<WHMCSPricingResponse> {
    const now = Date.now();
    
    // Usar cache si está disponible y no ha expirado
    if (!forceRefresh && this.pricingCache && now < this.cacheExpiry) {
      return this.pricingCache;
    }

    try {
      const response = await axios.get(`${this.baseURL}/api/tld-pricing`, this.getAuthHeaders());
      
      if (response.data.success) {
        this.pricingCache = response.data;
        this.cacheExpiry = now + this.CACHE_DURATION;
        return response.data;
      } else {
        throw new Error('Error al obtener precios de dominios');
      }
    } catch (error: any) {
      console.error('Error fetching TLD pricing:', error);
      throw new Error('Error al conectar con el servicio de precios');
    }
  }

  // Obtener precio formateado de un dominio específico
  async getDomainPrice(extension: string, years: number = 1, type: 'register' | 'transfer' | 'renew' = 'register'): Promise<{
    price: number;
    formattedPrice: string;
    currency: WHMCSCurrency;
  }> {
    try {
      const pricingData = await this.getTLDPricing();
      const tld = extension.replace('.', '');
      
      if (!pricingData.pricing[tld]) {
        throw new Error(`Extensión ${extension} no disponible`);
      }

      const domainPricing = pricingData.pricing[tld];
      const priceStr = domainPricing[type][years.toString()];
      
      if (!priceStr) {
        throw new Error(`Precio no disponible para ${years} año(s)`);
      }

      const price = parseFloat(priceStr);
      const currency = pricingData.currency;
      
      return {
        price,
        formattedPrice: this.formatPrice(price, currency),
        currency
      };
    } catch (error: any) {
      console.error('Error getting domain price:', error);
      throw error;
    }
  }

  // Formatear precio según la configuración de moneda
  private formatPrice(amount: number, currency: WHMCSCurrency): string {
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
  }

  // Verificar disponibilidad de dominio con precios reales
  async checkSingleDomain(domain: string, token: string, years: number = 1): Promise<DomainCheckResponse> {
    try {
      // Verificar disponibilidad
      const response = await axios.post(`${this.baseURL}/api/domain-check`, {
        domain,
        token
      }, this.getAuthHeaders());

      const data: WHMCSResponse = response.data;

      if (data.success) {
        const extension = domain.substring(domain.lastIndexOf('.'));
        
        try {
          // Obtener precio real de WHMCS
          const priceInfo = await this.getDomainPrice(extension, years);
          const pricingData = await this.getTLDPricing();
          const tld = extension.replace('.', '');
          
          return {
            domain: data.domain || domain,
            available: data.status === 'available',
            status: data.status || 'unknown',
            register:data.register,
            registry_expiry_date:data.registry_expiry_date,
            price: priceInfo.price,
            formattedPrice: priceInfo.formattedPrice,
            currency: priceInfo.currency.code,
            premium: this.isPremiumDomain(domain),
            pricing: pricingData.pricing[tld],
            years
          };
        } catch (priceError) {
          // Si no se puede obtener el precio, devolver sin precio
          return {
            domain: data.domain || domain,
            available: data.status === 'available',
            status: data.status || 'unknown',
            premium: this.isPremiumDomain(domain),
            years,
            error: 'Precio no disponible'
          };
        }
      } else {
        throw new Error(data.error || 'Error al verificar dominio');
      }
    } catch (error: any) {
      console.error('Error checking domain:', error);
      
      return {
        domain,
        available: false,
        status: 'error',
        years,
        error: error.response?.data?.error || error.message || 'Error de conexión'
      };
    }
  }

  // Verificar múltiples dominios con precios
  async checkDomainAvailability(
    domainName: string, 
    extensions: string[] = ['.com', '.net', '.org'], 
    token: string,
    years: number = 1
  ): Promise<DomainCheckResponse[]> {
    try {
      const results: DomainCheckResponse[] = [];
      
      for (const extension of extensions) {
        const fullDomain = `${domainName}${extension}`;
        
        try {
          const result = await this.checkSingleDomain(fullDomain, token, years);
          results.push(result);
        } catch (error) {
          results.push({
            domain: fullDomain,
            available: false,
            status: 'error',
            years,
            error: 'Error al verificar esta extensión'
          });
        }
        
        // Delay para no sobrecargar la API
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      return results;
    } catch (error: any) {
      console.error('Error checking domain availability:', error);
      throw new Error('Error al verificar disponibilidad de dominios');
    }
  }

  // Obtener todas las extensiones disponibles agrupadas por categoría
  async getAvailableExtensions(): Promise<{
    extensions: Record<string, DomainPricing>;
    categories: Record<string, string[]>;
    currency: WHMCSCurrency;
  }> {
    try {
      const pricingData = await this.getTLDPricing();
      const categories: Record<string, string[]> = {};

      // Agrupar por categorías
      Object.entries(pricingData.pricing).forEach(([tld, pricing]) => {
        pricing.categories.forEach(category => {
          if (!categories[category]) {
            categories[category] = [];
          }
          categories[category].push(`.${tld}`);
        });
      });

      return {
        extensions: pricingData.pricing,
        categories,
        currency: pricingData.currency
      };
    } catch (error: any) {
      console.error('Error getting available extensions:', error);
      throw new Error('Error al obtener extensiones disponibles');
    }
  }

  // Función auxiliar para detectar dominios premium (sin cambios)
  private isPremiumDomain(domain: string): boolean {
    const name = domain.substring(0, domain.lastIndexOf('.'));
    
    const premiumIndicators = [
      name.length <= 3,
      /^[0-9]+$/.test(name),
      /^(buy|get|best|top|new|hot|big|pro|vip|gold|king|super)/.test(name.toLowerCase()),
      name.toLowerCase().includes('bitcoin') || name.toLowerCase().includes('crypto'),
      name.toLowerCase().includes('ai') || name.toLowerCase().includes('tech')
    ];

    return premiumIndicators.some(indicator => indicator === true);
  }

  // Limpiar cache
  clearCache(): void {
    this.pricingCache = null;
    this.cacheExpiry = 0;
  }
}

export const domainService = new DomainService();

// Hook actualizado para usar precios reales
export const useDomainSearch = () => {
  const [searchResults, setSearchResults] = React.useState<DomainCheckResponse[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [cart, setCart] = React.useState<DomainCheckResponse[]>([]);
  const [availableExtensions, setAvailableExtensions] = React.useState<{
    extensions: Record<string, DomainPricing>;
    categories: Record<string, string[]>;
    currency: WHMCSCurrency;
  } | null>(null);

  // Cargar extensiones disponibles al inicializar
  React.useEffect(() => {
    const loadExtensions = async () => {
      try {
        const extensions = await domainService.getAvailableExtensions();
        setAvailableExtensions(extensions);
      } catch (error) {
        console.error('Error loading extensions:', error);
      }
    };

    loadExtensions();
  }, []);

  const searchDomains = React.useCallback(async (
    domainName: string, 
    extensions?: string[], 
    token?: string,
    years: number = 1
  ) => {
    if (!token) {
      setError('Token de verificación requerido');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const results = await domainService.checkDomainAvailability(domainName, extensions, token, years);
      setSearchResults(results);
      
      const hasErrors = results.some(result => result.error);
      if (hasErrors) {
        const errorResults = results.filter(result => result.error);
        console.warn('Algunos dominios no pudieron ser verificados:', errorResults);
      }
    } catch (err: any) {
      setError(err.message);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addToCart = React.useCallback((domain: DomainCheckResponse) => {
    if (!domain.available) return;
    
    setCart(prev => {
      const exists = prev.find(item => item.domain === domain.domain);
      if (exists) return prev;
      return [...prev, domain];
    });
  }, []);

  const removeFromCart = React.useCallback((domainName: string) => {
    setCart(prev => prev.filter(item => item.domain !== domainName));
  }, []);

  const getTotalPrice = React.useCallback(() => {
    return cart.reduce((total, domain) => total + (domain.price || 0), 0);
  }, [cart]);

  const getFormattedTotalPrice = React.useCallback(() => {
    if (!availableExtensions) return '';
    
    const total = getTotalPrice();
    return domainService['formatPrice'](total, availableExtensions.currency);
  }, [cart, availableExtensions, getTotalPrice]);

  const clearResults = React.useCallback(() => {
    setSearchResults([]);
    setError(null);
  }, []);

  const clearCart = React.useCallback(() => {
    setCart([]);
  }, []);

  return {
    searchResults,
    isLoading,
    error,
    searchDomains,
    clearResults,
    addToCart,
    cart,
    removeFromCart,
    getTotalPrice,
    getFormattedTotalPrice,
    clearCart,
    availableExtensions
  };
};

export default domainService;