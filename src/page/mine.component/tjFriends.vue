<template>
  <div class="my-tj">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="bode"></div>
    <div class="tjbg">
      <h3>推荐亲友下载APP</h3>
      <h4>一起来赚吧</h4>
      <h2>推荐码：12345678</h2>
    </div>
    <div class="guizhe">
      <h4>使用规则：</h4>
      <p>将此推荐码推荐给好友，好友在注册的时候使用此推荐码那么好友在购物结算后获得的积分将一起累计到推荐者的账号上，此积分可在购物中使用。</p>
    </div>
    <div id="opt-yaoqing">
      <van-cell title="发 起 邀 请" @click="showShare = true" />
      <van-share-sheet v-model="showShare" title="立即邀请好友" :options="options" @select="onSelect" />
    </div>
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
          tit: '推荐好友'
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
      },
    },
  }
</script>

<style scoped>
  .my-tj>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .my-tj>.bode {
    width: 100vw;
    margin-top: 1.15rem;
    border-top: 0.01rem solid #eaeaea;
    height: 0.74rem;
  }

  .my-tj>.tjbg {
    width: 6.9rem;
    height: 2.8rem;
    margin: 0 auto;
    border-radius: 0.28rem;
    background: url(../../../static/imgs/fsa.png) 0 0/cover no-repeat;
    overflow: hidden;
    color: #fff;
    text-align: left;
  }

  .tjbg>h3 {
    margin-top: 0.56rem;
    font-size: 0.32rem;
    line-height: 0.6rem;
    margin-left: 0.425rem;
    font-weight: normal;
  }

  .tjbg>h4 {
    font-size: 0.28rem;
    line-height: 0.6rem;
    margin-left: 0.425rem;
    font-weight: normal;
  }

  .tjbg>h2 {
    margin-top: 0.18rem;
    font-size: 0.36rem;
    line-height: 0.6rem;
    margin-left: 0.425rem;
    font-weight: normal;
  }

  .guizhe {
    width: calc(100vw - 1rem);
    height: 1.7rem;
    margin: 0.6rem auto 5rem;
    text-align: left;
  }

  .guizhe>h4 {
    font-size: 0.28rem;
    line-height: 0.4rem;
    font-weight: normal;
  }

  .guizhe>p {
    margin-top: 0.3rem;
    font-size: 0.26rem;
    color: #999;
  }

  #opt-yaoqing {
    width: 6.7rem;
    height: 0.85rem;
    margin: 0 auto;
  }

  .my-tj>#opt-yaoqing>.van-cell {
    width: 6.7rem;
    height: 0.85rem;
    line-height: 0.84rem;
    font-size: 0.32rem;
    border-radius: 0.425rem;
    padding: 0;
    color: #fff;
    background-color: #5aabfd;
  }
</style>
