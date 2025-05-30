// app/hooks/useTranslation.ts
import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = (namespace?: string) => {
  const { t, i18n } = useI18nTranslation(namespace);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return {
    t,
    currentLanguage: i18n.language,
    changeLanguage,
    languages: ['es', 'en']
  };
};