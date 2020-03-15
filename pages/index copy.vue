<template>
  <v-card flat class="mx-auto overflow-hidden" color="rgba(255,255,255,.6)">
    <v-row justify="center">
      <v-col sm="12" md="12" lg="9" xl="7">
        <!-- <v-row justify="space-between"> -->
        <transition-group name="list-complete-item" tag="v-row">
          <!-- <v-col class="d-none d-sm-flex pa-0" class="d-flex d-sm-none pa-0">
            <carousel :items="pictures" :height="'350px'"></carousel>
          </v-col>-->
          <v-col class="12" :key="true">
            <!-- <carousel :items="pictures" :height="'300px'"></carousel> -->
            <notice
              :item="{icon:'mdi-heart',notice:'通知',msg:'my love xiaofei love you forever,my love xiaofei love you forever,my love xiaofei !!!'}"
            ></notice>
          </v-col>
          <v-col :key="'eewsa'" class="py-0" cols="12">
            <dividline @changebadge="changebadge(item)" :item="item"></dividline>
            <button @click="shuffle">随机</button>
          </v-col>

          <v-col
            class="py-0 list-complete-item"
            :key="item.time"
            v-for="item in $store.state.content.article2.slice(0,4)"
            lg="3"
            xl="3"
            md="3"
            sm="4"
            xs="6"
          >
            <v-row justify="center">
              <v-col lg="12" xl="12" md="12" sm="12">
                <h-card :item="item"></h-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col :key="'ewesa'" class="py-0" cols="12">
            <dividline @changebadge="changebadge(item2)" :item="item2"></dividline>
            <button @click="shuffle">随机</button>
          </v-col>
          <v-col
            xl="6"
            lg="6"
            md="6"
            sm="6"
            class="list-complete-item"
            v-for="(item) in $store.state.content.article2.slice((page-1)*sliceN,sliceN*page)"
            :key="item._id"
          >
            <!-- <v-row justify="center">
            <v-col class="py-0">-->
            <w-card :item="item"></w-card>
            <!-- </v-col>
            </v-row>-->
          </v-col>
          <v-col
            :key="'sdfea'"
            cols="12"
            class="text-center"
            v-if="Math.ceil($store.state.content.article2.length/sliceN)>1"
          >
            <v-pagination
              circle
              v-model="page"
              :length="Math.ceil($store.state.content.article2.length/sliceN)"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </v-col>
        </transition-group>
      </v-col>
    </v-row>
  </v-card>
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
      sliceN: 6,
      item: {
        icon: 'mdi-book',
        title: '精品文章',
        content: 'new',
        badge: true,
        color: 'red'
      },
      item2: {
        icon: 'mdi-book',
        title: '好友动态',
        content: this.$store.state.content.article.length,
        badge: true,
        color: 'red'
      }
    }
  },
  methods: {
    async getMusic(api) {
      let res = await this.$axios.get('http://39.105.168.171:3000' + api)
    },
    changebadge(item) {
      item.badge = false
    },
    shuffle: function() {
      console.log('hello')
      this.$store.commit('shuffle')
    }
  }
}
</script>
<style>
.list-complete-item {
  /* max-width: 625px; */
  transition: all 3s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>