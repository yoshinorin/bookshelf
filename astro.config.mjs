import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import { config } from './src/config.ts';

const port = parseInt(process.env.PORT || '4321', 10);

export default defineConfig({
  site: config.site.url,
  trailingSlash: 'always',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port,
    host: true,
  },
});
