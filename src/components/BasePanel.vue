<script setup lang="ts">
// type
// data
// hook
// method
</script>
<template>
    <div class="panel">
        <slot> </slot>
    </div>
</template>
<style lang="scss" scoped>
.panel {
    position: relative;
    padding: 12px 20px;
    box-shadow: var(--box-border-shadow);
    border-radius: 9999px;
    background-image: linear-gradient(
        to bottom,
        hsla(0,0%,98%,0),
        hsla(0, 0%, 100%, 0.1)
    );
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    cursor: pointer;
}
</style>
