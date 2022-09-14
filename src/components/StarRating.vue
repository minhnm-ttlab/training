<template>
  <div>
    <StarRating
      :rating="rating"
      active-color="#FB8200"
      :round-start-rating="false"
      :increment="0.01"
      active-border-color="#FB8200"
      :border-width="2"
      read-only
      :fixed-points="2"
      :star-size="10"
    />
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'star-rating',
  components: {
    StarRating,
  },
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
}
</script>
