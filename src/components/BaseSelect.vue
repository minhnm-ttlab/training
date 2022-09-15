<template>
  <div
    class="border-2 border-[#CACDD8] rounded-[4px] relative inline-block select-none w-full"
  >
    <label
      class="absolute left-0 top-[12px] text-[12px] font-sans font-[500] text-[#A2A6B0] pointer-events-none bg-white pl-2 pr-1"
      >{{ label }}:
      <span class="text-[#2D2D2D] capitalize" v-if="!selectValue">
        {{ defaultValue }}</span
      >
    </label>
    <img :src="arrowDownIcon" class="absolute right-3 top-[18px]" />
    <select
      required
      class="border-none outline-none py-3 text-[12px] font-sans font-[600] appearance-none ml-auto w-full pl-2"
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

<script>
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'

export default {
  name: 'base-select',
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    defaultValue: {
      type: String,
      default: 'No selected',
    },
    selectValue: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      arrowDownIcon: ArrowDownIcon,
    }
  },
}
</script>
