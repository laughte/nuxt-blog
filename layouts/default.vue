<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right clipped>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right dense>
      <v-spacer />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">goLove</span>
      </v-toolbar-title>

      <v-row class="mr-4 d-none d-sm-none d-md-flex" align="center">
        <v-btn text :key="index" v-for="(item,index) in menus" :to="item.href">
          <b>{{item.title}}</b>
        </v-btn>
      </v-row>
      <v-row class="mr-4 d-flex d-sm-none d-none d-sm-flex d-md-none" align="center">
        <v-menu open-on-hover close-on-click close-on-content-click offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <b>Dropdown</b>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in menus" :key="index" :to="item.href">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <v-menu
        v-if="$store.state.user.userName"
        :open-on-hover="true"
        :close-on-click="true"
        :close-on-content-click="true"
        :offset-y="true"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            depressed
            class="ml-4textcolor--text"
            color="listbgcolor"
            v-text="$store.state.user.userName"
          ></v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in usermenus" :key="index" @click>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-else>
        <v-btn class="mr-4" to="/signin" text>signin</v-btn>
        <!-- <v-btn depressed class="mr-4 textcolor--text" color="listbgcolor" to="/signup">login</v-btn> -->
      </div>
      <v-avatar size="40px">
        <img v-if="$store.state.user.imgsrc" :src=" $store.state.user.imgsrc" alt="avatar" />
      </v-avatar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt keep-alive />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    menus: [
      { title: '首页', href: '/' },
      { title: '写文章', href: '/writeboard' },
      { title: '图片' },
      { title: '音乐' },
      { title: '读书' }
    ],
    usermenus: [
      { title: '我的主页' },
      { title: '收藏的文章' },
      { title: '喜欢的文章' },
      { title: '设置' },
      { title: '注销' }
    ],
    items: [
      { icon: 'mdi-trending_up', text: 'Most Popular' },
      { icon: 'mdi-subscriptions', text: 'Subscriptions' },
      { icon: 'mdi-history', text: 'History' },
      { icon: 'mdi-featured_play_list', text: 'Playlists' },
      { icon: 'mdi-watch_later', text: 'Watch Later' }
    ]
  }),
  methods: {
    ...mapActions(['getdata'])
  },
  created() {
    this.$vuetify.theme.light = true
    if (this.$store.state.content.article.length < 1) {
      this.getdata({ api: '/api/myblog', type: 'article' })
    }
  }
}
</script>