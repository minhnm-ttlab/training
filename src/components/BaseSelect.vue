<template>
  <div
    class="border-2 border-[#CACDD8] rounded-[4px] relative inline-block select-none w-full min-w-[150px]"
  >
    <label
      class="absolute left-0 top-[7px] text-[12px] font-sans font-[500] text-[#A2A6B0] pointer-events-none bg-white pl-2 pr-1"
      >{{ label }}:
      <span class="text-[#2D2D2D] capitalize" v-if="!selectValue">
        {{ defaultValue }}</span
      >
    </label>
    <component :is="ArrowDownIcon" class="absolute right-3 top-[15px]" />
    <select
      required
      class="border-none outline-none py-2 text-[12px] font-sans font-[600] appearance-none ml-auto w-full pl-2"
      @change="
        $emit(
          `update:${label.replace(/\s+/g, '-').toLowerCase()}`,
          $event.target.value
        )
      "
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ label }}: {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import { toRefs, defineProps } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
  },
  defaultValue: {
    type: String,
  },
  selectValue: {
    type: String,
    default: '',
  },
})

const { label, options, defaultValue, selectValue } = toRefs(props)
</script>
