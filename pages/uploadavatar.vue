<template>
  <v-card class="mx-auto" width="700px" color="rgba(255,255,255,.3)" dark>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">MOREBEAUTY</div>
        <v-list-item-title class="headline mb-1">新增头像</v-list-item-title>

        <v-text-field v-model="url"></v-text-field>
      </v-list-item-content>
      <v-list-item-avatar size="80">
        <v-img :src="url"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-avatar class="ma-2" size="80" v-for="(e,i) in urls" :key="i">
      <v-img :src="e"></v-img>
    </v-avatar>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="upload" color="rgba(255,255,255,.3)">upload</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'uploadavatar',
  data() {
    return {
      url: '',
      urls: []
    }
  },
  methods: {
    upload() {
      if (this.url) {
        this.urls.unshift(this.url)
        this.$axios.post('api/uploadavatar', { url: this.url }).then(res => {
          console.log(res)
        })
        this.url = ''
      } else {
        alert('内容不能为空!')
      }
    }
  }
}
</script>

<style>
</style>