<template>
  <div class="areaCom">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="topbubai"></div>
    <img :src="quedingxinxi.imgs" />
    <h1>葡式奶油春香蛋挞</h1>
    <h3>剩余200个&nbsp;&nbsp;&nbsp;&nbsp;数量多的请提前2天预订</h3>
    <h4>全国快递</h4>
    <p>
      原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。
    </p>
    <h2>乡里饽饽蛋</h2>
    <div class="a1"></div>
    <div class="a2">湖南省某某市某某县某某村</div>
    <div class="a3"></div>
    <div class="a4">
      <div class="a4-msg">更多</div>
    </div>
    <p>
      原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。
    </p>
    <div class="a5"></div>
    <p>
      原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。原生态，纯天然，散养的鸡蛋。
    </p>
    <div class="a6">
      <div class="pres">
        <p>产品名称：乡里饽饽蛋</p>
        <p>产地：湖南xxx</p>
        <p>规格：精品装/30枚</p>
        <p>保质期：45天</p>
        <p>保存方法：阴凉处活冰</p>
        <p>箱冷藏保鲜</p>
      </div>
      <img src="../../../static/imgs/egXq4.png">
    </div>
    <div class="a7">
      <h2>温馨提示</h2>
      <p>·本产品不支持退款</p>
      <p>·如需开具发票，请具体咨询在线客服</p>
      <p>·本店营业时间：8:00—24：00</p>
      <div class="a7-msg">——&nbsp;<font color="#df1e3e">点击这里联系乡里饽饽蛋在线客服</font>&nbsp;——</div>
    </div>
    <h2 style="font-size: 0.348rem;">更多套餐</h2>
    <h2>————</h2>
    <ul id="tuijian">
      <li v-for="lis in eggXq" :key="lis.id">
        <router-link to="javascript:;" class="tjlis" :key="lis.id">
          <img :src="lis.imgs" />
          <div class="lis-msg">
            <h2>经典礼盒包装{{ lis.numb }}枚装</h2>
            <p>
              <span>{{ lis.jg1 }}元</span>
              <s>¥{{ lis.jg2 }}元/盒</s>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="a8">——&nbsp;乡里饽饽蛋&nbsp;——</div>
    <ol id="lost">
      <li>
        <font size="5">{{ quedingxinxi.jg1 }}</font>元/盒
      </li>
      <li>加入购物车</li>
      <li>
        <van-cell is-link @click="showPopup">
          <div id="popuptext">立即购买</div>
        </van-cell>
        <van-popup v-model="show" closeable position="bottom" :style="{ height: '37.331%' }">
          <div id="goods">
            <div class="goods-top">
              <img :src="quedingxinxi.imgs" />
              <div class="goods-msg">
                <span>￥{{ quedingxinxi.jg1 }}元</span>
                <p>已选：{{ quedingxinxi.msg2 }}</p>
                <div class="divnumb">{{ quedingxinxi.numb }}枚</div>
              </div>
            </div>
            <div class="goods-foot">
              <div class="jbq">
                <div class="numName">购买数量：</div>
                <div class="stpr">
                  <van-stepper v-model="quedingxinxi.gmNum" min="1" button-size='23px' input-width="26px"
                    theme="round" />
                </div>
              </div>
            </div>
            <router-link :to="{ name:'queding' , params:this.$route.params}" id="btn-goods">确认</router-link>
          </div>
        </van-popup>
      </li>
    </ol>
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
        quedingxinxi: {
          id: 1,
          imgs: '../../../static/imgs/egg2.png',
          msg1: '新鲜自养土鸡蛋，礼盒包装',
          msg2: '农家土鸡蛋',
          gmNum: 1, //购买数量
          numb: 25, //枚数
          jg1: 105, //现价
          jg2: 145, //原价
          name: 'area'
        },
        topTit: {
          tit: '商品详情',
          path: '/'
        },
        show: false,
        eggXq: [{
            id: 999,
            numb: 20, //枚数
            jg1: 100, //现价
            jg2: 135, //原价
            imgs: '../../../static/imgs/egXq4.png'
          },
          {
            id: 9999,
            numb: 30,
            jg1: 99,
            jg2: 150,
            imgs: '../../../static/imgs/egXq5.png'
          },
        ]
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      }
    },
    beforeMount() {
      var index_pms = this.$route.params;
      if (index_pms.imgs != undefined) {
        this.quedingxinxi = index_pms;
        this.eggXq.unshift(index_pms);
      } else {
        this.eggXq.unshift(this.quedingxinxi);
      }
      console.log(index_pms);
    }
  }
