<template>
  <div class="flex flex-row bg-white hover:shadow-md space-x-6 pb-5 w-full">
    <div
      class="ml-10 mt-5 w-full max-w-[100px] lg:max-w-[200px] select-none order-1"
    >
      <router-link
        :to="{
          name: 'AboutProduct',
          params: {
            id: product.id,
          },
        }"
      >
        <img :src="product.image" class="w-full select-none cursor-pointer" />
      </router-link>
      <div class="space-x-1 mt-10 flex">
        <star-rating
          :rating="product.reviews"
          active-color="#FB8200"
          :round-start-rating="false"
          :increment="1"
          active-border-color="#FB8200"
          :border-width="2"
          read-only
          :fixed-points="2"
          :star-size="5"
          :text-class="'hidden'"
        />
        <span class="text-[10px] text-[#A2A6B0] text-center mt-1.5"
          >Reviews ({{ product.reviews }})</span
        >
      </div>
    </div>
    <div class="order-2 w-full max-w-[400px] lg:max-w-[500px] pl-10 pt-10">
      <div class="flex flex-1 text-[12px] font-sans font-[500]">
        <span class="uppercase">{{ product.name }}</span>
      </div>
      <div class="flex flex-1 text-[12px] font-sans font-[600]">
        <span class="uppercase">{{ product.description }}</span>
      </div>
      <div class="flex flex-1 text-sm font-sans font-[700] pt-3">
        <span
          :class="{
            'line-through font-[400] text-[12px] pt-px': product.discount != 0,
          }"
          >${{ numberWithCommasFormat2(product.price) }}</span
        >
        <span v-if="product.discount != 0" class="text-[15px] pl-1"
          >${{
            numberWithCommasFormat2(product.price - product.discount)
          }}</span
        >
      </div>
      <div class="mt-[5.25rem]">
        <button
          class="outline-none border-[#0156FF] border-2 border-solid rounded-full px-[30px] py-1 text-sm font-semibold text-[#0156FF] btn-add flex hover:bg-[#0156FF] hover:text-white disabled:border-[#A2A6B0] disabled:text-[#A2A6B0] disabled:bg-white"
          @click="addToCart(product)"
          :disabled="!product.inStock"
        >
          <component :is="CartIcon" class="w-6 h-6 pt-1" fill="#0156FF" />
          <span class="pt-1">Add To Cart</span>
        </button>
      </div>
    </div>
    <div
      class="order-3 w-full max-w-[200px] lg:max-w-[250px] mt-[60px] space-y-4"
    >
      <div class="grid grid-rows-2 w-full">
        <div
          class="flex flex-cols text-center justify-between px-8 items-center"
        >
          <span>CPU</span>
          <span>{{ product.baseInfo.CPU }}</span>
        </div>
        <div
          class="flex flex-cols text-center justify-between px-8 bg-[#F5F7FF] py-1"
        >
          <span>Feature</span>
          <span>{{ product.baseInfo.Features }}</span>
        </div>
        <div class="flex flex-cols text-center justify-between px-8 pt-1">
          <span>I/O Ports</span>
          <span>{{ product.baseInfo['I/O Ports'] }}</span>
        </div>
      </div>
    </div>
    <div class="order-4 w-full relative">
      <div class="flex space-x-1 absolute right-2">
        <component
          :is="product.inStock ? MarkGreenIcon : CloseIcon"
          class="w-3 h-3 mt-2"
        />
        <div class="">
          <span v-if="product.inStock" class="text-[#78A962] text-[12px]"
            >in stock</span
          >
          <span v-else class="text-[12px] text-[#C94D3F]">out stock</span>
        </div>
      </div>
      <div class="flex absolute bottom-0 right-[80px] space-x-1 pl-2">
        <component :is="EmailIcon" class="hover:cursor-pointer" />
        <component :is="ChartIcon" class="hover:cursor-pointer" />
        <component :is="LoveIcon" class="hover:cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CartIcon from '@/assets/icons/cart-icon.svg'
import LoveIcon from '@/assets/icons/love-icon.svg'
import CloseIcon from '@/assets/icons/close-icon.svg'
import EmailIcon from '@/assets/icons/email-icon.svg'
import ChartIcon from '@/assets/icons/chart-icon.svg'
import MarkGreenIcon from '@/assets/icons/mark-green-icon.svg'
import StarRating from 'vue-star-rating'
import { createToaster } from '@meforma/vue-toaster'
import { numberWithCommasFormat2 } from '@/utils'
import { defineProps, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()

const toaster = createToaster({
  position: 'top-right',
  duration: 3000,
})

const addToCart = (product) => {
  store.dispatch('addToCart', product)
  toaster.success(`Add ${product.name} to cart successfully`)
}

const viewProduct = (product) => {
  router.push()
}

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const {
  product: { value: product },
} = toRefs(props)
</script>

<style>
.btn-add svg path {
  fill: #0156ff;
}
.btn-add:hover svg path {
  fill: #ffffff;
}
.btn-add:disabled svg path {
  fill: #a2a6b0;
}
</style>
