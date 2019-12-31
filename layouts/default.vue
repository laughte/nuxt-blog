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

      <v-row class="mr-4" align="center">
        <v-btn text>
          <b>首页</b>
        </v-btn>
        <v-btn text>
          <b>写文章</b>
        </v-btn>
        <v-btn text>
          <b>图片</b>
        </v-btn>
        <v-btn text>
          <b>音乐</b>
        </v-btn>
        <v-btn text>
          <b>读书</b>
        </v-btn>
      </v-row>

      <v-menu
        v-if="$store.state.user.userName"
        v-model="value"
        :disabled="disabled"
        :absolute="absolute"
        :open-on-hover="openOnHover"
        :close-on-click="closeOnClick"
        :close-on-content-click="closeOnContentClick"
        :offset-x="offsetX"
        :offset-y="offsetY"
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
      <v-container class="fill-height">
        <nuxt keep-alive />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
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
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  }),
  created() {
    this.$vuetify.theme.light = true
  }
}
</script>