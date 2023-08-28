<!--
 * @Author: chenyx
 * @Date: 2023-03-30 17:15:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-28 16:38:21
 * @FilePath: /chenyxjs-blog/src/components/SearchPanel.vue
-->

<script setup lang="ts">
import { useHeaderSearchStroe, SearchKey } from "@/store/modules/headerSearch";
import { inject, onMounted, toRef } from "vue";
import Dialog from "./Dialog/Dialog.vue";
import key from "keymaster";

const emit = defineEmits(["search", "close"]);
const props = defineProps({
    isShow: {
        type: Boolean,
        default: false,
    },
});
const headerSearchStore = useHeaderSearchStroe();
let searchHotList = headerSearchStore.searchHotList as Array<SearchKey>;
const keyValue = inject("searchValue", toRef);

onMounted(() => {
    headerSearchStore.initSearchHistory();
    // 绑定搜索框关闭事件
    key("esc", closeDialog);
});
function clearHistory() {
    headerSearchStore.clearSearchHistory();
}

function search(keywords: string) {
    emit("search", keywords);
}
function closeDialog() {
    emit("close");
}
</script>

<template>
    <Dialog
        width="35%"
        minWidth="300px"
        title="搜索博客"
        :isShow="isShow"
        @close="closeDialog"
    >
        <template v-slot:content>
            <div class="wrapper">
                <div class="search-box">
                    <form
                        class="search-input"
                        @submit="search(keyValue.toString())"
                    >
                        <input
                            class="input"
                            type="text"
                            v-model="keyValue"
                            placeholder="请输入关键词"
                        />
                    </form>
                    <div class="history_icon_wrap">
                        <div class="search-hotkey">历史搜索</div>
                        <span @click="clearHistory">
                            <base-icon icon-name="icon-shanchu1"></base-icon>
                        </span>
                    </div>
                    <div class="search-keys history">
                        <span
                            @click="search(item)"
                            v-for="(
                                item, index
                            ) in headerSearchStore.searchHistoryList"
                            :key="index"
                            >{{ item }}
                            <div
                                @click.stop="
                                    headerSearchStore.deleteSearchHistory(item)
                                "
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

            </div>
        </template>
        <template v-slot:footer>
            <div class="key-tip">
                    <div class="tip">
                        <span class="left">esc</span>
                        <span class="right">关闭</span>
                    </div>
                    <div class="tip">
                        <span class="left">
                            <base-icon iconName="icon-c181huiche"></base-icon>
                        </span>
                        <span class="right">搜索</span>
                    </div>
                </div>
        </template>
    </Dialog>
</template>

<style lang="scss" scoped>
.wrapper {
    border-radius: 0 0 4px 4px;
    padding-bottom: 10px;
}
.search-input {
    display: flex;
    justify-content: center;
    .input {
        width: 99%;
        height: 50px;
        background: transparent;
        border: 2px solid #30363d;
        outline: none;
        padding: 0 8px;
        color: var(--text-navbar);
        border-radius: 6px;
        transition: all 0.5s ease;
    }
    .input:focus {
        border: 2px solid #009dff;
    }
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
    color: #009dff;
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
    color: #009dff;
}

.history_icon_wrap {
    display: flex;
    span {
        position: relative;
        top: 12px;
        cursor: pointer;
    }
}
.key-tip {
    border-top: 1px rgba(84, 84, 84, 0.65) solid;
    display: flex;
    justify-content: space-around;
    color: rgba(235, 235, 235, 0.6);
    background-color: #000;
    padding: 10px;
    padding-top: 5px;
    border-radius: 0 0 10px 10px;
    .tip {
        margin-top: 10px;
        .left {
            margin-right: 5px;
            border-radius: 3px;
            padding: 1px 3px;
        }
        .right {
            font-size: 12px;
        }
    }
}
</style>
