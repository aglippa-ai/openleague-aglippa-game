<script setup>
import { ref, onMounted } from 'vue'

import GameSplash from './components/GameSplash.vue'
import GameMain from './components/GameMain.vue'

const _splashShow = ref(true)
const _mainShow = ref(false)

onMounted(() => {
    setTimeout(() => { 
        _splashShow.value = false
        _mainShow.value = true 
    }, 1500)
})
</script>

<template>
<Transition name="fade">
    <GameSplash v-show="_splashShow" />
</Transition>
<Transition name="fade">
    <GameMain v-show="_mainShow" />
</Transition>
</template>

<style scoped>
</style>
