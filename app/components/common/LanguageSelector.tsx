// app/components/common/LanguageSelector.tsx
import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '~/hooks/useTranslation';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, languages } = useTranslation();
  
  const languageNames = {
    es: 'Español',
    en: 'English'
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <Globe className="h-4 w-4" />
        <span className="text-sm">{languageNames[currentLanguage as keyof typeof languageNames]}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg ${
              currentLanguage === lang ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''
            }`}
          >
            {languageNames[lang as keyof typeof languageNames]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;