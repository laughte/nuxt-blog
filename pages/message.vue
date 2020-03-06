<template>
  <v-card flat class="mx-auto" color="rgba(255,255,255,.6)">
    <v-app-bar flat dark color="rgba(255,255,255,0)">
      <v-app-bar-nav-icon @click="changedrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>消息中心</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-text-field solo-inverted flat clearable dense rounded hide-details label="seach"></v-text-field>

      <v-btn @click="magflag=!magflag" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
    </v-app-bar>
    <navigationdraw ref="draw" :items="navigations" :sflag="true" />

    <nuxt-child keep-alive />
  </v-card>
</template>

<script>
import navigationdraw from '~/components/navigationdraw.vue'
export default {
  name: 'message',
  components: {
    navigationdraw
  },
  data: () => ({
    drawflag: false,
    magflag: false,
    navigations: [
      { title: '我的消息', icon: 'mdi-message', path: '/message/' },
      { title: '系统通知', icon: 'mdi-view-dashboard', path: '/message/sysmsg' }
    ],
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ]
  }),
  methods: {
    changedrawer() {
      this.$refs.draw.changedrawer()
    }
  }
}
</script>

<style scoped>
</style>