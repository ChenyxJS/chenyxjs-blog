<script setup lang="ts">
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    HemisphereLight,
    SpotLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { onMounted, reactive, ref } from "vue";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const state = reactive({
    isLoading: true,
    loadingWidth: 0,
});

// 拿到渲染dom节点的实例
const threeRef = ref();
// 初始化场景
const scene = new Scene();
// 初始化渲染器
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
// 初始化相机
const camera = new PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    100
);
// 模型加载器
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
// 设置解压库文件路径
dracoLoader.setDecoderPath("/draco/gltf/");
// 使用js方式解压
dracoLoader.setDecoderConfig({ type: "js" });
// 初始化_initDecoder 解码器
dracoLoader.preload();
// gltfloader使用dracoLoader
loader.setDRACOLoader(dracoLoader);

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

onMounted(() => {
    // 初始化场景、模型
    init();
    resize();
});

function init() {
    setCamera();
    setLight();
    loadIronManFile();
    setControls();
    loop();
}

function resize() {
    window.addEventListener("resize", () => setCamera());
}

function setControls() {
    // 控制器
    controls.maxPolarAngle = (0.9 * Math.PI) / 2;
    // 开启缩放
    controls.enableZoom = true;
    // 限制缩放倍数
    controls.minDistance = 3;
    controls.maxDistance = 5;
    // 自动旋转
    controls.autoRotate = true;
}

function setCamera() {
    camera.position.set(1, 1, 3);
    // 设置画布大小
    renderer.setSize(threeRef.value.offsetWidth, 900);
    // 设置画布颜色
    renderer.setClearColor(0xffffff, 0);
    // 添加到渲染dom
    threeRef.value.appendChild(renderer.domElement);
}

function loadIronManFile() {
    const url = "/iron_man_mark_85.glb";
    loader.load(
        url,
        (gltf: any) => {
            const model = gltf.scene;
            model.position.set(0, -0.5, 0); // 模型位置
            model.scale.set(3, 1, 3);
            scene.add(gltf.scene); // 加入场景

            model.traverse((child: any) => {
                if (child.isMesh) {
                    //如果是物体就输出名字
                    console.log(child.name);
                }
            });
        },
        ({ loaded, total }) => {
            let load = Math.abs((loaded / total) * 100);
            state.loadingWidth = load;

            if (load >= 100) {
                setTimeout(() => {
                    state.isLoading = false;
                }, 1000);
            }
            console.log((loaded / total) * 100 + "% loaded");
        }
    );
}

function setLight() {
    let light1 = new DirectionalLight(0xffffff, 1);
    light1.position.set(0, 50, 50);
    let light2 = new DirectionalLight(0xffffff, 1);
    light2.position.set(0, 50, -50);
    let light3 = new DirectionalLight(0xffffff, 1);
    light3.position.set(50, 50, 50);
    let light4 = new DirectionalLight(0xffffff, 1);
    light4.position.set(-50, -10, 0);
    let light5 = new DirectionalLight(0xffffff, 1);
    light5.position.set(0, 0, 50);
    let light6 = new DirectionalLight(0xffffff, 1);
    light6.position.set(0, 0, -50);
    let light7 = new DirectionalLight(0xffffff, 1);
    light7.position.set(50, 0, 0);
    let light8 = new DirectionalLight(0xffffff, 1);
    light8.position.set(-50, 0, 0);
    let light9 = new DirectionalLight(0xffffff, 1);
    light9.position.set(0, 0, 0);
    scene.add(
        light1,
        light2,
        light3,
        light4,
        light5,
        light6,
        light7,
        light8,
        light9
    );
    let hemisphereLight = new HemisphereLight(0xff0000, 0x0000ff);
    scene.add(hemisphereLight);
    let spotLight = new SpotLight(0xffffff);
    spotLight.position.set(100, 1000, 100);
    scene.add(spotLight);
}

function loop() {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
    controls.update();
}
</script>

<template>
    <div class="container">
        <div class="threeRef" ref="threeRef"></div>
        <div class="maskLoading" v-if="state.isLoading">
            <div class="loading">
                <div :style="{ width: state.loadingWidth + '%' }"></div>
            </div>
            <div style="padding-left: 10px">{{ state.loadingWidth.toFixed(1) }}%</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    width: 100%;
    position: relative;
}
.threeRef {
    width: 100%;
}
.maskLoading {
    width: 100%;
    position: absolute;
    inset: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1111111;
    color: #fff;
}

.maskLoading .loading {
    width: 100%;
    height: 20px;
    border: 1px solid #fff;
    background: #000;
    overflow: hidden;
    border-radius: 10px;
}

.maskLoading .loading div {
    background: #fff;
    height: 20px;
    width: 0;
    transition-duration: 500ms;
    transition-timing-function: ease-in;
}
</style>
