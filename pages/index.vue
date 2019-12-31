<template>
  <v-layout column justify-center align-center>
    <!-- <v-flex xs12 sm8 d-flex flex-wrap>
      <h-card v-for="(item,index) in artdata" :key="index" :item="item"></h-card>
    </v-flex>-->
    <v-row>
      <v-col xl="2" lg="3" md="4" sm="12" v-for="(item,index) in artdata" :key="index">
        <h-card :item="item"></h-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col xl="5" lg="6" md="6" sm="12" v-for="(item,index) in artdata" :key="index">
        <w-card :item="item"></w-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import hCard from '../components/hCard.vue'
import wCard from '../components/wCard.vue'

export default {
  components: { hCard, wCard },
  data: () => ({
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
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
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
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
        title: '阿斯顿非法手段非法手段发的',
        type: '随想',
        see: 322,
        comment: [],
        pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
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
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
        title: '阿斯顿非法手段非法手段发的',
        type: '随想',
        see: 322,
        comment: [],
        pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
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
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
        title: '阿斯顿非法手段非法手段发的',
        type: '随想',
        see: 322,
        comment: [],
        pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
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
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      },
      {
        id: 1,
        title: '阿斯顿非法手段非法手段发的',
        type: '随想',
        see: 322,
        comment: [],
        pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        user: {
          name: 'ziyu',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg'
        },
        time: 1576678369,
        content:
          '时间戳（timestamp），一个能表示一份数据在某个特定时间之前已经存在的、 完整的、 可验证的数据,通常是一个字符序列，唯一地标识某一刻的时间。使用数字签名技术产生的数据， 签名的对象包括了原始文件信息、 签名参数、 签名时间等信息。广泛的运用在知识产权保护、 合同签字、 金融帐务、 电子报价投标、 股票交易等方面。'
      }
    ]
  })
}
</script>
