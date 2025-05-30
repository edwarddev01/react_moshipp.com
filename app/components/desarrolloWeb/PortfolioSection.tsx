// app/components/desarrolloWeb/PortfolioSection.tsx
import React, { useState } from "react";
import { Link } from "react-router";
import { ExternalLink, ChevronRight, Lock } from "lucide-react";

// Estilos para animaciones
const animationStyles = `
  .portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
  }
  
  .portfolio-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .portfolio-image {
    width: 100%;
    height: 0;
    padding-bottom: 66.67%; /* 3:2 Aspect Ratio */
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
  }
  
  .portfolio-item:hover .portfolio-image {
    transform: scale(1.05);
  }
  
  .portfolio-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    padding: 1.5rem;
    color: white;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  
  .portfolio-item:hover .portfolio-overlay {
    transform: translateY(0);
  }
  
  .portfolio-title {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
    transform: translateY(20px);
  }
  
  .portfolio-item:hover .portfolio-title {
    transform: translateY(0);
  }
  
  .portfolio-description {
    font-size: 0.875rem;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateY(20px);
  }
  
  .portfolio-item:hover .portfolio-description {
    opacity: 1;
    transform: translateY(0);
  }
  
  .portfolio-link {
    display: inline-flex;
    align-items: center;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateY(20px);
  }
  
  .portfolio-item:hover .portfolio-link {
    opacity: 1;
    transform: translateY(0);
  }
  
  .portfolio-link:hover {
    text-decoration: underline;
  }
  
  .portfolio-tag {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    
    backdrop-filter: blur(4px);
    z-index: 10;
  }
  
  .filter-button {
    transition: all 0.3s ease;
  }
  
  .filter-button.active {
    background-color: #144AE8;
    color: white;
  }
`;

// Datos del portfolio
const portfolioProjects = [
  {
    id: "ecommerce1",
    title: "Tienda online",
    description:
      "eCommerce con WooCommerce y diseño personalizado. Integración con pasarelas de pago y gestión de inventario.",
    image: "/portfolio/ecommerce.PNG",
    category: "ecommerce",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    url: "https://licenciadigital.com.co",
  },
  {
    id: "webapp1",
    title: "Dashboard analítico",
    description:
      "Aplicación web para visualización de datos con gráficos interactivos y reportes en tiempo real.",
    image: "/portfolio/dashboard-app.PNG",
    category: "webapp",
    technologies: ["Amgular", "Node.js", "Mysql"],
    url: null,
  },
  // {
  //   id: "corporate1",
  //   title: "Sitio Corporativo Premium",
  //   description: "Web institucional con diseño personalizado, animaciones avanzadas y sistema de gestión de contenidos.",
  //   image: "/portfolio/corporate-site.jpg",
  //   category: "corporate",
  //   technologies: ["WordPress", "JavaScript", "CSS3"],
  //   url: "#"
  // },
  {
    id: "webapp2",
    title: "Plataforma para deportistas",
    description:
      "Plataforma para potencializar tu carrera de deportista con cursos, consultorias, mejora imagenes con IA ...",
    image: "/portfolio/gruntt-app.PNG",
    category: "webapp",
    technologies: ["React", "Node.js", "Express", "MySQL", "Wordpress"],
    url: "https://gruntt.co",
  },
  // {
  //   id: "mobile1",
  //   title: "App Híbrida de Fitness",
  //   description: "Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso personal.",
  //   image: "/portfolio/fitness-app.jpg",
  //   category: "mobile",
  //   technologies: ["React Native", "Firebase", "Redux"],
  //   url: "#"
  // },
  // {
  //   id: "corporate2",
  //   title: "Blog de Noticias",
  //   description: "Portal de contenidos con múltiples categorías, sistema de comentarios y newsletter.",
  //   image: "/portfolio/news-blog.jpg",
  //   category: "corporate",
  //   technologies: ["WordPress", "MySQL", "PHP"],
  //   url: "#"
  // }
];

// Categorías de proyectos
const categories = [
  { id: "all", name: "Todos" },
  { id: "webapp", name: "Aplicaciones web" },
  { id: "ecommerce", name: "eCommerce" },
  { id: "corporate", name: "Sitios corporativos" },
  //{ id: "mobile", name: "Aplicaciones Móviles" }
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <style>{animationStyles}</style>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros proyectos destacados
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore algunos de nuestros trabajos recientes y descubra cómo
            ayudamos a nuestros clientes a alcanzar sus objetivos digitales.
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-button px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "active"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-item bg-white dark:bg-gray-800 overflow-hidden shadow-md"
            >
              <div
                className="portfolio-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Overlay con información */}
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  {project && project.url ? (
                    <a
                      href={project.url}
                      className="portfolio-link text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver proyecto <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      className="portfolio-link text-white cursor-not-allowed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Proyecto privado <Lock className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Etiqueta de categoría */}
              <div className="portfolio-tag bg-white dark:bg-gray-900 dark:text-white">
                {categories.find((cat) => cat.id === project.category)?.name}
              </div>

              {/* Info adicional */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más proyectos */}
        {/* <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Ver todos los proyectos
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;
