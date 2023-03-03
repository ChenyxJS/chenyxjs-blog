/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:33:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-03 19:04:29
 * @FilePath: /chenyxjs-blog/src/store/modules/category.ts
 */
import { defineStore } from "pinia";
import { categories } from "@/utils/base-data";
import { category } from "@/interface/category";
import { reactive, ref, Ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  const nowCategory: Ref<number> = ref(0);
  const category: category[] = reactive(categories);

  function getNowCategory(): Ref<number> {
    return nowCategory;
  }
  function getCategory() {
    return category;
  }
  
 


  function changeCategory(id: number) {
    // 改变选择分类后跳转到文章列表页面，并请求对应的文章列表
    category.forEach((item) => {
      if (item.id === id) {
        item.active = true;
        nowCategory.value = id
      } else {
        item.active = false;
      }
    });
  }
  return {
    getNowCategory,
    changeCategory,
    getCategory,
  };
});
