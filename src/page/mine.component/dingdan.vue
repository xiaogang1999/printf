<template>
  <div class="my-dingdan">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div id="bu-lou-dong"></div>
    <div class="mydingdan">
      <van-tabs v-model="activeName" animated swipeable color="#ffff00" title-active-color='#df1e3e' border sticky
        offset-top='1.15rem'>
        <van-tab title="全部" name='a'>
          <mydd-a class="my-a" :proa='aaa'></mydd-a>
        </van-tab>
        <van-tab title="待付款" name='b'>
          <mydd-b class="my-a" :proa='bbb'></mydd-b>
        </van-tab>
        <van-tab title="待收货" name='c'>
          <mydd-c class="my-a" :proa='ccc'></mydd-c>
        </van-tab>
        <van-tab title="待评价" name='d'>
          <mydd-d class="my-a" :proa='ddd'></mydd-d>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import goBack from '@/components/goback.vue';
  import myddA from '@/components/myddA.vue';
  import myddB from '@/components/myddB.vue';
  import myddC from '@/components/myddC.vue';
  import myddD from '@/components/myddD.vue';
  export default {
    components: {
      goBack,
      myddA,
      myddB,
      myddC,
      myddD
    },
    data() {
      return {
        activeName: 'a',
        topTit: {
          tit: '订单',
          path: '/mine'
        },
        aaa: '000',
        bbb: '000',
        ccc: '000',
        ddd: '000'
      }
    },
    methods: {
      onClick() {
        Toast(this.activeName + 1111);
      },
    },
  }
</script>

<style scoped>
  .my-dingdan>.top-go {
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

  .mydingdan {
    margin-top: 1.15rem;
    width: 100vw;
  }
</style>
