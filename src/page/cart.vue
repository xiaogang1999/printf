<template>
  <div class="main">
    <h1>购物车</h1>
    <ul id="shangpinglist">
      <li v-for="sp in goodsArr" :key="sp.id">
        <div class="sp-btn">
          <van-checkbox v-model="sp.bool" shape="square"></van-checkbox>
        </div>
        <div class="sp-xinxi">
          <div class="zzc"></div>
          <img :src="sp.imgs" alt="商品图片">
          <div class="sp-xinxi-msg">
            <p>{{ sp.msg1 }}</p>
            <h1>{{ sp.msg2 }}</h1>
            <div class="jiaoge">
              <span>{{ sp.numb }}枚装</span>
              <span>￥<font color="red" size="6">{{ sp.jg1 }}</font>元</span>
            </div>
          </div>
          <div class="jbq">
            <div class="numbName">购买数量：</div>
            <div class="stpr">
              <van-stepper v-model="sp.gmNum" min="1" button-size='16px' input-width="24px" theme="round" />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div id="tijiao">
      <div class="selectAll">
        <van-checkbox v-model="bool" shape="square">全选</van-checkbox>
      </div>
      <div class="invoicing">共￥{{ invoicing }}.00</div>
      <div class="sbmit" @click="sbmit">结算</div>
    </div>
    <tab-bar class="tabbar"></tab-bar>
  </div>
</template>

<script>
  import tabBar from '@/components/tabbar.vue';
  export default {
    components: {
      tabBar
    },
    data() {
      return {
        alljg: 0,
        gmNum: 1,
        bool: 0,
        date: {
          id: 1,
          imgs: '../../static/imgs/egg1.png',
          msg1: '新鲜自养土鸡蛋，礼盒包装',
          msg2: '农家土鸡蛋',
          numb: '25枚',
          jg1: '105元',
          jg2: '145元/盒'
        },
        goodsArr: [{
            bool: 0,
            gmNum: 1,
            id: 1,
            imgs: '../../static/imgs/egg1.png',
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家土鸡蛋',
            numb: 25,
            jg1: 105,
            jg2: '145元/盒'
          },
          {
            bool: 0,
            gmNum: 1,
            id: 2,
            imgs: '../../static/imgs/egg2.png',
            msg1: '纯天然农家自养食虫子草鸡蛋礼盒',
            msg2: '农家食虫鸡蛋',
            numb: 35,
            jg1: 100,
            jg2: '130元/盒'
          },
          {
            bool: 0,
            gmNum: 1,
            id: 3,
            imgs: '../../static/imgs/egg3.png',
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家土鸡蛋',
            numb: 25,
            jg1: 105,
            jg2: '145元/盒'
          },
          {
            bool: 0,
            gmNum: 1,
            id: 4,
            imgs: '../../static/imgs/egXq1.png',
            msg1: '纯天然农家自养食虫子草鸡蛋礼盒',
            msg2: '农家食虫鸡蛋',
            numb: 35,
            jg1: 100,
            jg2: '130元/盒'
          },
          {
            bool: 0,
            gmNum: 1,
            id: 5,
            imgs: '../../static/imgs/egXq5.png',
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家土鸡蛋',
            numb: 25,
            jg1: 105,
            jg2: '145元/盒'
          },
          {
            bool: 0,
            gmNum: 1,
            id: 6,
            imgs: '../../static/imgs/taocan3.png',
            msg1: '纯天然农家自养食虫子草鸡蛋礼盒',
            msg2: '农家食虫鸡蛋',
            numb: 35,
            jg1: 100,
            jg2: '130元/盒'
          }
        ]
      }
    },
    methods: {
      sbmit() {
        console.log(111);
      },
      onSubmit() {
        return {}
      },
      onClickEditAddress() {
        return {}
      }
    },
    computed: {
      invoicing: function() {
        var goods = 0;
        if (this.bool) {
          for (var i = 0; i < this.goodsArr.length; i++) {
            goods += this.goodsArr[i].jg1 * this.goodsArr[i].gmNum;
          }
        }
        return goods;
      }
    },
    watch: {
      selectAll: function() {

      }
    }
  }
</script>

<style scoped>
  #tijiao {
    width: 100vw;
    height: 0.86rem;
    position: fixed;
    left: 0;
    bottom: 1.03rem;
    z-index: 999;
    background-color: #f1f1f1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .selectAll {
    width: 1.86rem;
    height: 0.4rem;
    margin: 0.22rem 0 0 0.3rem;
  }

  .invoicing {
    width: 2.13rem;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: left;
    color: #df1e3e;
    font-size: 0.32rem;
  }

  .sbmit {
    width: 3.21rem;
    height: 100%;
    background-color: #df1e3e;
    text-align: center;
    line-height: 0.89rem;
    color: #fff;
    font-size: 0.36rem;
  }

  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .main>h1 {
    font-weight: 500;
    width: 100vw;
    padding-top: 0.15rem;
    height: 0.8rem;
    font-size: 0.36rem;
    text-align: center;
    line-height: 0.8rem;
    padding-bottom: 0.05rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 0.012rem #cfcfcf solid;
  }

  #shangpinglist {
    margin: 1.026rem auto 2.1rem;
  }

  #shangpinglist>li {
    width: calc(100vw - 0.6rem);
    margin: 0.06rem auto;
    height: 2.7rem;
    border-bottom: 0.02rem #d1d1d1 solid;
    position: relative;
  }

  .sp-btn {
    width: 0.405rem;
    height: 0.405rem;
    position: absolute;
    top: 1.1rem;
    left: 0;
  }

  .sp-xinxi {
    width: calc(100% - 0.5rem);
    height: calc(100% - 0.4rem);
    position: absolute;
    top: 0.4rem;
    left: 0.51rem;
    overflow: hidden;
    /* position: relative; */
  }

  .sp-xinxi>.zzc {
    width: 1.92rem;
    height: 1.9rem;
    background-color: rgba(0, 0, 0, 0.12);
    position: absolute;
    top: 0;
    left: 0;
  }

  .sp-xinxi>img {
    float: left;
    width: 1.92rem;
    height: 1.9rem;
  }

  .sp-xinxi-msg {
    float: right;
    width: calc(100% - 2.17rem);
    height: 1.7rem;
  }

  .sp-xinxi-msg>p {
    text-align: left;
    color: #63666B;
    font-size: 0.288rem;
    height: 0.5rem;
    line-height: 0.45rem;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文本超出显示省略号 */
    white-space: nowrap;
    /* 不换行 */
  }

  .sp-xinxi-msg>h1 {
    text-align: left;
    font-size: 0.31rem;
    height: 0.54rem;
    line-height: 0.58rem;
  }

  .sp-xinxi-msg>.jiaoge {
    width: calc(100% - 0.18rem);
    margin-top: 0.18rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .jiaoge>span:nth-child(1) {
    width: 0.96rem;
    height: 0.4rem;
    line-height: 0.45rem;
    color: #5aabfd;
    font-size: 0.28rem;
    text-align: center;
  }

  .jiaoge>span:nth-child(2) {
    width: 1.5rem;
    height: 0.4rem;
    line-height: 0.44rem;
    font-size: 0.3rem;
    text-align: center;
    color: #df1e3e;
  }

  .jbq {
    float: right;
    margin-top: 0.18rem;
    width: calc(100% - 2rem);
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }

  .jbq>.numbName {
    width: 1.2rem;
    font-size: 0.16rem;
    text-align: center;
    height: 0.32rem;
    line-height: 0.36rem;
  }

  .stpr {
    width: 1.2rem;
    margin-right: 0.18rem;
  }
</style>
