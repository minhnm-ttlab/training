<template lang="">
  <div class="w-full h-8 bg-black mx-auto font-sans">
    <div class="flex flex-wrap justify-between items-center px-5">
      <div class="mt-0.5">
        <span class="text-[#A2A6B0] font-sans font-[500] text-[12px]"
          >Mon-Thu:</span
        >
        <span class="text-white font-sans font-[500] text-[12px]">
          9:00 AM - 5:30 PM</span
        >
      </div>
      <div class="mt-0.5">
        <div class="mx-auto space-x-2 flex">
          <span class="text-[#ACACAC] text-[12px] text-center mt-1.5"
            >Visit our showroom in 1234 Street Adress City Address, 1234</span
          >
          <div class="hover:cursor-pointer mt-px">
            <span class="text-white text-[12px] leading-[2px]">Contact Us</span>
            <div
              class="border-t-2 border-solid border-white w-[65px] justify-center rounded-full"
            ></div>
          </div>
        </div>
      </div>
      <div class="mt-1">
        <div class="mx-auto flex space-x-3 text-[12px]">
          <span class="text-white font-[500]">Call Us: (00) 1234 5678</span>
          <component :is="FacebookIcon" class="hover:cursor-pointer" />
          <component :is="InstagramIcon" class="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import InstagramIcon from '@/assets/icons/instagram-icon.svg'
</script>
<style lang=""></style>
