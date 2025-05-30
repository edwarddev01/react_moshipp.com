import React from "react";
import MainLayout from "~/layout/MainLayout";
import PrivacyHero from "../../components/privacy/PrivacyHero";
import PrivacyContent from "../../components/privacy/PrivacyContent";

const PrivacyPage: React.FC = () => {
  return (
    <MainLayout>
      <PrivacyHero />
      <PrivacyContent />
    </MainLayout>
  );
};

export default PrivacyPage;