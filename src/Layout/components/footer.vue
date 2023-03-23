<!--
 * @Author: chenyx
 * @Date: 2023-03-23 15:48:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-23 17:25:24
 * @FilePath: /chenyxjs-blog/src/Layout/components/footer.vue
-->
<template>
  <!-- 底部copyright -->
  <div
    class="footer copyright"
    :class="{ footer_columm: appStore.deviceStatus.isMobile }"
  >
    <!-- <a href="https://www.beian.gov.cn/" target="_blank">
      <img style="vertical-align: middle;" src="@/assets/images/beian.png" />
      <span>公网安备：xxxxxxxxx</span>
    </a> -->
    <a href="https://beian.miit.gov.cn/" target="_blank"
      >ICP备案号：桂ICP备2023002009号-1
    </a>
    <p>© 2023 chenyx.site 版权所有</p>
  </div>
</template>

<script setup lang="ts">
import { useAppStroe } from "@/store/modules/app";

const appStore = useAppStroe();
</script>

<style scoped>
.footer {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--bg-primary);
}
.footer p {
  margin: 0;
}
.footer_columm {
  flex-direction: column;
}
</style>
