<template>
  <div class="flex flex-col items-start font-sans">
    <div class="bg-[#F5F7FF] w-full">
      <div class="m-3">
        <div class="text-center flex flex-col">
          <span class="text-sm font-semibold">Filters</span>
          <button
            class="outline-none border-[#A2A6B0] border-2 border-solid rounded-full px-[30px] py-1 text-sm font-semibold text-[#A2A6B0] mt-4"
          >
            Clear Filter
          </button>
        </div>
        <div class="mt-3">
          <BaseDropdown
            :label="'Categories'"
            :drop-list="[
              {
                name: 'Custom PC',
                value: 'custom-pc',
                itemLength: 20,
              },
              {
                name: 'MSI',
                value: 'msi',
                itemLength: 10,
              },
            ]"
          />
          <BaseDropdown :label="'Prices'" :drop-list="pricesDropList" />
          <BaseDropdown
            :is-color="true"
            :label="'Color'"
            :drop-list="[
              {
                color: '#000000',
                value: 'black',
              },
              {
                color: '#ff0000',
                value: 'red',
              },
            ]"
          />
          <BaseDropdown :label="'Filter Name'" :drop-list="[]" :hidden="true" />
        </div>
        <div class="text-center">
          <button
            class="outline-none rounded-full px-[30px] py-1 text-sm font-semibold text-white mt-4 bg-blue-500 w-full"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseDropdown from './BaseDropdown.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const pricesDropList = [
  {
    name: '$0.00 - $1,000.00',
    value: '0-1000',
    itemLength: 20,
  },
  {
    name: '$1,000.00 - $2,000.00',
    value: '1000-2000',
    itemLength: 10,
  },
  {
    name: '$2,000.00 - $3,000.00',
    value: '2000-3000',
    itemLength: 10,
  },
  {
    name: '$3,000.00 - $4,000.00',
    value: '3000-4000',
    itemLength: 10,
  },
  {
    name: '$4,000.00 - $5,000.00',
    value: '4000-5000',
    itemLength: 10,
  },
  {
    name: '$5,000.00 - $6,000.00',
    value: '5000-6000',
    itemLength: 10,
  },
  {
    name: '$6,000.00 - $7,000.00',
    value: '6000-7000',
    itemLength: 10,
  },
  {
    name: '$7,000.00 And Above',
    value: '7000-above',
    itemLength: 10,
  },
]
</script>

<style lang="scss" scoped></style>
