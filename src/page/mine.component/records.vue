<template>
  <div class="my-records">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div id="bu-lou-dong"></div>
    <div class="recds">
      <ul class="my-rcds">
        <li v-for="p in rcdsArr" :key="p.id">
          <div class="my-rcds-msg">
            <h3>{{ p.order }}</h3>
            <h2>{{ p.eggmsg }}</h2>
            <p>{{ p.days }}</p>
          </div>
          <span>{{ p.itg_Points }}</span>
        </li>
      </ul>
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
          tit: '消费记录'
        },
        rcdsArr: [{
            id: 1,
            order: '订单号：A12121215',
            eggmsg: '新鲜自样土鸡蛋，礼盒包装',
            days: '2016.01.10',
            itg_Points: '+30分'
          },
          {
            id: 2,
            order: '订单号：A12121215',
            eggmsg: '新鲜自样土鸡蛋，礼盒包装',
            days: '2016.01.10',
            itg_Points: '+100分'
          },
          {
            id: 3,
            order: '订单号：A12121215',
            eggmsg: '',
            days: '2016.01.10',
            itg_Points: '+10分'
          },
          {
            id: 4,
            order: '订单号：A12121215',
            eggmsg: '新鲜自样土鸡蛋，礼盒包装',
            days: '2016.01.10',
            itg_Points: '+70分'
          },

          {
            id: 5,
            order: '新用户注册获得积分',
            eggmsg: '',
            days: '2016.01.10',
            itg_Points: '+10分'
          },
          {
            id: 6,
            order: '推荐好友张三获得积分',
            eggmsg: '',
            days: '2016.01.10',
            itg_Points: '+30分'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .my-records>.top-go {
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

  .my-records>.recds {
    width: calc(100vw - 0.6rem);
    padding: 0 0.3rem;
    border-top: 0.01rem solid #e6e6e6;
    margin: 1.15rem auto 0;
  }

  .my-rcds {
    width: 100%;
    margin-top: 0.32rem;
  }

  .my-rcds>li {
    width: 6.9rem;
    margin-bottom: 0.3rem;
    border-bottom: 0.01rem solid #ccc;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  li>.my-rcds-msg {
    width: calc(100% - 1.2rem);
    text-align: left;
  }

  .my-rcds>li>span {
    width: 1rem;
    line-height: 0.96rem;
    font-size: 0.28rem;
    color: #999;
  }

  .my-rcds-msg>h3 {
    font-size: 0.28rem;
    font-weight: normal;
    line-height: 0.36rem;
  }

  .my-rcds-msg>h2 {
    font-size: 0.28rem;
    font-weight: normal;
    line-height: 0.36rem;
    color: #63666B;
    margin: 0.1rem auto 0.2rem;
  }

  .my-rcds-msg>p {
    line-height: 0.3rem;
    color: #999;
    font-size: 0.24rem;
  }
</style>
