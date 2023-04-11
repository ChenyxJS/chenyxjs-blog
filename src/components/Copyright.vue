<template>
  <div class="copyright">
    <h4>Copyright</h4>
    <section>
      <p>作者：Chenyx</p>
      <p>
        <a href="https://beian.miit.gov.cn/" target="_blank">{{ ICP }} </a>
      </p>
      <p>
        <img
          src="@/assets/images/beian.png"
          style="float: left; margin-right: 5px"
        />
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45020302000255"
          target="_blank"
          >{{ NS }}
        </a>
      </p>
      <p>© 2022 - 2023 Chenyx 版权所有</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { webBaseInfo } from "@/config";

const { ICP, NS } = webBaseInfo;
</script>

<style lang="scss" scoped>
.copyright section {
  color: var(--text-second);
  font-size: 14px;
}
</style>
