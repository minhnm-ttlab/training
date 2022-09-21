<template>
  <div class="relative h-full">
    <div class="flex flex-col absolute top-12 left-5 space-y-1 cursor-pointer">
      <component :is="LoveIcon"></component>
      <component :is="ChartIcon"></component>
      <component :is="EmailIcon"></component>
    </div>
    <div class="w-[500px] pt-[120px] pl-[120px]">
      <img :src="images[active]" />
    </div>
    <div
      class="absolute flex flex-1 space-x-2 bottom-[100px] right-[80px] md:right-[150px]"
    >
      <div
        v-for="index in images.length"
        :key="index"
        class="w-2 h-2 rounded-full"
        :class="{
          'bg-[#CACDD8]': index - 1 != active,
          'bg-[#0156FF]': index - 1 == active,
        }"
        @click="handleClick(index - 1)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import LoveIcon from '@/assets/icons/love-icon.svg'
import EmailIcon from '@/assets/icons/email-icon.svg'
import ChartIcon from '@/assets/icons/chart-icon.svg'
import { toRefs, defineProps, ref } from 'vue'

const active = ref(0)

const handleClick = (index) => {
  active.value = index
}

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const {
  images: { value: images },
} = toRefs(props)
</script>

<style lang="scss" scoped></style>
