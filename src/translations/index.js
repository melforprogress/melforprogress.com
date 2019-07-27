import es from './es'

export const Locale = {
  Spanish: 'es'
};

const localizedStrings = {
  [Locale.Spanish]: es,
};

const getLocalizedStrings = (locale) => localizedStrings[locale];

export { localizedStringsKeypaths } from './es';
export { getLocalizedStrings };
