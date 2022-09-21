<template>
  <div class="relative py-3 font-sans select-none">
    <div @click="isClose = !isClose">
      <span
        class="absolute top-0 text-[12px] font-semibold hover:cursor-pointer"
        >{{ label }}</span
      >
      <component
        class="absolute right-0 top-1.5 hover:cursor-pointer"
        :is="isClose ? ArrowDownIcon : ArrowUpIcon"
      />
    </div>
    <div
      class="mt-4"
      :class="{
        hidden: hidden || isClose,
        'flex flex-1 space-x-3': isColor,
        'flex flex-col': !isColor,
      }"
    >
      <div
        v-for="(item, index) in dropList"
        :key="index"
        class="font-medium hover:cursor-pointer"
        @click="isColor && (selected = index) && emitValue(item)"
      >
        <div v-if="!isColor" class="flex place-content-between font-medium">
          <span class="text-[12px]" v-if="item.name">{{ item.name }}</span>
          <span class="text-[12px]" v-if="item.itemLength">{{
            item.itemLength
          }}</span>
        </div>
        <div
          v-else
          class="w-7 h-7 rounded-[50%] ml-[2px] mt-px"
          :style="{
            'background-color': item.color,
          }"
          :class="{
            // border outline circle when selected
            'border-[3px] border-[#578cf7]': selected === index,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import { defineProps, ref, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const isClose = ref(false)
const selected = ref(0)

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  dropList: {
    type: Array,
    required: true,
  },
  isColor: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
})
const { label, dropList, isColor, hidden } = toRefs(props)
</script>
