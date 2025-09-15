// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  build: {
    //assetsPrefix: './',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://lance-kluge.github.io",
  trailingSlash: "never",
  base: "/personal_Portfolio/",
});