<template>
  <div class="zixunxingqing">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div id="bu-lou-dong"></div>
    <div class="img1"></div>
    <p>什么样的鸡蛋最有营养?现在宝宝最该注意饮食方案！</p>
    <div class="time">
      <img src="../../../static/imgs/zixun6.png" />
      <span>2016.01.12</span>
    </div>
    <div class="egg-species">
      鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的t，营养价值高的呢，那么仔细阅读这.鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这。
    </div>
    <div class="mianbao"></div>
    <div class="min-eg"></div>
    <div class="egg-species">
      鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的t，营养价值高的呢，那么仔细阅读这.鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这。
    </div>
    <div class="foot-bot">
      <div class="foot">
        <router-link to="/myAtt" class="bot-1"></router-link>
        <div>已关注</div>
      </div>
      <div class="foot">
        <router-link to="#" class="bot-2"></router-link>
        <div>分享</div>
      </div>
    </div>
    <div class="foot-photo"></div>
    <h3>乡里饽饽蛋</h3>
    <div class="h3-foot">
      <div class="px1 iconfont icon-zu"></div>
      <div class="px2 iconfont icon-tongzhi"></div>
      <div class="px1 iconfont icon-zu1"></div>
    </div>
    <div class="kefu">在线客服</div>
    <ul class="kfbot">
      <li>
        <router-link to="/myAtt" class="guanzhu">关注</router-link>
      </li>
      <li>
        <div class="fenxiang">
          <van-cell title="分享" @click="showShare = true" />
          <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import goBack from '@/components/goback.vue';
  import {
    Toast
  } from 'vant';
  export default {
    components: {
      goBack
    },
    data() {
      return {
        topTit: {
          tit: '资讯详情',
          path: '/msg'
        },
        showShare: false,
        options: [
          [{
              name: '微信',
              icon: 'wechat'
            },
            {
              name: '朋友圈',
              icon: 'wechat-moments'
            },
            {
              name: '微博',
              icon: 'weibo'
            },
            {
              name: 'QQ',
              icon: 'qq'
            },
          ],
          [{
              name: '复制链接',
              icon: 'link'
            },
            {
              name: '分享海报',
              icon: 'poster'
            },
            {
              name: '二维码',
              icon: 'qrcode'
            },
            {
              name: '小程序码',
              icon: 'weapp-qrcode'
            },
          ],
        ]
      }
    },
    methods: {
      onSelect(option) {
        Toast(option.name);
        this.showShare = false;
      }
    }
  }
</script>

<style scoped>
  .zixunxingqing>.top-go {
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

  .img1 {
    width: 100vw;
    height: 4.3rem;
    margin: 1.2rem auto 0.47rem;
    background: url(../../../static/imgs/zixun1.png) 0 0/cover no-repeat;
    position: relative;
  }

  .img1::before {
    display: block;
    content: '';
    width: 100vw;
    height: 4.3rem;
    background-color: rgba(0, 0, 0, 0.18);
    position: absolute;
    top: 0;
    left: 0;
  }

  .zixunxingqing>p {
    width: 6.35rem;
    margin-left: 0.28rem;
    font-size: 0.34rem;
    line-height: 0.6rem;
    text-align: left;
  }

  .time {
    width: calc(100vw - 0.7rem);
    height: 0.3rem;
    margin: 0.25rem auto 0.55rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .time>img {
    width: 0.3rem;
    height: 0.3rem;
  }

  .time>span {
    width: 1.9rem;
    line-height: 0.3rem;
    font-size: 0.26rem;
    color: #7e7e7e;
  }

  .egg-species {
    width: calc(100vw - 0.65rem);
    height: 2.45rem;
    margin: 0 auto;
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #737373;
    text-align: left;
  }

  .mianbao {
    width: calc(100vw - 0.6rem);
    height: 6.8rem;
    margin: 0.5rem auto 0.45rem;
    background: url(../../../static/imgs/zixun7.png) 0 0/cover no-repeat;
  }

  .min-eg {
    width: calc(100vw - 0.58rem);
    height: 7.41rem;
    margin: 0 0.32rem 0.6rem 0.26rem;
    background: url(../../../static/imgs/zixun8.png) 0 0/cover no-repeat;
  }

  .foot-bot {
    width: 100vw;
    height: 1.28rem;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
  }

  .foot {
    width: 1.98rem;
    height: 1.28rem;
  }

  .bot-1 {
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    background: url(../../../static/imgs/zixun4.png) 0 0/cover no-repeat;
  }

  .bot-2 {
    width: 0.77rem;
    height: 0.77rem;
    border: 0.015rem solid #b1b1b1;
    border-radius: 50%;
    margin: 0 auto;
    background: url(../../../static/imgs/zixun9.png) 0.16rem 0.15rem/60% no-repeat;
  }

  .foot>div {
    font-size: 0.26rem;
    color: #b5b5b5;
    height: 0.42rem;
    line-height: 0.44rem;
  }

  .foot-photo {
    width: calc(100vw - 0.6rem);
    height: 2.35rem;
    border-bottom: 0.01rem solid #c5c5c5;
    border-top: 0.01rem solid #c5c5c5;
    margin: 0.15rem auto 0.36rem;
    background: url(../../../static/imgs/zixun10.png) -0.08rem 0/100% no-repeat;
  }

  .zixunxingqing>h3 {
    font-size: 0.26rem;
    text-align: center;
    margin-bottom: 0.1rem;
  }

  .h3-foot {
    width: 100vw;
    height: 0.2rem;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    margin: 0.28rem 0;
  }

  .h3-foot>.px1 {
    width: 2.86rem;
    line-height: 0.2rem;
    font-size: 0.04rem;
    text-align: center;
  }

  .h3-foot>.px2 {
    width: 0.2rem;
    height: 0.2rem;
    margin: 0 0.3rem;
    line-height: 0.18rem;
    font-size: 0.24rem;
  }

  .kefu {
    width: 1.2rem;
    height: 0.52rem;
    line-height: 0.53rem;

    font-size: 0.24rem;
    color: #df1e3e;
    border: 0.01rem solid #515151;
    margin: 0.1rem auto 1.35rem;
  }

  .kfbot {
    width: 100vw;
    height: 1rem;
    border-top: 0.01rem solid #e1e1e1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
  }

  .kfbot>li {
    width: 50vw;
    height: 1rem;
    position: relative;
  }

  .guanzhu {
    width: 0.7rem;
    height: 0.5rem;
    font-size: 0.28rem;
    line-height: 0.5rem;
    border: #8c8c8c solid 0.015rem;
    border-radius: 0.1rem;
    position: absolute;
    top: 0.23rem;
    left: 2.4rem;
  }

  .fenxiang {
    width: 0.7rem;
    height: 0.5rem;
    border: #8c8c8c solid 0.015rem;
    border-radius: 0.1rem;
    position: absolute;
    top: 0.23rem;
    right: 2.4rem;
  }

  .zixunxingqing .kfbot>li>.fenxiang .van-doc-demo-block__card {
    width: 0.7rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: left;
    font-size: 0.29rem;
  }

  .zixunxingqing .kfbot>li>.fenxiang .van-cell {
    padding: 0;
  }

  .van-cell__right-icon {
    display: none;
  }
</style>
