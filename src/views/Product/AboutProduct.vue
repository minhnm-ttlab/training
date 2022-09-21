<template>
  <div class="">
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
      <div class="text-[14px] font-poppins font-medium pt-5">
        <span class="">{{ product.description }}</span>
      </div>
      <div class="flex flex-1 space-x-4 pt-7">
        <div
          v-for="color in colors"
          :key="color"
          @click="selectedColor = color"
          class="cursor-pointer"
        >
          <div
            class="p-1 border-[4px] border-solid rounded-full w-8 h-8"
            :class="{
              'border-blue-400': color == selectedColor,
              ' border-transparent': color != selectedColor,
            }"
          >
            <div
              class="h-7 w-7 rounded-full -mt-1.5 -ml-1.5"
              :style="{
                'background-color': color,
              }"
            ></div>
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
      <span class="uppercase font-semibold pl-[100px]">+ more information</span>
    </div>
  </div>
</template>

<script setup>
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
