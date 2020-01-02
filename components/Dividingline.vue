<template>
  <div class="divline align-center">
    <div class="dividline">
      <v-icon>{{item.icon}}</v-icon>
      {{item.title}}
    </div>
    <v-divider inset></v-divider>
  </div>
</template>

<script>
export default {
  props: { item: Object }
}
</script>

<style>
.divline {
  position: relative;
  width: 100%;
  height: 45px;
}
hr {
  position: absolute;
  top: 16px;
  opacity: 0.3;
  width: 100%;
}
.dividline {
  width: 130px;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: white;
  color: cyan;
}
</style>