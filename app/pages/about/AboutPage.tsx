// app/pages/about/AboutPage.tsx
import React from "react";
import HeroSection from "~/components/about/HeroSection";

// Importación de estilos
import "~/styles/animations.css";

// Importación de componentes
import MainLayout from "~/layout/MainLayout";
import HistorySection from "~/components/about/HistorySection";
import MissionVisionSection from "~/components/about/MissionVisionSection";
import AdvantagesSection from "~/components/about/AdvantagesSection";
import ValuesSection from "~/components/about/ValuesSection";
import TeamSection from "~/components/about/TeamSection";
import TestimonialsSection from "~/components/about/TestimonialsSection";

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HistorySection />
      <MissionVisionSection />
      <ValuesSection />
      <AdvantagesSection />
      <TeamSection />
      <TestimonialsSection />
    </MainLayout>
  );
};

export default AboutPage;