<template>
  <v-card flat>
    <v-rol>
      <editor
        autofocus
        holder-id="codex-editor"
        save-button-id="save-button"
        :init-data="initData"
        :config="config"
        @save="onSave"
        @ready="onReady"
        @change="onChange"
        ref="editor"
      />
    </v-rol>
    <v-card-actions>
      <v-text-field color="textcolor" v-model="type" label="填写类别"></v-text-field>
      <v-spacer />
      <v-spacer />
      <v-btn id="save-button" :disabled="$store.state.user.userName ? false:true" @click="save">保存</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      initData: {},
      type: '',
      config: {
        image: {
          // Like in https://github.com/editor-js/image#config-params
          endpoints: {
            byFile: 'http://39.105.168.171:8090/image/',
            byUrl: 'http://39.105.168.171:8090/image-by-url'
          },
          field: 'image',
          types: 'image/*'
        }
      }
    }
  },
  methods: {
    save() {
      this.$refs.editor.save()
    },

    onSave(response) {
      //   console.log(JSON.stringify(response))
      response.type = this.type
      response.author = this.$store.state.user.userName
      response.avatar = this.$store.state.user.imgsrc
      response.like = []
      response.collect = []
      response.reply = []
      response.see = 0
      response.delete = 0
      // console.log(response)
      //   this.$store.state.article.unshift(response)

      this.$axios
        .post('/api/insert', response)
        .then(res => {
          // console.log(res)
          this.$store.commit('pushdata', { type: 'article', data: res.ops[0] })
          this.$router.push('/')
          console.log(res.ops[0])
        })
        .catch(err => {
          console.log(err)
        })
    },
    onReady() {
      console.log('ready')
    },
    onChange() {
      console.log('changed')
    }
  }
}
</script>

<style>
.codex-editor__redactor {
  min-height: 350px !important;
}
</style>
