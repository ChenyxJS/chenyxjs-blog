<!--
 * @Author: chenyx
 * @Date: 2023-04-11 19:59:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 22:05:07
 * @FilePath: /chenyxjs-blog/src/components/ProfileCard.vue
-->
<template>
  <div class="card">
    <div class="profileimage">
      <img class="img" src="@/assets/images/Chenyx.jpg" />
    </div>
    <div class="Name">
      <p>Chenyx</p>
    </div>
    <div class="socialbar">
      <a id="github" target="_blank" href="https://github.com/ChenyxJS">
        <i class="iconfont icon-github"></i>
      </a>
      <a id="csdn" target="_blank" href="https://blog.csdn.net/Cd_Air" >
        <i class="iconfont icon-csdn"></i>
      </a>
      <a id="gitee" target="_blank" href="https://gitee.com/chen-yunx">
        <i class="iconfont icon-gitee-fill-round"></i>
      </a>
      <a id="wechat" target="_blank" href="http://www.chenyx.site/assest/jpg/WeChat.jpg">
        <i class="iconfont icon-weixin-copy"></i>
      </a>
      <a id="qq" target="_blank" href="http://www.chenyx.site/assest/jpg/QQ.jpg">
        <i class="iconfont icon-qq"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

//每日一言
const state = reactive({
  datWords: ["等月光落雪地，等枫红染秋季", "见万事如流"],
});
// 随机获取数组中的一项
const today = state.datWords[Math.floor(Math.random() * state.datWords.length)];
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 280px;
  border-radius: 2em;
  padding: 10px;
  background-color: #191919;
  box-shadow: 5px 5px 30px rgb(4, 4, 4), -5px -5px 30px rgb(57, 57, 57);
}

.profileimage {
  position: relative;
  background-color: #fff;
  border: none;
  margin-top: 20px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transition: all 0.7s ease-in-out;
  }
  .img:hover {
    transform: rotate(360deg);
  }
}
.profileimage::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 100px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 20px solid rgba(0,0,0,.3);
  opacity: 0;
  transition: all .5s ease;
}
.profileimage::after {
  content: "少年曾有惑，走马平生消尽处，见万事如流";
  position: absolute;
  top: -30px;
  left: 120px;
  width: 180px;
  max-width: 220px;
  height: 60px;
  border-radius: 10px;
  background-color: rgba(0,0,0,.3);
  color: #fff;
  padding: 10px 20px;
  box-shadow: 5px 5px 14px rgb(57, 57, 57);
  opacity: 0;
  transition: all .5s ease;
}
.profileimage:hover::before,
.profileimage:hover::after
{
    opacity: 1;
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
  margin-top: 15px;
  color: white;
  box-shadow: 3px 3px 15px rgb(0, 0, 0), -3px -3px 15px rgb(58, 58, 58);
  display: flex;
  justify-content: space-around;
}

.card a {
  transition: 0.4s;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 24px;
  }
}
.card a:hover {
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
</style>
