/*
 * @Author: chenyx
 * @Date: 2023-04-01 02:15:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 00:52:58
 * @FilePath: /chenyxjs-blog/src/hooks/menu-hooks.ts
 */
import router from "@/router";
import { ElMessage } from "element-plus";

export function useMenu() {
  function toPortal() {
    ElMessage.warning("模块正在调试中，敬请期待...");
     router.push("/static");
  }
  function toHome() {
    router.push("/home");
  }
  function toProject() {
    ElMessage.warning("模块正在调试中，敬请期待...");
    // router.push("/project");

  }
  return {
    toHome,
    toProject,
    toPortal,
  };
}
