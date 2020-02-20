<template>
  <v-container>
    <v-row justify="center">
      <!--  -->
      <!-- <v-layout column justify-center align-center> -->

      <!-- <v-flex class="pa-0" xs12 sm8  d-flex justify-space-around flex-wrap>
          <h-card
            class="mb-4"
            v-for="(item,index) in $store.state.content.article"
            :key="index"
            :item="item"
          ></h-card>
      </v-flex>-->
      <v-col xs="12" sm="12" md="10" lg="10" xl="8">
        <v-row justify="space-around">
          <!-- <v-col class="d-none d-sm-flex pa-0" class="d-flex d-sm-none pa-0">
            <carousel :items="pictures" :height="'350px'"></carousel>
          </v-col>-->
          <v-col>
            <carousel :items="pictures" :height="'300px'"></carousel>
            <notice
              :item="{icon:'mdi-heart',notice:'通知',msg:'my love xiaofei love you forever,my love xiaofei love you forever,my love xiaofei !!!'}"
            ></notice>
          </v-col>
          <dividline class="my-4" :item="{icon:'mdi-book',title:'最新文章' }"></dividline>
          <v-col
            lg="3"
            xl="3"
            md="4"
            sm="5"
            :key="index"
            v-for="(item,index) in $store.state.content.article"
          >
            <h-card :item="item"></h-card>
          </v-col>

          <dividline class="my-4" :item="{icon:'mdi-book',title:'文章分类' }"></dividline>

          <v-col
            xl="5"
            lg="6"
            md="10"
            sm="10"
            xs="12"
            v-for="(item,index) in $store.state.content.article"
            :key="index"
          >
            <w-card :item="item"></w-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- <v-flex class="pa-0" xs12 sm8 lg6 xl5 d-flex justify-space-around flex-wrap>
        <w-card
          class="mb-4"
          v-for="(item,index) in $store.state.content.article"
          :key="index"
          :item="item"
        ></w-card>
      </v-flex>-->

      <!-- </v-layout> -->
    </v-row>
  </v-container>
</template>

<script>
import carousel from '../components/carousel.vue'
import notice from '../components/notice.vue'
import dividline from '../components/Dividingline.vue'
import hCard from '../components/hCard.vue'
import wCard from '../components/wCard.vue'

export default {
  components: { hCard, wCard, dividline, notice, carousel },
  asyncData() {},
  data: () => ({
    pictures: [
      {
        src: 'http://yanxuan.nosdn.127.net/1e3c1965b099eeb8c50014756e71f0e9.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/b933afe0f3d0eee91f7760ea08d9d6c1.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/0858193d36033dcc7f7d642f25742f0e.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/1fb0488a2bba1009e8effd8b4f2608e6.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/36409b5f464c55f21c0531f85f2549ef.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/2b37b5792f59d4791d56ad31834f7144.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/a3fae62acdc72cedc014c63274c751c4.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/d8a01523914edb9bb29fd07f000d6c93.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/3dda1392058eaef0975ecf312b645e12.jpg'
      },
      {
        src: 'http://yanxuan.nosdn.127.net/ad146d5a572f88ee3b29f8e44f23004c.jpg'
      }
    ],
    artdata: [
      {
        id: 1,
        title: '阿斯顿非法手段非法手段发的',
        type: '随想',
        see: 322,
        comment: [
          {
            source: '新浪',
            user: { name: 'ysee', avatar: '', id: '22' },
            content:
              '一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面',
            time: 1576678369
          },
          {
            user: { name: 'ysee', avatar: '', id: '22' },
            content:
              '一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面',
            time: 1576678369
          },
          {
            user: { name: 'ysee', avatar: '', id: '22' },
            content:
              '一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面',
            time: 1576678369
          }
        ],
        pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        author: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 2,
        title: '阿斯顿非法手段非法手段发的',
        type: '随想',
        see: 322,
        comment: [
          {
            user: { name: 'ysee', avatar: '', id: '22' },
            content:
              '一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面',
            time: 1576678369
          },
          {
            user: { name: 'ysee', avatar: '', id: '22' },
            content:
              '一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面',
            time: 1576678369
          },
          {
            user: { name: 'ysee', avatar: '', id: '22' },
            content:
              '一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面',
            time: 1576678369
          }
        ],
        pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        author: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      }
    ]
  }),
  methods: {
    async getMusic(api) {
      let res = await this.$axios.get('http://39.105.168.171:3000' + api)
      console.log(res)
    }
  },
  created() {
    // this.getMusic('/personalized')
  }
}
</script>
