<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:39
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-16 21:58:50
-->
<template>
  <div class="home">
    <!-- 主内容区 -->
    <div class="article-content">
      <!-- 文章card -->
      <div class="article-card" v-for="item in dataList" key="item.id">
        <!-- 文章发布时间、类型 -->
        <div class="article-card-sec">
          <p>{{ $FormatDate(item.time) }}</p>
          <i class="iconfont icon-a-lianjielink">{{
            typeFilters(item.type)
          }}</i>
        </div>
        <!-- 文章内容 -->
        <div class="article-card-content">
          <div class="article-card-content_title">{{ item.title }}</div>
          <div class="article-card-content_content">{{ item.content }}</div>
          <div class="article-card-content_options">
            <i class="iconfont icon-a-fenxiangshare" style="color: #e6a23c"></i>
            <i class="iconfont icon-a-chakaneye" style="color: #56a6ff"></i>
            <i class="iconfont icon-a-lianjielink" style="color: #56a6ff"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧边栏 -->
    <div class="asider-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "home",
  setup() {
    const data = [
      {
        id: 102301,
        time: 9990023100,
        type: 1,
        title: "这是一个title",
        des: "这是一个描述",
        content: "这是一个内容",
      },
      {
        id: 100121,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content: "这是一个内容",
      },
      {
        id: 100121,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content: "这是一个内容",
      },
      {
        id: 101231,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content: "这是一个内容",
      },
      {
        id: 10221,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content: "这是一个内容",
      },
      {
        id: 1009,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content: "这是一个内容",
      },
    ];
    const dataList = reactive(data);

    return {
      dataList,
    };
  },
  methods: {
    typeFilters(code: Number) {
      return code == 1 ? "原创" : "转载";
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  .article-content {
    flex: 1;
    .article-card {
      width: 100%;
      padding: 10px;
      .article-card-sec {
        color: var(--text-second);
        p {
          font-size: 12px;
          display: inline-block;
          margin-right: 6px;
        }
        i {
          font-size: 12px;
        }
      }
      .article-card-content {
        border: var(--border);
        border-radius: 6px;
        padding: 10px;
        &_title {
          color: #fff;
          font-size: 18px;
          margin-bottom: 16px;
        }
        &_content {
          color: var(--text-second);
        }
        &_options {
          margin-top: 24px;
          i {
            border: var(--border);
            margin-right: 12px;
            padding: 6px;
            border-radius: 6px;
          }
          i:hover {
            transition: border-color 0.3s;
            border-color: var(--text-link);
          }
        }
      }
    }
  }
  .asider-content {
    width: 350px;
    min-height: var(--main-height);
  }
}
</style>
