<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" class="d-none d-sm-flex">
        <carousel :items="pictures" :height="'350px'"></carousel>
      </v-col>
      <v-col cols="12" class="d-flex d-sm-none">
        <carousel :items="pictures" :height="'200px'"></carousel>
      </v-col>

      <!--  -->
      <v-layout column justify-center align-center>
        <notice
          :item="{icon:'mdi-heart',msg:'love you forever,my love xiaofei love you forever,my love xiaofei love you forever,my love xiaofei !!!'}"
        ></notice>

        <v-flex xs12 sm8 d-flex justify-around flex-wrap>
          <h-card
            class="ma-2"
            v-for="(item,index) in $store.state.content.article"
            :key="index"
            :item="item"
          ></h-card>
        </v-flex>

        <dividline :item="{icon:'mdi-book',title:'文章分类'}"></dividline>

        <v-row justify="center" align="center">
          <v-col
            xl="5"
            lg="6"
            md="10"
            sm="12"
            v-for="(item,index) in $store.state.content.article"
            :key="index"
          >
            <w-card :item="item"></w-card>
          </v-col>
        </v-row>
      </v-layout>
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
        src: 'https://i.loli.net/2019/11/03/FILK8AOZsd3ykQo.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/ShRIkmuvKeCBLgE.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/Ga6gdADXFjo7iL1.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/Zw3kGHJiObqfa4z.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/3etF5A7m9ZkEI1o.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/V9ugmoQ2yEaxfpr.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/P9p8uaw2eD4GA1C.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/u3JgRqLN75Cy2rl.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/JMwCOpkG8e6IPRU.jpg'
      },
      {
        src: 'https://i.loli.net/2019/11/03/LEChzx6vUX9qotf.jpg'
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
