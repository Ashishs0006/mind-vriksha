// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: 'localhost',
//     port: 5173,
//     hmr: {
//       protocol: 'ws',
//       host: 'localhost',
//       port: 5173,
//     }
//   }
//   // optimizeDeps: {
//   //   include: ['react-helmet-async'],
//   // },
//   // ssr: {
//   //   noExternal: ['react-helmet-async'],
//   // },
// })

// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})