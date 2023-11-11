import { Locale } from '@/i18n.config';

export const routes = {
  home: {
    path: (lang: Locale) => `/${lang}`,
    label: 'Home',
  },
  about: {
    path: (lang: Locale) => `/${lang}/about`,
    label: 'About',
  },
  products: {
    path: (lang: Locale) => `/${lang}/products`,
    label: 'Products',
  },
};