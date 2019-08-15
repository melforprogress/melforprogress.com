import es from './es'

export const Locale = {
  English: 'en',
  // Comment this back in when the translations are ready
  // Spanish: 'es',
};

const localizedStrings = {
  [Locale.Spanish]: es,
};

const getLocalizedStrings = (locale) => localizedStrings[locale];

export { localizedStringsKeypaths } from './es';
export { getLocalizedStrings };
