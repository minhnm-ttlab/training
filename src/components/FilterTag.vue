<template>
  <div
    class="border border-soild border-[A2A6B0] rounded-sm w-[90px] flex flex-1 px-3 py-2 font-sans text-center"
  >
    <span class="text-[12px] font-[600] mr-1">{{ name }}</span>
    <span class="text-[12px] text-[#CACDD8] mr-1">({{ count }})</span>
    <component :is="CloseIcon" class="mb-px" />
  </div>
</template>

<script setup>
import CloseIcon from '@/assets/icons/close-icon.svg'
import { defineProps, toRefs } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

const { name, count, index } = toRefs(props)
</script>
