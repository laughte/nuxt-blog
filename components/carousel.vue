<template>
  <v-carousel show-arrows-on-hover :height="height" hide-delimiters cycle touchless>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.imageUrl"></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    height: String,
    items: Array
  }
}
</script>