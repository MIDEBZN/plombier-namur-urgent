// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.plombiernamururgent.be',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ]
});