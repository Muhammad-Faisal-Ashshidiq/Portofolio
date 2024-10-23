import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portofolio/",
  plugins: [react()],
  plugins: [visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // mengelompokkan semua dependency node_modules ke dalam chunk 'vendor'
          }
        }
      }
    }
  },
})

