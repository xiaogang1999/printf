<template>
  <div class="upok">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="up-ok">
      <h1>恭喜您，账户成功充值{{ this.$route.params.money }}元</h1>
      <div id="look-btn" @click="lookMoney()">查看余额</div>
    </div>
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
          tit: '充值成功',
          path: '/toUpBalan'
        },
      }
    },
    methods: {
      lookMoney() {
        var upokmoney = this.$route.params.money;
        this.$router.push({
          path: '/balance',
          query: {
            money: upokmoney
          }
        })
      }
    }
  }
</script>

<style scoped>
  .upok>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .up-ok {
    margin-top: 1.15rem;
    border-top: 0.01rem solid #ebebeb;
    width: 100vw;
    height: 12.17rem;
    background-color: #f8f8f8;
  }

  .up-ok>h1 {
    height: 0.4rem;
    font-size: 0.32rem;
    font-weight: normal;
    line-height: 0.4rem;
    margin: 1.08rem auto 1.29rem;
  }

  #look-btn {
    width: calc(100vw - 0.8rem);
    height: 0.85rem;
    line-height: 0.85rem;
    background-color: #DF1E3E;
    color: #fff;
    border-radius: 0.42rem;
    margin: 0 auto;
    font-size: 0.34rem;
  }
</style>
