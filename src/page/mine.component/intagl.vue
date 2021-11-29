<template>
  <div class="intagl">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div id="bu-lou-dong"></div>
    <div class="intg">
      <h2>总分</h2>
      <h1>2550</h1>
    </div>
    <div class="itg-msg">
      <h5>温馨提示：</h5>
      <p>推荐更多好友获得积分，赚足的积分，客服美女会直接根据
        积分规则，返现到个人账户，此现金可以在平台购物使用哦。</p>
    </div>
    <router-link class="intg-btn" to="/tjFriends">赚积分</router-link>
  </div>
</template>

<script>
  import goBack from '@/components/goback.vue';
  export default {
    components: {
      goBack
    },
    data() {
      return {
        topTit: {
          tit: '积分',
          path: '/mine'
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .intagl>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  #bu-lou-dong {
    width: 100vw;
    height: 1.14rem;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
  }

  .intg {
    width: 4.05rem;
    height: 4.05rem;
    margin: 2.3rem auto 0.6rem;
    background: url(../../../static/imgs/yuan2.png) 0 0/cover no-repeat;
    position: relative;
  }

  .intg>h2 {
    width: 3.15rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.32rem;
    position: absolute;
    left: 0.45rem;
    top: 1.3rem;
  }

  .intg>h1 {
    width: 3.15rem;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.66rem;
    font-weight: normal;
    position: absolute;
    left: 0.45rem;
    bottom: 1.5rem;
  }

  .intagl>.itg-msg {
    width: 6.48rem;
    height: 1.1rem;
    margin: 0 auto 1.98rem;
    font-size: 0.24rem;
    text-align: left;
    line-height: 0.34rem;
  }

  .itg-msg>p {
    margin-top: 0.07rem;
  }

  .intagl>.intg-btn {
    width: 6.7rem;
    line-height: 0.82rem;
    margin: 0 auto;
    background-color: #df1e3e;
    font-size: 0.32rem;
    color: #fff;
    border-radius: 0.41rem;
  }
</style>
