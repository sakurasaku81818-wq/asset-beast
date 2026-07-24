import { defineConfig } from 'vite'

export default defineConfig({
  base: '/asset-beast/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})