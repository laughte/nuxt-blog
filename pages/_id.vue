<template>
  <!-- <div class="idstyle" > -->
    
    <v-card flat light color="rgba(255,255,255,0.6)">
      <editor
      :autofocus="true"
      :init-data="initData"
      ref="editor"
      @ready="onReady"
      @change="onChange"
    />

    <v-card-actions class="pt-0">
     <action :item="initData" :flag="true" />
    </v-card-actions>
    <msg-board :item="initData" />
    </v-card>
  <!-- </div> -->
</template>

<script>

import action from '~/components/actions.vue'
import msgBoard from '~/components/msgBoard.vue'
export default {
  components:{msgBoard,action},
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

