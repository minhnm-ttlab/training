<template>
  <div class="bg-[#EBF2FF] rounded-lg">
    <div class="relative flex items-center">
      <!-- tab dividers -->
      <div class="absolute w-full">
        <div class="w-1/3 flex justify-between m-auto">
          <div
            class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out"
            :class="{ 'opacity-100': selectedTab === '3' }"
          ></div>
          <div
            class="h-3 w-px bg-gray-400 rounded-full opacity-0 transition-opacity duration-100 ease-in-out"
            :class="{ 'opacity-100': selectedTab === '1' }"
          ></div>
        </div>
      </div>

      <!-- white sliding tab block -->
      <div
        class="absolute left-0 inset-y-0 w-1/3 flex bg-white transition-all ease-in-out duration-200 transform rounded-md shadow-lg shadow-[#c7d8f5]"
        :class="{
          'translate-x-0': selectedTab === '1',
          'translate-x-full': selectedTab === '2',
          'translate-x-fullx2': selectedTab === '3',
        }"
      ></div>

      <!-- clickable buttons -->
      <div
        class="relative flex-1 flex text-sm items-center justify-center cursor-pointer m-px py-2.5 font-sans"
        @click="selectedTab = '1'"
        :class="{
          'text-blue-600': selectedTab === '1',
          'text-[#5A5B6A]': selectedTab !== '1',
          'font-semibold': selectedTab === '1',
        }"
      >
        Show all
      </div>
      <div
        class="relative flex-1 flex text-sm items-center justify-center cursor-pointer m-px py-2.5 font-sans"
        @click="selectedTab = '2'"
        :class="{
          'text-blue-600': selectedTab === '2',
          'text-[#5A5B6A]': selectedTab !== '2',
          'font-semibold': selectedTab === '2',
        }"
      >
        Auction
      </div>
      <div
        class="relative flex-1 flex text-sm items-center justify-center cursor-pointer m-px py-2.5 font-sans"
        @click="selectedTab = '3'"
        :class="{
          'text-blue-600': selectedTab === '3',
          'text-[#5A5B6A]': selectedTab !== '3',
          'font-semibold': selectedTab === '3',
        }"
      >
        Buy now
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'segmented-show',
  data() {
    return {
      selectedTab: '1',
    }
  },
}
</script>
