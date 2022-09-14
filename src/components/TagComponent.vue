<template>
  <div
    class="bg-gray-200 rounded-full mx-2 px-4 cursor-pointer w-auto mt-2 text-center py-1 items-center font-sans transition duration-150 ease-out hover:ease-in hover:scale-105 hover:shadow-md font-[500]"
  >
    {{ tag }}
  </div>
</template>

<script>
export default {
  name: 'tags-component',
  props: ['tag'],
}
</script>
