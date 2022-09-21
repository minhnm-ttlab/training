<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
