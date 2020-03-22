<template>
  <v-card flat class="cardmange" color="rgba(255,255,255,0)">
    <v-app-bar dense color="transparent" flat dark>
      <v-app-bar-nav-icon @click="changedrawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer class="navigastyle" fixed color="#F7E7ED" v-model="drawer">
      <v-list color="transparent" dense>
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col>
          </v-row>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4" />
          <v-list-item v-else-if="item.action" :key="i" @click="item.action">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else :key="i" :to="item.path">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-row justify="center">
      <v-col class="py-0" xs="12" sm="12" md="7" lg="9" xl="7">
        <nuxt-child keep-alive />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'user',
  data() {
    return {
      drawer: true,
      navStyle: {
        hideOverlay: true,
        clipped: false,
        color: 'rgba(160,120,225,0)',
        miniVariant: false,
        disableResizeWatcher: false,
        dark: true
      },

      sliceN: 10,
      page: 1,
      collectbadge: Number,
      items: [
        {
          icon: 'mdi-view-dashboard',
          text: '总览',
          path: '/manage/',
          badge: false
        },
        {
          icon: 'mdi-information',
          text: '个人信息',
          path: '/manage/userinfo',
          content: '6',
          badge: true,
          color: 'rgba(255,50,50,.3)'
        },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'mdi-pencil', text: '写文章', path: '/writeboard' },
        { divider: true },
        {
          icon: 'mdi-book',
          text: '我的文章',
          path: '/manage/myarticle',
          content: '6',
          badge: true,
          color: 'rgba(50,255,150,.3)'
        },
        {
          icon: 'mdi-star',
          text: '我的收藏',
          path: '/manage/mycollect',
          content: '6',
          badge: true,
          color: 'rgba(60,90,255,.6)'
        },
        { divider: true },
        {
          icon: 'mdi-account-circle',
          text: '上传头像',
          path: '/manage/uploadavatar',
          badge: false
        },
        {
          icon: 'mdi-close',
          text: '隐藏',
          action: this.changedrawer,
          badge: false
        }
      ],

      page: 1
    }
  },
  methods: {
    ...mapActions(['getdata', 'userexit', 'userlogin']),
    collectarticle() {
      let C = []
      this.$store.state.content.article.forEach(e => {
        if (e.collect.indexOf(this.$store.state.user.userName) > -1) {
          C.push(e)
        }
      })
    },
    changedrawer() {
      this.drawer = !this.drawer
    }
  },
  activated() {
    if (!this.$store.state.user.id) {
      this.$router.push('/login')
    } else {
      // console.log(this.$store.state.user)
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
<style scoped>
.navigastyle {
  margin-top: 47px;
}
.cardmange {
  position: relative;
}
</style>