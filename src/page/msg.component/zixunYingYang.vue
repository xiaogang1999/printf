<template>
  <div class="zixunzujian">
    <div class="zujian-top">
      <div class="tuijian">{{ date.Tit }}</div>
      <h1>{{ date.tit }}</h1>
      <p>{{ date.msgp }}</p>
    </div>
    <img :src="date.img2" alt="点评情况"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: {
          img1: '../../../static/imgs/yingyang1.png',
          img2: '../../../static/imgs/yingyang2.png',
          Tit: '推荐',
          tit: '什么样的鸡蛋最有营养?现在宝宝最该注意饮食方案！',
          msgp:'鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这......'
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .zixunzujian {
    width: calc(100vw - 0.66rem);
    margin: 0 auto;
  }

  .zujian-top {
    width: 100%;
    overflow: hidden;
  }

  .tuijian {
    float: left;
    width: 0.8rem;
    height: 0.8rem;
    background: url(../../../static/imgs/yingyang1.png) 100% 100%/cover no-repeat;
    color: #fff;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.24rem;
  }

  .zujian-top>h1 {
    float: left;
    width: calc(100% - 2rem);
    padding-left: 0.2rem;
    text-align: left;
    margin-top: 0.16rem;
    font-size: 0.32rem;
  }

  p {
    float: right;
    margin-top: 0.35rem;
    width: 5.9rem;
    padding-right: 0.05rem;
    font-size: 0.26rem;
    font-weight: normal;
    color: #737373;
    text-align: left;
  }

  .zixunzujian>img {
    width: calc(100% - 0.02rem);
    height: 0.62rem;
    margin: 0.32rem auto 0.4rem;
  }
</style>
