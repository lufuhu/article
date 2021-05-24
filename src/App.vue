<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
  .input-b-border input{
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
  }
</style>