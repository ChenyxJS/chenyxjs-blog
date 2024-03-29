/*
 * @Author: chenyx
 * @Date: 2023-04-01 02:15:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-03 15:43:10
 * @FilePath: /chenyxjs-blog/src/hooks/menu-hooks.ts
 */
import router from "@/router";
import { Notification } from "@/components/Notification";

export const useMenu = () => {
    const menu = [
        {
            index: 0,
            title: "门户",
            path: "",
            fun: toPortal,
        },
        {
            index: 1,
            title: "首页",
            path: "/home",
            fun: toHome,
        },
        {
            index: 2,
            title: "博客",
            path: "/blog",
            fun: toBlog,
        },
        {
            index: 3,
            title: "壁纸",
            path: "/wallpaper",
            fun: toWallpaper,
        },
        {
            index: 4,
            title: "项目",
            path: "/project",
            fun: toProject,
        },
        {
            index: 5,
            title: "链接",
            path: "/links",
            fun: toLinks,
        },
        {
            index: 6,
            title: "手绘板",
            path: "/Excalidraw",
            fun: toExcalidraw,
        },
    ];

    function toPortal() {
        window.open("https://www.chenyx.site/static/index.html", "_blank");
    }
    function toExcalidraw() {
        window.open("https://excalidraw.chenyx.site/", "_blank");
    }
    function toHome() {
        router.push("/home");
    }
    function toBlog() {
        router.push("/blog");
    }
    function toWallpaper() {
        // Notification({
        //     message: "模块正在调试中，敬请期待...",
        // });
        router.push("/wallpaper");
    }
    function toProject() {
        router.push("/project");
    }
    function toLinks() {
        router.push("/links");
    }
    return {
        menu,
        toHome,
        toProject,
        toPortal,
        toBlog,
        toWallpaper,
    };
};
