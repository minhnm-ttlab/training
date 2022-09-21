<template>
  <div class="bg-white w-full h-[30px] top-0 left-0 pb-8">
    <div class="border-b-[1px]">
      <nav class="bg-white border-[#CACDD8] py-0.5 px-5 md:container">
        <div class="flex flex-wrap justify-between items-center mx-auto">
          <a href="#" class="flex items-center">
            <component :is="LogoIcon" />
          </a>
          <div class="flex order-2 space-x-3">
            <div class="pt-3 pr-2">
              <component :is="SearchIcon" class="hover:cursor-pointer" />
            </div>
            <div class="relative pt-3 pr-3">
              <router-link :to="{ name: 'CartLayout' }">
                <component :is="CartIcon" class="hover:cursor-pointer" />
                <div
                  class="absolute bg-[#0156FF] w-[15px] h-[15px] rounded-full top-0.5 right-1 flex justify-center hover:cursor-pointer"
                >
                  <span class="absolute text-white font-sans text-[10px]">{{
                    cartSize || 0
                  }}</span>
                </div>
              </router-link>
            </div>
            <a href="#" class="rounded-full hover:cursor-pointer">
              <component :is="AvatarUser" />
            </a>
          </div>
          <div
            class="container justify-between items-center w-auto md:order-1 flex"
          >
            <ul class="flex flex-row pt-3 p-2 pr-2 pl-3 text-black select-none">
              <li
                v-for="(item, index) in navigation"
                :key="index"
                class="block py-2 pr-4 pl-3 font-[600] text-sm hover:cursor-pointer"
              >
                <router-link :to="item.path">{{ item.name }}</router-link>
              </li>
            </ul>
            <button
              class="text-[#0156FF] font-[600] hover:text-white border-[2px] border-[#0156FF] hover:bg-[#0156FF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-1 text-center mr-2 mb-2 mt-2"
            >
              Our Deals
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import CartIcon from '@/assets/icons/cart-icon.svg'
import LogoIcon from '@/assets/icons/logo-icon.svg'
import SearchIcon from '@/assets/icons/search-icon.svg'
import AvatarUser from '@/assets/images/avatar-user.svg'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const navigation = [
  {
    name: 'Laptops',
    path: '/',
  },
  {
    name: 'Desktops PCs',
    path: '/',
  },
  {
    name: 'Networking Devices',
    path: '/',
  },
]

const cartSize = computed(() => store.getters.cartSize)
</script>
