<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:39
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-11-04 22:13:24
-->
<template>
  <div class="home">
    <!-- 主内容区 -->
    <ariticle-content @getHeight="setHeight" />
    <!-- 右侧边栏 -->
    <div class="asider-content">
      <div class="asider-articles">
        <div class="asider-article-card" v-for="item in dataList" key="item.id">
          <h4>
            <a class="asider-link" href="">{{ item.title }}</a>
          </h4>
          <section>{{ item.content }}</section>
          <div class="asider-article-card_options">
            <p class="iconfont icon-a-chakaneye" style="color: #56a6ff">
              <span>111</span>
            </p>
            <p class="iconfont icon-dianzan" style="color: #e6a23c">
              <span>111</span>
            </p>
            <p class="iconfont icon-a-pinglunliaotian" style="color: #56a6ff">
              <span>111</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onBeforeMount, ref } from "vue";
import AriticleContent from "./components/AriticleContent.vue";
// import { getJuejinData} from '@/api/Juejin/index'

export default defineComponent({
  name: "home",
  setup() {
    onBeforeMount(() => {
      // 获取文章列表高度
    }),
      onMounted(() => {
        // getJuejinData().then(res=>{
        //   console.log(res)
        // })
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
    var windowHeight = ref();
    const dataList = reactive(data);
    function setHeight(height) {
      console.log(`output->height`, height);
      windowHeight.value = height;
    }

    return {
      dataList,
      windowHeight,
      setHeight,
    };
  },
  methods: {
    typeFilters(code: Number) {
      return code == 1 ? "原创" : "转载";
    },
  },
  components: { AriticleContent },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  min-height: var(--main-height);
  overflow: hidden;
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  .asider-content {
    margin-left: 24px;
    width: 350px;
    min-height: var(--main-height);
    .asider-articles {
      height: calc(100vh - 60px);
      overflow: hidden auto;
      .asider-article-card {
        border-bottom: var(--border);
        margin-right: 30px;
        padding-bottom: 16px;
        .asider-link {
          color: #fff;
        }
        section {
          padding-bottom: 20px;
          color: var(--text-second);
          font-size: 14px;
        }
        .asider-article-card_options {
          p {
            display: inline-block;
            font-size: 14px;
            letter-spacing: 2px;
            border: var(--border);
            margin-right: 12px;
            padding: 4px 6px;
            border-radius: 6px;
            cursor: pointer;
            span {
              color: var(--text-primary);
              font-weight: 600;
            }
          }

          p:hover {
            transition: border-color 0.3s;
            border-color: var(--text-link);
          }
        }
      }
    }
  }
}
</style>
