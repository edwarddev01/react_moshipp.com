// app/pages/contact/components/ContactCTASection.tsx
import React from 'react';
import { Link } from 'react-router';
import { Server, ArrowRight } from 'lucide-react';

const ContactCTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-800 dark:to-indigo-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Server className="h-12 w-12 text-blue-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">¿Listo para llevar tu presencia web al siguiente nivel?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explora nuestros planes de hosting diseñados para adaptarse a las necesidades de tu proyecto y disfruta de la mejor atención al cliente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/planes" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 dark:text-blue-900 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Ver planes de hosting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/empresa" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Conoce más sobre nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;