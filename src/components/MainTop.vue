<script setup>
import { computed } from 'vue'

const props = defineProps(['points'])

const _pointAmount = computed(() => {
    return props.points ? parseInt(props.points).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
})

const _showUserInfo = () => {
    if (window.tgUser) {
        const _userInfo = `id: ${window.tgUser.id}
is bot: ${(window.tgUser.is_bot)?'true':'false'}
first name: ${window.tgUser.first_name}
last name: ${window.tgUser.last_name}
username: ${window.tgUser.username || 'undefined'}`;
        alert(_userInfo);
    }
}
</script>

<template>
<div class="main-top-container">
    <div class="rank-wrap wrapper">
        <div class="user-point"><span v-text="_pointAmount"></span></div>
        <div class="user-rank"><span>56</span></div>
        <div class="user-level"><span>Gold</span></div>
    </div>
    <div class="squad-wrap wrapper">
        <button type="button" @click="_showUserInfo">Join<br/>Squad</button>
    </div>
</div>
</template>

<style scoped>
.main-top-container {
    display:flex;
    flex-direction: row;
    height: 15%;
    width: 100%;
}

.rank-wrap {
    width:60%;
    border:1px solid #F00;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.squad-wrap {
    width:40%;
    border:1px solid #0f0;
    padding: .5rem .5rem;
}

.squad-wrap button {
    width:100%;
    height:100%;
    font-size:1.3rem;
    font-weight:bold;
    background-color:#ababab;
    border-bottom:2px solid #666;
    border-right:2px solid #666;
    border-top:2px solid #ccc;
    border-left:2px solid #ccc;
}

.wrapper {
    flex: 1;
    flex-basis: auto;
}

.user-point {
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
}

.user-rank,
.user-level {
    display:flex;
    align-items: center;
    justify-content: center;
    width:50%;
}
</style>