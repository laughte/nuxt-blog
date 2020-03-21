<template>
  <v-app id="inspire">
    <music @musiclistf="rightDraFunc" draggable="true" />
    <v-navigation-drawer
      class="d-flex d-sm-none d-none d-sm-flex d-md-none"
      v-model="drawer"
      clipped
      app
      disable-resize-watcher
      overlay-opacity="0.9"
      overlay-color="white"
      color="cyan"
      dark
    >
      <v-list dense>
        <v-list-item three-line>
          <v-list-item-avatar size="65">
            <img
              :src="$store.state.user.avatar?$store.state.user.avatar:'http://yanxuan.nosdn.127.net/85993c9896fee4a893dc299cd09581d9.jpg'"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              v-if="$store.state.user.name"
              class="subtitle-1"
            >{{$store.state.user.name}}</v-list-item-title>

            <v-list-item-title v-else class="subtitle-1">
              <v-btn class="mr-4" to="/login" text>login</v-btn>
            </v-list-item-title>
            <v-list-item-subtitle>{{$store.state.user.signature||'自在飞花轻似梦,无边丝雨细如愁'}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- 
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>{{$store.state.user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{$store.state.user.signature}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>-->

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
        <v-list-item
          class="mt-4"
          v-for="(item, index) in usermenus"
          :key="index"
          @click="item.action"
        >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item to="/manage">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title>设置管理</v-list-item-title>
        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar hide-on-scroll app color="cyan" dense dark>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none d-none d-sm-flex d-md-none"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />
      <v-toolbar-title class="mr-12 align-center" @click="gohome">
        <span class="title">goLove</span>
      </v-toolbar-title>
      <div class="d-sm-none d-md-flex d-none" align="center">
        <v-btn text :key="index" v-for="(item,index) in menus" :to="item.href">
          <b>{{item.title}}</b>
        </v-btn>
      </div>
      <v-text-field
        @change="search"
        v-model="searchmodeldata"
        solo-inverted
        flat
        clearable
        dense
        rounded
        hide-details
        :label="searchlabel"
      ></v-text-field>

      <v-btn @click="search" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        class="d-sm-none d-md-flex d-none"
        v-if="$store.state.user.name"
        :close-on-click="true"
        :offset-y="true"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            depressed
            class="ml-4textcolor--text"
            color="transparent"
            v-text="$store.state.user.name"
          ></v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in usermenus" :key="index" @click="item.action">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-else>
        <v-btn class="mr-4" to="/login" text>login</v-btn>
        <!-- <v-btn depressed class="mr-4 textcolor--text" color="listbgcolor" to="/signup">login</v-btn> -->
      </div>
      <!-- <div>{{$store.state.user.age}}</div> -->
      <v-avatar size="40px">
        <img
          :src=" $store.state.user.avatar||'http://yanxuan.nosdn.127.net/85993c9896fee4a893dc299cd09581d9.jpg'"
          alt="avatar"
        />
      </v-avatar>

      <v-spacer />
    </v-app-bar>
    <!-- @mouseleave="drawerleavefunc" @mouseenter="drawerenterfunc" -->
    <v-navigation-drawer
      hide-overlay
      disable-route-watcher
      disable-resize-watcher
      v-model="rightDrawer"
      right
      fixed
    >
      <!-- 音乐播放列表 -->
      <v-simple-table fixed-header>
        <template v-slot:default class="musiclist">
          <thead>
            <tr>
              <th class="text-left" style="width:20px"></th>
              <th class="text-left" style="width:180px">歌曲</th>
              <th class="text-left" style="width:150px">歌手</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @dblclick="playlist(item)"
              v-for="(item) in $store.state.music.playlist"
              :key="item.id"
            >
              <td>
                <v-icon color="red">
                  {{
                  $store.state.music.song.id===item.id?($store.state.music.playing?"mdi-pause-circle":"mdi-arrow-right-drop-circle"):""
                  }}
                </v-icon>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.artists?item.artists[0].name:item.ar[0].name }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-navigation-drawer>

    <v-content class="backgroundstyle" :style="{backgroundImage:backgroundimg}">
      <v-container class="pa-0" fluid>
        <!-- <star class="star" /> -->
        <transition name="list-complete">
          <search-result
            class="list-item"
            v-if="$store.state.searchflag"
            :searchData="$store.state.content.searchData"
          />
        </transition>
        <transition name="list-complete">
          <nuxt class="list-item" keep-alive />
        </transition>
      </v-container>
    </v-content>
    <blogfoot :item="{author:'Laughter',time:'2020',version:'V4.0'}" />
  </v-app>
</template>

<script>
import searchResult from '~/components/searchResult/searchResult.vue'
import blogfoot from '~/components/blogfoot.vue'
import music from '~/components/music.vue'
import star from '~/components/star-demo.vue'
import { mapActions, mapMutations } from 'vuex'
export default {
  components: { blogfoot, music, searchResult },
  props: {
    source: String
  },
  data() {
    return {
      backgroundimg: '',
      drawer: false,
      rightDrawer: false,
      timeout: false,
      searchlabel: '搜文章,作者,分类',
      searchmodeldata: '',
      menus: [
        { title: '首页', href: '/', icon: 'mdi-home' },
        { title: '写文章', href: '/writeboard', icon: 'mdi-pencil' },
        { title: '音乐', href: '/music', icon: 'mdi-music' },
        // { title: '图片', href: '/uploadavatar', icon: 'mdi-image' },

        // { title: '读书', href: '/book', icon: 'mdi-book' },
        {
          title: '消息',
          icon: 'mdi-message-processing',
          href: '/message'
        }
      ],
      usermenus: [
        { title: '个人中心', action: this.managepath, icon: 'mdi-account' },

        {
          title: '注销',
          action: this.userexit,
          icon: 'mdi-arrow-left-bold-box-outline'
        }
      ]
      // items: [
      //   { icon: 'mdi-trending_up', text: 'Most Popular' },
      //   { icon: 'mdi-subscriptions', text: 'Subscriptions' },
      //   { icon: 'mdi-history', text: 'History' },
      //   { icon: 'mdi-featured_play_list', text: 'Playlists' },
      //   { icon: 'mdi-watch_later', text: 'Watch Later' }
      // ],
    }
  },
  methods: {
    ...mapActions([
      'getdata',
      'userexit',
      'userlogin',
      'nextMusic',
      'reqMusic',
      'lastMusic',
      'playlist'
    ]),
    ...mapMutations(['setdata']),
    gohome() {
      this.$router.push('/')
    },
    managepath() {
      this.$router.push('/manage')
    },
    search(string) {
      if (this.$route.path.indexOf('/music') !== -1) {
        this.searchMusic(string)
      } else if (this.$route.path.indexOf('/message') !== -1) {
        this.$store.commit('searchMsgFunc', string)
      } else {
        this.$store.commit('searchFunc', string)
      }
    },
    rightDraFunc() {
      this.rightDrawer = !this.rightDrawer
    },
    drawerleavefunc() {
      console.log('iam here')
      this.timeout = setTimeout(() => {
        this.rightDrawer = false
      }, 2000)
    },
    drawerenterfunc() {
      console.log('you here')
      clearTimeout(this.timeout)
      this.rightDrawer = true
    },
    //音乐所搜
    searchMusic(e) {
      this.reqMusic({ api: '/search?keywords=' + e, type: 'searchSong' })
      this.$router.push('/music/songlist')
    }
  },
  mounted() {
    let user = window.sessionStorage.getItem('user')
    if (user) {
      this.userlogin(JSON.parse(user))
    }
  },
  computed: {
    isActive() {
      return this.$route.path
    }
  },

  watch: {
    isActive: function(n, o) {
      this.$store.commit('changeflag')
      this.searchmodeldata = ''
      if (n.indexOf('/music') !== -1) {
        this.searchlabel = '搜音乐,歌手,专辑'
      } else if (n.indexOf('/message') !== -1) {
        this.searchlabel = '搜留言,作者'
      } else {
        this.searchlabel = '搜文章,作者,分类'
      }
    }
  },
  created() {
    this.$vuetify.theme.light = true
    if (this.$store.state.content.article.length < 1) {
      this.getdata({ api: '/api/myblog', type: 'article' })
    }
    if (this.$store.state.content.letters.length < 1) {
      this.getdata({ api: '/api/letters', type: 'letters' })
    }

    this.$axios
      .get(this.$store.state.musicserve + '/song/detail?ids=393593')
      .then(res => {
        console.log(res)
      })
    //  let res= this.$axios.get('https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302')
    //       .then(console.log(res))
    //  this.backgroundimg = "url('https://img.xjh.me/desktop/bg/nature/63505535_p0.jpg')"

    this.getdata({ api: '/api/dlavatar', type: 'avatars' })
  }
}
</script>
<style scoped>
.backgroundstyle {
  background: rgba(255, 255, 255, 0.6);
}
.star {
  position: absolute;
}
.list-item {
  transition: all 0.6s;
}
</style>