<!--
 * @Author: chenyx
 * @Date: 2023-04-12 12:57:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-13 15:31:48
 * @FilePath: /chenyxjs-blog/src/components/PersonCard.vue
-->
<template>
    <div class="card">
        <button @click="changeCard">
            <i
                class="iconfont icon-chengyuan"
                style="color: #409eff;cursor: pointer;"
            ></i>
        </button>
        <div class="profileimage">
            <div class="img-warpper">
                <img class="img" src="@/assets/images/Chenyx.jpg" />
            </div>
        </div>
        <div class="bubble">{{ today }}</div>
        <div class="Name">
            <p>Chenyx</p>
        </div>
        <div class="socialbar">
            <a id="github" target="_blank" href="https://github.com/ChenyxJS">
                <i class="iconfont icon-github"></i>
            </a>
            <a id="csdn" target="_blank" href="https://blog.csdn.net/Cd_Air">
                <i class="iconfont icon-csdn"></i>
            </a>
            <a id="gitee" target="_blank" href="https://gitee.com/chen-yunx">
                <i class="iconfont icon-gitee-fill-round"></i>
            </a>
            <a id="wechat" @click="openDialog('WeChat')">
                <i class="iconfont icon-weixin-copy"></i>
            </a>
            <a id="qq" @click="openDialog('QQ')">
                <i class="iconfont icon-qq"></i>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessageBox } from "element-plus";
import { reactive } from "vue";

const emit = defineEmits(["icon-click"]);
const state = reactive({
    //每日一言
    dayWords: [
        "等月光落雪地，等枫红染秋季。\n --《手写的从前》",
        "少年曾有惑，走马平生消尽处，见万事如流。\n --《江湖行》",
        "焦虑的原因就两条：想同时做很多事，又想立即看到效果。\n --《认知觉醒》",
        "耐心不是毅力带来的结果，而是具有长远目光的结果。\n --《认知觉醒》",
        "先用感性能力帮助自己选择，再用理性能力帮助自己思考。\n --《认知觉醒》",
        "“刻意练习四要素”：定义明确的目标、极度的专注、有效的反馈、在拉伸区练习。\n --《认知觉醒》",
        "小事听从你的脑，大事听从你的心。\n --《认知觉醒》",
        "知识的获取不在于多少，而在于是否与自己有关联，以及这种关联有多充分。\n --《认知觉醒》",
        "复利效应显示了价值积累的普遍规律：前期增长非常缓慢，但到达一个拐点后会飞速增长。\n --《认知觉醒》",
        "要想有所成就，必须保持耐心，延迟满足。\n --《认知觉醒》",
        "所谓心智，通俗地说，就是我们看待人和事的态度，以及由此做出的判断与选择。\n --《认知觉醒》",
        "世上有人在行动，这个人也可能是你。\n --《重返世界尽头的咖啡馆》",
        "做一个观察者，而不是沉浸其中，不要当局内人。\n --《重返世界尽头的咖啡馆》",
        "真正的硬通货不是金钱，而是时间。\n --《重返世界尽头的咖啡馆》",
        "不把精力花在阻碍自身进步的事上，同时在主要的事上多花精力。\n --《重返世界尽头的咖啡馆》",
        "有时我们会陷入一种定式思维，甘愿接受比我们真正想要的东西稍差一些的选择。\n --《重返世界尽头的咖啡馆》",
        "当你遇到不知道怎么做的事时，你只需要找到一个能做的人就行了。你可以向他寻求帮助，他演示给你看该怎么做。\n --《重返世界尽头的咖啡馆》",
        "你的游乐场只属于你自己，不要用别人的梦想去衡量它，要想方设法在里面装满你自己的梦想。\n --《重返世界尽头的咖啡馆》",
        "从某种角度说，你内心的导航系统会给你提供一个线索，引导你去做对的事。\n --《重返世界尽头的咖啡馆》",
    ],
});
// 随机获取数组中的一项
const today = state.dayWords[Math.floor(Math.random() * state.dayWords.length)];

function openDialog(string: string) {
    ElMessageBox.alert(
        `<img style="width:325px;height:500px" src="http://file.chenyx.site/image/${string}.JPG" />`,
        `My ${string}`,
        {
            dangerouslyUseHTMLString: true,
            center: true,
        }
    );
}

function changeCard() {
    emit("icon-click");
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    // height: 280px;
    border-radius: 2em;
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0 0 0 2px #1f1f23;

}

.profileimage {
    position: relative;
    border: none;
    margin-top: 20px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    box-shadow: 0 0 0 2px #3a3a3f;

    .img-warpper {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all 0.7s ease-in-out;
        .img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
    .img-warpper:hover {
        transform: rotate(360deg);
    }
}
.bubble::before {
    content: "";
    position: absolute;
    top: 30px;
    left: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 1);
    opacity: 0;
    transition: all 0.5s ease;
}
.bubble {
    position: absolute;
    top: 20px;
    left: 200px;
    width: 200px;
    max-width: 220px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px 20px;
    box-shadow: 5px 5px 14px rgb(57, 57, 57);
    opacity: 0;
    transition: all 0.5s ease;
    white-space: pre-wrap;
    z-index: 9999;
}

.profileimage:hover ~ .bubble,
.profileimage:hover ~ .bubble::before {
    opacity: 1;
    animation: float 1.5s linear alternate infinite;
}

@keyframes float {
    0% {
        transform: translateY(8px);
    }
    100% {
        transform: translateY(0);
    }
}

.Name {
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 15px;
    font-size: 20px;
    margin-top: 10px;
}

.socialbar {
    background-color: #191919;
    border-radius: 3em;
    width: 90%;
    padding: 14px;
    box-shadow: 0 0 0 2px #1f1f23;
    display: flex;
    justify-content: space-around;
}

.socialbar a {
    transition: 0.4s;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 2px #1f1f23;
    i {
        font-size: 24px;
    }
}
.socialbar a:hover {
    transform: translateY(-5px);
    background-color: #fff;
}

#github:hover {
    color: #161b22;
}

#wechat:hover {
    color: #0cc161;
}

#csdn:hover {
    color: #fc5531;
}
#gitee:hover {
    color: #c71d23;
}

#qq:hover {
    color: #00acee;
}

button {
    color: #fff;
    border: none;
    background-color: transparent;
}
</style>
