<script setup></script>

<template>
<div class="splash-container">
    <div class="splash-background">
        <img src="/images/splash_logo.png" style="width:50%;margin-top:60%;margin-bottom:2rem;"/>
        <img src="/images/splash_title.svg" style="width:80%;"/>
    </div>
</div>
</template>

<style scoped>
.splash-container {
    display:flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    overflow: hidden;

    background-color: #000;
}

.splash-background {
    width:100%;
    height:120%;

    background-image: url('/images/splash_bg.gif');
    background-size: cover;
    background-position: center;

    display:flex;
    flex-direction: column;
    align-items: center;
}
</style>