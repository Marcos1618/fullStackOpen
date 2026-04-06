import { defineConfig } from 'vite'
const PORT = process.env.PORT
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:3002`,
        changeOrigin: true,
      },
    },
  },
})
