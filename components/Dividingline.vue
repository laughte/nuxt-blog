<template>
  <div @click="$emit('changebadge')" class="divline align-center">
    <v-badge overlap bordered :content="item.content" :value="item.badge" :color="item.color">
      <div class="dividline">
        <v-icon @click="$emit('shuffle',item.type)">{{item.icon}}</v-icon>
        {{item.title}}
      </div>
    </v-badge>
    <!-- <v-divider light inset></v-divider> -->
  </div>
</template>

<script>
export default {
  props: { item: Object },
  methods: {}
}
</script>

<style>
.divline {
  position: relative;
  width: 100%;
  /* height: 45px; */
}
/* hr {
  position: absolute;
  top: 16px;
  opacity: 0.3;
  width: 100%;
} */
.dividline {
  width: 130px;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: white;
  color: cyan;
}
</style>