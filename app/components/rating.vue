<script setup lang="ts">
const props = defineProps<{
  order: number,
  rating: number
}>();

</script>

<template>
  <div class="rating">
    <input v-for="i in 5" :key="i" :name="'rating-' + props.order" :class="['mask', 'mask-star']" :disabled="true" :checked="i === props.rating" type="radio"/>
  </div>
</template>