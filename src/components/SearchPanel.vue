<!--
 * @Author: chenyx
 * @Date: 2023-03-30 17:15:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-30 22:50:16
 * @FilePath: /chenyxjs-blog/src/components/SearchPanel.vue
-->
<template>
  <el-collapse-transition>
    <div class="wrapper" v-show="isShow">
      <div>
        <div class="search-box">
          <div class="history_icon_wrap">
            <div class="search-hotkey">历史搜索</div>
            <span @click="clearHistory">
              <img
                src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/icon-delete.716ad938.svg"
                alt=""
              />
            </span>
          </div>
          <div class="search-keys history">
            <span
              @click="search(item)"
              v-for="(item, index) in headerSearchStore.searchHistoryList"
              :key="index"
              >{{ item }}
              <div
                @click.stop="headerSearchStore.deleteSearchHistory(item)"
                class="delete-icon"
              ></div>
            </span>
          </div>
        </div>
        <div class="search-box">
          <div class="search-hotkey">热门搜索</div>
          <div class="search-keys">
            <span
              @click="search(item.value)"
              v-for="(item, index) in searchHotList"
              :key="item.id"
            >
              <a>{{ item.value }}</a>
            </span>
          </div>
        </div>
        <!-- <div class="search-box">
          <div class="search-hotkey">趋势搜索</div>
          <div class="search-keys">
            <span
              @click="search(item.value)"
              v-for="(item, index) in searchExtendKeys"
              :key="item.id"
            >
              <a>{{ item.value }}</a>
            </span>
          </div>
        </div> -->
      </div>
    </div>
  </el-collapse-transition>
</template>

<script setup lang="ts">
import { useHeaderSearchStroe, SearchKey } from "@/store/modules/headerSearch";
import { onMounted } from "vue";
const emit = defineEmits(["search"]);
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});
const headerSearchStore = useHeaderSearchStroe();
let searchHotList = headerSearchStore.searchHotList as Array<SearchKey>;

onMounted(() => {
  headerSearchStore.initSearchHistory();
});
function clearHistory() {
  headerSearchStore.clearSearchHistory();
}

function search(keywords: string) {
  emit("search", keywords);
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 294px;
  background-color: #262f33;
  border-radius: 0 0 4px 4px;
  padding-bottom: 10px;
}

.search-hotkey {
  font-size: 14px;
  color: #fff;
  line-height: 22px;
  padding: 10px 10px 0;
  font-weight: 500;
}

.search-keys {
  display: flex;
  flex-wrap: wrap;
}

.search-keys span {
  margin: 10px;
  border-radius: 4px;
  color: #fff;
}
.history span {
  padding: 5px 8px;
  background-color: #f1f2f5;
  color: #000;
  position: relative;
  cursor: pointer;
}
.history span:hover {
  color: #0052d9;
}
.history span:hover .delete-icon {
  content: "";
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  cursor: pointer;
  background: url(https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/tag-close.c783b19d.svg)
    center no-repeat;
}
.search-keys span a {
  color: #fff;
}

.search-keys span a:hover {
  color: #0052d9;
}

.history_icon_wrap {
  display: flex;
  span {
    position: relative;
    top: 12px;
    cursor: pointer;
  }
}
</style>
