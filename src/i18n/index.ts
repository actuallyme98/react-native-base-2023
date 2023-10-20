import * as RNLocalize from 'react-native-localize';
import i18next, {LanguageDetectorAsyncModule, t} from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './locales/en.json';
import vn from './locales/vn.json';
import {
  getUserLanguage,
  setUserLanguage,
} from '@services/async-storage.service';

const ENGLISH_CODE = 'en';
const VIETNAMESE_CODE = 'vn';

const resources = {
  [ENGLISH_CODE]: {
    translation: en,
  },
  [VIETNAMESE_CODE]: {
    translation: vn,
  },
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    getUserLanguage((error, language) => {
      if (error) {
        console.log('Error fetching Languages from asyncstorage ', error);
      }
      if (!language) {
        console.log(
          'No language is set, choosing suitable language as fallback',
        );
        const bestLanguage = RNLocalize.findBestLanguageTag([
          ENGLISH_CODE,
          VIETNAMESE_CODE,
        ]);
        language = bestLanguage?.languageTag || ENGLISH_CODE;
      }

      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    setUserLanguage(language);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export function strings(name: string, params = {}) {
  return t(name, params);
}
