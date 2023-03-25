<!--
 * @Author: chenyx
 * @Date: 2023-03-23 15:48:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-24 18:30:29
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
      <span>{{NS}}</span>
    </a> -->
    <p>
      <a href="https://beian.miit.gov.cn/" target="_blank">{{ ICP }} </a>
    </p>
    <p>© 2023 chenyx.site 版权所有</p>
  </div>
</template>

<script setup lang="ts">
import { webBaseInfo } from "@/config";
import { useAppStroe } from "@/store/modules/app";

const appStore = useAppStroe();
const { ICP, NS } = webBaseInfo;
</script>

<style scoped>
.footer {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--bg-primary);
  color: #fff;
}
.footer p {
  margin: 0;
}
.footer_columm {
  flex-direction: column;
}
</style>
