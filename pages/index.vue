<template>
  <v-row justify="center">
    <v-col  sm="12" md="12" lg="9" xl="7">
      <v-row justify="space-between">
        <!-- <v-col class="d-none d-sm-flex pa-0" class="d-flex d-sm-none pa-0">
            <carousel :items="pictures" :height="'350px'"></carousel>
        </v-col>-->
        <v-col class="12">
          <!-- <carousel :items="pictures" :height="'300px'"></carousel> -->
          <notice
            :item="{icon:'mdi-heart',notice:'通知',msg:'my love xiaofei love you forever,my love xiaofei love you forever,my love xiaofei !!!'}"
          ></notice>
        </v-col>
        <v-col class="py-0" cols="12">
          <dividline :item="{icon:'mdi-book',title:'最新文章' }"></dividline>
        </v-col>
        <v-col
          class="py-0"
          :key="index"
          v-for="(item,index) in $store.state.content.article.slice(0,4)"
          lg="3"
          xl="3"
          md="3"
          sm="4"
          xs='6'
        >
          <v-row justify="center">
            <v-col lg="12" xl="12" md="12" sm="12">
              <h-card :item="item"></h-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="py-0"  cols="12">
          <dividline :item="{icon:'mdi-book',title:'文章分类' }"></dividline>
        </v-col>
        <v-col
          xl="6"
          lg="6"
          md="6"
          sm="6"
          v-for="(item) in $store.state.content.article.slice((page-1)*sliceN,sliceN*page)"
          :key="item._id"
        >
          <!-- <v-row justify="center">
          <v-col class="py-0">-->
          <w-card :item="item"></w-card>
          <!-- </v-col>
          </v-row>-->
        </v-col>
        <v-col class="text-center" v-if="Math.ceil($store.state.content.article.length/sliceN)>1">
          <v-pagination
            circle
            v-model="page"
            :length="Math.ceil($store.state.content.article.length/sliceN)"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import carousel from '../components/carousel.vue'
import notice from '../components/notice.vue'
import dividline from '../components/Dividingline.vue'
import hCard from '../components/hCard.vue'
import wCard from '../components/wCard.vue'

export default {
  components: { hCard, wCard, dividline, notice, carousel },
  asyncData() {},
  data() {
    return {
      page: 1,
      sliceN: 6
    }
  },
  methods: {
    async getMusic(api) {
      let res = await this.$axios.get('http://39.105.168.171:3000' + api)
      console.log(res)
    }
  },
  created() {
    // this.getMusic('/personalized')
  }
}
</script>
