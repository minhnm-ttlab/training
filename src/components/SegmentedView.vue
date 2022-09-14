<template>
  <div class="bg-[#EBF2FF] rounded-lg w-full">
    <div class="relative flex items-center">
      <div class="absolute w-full">
        <div class="w-1/2 flex justify-between m-auto">
          <div
            class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out"
            :class="{ 'opacity-100': viewSelected === '1' }"
          ></div>
        </div>
      </div>
      <!-- white sliding tab block -->
      <div
        class="absolute left-0 inset-y-0 w-1/2 flex bg-white transition-all ease-in-out duration-200 transform rounded-md shadow-lg shadow-[#c7d8f5]"
        :class="{
          'translate-x-0': viewSelected === '1',
          'translate-x-full': viewSelected === '2',
        }"
      ></div>

      <!-- clickable buttons -->
      <div
        class="relative flex-1 flex items-center justify-center cursor-pointer m-px py-2.5"
        @click="viewSelected = '1'"
      >
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 0V4H17V0H5ZM5 14H17V10H5V14ZM5 9H17V5H5V9ZM0 4H4V0H0V4ZM0 14H4V10H0V14ZM0 9H4V5H0V9Z"
            :class="{
              'fill-blue-600': viewSelected === '1',
              'fill-[#5A5B6A]': viewSelected !== '1',
            }"
          />
        </svg>
      </div>
      <div
        class="relative flex-1 flex items-center justify-center cursor-pointer m-px py-2.5"
        @click="viewSelected = '2'"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8H8V0H0V8ZM0 18H8V10H0V18ZM10 18H18V10H10V18ZM10 0V8H18V0"
            :class="{
              'fill-blue-600': viewSelected === '2',
              'fill-[#5A5B6A]': viewSelected !== '2',
            }"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'segmented-view',
  data() {
    return {
      viewSelected: '1',
    }
  },
}
</script>
