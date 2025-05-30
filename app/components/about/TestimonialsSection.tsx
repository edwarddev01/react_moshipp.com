// app/pages/about/components/TestimonialsSection.tsx
import React from "react";
import { MessageSquare } from "lucide-react";
import { testimonials } from "~/data/aboutData";


const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-6">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>Testimonios destacados</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descubra por qué nuestros clientes confían en Moshipp para sus necesidades de hosting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md relative">
              <div className="absolute top-4 right-4 text-blue-200 dark:text-blue-900 opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="relative z-10">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/api/placeholder/40/40";
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;