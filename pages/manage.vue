<template>
  <v-row justify="center">
    <v-col xs="12" sm="12" md="4" lg="3" xl="3">
      <!-- <systemmsg :items="fadedata" />
      <uploadavatar /> -->
    </v-col>
    <v-col class="py-0" xs="12" sm="12" md="8" lg="9" xl="6">
      <v-row justify="space-between">
        <v-col  xl="12">
          <!-- <carousel :items="pictures" :height="'300px'"></carousel> -->
          <notice
            :item="{icon:'mdi-heart',notice:'通知',msg:'my love xiaofei love you forever,my love xiaofei love you forever,my love xiaofei !!!'}"
          ></notice>
        </v-col>
        <v-col class="py-0" cols="12"><dividline :item="{icon:'mdi-book',title:'收藏的文章' }"></dividline></v-col>
        
        <v-col
      cols="6"
          v-for="(item) in $store.state.content.article.slice((page-1)*sliceN,sliceN*page)"
          v-show="item.collect.indexOf($store.state.user.userName)>-1"
          :key="item._id"
        >
          <!-- <v-row justify="center">
            <v-col class="py-0"> -->
              <w-card :item="item"></w-card>
            <!-- </v-col>
          </v-row> -->
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

        <v-col class="py-0" cols="12">
          <dividline :item="{icon:'mdi-book',title:'我的文章' }"></dividline>
        </v-col>
        <v-col
          class="py-0"
          :key="index"
          v-for="(item,index) in $store.state.content.article.slice(0,4)"
           v-show="item.author===$store.state.user.userName"
          lg="3"
          xl="3"
          md="4"
          sm="4"
          xs='6'
        >
          <v-row justify="center">
            <v-col cols="12">
              <h-card :item="item"></h-card>
            </v-col>
          </v-row>
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
import uploadavatar from '~/components/uploadavatar.vue'
import notice from '../components/notice.vue'
import dividline from '../components/Dividingline.vue'
import hCard from '../components/hCard.vue'
import wCard from '../components/wCard.vue'
import systemmsg from '~/components/systemMsg'
import { mapActions } from 'vuex'
export default {
  components: {uploadavatar,systemmsg, wCard,hCard, dividline, notice },
  name: 'user',
  data: () => ({
    sliceN: 10,
    page: 1,
    fadedata: [
      {
        title: '系统消息',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        msg:
          '姬长信API For Docker 一个基于多种编程语言开源免费不限制提供生活常用,出行服务,开发工具,金融服务,通讯服务和公益大数据的平台.!',
        time: '1hr'
      },
      {
        title: '系统消息',
        msg: '恭喜你注册成功!',
        time: '3hr',
        action: 'mdi-account-multiple'
      }
    ],
    page: 1
  }),
  methods: {
    ...mapActions(['getdata', 'userexit', 'userlogin'])
  },
  activated() {
    if (!this.$store.state.user.id) {
      this.$router.push('/login')
    } else {
    }
  },
  mounted() {
    let user = window.sessionStorage.getItem('user')
    if (user) {
      this.userlogin(JSON.parse(user))
    }
  }
}
</script>
