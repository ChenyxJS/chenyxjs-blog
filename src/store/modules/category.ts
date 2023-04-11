/*
 * @Author: chenyx
 * @Date: 2023-03-02 20:33:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 18:41:06
 * @FilePath: /chenyxjs-blog/src/store/modules/category.ts
 */
import { defineStore } from "pinia";
import { reactive, ref, Ref } from "vue";
import router from "@/router";
import { getTagList } from "@/api/tag";
import { Tag } from "@/api/tag/types";

export interface Category {
  id: number;
  name: string;
  active: boolean;
}

function generateCategory(tags: Tag[]): Category[] {
  let list: Category[] = [];
  tags.forEach((tag) =>
    list.push({
      id: tag.tagId,
      name: tag.tagName,
      active: false,
    })
  );
  return list;
}

export const useCategoryStore = defineStore("category", () => {
  const nowCategory: Ref<number> = ref(0);
  let category: Category[] = reactive([
    {
      id: 0,
      name: "全部",
      active: true,
    },
  ]);

  function getCategory() {
    getTagList({
      page: 1,
      limit: 0,
    } as PageQuery).then(({ data }) => {
      if (data.success) {
        generateCategory(data.root).forEach((temp) => {
          const c: Category | undefined = category.find(
            (item) => item.id === temp.id
          );
          if (!c) {
            category.push(temp);
          }
        });
      } else {
        category = [
          {
            id: 0,
            name: "全部",
            active: true,
          },
        ];
      }
    });
  }

  function changeCategory(id: number) {
    // 改变选择分类后跳转到文章列表页面，并请求对应的文章列表
    category.forEach((item) => {
      if (item.id === id) {
        item.active = true;
        nowCategory.value = id;
        router.push({ path: "/blog" });
      } else {
        item.active = false;
      }
    });
  }
  return {
    category,
    nowCategory,
    changeCategory,
    getCategory,
  };
});
