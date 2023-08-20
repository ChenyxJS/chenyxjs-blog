<template>
    <div ref="threeRef"></div>

    <div class="maskLoading" v-if="isLoading">
        <div class="loading">
            <div :style="{ width: loadingWidth + '%' }"></div>
        </div>
        <div style="padding-left: 10px">{{ parseInt(loadingWidth) }}%</div>
    </div>
    <div class="mask">
        <p>x : {{ x }} y:{{ y }} z :{{ z }}</p>
        <button @click="isAutoFun">转动车</button>
        <button @click="stop">停止</button>
        <div class="flex">
            <div
                @click="setCarColor(index)"
                v-for="(item, index) in colorAry"
                :style="{ backgroundColor: item }"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from "vue";
import {
    Color,
    DirectionalLight,
    DirectionalLightHelper,
    HemisphereLight,
    HemisphereLightHelper,
    Mesh,
    MeshPhongMaterial,
    PerspectiveCamera,
    PlaneGeometry,
    Scene,
    WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const colorAry = [
    "rgb(216, 27, 67)",
    "rgb(142, 36, 170)",
    "rgb(81, 45, 168)",
    "rgb(48, 63, 159)",
    "rgb(30, 136, 229)",
    "rgb(0, 137, 123)",
    "rgb(67, 160, 71)",
    "rgb(251, 192, 45)",
    "rgb(245, 124, 0)",
    "rgb(230, 74, 25)",
    "rgb(233, 30, 78)",
    "rgb(156, 39, 176)",
    "rgb(94, 53, 177)",
    "rgb(57, 73, 171)",
    "rgb(33, 150, 243)",
    "rgb(0, 150, 136)",
    "rgb(76, 175, 80)",
    "rgb(253, 216, 53)",
    "rgb(251, 140, 0)",
    "rgb(244, 81, 30)",
    "rgb(236, 64, 100)",
    "rgb(171, 71, 188)",
    "rgb(103, 58, 183)",
    "rgb(92, 107, 192)",
    "rgb(66, 165, 245)",
    "rgb(38, 166, 154)",
    "rgb(129, 199, 132)",
    "rgb(255, 235, 59)",
    "rgb(255, 167, 38)",
    "rgb(255, 87, 34)",
    "rgb(240, 98, 125)",
    "rgb(186, 104, 200)",
    "rgb(126, 87, 194)",
    "rgb(121, 134, 203)",
    "rgb(100, 181, 246)",
    "rgb(128, 203, 196)",
    "rgb(165, 214, 167)",
    "rgb(255, 241, 118)",
    "rgb(255, 183, 77)",
    "rgb(255, 138, 101)",
    "rgb(244, 143, 160)",
    "rgb(206, 147, 216)",
    "rgb(149, 117, 205)",
    "rgb(159, 168, 218)",
    "rgb(144, 202, 249)",
    "rgb(178, 223, 219)",
    "rgb(200, 230, 201)",
    "rgb(255, 245, 157)",
    "rgb(255, 204, 128)",
    "rgb(255, 171, 145)",
    "rgb(255, 255, 255)",
    "rgb(224, 224, 224)",
    "rgb(182, 182, 182)",
    "rgb(153, 153, 153)",
    "rgb(137, 137, 137)",
    "rgb(90, 90, 90)",
    "rgb(55, 55, 55)",
    "rgb(35, 35, 35)",
    "rgb(22, 22, 22)",
    "rgb(0, 0, 0)",
];
const loader = new GLTFLoader();
const threeRef = ref();

const defaultMap = {
    x: 1,
    y: 1,
    z: 0,
};
const map = reactive(defaultMap);
const { x, y, z } = toRefs(map);
let scene,
    camera,
    renderer,
    controls,
    floor,
    dhelper,
    hHelper,
    directionalLight,
    hemisphereLight;
let isLoading = ref(true);
let loadingWidth = ref(0);

const setFloor = () => {
    let floorGeometry = new PlaneGeometry(5000, 5000, 1, 1.1);
    let floorMaterial = new MeshPhongMaterial({
        color: 0x77f28f,
        // wireframe: true
    });
    floor = new Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -0.5 * Math.PI;
    floor.position.y = -2.1;
    scene.add(floor);
};

const setLight = () => {
    directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-4, 8, 4);
    dhelper = new DirectionalLightHelper(directionalLight, 5, 0xff0000);
    hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 0.4);
    hemisphereLight.position.set(0, 8, 0);
    hHelper = new HemisphereLightHelper(hemisphereLight, 5);
    scene.add(directionalLight);
    scene.add(hemisphereLight);
};

const setCamera = () => {
    const { x, y, z } = defaultMap;
    scene = new Scene();
    camera = new PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set(x, y, z);
    renderer = new WebGLRenderer();
    renderer.setSize(1000, 1000);
    threeRef.value.appendChild(renderer.domElement);
};
const setControls = () => {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = (0.9 * Math.PI) / 2;
    controls.enableZoom = true;
    controls.addEventListener("change", render);
};

const init = async () => {
    const gltf = await loadFile("src/assets/3d/iron_man_mark_85/scene.gltf");
    setCamera();
    setLight();
    // setFloor()
    setControls();
    scene.add(gltf.scene);
    loop();
};

const loop = () => {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
    controls.update();
};
const isAutoFun = () => {
    controls.autoRotate = true;
};
const stop = () => {
    controls.autoRotate = false;
};

const render = () => {
    map.x = Number.parseInt(camera.position.x);
    map.y = Number.parseInt(camera.position.y);
    map.z = Number.parseInt(camera.position.z);
};

const setCarColor = (index) => {
    const currentColor = new Color(colorAry[index]);
    scene.traverse((child) => {
        if (child.isMesh) {
            console.log(child.name);
            if (child.name.includes("door_")) {
                child.material.color.set(currentColor);
            }
        }
    });
};

const loadFile = (url) => {
    return new Promise((resolve, reject) => {
        loader.load(
            url,
            (gltf) => {
                resolve(gltf);
            },
            ({ loaded, total }) => {
                let load = Math.abs((loaded / total) * 100);
                loadingWidth.value = load;

                if (load >= 100) {
                    setTimeout(() => {
                        isLoading.value = false;
                    }, 1000);
                }
                console.log((loaded / total) * 100 + "% loaded");
            },
            (err) => {
                reject(err);
            }
        );
    });
};
const onResizeFun = (ev) => {
    setCamera();
};

onMounted(() => {
    init();
    window.addEventListener("resize", onResizeFun);
});
</script>

<style>
body {
    margin: 0;
}

.maskLoading {
    background: #000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1111111;
    color: #fff;
}

.maskLoading .loading {
    width: 400px;
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

canvas {
    width: 100%;
    height: 100%;
    margin: auto;
}

.mask {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.flex {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}

.flex div {
    width: 10px;
    height: 10px;
    margin: 5px;
    cursor: pointer;
}
</style>
