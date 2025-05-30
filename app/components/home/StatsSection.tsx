import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe, Server, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

// Datos de estadísticas
const stats = [
  {
    id: 1,
    value: 99.9,
    suffix: '%',
    label: 'Uptime garantizado',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    glowColor: 'shadow-blue-500/50',
  },
  {
    id: 2,
    value: 5000,
    suffix: '+',
    label: 'Clientes satisfechos',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    glowColor: 'shadow-green-500/50',
  },
  {
    id: 3,
    value: 10000,
    suffix: '+',
    label: 'Sitios web alojados',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    glowColor: 'shadow-purple-500/50',
  },
  {
    id: 4,
    value: 8,
    suffix: '+',
    label: 'Años de experiencia',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    glowColor: 'shadow-yellow-500/50',
  },
];

// Hook personalizado para animación contador
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, start, duration]);

  return { count, ref };
};

// Componente de partículas flotantes
const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-slate-400/20 dark:bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Componente principal
const StatsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-white via-white to-white dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 opacity-50" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent dark:from-white/5 dark:to-transparent" />
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-600/20 dark:text-white/20" />
          </svg>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full border border-slate-200/50 dark:border-white/20 shadow-lg dark:shadow-none">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-700 dark:text-blue-200 text-sm font-medium">Nuestros logros</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Números que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              hablan por sí solos
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-blue-100/80 max-w-2xl mx-auto">
            Más de una década construyendo soluciones digitales de clase mundial
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2500);
            const isHovered = hoveredCard === stat.id;
            
            return (
              <div
                key={stat.id}
                ref={ref}
                className="group relative"
                onMouseEnter={() => setHoveredCard(stat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 dark:group-hover:opacity-75 transition-all duration-500 ${stat.glowColor}`} />
                
                {/* Card */}
                <div className={`relative p-8 bg-white/80 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-slate-200/50 dark:border-white/10 transition-all duration-500 transform group-hover:scale-105 group-hover:bg-white/90 dark:group-hover:bg-white/10 ${isHovered ? 'shadow-2xl' : 'shadow-lg dark:shadow-slate-900/50'}`}>
                  {/* Icon container */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${stat.color} ${stat.bgColor} backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                      <stat.icon className="h-8 w-8 text-white drop-shadow-lg" />
                      
                      {/* Icon glow */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-50 blur-md transition-all duration-500`} />
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="text-center mb-4">
                    <div className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2 tabular-nums">
                      <span className="bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-blue-100 bg-clip-text text-transparent drop-shadow-sm">
                        {count}
                      </span>
                      <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.suffix}
                      </span>
                    </div>
                    
                    {/* Animated underline */}
                    <div className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto transition-all duration-500 ${isHovered ? 'w-16' : 'w-8'}`} />
                  </div>
                  
                  {/* Label */}
                  <div className="text-center">
                    <p className="text-slate-600 dark:text-blue-100/90 font-medium text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/servicios" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-600 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm border border-blue-200/20 dark:border-white/20">
            <span>¿Listo para unirte a ellos?</span>
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;