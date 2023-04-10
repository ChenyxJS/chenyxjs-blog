/*
 * @Author: chenyx
 * @Date: 2023-03-30 19:23:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-10 23:40:16
 * @FilePath: /chenyxjs-blog/src/store/modules/headerSearch.ts
 */
import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import router from "@/router";

export interface SearchKey {
  id: number;
  value: string;
}

export const useHeaderSearchStroe = defineStore("headerSearch", {
  state() {
    // 搜索关键词
    let keywords: Ref<string> = ref("");
    // 历史搜索列表
    let searchHistoryList = ref(new Set<string>());
    // 热点搜索列表
    let searchHotList = ref([
      {
        id: 0,
        value: "Vue",
      },
      {
        id: 1,
        value: "React",
      },
      {
        id: 2,
        value: "TypeScript",
      },
    ] as Array<SearchKey>);
    return {
      searchHistoryList,
      searchHotList,
      keywords,
    };
  },
  actions: {
    initSearchHistory(): Set<string> {
      let history_search = new Set<string>();
      const history = localStorage.getItem("searchHistoryList");
      if (history && history.length > 0) {
        const list = history.split("_");
        list.forEach((item) => {
          if (item.length > 0) {
            history_search.add(item);
          }
        });
        this.searchHistoryList = history_search;
      }
      return history_search;
    },
    changeKeywords(keywords: string) {
      if (keywords.length > 0) {
        this.searchHistoryList.add(keywords);
      }
      this.changeLocalHistory();
      this.keywords = keywords;
      router.push({ path: "/home" });
    },
    changeLocalHistory() {
      let history_search_str = "";
      this.searchHistoryList.forEach((item) => {
        history_search_str = history_search_str.concat(item + "_");
      });
      localStorage.setItem("searchHistoryList", history_search_str);
    },
    /**
     * @description: 删除一个历史搜索记录
     * @return {*}
     */
    deleteSearchHistory(keywords: string) {
      this.searchHistoryList.delete(keywords);
      this.changeLocalHistory();
    },
    /**
     * @description: 清空搜索历史
     * @return {*}
     */
    clearSearchHistory() {
      this.searchHistoryList.clear();
      localStorage.setItem("searchHistoryList", "");
    },
  },
});
