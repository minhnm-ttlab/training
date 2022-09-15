<template lang="">
  <div class="w-full h-8 bg-black mx-auto">
    <div class="flex flex-wrap justify-between items-center px-5">
      <div class="mt-0.5">
        <span class="text-[#A2A6B0] font-sans font-[500]">Mon-Thu:</span>
        <span class="text-white font-sans font-[500]"> 9:00 AM - 5:30 PM</span>
      </div>
      <div class="mt-0.5">
        <div class="mx-auto space-x-2 flex">
          <span class="text-[#ACACAC]"
            >Visit our showroom in 1234 Street Adress City Address, 1234</span
          >
          <div
            class="border-b-2 border-solid border-white w-[80px] justify-center hover:cursor-pointer rounded-sm"
          >
            <span class="text-white">Contact Us</span>
          </div>
        </div>
      </div>
      <div class="mt-0.5">
        <div class="mx-auto flex space-x-3">
          <span class="text-white font-[500]">Call Us: (00) 1234 5678</span>
          <img :src="facebookIcon" alt="" class="hover:cursor-pointer" />
          <img :src="instagramIcon" alt="" class="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import InstagramIcon from '@/assets/icons/instagram-icon.svg'
export default {
  name: 'header-info',
  data() {
    return {
      facebookIcon: FacebookIcon,
      instagramIcon: InstagramIcon,
    }
  },
}
</script>
<style lang=""></style>
