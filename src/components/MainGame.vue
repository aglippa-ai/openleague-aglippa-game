<script setup>
const props = defineProps(['isClick'])
</script>

<template>
<div class="main-game-container">
    <img src="/images/img_aglippa_touch.png" class="aglippa-plate" width="100%" v-if="props.isClick"/>
    <img src="/images/img_aglippa.png" class="aglippa-plate" width="100%" v-if="!props.isClick"/>
</div>
</template>

<style scoped>
.main-game-container {
    flex: 1;
    padding: 0;

    display:flex;
    justify-content: center;
    align-items: center;

    overflow:hidden;
}

.aglippa-plate {
    width: 100%;
}
</style>