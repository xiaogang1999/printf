<template>
  <div class="my-balance">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="balan">
      <h2>余额</h2>
      <h1>{{ ban_money }}元</h1>
    </div>
    <router-link class="balan-btn" to="/toUpBalan">充值</router-link>
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
          tit: '余额',
          path: '/mine'
        },
        ban_money: 150.00
      }
    },
    mounted() {
      var money = this.$route.query.money;
      if (money != undefined && Number(money) > 0) {
        this.ban_money = Number(this.ban_money)  + parseInt(money);
      }
    }
  }
</script>

<style scoped>
  .my-balance>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .my-balance>.balan {
    width: 4.05rem;
    height: 4.05rem;
    margin: 2.3rem auto 1.2rem;
    background: url(../../../static/imgs/yuan2.png) 0 0/cover no-repeat;
    position: relative;
  }

  .balan>h2 {
    width: 3.15rem;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.32rem;
    position: absolute;
    left: 0.45rem;
    top: 1.15rem;
  }

  .balan>h1 {
    width: 3.15rem;
    height: 0.68rem;
    line-height: 0.68rem;
    font-size: 0.58rem;
    font-weight: normal;
    position: absolute;
    left: 0.45rem;
    bottom: 1.56rem;
  }

  .my-balance>.balan-btn {
    width: 6.7rem;
    line-height: 0.82rem;
    margin: 0 auto;
    background-color: #df1e3e;
    font-size: 0.32rem;
    color: #fff;
    border-radius: 0.41rem;
  }
</style>
