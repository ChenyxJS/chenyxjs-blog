import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {svgBuilder}  from "./src/utils/svgBuilder"



const srcPath = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/assets/svg/')
  ],
  resolve: {
    alias: {
      '@': srcPath
    }
  }
})
