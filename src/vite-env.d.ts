/*
 * @Author: chenyx
 * @Date: 2022-12-28 18:57:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 02:30:20
 * @FilePath: /chenyxjs-blog/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
    VITE_APP_TITLE: string;
    VITE_APP_PORT: string;
    VITE_APP_BASE_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
