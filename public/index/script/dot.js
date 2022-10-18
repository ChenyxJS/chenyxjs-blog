/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-07-04 10:18:39
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-09-29 02:33:37
 */
const dotBox = document.querySelector('.dot-box')
dotBox.addEventListener('mouseenter', function(e) {
  e.stopPropagation()
  // 给dotBox添加或移除active样式
  dotBox.classList.toggle('active')
})

document.addEventListener('mouseleave', () => {
  dotBox.classList.toggle('active')
})