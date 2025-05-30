// app/components/home/FeaturesSection.tsx
import React from 'react';
import { Shield, Zap, Clock, Server, Database, Globe } from 'lucide-react';

// Datos de características
const features = [
  {
    id: 1,
    name: 'Seguridad avanzada',
    description: 'Utilizamos medidas de seguridad avanzadas para proteger tu sitio web de ataques malintencionados y de malware.',
    icon: Shield,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 2,
    name: 'Rendimiento óptimo',
    description: 'Nuestros servicios de hosting garantizan alta velocidad y un rendimiento óptimo para tu sitio web.',
    icon: Zap,
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
  },
  {
    id: 3,
    name: 'Soporte 24/7',
    description: 'Nuestro equipo de soporte técnico está disponible las 24 horas del día, los 7 días de la semana para ayudarte.',
    icon: Clock,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    id: 4,
    name: 'Servidores confiables',
    description: 'Accede a servidores rápidos y seguros que te brindarán una experiencia de usuario sin problemas.',
    icon: Server,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    id: 5,
    name: 'Copias de seguridad',
    description: 'Realizamos dos copias de seguridad semanales para garantizar que tus datos estén siempre protegidos.',
    icon: Database,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
  },
  {
    id: 6,
    name: 'Múltiples sitios web',
    description: 'Administra múltiples sitios web con facilidad usando nuestros paneles de control intuitivos.',
    icon: Globe,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Todo lo que necesitas</span>
            <span className="block text-blue-600 dark:text-blue-400">para tu presencia en línea</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            En Moshipp, ofrecemos un servicio de hosting confiable y estable que garantiza que tu sitio web estará disponible para tus visitantes en todo momento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="relative p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <feature.icon className="h-16 w-16" />
              </div>
              <div>
                <div className={`inline-flex items-center justify-center p-3 rounded-md ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;