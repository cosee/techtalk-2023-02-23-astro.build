import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs()],
  // Run in a server
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  // Generate static pages
  // output: "static"
});
