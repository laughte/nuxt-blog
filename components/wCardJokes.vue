<template>
  <v-hover v-slot:default="{ hover }" open-delay="200">
    <v-card
      :elevation="hover ? 16 : 0"
      color="rgba(255,255,255,0.5)"
      shaped
      style="overflow:hidden"
      width="100%"
    >
      <v-card-text class="headline font-weight-bold">{{item.content}}</v-card-text>
      <!-- <v-card-text class="pl-12 pr-6 py-0" style="opacity:.6">
        <v-icon small>mdi-clock-outline</v-icon>
        <b style="opacity: 0.6;
  font-size: 1em;">{{new Date(item.updateTime).toLocaleString()}}</b>
      </v-card-text>-->

      <!-- <action :item="item" :disabled="false" :flag="true" /> -->
      <v-card-actions>
        <v-btn disabled text>
          <v-icon small>mdi-clock-outline</v-icon>
          {{new Date(item.updateTime).toLocaleDateString()}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import action from '~/components/actions.vue'
import { mapMutations } from 'vuex'
export default {
  props: { item: {} },
  components: { action },
  name: 'wCard',
  methods: {}
}
</script>

<style scoped>
.subtitle:hover {
  color: #37bdca;
}
.dot {
  margin: 0px 4px 0px 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fb8c00;
}
.dot2 {
  background: #d81b60;
}
.dot3 {
  background: #00e5ff;
}
</style>
