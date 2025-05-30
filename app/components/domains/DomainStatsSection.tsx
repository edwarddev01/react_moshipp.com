// app/components/domains/DomainStatsSection.tsx
import React from "react";
import { 
  Globe, 
  Users, 
  TrendingUp, 
  Award,
  Clock,
  Shield,
  Star,
  CheckCircle
} from "lucide-react";

const DomainStatsSection: React.FC = () => {
  const mainStats = [
    {
      number: "500,000+",
      label: "Dominios registrados",
      description: "Confianza de miles de clientes",
      icon: Globe,
      color: "blue",
      growth: "+25% este año"
    },
    {
      number: "99.9%",
      label: "Tiempo de actividad",
      description: "Infraestructura confiable 24/7",
      icon: TrendingUp,
      color: "green",
      growth: "Garantizado"
    },
    {
      number: "15min",
      label: "Activación promedio",
      description: "Desde el registro hasta estar online",
      icon: Clock,
      color: "purple",
      growth: "Récord de la industria"
    },
    {
      number: "24/7",
      label: "Soporte técnico",
      description: "Equipo de expertos siempre disponible",
      icon: Users,
      color: "yellow",
      growth: "Múltiples canales"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "TechStart Colombia",
      avatar: "/avatars/maria.jpg",
      text: "Registrar nuestro dominio .co fue súper fácil. El proceso tomó menos de 10 minutos y el soporte fue excelente.",
      rating: 5,
      domain: ".co"
    },
    {
      name: "Carlos Mendoza",
      company: "E-commerce Solutions",
      avatar: "/avatars/carlos.jpg", 
      text: "Migré más de 20 dominios sin ningún problema. El equipo de soporte me guió en cada paso del proceso.",
      rating: 5,
      domain: ".com"
    },
    {
      name: "Ana Rodríguez",
      company: "Creative Studio",
      avatar: "/avatars/ana.jpg",
      text: "Los precios son competitivos y incluyen todo lo necesario. SSL gratis y privacidad incluida sin costos extra.",
      rating: 5,
      domain: ".design"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Mejor Proveedor 2024",
      description: "Reconocido por la excelencia en servicio",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Certificación SSL",
      description: "Partner oficial de Let's Encrypt",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "DNS en 50+ ubicaciones mundiales",
      color: "green"
    },
    {
      icon: Users,
      title: "100k+ Clientes",
      description: "Creciendo cada día",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span>Estadísticas en tiempo real</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Números que hablan por sí solos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Miles de clientes confían en nosotros para sus dominios. 
            Únete a la comunidad líder en registro de dominios en Colombia.
          </p>
        </div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-${stat.color}-100 dark:bg-${stat.color}-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-8 w-8 text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
              
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {stat.description}
              </p>
              
              <div className={`text-${stat.color}-600 dark:text-${stat.color}-400 text-sm font-medium`}>
                {stat.growth}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Lo que dicen nuestros clientes
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experiencias reales de empresas que confiaron en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonio */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Autor */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.domain}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logros y certificaciones */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Reconocimientos y certificaciones
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Nuestro compromiso con la excelencia nos ha llevado a ser reconocidos en la industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-20 h-20 bg-${achievement.color}-100 dark:bg-${achievement.color}-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                  <achievement.icon className={`h-10 w-10 text-${achievement.color}-600 dark:text-${achievement.color}-400`} />
                </div>
                
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner final con CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para unirte a nuestra comunidad?
            </h3>
            
            <p className="text-xl text-blue-100 mb-8">
              Más de 500,000 dominios registrados nos respaldan. 
              Encuentra tu dominio perfecto hoy mismo.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Buscar dominio
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Hablar con experto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainStatsSection;