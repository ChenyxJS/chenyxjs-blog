/*
 * @Author: chenyx
 * @Date: 2022-12-28 18:57:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-24 19:10:43
 * @FilePath: /chenyxjs-blog/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { svgBuilder } from "./src/utils/svgBuilder";
import postCssPxToRem from "postcss-pxtorem"


const srcPath = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8085,
    open: true,
    proxy: {
      "/api": {
        // target: "http://localhost:8080",
        target: "http://www.chenyx.site:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [vue(), svgBuilder("./src/assets/svg/")],
  resolve: {
    alias: {
      "@": srcPath,
    },
  },
  css:{
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75, // 1rem的大小
          propList: ['fort-size'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  build: {
    assetsDir: "./assets",
    chunkSizeWarningLimit: 500,
    minify: "terser",
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    terserOptions: {
      compress: {
        // warnings: false,
        drop_console: false, //打包时删除console
        drop_debugger: true, //打包时删除 debugger
        pure_funcs: ["console.log"],
      },
      output: {
        // 去掉注释内容
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        manualChunks: (id) => {
          // 使用函数形式时，每个解析的模块 id 都会传递给函数。
          // 如果返回字符串，则模块及其所有依赖项将添加到具有给定名称的手动块中。
          // 例如，这将创建一个vendor包含所有依赖项的块node_modules：
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});


