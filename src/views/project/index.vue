<!--
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-20 23:28:29
-->
<template>
    <div class="project flex flex-column flex-sc">
        <div class="git-calendar flex flex-column flex-cc">
            <p>Github贡献热力图</p>
            <img
                src="https://ghchart.rshah.org/ChenyxJS"
                alt="ChenyxJS's Github chart"
            />
        </div>
        <div class="project-wrapper">
            <div
                v-for="project in state.projectList"
                :key="project.name"
                class="project-item"
            >
                <div class="project-item__img">
                    <img :src="project.img" />
                </div>
                <div class="info">
                    <a href="/" class="project-item__title">
                        <h2>{{ project.name }}</h2>
                        <div class="tags flex flex-warp">
                            <p v-for="tag in project.tags" :key="tag.name">
                                {{ tag.name }}
                            </p>
                        </div>
                        <h3>{{ project.desc }}</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
    projectList: [
        {
            name: "iHRM人力资源管理",
            desc: "iHRM是一款基于SaaS平台的人力资源管理系统， 企业通过该系统可以完成员工管理、审批管理、考勤管理、社保公积金管理、薪资管理等功能，为企业的人力资源管理提供一站式解决方案。",
            img: "https://doc.panjingyi.top/blog/202207020048169.jpg",
            tags: [
                {
                    name: "Vue3",
                },
                {
                    name: "Pinia",
                },
                {
                    name: "Typesrcipt",
                },
            ],
        },
        {
            name: "小兔鲜儿",
            desc: "该项目实现了电商平台主线业务功能，电商首页、一级分类、二级分类、商品详情、购物车、结算、支付、个人中心、订单管理、订单详情。项目采用前后端分离模式，前台使用了VUE3.0技术栈构建，自己封装的UI组件库，接入了QQ登录，支付宝支付业务，以及前端SKU解决方案，本地线上购物车解决方案。",
            img: "https://doc.panjingyi.top/blog/202207020048621.jpg",
            tags: [
                {
                    name: "Vue3",
                },
                {
                    name: "NestJs",
                },
                {
                    name: "Typesrcipt",
                },
            ],
        },
        {
            name: "智能看板",
            desc: "智能看板是一个数据可视化项目，通过折线图、K线图、柱状图等图表形式归纳汇总大量数据，以实现更加直观的数据表达效果。学员通过学习该项目，能够掌握数据可视化、异步编程、高性能数据缓存等技术解决方案。",
            img: "https://doc.panjingyi.top/blog/202207020050313.jpeg",
            tags: [
                {
                    name: "Java",
                },
                {
                    name: "Springboot",
                },
                {
                    name: "Mybatis Plus",
                },
            ],
        },
        {
            name: "闲云旅游",
            desc: "闲云旅游是一个旅游服务网站，主要功能包括机票酒店预定、目的地景点购票、热门旅游攻略资讯等。项目采用前后端分离模式开发，前台使用Vue技术栈中的服务端渲染框架Nuxt.js开发，让页面效果以超快的方式展示在用户面前，Nuxt还支持页面自动静态化，可大大节省服务器资源。",
            img: "https://doc.panjingyi.top/blog/202207012315201.jpeg",
            tags: [
                {
                    name: "Element Plus",
                },
                {
                    name: "Echarts",
                },
            ],
        },
    ],
});
</script>

<style lang="scss" scoped>
.project {
    width: 100%;
    height: 100%;
}
.git-calendar {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    background: rgb(#1f242d, 0.6);
    box-shadow: 2px 3px 20px 0 rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    padding: 20px 10px;
    p {
        font-size: 20px;
    }
    img {
        width: 100%;
    }
}
.project-wrapper {
    margin: 20px auto 0;
    max-width: 1126px;
}
.project-item {
    margin: 80px auto 100px;
    position: relative;
    padding: 0 40px;
    display: block;
}
.project-item:nth-child(even) {
    text-align: right;
    .info {
        right: 620px;
    }
}
.project-item:nth-child(odd) {
    text-align: left;
    .project-item__img {
        margin-right: 500px;
    }
    .info {
        left: 620px;
    }
}
.project-item__img {
    display: inline-block;
    width: 600px;
    height: 340px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    cursor: pointer;
    border-radius: 5px;
}
.project-item__img:after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(27, 35, 47, 0.3);
}
.project-item__img:hover img {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.project-item__img img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: all 0.6s;
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    -o-transition: all 0.6s;
    -ms-transition: all 0.6s;
}

.project-item .info {
    position: absolute;
    text-align: left;
    top: 20px;
    height: 360px;
    width: 490px;
    border: 1px solid #3c4a5f;
    border-radius: 5px;
    overflow-y: hidden;
}
.project-item__title {
    .tags {
        margin: 10px 100px 0 80px;
        p {
            font-size: 10px;
            padding: 3px;
            border: 1px solid #3c4a5f;
            border-radius: 4px;
            margin-right: 6px;
        }
    }
    h2 {
        font-size: 30px;
        font-weight: 400;
        line-height: 1.1;
        margin: 30px 100px 0 80px;
    }
    h3 {
        font-size: 16px;
        font-weight: 400;
        margin: 10px 100px 0 80px;
        line-height: 1.8;
    }
}

@media (max-width: 1200px) {
    .project-item:nth-child(even) {
        text-align: right;
        .info {
            right: 450px;
        }
    }
    .project-item:nth-child(odd) {
        text-align: left;
        .project-item__img {
            margin-right: 380px;
        }
        .info {
            left: 400px;
        }
    }
    .project-item__img {
        width: 420px;
        height: 280px;
    }
    .project-item .info {
        top: 10px;
        width: 380px;
        height: 290px;
        .project-item__title {
            h3 {
                word-break: break-all;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4; /* 这里是超出几行省略 */
            }
        }
    }
}

@media (max-width: 719px) {
    .project-item:nth-child(odd) {
        .project-item__img {
            margin-right: 0;
        }
    }

    .git-calendar {
        padding: 10px;
        p {
            font-size: 12px;
        }
    }
    .project-wrapper {
        margin: 0;
    }

    .project-item__img {
        width: 100%;
        height: 210px;
        margin-top: -60px;
    }
    .project-item {
        margin-top: 100px;
        border-bottom: none;
        max-width: 400px;
        padding: 0 20px;
    }

    .project-item .info {
        height: auto;
        position: static;
        width: 100%;
        margin: 0 auto;
        background: transparent;
        border: none;
    }
    .project-item__title {
        .tags {
            margin: 5px;
            p {
                font-size: 10px;
                padding: 3px;
                border: 1px solid #3c4a5f;
                border-radius: 4px;
                margin-right: 6px;
            }
        }
        h2,
        h3 {
            margin: 5px auto;
        }
    }
}
</style>
