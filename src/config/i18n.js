import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import translationEN from '../i18n/en/translation_en.json';
import translationTA from '../i18n/ta/translation_ta.json';

const resources = {
    en: {
        translation: translationEN
    },
    ta: {
        translation: translationTA
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: "en", // choose the language here
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;

// ref : https://www.i18next.com/overview/configuration-options