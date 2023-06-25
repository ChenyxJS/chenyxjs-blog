<!--
 * @Author: chenyx
 * @Date: 2023-04-11 18:41:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-25 22:32:25
 * @FilePath: /chenyxjs-blog/src/views/home/index.vue
-->
<script setup lang="ts">
import RightPanel from "./RightPanel.vue";
</script>

<template>
    <div class="home">
        <div class="panel introduction">
            <div class="left">
                <h3>👋欢迎来到我的个人网站</h3>
                <h1>Call me Chenyx</h1>
                <h3>
                    <span>And I'm a</span>
                    <vuetyped
                        class="identity"
                        :strings="['前端开发工程师', '技术文章分享者']"
                        :loop="true"
                        :startDelay="300"
                        :typeSpeed="100"
                        :backSpeed="50"
                    >
                        <div class="typing"></div>
                    </vuetyped>
                </h3>
                <p>
                    我是Chenyx,
                    我热爱开发，设计，创新，享受生活，以及在未知领域中探索。
                </p>
            </div>
            <div class="right">
                <profile-card></profile-card>
            </div>
        </div>
        <div class="panel">
            <RightPanel></RightPanel>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    .panel {
        width: 100%;
        margin-bottom: 70px;
    }
}
.home .introduction {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    .left {
        width: 50%;
        margin-top: 70px;
        padding-left: 70px;
        font-size: 1rem;
        h3 {
            font-size: 3rem;
            font-weight: 700;
            margin: -3px 0;
            overflow: hidden;
        }

        h3:nth-of-type(2) {
            font-size: 2rem;
            line-height: 2rem;
            span {
                float: left;
                margin-right: 16px;
            }
        }
        p {
            display: inline-block;
            vertical-align: top;
            text-decoration: inherit;
            font-size: 16px;
            color: rgb(161 161 170);
        }
    }
    .right {
        width: 50%;
        padding-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 729px) {
    .panel {
        height: auto !important;
        display: flex;
        flex-direction: column;
    }
    .home .introduction {
        flex-direction: column-reverse;
        .left {
            width: 100%;
            max-width: 90%;
            padding-left: 20px;
            width: 100%;
            h3 {
                font-size: 2rem;
                font-weight: 700;
                margin: -3px 0;
                overflow: hidden;
            }
            h3:nth-of-type(2) {
            font-size: 1.5rem;

        }
        }
        .right {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
.identity {
    color: #b7b2a9;
}
</style>
