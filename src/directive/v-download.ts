/*
 * @Author: chenyx
 * @Date: 2023-05-04 12:19:45
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-04 12:53:16
 * @FilePath: /chenyxjs-blog/src/directive/v-download.ts
 */

import { ElMessage } from "element-plus";
import { Directive } from "vue";

// 定义自定义指令
export const download: Directive = {
  mounted(el: HTMLImageElement, bindings: any) {
    // 元素加载进来后添加绑定事件
    el.addEventListener("click", () => {
      const a = document.createElement("a");
      const url = bindings.value; // 完整的url则直接使用
      // 这里是将url转成blob地址，
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          // 将链接地址字符内容转变成blob地址
          a.href = URL.createObjectURL(blob);
          // 下载文件的名字
          a.download = url.split("/")[url.split("/").length - 1];
          document.body.appendChild(a);
          a.click();
          return a;
        })
        .then((doc) => {
          //最后把新建的节点删除
          document.body.removeChild(doc);
        })
        .catch((err) => {
          ElMessage.error("文章过于优秀被偷了，请稍后再试");
        });
    });
  },
};
