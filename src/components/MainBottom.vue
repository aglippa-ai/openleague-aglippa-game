<script setup>
import { computed } from 'vue'

const props = defineProps(['maxLimits', 'limits'])

const _pointLimit = computed(() => {
    return props.limits ? parseInt(props.limits).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
})
const _maxLimit = computed(() => {
    return props.maxLimits ? parseInt(props.maxLimits).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
})
</script>

<template>
    <div class="main-bottom-container">
        <div class="limiter-wrap wrapper">
            <div class="point-limiter">
                <span v-text="_pointLimit"></span> /
                <span v-text="_maxLimit"></span>
            </div>
        </div>
        <div class="links-wrap wrapper">
            <div class="earn-link link"><span>earn</span></div>
            <div class="friend-link link"><span>frend</span></div>
            <div class="shop-link link"><span>shop</span></div>
        </div>
    </div>
</template>
    
<style scoped>
.main-bottom-container {
    height: 15%;
    width:100%;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.wrapper {
    flex: 1;
    flex-basis: auto;

    display:flex;
    align-items: center;
    justify-content: center;
}

.links-wrap {
    display:flex;
    flex-direction: row;
}

.links-wrap .link {
    width:33%;
}

.link {
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>