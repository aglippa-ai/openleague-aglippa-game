<script setup>
const props = defineProps(['userRank'])
</script>

<template>
<div class="user-rank-container">
    <img src="/images/icon_rank.png" class="rank-icon">
    <div class="user-rank-wrap retro-value-frame">
        <span class="user-rank" v-text="props.userRank"></span>
    </div>
</div>
</template>

<style scoped>
.user-rank-container {
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    flex:1;

    padding: 0 0 0 1rem;
}

.user-rank-wrap {
    background-color:#FFCF88;
    color:#DC0026;
    font-size:1rem;
}

.rank-icon {
    position: absolute;
    height: 1.5rem;
    left: .5rem;
    z-index: 999;
}
</style>