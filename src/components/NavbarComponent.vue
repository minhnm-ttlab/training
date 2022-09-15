<template>
  <div class="bg-white w-full h-[30px] sticky top-0 left-0">
    <nav
      class="bg-white border-1 border-solid border-[#CACDD8] rounded py-0.5 border-b-[1px] px-5"
    >
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
          <img :src="logoIcon" />
        </a>
        <div class="flex order-2 space-x-3">
          <div class="pt-3 pr-2">
            <img :src="searchIcon" alt="" class="hover:cursor-pointer" />
          </div>
          <div class="relative pt-3 pr-3">
            <img :src="cartIcon" alt="" class="hover:cursor-pointer" />
            <div
              class="absolute bg-[#0156FF] w-[15px] h-[15px] rounded-full top-0.5 right-2.5 flex justify-center hover:cursor-pointer"
            >
              <span class="absolute text-white font-sans text-[10px]">{{
                cartSize || 0
              }}</span>
            </div>
          </div>
          <a href="#" class="rounded-full hover:cursor-pointer">
            <img :src="avatarUser" alt="" />
          </a>
        </div>
        <div
          class="container justify-between items-center w-auto md:order-1 flex"
        >
          <ul class="flex flex-row pt-3 p-2 pr-2 pl-3 text-black select-none">
            <li
              v-for="(title, index) in navigation"
              :key="index"
              class="block py-2 pr-4 pl-3 font-[600] text-sm hover:cursor-pointer"
            >
              {{ title }}
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
</template>

<script>
import CartIcon from '@/assets/icons/cart-icon.svg'
import LogoIcon from '@/assets/icons/logo-icon.svg'
import SearchIcon from '@/assets/icons/search-icon.svg'
import AvatarUser from '@/assets/images/avatar-user.svg'

const navigation = [
  'Laptops',
  'Desktops PCs',
  'Networking Devices',
  'Printers & Scanners',
  'PC Parts',
  'All Other Products',
  'Repairs',
]

export default {
  name: 'navbar-component',
  props: {
    'cart-size': {
      type: Number,
      default: 50,
    },
  },
  setup() {
    return {
      cartIcon: CartIcon,
      logoIcon: LogoIcon,
      searchIcon: SearchIcon,
      avatarUser: AvatarUser,
      navigation,
    }
  },
}
</script>
