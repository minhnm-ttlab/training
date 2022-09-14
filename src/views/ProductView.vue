<template>
  <div class="container mx-auto">
    <div class="rounded-lg shadow-md py-5">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center">
        <div class="w-2/3 mb-3 items-center pt-3 gap-3 col-start-1">
          <div class="flex">
            <div class="ml-5">
              <base-select
                :options="[
                  { name: 'Price', value: 'price' },
                  { name: 'Rating', value: 'rating' },
                ]"
                v-model="sortBy"
                @update:sortBy="sortByOption($event)"
                :label="'Sort by'"
              />
            </div>
            <div class="">
              <base-select
                :options="[
                  {
                    name: 'Condition',
                    value: 'condition',
                  },
                ]"
              />
            </div>
            <div>
              <base-select
                :options="[
                  {
                    name: 'Delivery option',
                    value: 'delivery',
                  },
                ]"
              />
            </div>
          </div>
        </div>
        <div
          class="xl:ml-20 flex flex-1 items-center col-span-3 lg:col-start-3 lg:col-end-4 select-none"
        >
          <div class="w-2/3 mx-3">
            <segmented-show />
          </div>
          <div class="w-1/3 mx-3">
            <segmented-view />
          </div>
        </div>
      </div>
      <div class="px-5 mb-5 flex ml-1.5">
        <span class="font-semibold items-center mt-3 font-sans left-0"
          >Related</span
        >
        <tag-component
          v-for="tag in tags"
          :key="tag.label"
          :tag="tag.label"
          @click="filterByTag(tag)"
          class="select-none"
        />
      </div>
      <div class="grid gap-[8px] grid-cols-auto">
        <card-component
          v-for="product in sortedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div class="flex flex-wrap space-x-4">
      <footer-card
        v-for="(card, index) in footerData"
        :key="index"
        :icon="card.icon"
        :description="card.description"
        :title="card.title"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import * as _ from 'lodash'
import { ref, computed } from 'vue'
import BaseSelect from '@/components/BaseSelect.vue'
import TagComponent from '@/components/TagComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import SegmentedShow from '@/components/SegmentedShow.vue'
import SegmentedView from '@/components/SegmentedView.vue'
import FooterCard from '@/components/FooterCard.vue'
import footerData from '@/data/footer'

const tags = ref([
  {
    label: 'All',
    value: () => true,
  },
  {
    label: 'Watched',
    value: (item) => item.watched,
    key: 'watched',
  },
  {
    label: 'Less than 30$',
    value: (item) => item.price < 30,
    key: 'price',
  },
  {
    label: 'Rating 4.5+',
    value: (item) => item.rating > 4.5,
    reverse: true,
    key: 'rating',
  },
])
const sortBy = ref('price')
const filter = ref(null)

const filterByTag = (tag) => {
  filter.value = tag || null
}

const sortByOption = (options) => {
  sortBy.value = options
}
export default {
  name: 'ProductView',
  components: {
    BaseSelect,
    TagComponent,
    CardComponent,
    SegmentedShow,
    SegmentedView,
    FooterCard,
  },
  data() {
    return {
      tags: tags,
      footerData: footerData,
    }
  },
  setup() {
    const store = useStore()
    const products = computed(() => store.state.product)

    const sortedProducts = computed(() => {
      const productList = [...products.value]
      if (!filter.value) return _.sortBy(productList, sortBy.value, 'asc')
      const filtered = _.filter(productList, filter.value.value).map((item) => {
        return {
          ...item,
          price: parseFloat(item.price),
          rating: parseFloat(item.rating),
        }
      })
      const sorted = _.sortBy(filtered, filter.value.key, 'desc')
      if (filter.value.reverse) return sorted.reverse()
      return sorted
    })

    return {
      filterByTag,
      sortedProducts,
      sortBy,
      sortByOption,
    }
  },
}
</script>

<style scoped></style>
