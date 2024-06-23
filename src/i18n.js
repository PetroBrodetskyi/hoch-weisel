import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import baseData from '../src/data/base.json'; // Шлях до вашого нового JSON файлу

const resources = {
  en: {
    translation: baseData
  },
  de: {
    translation: baseData
  },
  ua: {
    translation: baseData
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
