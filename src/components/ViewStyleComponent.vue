<template>
  <div class="flex flex-1">
    <div>
      <!-- <img
        :src="gridIcon"
        :class="{
          'fill-black': viewStyle === 'grid',
          'fill-[#A2A6B0]': viewStyle !== 'grid',
        }"
        class="hover:cursor-pointer"
        @click="changeViewStyle('grid')"
      /> -->
      <div v-html="require(`@/assets/icons/list-view.svg`)"></div>
    </div>
    <div>
      <img
        :src="listIcon"
        :class="{
          'fill-black': viewStyle === 'list',
          'fill-[#A2A6B0]': viewStyle !== 'list',
        }"
        class="hover:cursor-pointer"
        @click="changeViewStyle('list')"
      />
    </div>
  </div>
</template>

<script>
import ListIcon from '@/assets/icons/list-view.svg'
import GridIcon from '@/assets/icons/grid-view.svg'
import { ref } from 'vue'
const viewStyle = ref('grid')

export default {
  name: 'view-style',
  setup() {
    const changeViewStyle = (style) => {
      viewStyle.value = style
      console.log(viewStyle.value)
    }
    return {
      listIcon: ListIcon,
      gridIcon: GridIcon,
      viewStyle,
      changeViewStyle,
    }
  },
}
</script>

<style lang="scss" scoped></style>
