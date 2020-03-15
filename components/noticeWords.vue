<template>
  <div class="noticebox">
    <transition-group name="list-complete">
      <div class="noticecontent" v-for="item in items" :key="item.content">
        <div class="msgbox">
          <v-icon @click="random" color="white">mdi-heart</v-icon>
          {{item.author}}
        </div>
        <span class="d-inline-block text-truncate pl-2">{{item.content}}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    items: null
  },
  methods: {
    random() {
      this.$emit('random')
    }
  },
  mounted() {
    setInterval(() => {
      this.random()
    }, 6000)
  }
}
</script>

<style scoped>
.msgbox {
  background: orange;
  padding: 0px 8px;
  text-align: center;
  min-width: 60px;

  border-radius: 50px;
  color: white;
}
.noticebox {
  overflow: hidden;
  height: 69.5px;
  position: relative;
  width: 100%;
  border-radius: 4px;
  background: rgba(243, 243, 243, 0.5);
  padding: 1%;
}
.noticecontent {
  transition: all 1.6s;
  padding: 10px;
  text-align: center;
  display: flex;
  margin: 0 auto;
  margin-bottom: 14px;
  border-radius: 50px;
  color: cyan;
  background: white;
}
</style>