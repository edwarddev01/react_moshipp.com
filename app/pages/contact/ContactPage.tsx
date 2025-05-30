// app/pages/contact/ContactPage.tsx
import React from 'react';
import ContactCardsSection from '~/components/contact/ContactCardsSection';
import ContactHeroSection from '~/components/contact/ContactHeroSection';
import ContactWithMapSection from '~/components/contact/ContactWithMapSection';
import FeaturesSection from '~/components/home/FeaturesSection';
import MainLayout from '~/layout/MainLayout';

// Importación de estilos para animaciones
import '~/styles/animations.css';

// Importación de componentes


const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <ContactHeroSection />
      <ContactCardsSection />
      <div id="form-contact">
        <ContactWithMapSection />
      </div>
      <FeaturesSection />
      
     
    </MainLayout>
  );
};

export default ContactPage;