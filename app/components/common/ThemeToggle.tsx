// app/components/common/ThemeToggle.tsx
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  // Estado inicial basado en preferencias del usuario o sistema
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar si existe preferencia guardada en localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Si no hay preferencia guardada, verificar la preferencia del sistema
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Fallback para SSR
    return false;
  });

  // Aplicar tema al cargar y al cambiar
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Cambiar tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;