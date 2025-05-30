// app/pages/domains/DomainsMain.tsx
import React from "react";

// Componentes de la página Dominios
import DomainHeroSection from "../../components/domains/DomainHeroSection";
import DomainSearchSection from "../../components/domains/DomainSearchSection";
import DomainPricingSection from "../../components/domains/DomainPricingSection";
import DomainFeaturesSection from "../../components/domains/DomainFeaturesSection";
import DomainStatsSection from "../../components/domains/DomainStatsSection";
import DomainFaqSection from "../../components/domains/DomainFaqSection";
import DomainCallToActionSection from "../../components/domains/DomainCallToActionSection";
import MainLayout from "~/layout/MainLayout";
import DomainChecker from "~/components/domains/DomainChecker";

const DomainsMain: React.FC = () => {
  return (
    <MainLayout showFooterCTA={false}>
      <DomainHeroSection />
      {/* <DomainChecker /> */}
      <DomainPricingSection />
      {/* <DomainFeaturesSection /> */}
      {/* <DomainStatsSection /> */}
      <DomainFaqSection />
      <DomainCallToActionSection />
    </MainLayout>
  );
};

export default DomainsMain;