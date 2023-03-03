/*
 * @Descripttion:  元素跟随屏幕滚动加载
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-17 10:47:26
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-28 21:14:52
 */
/**
 * @Descripttion: 根据屏幕滚动加载动画 
 * @msg: 
 * @param {HTMLCollectionOf<Element>} elList 使用该动画的元素数组
 * @return {*}
 */
export function scrollBehavior(elList: HTMLCollectionOf<Element>) {
    check(elList)
    // 监听scroll事件
    document.getElementById('article-content').addEventListener("scroll", () => {
        check(elList)
    })
}
/**
 * @Descripttion: 检查滚动行为
 * @msg: 
 * @return {*}
 */
function check(elList: HTMLCollectionOf<Element>) {
    // 获取视窗的高度
    const triggerBottom = window.innerHeight
    // 遍历el列表
    for (let i = 0; i < elList.length; i++) {
        // 获取该元素的top值
        const elTop = elList[i].getBoundingClientRect().top
        // 判断该元素是否在视窗中
        if (elTop < triggerBottom) {
            elList[i].classList.add("scrollShow")
        } else {
            elList[i].classList.remove("scrollShow")
        }
    }
}