// app/components/layouts/MainLayout.tsx
import React from 'react';
import Footer from '~/components/common/Footer';
import FooterCTA from '~/components/common/FooterCTA';
import Header from '~/components/common/Header';


// Definición de tipos para las props
interface MainLayoutProps {
  children: React.ReactNode;
  showFooterCTA?: boolean;
}


/**
 * Layout principal de la aplicación
 * Este componente encapsula la estructura común de todas las páginas
 */

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showFooterCTA = true 
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      {/* Header */}
      <Header />
      
      {/* Contenido Principal */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* CTA antes del footer (opcional) */}
      {showFooterCTA && <FooterCTA />}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;