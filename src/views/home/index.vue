<template>
  <div class="home">
    <div class="article-content">
      <div class="article-card" v-for="item in dataList" key="item.id">
        <div class="article-card-sec">
          <p>{{ $FormatDate(item.time) }}</p>
          <i class="iconfont icon-a-lianjielink"></i>
        </div>
      </div>
    </div>
    <div class="asider-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
    name:"home",
    setup() {
      const data = [
        {
          id: 1001,
          time: 100000,
          title: "这是一个title",
          des: "这是一个描述",
          content: "这是一个内容",
        },
        {
          id: 1001,
          time: 100000,
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
})
</script>

<style lang="scss" scoped>
.home{
    display: flex;
    .article-content{
        flex: 1;
        .article-card{
            width: 100%;
            padding: 10px;
            .article-card-sec{
                p{
                    display: inline-block;
                    margin-right: 5px;
                }
            }
        }
    }
    .asider-content{
        background-color: #fff;
        width: 350px;
        min-height: var(--main-height);
    }
}
</style>
