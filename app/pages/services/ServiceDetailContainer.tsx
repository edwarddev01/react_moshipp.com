// app/pages/services/ServiceDetailContainer.tsx
import React from "react";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";

import MainLayout from "~/layout/MainLayout";
import { services } from "~/data/services";
import { getServicePlans } from "~/data/plans";

// Componentes existentes
import ServiceHero from "~/components/serviceDetail/ServiceHero";
import PlanSection from "~/components/serviceDetail/PlanSection";
import ServiceCta from "~/components/serviceDetail/ServiceCta";

// Nuevo gestor de secciones dinámicas
import DynamicSectionsManager from "~/components/serviceDetail/DynamicSectionsManager";

const ServiceDetailContainer: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Encontrar el servicio según el ID
  const service = services.find((s) => s.id === serviceId);

  // Obtener los planes del servicio
  const plans = serviceId ? getServicePlans(serviceId) : [];

  // Redirigir si no se encuentra el servicio
  useEffect(() => {
    if (!service) {
      navigate("/servicios", { replace: true });
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <MainLayout showFooterCTA={false}>
      {/* Hero Section - Mantiene su posición original */}
      <ServiceHero service={service} />

      {/* Sección de planes - Mantiene su posición */}
      <PlanSection
        plans={plans}
        serviceName={service.title}
      />

       {/* Secciones dinámicas - Se insertan entre Hero y Planes */}
      <DynamicSectionsManager service={service} />

      {/* CTA final - Mantiene su posición original */}
      <ServiceCta
        serviceName={service.title}
        serviceColor={service.color}
        plans={plans}
      />
    </MainLayout>
  );
};

export default ServiceDetailContainer;