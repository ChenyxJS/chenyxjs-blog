<script setup lang="ts">
import { computed } from "vue";

type PropsType = {
    id?: number;
    title?: string;
    isShow: boolean;
    width?: string | number;
    minWidth: string;
};

const emit = defineEmits(["close"]);
const props = withDefaults(defineProps<PropsType>(), {
    title: "标题",
    width: 300,
    minWidth: "300px",
});
const dialogWidth = computed(() => {
    if (typeof props.width === "number") {
        return props.width + "px";
    } else {
        return props.width + "";
    }
});

function close() {
    emit("close");
}
</script>
<template>
    <teleport to="body">
        <div class="mask" v-if="isShow">
            <div
                class="dialog"
                :style="{ width: dialogWidth, minWidth: props.minWidth }"
            >
                <div class="header">
                    <span>{{ title }}</span>
                    <base-icon
                        style="cursor: pointer"
                        @click="close"
                        iconName="icon-guanbi1"
                    ></base-icon>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>
<style scoped>
.mask {
    position: fixed;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 9999;
}
.dialog {
    margin: 0 auto;
    margin-top: 50px;
    background-color: rgb(32, 31, 31);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: var(--box-border-shadow);
    border-radius: 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 20px 0 20px;
}

.content {
    overflow: auto;
    padding: 20px;
}
.footer {
    width: 100%;
}
</style>