</script>

<style scoped>
  .areaCom>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }
  .topbubai{
    width: 100vw;
    height: 1.05rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 990;
    background-color: #fff;
  }
  .areaCom>img {
    margin-top: 1rem;
    width: 100vw;
    height: 5.65rem;
    margin-bottom: 0.56rem;
  }

  .areaCom>h1 {
    font-size: 0.4rem;
    text-align: left;
    text-indent: 0.4rem;
    margin-bottom: 0.35rem;
  }

  .areaCom>h2 {
    font-size: 0.365rem;
    font-weight: normal;
    font-stretch: normal;
    color: #000;
    margin-bottom: 0.25rem;
  }

  .areaCom>h3 {
    font-size: 0.28rem;
    color: #71747a;
    text-align: left;
    text-indent: 0.4rem;
    font-weight: normal;
    margin-bottom: 0.36rem;
  }

  .areaCom>h4 {
    text-indent: 0.41rem;
    color: #c2a573;
    text-align: left;
    font-size: 0.275rem;
    font-weight: normal;
    font-stretch: normal;
    margin-bottom: 0.61rem;
  }

  .areaCom>p {
    width: 6.9rem;
    height: 3.3rem;
    margin-left: 0.38rem;
    margin-right: 0.22rem;
    color: #63666b;
    font-size: 0.28rem;
    line-height: 0.48rem;
    margin-bottom: 0.56rem;
    text-align: left;
  }

  .a1 {
    width: 7rem;
    height: 0.6rem;
    margin: 0 auto;
    background: url(../../../static/imgs/egXq6.png) 0 0/100% no-repeat;
  }

  .a2 {
    width: 7.5rem;
    height: 0.64rem;
    line-height: 0.66rem;
    color: #63666b;
    font-size: 0.285rem;
    text-align: center;
  }

  .a3 {
    width: 7rem;
    height: 1rem;
    margin: 0 auto 0.5rem;
    background: url(../../../static/imgs/egXq7.png) 0 0/100% no-repeat;
  }

  .a4 {
    width: 7.5rem;
    height: 4.16rem;
    background: url(../../../static/imgs/egXq2.png) 0 0/cover no-repeat;
    margin-bottom: 0.96rem;
    position: relative;
  }

  .a4-msg {
    width: 2rem;
    height: 0.82rem;
    border: 0.01rem #6b6b6b solid;
    border-top: 0.01rem #9f9f9f solid;
    border-bottom: 0.01rem #9f9f9f solid;
    text-align: center;
    line-height: 0.83rem;
    font-size: 0.32rem;
    position: absolute;
    left: 2.75rem;
    top: 3.75rem;
    background-color: #fff;
  }

  .a5 {
    width: 6.91rem;
    height: 3.81rem;
    margin: 0 auto;
    background: url(../../../static/imgs/egXq3.png) 0 -16px/100% no-repeat;
    margin-bottom: 0.5rem;
  }

  .a6 {
    width: 7.5rem;
    height: 3.65rem;
    background-color: #9ec357;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    margin-bottom: 0.58rem;
  }

  .a6>.pres {
    width: 2.68rem;
    height: 2.45rem;
    font-size: 0.266rem;
    color: #fff;
    margin: 0.45rem 0 0 0.33rem;
  }

  .pres>p {
    text-align: left;
  }

  .a6>img {
    width: 3.7rem;
    height: 2.98rem;
    margin: 0.33rem 0 0 0.5rem;
  }

  .a7 {
    width: 7.5rem;
    height: 3.76rem;
    background-color: #f9f9fa;
    margin-bottom: 0.58rem;
    overflow: hidden;
  }

  .a7>h2 {
    font-size: 0.32rem;
    text-align: center;
    margin: 0.45rem auto 0.3rem;
  }

  .a7>p {
    font-size: 0.3rem;
    text-align: left;
    height: 0.52rem;
    line-height: 0.52rem;
    text-indent: 0.41rem;
    color: #707479;
  }

  .a7-msg {
    font-size: 0.26rem;
    text-align: center;
    margin-top: 0.32rem;
  }

  #tuijian {
    width: calc(100vw - 0.6rem);
    margin: 0.1rem auto;
  }

  #tuijian>li {
    width: 100%;
    height: 2.38rem;
    margin: 0.06rem 0;
    border-bottom: 0.01rem #c1c7d0 solid;
    overflow: hidden;
  }

  #tuijian>li:nth-child(3) {
    border: none;
  }

  .tjlis {
    width: 100%;
    height: 2.38rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .tjlis>img {
    width: 3.13rem;
    height: 1.82rem;
    margin: 0.28rem 0.09rem;
  }

  .tjlis>.lis-msg {
    width: calc(100% - 3.7rem);
    height: 1.2rem;
    margin: 0.6rem 0 0 0.24rem;
  }

  .tjlis>.lis-msg>h2 {
    font-size: 0.3rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.44rem;
    text-align: left;
  }

  .tjlis>.lis-msg>p {
    font-size: 0.27rem;
    font-weight: normal;
    font-stretch: normal;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-top: 0.3rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .lis-msg>p>span {
    width: 0.8rem;
    height: 100%;
    line-height: 0.46rem;
    color: #ff5a00;
    text-align: left;
    margin-left: 0.06rem;
  }

  .lis-msg>p>s {
    width: 1.35rem;
    height: 100%;
    line-height: 0.46rem;
    color: #999;
    text-align: left;
    margin-left: 0.1rem;
  }

  .a8 {
    font-size: 0.26rem;
    height: 0.5rem;
    line-height: 0.52rem;
    text-align: center;
    margin: 0.15rem auto 1.4rem;
  }

  #lost {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  #lost>li:nth-child(1) {
    width: 1.93rem;
    line-height: 1.04rem;
    background-color: #efefef;
    color: #df1e3e;
    font-size: 0.26rem;
    text-align: center;
  }

  #lost>li:nth-child(2) {
    width: 2.42rem;
    line-height: 1.02rem;
    font-size: 0.34rem;
    color: #fff;
    background-color: #5aabfd;
    text-align: center;
  }

  #lost>li:nth-child(3) {
    width: 3.15rem;
    height: 1rem;
    background-color: #df1e3e;
  }

  #lost>li:nth-child(3) .van-icon {
    display: none;
  }

  #lost>li:nth-child(3) .van-cell {
    padding: 0;
    line-height: 1.03rem;
    width: 100%;
    font-size: 0.34rem;
  }

  #lost>li:nth-child(3) .van-cell::after {
    display: none;
  }

  #popuptext {
    background-color: #df1e3e;
    color: #fff;
    text-align: center;
  }

  #goods {
    width: 7.5rem;
    height: 4.98rem;
    overflow: hidden;
  }

  .goods-top {
    width: calc(100% - 0.6rem);
    height: 2.86rem;
    margin: 0 auto;
    border-bottom: 0.01rem #9a9a9a solid;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .goods-top>img {
    width: 1.88rem;
    height: 1.88rem;
    margin: 0.35rem 0.5rem 0 0;
  }

  .goods-msg {
    width: 4.3rem;
    height: 2.2rem;
    margin-top: 0.44rem;
    text-align: left;
    color: #000;
  }

  .goods-msg>span {
    display: inline-block;
    width: 1.3rem;
    height: 0.3rem;
    line-height: 0.32rem;
    font-size: 0.31rem;
  }

  .goods-msg>p {
    width: 4rem;
    font-size: 0.3rem;
    margin-top: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文本超出显示省略号 */
    white-space: nowrap;
    /* 不换行 */
  }

  .goods-msg>.divnumb {
    width: 1rem;
    height: 0.56rem;
    border-radius: 0.12rem;
    border: solid 0.03rem #3b74f4;
    text-align: center;
    line-height: 0.58rem;
    font-size: 0.285rem;
    color: #3b74f4;
    margin-top: 0.35rem;
  }

  .goods-foot {
    width: 6.9rem;
    margin: 0.3rem auto 0.4rem;
    height: 0.48rem;
    overflow: hidden;
  }

  .jbq {
    float: right;
    width: calc(100% - 2rem);
    height: 0.48rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }

  .jbq>.numName {
    width: 1.8rem;
    font-size: 0.3rem;
    text-align: center;
    height: 0.48rem;
    line-height: 0.5rem;
  }

  .stpr {
    width: 1.6rem;
    margin-right: 0.32rem;
  }

  #btn-goods {
    width: 100vw;
    height: 0.99rem;
    line-height: 0.99rem;
    font-size: 0.34rem;
    color: #fff;
    background-color: #DF1E3E;
  }
</style>
