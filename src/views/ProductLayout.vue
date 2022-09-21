<template>
  <div class="pt-7">
    <div
      class="flex flex-wrap justify-between items-center px-5 lg:px-[6.5rem]"
    >
      <div class="flex space-x-2 lg:space-x-5 mt-4">
        <div v-for="(item, index) in navigation" :key="index">
          <router-link
            :to="{ name: item.name, params: { id: route.params.id } }"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <a :href="href" @click="navigate">
              <span
                class="text-sm font-sans font-[600]"
                :class="{
                  'border-b-2 border-blue-500 text-black': isActive,
                  'text-[#666]': !isActive,
                }"
                >{{ item.title }}</span
              >
            </a>
          </router-link>
        </div>
      </div>
      <div class="mt-[16px] order-2 select-none">
        <div class="flex flex-1 space-x-2 font-poppins">
          <span class="text-[12px] font-[500] mt-[7px]">On Sale From</span>
          <span class="text-[12px] font-[600] mt-[7px]"
            >${{ formatedPrice }}</span
          >
          <div class="w-[3rem] appearance-none relative arrow-icon">
            <input
              type="number"
              :value="quantity"
              min="1"
              readonly
              class="w-full outline-none bg-[#F5F7FF] rounded-[6px] h-[30px] text-[12px] px-2 font-poppins font-[600] select-none"
            />
            <component
              :is="ArrowUpIcon"
              class="absolute top-1.5 right-1.5 cursor-pointer"
              @click="increaseQuantity"
            />
            <component
              :is="ArrowDownIcon"
              class="absolute bottom-3.5 right-1.5 cursor-pointer"
              @click="decrementQuantity"
            />
          </div>
          <div class="">
            <button
              class="text-[12px] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-1 font-medium rounded-full px-5 py-1.5 text-center mr-2 mb-2"
              @click="addToCart"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 mt-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import { numberWithCommasFormat2 } from '@/utils'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()

const quantity = ref(1)

const products = computed(() => store.state.products)

const productId = computed(() => route.params.id)

const product = computed(() => {
  return products.value.find((item) => item.id === parseInt(productId.value))
})

const formatedPrice = computed(() => {
  return numberWithCommasFormat2(product.value.discount * quantity.value)
})

const navigation = [
  {
    title: 'About Product',
    name: 'AboutProduct',
  },
  {
    title: 'Details',
    name: 'DetailsProduct',
  },
  {
    title: 'Specs',
    name: 'SpecsProduct',
  },
]

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  quantity.value++
}

const addToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    store.dispatch('addToCart', product.value)
  }
  quantity.value = 1
}
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

.arrow-icon svg path {
  fill: #a2a6b0;
}

.arrow-icon svg:hover path {
  fill: #000;
}
</style>
