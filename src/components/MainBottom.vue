<script setup>
import { ref, computed } from 'vue'
import { numberFormat } from './utils'

import LimitSlider from 'vue3-slider'

const props = defineProps(['maxLimits', 'limits'])

const _available = computed(() => {
    return parseInt(props.limits)
})
const _pointLimit = computed(() => {
    return numberFormat(props.limits)
})
const _maxLimit = computed(() => {
    return numberFormat(props.maxLimits)
})
</script>

<template>
    <div class="main-bottom-container">
        <div class="bottom-box-wrap retro-button-frame">
            <div class="box-top">
                <img src="/images/icon_bottom_box_control.png" class="icon-control" />
            </div>
            <div class="limiter-wrap wrapper">
                <div class="limiter-slider">
                    <LimitSlider class="slider" v-model="_available" 
                        :max="props.maxLimits" :handleScale="0" @drag-start.prevent
                        :height="24" color="#7c0200" track-color="#eeeeee" />
                    <span class="value">{{ _pointLimit }} / {{ _maxLimit }} </span>
                </div>

                <img src="/images/icon_fire.png" class="icon-fire" />
            </div>
            <div class="links-wrap wrapper">
                <div class="earn-link link">
                    <img src="/images/icon_fold_earn.png" />
                </div>
                <div class="frens-link link">
                    <img src="/images/icon_fold_frens.png" />
                </div>
                <div class="shop-link link">
                    <img src="/images/icon_fold_shop.png" />
                </div>
            </div>
        </div>
    </div>
</template>
    
<style scoped>
.main-bottom-container {
    height:25%;
    padding-bottom:1rem;
}

.bottom-box-wrap {
    height:100%; 
    display:flex;
    flex-direction: column;
    justify-content: start;
    flex-basis: auto;
    margin: 0 1rem;
    border-radius: 8px;
}

.box-top {
    height:1.5rem;
    width:100%;
    background-color:#02007C;
    color:#fff;
    text-align: right;
}

.box-top .icon-control {
    margin-right:.5rem;
}

.wrapper {    
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
}

.limiter-wrap {
    flex: 1 1 auto;

    display:flex;
    flex-direction: row;

    gap:.5rem;
}

.limiter-slider {
    position:relative;
    flex: auto;
    margin-left: 1rem;
}

.limiter-slider .slider {
    z-index:9;
}

.limiter-slider .value {
    position:absolute;
    width:100%;
    z-index:999;
    color:#999;
    font-size:.8em;
    text-align:center;
    top:.3rem;
    left:0;
}

.limiter-wrap .icon-fire {
    height:2.5rem;
    margin-right:1rem;
}

.links-wrap {
    flex: 1 1 auto;
    display:flex;
    flex-direction: row;
}

.link {
    flex: 1 1 auto;
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>