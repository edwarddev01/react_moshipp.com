// app/pages/desarrollo-web/DesarrolloWebPage.tsx
import React from "react";
import BeneficiosDesarrollo from "~/components/desarrolloWeb/BeneficiosDesarrollo";
import DesarrolloCta from "~/components/desarrolloWeb/DesarrolloCta";
import DesarrolloWebHero from "~/components/desarrolloWeb/DesarrolloWebHero";
import FaqDesarrollo from "~/components/desarrolloWeb/FaqDesarrollo";
import PortfolioSection from "~/components/desarrolloWeb/PortfolioSection";
import ProcesoDesarrollo from "~/components/desarrolloWeb/ProcesoDesarrollo";
import TecnologiasSection from "~/components/desarrolloWeb/TecnologiasSection";
// Importar componentes
import MainLayout from "~/layout/MainLayout";




const DesarrolloWebPage: React.FC = () => {
  return (
    <MainLayout showFooterCTA={false}>
      <DesarrolloWebHero />
      <TecnologiasSection />
      <ProcesoDesarrollo />
      <BeneficiosDesarrollo />
      <PortfolioSection />
      <FaqDesarrollo />
      <DesarrolloCta />
    </MainLayout>
  );
};

export default DesarrolloWebPage;