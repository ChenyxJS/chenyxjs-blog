/*
 * @Author: chenyx
 * @Date: 2023-03-11 10:58:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-11 13:43:40
 * @FilePath: /chenyxjs-blog/src/store/modules/keywords.ts
 */
import { defineStore, } from "pinia";
import { reactive, Ref, ref } from "vue";
import router from "@/router";

export const useKeyWordsStore = defineStore("keywords", () => {
  const keywords:Ref<string> = ref('')

  function changeKeywords(keyword: string) {
    keywords.value = keyword;
    router.push({ path: "/blog/home" });
  }

  return { keywords, changeKeywords };
});
