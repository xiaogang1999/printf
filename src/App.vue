<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import '../static/css/reset.css';
  @import '../static/fonts/iconfont.css';

  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif, STHeitiSC-Light;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #fff;
  }
</style>
