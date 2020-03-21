<template>
  <!-- <div class="idstyle" > -->

  <v-card flat :dark="switch2" color="rgba(255,255,255,0)">
    <v-toolbar color="transparent" flat>
      <v-switch v-model="switch2" :label="switch2?'白':'黑'"></v-switch>
      <!-- <v-switch v-model="switch" class="ma-2" label="Disabled"></v-switch> -->
    </v-toolbar>
    <v-col>
      <editor
        :autofocus="true"
        :init-data="initData"
        ref="editor"
        @ready="onReady"
        @change="onChange"
      />
    </v-col>

    <v-card-actions class="pt-0">
      <action :item="initData" :flag="true" :disabled="false" />
    </v-card-actions>
    <msg-board :item="initData" />
  </v-card>
  <!-- </div> -->
</template>

<script>
import action from '~/components/actions.vue'
import msgBoard from '~/components/msgBoard.vue'
export default {
  components: { msgBoard, action },
  data() {
    return {
      switch2: true,
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

