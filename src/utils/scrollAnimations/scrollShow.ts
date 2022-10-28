/*
 * @Descripttion:  元素跟随屏幕滚动加载
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-17 10:47:26
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-28 22:36:35
 */
/**
 * @Descripttion: 根据屏幕滚动加载动画 
 * @msg: 
 * @param {HTMLCollectionOf<Element>} elList 使用该动画的元素数组
 * @return {*}
 */
export function scrollBehavior(elList: HTMLCollectionOf<Element>) {
    // 监听scroll事件
    document.getElementById('article-content').addEventListener("scroll", () => {
        check(elList)
        console.log(`output->1`,1)
    })
}
/**
 * @Descripttion: 检查滚动行为
 * @msg: 
 * @return {*}
 */
function check(elList: HTMLCollectionOf<Element>) {
    // 获取视窗的高度
    // const triggerBottom = window.innerHeight / 5 * 4.5
    const triggerBottom = 700 / 5 * 4.5
    // 遍历el列表
    for (let i = 0; i < elList.length; i++) {
        // 获取该元素的top值
        const elTop = elList[i].getBoundingClientRect().top
        // 判断该元素是否在视窗中
        if (-200 < elTop && elTop < triggerBottom) {
            elList[i].classList.add("scrollShow")

        } else {
            elList[i].classList.remove("scrollShow")
        }
    }
}