<template>
  <div class="body">
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

    <div class="panel container">
      <div class="panel-header">
        <h1>开源项目</h1>
      </div>
      <div class="project-card card">
        <div class="card-body flex flex-middle flex-between">
          <div class="card-content">
            <h2>多端开源，<br />提升更多学习交流途径</h2>
            <p>
              提供了PC端、移动端、响应式的开源项目，也涉及前端、后端、以及全栈和项目部署。可以在<a
                href="https://github.com/ChenyxJS"
                class="link"
                >Github</a
              >、<a @click="toHome" class="link">ChenyxJS 博客</a
              >等途径免费获取这些项目的源代码。
            </p>
            <a href="https://github.com/ChenyxJS" class="btn">更多开源项目</a>
          </div>
          <div class="card-pc-view">
            <img
              class="open-source-pc-img"
              src="../../assets/images/pc.png"
              alt=""
            />
          </div>
          <div class="card-view">
            <img class="open-source-img" src="" alt="" />
          </div>
          <div class="open-source-trigger"></div>
        </div>
      </div>
    </div>

    <div class="panel container">
      <div class="panel-header">
        <h1>交互设计</h1>
      </div>
      <div class="ux-card card">
        <div class="card-body flex flex-middle flex-between">
          <div class="card-content">
            <h2>HTML + CSS3<br />实现好玩的交互效果</h2>
            <p>
              当我们在工作中大量编写表单、数据交互、业务逻辑的时候，早就忘了最纯粹的前端。
              通过我的一点小小想法，希望能唤醒你最初的兴趣。
            </p>
            <a href="https://github.com/ChenyxJS" class="btn">更多交互效果</a>
            <!-- <div class="link-group flex flex-middle">
              <a href="">
                <svg
                  height="64"
                  width="64"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </div> -->
          </div>
          <div class="card-right">
            <cascade />
          </div>
        </div>
      </div>
      <div class="card-group">
        <dot-card class="item" />
        <drawer-card class="item" />
      </div>
    </div>
    <div class="footer">
      <div class="container flex flex-between flex-middle">
        <a @click="toHome" class="footer-item ChenyxJS-logo"> ChenyxJS </a>
        <a href="" class="footer-item">
          <svg
            height="64"
            width="64"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            data-view-component="true"
            class="octicon octicon-mark-github v-align-middle"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <a href="" class="footer-item">
          <img src="../../assets/images/csdn.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import drawerCard from "./components/drawer-card.vue";
import dotCard from "./components/dot-card.vue";
import cascade from "./components/cascade.vue";
import { defineComponent, onMounted, ref } from "vue";
import { scrollMagicController } from "./js/index";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    drawerCard,
    dotCard,
    cascade,
  },
  setup() {
    onMounted(() => {
      // 定义控制器
      scrollMagicController();
    });
    // 实例化路由对象
    const router = useRouter();
    // 初始化跳转方法
    const toHome = ref();
    toHome.value = () => {
      router.push("/blog/home");
    };
    return { toHome };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}

.link {
  text-decoration: none;
  color: #009dff;
  font-weight: 400;
}
.btn {
  color: #fff;
  background-color: #009dff;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px #009dff;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s ease;
}
.btn:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 30px #009dff;
}

.flex {
  display: flex;
}
.flex.flex-middle {
  align-items: center;
}
.flex.flex-center {
  justify-content: center;
}
.flex.flex-between {
  justify-content: space-between;
}

.body {
  background-color: #f5f8fa;

  .container {
    margin: 0 auto;
    max-width: 1200px;
    background: transparent;
  }

  .card {
    min-height: 300px;
    max-width: 300px;
    border-radius: 0.625rem;
    box-shadow: 0px 0px 20px 0px rgb(76 87 125 / 2%);
    background-color: #ffffff;
    overflow: hidden;
  }

  /* banner begin */
  .banner {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .banner .container {
    width: 100%;
    position: relative;
  }

  .banner .card,
  .banner-content {
    max-width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .banner.is-dark {
    color: #fff;
    background: black;
    .card {
      color: #fff;
      background: black;
      font-size: 72px;
      font-weight: bolder;
      letter-spacing: 6px;
      width: 50%;
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      .details {
        font-size: 20px;
      }
    }

    .banner-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  /* banner end */

  .panel {
    width: 100%;
    margin-bottom: 60px;

    .panel-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .ux-card,
    .project-card {
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
      .card-body {
        position: relative;
      }
      .card-content {
        text-align: left;
        max-width: 300px;
        padding: 30px;
        p {
          color: #757575;
          margin: 50px 0;
          font: 400 1.332rem/2rem "PingFang SC", "Microsoft YaHei",
            "Microsoft JhengHei", "黑体", arial, "STHeiti", "\5b8b\4f53";
          font-weight: lighter;
        }
      }
      .card-pc-view {
        .open-source-pc-img {
          max-width: 400px;
        }
      }
      .card-right {
        width: 60%;
        background: url(../../assets/images/home-bg.png) center top / 165%
          no-repeat fixed;
      }
    }
    .card-group {
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 10px));
      column-gap: 20px;
      .item {
        border-radius: 0.625rem;
      }
    }
  }
  .footer {
    padding: 30px 0;
    background-color: #fff;
    .footer-item {
      color: initial;
      text-decoration: none;
    }
    .ChenyxJS-logo {
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }
}

// 移动端适配
@media (max-width: 768px) {
  // banner
  .banner.is-dark .container {
    padding: 20px;
    .card {
      min-height: 200px;
      font-size: 20px;
      .details {
        font-size: 14px;
      }
    }
  }
  // panel
  .panel {
    .ux-card {
      .card-body {
        display: flex;
        flex-direction: column;
        .card-right {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .project-card {
      display: flex;
      flex-direction: column;
    }
    .card-group {
      display: flex !important;
      flex-direction: column;

      .item{
        width: 100%;
        height: 450px;
        margin-bottom: 20px;
      }
    }
  }
  // footer
  .footer .container {
    justify-content: center;
    .footer-item:first-child {
      display: none;
    }
    .footer-item:nth-child(3) {
      display: none;
    }
    .footer-item:last-child {
      display: none;
    }
  }
}
</style>
