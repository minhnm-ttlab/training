<template>
  <div class="pt-9 mx-5">
    <div class="">
      <div class="text-[13px] font-poppins font-medium space-x-1 pt-12">
        <span class="">Home</span>
        <span class="text-blue-600">›</span>
        <span class="">Login</span>
      </div>
      <div class="my-10">
        <span class="font-poppins text-5xl font-medium">Shopping Cart</span>
      </div>
    </div>
    <div class="flex flex-col md:flex-row font-poppins space-x-8">
      <div class="w-3/5">
        <div class="overflow-x-auto relative">
          <table class="w-full text-left border-b-2 border-[#CACDD8]">
            <thead class="text-lg">
              <tr>
                <th class="py-3 pr-6" scope="col">Item</th>
                <th class="py-3 pr-20" scope="col">Price</th>
                <th class="py-3 pr-10" scope="col">Qty</th>
                <th class="py-3 pr-20" scope="col">Subtotal</th>
                <th class="py-3 pr-6" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <product-card-2
                v-for="(item, index) in cart"
                :key="index"
                :product="item"
                @remove:product-in-cart="removeProductInCart"
                ref="cart"
              />
            </tbody>
          </table>
        </div>
        <div class="flex flex-row justify-between mt-5">
          <div class="flex flex-row space-x-5">
            <router-link :to="{ name: 'CatalogView' }">
              <button
                type="button"
                class="py-2.5 px-8 mr-2 mb-2 text-sm font-medium text-[#A2A6B0] focus:outline-none bg-white rounded-full border-2 border-[#A2A6B0] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Continue Shopping
              </button>
            </router-link>
            <div>
              <button
                type="button"
                @click="clearCart"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5"
              >
                Clear Shopping Cart
              </button>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5"
            >
              Update Shopping Cart
            </button>
          </div>
        </div>
      </div>
      <div class="w-2/5">
        <summary-component />
      </div>
    </div>
    <div class="mb-20"></div>
  </div>
</template>

<script setup>
import ProductCard2 from '@/components/ProductCard2.vue'
import SummaryComponent from '@/components/SummaryComponent'
import product from '@/data/product'

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cart = computed(() => store.state.cartItems)

const removeProductInCart = (product) => {
  console.log(product)
  store.dispatch('removeFromCart', product)
}
const clearCart = () => {
  store.dispatch('clearCart')
}
</script>
