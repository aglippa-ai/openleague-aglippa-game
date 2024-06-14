<script setup>
import { computed } from 'vue'
import { numberFormat } from '../utils'

const props = defineProps(['userPoint'])

const _userPoint = computed(() => { return numberFormat(props.userPoint) })
</script>

<template>
<div class="user-point-container">
    <img src="/images/splash_logo.png" class="coin-icon">
    <div class="point-amount-wrap retro-value-frame">
        <span class="point-amount" v-text="_userPoint"></span>
    </div>
</div>
</template>

<style scoped>
.user-point-container {
    position: relative;

    display:flex;
    flex-direction: row;
    align-items: center;

    padding: 0 0 .3rem 1rem;
}

.coin-icon {
    position: absolute;
    height:2.5rem;
    left:.5rem;
    z-index:999;
}
</style>