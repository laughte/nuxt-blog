<template>
  <div class="noticebox">
    <div class="noticecontent">
      <div
        style="overflow:hidden;position:relative;background:orange;width:120px;height:25px;border-radius:50px;color:white;margin-right:8px;padding-right:4px;"
      >
        <v-icon color="white">{{item.icon}}</v-icon>
        <span>重要通知</span>
      </div>
      <span class="d-inline-block text-truncate pr-4">{{item.msg}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style>
.noticebox {
  width: 100%;
  height: 120px;
  background: rgba(243, 243, 243, 0.5);
  padding: 0 5%;
}
.noticecontent {
  padding: 15px 0 0 10px;
  text-align: center;
  display: flex;
  margin: 33px auto;
  border-radius: 50px;

  height: 54px;
  color: cyan;
  background: white;
}
</style>