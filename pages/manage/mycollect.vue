<template>
  <v-row justify="space-between">
    <v-col>
      <transition-group name="list-complete" tag="div" class="row">
        <v-col
          class="list-complete-item"
          md="12"
          lg="6"
          xl="6"
          sm="6"
          v-for="(item) in myCollects.slice((page-1)*sliceN,sliceN*page)"
          :key="item._id"
        >
          <w-card :item="item"></w-card>
        </v-col>
      </transition-group>
    </v-col>

    <v-col class="text-center" v-if="Math.ceil(myCollects.length/sliceN)>1">
      <v-pagination
        circle
        v-model="page"
        :length="Math.ceil(myCollects.length/sliceN)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </v-col>
  </v-row>
</template>

<script>
import hCard from '~/components/hCard.vue'
import wCard from '~/components/wCard.vue'
export default {
  name: 'mycollect',
  components: { wCard, hCard },
  data() {
    return {
      myCollects: [],
      sliceN: 10,
      page: 1
    }
  },
  methods: {
    filterdatas(item) {
      this.myCollects = []
      for (let e of item) {
        let n = e.collect.indexOf(this.$store.state.user.name)
        if (n > -1) {
          console.log(e)
          this.myCollects.push(e)
        }
      }
    }
  },
  activated() {
    this.filterdatas(this.$store.state.content.article)
  }
}
</script>

<style>
</style>