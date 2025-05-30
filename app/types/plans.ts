// app/types/plans.ts

import type { Service } from "~/types/services";


export interface PlanFeature {
  name: string;        // Nombre de la característica (ej. "Dominios")
  value: string | number | boolean; // Valor (ej. "1", "5 GB", "Ilimitada")
  highlighted?: boolean;  // Si la característica debe resaltarse
  isPremium?: boolean;    // Indica si es una característica premium
}

export interface Plan {
  id: string;           // Identificador único del plan
  name: string;         // Nombre del plan (Inicial, Estándar, Turbo)
  domainFree?:boolean
  price: number;        // Precio mensual en COP
  billingCycle: string; // "Mensual" por defecto
  annualPrice?: number;  // Precio anual en COP
  features: PlanFeature[]; // Características del plan
  highlight?: boolean;  // Si el plan debe destacarse como "más popular"
  tag?: string;         // Etiqueta adicional (ej. "más popular")
  serviceId: string;    // Referencia al servicio al que pertenece el plan
  url: string;       // URL del plan
}

// Extendemos la interfaz Service para incluir opcionalmente los planes relacionados
export interface ServiceWithPlans extends Service {
  plans?: Plan[];  // Planes disponibles para este servicio
}

// Tipo de utilidad para obtener todos los servicios con sus planes
export type ServicesWithPlans = ServiceWithPlans[];