<template>
  <div
    :min-height="maxheight"
    class="wrap"
    v-touch="{
      left: () => swipe('Left'),
      right: () => swipe('Right'),
      up: () => swipe('Up'),
      down: () => swipe('Down')
    }"
  >
    <v-card
      flat
      :min-height="maxheight"
      :class="flag?'card1_1':''"
      class="card1 mx-auto"
      :color="item.color"
      :dark="item.flag"
    >
      <v-toolbar flat color="cyan" dark>
        <v-avatar size="42" color="grey darken-3">
          <v-img class="elevation-6" :src="item.avatar"></v-img>
        </v-avatar>

        <v-toolbar-title class="pl-2 headline">{{item.name}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="ml-6 pl-12 pr-8 py-0 headline font-weight-bold">{{item.text}}</v-card-text>

      <v-card-text class="ml-6 pl-12 pr-6 py-0" style="opacity:.6">{{item.time}}</v-card-text>

      <v-card-actions class="justify-space-around">
        <v-btn icon>
          <v-icon class="mr-1">mdi-heart</v-icon>赞
        </v-btn>
        <v-btn @click="showmsg" icon>
          <v-icon class="mr-1">mdi-message</v-icon>评论
        </v-btn>
        <v-btn icon>
          <v-icon class="mr-1">mdi-share-variant</v-icon>分享
        </v-btn>
      </v-card-actions>

      <v-list color="transparent" three-line>
        <template v-for="(item, index) in items.slice(0,1 )">
          <v-divider :key="index" :inset="true"></v-divider>
          <v-list-item :key="item.title" @click="showmsg">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-card-actions class="justify-center">
        <button @click="showmsg" icon>
          <v-icon>mdi-menu-down</v-icon>
        </button>
      </v-card-actions>
    </v-card>

    <v-card
      :height="maxheight"
      :color="item.color"
      dark
      class="card2 overflow-hidden"
      :class="flag?'card2_1':''"
    >
      <v-card-title>
        <v-avatar size="42" color="grey darken-3">
          <v-img class="elevation-6" :src="$store.state.user.imgsrc?$store.state.user.imgsrc:''"></v-img>
        </v-avatar>

        <span
          class="title pl-2 headline"
        >{{$store.state.user.userName?$store.state.user.userName:''}}</span>
      </v-card-title>

      <v-textarea
        class="ml-6 pl-12 pr-8 py-0"
        solo
        flat
        filled
        v-model="msgcontent"
        name="input-7-4"
        label="回复信息!"
      ></v-textarea>
      <v-card-actions>
        <v-btn small color="transparent" @click="backmsg">取消</v-btn>
        <v-btn
          :disabled="btnDisabled && $store.state.user.userName ? false:true"
          small
          color="transparent"
          @click="addmsg"
        >回复</v-btn>
      </v-card-actions>

      <v-list color="transparent" three-line>
        <template v-for="(item, index) in items.slice((page-1)*sliceN,sliceN*page)">
          <v-divider :key="index" :inset="true"></v-divider>
          <v-list-item :key="item.title" @click>
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-col cols="12" class="text-center" v-if="Math.ceil(items.length/sliceN)>1">
          <v-pagination
            circle
            v-model="page"
            :length="Math.ceil(items.length/sliceN)"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </v-col>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'twittercard',
  props: { item: Object, items: Array },
  data: () => ({
    page: 1,
    sliceN: 6,
    flag: false,
    btnDisabled: false,
    msgcontent: '',
    maxheight: '426px'
  }),

  methods: {
    ...mapMutations(['articleEdit']),
    swipe(direction) {},
    watchnow() {
      this.articleEdit({ data: this.item, type: 'see' })
    },
    showmsg() {
      this.flag = ~this.flag
      setTimeout(() => {
        this.maxheight = '900px'
      }, 600)
    },
    backmsg() {
      this.maxheight = '426px'
      setTimeout(() => {
        this.flag = !this.flag
      }, 620)
    },
    addmsg() {}
  },

  computed: {
    lContent() {
      return this.msgcontent.length
    }
  },
  watch: {
    lContent: function(n, o) {
      this.btnDisabled = n > 3
    }
  }
}
</script>

<style scoped>
/* 保证正反面一样大，不然反转会很突兀*/
.wrap {
  position: relative;
}
.wrap,
.card1,
.card2 {
  width: 100%;
  transition: all 0.6s;
}

.card1,
.card2 {
  backface-visibility: hidden;
}

.card2 {
  top: 0;

  position: absolute;
  transform: rotateY(180deg);
}
.card2_1 {
  transform: rotateY(0deg);
}
.card1_1 {
  transform: rotateY(180deg);
}
</style>