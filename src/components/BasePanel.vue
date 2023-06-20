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
        rgba(24,24,27,.3),
        rgba(39,39,42,.8)
    );
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    cursor: pointer;
}
</style>
