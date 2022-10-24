<template>
  <div class="article-content">
    <!-- 文章card -->
    <div class="article-card" v-for="item in dataList" key="item.id">
      <!-- 文章发布时间、类型 -->
      <div class="article-card-sec">
        <p>{{ $FormatDate(item.time) }}</p>
        <i class="iconfont icon-a-lianjielink">{{ typeFilters(item.type) }}</i>
      </div>
      <!-- 文章内容 -->
      <div class="article-card-content" @click="toArticle">
        <h1 class="article-card-content_title">{{ item.title }}</h1>
        <section class="article-card-content_content">
          {{ item.content }}
        </section>
        <div class="article-card-content_options">
          <i class="iconfont icon-a-fenxiangshare" style="color: #e6a23c"></i>
          <i class="iconfont icon-a-chakaneye" style="color: #56a6ff"></i>
          <i class="iconfont icon-a-lianjielink" style="color: #56a6ff"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { scrollBehavior } from "@/utils/scrollAnimations/scrollShow";

export default defineComponent({
  name: "home",
  setup() {
    onMounted(() => {
      const elList: HTMLCollectionOf<Element> =
        document.getElementsByClassName("article-card");
      scrollBehavior(elList);
    });

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
        content:
          "这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了",
      },
      {
        id: 1002321,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content:
          "这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了",
      },
      {
        id: 1990121,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content:
          "这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了",
      },
      {
        id: 1990222121,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content:
          "这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了",
      },
      {
        id: 199012142,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content:
          "这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了",
      },
      {
        id: 1992121,
        time: 6890099800,
        type: 2,
        title: "这是一个title",
        des: "这是一个描述",
        content:
          "这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了",
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
    toArticle() {
      this.$router.push("/index/article");
    },
  },
});
</script>

<style lang="scss" scoped>
.article-content {
  flex: 1;
  height: 100vh;
  overflow: auto;
  .article-card {
    width: 100%;
    padding: 10px;
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.2s,
      transform 0.6s cubic-bezier(0.5, 0, 0, 1) 0.2s;

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
      cursor: pointer;
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
.scrollShow {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
