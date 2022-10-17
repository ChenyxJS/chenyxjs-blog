import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {svgBuilder}  from "./src/utils/svgBuilder"



const srcPath = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 8888,
    open: true,
    proxy:{
      '/api':{
        target:"http://localhost:8888",
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  },
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
