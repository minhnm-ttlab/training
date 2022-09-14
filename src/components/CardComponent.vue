<template>
  <div
    class="bg-white flex flex-col gap-x-[12px] items-start py-[16px] rounded max-w-[250px] w-full mx-auto transition-all transition-300 hover:ease-in-out hover:shadow-lg hover:cursor-pointer relative min-h-full h-[470px]"
    v-if="product"
  >
    <div class="w-full rounded-sm">
      <img :src="product.image" class="max-w-full" />
    </div>
    <div
      class="font-medium text-[#19191D] leading-normal tracking-[0.0275em] font-sans text-left pl-4"
    >
      {{ product.description }}
    </div>
    <div
      class="flex justify-between items-center w-full pt-2 absolute bottom-[7rem]"
    >
      <div
        class="pl-[16px] leading-normal text-[#000000DE] text-[24px] flex items-center font-[700] tracking-[0.0275em] font-sans"
      >
        ${{ product.price }}
      </div>
      <!-- badge -->
      <div v-if="product.badge" class="mx-3">
        <base-badge
          :type="product.badge.type"
          :content="product.badge.content"
          class="font-[500]"
        />
      </div>
    </div>
    <div
      class="font-sans text-[#787885] text-[16px] text-left pl-4 absolute bottom-16"
    >
      {{ product.addtional }}
    </div>
    <div
      class="w-full flex justify-between items-center mx-3 pt-5 bottom-3 left-0 absolute"
    >
      <div class="flex gap-x-[8px]">
        <star-rating :rating="parseFloat(product.rating)" />
      </div>
      <div class="mx-auto group">
        <button
          type="button"
          class="space-x-1 px-[10px] py-[4px] border border-soild border-[#9dc2ff] text-[#2264d1] font-sans font-[500] bg-transparent rounded flex items-center"
          :class="{
            'bg-[#2264d1] text-white border-transparent group-hover:bg-transparent group-hover:text-[#2264d1] group-hover:border-[#2264d1]':
              product.watched == true,
            'group-hover:bg-[#2264d1] group-hover:text-white group-hover:border-transparent':
              product.watched == false,
          }"
          @click="handleWatch()"
        >
          <heart-icon
            :class="{
              'fill-[#2264d1] group-hover:fill-white': product.watched == false,
              'fill-white group-hover:fill-[#2264d1]': product.watched == true,
            }"
          />
          <span> </span>
          {{ product.watched ? 'Watched' : 'Watch' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBadge from '@/components/BaseBadge.vue'
import HeartIcon from '@/components/svg/Heart.vue'
import StarRating from '@/components/StarRating.vue'
import { useStore } from 'vuex'
import { toRefs } from 'vue'

export default {
  name: 'card-component',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseBadge,
    HeartIcon,
    StarRating,
  },
  setup(props) {
    const store = useStore()
    const { product } = toRefs(props)
    const handleWatch = () => {
      if (product.value.watched)
        store.dispatch('toggleUnwatched', product.value.id)
      else store.dispatch('toggleWatched', product.value.id)
    }
    return {
      handleWatch,
    }
  },
}
</script>
