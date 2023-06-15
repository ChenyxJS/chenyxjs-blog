<!--
 * @Author: chenyx
 * @Date: 2023-03-23 15:48:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-13 16:43:55
 * @FilePath: /chenyxjs-blog/src/Layout/components/Footer.vue
-->
<template>
    <!-- 底部copyright -->
    <div
        class="footer copyright"
        :class="{ footer_columm: appStore.deviceStatus.isMobile }"
    >
        <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45020302000255"
            target="_blank"
        >
            <img
                src="@/assets/images/beian.png"
                style="float: left; margin-right: 5px; width: 14px"
            />
            <span>{{ NS }}</span>
        </a>
        <p>
            <a href="https://beian.miit.gov.cn/" target="_blank">{{ ICP }} </a>
        </p>
        <p>© 2022 - 2023 Chenyx 版权所有</p>
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
    padding: 10px 0;
    color: #fff;
    font-size: 12px;
    border-top: 1px #1f1f23 solid;
}
.footer p {
    margin: 0;
}
.footer_columm {
    flex-direction: column;
}
</style>
