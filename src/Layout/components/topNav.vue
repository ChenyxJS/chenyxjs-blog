<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:13:30
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-17 02:59:24
-->
<template>
  <div class="top-nav">
    <div class="top-nav-container">
      <div class="nav-left flex-cc">
        <input class="search" placeholder="keywords" type="text" />
      </div>
      <div class="nav-options">
        <a href="">总览</a>
        <a href="">门户</a>
        <a href="">UX</a>
      </div>
      <div class="nav-right flex flex-ce">
        <div class="nav-right_title">掘金前端热点 <svg-icon icon-name="hot" icon-size="16"></svg-icon></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-nav {
  height: 62px;
  min-height: 62px;
  background: var(--bg-navbar);
  color: #fff;
  .top-nav-container{
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;
      .nav-left {
        height: 100%;
        width: 318px;
        margin-left: 20px;
        input{
            width: 100%;
            height: 32px;
            background: transparent;
            border: var(--border);
            outline: none;
            padding: 0 8px;
            color: var(--text-navbar);
            border-radius: 6px;
        }
      }
      .nav-options{
        margin: 0 24px;
        font-weight: 600;
        a{
            margin: 0 5px;
            color: #fff;
        }
      }
      .nav-right {
        height: 100%;
        flex: 1;
        font-weight: 600;
        margin-left: auto;
        &_title{
          width: 100%;
          max-width: 350px;
          letter-spacing: 1px;
        }
      }
  }
}
</style>
