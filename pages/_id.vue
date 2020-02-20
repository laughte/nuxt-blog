<template>
  <div class="idstyle">
    <editor
      :autofocus="true"
      :init-data="initData"
      ref="editor"
      @ready="onReady"
      @change="onChange"
    />
    <v-card flat>
      

    <v-card-actions class="pt-0">
      <v-btn color="textcolor" text @click="addLike">
        <v-icon small>mdi-heart</v-icon>
        <p>{{ initData.like }}</p>
        {{'喜欢'}}
      </v-btn>

      <v-btn color="textcolor" text @click="addCollect">
        <v-icon small>mdi-star</v-icon>
        <p v-text="initData.collect?initData.collect.length:'0'"></p>
        {{'收藏'}}
      </v-btn>

      <v-btn color="textcolor" text>
        <v-icon small>mdi-chat-processing</v-icon>
        <p v-text="initData.reply"></p>
        {{'评论'}}
      </v-btn>
      <v-btn class="mx-3 textcolor--text" icon>
        <v-icon small>mdi-eye</v-icon>
        <p v-text="initData.see"></p>
      </v-btn>

      <div class="flex-grow-1"></div>
      <!--      <v-btn v-if="$store.state.ifEdite" @click="save">保存更改</v-btn>-->
    </v-card-actions>
    <msg-board :item="initData" @addReply="addReply" />
    </v-card>
  </div>
</template>

<script>
import msgBoard from '~/components/msgBoard.vue'
export default {
  components:{msgBoard},
  data() {
    return {
      initData: this.$store.state.content.article.find(e => {
        return e._id === this.$route.params.id
      }),
      // initData: {},
      savedData: {}
    }
  },
  methods: {
    searchdata(params) {
      this.savedData = this.$store.state.content.article.find(e => {
        return e._id === params.id
      })
    },

    onSave(response) {
      console.log(response)
      this.savedData = response
    },
    onReady() {
      console.log('ready')
      // this.initData = this.savedData
    },
    onChange() {
      console.log('changed')
    }
  }
}
</script>

<style>
.idstyle {
  /* color: white; */
  background: white;
}
</style>