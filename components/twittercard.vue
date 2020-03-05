<template>
  <v-badge overlap :value="true" :content="'new'">
    <v-card color="transparent" class="wrap">
      <v-card
        flat
        @click="flag=!flag"
        :class="flag?'card1_1':''"
        class="card1 mx-auto"
        :color="item.color"
        :dark="item.flag"
      >
        <v-card-title>
          <v-avatar color="grey darken-3">
            <v-img class="elevation-6" :src="item.avatar"></v-img>
          </v-avatar>

          <span class="title font-weight-light">{{item.name}}</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">{{item.text}}</v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-icon large left>{{item.icon}}</v-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.time}}</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1">mdi-heart</v-icon>
              <span class="subheading mr-2">{{item.like}}</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">mdi-share-variant</v-icon>
              <span class="subheading">{{item.see}}</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>

      <v-card :color="item.color" dark class="card2" :class="flag?'card2_1':''">
        <v-card-title>
          <v-avatar color="grey darken-3">
            <v-img class="elevation-6" :src="$store.state.user.imgsrc"></v-img>
          </v-avatar>

          <span class="title font-weight-light">{{$store.state.user.userName}}</span>
        </v-card-title>

        <v-textarea solo flat filled v-model="msgcontent" name="input-7-4" label="回复信息!"></v-textarea>
        <v-card-actions>
          <v-btn small color="transparent" @click="flag=!flag">取消</v-btn>
          <v-btn
            :disabled="btnDisabled && $store.state.user.userName ? false:true"
            small
            color="transparent"
            @click="addmsg"
          >回复</v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-badge>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'twittercard',
  props: { item: Object },
  data: () => ({
    flag: false,
    btnDisabled: false,
    msgcontent: ''
  }),

  methods: {
    ...mapMutations(['articleEdit']),
    watchnow() {
      this.articleEdit({ data: this.item, type: 'see' })
    }
  },
  computed: {
    lContent() {
      return this.msgcontent.length
    }
  },
  watch: {
    lContent: function(n, o) {
      this.btnDisabled = n > 3
    }
  }
}
</script>

<style scoped>
/* 保证正反面一样大，不然反转会很突兀*/
.wrap,
.card1,
.card2 {
  width: 400px;
  height: 290px;
}
.wrap {
  position: relative;
}
/*使正反面在同一位置*/
.card1,
.card2 {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
  backface-visibility: hidden; /*这个属性至关重要，当元素不面向屏幕时不可见，不然的话上面的div翻转180度后还是覆盖在下面的div上*/
}

.card2 {
  /*先使背面翻转180度，当和正面一起翻转时正好背面作为正面*/
  transform: rotateY(180deg);
}
.card2_1 {
  /*背面作为正面*/
  transform: rotateY(0deg);
}
.card1_1 {
  /*正面作为背面*/
  transform: rotateY(180deg);
}
</style>