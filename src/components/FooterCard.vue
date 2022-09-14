<template>
  <div
    class="bg-[#ededf0] flex flex-col px-[16px] py-[28px] items-center rounded-[8px] flex-grow font-sans mt-8 mb-10"
  >
    <div class="text-center h-[30px] w-[30px]">
      <img :src="icon" />
    </div>
    <div
      class="text-center font-[600] text-[#333] mt-[18px] mb-[8px] text-[20px]"
    >
      {{ title }}
    </div>
    <div class="text-center font-[400] text-[#555] leading-[143%] text-[14px]">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-card',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
