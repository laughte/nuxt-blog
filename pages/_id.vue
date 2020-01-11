<template>
  <div class="idstyle">
    <editor
      :autofocus="true"
      :init-data="initData"
      ref="editor"
      @ready="onReady"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
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
  color: white;
}
</style>