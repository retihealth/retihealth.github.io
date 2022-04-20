<script setup>
import Header from "./components/Header.vue";
import Background from "./components/Background.vue";
</script>

<template>
  <Background />
  <Header />
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
