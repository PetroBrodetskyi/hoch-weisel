import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        title: 'Home',
        description: 'Welcome to the home page',
      },
      events: {
        title: 'Events',
        description: 'Upcoming events',
      },
      history: {
        title: 'History',
        description: 'Our history',
      },
    },
  },
  de: {
    translation: {
      home: {
        title: 'Zuhause',
        description: 'Willkommen auf der Startseite',
      },
      events: {
        title: 'Veranstaltungen',
        description: 'Bevorstehende Veranstaltungen',
      },
      history: {
        title: 'Geschichte',
        description: 'Unsere Geschichte',
      },
    },
  },
  ua: {
    translation: {
      home: {
        title: 'Дім',
        description: 'Ласкаво просимо на головну сторінку',
      },
      events: {
        title: 'Події',
        description: 'Майбутні події',
      },
      history: {
        title: 'Історія',
        description: 'Наша історія',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua', // Початкова мова
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;