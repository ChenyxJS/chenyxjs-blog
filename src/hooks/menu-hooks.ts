import router from "@/router";
import { ElMessage } from "element-plus";

export function useMenu() {
  function toPortal() {
    ElMessage.warning("模块正在调试中，敬请期待...");
  }
  function toHome() {
    router.push("/home");
  }
  function toProject() {
    ElMessage.warning("模块正在调试中，敬请期待...");
  }
  return {
    toHome,
    toProject,
    toPortal,
  };
}
