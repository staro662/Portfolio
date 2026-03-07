import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pantheon: resolve(__dirname, 'pantheon.html'),
        adhd: resolve(__dirname, 'src/components/projects/adhd.html'),
        greekanimal: resolve(__dirname, 'src/components/projects/greekanimal.html')
      },
    },
  },
})
