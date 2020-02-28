<template>
  <!-- <v-row justify="space-between">
  <v-col class="12">-->
  <v-card color="rgba(255,255,255,.6)" dark>
    <!-- <v-img class="cardimg" :src="$store.state.user.imgsrc"></v-img> -->
    <v-card-title class="headline font-weight-medium">个人详细信息</v-card-title>
    <v-row justify="space-around">
      <v-col class="pa-0" lg="8" md="12" sm="12" xs="12">
        <v-form v-model="valid">
          <v-text-field label="姓名" :disabled="editflag" v-model="user.userName"></v-text-field>
          <v-text-field label="邮箱" :disabled="editflag" v-model="user.email"></v-text-field>
          <v-text-field label="手机" :disabled="editflag" v-model="user.tel"></v-text-field>
          <v-text-field label="年龄" :disabled="editflag" v-model="user.age"></v-text-field>
          <v-text-field label="性别" :disabled="editflag" v-model="user.gender"></v-text-field>
        </v-form>
      </v-col>
      <v-col lg="3" md="12" sm="12" xs="12">
        <img width="100%" :src="user.imgsrc" alt />
        <v-textarea
          name="input-7-1"
          label="个性签名"
          auto-grow
          rows="1"
          :disabled="editflag"
          v-model="user.signature"
        ></v-textarea>
        <!-- <v-text-field label="个性签名"  v-model="$"></v-text-field> -->
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn color="transparent" @click="editflag=!editflag">修改</v-btn>
      <v-btn color="transparent" @click="commit">提交</v-btn>
    </v-card-actions>
  </v-card>
  <!-- </v-col>
  </v-row>-->
</template>

<script>
export default {
  name: 'userinfo',
  data: () => ({
    editflag: true,
    valid: false,
    user: Object
  }),
  methods: {
    commit() {}
  },
  updated() {
    let U = Object
    U = this.$store.state.user
    this.user = U
  }
}
</script>

<style scoped>
/* .ncard {
  overflow: hidden;
}
.cardimg {
  position: absolute;
  width: 30%;
  right: 0;
  height: auto;
  filter: blur(35px);
  opacity: 0.3;
  z-index: 0;
} */

.row {
  margin-right: 0;
  margin-left: 0;
}
</style>