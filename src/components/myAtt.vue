<template>
  <div class="myAttention">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <ul class="myList">
      <li v-for="item in myatt" :key="item.id">
        <div class="myAtt-msg">
          <div class="mytit">{{ item.tit }}</div>
          <p>{{ item.msgp }}</p>
        </div>
        <img :src="item.imgs" />
      </li>
    </ul>
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
          tit: '我的关注'
        },
        myatt: [{
            id: 999,
            imgs: '../../static/imgs/zixun7.png',
            tit: '什么样的鸡蛋最有营养?现在宝宝最该注意饮食方案！',
            msgp: '鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这......'
          },
          {
            id: 1000,
            imgs: '../../static/imgs/zixun3.png',
            tit: '什么样的鸡蛋最有营养?现在宝宝最该注意饮食方案！',
            msgp: '鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这......'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .myAttention>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
    background-color: #fff;
  }

  .myAttention>.myList {
    width: 100vw;
    margin-top: 1.1rem;
    border-top: 0.015rem solid #eaeaea;
    background-color: #f9f9f9;
  }

  .myList>li {
    width: calc(100vw - 0.6rem);
    height: 2.5rem;
    margin: 0.25rem auto 0.1rem;
    border-bottom: 0.015rem solid #eaeaea;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  li>.myAtt-msg {
    width: calc(100vw - 3.95rem);
    height: 2.5rem;
    margin-left: 0.03rem;
  }

  .myList>li>img {
    width: 3.31rem;
    height: 2.2rem;
  }

  .mytit {
    width: 3.48rem;
    height: 0.92rem;
    line-height: 0.46rem;
    margin-bottom: 0.42rem;
    font-size: 0.34rem;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .myAtt-msg>p {
    width: 3.36rem;
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #737373;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* 转换成盒子模型 */
    -webkit-line-clamp: 2;
    /* 设置行数 */
    -webkit-box-orient: vertical;
  }
</style>
