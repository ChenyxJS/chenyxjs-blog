import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {svgBuilder}  from "./src/utils/svgBuilder"



const srcPath = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 8088,
    open: true,
    proxy:{
      '/api':{
        target:"http://127.0.0.1:8088",
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
