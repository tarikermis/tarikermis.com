import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tarikermis.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      customPages: ['https://tarikermis.com/contact.vcf'],
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de', en: 'en' },
      },
    }),
  ],
});
