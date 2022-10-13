<template>
  <div class="Layout">
    <top-nav/>
    <div class="container">
      <div class="slider">
        <ul>
            <li>
                <svg></svg>
                <a href="">全部</a>
            </li>
            <li>
                <svg></svg>
                <a href="">前端</a>
            </li>
            <li>
                <svg></svg>
                <a href="">前端资源</a>
            </li>
            <li>
                <svg></svg>
                <a href="">git</a>
            </li>
            <li>
                <svg></svg>
                <a href="">其他</a>
            </li>
        </ul>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>
<script>
import topNav from "./components/topNav.vue";
export default {
  components: {
    topNav,
  },
};
</script>

<style lang="scss" scoped>
.Layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .container {
    display: flex;
    flex: 1;
    .slider {
      width: 350px;
      height: 100%;
      background: var(--bg-primary);
    }
    .content {
      flex: 1;
      background: red;
    }
  }
}
</style>
