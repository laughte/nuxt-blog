<template>
  <div :min-height="maxheight" class="wrap">
    <v-card
      :min-height="maxheight"
      flat
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
          <v-img class="elevation-6" :src="$store.state.user.imgsrc"></v-img>
        </v-avatar>

        <span class="title pl-2 headline">{{$store.state.user.userName}}</span>
      </v-card-title>

      <v-textarea solo flat filled v-model="msgcontent" name="input-7-4" label="回复信息!"></v-textarea>
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
  props: { item: Object },
  data: () => ({
    page: 1,
    sliceN: 6,
    flag: false,
    btnDisabled: false,
    msgcontent: '',
    maxheight: '426px',
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }
    ]
  }),

  methods: {
    ...mapMutations(['articleEdit']),
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
    }
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
.wrap,
.card1,
.card2 {
  width: 960px;
  transition: all 0.6s;
}

/*使正反面在同一位置*/
.card1,
.card2 {
  position: absolute;
  top: 0;
  left: 0;

  backface-visibility: hidden; /*这个属性至关重要，当元素不面向屏幕时不可见，不然的话上面的div翻转180度后还是覆盖在下面的div上*/
}

.card2 {
  /*先使背面翻转180度，当和正面一起翻转时正好背面作为正面*/
  transform: rotateY(180deg);
}
.card2_1 {
  /*背面作为正面*/
  transform: rotateY(0deg);
}
.card1_1 {
  /*正面作为背面*/
  transform: rotateY(180deg);
}
</style>