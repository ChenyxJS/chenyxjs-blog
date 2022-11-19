# Vue3构建Cesium项目



## 一、使用Cesium

​	1、在官网中有很多种使用Cesium的方式，这里我使用的是一个vite的插件

```js
 npm i cesium vite-plugin-cesium vite -D
```

​	安装好依赖之后，我们需要再vite.config.ts中引入并使用该插件

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium';
import path from 'path'

export default defineConfig({
  plugins: [vue(),cesium()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  },
})
```

​		3、之后就可以使用Cesium了，我们创建一个Cesium的工具类

```javascript
import * as Cesium from "cesium";
import { cesiumConfig } from '@/config'
// Cesium的令牌，需要自己去官网申请，否则页面上会有一串英文
Cesium.Ion.defaultAccessToken = cesiumConfig.token

class CesiumController {
    viewer: any
    constructor() {
        this.init_data()
    }
    init_data() {
        this.viewer = null
    }
    /**
     * @Descripttion: 初始化Cesium基础配置
     * @msg: 
     * @param {string} el
     * @return {*}
     */
    init(el: string) {
        // 初始化视图
        const viewer = new Cesium.Viewer(el, {
            // 是否显示信息窗口
            infoBox: true,
            // 是否创建动画
            animation: false,
            // 是否显示图层选择器
            baseLayerPicker: false,
            // 是否显示全屏按钮
            fullscreenButton: false,
            // 是否显示右上角的查询按钮
            geocoder: false,
            // 是否显示HOME按钮
            homeButton: false,
            // 是否显示场景控制按钮
            sceneModePicker: false,
            // 是否显示帮助按钮
            navigationHelpButton: false,
            // 是否显示时间轴
            timeline: false,
            // 地形
            terrainProvider: Cesium.createWorldTerrain()
        });
        // 镜头飞入
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 1000),
            orientation: {
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: 0.0,
            },
        });
        // 设置默认的视角为中国
        Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
            // 西边经度
            89.5,
            // 南边维度
            20.4,
            // 东边经度
            110.4,
            // 北边维度
            61.2
        );
        this.viewer = viewer
        return viewer
    }

}
const CController = new CesiumController()
export default CController
```

​		4、创建一个页面，调用初始化Cesium方法即可

```vue
<template>
  <div class="cesiumContainer" id="cesiumContainer" ref="cesiumContainer"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import CesiumController from "@/utils/Cesium/index";

export default defineComponent({
  name: "CesiumIndex",
  setup() {
    // 初始化Cesium的构造器
    const CController = CesiumController;
    onMounted(() => {
      // 需要在页面元素创建完成后在进行Cesium的初始化
      const viewer = CController.init("cesiumContainer");
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
.cesiumContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>

```