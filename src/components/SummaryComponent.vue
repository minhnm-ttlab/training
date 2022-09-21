<template>
  <div class="bg-[#F5F7FF] w-full">
    <div class="font-poppins py-10 px-12">
      <span class="text-3xl font-medium">Summary</span>
      <div class="my-5">
        <div>
          <form>
            <div
              class="flex justify-between hover:cursor-pointer"
              @click="isCloseEstimate = !isCloseEstimate"
            >
              <span class="text-lg">Estimate Shipping and Tax</span>
              <component
                class="mt-3"
                :is="isCloseEstimate ? ArrowDownIcon : ArrowUpIcon"
              ></component>
            </div>
            <div class="font-poppins font-[400] my-3">
              <span class="text-[#666]"
                >Enter your destination to get a shipping estimate.</span
              >
            </div>
            <div v-if="!isCloseEstimate">
              <div
                class="font-poppins w-full flex flex-col relative space-y-2 pt-2"
              >
                <label class="font-semibold">Country</label>
                <component
                  :is="ArrowDownIcon"
                  class="absolute top-[3.75rem] right-5"
                />
                <select
                  v-model="userCountry"
                  class="py-4 px-5 rounded-md border-2 border-[#A2A6B0] appearance-none outline-none font-medium"
                >
                  <option
                    v-for="(item, index) in countries"
                    :key="index"
                    :value="item.country"
                  >
                    {{ item.country }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col pt-3">
                <label class="font-semibold pb-2">State/Province</label>
                <input
                  v-model="userState"
                  type="text"
                  class="py-4 px-5 rounded-md border-2 border-[#A2A6B0] outline-none font-medium"
                />
              </div>
              <div class="flex flex-col pt-3">
                <label class="font-semibold pb-2">Zip/Postal Code</label>
                <input
                  v-model.number="userPostalCode"
                  type="text"
                  class="py-4 px-5 rounded-md border-2 border-[#A2A6B0] outline-none font-medium"
                />
              </div>
              <div class="flex flex-col pt-5 items-start">
                <div>
                  <p class="font-semibold pb-2">Standard Rate</p>
                  <div class="space-x-2 flex flex-1">
                    <input
                      type="checkbox"
                      class="w-5 h-5 mt-0.5"
                      v-model="standardRate"
                    />
                    <label class="font-medium"
                      ><p>Price may vary depending on the item/destination.</p>
                      <p>Shop Staff will contact you. $21.00</p></label
                    >
                  </div>
                </div>
                <div>
                  <p class="font-semibold py-2">Pickup from store</p>
                  <div class="space-x-2 flex flex-1">
                    <input
                      type="checkbox"
                      class="w-5 h-5"
                      v-model="pickupStore"
                    />
                    <label class="font-medium"
                      ><p>1234 Street Adress City Address, 1234 $0.00</p></label
                    >
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form @submit.prevent="onApplyDiscount">
            <div
              class="flex justify-between pt-4 hover:cursor-pointer"
              @click="isCloseApplyDiscountCode = !isCloseApplyDiscountCode"
            >
              <span class="text-lg">Apply Discount Code</span>
              <component
                class="mt-3"
                :is="isCloseApplyDiscountCode ? ArrowDownIcon : ArrowUpIcon"
              ></component>
            </div>
            <div v-if="!isCloseApplyDiscountCode">
              <div class="flex flex-col pt-3">
                <label class="font-semibold pb-2">Enter discount code</label>
                <input
                  v-model="discountCode"
                  type="text"
                  class="py-4 px-5 rounded-md border-2 border-[#A2A6B0] outline-none font-medium"
                  placeholder="Enter discount code"
                />
              </div>
              <div class="mt-5 w-full">
                <button
                  class="text-[#0156FF] font-[600] hover:text-white border-2 border-[#0156FF] hover:bg-[#0156FF] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-md py-3 text-center w-full"
                >
                  Apple Discount
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="border-b-2 border-[#CACDD8] my-5"></div>
        <div class="font-semibold font-poppins">
          <form>
            <div class="flex justify-between pt-5">
              <span class="text-lg">Subtotal</span>
              <span class="text-lg"
                >$ {{ numberWithCommasFormat2(subtotal) }}</span
              >
            </div>
            <div class="flex justify-between pt-5">
              <span class="text-lg">Shipping</span>
              <span class="text-lg"
                >$ {{ numberWithCommasFormat2(shippingCost) }}</span
              >
            </div>
            <div class="font-normal text-sm w-3/4">
              <p class="text-[#A2A6B0]">
                (Standard Rate - Price may vary depending on the
                item/destination. TECS Staff will contact you.)
              </p>
            </div>
            <div class="flex justify-between pt-5">
              <span class="text-lg">Tax</span>
              <span class="text-lg">$ {{ numberWithCommasFormat2(tax) }}</span>
            </div>
            <div class="flex justify-between pt-5">
              <span class="text-lg">GST (10%)</span>
              <span class="text-lg">$ {{ numberWithCommasFormat2(gst) }}</span>
            </div>
            <div class="flex justify-between pt-5">
              <span class="text-lg">Order Total</span>
              <span class="text-lg"
                >$ {{ numberWithCommasFormat2(orderTotal) }}</span
              >
            </div>
            <div class="pt-5">
              <button
                type="button"
                class="text-white bg-[#0156FF] hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg w-full py-4 text-center"
              >
                Proceed to Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import countries from '@/data/countries'
import { ref, computed, toRefs } from 'vue'
import { useStore } from 'vuex'

import { numberWithCommasFormat2 } from '@/utils'

const store = useStore()

const isCloseApplyDiscountCode = ref(true)
const isCloseEstimate = ref(true)
const userCountry = ref('Viet Nam')
const userPostalCode = ref('')
const userState = ref('')
const discountCode = ref('')
const standardRate = ref('')
const pickupStore = ref('')

const onApplyDiscount = () => {
  console.log('Apply Discount')
}

const cart = computed(() => store.state.cartItems)
const subtotal = computed(() => {
  const subtotalAll = store.state.cartItems.reduce(
    (prev, cur) => prev + store.getters.getSubtotal(cur.id),
    0
  )
  return subtotalAll
})
const shippingCost = computed(() => (standardRate.value ? 21 : 0))
const tax = computed(() => (standardRate.value ? 1.91 : 0))
const gst = computed(() => subtotal.value * 0.1)
const orderTotal = computed(() => {
  return subtotal.value + shippingCost.value + tax.value + gst.value
})
</script>

<style lang="scss" scoped></style>
