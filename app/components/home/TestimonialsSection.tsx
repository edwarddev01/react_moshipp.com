// app/components/home/TestimonialsSection.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Datos de testimonios
const testimonials = [
  {
    id: 1,
    content: "Moshipp ha sido mi proveedor de hosting desde hace más de un año, y no puedo estar más contento. Su servicio es rápido, seguro y confiable, y el equipo de soporte técnico siempre está ahí cuando los necesito.",
    author: "Carlos Rodríguez",
    role: "Desarrollador web",
    avatar: "/avatars/avatar.avif",
  },
  {
    id: 2,
    content: "Estaba buscando un servicio de hosting flexible y asequible, y Moshipp superó todas mis expectativas. Su plataforma fácil de usar y su equipo de soporte técnico excepcional me han ayudado a llevar mi negocio al siguiente nivel.",
    author: "Ana Martínez",
    role: "Propietaria de tienda online",
    avatar: "/avatars/avatar.avif",
  },
  {
    id: 3,
    content: "Desde que migré mi sitio web a Moshipp, he notado una gran mejora en la velocidad y la seguridad de mi sitio. Estoy muy contento con su servicio, y lo recomendaría a cualquier persona que busque un hosting de calidad superior.",
    author: "Juan Pérez",
    role: "Blogger de tecnología",
    avatar: "/avatars/avatar.avif",
  },
  {
    id: 4,
    content: "Moshipp ha sido una verdadera bendición para mi negocio en línea. Su servicio de hosting de alta calidad y su soporte técnico excepcional me han permitido concentrarme en hacer crecer mi negocio en lugar de preocuparme por problemas técnicos.",
    author: "Laura González",
    role: "Consultora de marketing digital",
    avatar: "/avatars/avatar.avif",
  },
  {
    id: 5,
    content: "No puedo decir suficientes cosas buenas sobre Moshipp. Su servicio de hosting ha sido excelente, y su equipo de soporte técnico siempre ha estado ahí para ayudarme cuando los necesito. ¡Recomiendo Moshipp a cualquiera que busque un hosting confiable y de calidad!",
    author: "Miguel Hernández",
    role: "Diseñador gráfico",
    avatar: "/avatars/avatar.avif",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Avanzar al siguiente testimonio
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  // Retroceder al testimonio anterior
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  // Cambiar a un testimonio específico
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false); // Pausar autoplay al interactuar manualmente
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(timer);
  }, [autoplay, activeIndex]);

  // Reanudar autoplay después de inactividad
  useEffect(() => {
    const resumeAutoplay = () => {
      setAutoplay(true);
    };

    const timeout = setTimeout(resumeAutoplay, 10000); // Reanudar después de 10 segundos de inactividad

    return () => clearTimeout(timeout);
  }, [autoplay]);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Miles de clientes satisfechos confían en Moshipp para sus necesidades de hosting.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controles de carrusel */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 z-10 hidden md:block">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 z-10 hidden md:block">
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Carrusel de testimonios */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md relative">
                    <div className="absolute top-4 right-4 text-blue-200 dark:text-blue-900 opacity-30">
                      <Quote size={48} />
                    </div>
                    <blockquote className="relative z-10">
                      <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="h-full w-full object-cover"
                            
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
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores (puntos) */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  activeIndex === index
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Controles móviles (abajo) */}
          <div className="flex justify-center mt-6 md:hidden space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;