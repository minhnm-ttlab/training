<template>
  <tr
    class="border-b-2 border-t-2 border-[#CACDD8] text-left font-poppins"
    v-if="product"
  >
    <th scope="row" class="flex flex-1 space-x-5">
      <div class="block pt-10 md:pt-1">
        <img :src="product.image" class="min-w-[230px] min-h-[230px] p-5" />
      </div>
      <p class="w-2/3 py-5 my-5 font-medium pr-5">
        {{ product.description }}
      </p>
    </th>
    <td class="pr-10 relative">
      <span class="font-bold absolute top-10"
        >${{ numberWithCommasFormat2(price) }}</span
      >
    </td>
    <td class="pr-5 relative">
      <div class="absolute top-9">
        <div class="w-[3rem] appearance-none relative arrow-icon select-none">
          <input
            type="number"
            :value="quantity"
            min="1"
            readonly
            class="w-full outline-none bg-[#F5F7FF] rounded-[6px] h-[40px] text-[14px] px-2 font-poppins font-[600] select-none"
          />
          <component
            :is="ArrowUpIcon"
            class="absolute top-1.5 right-1.5 cursor-pointer"
            @click="handleQuantityChange(true)"
          />
          <component
            :is="ArrowDownIcon"
            class="absolute bottom-2 right-1.5 cursor-pointer"
            @click="handleQuantityChange(false)"
          />
        </div>
      </div>
    </td>
    <td class="pr-10 relative">
      <span class="font-bold absolute top-10">${{ subtotal }}</span>
    </td>
    <td class="relative">
      <div class="absolute top-10 right-3 flex flex-col space-y-3">
        <component
          :is="CloseIcon"
          @click="$emit('remove:productInCart', product)"
          class="cursor-pointer"
        />
        <component :is="EditIcon" class="cursor-pointer" />
      </div>
    </td>
  </tr>
</template>

<script setup>
import CloseIcon from '@/assets/icons/close-outline-icon.svg'
import EditIcon from '@/assets/icons/edit-outline-icon.svg'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import { numberWithCommasFormat2 } from '@/utils'
import { toRefs, ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const {
  product: { value: product },
} = toRefs(props)

const quantity = ref(product.quantity || 1)

const price = computed(() => product.price - product.discount)

const subtotal = computed(() =>
  numberWithCommasFormat2(price.value * quantity.value)
)

const handleQuantityChange = (increase = true) => {
  if (quantity.value <= 1 && !increase) return
  if (increase) {
    quantity.value++
    store.dispatch('addToCart', product)
  } else {
    quantity.value--
    store.dispatch('decreaseQuantity', product)
  }
}
</script>

<style lang="scss" scoped></style>
