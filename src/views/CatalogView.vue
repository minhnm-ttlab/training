<template>
  <div>
    <div>
      <header-info />
      <navbar-component :cart-zize="cartSize" />
    </div>
    <div class="pt-9 lg:mx-20">
      <div class="justify-center flex flex-col">
        <img :src="bannerImage" alt="" />
      </div>
      <div class="mt-4">
        <div class="flex flex-1 text-sm font-sans font-[600]">
          <span>Home</span>
          <span class="mx-2 text-blue-500">›</span>
          <span>Laptop</span>
          <span class="mx-2 text-blue-500">›</span>
          <span>MSI</span>
        </div>

        <div class="flex flex-1 text-2xl font-sans font-[600] mt-4">
          <span>MSI PS Series (20)</span>
        </div>
      </div>
    </div>
    <div class="mt-4 lg:mx-20">
      <div class="flex flex-1 space-x-2 w-1/2">
        <div class="flex flex-1 space-x-4 w-1/2">
          <base-select
            :options="[
              {
                value: '1',
                label: 'Position',
              },
              {
                value: '2',
                label: 'Reviews',
              },
            ]"
            :label="'Sort by'"
            @update:sort-by="sortBy = $event"
            :selectValue="sortBy"
          />
          <base-select
            :options="[
              {
                value: '1',
                label: '35 per page',
              },
              {
                value: '2',
                label: '50 per page',
              },
            ]"
            :label="'Show'"
            @update:show="listShow = $event"
            :selectValue="listShow"
          />
        </div>
        <div class="mt-2">
          <view-style />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerImage from '@/assets/images/banner.png'
import HeaderInfo from '@/components/HeaderInfo.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import ViewStyle from '@/components/ViewStyleComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import { ref } from 'vue'
const sortBy = ref('')
const listShow = ref('')

export default {
  name: 'catalog-view',
  components: {
    HeaderInfo,
    BaseSelect,
    ViewStyle,
    NavbarComponent,
  },
  data() {
    return {
      bannerImage: BannerImage,
      sortBy,
      listShow,
      cartSize: 50,
    }
  },
}
</script>
