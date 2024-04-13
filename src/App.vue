<script setup>

import Header from "./components/UI/Header.vue";
</script>

<template>
    <div class="app">
        <Header/>
        <div class="page-wrapper">
            <router-view class="page-content"></router-view>
        </div>
    </div>
</template>

<style scoped>
.page-wrapper{
    padding: 0 calc(50% - 750px);
}
.page-content{
    background-color: var(--background-color);
    min-height: 100vh;
}
</style>
