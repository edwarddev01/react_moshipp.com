// app/components/services/CategoryFilter.tsx
import React from 'react';
import type { Category } from '~/types/services';


interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <div className="flex flex-wrap justify-center mb-12 max-w-4xl mx-auto">
      <button
        onClick={() => setActiveCategory("todos")}
        className={`px-5 py-2 m-1 rounded-full font-medium text-sm transition-all 
        ${
          activeCategory === "todos"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
      >
        Todos
      </button>
      
      <button
        onClick={() => setActiveCategory("destacados")}
        className={`px-5 py-2 m-1 rounded-full font-medium text-sm transition-all 
        ${
          activeCategory === "destacados"
            ? "bg-blue-600 text-white"
            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
      >
        Destacados
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-5 py-2 m-1 rounded-full font-medium text-sm transition-all 
          ${
            activeCategory === category.id
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;