// app/lib/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importar traducciones
import enCommon from "~/locales/en/common.json";
import esCommon from "~/locales/es/common.json";
import esHome from "~/locales/es/home.json";
import enHome from "~/locales/en/home.json";

const resources = {
  en: {
    common: enCommon,
    home: enHome,
  },
  es: {
    common: esCommon,
    home: esHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es", // idioma por defecto
    defaultNS: "common",

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
