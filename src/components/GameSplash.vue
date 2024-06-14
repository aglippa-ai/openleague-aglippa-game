<script setup></script>

<template>
<div class="splash-container">
    <div class="splash-background">
        <div class="splash-logo">
            <img src="/images/splash_logo.png" style="width:40%;margin-bottom:2rem;"/>
            <img src="/images/splash_title.svg" style="width:70%;"/>
        </div>
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
    position:relative;

    width:100%;
    height:120%;

    background-image: url('/images/splash_bg.gif');
    background-size: cover;
    background-position: center;
}

.splash-logo {
    position:absolute;
    width:100%;
    top:30%;

    display:flex;
    flex-direction: column;
    align-items: center;
}
</style>