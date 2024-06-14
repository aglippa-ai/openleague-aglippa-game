<script setup>
import { computed } from 'vue'

import UserPoint from './MainTop/UserPoint.vue'
import UserRank from './MainTop/UserRank.vue'
import UserLevel from './MainTop/UserLevel.vue'

const props = defineProps(['points'])

const _showJoinSquad = () => {
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
        <UserPoint :userPoint="props.points" />
        <div class="rank-row">
            <UserRank :userRank="123456" />
            <UserLevel :userLevel="'Platinum'" />
        </div>
    </div>
    <div class="squad-wrap wrapper">
        <input type="button" class="btn-join-squad" @click="_showJoinSquad" />
    </div>
</div>
</template>

<style scoped>
.main-top-container {
    display:flex;
    flex-direction: row;
    height: 15%;
    width: 100%;

    background-image:url('/images/main_top_bg.png');
    background-size: contain;
    background-position: center;
}

.rank-wrap {
    width:60%;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
}

.rank-row {
    display: flex;
    flex-direction: row;
}

.squad-wrap {
    width:40%;
    padding: .5rem;

    display:flex;
    align-items: center;
    justify-content: center;
}

.btn-join-squad {
    background: url('/images/btn_joinsquad.png') no-repeat;
    background-size: contain;
    background-position: center;
    width:100%;
    height:100%;
    border:none;
}

.wrapper {
    flex: 1;
    flex-basis: auto;
}

</style>