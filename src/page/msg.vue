<template>
  <div class="main">
    <h1>今日资讯</h1>
    <router-link to="/zixunXq" :key="111">
      <div class="top">
        <div class="zzc"></div>
        <img :src="img1" alt="趣味百科" />
        <ying-yang class="yingyang"></ying-yang>
      </div>
    </router-link>
    <router-link to="/zixunXq" :key="222">
      <div class="xingkong">
        <h1>什么样的鸡蛋最有营养?现在宝宝最该注意饮食方案！</h1>
        <p>鸡蛋的种类分为很多种，营养价值也不同，那么怎么选择一个好的，营养价值高的呢，那么仔细阅读这...</p>
        <div class="imgs">
          <div class="imgs-1"></div>
          <div class="nub">27</div>
          <div class="imgs-2"></div>
        </div>
      </div>
    </router-link>
    <ul id="list">
      <li v-for="lis in lisArr" :key="lis.id">
        <router-link to="/zixunXq" :key="lis.id">
          <div class="lis-zzc"></div>
          <img :src="lis.img3" />
          <ying-yang class="yingyang"></ying-yang>
        </router-link>
      </li>
    </ul>
    <tab-bar class="tabbar"></tab-bar>
  </div>
</template>

<script>
  import tabBar from '@/components/tabbar.vue';
  import yingYang from '@/page/msg.component/zixunYingYang.vue';
  export default {
    components: {
      tabBar,
      yingYang
    },
    data() {
      return {
        img1: '../../static/imgs/zixun1.png',
        lisArr: [{
            id: 1,
            img3: '../../static/imgs/zixun3.png'
          },
          {
            id: 2,
            img3: '../../static/imgs/zixun3.png'
          },
          {
            id: 3,
            img3: '../../static/imgs/zixun3.png'
          },
          {
            id: 4,
            img3: '../../static/imgs/zixun3.png'
          },
          {
            id: 5,
            img3: '../../static/imgs/zixun3.png'
          },
          {
            id: 6,
            img3: '../../static/imgs/zixun3.png'
          }
        ],
      }
    }
  }
</script>

<style scoped>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .main>h1 {
    font-weight: 500;
    width: 100vw;
    padding-top: .15rem;
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

  .top {
    width: calc(100vw - 0.61rem);
    margin: 1.0225rem auto 0.1rem;
    position: relative;
  }

  .top>.zzc {
    width: calc(100vw - 0.6rem);
    height: 3.96rem;
    background: rgba(0, 0, 0, 0.17);
    position: absolute;
    top: 0.08rem;
    left: 0.005rem;
  }

  .top>img {
    width: calc(100vw - 0.6rem);
    height: 3.96rem;
    margin: 0.08rem auto 0.33rem;
  }

  .top>.yingyang {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .xingkong {
    width: 100vw;
    height: 6.6rem;
    background: url(../../static/imgs/zixun2.png) 100% 100%/cover no-repeat;
    position: relative;
    color: #fff;
  }

  .xingkong>h1 {
    font-size: 0.32rem;
    width: 5.25rem;
    height: 0.96;
    text-align: left;
    position: absolute;
    top: 2.04rem;
    left: 1.215rem;
  }

  .xingkong>p {
    width: 5.95rem;
    height: 1.05rem;
    font-size: 0.27rem;
    position: absolute;
    top: 3.31rem;
    left: 1.22rem;
    text-align: left;
  }

  .xingkong>.imgs {
    width: calc(100% - 0.02rem);
    height: 0.62rem;
    position: absolute;
    left: 0;
    bottom: 0.18rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .imgs>.imgs-1 {
    width: 0.26rem;
    height: 0.36rem;
    margin: 0.1rem 0 0 0.66rem;
    background: url(../../static/imgs/zixun4.png) 0 0/cover no-repeat;
  }

  .imgs>.nub {
    width: 0.64rem;
    height: 0.62rem;
    text-align: center;
    line-height: 0.64rem;
    font-size: 0.22rem;
  }

  .imgs>.imgs-2 {
    width: 0.31rem;
    height: 0.32rem;
    margin: 0.125rem 0 0 0.2rem;
    background: url(../../static/imgs/zixun5.png) 0 0/cover no-repeat;
  }

  #list {
    width: calc(100vw - 0.6rem);
    margin: 0.7rem auto 1.3rem;
  }

  #list>li {
    width: 100%;
    margin-bottom: 0.20rem;
    position: relative;
  }

  #list>li img {
    width: 100%;
    height: 3.96rem;
    margin-bottom: 0.42rem;
  }

  #list>li .lis-zzc {
    width: 100%;
    height: 3.96rem;
    background: rgba(0, 0, 0, 0.17);
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
