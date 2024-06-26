import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import tr from './locales/tr.json';
import de from './locales/de.json';
import jp from './locales/jp.json';
export const languageResources = {
  en: {translation: en},
  tr: {translation: tr},
  de: {translation: de},
  jp: {translation: jp},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
