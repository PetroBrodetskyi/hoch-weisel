import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../src/locales/articles/articleen.json';
import deTranslation from '../src/locales/articles/articlede.json';
import uaTranslation from '../src/locales/articles/articleua.json';

const resources = {
  en: {
    translation: enTranslation
  },
  de: {
    translation: deTranslation
  },
  ua: {
    translation: uaTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
