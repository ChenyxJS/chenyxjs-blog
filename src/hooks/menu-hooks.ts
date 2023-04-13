/*
 * @Author: chenyx
 * @Date: 2023-04-01 02:15:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-14 01:12:11
 * @FilePath: /chenyxjs-blog/src/hooks/menu-hooks.ts
 */
import router from "@/router";
import { ElMessage } from "element-plus";

export function useMenu() {
  function toPortal() {
    window.open('http://www.chenyx.site/static/index.html','_blank')
  }
  function toHome() {
    router.push("/home");
  }
  function toBlog() {
    router.push("/blog");
  }
  function toWallpaper() {
    router.push("/wallpaper");
  }
  function toProject() {
    ElMessage.warning("模块正在调试中，敬请期待...");
    // router.push("/project");
  }
  return {
    toHome,
    toProject,
    toPortal,
    toBlog,
    toWallpaper
  };
}
