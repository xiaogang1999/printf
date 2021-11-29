<template>
  <div class="con">
    <van-tabbar v-model="active" :route="true" inactive-color="#666" active-color="#ff0004">
      <van-tabbar-item to="/" icon="icon" icon-prefix="iconfont icon-jidanicon-">产品</van-tabbar-item>
      <van-tabbar-item to="/msg" icon="icon" icon-prefix="iconfont icon-xiaoxi">资讯</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="icon" icon-prefix="iconfont icon-24gf-bag2">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="icon" icon-prefix="iconfont icon-wode" :dot="true">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
      }
    }
  }
</script>

<style scoped>
  .con {
    width: 100vw;
    height: 0.98rem;
    border-top: 0.031rem #cfcfcf solid;
  }
</style>
