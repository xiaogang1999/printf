<template>
  <div class="egg-order">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div id="bu-lou-dong"></div>
    <div class="head">
      <div class="dizhi">
        <div class="pophoto">
          <span>收货人：张三</span>
          <span>136520695456</span>
        </div>
        <p>北京大兴区西红门镇30号3门1室内</p>
        <div class="youjiantou"></div>
      </div>
    </div>
    <h2>订单号：A12124225</h2>
    <div class="qdgoods">
      <img :src="odXinxi.imgs" />
      <div class="qdmsg">
        <p>{{ odXinxi.msg1 }}</p>
        <h3>{{ odXinxi.msg2 }}</h3>
        <ul class="eggprice">
          <li>{{ odXinxi.numb }}枚装</li>
          <li>¥<font size="6">{{ odXinxi.jg1 }}</font>元</li>
          <li>x{{ odXinxi.gmNum }}</li>
        </ul>
      </div>
    </div>
    <div class="pingjia">
      <input type="text" placeholder="如有特殊要求请填写(40字内)" />
    </div>
    <div class="b">
      <p>选择支付方式</p>
    </div>
    <div class="zhifu">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="余额支付" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" shape="square" checked-color="#df1e3e" icon-size="25px" />
            </template>
            <template #icon>
              <img class="img-icon" src="../../../static/imgs/qd4.png" />
            </template>
          </van-cell>
          <van-cell title="支付宝" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" shape="square" checked-color="#df1e3e" icon-size="25px" />
            </template>
            <template #icon>
              <img class="img-icon" src="../../../static/imgs/qd2.png" />
            </template>
          </van-cell>
          <van-cell title="微信支付" clickable @click="radio = '3'">
            <template #right-icon>
              <van-radio name="3" shape="square" checked-color="#df1e3e" icon-size="25px" />
            </template>
            <template #icon>
              <img class="img-icon" src="../../../static/imgs/qd3.png" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="qd-foot">
      <div class="allpay">共&nbsp;&nbsp;¥{{ odXinxi.jg1 }}</div>
      <div class="pay">立即支付</div>
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
        radio: '1',
        topTit: {
          tit: '确认订单'
        },
        odXinxi: {
          id: 1,
          imgs: '../../../static/imgs/egg3.png',
          msg1: '新鲜自养土鸡蛋，礼盒包装',
          msg2: '农家土鸡蛋',
          gmNum: 1,//购买数量
          numb: 25,//枚数
          jg1: 105,//现价
          jg2: 145,//原价
          name: 'area'
        }
      }
    },
    methods: {},
    beforeMount() {
      var pmis = this.$route.params
      if (pmis.imgs != undefined) {
        this.odXinxi = pmis;
      }
    }
  }
</script>

<style scoped>
  .egg-order>.top-go {
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

  .egg-order>.head {
    width: 100vw;
    margin-top: 1.28rem;
    border-top: 0.015rem solid #dddddd;
  }

  .dizhi {
    width: calc(100vw - 0.56rem);
    height: 1.35rem;
    margin: 0.37rem 0.3rem 0.37rem 0.26rem;
    position: relative;
  }

  .pophoto {
    width: calc(100vw - 2.1rem);
    height: 0.4rem;
    margin-bottom: 0.45rem;
    margin-left: 0.1rem;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .pophoto>span {
    line-height: 0.4rem;
    font-size: 0.3rem;
  }

  .dizhi>p {
    text-align: left;
    font-size: 0.28rem;
    padding-left: 0.1rem;
    color: #63666b;
  }

  .youjiantou {
    width: 0.25rem;
    height: 0.4rem;
    background: url(../../../static/imgs/qd1.png) 0 0/cover no-repeat;
    position: absolute;
    top: 0.5rem;
    right: 0.1rem;
  }

  .egg-order>h2 {
    width: calc(100vw - 0.8rem);
    margin: 0 auto 0.05rem;
    height: 1.05rem;
    line-height: 1.05rem;
    text-align: left;
    font-size: 0.28rem;
    color: #63666b;
    border-top: 0.012rem solid #c6cdd5;
  }

  .qdgoods {
    width: calc(100vw - 0.8rem);
    height: 1.72rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
  }

  .qdgoods>img {
    width: 1.72rem;
    height: 1.72rem;
    position: relative;
  }

  .qdgoods>img::before {
    display: block;
    content: '';
    width: 1.72rem;
    height: 1.72rem;
    background: rgba(0, 0, 0, 0.12);
    position: absolute;
    top: 0;
    left: 0;
  }

  .qdmsg {
    width: calc(100% - 1.9rem);
    height: 1.72rem;
    margin-left: 0.25rem;
    text-align: left;
  }

  .qdmsg>p {
    font-size: 0.28rem;
    margin: 0.05rem auto 0.1rem;
    color: #63666b;
  }

  .qdmsg>h3 {
    font-size: 0.3rem;
    margin-bottom: 0.25rem;
  }

  .eggprice {
    width: 4.65rem;
    height: 0.5rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .eggprice>li:nth-child(1) {
    width: 1rem;
    height: 0.5rem;
    line-height: 0.6rem;
    font-size: 0.29rem;
    color: #5388ff;
  }

  .eggprice>li:nth-child(2) {
    width: 1.6rem;
    height: 0.5rem;
    line-height: 0.48rem;
    font-size: 0.33rem;
    color: #df1e3e;
    margin: 0 0.3rem;
  }

  .eggprice>li:nth-child(3) {
    font-size: 0.3rem;
    color: #999;
    line-height: 0.63rem;
    margin-left: 0.6rem;
  }

  .pingjia {
    width: calc(100vw - 0.6rem);
    height: 0.96rem;
    margin: 0.4rem auto;
    background-color: #f4f4f4;
  }

  .pingjia>input {
    width: calc(100% - 0.58rem);
    height: 100%;
    border: none;
    line-height: 0.94rem;
    font-size: 0.28rem;
    padding: 0 0.28rem;
    overflow: hidden;
  }

  .b {
    width: calc(100vw - 0.6rem);
    height: 0.8rem;
    margin: 0 auto 0.1rem;
    border-bottom: 0.015rem solid #999;
  }

  .b>p {
    font-size: 0.32rem;
    text-align: left;
    text-indent: 0.1rem;
  }

  .zhifu .img-icon {
    width: 0.65rem;
    height: 0.65rem;
  }

  .zhifu .van-cell__title {
    text-align: left;
    font-size: 0.29rem;
    text-indent: 0.25rem;
  }

  .qd-foot {
    width: 100vw;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .allpay {
    width: calc(100% - 3.561rem);
    line-height: 1rem;
    text-align: left;
    background-color: #eee;
    color: #df1e3e;
    font-size: 0.3rem;
    padding-left: 0.35rem;
  }

  .pay {
    width: 3.21rem;
    line-height: 1rem;
    background-color: #df1e3e;
    font-size: 0.36rem;
    color: #fff;
  }
</style>
