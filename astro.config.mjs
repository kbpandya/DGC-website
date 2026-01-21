// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danvillegastro.com',
  image: {
    domains: ['placehold.co'],
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});