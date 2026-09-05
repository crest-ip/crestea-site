import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crestea.se',
  output: 'static',
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'sv',
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    format: 'directory'
  }
});
