<template>

    <div class="banner is-dark">
        <div class="container flex flex-center">
            <section class="banner-content">
                <div>
                    <h1>一个前端</h1>
                    <p>知识分享网站</p>
                </div>
            </section>
            <div class="card">
                ChenyxJS
                <p class="details">乘风破浪，愿归来时和出发一样，不改初见模样</p>
            </div>
        </div>
    </div>

    <div class="open-source-wallper">
        <div class="open-source container">
            <div class="open-source-header">
                <h1>开源项目</h1>
            </div>
            <div class="card">
                <div class="card-body flex flex-middle flex-between">
                    <div class="card-content">
                        <h2>多端开源，<br>提升更多学习交流途径</h2>
                        <p>
                            提供了PC端、移动端、响应式的开源项目，也涉及前端、后端、以及全栈和项目部署。可以在<a href="https://github.com/ChenyxJS"
                                class="link">Github</a>、<a @click="toHome" class="link">ChenyxJS
                                博客</a>等途径免费获取这些项目的源代码。
                        </p>
                        <a href="https://github.com/ChenyxJS" class="btn">更多开源项目</a>
                    </div>
                    <div class="card-pc-view">
                        <img class="open-source-pc-img" src="/index/images/car/pc.png" alt="">
                    </div>
                    <div class="card-view">
                        <img class="open-source-img" src="" alt="">
                    </div>
                    <div class="open-source-trigger"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="ux container">
        <div class="ux-header">
            <h1>交互设计</h1>
        </div>
        <div class="card flex">
            <div class="card-left">
                <div class="card-body">
                    <h2>HTML + CSS3<br>实现好玩的交互效果</h2>
                    <p>
                        当我们在工作中大量编写表单、数据交互、业务逻辑的时候，早就忘了最纯粹的前端。
                        通过我的一点小小想法，希望能唤醒你最初的兴趣。
                    </p>
                    <a href="https://github.com/ChenyxJS" class="btn">更多交互效果</a>
                    <div class="link-group flex flex-middle">
                        <a href="">
                            <svg height="64" width="64" aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                                data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                                <path fill-rule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-right">
                <div class="cascade">
                    <div class="cascade-inner">
                        <img src="https://raw.githubusercontent.com/smallMote/BaseCSS/master/source/phone.jpg"
                            class="img" alt="">
                        <img src="https://raw.githubusercontent.com/smallMote/BaseCSS/master/source/phone.jpg"
                            class="img" alt="">
                        <img src="https://raw.githubusercontent.com/smallMote/BaseCSS/master/source/phone.jpg"
                            class="img" alt="">
                        <img src="https://raw.githubusercontent.com/smallMote/BaseCSS/master/source/phone.jpg"
                            class="img" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="card-group">
            <div class="card dot-card">
                <div class="card-body">
                    <div class="dot-box">
                        <span style="--i: 0; --x: 0; --y: 0">
                            <i class="ri-chat-smile-2-line"></i>
                        </span>
                        <span style="--i: 1; --x: 0; --y: 1">
                            <i class="ri-quill-pen-line"></i>
                        </span>
                        <span style="--i: 2; --x: 1; --y: 0">
                            <i class="ri-contrast-2-line"></i>
                        </span>
                        <span style="--i: 3; --x: -1; --y: 0">
                            <i class="ri-tools-line"></i>
                        </span>
                        <span style="--i: 4; --x: 0; --y: -1">
                            <i class="ri-code-s-slash-line"></i>
                        </span>
                        <span style="--i: 5; --x: -1; --y: -1">
                            <i class="ri-phone-line"></i>
                        </span>
                        <span style="--i: 6; --x: 1; --y: 1">
                            <i class="ri-rss-line"></i>
                        </span>
                        <span style="--i: 7; --x: 1; --y: -1">
                            <i class="ri-apple-line"></i>
                        </span>
                        <span style="--i: 8; --x: -1; --y: 1">
                            <i class="ri-github-line"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="card drawer-card">
                <div class="card-body">
                    <ul>
                        <li style="--i: 5">
                            <a href="#">html</a>
                        </li>
                        <li style="--i: 4">
                            <a href="#">css</a>
                        </li>
                        <li style="--i: 3">
                            <a href="#">vue</a>
                        </li>
                        <li style="--i: 2">
                            <a href="#">react</a>
                        </li>
                        <li style="--i: 1">
                            <a href="#">javascript</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="container flex flex-between flex-middle">
            <a @click="toHome" class="footer-item ChenyxJS-logo">
                ChenyxJS
            </a>
            <a href="" class="footer-item">
                <svg height="64" width="64" aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                    data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                    <path fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                    </path>
                </svg>
            </a>
            <a href="" class="footer-item">
                <img src="/index/images/csdn.png" alt="">
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

        return {}
    },
    methods:{
        toHome(){
            this.$router.push('/index/home')
        }
    }
})
</script>

<style scoped>
@import "/index/style/card.css";
@import "/index/style/dot.css";
@import "/index/style/main.css";
@import "/index/style/drawer.css";
@import "/index/style/index.css";
@import "/index/style/default.css";

body {
    background-color: #F5F8FA;
}

.container {
    margin: 0 auto;
    max-width: 1200px;
    background: transparent;
}
</style>