<template>
  <v-card flat tile color="rgba(255,255,255,0)">
    <v-toolbar flat color="cyan">
      <v-toolbar-title to="/music" class="white--text">
        <v-btn to="/music" icon color="white">
          <v-icon>mdi-music-circle-outline</v-icon>
        </v-btn>音乐
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn @click="$router.go(-1)" color="white" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn @click="$router.go(1)" color="white" icon>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <div class="flex-grow-1"></div>
      <!-- <v-row align="center">
        <v-text-field
          desnse
          hide-details
          color="white"
          single-line
          append-icon="mdi-magnify"
          @change="searchMusic"
          placeholder="Search..."
          class="mx-4"
          flat
          label="Search"
        ></v-text-field>
      </v-row>-->
      <v-spacer></v-spacer>
      <v-btn color="white" text>登录</v-btn>
    </v-toolbar>
    <v-row justify="center">
      <v-col
        v-show="$router.app._route.fullPath !=='/music/songDetail' "
        lg="2"
        md="3"
        sm="4"
        xs="5"
      >
        <v-list dense>
          <template v-for="(item, index) in musicSideItems">
            <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

            <v-list-item :to="item.to" v-else :key="index" @click>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle v-html="item.title"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-spacer></v-spacer>
          <v-list-item color="rgba(255,255,255,.3)" two-line>
            <v-list-item-avatar size="45" tile>
              <v-btn
                to="/music/songDetail"
                color="white"
                style="position: absolute; z-index:8"
                class="sqIcon"
                icon
              >
                <v-icon large>mdi-fullscreen</v-icon>
              </v-btn>
              <v-img
                v-if="$store.state.music.album"
                :src="$store.state.music.album.picUrl?$store.state.music.album.picUrl:$store.state.music.album.coverImgUrl"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="align-self-start">
              <v-list-item-title class="mb-2" v-text="$store.state.music.songDetail.name"></v-list-item-title>
              <v-list-item-subtitle v-text="'专辑名'"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="$store.state.music.album.name"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col class="mainPage" lg="10" md="9" sm="8" xs="7">
        <nuxt-child keep-alive />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1'
      ],

      musicImgSlides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],

      musicSideItems: [
        { header: '推荐' },
        { title: '发现音乐', icon: 'mdi-music', to: '/music' },
        {
          title: '私人FM',
          icon: 'mdi-access-point',
          url: `/user/dj?uid=${this.$store.state.music.user.id}`
        },
        { title: '朋友', icon: 'mdi-account-supervisor-outline', url: '' },
        { header: '我的音乐' },
        {
          title: '我喜欢的音乐',
          icon: 'mdi-heart-outline',
          url: `/likelist?uid=${this.$store.state.music.user.id}`
        },
        {
          header: '我的歌单',
          url: `/user/playlist?uid=${this.$store.state.music.user.id}`
        }
      ]
    }
  },
  methods: {
    ...mapActions(['reqSong', 'reqMusic', 'lastMusic', 'nextMusic']),
    // 获取每日推荐专辑
    newgetMusic(e) {
      this.reqMusic({ type: 'albums', api: e })
    },

    //音乐所搜
    searchMusic(e) {
      this.reqMusic({ api: '/search?keywords=' + e, type: 'searchSong' })
      this.$router.push('/music/songlist')
    },
    // 控制音频的播放与暂停
    startPlayOrPause() {
      this.$store.commit('starOrpause')
      // console.log(this.$refs)
    }
  },
  created() {
    // this.newgetMusic('/search?keywords=踏行')
    if (this.$store.state.music.albums.length < 1) {
      this.newgetMusic('/personalized')
    }
  }
}
</script>
<style>
.sqIcon {
  opacity: 0;
  font-weight: lighter;
  transition: all 0.2s;
}
.sqIcon:hover {
  opacity: 1;
  transform: scale(1.8);
}
.side {
  position: sticky;
  top: 65px;
}
</style>
