// app/components/domains/DomainFeaturesSection.tsx
import React from "react";
import { 
  Shield, 
  Lock, 
  Clock, 
  Users, 
  TrendingUp, 
  RefreshCw,
  Zap,
  Globe,
  CheckCircle,
  Server,
  Mail,
  Headphones
} from "lucide-react";

const DomainFeaturesSection: React.FC = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: "SSL Gratuito",
      description: "Certificado SSL incluido sin costo adicional para mayor seguridad",
      color: "blue",
      benefits: ["Encriptación HTTPS", "Confianza del cliente", "Mejor SEO"]
    },
    {
      icon: Lock,
      title: "Privacidad incluida",
      description: "Protección WHOIS para mantener tus datos personales seguros",
      color: "green",
      benefits: ["Datos protegidos", "Sin spam", "Privacidad total"]
    },
    {
      icon: Clock,
      title: "Activación instantánea",
      description: "Tu dominio estará activo en menos de 15 minutos",
      color: "purple",
      benefits: ["Setup inmediato", "Sin esperas", "Disponible ya"]
    },
    {
      icon: Users,
      title: "Soporte 24/7",
      description: "Equipo de expertos disponible cuando lo necesites",
      color: "yellow",
      benefits: ["Chat en vivo", "Email support", "Llamadas"]
    },
    {
      icon: TrendingUp,
      title: "DNS Premium",
      description: "Infraestructura de DNS rápida y confiable a nivel mundial",
      color: "red",
      benefits: ["99.9% uptime", "Velocidad global", "Redundancia"]
    },
    {
      icon: RefreshCw,
      title: "Transferencias fáciles",
      description: "Migra tu dominio desde otro proveedor sin complicaciones",
      color: "indigo",
      benefits: ["Sin downtime", "Proceso guiado", "Soporte incluido"]
    }
  ];

  const additionalServices = [
    {
      icon: Mail,
      title: "Email profesional",
      description: "Cuentas de email con tu dominio",
      price: "Desde $2.99/mes"
    },
    {
      icon: Server,
      title: "Hosting web",
      description: "Alojamiento optimizado para tu sitio",
      price: "Desde $4.99/mes"
    },
    {
      icon: Globe,
      title: "Constructor web",
      description: "Crea tu sitio sin conocimientos técnicos",
      price: "Gratis con hosting"
    },
    {
      icon: Shield,
      title: "Backup automático",
      description: "Copias de seguridad diarias",
      price: "Incluido"
    }
  ];

  const stats = [
    { number: "500K+", label: "Dominios activos", icon: Globe },
    { number: "99.9%", label: "Uptime garantizado", icon: TrendingUp },
    { number: "24/7", label: "Soporte técnico", icon: Headphones },
    { number: "15min", label: "Activación rápida", icon: Clock }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Todo incluido</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Por qué elegir nuestros dominios?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ofrecemos mucho más que solo registro de dominios. Obtén el paquete completo 
            con todas las herramientas necesarias para tu éxito online.
          </p>
        </div>

        {/* Estadísticas destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Características principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Efecto de hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 dark:from-${feature.color}-900/10 dark:to-${feature.color}-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  {feature.description}
                </p>

                {/* Lista de beneficios */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className={`h-4 w-4 text-${feature.color}-500 mr-2 flex-shrink-0`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Servicios adicionales */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Servicios complementarios
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Completa tu presencia online con nuestros servicios adicionales 
              diseñados para trabajar perfectamente con tu dominio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {service.description}
                </p>
                
                <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner de garantía */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 mr-4" />
              <h3 className="text-3xl font-bold">
                Garantía de satisfacción
              </h3>
            </div>
            
            <p className="text-xl text-green-100 mb-6">
              Si no estás completamente satisfecho con nuestro servicio en los primeros 30 días, 
              te devolvemos tu dinero sin preguntas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>30 días de garantía</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Sin costos ocultos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Cancelación fácil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainFeaturesSection;