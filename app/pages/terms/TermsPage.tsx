import React from "react";
import MainLayout from "~/layout/MainLayout";
import TermsHero from "../../components/terms/TermsHero";
import TermsContent from "../../components/terms/TermsContent";

const TermsPage: React.FC = () => {
  return (
    <MainLayout>
      <TermsHero />
      <TermsContent />
    </MainLayout>
  );
};

export default TermsPage;