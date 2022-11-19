import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { svgBuilder } from "./src/utils/svgBuilder"



const srcPath = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8085,
    open: true,
    proxy: {
      '/api': {
        target: "http://127.0.0.1:8088",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    svgBuilder('./src/assets/svg/'),
  ],
  resolve: {
    alias: {
      '@': srcPath
    }
  },
  build:{
    rollupOptions: {
      output: {
        // chunkFileNames: "asstes/js/[name]-[hash].js",
        // entryFileNames: "asstes/js/[name]-[hash].js",
        // assetFileNames: "asstes/[ext]/[name]-[hash].[ext]",
        manualChunks: id => {
          // 使用函数形式时，每个解析的模块 id 都会传递给函数。
          // 如果返回字符串，则模块及其所有依赖项将添加到具有给定名称的手动块中。
          // 例如，这将创建一个vendor包含所有依赖项的块node_modules：
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    }
  }
})
