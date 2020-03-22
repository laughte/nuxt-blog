<template>
  <v-row justify="space-between">
    <!-- <v-col xl="12">
   <notice-words @random="random" :items="dailyWord"></notice-words>
    </v-col>-->

    <v-col v-if="myCollects.length>0" class="py-0" cols="12">
      <dividline
        @shuffle="localshuffle('myCollects')"
        :item="{icon:'mdi-book',title:'收藏的文章',badge:false }"
      ></dividline>
    </v-col>

    <v-col>
      <transition-group name="list-complete" tag="div" class="row">
        <v-col
          class="list-complete-item"
          md="12"
          lg="6"
          xl="6"
          sm="6"
          v-for="(item) in myCollects.slice((page-1)*sliceN,sliceN*page)"
          :key="item.time"
        >
          <w-card :item="item"></w-card>
        </v-col>
      </transition-group>
    </v-col>

    <!-- <v-col class="text-center" v-if="Math.ceil(myCollects.length/sliceN)>1">
      <v-pagination
        circle
        v-model="page"
        :length="Math.ceil(myCollects.length/sliceN)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </v-col>-->

    <v-col v-if="myLetters.length>0" class="py-0" cols="12">
      <dividline @shuffle="localshuffle('myLetters')" :item="item2"></dividline>
    </v-col>

    <v-col>
      <transition-group name="list-complete" tag="div" class="row">
        <v-col
          class="list-complete-item"
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
  </v-row>
</template>

<script>
// import noticeWords from '../components/noticeWords.vue'
import dividline from '~/components/Dividingline.vue'
import hCard from '~/components/hCard.vue'
import wCard from '~/components/wCard.vue'
export default {
  name: 'manageindex',
  components: { wCard, hCard, dividline },
  data() {
    return {
      sliceN: 10,
      page: 1,
      item2: {
        icon: 'mdi-book',
        title: '我的文章',
        badge: false,
        color: 'red'
      },
      myCollects: [],
      myLetters: []
    }
  },
  methods: {
    filterdatas(item) {
      this.myCollects = []
      this.myLetters = []
      for (let e of item) {
        let n = e.collect.indexOf(this.$store.state.user.name)

        if (n > -1) {
          this.myCollects.push(e)
        }
        if (this.$store.state.user.name === e.author) {
          this.myLetters.push(e)
        }
      }
    },
    changebadge(item) {
      item.badge = false
    },
    localshuffle(type) {
      this[type] = _.shuffle(this[type])
    }
  },
  watch: {
    article: {
      //深度监听，可监听到对象、数组的变化
      handler(val, oldVal) {
        this.filterdatas(val)
      },
      deep: true //true 深度监听
    }
  },
  computed: {
    article: function() {
      return this.$store.state.content.article
    }
  },
  activated() {
    this.filterdatas(this.$store.state.content.article)
  }
}
</script>

<style>
</style>