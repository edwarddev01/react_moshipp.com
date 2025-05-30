// app/components/desarrolloWeb/DesarrolloWebHero.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { 
  ArrowRight, 
  Code, 
  Zap, 
  Monitor, 
  Smartphone, 
  CheckCircle,
  Server
} from "lucide-react";

// Estilos CSS para animaciones
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 6s ease-in-out infinite 2s;
  }

  .multicolor-underline {
    position: relative;
    display: inline-block;
  }
  
  .multicolor-underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #FFD700, #FF8C00, #1E90FF, #9370DB, #0000CD);
    border-radius: 1.5px;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in {
    animation: fadeIn 0.6s ease forwards;
  }
  
  .code-block {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }
  
  .code-block::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), transparent);
    opacity: 0.5;
  }
  
  .cursor {
    display: inline-block;
    width: 6px;
    height: 18px;
    background-color: #61dafb;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .typing-effect {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #61dafb;
    animation: typing 4s steps(40) 1s 1 normal both, blink-caret 0.75s step-end infinite;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #61dafb }
  }
`;

const DesarrolloWebHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 py-16 px-4">
      {/* Estilos CSS para animaciones */}
      <style>{animationStyles}</style>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0M30 60L60 30M0 30L30 0" stroke="white" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 left-40 w-4 h-4 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-5 h-5 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`text-center md:text-left transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-6">
              <Code className="h-4 w-4 mr-1" />
              <span>Desarrollo Web Profesional</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Soluciones de <span className="multicolor-underline">desarrollo web</span> con tecnologías de vanguardia
            </h1>
            
            <p className="text-lg text-white/90 mb-6">
              Creamos sitios web y aplicaciones a medida que impulsan su negocio con las tecnologías más modernas, incluyendo React, Node.js y mucho más. Diseño personalizado, rendimiento optimizado y código limpio.
            </p>
            
            {/* Características destacadas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-white/30 mr-3 mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white text-sm">
                  Aplicaciones web con React
                </span>
              </div>
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-white/30 mr-3 mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white text-sm">
                  Sitios WordPress personalizados
                </span>
              </div>
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-white/30 mr-3 mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white text-sm">
                  Tiendas online (eCommerce)
                </span>
              </div>
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-white/30 mr-3 mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white text-sm">
                  Mantenimiento y soporte técnico
                </span>
              </div>
            </div>
            
            {/* Botón de acción */}
            <div className="mt-8">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-blue-700 bg-white hover:bg-blue-50 transform transition hover:-translate-y-0.5"
              >
                Solicitar cotización
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Ilustración o código */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Elementos decorativos*/}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-white/10 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/20 z-0"></div>
              
              {/* Iconos flotantes con beneficios */}
              <div className="absolute top-10 -left-10 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg z-20 animate-float">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
                    <Monitor className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Sitios responsivos
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-10 right-0 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg z-20 animate-float-delayed">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-2">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Mobile-First Design
                  </span>
                </div>
              </div>
              
              <div 
                className="absolute -bottom-10 left-20 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg z-20"
                style={{ animation: "float 6s ease-in-out infinite 1s" }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                    <Server className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Hosting incluido
                  </span>
                </div>
              </div>
              
              {/* Bloque de código React */}
              <div className="code-block relative z-10 bg-gray-900 rounded-lg shadow-2xl p-6 max-w-md font-mono text-sm text-blue-300 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="ml-2 text-gray-400 text-xs">App.jsx</span>
                </div>
                <div className="typing-effect">
                  <span className="text-pink-400">import</span> <span className="text-blue-300">React</span> <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;
                </div>
                <div className="mt-2">
                  <span className="text-pink-400">import</span> <span className="text-blue-300">{'{ useState }'}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span>;
                </div>
                <div className="mt-4">
                  <span className="text-pink-400">function</span> <span className="text-yellow-300">App</span>() {'{'} 
                </div>
                <div className="mt-2 ml-4">
                  <span className="text-pink-400">const</span> [<span className="text-blue-300">count</span>, <span className="text-yellow-300">setCount</span>] = <span className="text-blue-300">useState</span>(0);
                </div>
                <div className="mt-4 ml-4">
                  <span className="text-pink-400">return</span> (
                </div>
                <div className="mt-2 ml-8">
                  <span className="text-gray-500">&lt;</span><span className="text-blue-400">div</span> <span className="text-green-300">className</span><span className="text-gray-500">=</span><span className="text-yellow-300">"container"</span><span className="text-gray-500">&gt;</span>
                </div>
                <div className="mt-2 ml-12">
                  <span className="text-gray-500">&lt;</span><span className="text-blue-400">h1</span><span className="text-gray-500">&gt;</span>Moshipp App<span className="text-gray-500">&lt;/</span><span className="text-blue-400">h1</span><span className="text-gray-500">&gt;</span>
                </div>
                <div className="mt-2 ml-12">
                  <span className="text-gray-500">&lt;</span><span className="text-blue-400">button</span> <span className="text-green-300">onClick</span><span className="text-gray-500">=</span><span className="text-yellow-300">{'{() => setCount(count + 1)}'}</span><span className="text-gray-500">&gt;</span>
                </div>
                <div className="mt-1 ml-16">
                  Clicks: {'{count}'}
                </div>
                <div className="mt-1 ml-12">
                  <span className="text-gray-500">&lt;/</span><span className="text-blue-400">button</span><span className="text-gray-500">&gt;</span>
                </div>
                <div className="mt-2 ml-8">
                  <span className="text-gray-500">&lt;/</span><span className="text-blue-400">div</span><span className="text-gray-500">&gt;</span>
                </div>
                <div className="mt-2 ml-4">
                  );
                </div>
                <div className="mt-2">
                  {'}'}
                </div>
                <div className="mt-4">
                  <span className="text-pink-400">export default</span> <span className="text-yellow-300">App</span>;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesarrolloWebHero;