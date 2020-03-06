<template>
  <div class="d-flex flex-wrap justify-center">
    <twittercard class="ma-3" v-for="i in 3 " :key="i" :item="item" />
    <!-- <twittercard class="ma-2" :item="item2" /> -->
  </div>
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
        'Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer  in TS because most gotcha edge cases are type invalid as well.',
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