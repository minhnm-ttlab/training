<template>
  <div class="lg:mx-20">
    <div class="pt-9">
      <div class="justify-center flex flex-col">
        <img :src="BannerImage" alt="" />
      </div>
      <div class="mt-4">
        <div class="flex flex-1 text-sm font-sans font-[600]">
          <span>Home</span>
          <span class="mx-2 text-blue-500">›</span>
          <span>Laptop</span>
          <span class="mx-2 text-blue-500-">›</span>
          <span>MSI</span>
        </div>

        <div class="flex flex-1 text-2xl font-sans font-[600] mt-4">
          <span>MSI PS Series (20)</span>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="flex flex-wrap justify-between items-center mx-auto relative">
        <div class="w-full flex">
          <div class="w-1/6">
            <FilterTable />
          </div>
          <div class="w-5/6 pl-2">
            <div class="order-2 flex">
              <span class="text-[12px] font-sans font-[500] text-[#A2A6B0]"
                >Items 1 - 35 of 61</span
              >
            </div>
            <div class="flex flex-col space-x-2 mt-6">
              <filter-tag
                v-for="(item, index) in []"
                :key="index"
                :name="item.label"
                :count="item.count"
              />
            </div>
            <div class="space-y-2 mt-[80px]">
              <product-card
                v-for="(product, index) in productList"
                :key="index"
                :product="product"
              />
            </div>
          </div>
        </div>

        <div class="flex space-x-2 w-[35%] order-3 absolute top-0 right-0">
          <div class="flex flex-1 space-x-4 w-1/2">
            <base-select
              :options="[
                {
                  value: '1',
                  label: 'Position',
                },
                {
                  value: '2',
                  label: 'Reviews',
                },
              ]"
              :label="'Sort by'"
              @update:sort-by="sortBy = $event"
              :selectValue="sortBy"
            />
            <base-select
              :options="[
                {
                  value: '1',
                  label: '35 per page',
                },
                {
                  value: '2',
                  label: '50 per page',
                },
              ]"
              :label="'Show'"
              @update:show="listShow = $event"
              :selectValue="listShow"
            />
          </div>
          <div class="mt-1">
            <view-style />
          </div>
        </div>
      </div>
    </div>
    <div class="mb-10"></div>
  </div>
</template>
<script setup>
import BannerImage from '@/assets/images/banner.png'
import BaseSelect from '@/components/BaseSelect.vue'
import ViewStyle from '@/components/ViewStyleComponent.vue'
import FilterTable from '@/components/FilterTable.vue'
import FilterTag from '@/components/FilterTag.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

const store = useStore()

const productList = computed(() => store.state.products)

const sortBy = ref('')
const listShow = ref('')
const startItem = ref(1)
const endItems = ref(35)
const allItems = ref(65)
</script>
