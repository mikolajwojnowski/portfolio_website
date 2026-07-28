import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User-site Pages is served from domain root: https://username.github.io/
  base: '/',
})
