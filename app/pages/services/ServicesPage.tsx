// app/pages/services/ServicesPage.tsx
import React, { useState } from "react";
import MainLayout from "~/layout/MainLayout";

// Componentes de la página de Servicios
import ServicesHero from "../../components/services/ServicesHero";
import ServicesContent from "../../components/services/ServicesContent";
import FeaturedService from "../../components/services/FeaturedService";


const ServicesPageContainer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout>
      <ServicesHero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ServicesContent
        initialSearchQuery={searchQuery}
      />
      <FeaturedService />
      
    </MainLayout>
  );
};

export default ServicesPageContainer;