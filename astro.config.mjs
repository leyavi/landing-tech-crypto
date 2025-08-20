// astro.config.ts
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  build: { assetsPrefix: './' }, // fuerza ./_astro/... en CSS/JS importados
  integrations: [react(), tailwind()],
})
