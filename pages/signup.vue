
<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>注册</v-toolbar-title>
                <v-spacer />
                <!-- <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/pMvGQO"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>-->
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    v-model="user.username"
                    label="username"
                    name="login"
                    prepend-icon="mdi-human"
                    type="text"
                  />
                  <v-text-field prepend-icon="mdi-email" v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    v-model="user.pass"
                    :rules="passRules"
                    hint="At least 8 characters"
                    counter
                    label="password"
                    required
                    @click:append="show1 = !show1"
                    prepend-icon="mdi-lock"
                  />

      

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    required
                  >
                    <template v-slot:label>
                      <div>
                        阅读并接受
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <a target="_blank" href="/userAgreement" @click.stop v-on="on">用户协议</a>
                          </template>
                          Opens in new window
                        </v-tooltip>
                      </div>
                    </template>
                  </v-checkbox>
                  <v-alert dense outlined v-show="alertflag" :type="isSuccess[issuc]">
                    {{
                    subtitle
                    }}
                  </v-alert>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" to="/">取消</v-btn>
                <v-btn color="primary" to="/login">已有账号?登录</v-btn>
                <v-btn :disabled="!valid" color="primary" @click="validate">注册</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'signup',
  data: () => ({
    avatarflag: false,
    show2: false,
    show1: false,
    alertflag: false,
    issuc: false,
    isSuccess: {
      true: 'success',
      false: 'error'
    },
    valid: true,
    subtitle: '',
    user: {
      username: '',
      pass: '',
      email: '',
      age: '',
      tel: '',
      creationdate: new Date(),
      delflag: false,
      imgsrc: ''
    },

    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passRules: [
      v => !!v || 'password is required',
      v => (v && v.length > 5) || 'password must be more than 5 characters'
    ],

    telRules: [
      v => !!v || 'tel is required',
      v => /^1[3456789]\d{9}$/.test(v) || '请输入正确手机号码!'
    ],
    checkbox: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$axios
          .post('/api/signup',this.user)
          .then(res=>{
            this.alertflag = true
            this.subtitle = res.msg
            if (res.status === 200) {
              this.issuc = true
              this.$store.commit('USERLOGIN', res.data)
              setTimeout(() => {
                // this.$router.push({ path: "/" });
                // this.$router.go(-1)
                this.$router.push('/')
              }, 1000)
            }
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  }
}
</script>