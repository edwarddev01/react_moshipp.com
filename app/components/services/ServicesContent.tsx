// app/components/services/ServicesContent.tsx
import React, { useState, useEffect } from 'react';
import { categories, services } from '~/data/services';
import CategoryFilter from './CategoryFilter';
import ServicesGrid from './ServicesGrid';

interface ServicesContentProps {
  initialSearchQuery?: string;
}

const ServicesContent: React.FC<ServicesContentProps> = ({ initialSearchQuery = "" }) => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  
  // Efecto para actualizar searchQuery cuando cambia initialSearchQuery
  useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  // Filtrar servicios basados en categoría y búsqueda
  const filteredServices = services.filter(service => {
    // Filtro por categoría (si es "todos", mostrar todos los servicios)
    let categoryMatch = activeCategory === "todos";
    
    // Si la categoría es "destacados", mostrar solo servicios destacados
    if (activeCategory === "destacados") {
      return service.featured === true && 
        (searchQuery === "" || 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          service.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    // Para otras categorías, filtrar por la categoría seleccionada
    if (!categoryMatch) {
      categoryMatch = service.category === activeCategory;
    }
    
    // Filtro por búsqueda
    const searchLower = searchQuery.toLowerCase();
    const searchMatch = searchQuery === "" || 
      service.title.toLowerCase().includes(searchLower) || 
      service.description.toLowerCase().includes(searchLower);
    
    return categoryMatch && searchMatch;
  });

  // Resetear los filtros
  const resetFilters = () => {
    setActiveCategory("todos");
    setSearchQuery("");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Filtros */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        {/* Resultados */}
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Mostrando {filteredServices.length} {filteredServices.length === 1 ? 'servicio' : 'servicios'}
            {activeCategory === "destacados" && " destacados"}
            {activeCategory !== "todos" && activeCategory !== "destacados" && 
              ` en ${categories.find(c => c.id === activeCategory)?.name}`}
            {searchQuery && ` para "${searchQuery}"`}
          </p>
        </div>
        
        {/* Grid de servicios */}
        <ServicesGrid 
          services={filteredServices}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onResetFilters={resetFilters}
        />
      </div>
    </section>
  );
};

export default ServicesContent;