import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost', // Target the backend server
        changeOrigin: true,
        rewrite: (path) => path, // Do not modify the path
      },
    },
  },
});