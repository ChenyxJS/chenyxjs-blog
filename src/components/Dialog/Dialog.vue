<script setup lang="ts">

const emit = defineEmits(['close'])
const props = defineProps({
    id: {
        type: Number,
        default: null,
    },
    title: {
        type: String,
        default: "标题",
    },
    isShow: {
        type: Boolean,
        default: "标题",
    },
});
clickListen();
function clickListen() {
    window.addEventListener("click", (e: MouseEvent) => {
        // console.log(e.target.parents("dialog"));
    });
}
function close() {
    emit('close');
}
</script>
<template>
    <teleport to="body">
        <div class="mask" v-if="isShow">
            <div class="dialog">
                <div class="header">
                    <span>{{ title }}</span>
                    <base-icon
                        @click="close"
                        iconName="icon-guanbi1"
                    ></base-icon>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>
<style scoped>
.mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(12px);
    z-index: 99;
}
.dialog {
    margin: 0 auto;
    margin-top: 50px;
    width: 300px;
    background-color: rgba(66, 65, 65, 0.2);
    backdrop-filter: blur(12px);
    box-shadow: var(--box-border-shadow);
    border-radius: 10px;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
}

.content {
    max-height: 300px;
    overflow: auto;
    margin: 20px 0;
}
</style>
