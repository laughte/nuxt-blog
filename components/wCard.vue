<template>
  <v-card style="overflow:hidden" class="ma-4" flat :to="{name:'arDetail',params:{id:item,id}}">
    <v-img
      style="position:absolute;width: 100%;height:auto;filter: blur(55px);opacity:0.3;z-index: 0"
      :src="item.pic?item.pic:'https://i.loli.net/2019/11/03/Ga6gdADXFjo7iL1.jpg'"
    ></v-img>
    <div style="overflow: hidden" class="d-flex justify-start align-center">
      <!-- <v-img width="40.79%" height="auto" :src="item.pic"></v-img> -->
      <div>
        <v-card-subtitle class="py-2 d-flex justify-start align-center">
          <v-avatar size="30">
            <img :src="item.user.avatar" alt="John" />
          </v-avatar>

          <div class="dot"></div>
          {{item.user.name}}
          <div class="dot"></div>
          {{item.type}}
          <div class="dot"></div>
          {{item.sorce?item.sorce:"未知来源"}}
        </v-card-subtitle>
        <v-list three-line class="py-0">
          <v-list-item>
            <v-list-item-content class="py-0">
              <v-list-item-title class="title font-weight-black">{{item.title}}</v-list-item-title>
              <v-list-item-subtitle class="font-weight-medium">{{item.content}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-actions class="py-0">
          <v-btn disabled text>
            <v-icon small>mdi-clock-outline</v-icon>
            {{new Date(item.time).toLocaleDateString()}}
          </v-btn>
          <v-btn disabled text>
            <v-icon small>mdi-eye</v-icon>
            {{item.see}}
          </v-btn>
          <v-btn disabled text>
            <v-icon small>mdi-comment-processing-outline</v-icon>
            {{item.comment.length}}
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: { item: {} },
  name: 'wCard'
}
</script>

<style scoped>
.subtitle:hover {
  color: #37bdca;
}
</style>
