<template>
  <div class="col-span-1 xl:col-auto">
    <div
      class="flex flex-col justify-between w-full h-full bg-white px-10 rounded-2xl py-10"
    >
      <div class="flex-shrink-0 pb-2">
        <img :src="icon" />
      </div>
      <div class="text-left text-lg font-semibold text-[#333333]">
        {{ title }}
      </div>
      <div class="text-left text-[#555555]">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['icon', 'title', 'description'],
}
</script>
