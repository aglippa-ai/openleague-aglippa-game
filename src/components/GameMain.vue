<script setup>
import { ref, reactive, onMounted, h } from 'vue'

import Game from './game'

import MainTop from './MainTop.vue'
import MainGame from './MainGame.vue'
import MainBottom from './MainBottom.vue'

const _game = reactive(Game)
const _addLimitIntv = setInterval(() => {
    _game.addLimit();
}, _game.getAddLimitSeconds());
const _isClick = ref(false);

onMounted(() => {
    _game.point.amount = 15070
    _game.point.limit  = _game.getMaxLimit();
})

const _increasePoint = (e) => {
    _isClick.value = true;
    setTimeout(()=>{ _isClick.value = false; }, 300);

    _game.addPoint(1);
}
</script>

<template>
<div class="main-container">
    <MainTop :points="_game.point.amount" />
    <MainGame @click="_increasePoint" :isClick="_isClick" />
    <MainBottom :maxLimits="_game.getMaxLimit()" :limits="_game.point.limit" />
</div>
</template>

<style scoped>
.main-container {
    width: 100vw;
    height: 100vh;

    display:flex;
    flex-direction: column;

    color:#ccc;
    background-image: url('/images/main_bg.gif');
    background-position: center;
}
</style>