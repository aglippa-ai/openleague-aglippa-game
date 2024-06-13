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

onMounted(() => {
    _game.point.amount = 15070
    _game.point.limit  = _game.getMaxLimit();
})

const _increasePoint = (e) => {
    console.log('event:', e.clientX, e.clientY);
    _game.addPoint(1);
    const el = h('span', { class: 'plus-point-mark', innerHTML:'+1'});
    console.log('mark:', el);
    return el;

}
</script>

<template>
<div class="main-container">
    <MainTop :points="_game.point.amount" />
    <MainGame @click="_increasePoint" />
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

.plus-point {
    display:inline-block;
    position:absolute;
    top:0; left:0;
    z-index: 99999;
    font-size:1.5rem;
    font-weight:bold;
    color:#fff;
}

</style>