<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[60%] bg-[#F5F7FF]">
      <div class="pl-[100px] md:pl-[200px] pr-[80px]">
        <div class="text-[12px] font-poppins font-medium space-x-1 pt-12">
          <span class="">Home</span>
          <span class="text-blue-600">›</span>
          <span class="">Laptop</span>
          <span class="text-blue-600">›</span>
          <span class="text-[#A3A3A3]">{{ product.name }}</span>
        </div>
        <div class="text-[25px] font-poppins font-medium pt-5 uppercase">
          <span class="">{{ product.name }}</span>
        </div>
        <div class="text-[10px] text-blue-500 cursor-pointer font-medium pt-3">
          Be the first to review this product
        </div>
        <div class="text-[12px] font-poppins font-medium pt-5">
          <div class="grid grid-rows-2 border-2 w-[300px]">
            <div
              class="flex flex-cols text-center justify-between px-8 items-center max-w-[300px] bg-white pr-[150px] py-2"
            >
              <span class="text-left">CPU</span>
              <span class="">{{ product.baseInfo.CPU }}</span>
            </div>
            <div
              class="flex flex-cols justify-between px-8 py-1 max-w-[300px] pr-[150px] pt-2"
            >
              <span>Feature</span>
              <span>{{ product.baseInfo.Features }}</span>
            </div>
            <div
              class="flex flex-cols text-center justify-between px-8 max-w-[300px] bg-white pr-[150px] py-2 pt-2"
            >
              <span>I/O Ports</span>
              <span>{{ product.baseInfo['I/O Ports'] }}</span>
            </div>
          </div>
        </div>

        <div class="font-poppins mt-6 flex justify-between">
          <div>
            <span class="font-semibold text-[11px]">Have a Question?</span>
            <a
              class="text-[10px] underline text-blue-500 font-medium cursor-pointer pl-1"
              >Contact Us</a
            >
          </div>
          <div>
            <span class="text-[12px]">SKU D5511AI</span>
          </div>
        </div>
      </div>
      <div class="py-20 pb-20 cursor-pointer">
        <span class="uppercase font-semibold pl-[100px]"
          >+ more information</span
        >
      </div>
    </div>
    <div class="w-full md:w-[40%] relative">
      <image-preview :images="[product1, product2, product3, product4]" />
    </div>
  </div>
</template>

<script setup>
import product1 from '@/assets/images/product-1.png'
import product2 from '@/assets/images/product-2.png'
import product3 from '@/assets/images/product-3.png'
import product4 from '@/assets/images/product-4.png'

import ImagePreview from '@/components/ImagePreview.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const store = useStore()
const route = useRoute()

const products = computed(() => store.state.products)
const productId = computed(() => route.params.id)
const product = computed(() => {
  return products.value.find((item) => item.id === parseInt(productId.value))
})

const colors = ref(['red', 'green', 'blue'])

const selectedColor = ref('red')
</script>

<style lang="scss" scoped></style>
