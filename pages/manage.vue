<template>
  <v-row justify="center">
    <v-col xs="12" sm="12" md="3" lg="2" xl="2">
      <navigationdraw :items="navigations" />
      <!-- <systemmsg :items="fadedata" />
      <uploadavatar />-->
    </v-col>
    <v-col class="py-0" xs="12" sm="12" md="7" lg="9" xl="7">
      <nuxt-child keep-alive />

      <!-- <v-col class="text-center" v-if="Math.ceil($store.state.content.article.length/sliceN)>1">
          <v-pagination
            circle
            v-model="page"
            :length="Math.ceil($store.state.content.article.length/sliceN)"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
      </v-col>-->
    </v-col>
  </v-row>
</template>

<script>
import navigationdraw from '~/components/navigationdraw.vue'

import systemmsg from '~/components/systemMsg'
import { mapActions } from 'vuex'
export default {
  components: {
    navigationdraw,

    systemmsg
  },
  name: 'user',
  data: () => ({
    sliceN: 10,
    page: 1,
    collectbadge: Number,
    navigations: [
      { title: '总览', icon: 'mdi-view-dashboard', path: '/manage/' },
      {
        title: '个人信息',
        icon: 'mdi-information',
        path: '/manage/userinfo',
        badge: '9',
        color: 'red'
      },
      {
        title: '我的文章',
        icon: 'mdi-book',
        path: '/manage/myarticle',
        badge: '',
        color: 'red'
      },
      {
        title: '我的收藏',
        icon: 'mdi-star',
        path: '/manage/mycollect',
        badge: 9,
        color: 'red'
      },
      {
        title: '我的消息',
        icon: 'mdi-message-processing',
        path: '/manage/message'
      },
      {
        title: '上传头像',
        icon: 'mdi-account-circle',
        path: '/manage/uploadavatar'
      }
    ],
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
    ...mapActions(['getdata', 'userexit', 'userlogin']),
    collectarticle() {
      let C = []
      this.$store.state.content.article.forEach(e => {
        if (e.collect.indexOf(this.$store.state.user.userName) > -1) {
          C.push(e)
        }
      })
    }
  },
  computed: {},
  watch: {},
  activated() {
    if (!this.$store.state.user.id) {
      this.$router.push('/login')
    } else {
      console.log(this.$store.state.user)
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
