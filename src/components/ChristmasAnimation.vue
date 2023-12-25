<template>
    <div class="christmas">
        <div class="snowflakes"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// 清空雪花
const clearSnowflakes = () => {
    const snowflakes = document.querySelector(".snowflakes");
    if (!snowflakes) {
        console.error("Snowflakes container not found");
        return;
    }
    snowflakes.innerHTML = "";
};

const createSnowflakes = () => {
    // 区分大中小屏幕生成的雪花数量
    const screenWidth = document.documentElement.clientWidth;
    const maxSnowflakes = screenWidth > 768 ? 200 : 50;

    const snowflakesContainer = document.querySelector(".snowflakes");

    if (!snowflakesContainer) {
        console.error("Snowflakes container not found");
        return;
    }

    for (let i = 0; i < maxSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflakesContainer.appendChild(snowflake);
        animateSnowflake(snowflake);
    }
};

const animateSnowflake = (snowflake: HTMLElement) => {
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const randomTop = Math.random() * window.innerHeight; // 随机位置的 top
    const randomLeft = Math.random() * window.innerWidth; // 随机位置的 left

    // 随机选择从最上边或者最右边开始
    if (Math.random() > 0.5) {
        snowflake.style.left = randomLeft + "px"; // 从随机位置开始
        snowflake.style.top = "0";
    } else {
        snowflake.style.left = window.innerWidth + "px"; // 从最右边开始
        snowflake.style.top = randomTop + "px"; // 从随机位置开始
    }

    // 创建一个img元素
    const img = document.createElement("img");
    const src = getRandomSnowflakeImage();
    img.src = src; // 获取随机的雪花图片路径
    img.alt = "snowflake";
    let randomSize = Math.random() * 15 + 20; // 随机大小，这里设置为10到30之间
    // 如果img是src/assets/images/christmas/实心-雪花.png，则大小小于10且添加毛玻璃效果
    if (src.indexOf("christmas/实心-雪花.png") > -1) {
        randomSize = Math.random() * 10 + 1;
        img.style.filter = "blur(2px)";
    }
    img.style.width = `${randomSize}px`;
    img.style.height = `${randomSize}px`;

    snowflake.appendChild(img); // 将img元素添加到雪花元素中

    snowflake.style.position = "absolute";
    snowflake.style.opacity = "0";
    snowflake.style.animation = `fall ${duration}s linear ${delay}s infinite`;
};
// 随机获取雪花图片路径的函数，你可以根据需要替换成你自己的图片路径
const getRandomSnowflakeImage = () => {
    const originalSnowflakeProbability = 0.9; // 调整这个值来改变原始雪花的概率

    if (Math.random() > originalSnowflakeProbability) {
        const originalGifts = [
            "src/assets/images/christmas/圣诞树.png",
            "src/assets/images/christmas/星星.png",
            "src/assets/images/christmas/糖果棒.png",
            "src/assets/images/christmas/袜子.png",
            // 添加更多原始雪花的图片路径...
        ];
        const randomIndex = Math.floor(Math.random() * originalGifts.length);
        return originalGifts[randomIndex];
    } else {
        const originalSnowflakes = [
            "src/assets/images/christmas/雪花.png",
            "src/assets/images/christmas/雪花圆角.png",
            "src/assets/images/christmas/实心-雪花.png",
            // 添加更多原始雪花的图片路径...
        ];
        const randomIndex = Math.floor(
            Math.random() * originalSnowflakes.length
        );
        return originalSnowflakes[randomIndex];
    }
};

onMounted(() => {
    createSnowflakes();
    window.addEventListener("resize", () => {
        clearSnowflakes();
        createSnowflakes();
    });
});
</script>

<style lang="scss">
.christmas {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    // 点击穿透
    pointer-events: none;
}

.snowflakes {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1;
    &::v-deep .snowflake {
        position: absolute;
    }
}

@keyframes fall {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: translateY(100vh) translateX(-50vw) rotate(120deg);
    }
}
</style>
