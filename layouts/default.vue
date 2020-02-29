<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="d-flex d-sm-none d-none d-sm-flex d-md-none"
      v-model="drawer"
      clipped
      app
      disable-resize-watcher
      disable-route-watcher
      overlay-opacity="0.9"
      overlay-color="white"
      color="rgba(55,85,155,0.8)"
      dark
    >
      <v-list dense>
        <v-list-item three-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar tile>
            <img :src="$store.state.user.imgsrc" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{$store.state.user.userName}}</v-list-item-title>
            <v-list-item-subtitle>{{$store.state.user.signature}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in menus" :key="item.title" :to="item.href">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader>SUBSCRIPTIONS</v-subheader>
        <!-- <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>-->
        <v-list-item class="mt-4" link>
          <v-list-item-action>
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title>Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right dense>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none d-none d-sm-flex d-md-none"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center" @click="gohome">
        <span class="title">goLove</span>
      </v-toolbar-title>

      <v-row class="d-none d-sm-flex d-sm-none d-md-flex" align="center">
        <v-btn text :key="index" v-for="(item,index) in menus" :to="item.href">
          <b>{{item.title}}</b>
        </v-btn>
      </v-row>

      <v-menu v-if="$store.state.user.userName" :close-on-click="true" :offset-y="true">
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
          <v-list-item v-for="(item, index) in usermenus" :key="index" @click="item.action">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-else>
        <v-btn class="mr-4" to="/login" text>login</v-btn>
        <!-- <v-btn depressed class="mr-4 textcolor--text" color="listbgcolor" to="/signup">login</v-btn> -->
      </div>
      <v-avatar size="40px">
        <img v-if="$store.state.user.imgsrc" :src=" $store.state.user.imgsrc" alt="avatar" />
      </v-avatar>

      <v-spacer />
    </v-app-bar>
    <v-content :style="{backgroundImage:backgroundimg}">
      <v-container class="pa-0 mt-4" fluid>
        <!-- <star class="star" /> -->
        <nuxt keep-alive />
      </v-container>
    </v-content>
    <blogfoot :item="{author:'Laughter',time:'2020',version:'V4.0'}" />
  </v-app>
</template>

<script>
import blogfoot from '~/components/blogfoot.vue'
import star from '~/components/star-demo.vue'
import { mapActions } from 'vuex'
export default {
  components: { blogfoot },
  props: {
    source: String
  },
  data() {
    return {
      backgroundimg: '',
      drawer: false,
      menus: [
        { title: '首页', href: '/', icon: 'mdi-home' },
        { title: '写文章', href: '/writeboard', icon: 'mdi-pencil' },
        { title: '图片', href: '/uploadavatar', icon: 'mdi-image' },
        { title: '音乐', icon: 'mdi-music' },
        { title: '读书', icon: 'mdi-book' }
      ],
      usermenus: [
        { title: '管理中心', action: this.managepath },
        { title: '设置' },
        { title: '注销', action: this.userexit }
      ],
      items: [
        { icon: 'mdi-trending_up', text: 'Most Popular' },
        { icon: 'mdi-subscriptions', text: 'Subscriptions' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-featured_play_list', text: 'Playlists' },
        { icon: 'mdi-watch_later', text: 'Watch Later' }
      ],
      items2: [
        { icon: 'mdi-trending_up', text: 'Most Popular' },
        { icon: 'mdi-subscriptions', text: 'Subscriptions' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-featured_play_list', text: 'Playlists' },
        { icon: 'mdi-watch_later', text: 'Watch Later' }
      ]
    }
  },
  methods: {
    ...mapActions(['getdata', 'userexit', 'userlogin']),
    gohome() {
      this.$router.push('/')
    },
    managepath() {
      this.$router.push('/manage')
    }
  },
  mounted() {
    let user = window.sessionStorage.getItem('user')
    if (user) {
      this.userlogin(JSON.parse(user))
    }
  },
  created() {
    this.$vuetify.theme.light = true
    if (this.$store.state.content.article.length < 1) {
      this.getdata({ api: '/api/myblog', type: 'article' })
    }

    //  let res= this.$axios.get('https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302')
    //       .then(console.log(res))
    //  this.backgroundimg = "url('https://img.xjh.me/desktop/bg/nature/63505535_p0.jpg')"

    this.getdata({ api: '/api/dlavatar', type: 'avatars' })
  }
}
</script>
<style scoped>
.star {
  position: absolute;
}
</style>