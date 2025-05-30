// contexts/RecaptchaContext.tsx
import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// Configuración de reCAPTCHA
const RECAPTCHA_SITE_KEY = "6LeivEgrAAAAAHTtRQxO5-9ArFBDSrK5iAkxwj0A";

// Declaración global para TypeScript
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Tipos para el contexto
interface RecaptchaContextType {
  isReady: boolean;
  executeRecaptcha: (action: string) => Promise<string | null>;
}

// Crear el contexto
const RecaptchaContext = createContext<RecaptchaContextType | undefined>(undefined);

// Props del provider
interface RecaptchaProviderProps {
  children: ReactNode;
}

// Provider del contexto
export const RecaptchaProvider: React.FC<RecaptchaProviderProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadRecaptchaScript();
  }, []);

  // Función para cargar el script de reCAPTCHA
  const loadRecaptchaScript = () => {
    // Verificar si ya existe el script
    if (document.getElementById('recaptcha-script')) {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsReady(true);
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      window.grecaptcha.ready(() => {
        setIsReady(true);
        hideRecaptchaBadge();
        console.log('reCAPTCHA v3 loaded globally');
      });
    };

    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
    };

    document.head.appendChild(script);
  };

  // Función para ocultar el badge de reCAPTCHA
  const hideRecaptchaBadge = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      .grecaptcha-badge {
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
  };

  // Función para ejecutar reCAPTCHA
  const executeRecaptcha = async (action: string): Promise<string | null> => {
    if (!isReady) {
      console.warn('reCAPTCHA no está listo aún');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
      console.log(`reCAPTCHA token generado para acción: ${action}`);
      return token;
    } catch (error) {
      console.error('Error ejecutando reCAPTCHA:', error);
      return null;
    }
  };

  const value: RecaptchaContextType = {
    isReady,
    executeRecaptcha,
  };

  return (
    <RecaptchaContext.Provider value={value}>
      {children}
    </RecaptchaContext.Provider>
  );
};

// Hook para usar el contexto
export const useRecaptcha = (): RecaptchaContextType => {
  const context = useContext(RecaptchaContext);
  if (context === undefined) {
    throw new Error('useRecaptcha debe ser usado dentro de un RecaptchaProvider');
  }
  return context;
};

export default RecaptchaContext;