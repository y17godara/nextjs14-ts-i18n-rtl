
export const getFlagIcon = (locale: Locale): string => {
  switch (locale) {
    case 'en':
      return '🇺🇸';
    case 'hi':
      return '🇮🇳';
    case 'ar':
      return '🇦🇪';
    default:
      return '🌐';
  }
};

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'hi', 'ar']
} as const

export type Locale = (typeof i18n)['locales'][number]
