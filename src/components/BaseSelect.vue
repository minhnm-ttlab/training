<template>
  <div class="mx-1 relative">
    <label
      for="base-select"
      v-if="label"
      class="text-[10px] absolute -top-[8px] left-2 bg-white px-1 text-[#787885] font-[600]"
    >
      {{ label.toUpperCase() }}
    </label>

    <img :src="triangleIcon" class="absolute right-3 top-4" />
    <select
      required
      id="base-select"
      class="w-auto border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:ring-blue-500 focus:border-blue-500 px-2.5 py-1.5 pr-8 shadow-sm leading-6 focus:font-semibold font-sans appearance-none"
      @change="$emit('update:sortBy', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value || defaultValue"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import triangleIcon from '@/assets/icons/triangle.png'
export default {
  name: 'base-select',
  props: {
    label: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [{ name: 'null', value: '' }],
    },
    defaultValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      triangleIcon,
    }
  },
}
</script>
