<template>
  <div
    class="text-[12px] font-medium mr-2 px-2.5 py-1 rounded"
    :class="{
      'bg-red-100 text-red-800': type === 'error',
      'bg-yellow-100 text-yellow-800': type === 'warning',
      'bg-blue-100 text-blue-800': type === 'info',
      'bg-green-100 text-[#37833B]': type === 'success',
    }"
  >
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'base-badge',
  props: {
    type: {
      type: String,
      default: 'success',
    },
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
