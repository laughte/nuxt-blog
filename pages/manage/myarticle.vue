<template>
  <v-row justify="space-between">
    <v-col>
      <transition-group name="list-complete" tag="div" class="row">
        <v-col
          class="py-0 list-complete-item"
          :key="item._id"
          v-for="(item) in myLetters.slice((page-1)*sliceN,sliceN*page)"
          lg="3"
          xl="3"
          md="6"
          sm="4"
          xs="6"
        >
          <h-card :item="item"></h-card>
        </v-col>
      </transition-group>
    </v-col>

    <v-col class="text-center" v-if="Math.ceil(myLetters.length/sliceN)>1">
      <v-pagination
        circle
        v-model="page"
        :length="Math.ceil(myLetters.length/sliceN)"
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
  name: 'myarticle',
  components: { wCard, hCard },
  data() {
    return {
      page: 1,
      sliceN: 12,
      myLetters: []
    }
  },
  methods: {
    filterdatas(item) {
      this.myLetters = []
      for (let e of item) {
        if (this.$store.state.user.name === e.author) {
          this.myLetters.push(e)
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