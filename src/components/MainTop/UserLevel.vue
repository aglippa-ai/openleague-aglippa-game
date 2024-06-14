<script setup>
const props = defineProps(['userLevel'])
</script>

<template>
<div class="user-level-container">
    <img src="/images/icon_level.png" class="level-icon">
    <div class="user-level-wrap retro-value-frame">
        <span class="user-level" v-text="props.userLevel"></span>
    </div>
</div>
</template>

<style scoped>
.user-level-container {
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    flex:1;

    padding: 0 0 0 1rem;
}

.user-level-wrap {
    font-size:1rem;
    text-align:center;
}

.level-icon {
    position: absolute;
    height: 2rem;
    left: .5rem;
    z-index: 999;
}
</style>