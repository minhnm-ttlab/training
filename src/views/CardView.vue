<template>
  <div>
    <div class="absolute bg-[#E5E5E5] justify-center">
      <div
        class="absolute w-[140px] h-[140px] left-[833px] top-[433px] bg-[#0094FF] blur-[200px]"
      ></div>
      <div
        class="absolute w-[575px] h-[575px] left-[772px] top-[253px] bg-gradient-to-t from-[#8BB5FF] to-[#E1FBFF] blur-[200px]"
      ></div>
      <div
        class="absolute w-[375px] h-[420px] left-[560px] top-[288px] bg-[#ff90ea] blur-[400px]"
      ></div>
      <div
        class="absolute w-[816px] h-[698px] -left-[8px] top-[121px] bg-[#ffdeda] blur-[300px] transform -rotate-[12.05]"
      ></div>
    </div>
    <div class="flex justify-center">
      <h3
        class="absolute w-[455px] h-[64px] pt-10 text-[56px] font-semibold leading-[64px] text-center text-black"
      >
        Inside Open Art
      </h3>

      <div
        class="absolute grid gap-x-4 gap-y-6 lg:grid-cols-2 xl:grid-cols-3 w-full px-20 pt-[200px]"
      >
        <CardComponent
          v-for="card in cards"
          :key="card.id"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardComponent from '@/components/Card.vue'
import cardList from '@/data/cardList'

export default {
  name: 'CardView',
  components: {
    CardComponent,
  },
  data() {
    return {
      cards: cardList,
    }
  },
}
</script>
