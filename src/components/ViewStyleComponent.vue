<template>
  <div class="flex flex-1 space-x-1 mt-1.5">
    <div
      class="hover:cursor-pointer icon"
      @click="isGrid = !isGrid"
      :class="{ active: isGrid }"
    >
      <component :is="GridIcon" />
    </div>
    <div
      class="hover:cursor-pointer icon mt-0.5"
      @click="isGrid = !isGrid"
      :class="{
        active: !isGrid,
      }"
    >
      <component :is="ListIcon" />
    </div>
  </div>
</template>

<style scoped>
.icon svg path {
  fill: #a2a6b0;
}
.icon.active svg path {
  fill: #000;
}
</style>

<script setup>
import ListIcon from '@/assets/icons/list-icon.svg'
import GridIcon from '@/assets/icons/grid-icon.svg'
import { ref } from 'vue'
const isGrid = ref(false)
</script>
