// app/pages/home/Home.tsx
import React from "react";



// Componentes de la página Home
import HeroSection from "../../components/home/HeroSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import ServicesSection from "../../components/home/ServicesSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import StatsSection from "../../components/home/StatsSection";
import FaqSection from "../../components/home/FaqSection";
import MainLayout from "~/layout/MainLayout";

const HomeMain: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
    </MainLayout>
  );
};

export default HomeMain;
