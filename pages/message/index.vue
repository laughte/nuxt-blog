<template>
  <v-row justify="center">
    <v-col class="mb-5" xl="8" lg="8" md="10" sm="12" v-for="i in 3 " :key="i">
      <twittercard :item="item" />
    </v-col>

    <!-- <twittercard class="ma-2" :item="item2" /> -->
  </v-row>
</template>

<script>
import twittercard from '~/components/twittercard.vue'
export default {
  name: 'mymessage',
  components: { twittercard },
  data: () => ({
    item: {
      name: '箫无韵',
      title: 'twitter',
      text:
        'Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer  in TS because most gotcha edge cases are type invalid as well.',
      icon: 'mdi-twitter',
      flag: true,
      color: 'cyan',
      time: '2019-12-14',
      avatar:
        'http://yanxuan.nosdn.127.net/8d82e055d343f820b7869b929c8a45e2.jpg',
      like: 12,
      see: 32
    },
    item2: {
      name: '箫无韵',
      title: 'twitter',
      text:
        'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well',
      icon: 'mdi-twitter',
      flag: true,
      color: 'cyan',
      time: '2019-12-14',
      avatar:
        'http://yanxuan.nosdn.127.net/8d82e055d343f820b7869b929c8a45e2.jpg',
      like: 12,
      see: 32
    }
  })
}
</script>

<style>
</style>