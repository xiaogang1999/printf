<template>
  <div class="main">
    <div class="my-top">
      <router-link to="/mySetup" class="myset"></router-link>
      <div class="userPhoto"></div>
      <div class="my-top-msg">
        <h1 @click="login()">登录 | 注册</h1>
        <h2>个性签名</h2>
        <router-link to="/myAtt" class="attention">
          <img src="../../static/imgs/my12.png" />
          <div>关注</div>
        </router-link>
      </div>
    </div>
    <ul id="qklist">
      <li v-for="item in myArr" :key="item.id">
        <router-link :to="item.path" :key="item.id" class="melis">
          <img :src="item.imgs" />
          <div class="amsg">
            <h1>{{ item.tit }}</h1>
            <p>{{ item.p }}</p>
          </div>
        </router-link>
      </li>
    </ul>
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
        mytop: "1",
        myArr: [{
            id: 1,
            path: '/proson',
            tit: '个人资料',
            p: '完善信息',
            imgs: '../../static/imgs/my2.png'
          },
          {
            id: 2,
            path: '/intagl',
            tit: '积分',
            p: '20分',
            imgs: '../../static/imgs/my3.png'
          },
          {
            id: 3,
            path: '/dingdan',
            tit: '订单',
            p: '查看状态',
            imgs: '../../static/imgs/my4.png'
          },
          {
            id: 4,
            path: '/records',
            tit: '消费记录',
            p: '（获得积分）',
            imgs: '../../static/imgs/my5.png'
          },
          {
            id: 5,
            path: '/balance',
            tit: '余额',
            p: '150.00',
            imgs: '../../static/imgs/my6.png'
          },
          {
            id: 6,
            path: '/tjFriends',
            tit: '推荐好友',
            p: '获得更多积分',
            imgs: '../../static/imgs/my7.png'
          },
          {
            id: 7,
            path: '/yjFeedback',
            tit: '意见反馈',
            p: '改善用户体验',
            imgs: '../../static/imgs/my8.png'
          },
          {
            id: 8,
            path: '/lxService',
            tit: '联系客服',
            p: '及时解决您的问题',
            imgs: '../../static/imgs/my9.png'
          },
          {
            id: 9,
            path: '/jiAdopt',
            tit: '领养乡里饽饽鸡',
            p: '每月收获饽饽蛋',
            imgs: '../../static/imgs/my10.png'
          },
          {
            id: 10,
            path: '/jiAdopt',
            tit: '',
            p: '',
            imgs: ''
          }
        ]
      }
    },
    methods:{
      login(){
        this.$router.push({
          name:'theLogin',
          params:'111'
        })
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

  .my-top {
    width: 100vw;
    height: 5.29rem;
    background: url(../../static/imgs/my1.png) 0 0/cover no-repeat;
    position: relative;
  }

  .myset {
    width: 0.366rem;
    height: 0.362rem;
    background: url(../../static/imgs/my11.png) 0 0/cover no-repeat;
    position: absolute;
    top: 0.7rem;
    right: 0.35rem;
  }

  .userPhoto {
    width: 1.65rem;
    height: 1.65rem;
    border-radius: 50%;
    position: absolute;
    top: 1.36rem;
    left: calc(50% - 0.825rem);
    background: url(../../static/imgs/12.jpg) 0 0/cover no-repeat;
  }

  .my-top-msg {
    width: 1.66rem;
    height: 1.6rem;
    position: absolute;
    left: calc(50% - 0.83rem);
    bottom: 0.38rem;
    color: #fff;
  }

  .my-top-msg>h1 {
    height: 0.4rem;
    font-size: 0.27rem;
    font-weight: normal;
    font-stretch: normal;
    text-align: center;
    line-height: 0.4rem;
  }

  .my-top-msg>h2 {
    height: 0.3rem;
    font-size: 0.24rem;
    font-weight: normal;
    font-stretch: normal;
    text-align: center;
    line-height: 0.3rem;
    margin-top: 0.08rem;
  }

  .my-top-msg>.attention {
    width: 1.58rem;
    height: 0.59rem;
    margin-top: 0.18rem;
    border: 0.032rem #f9f9f9 solid;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .attention>img {
    width: 0.2rem;
    height: 0.28rem;
    margin: 0.15rem 0 0 0.25rem;
  }

  .attention>div {
    width: 0.9rem;
    height: 0.59rem;
    line-height: 0.63rem;
    font-size: 0.24rem;
    color: #fff;
  }

  #qklist {
    width: 100vw;
    height: 7.5rem;
    padding: 0.33rem 0 0.48rem;
    margin-bottom: 1.005rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
  }

  #qklist>li {
    width: calc(50% - 0.01rem);
    height: 1.46rem;
    border-top: 0.01rem #dfdfdf solid;
  }

  #qklist>li:nth-child(2n - 1) {
    border-right: 0.01rem #dfdfdf solid;
  }

  #qklist>li:nth-child(9) {
    border-right: none;
    border-bottom: 0.01rem #dfdfdf solid;
  }

  #qklist>li:nth-child(10) {
    border-bottom: 0.01rem #dfdfdf solid;
  }

  #qklist>li:nth-child(6) img {
    width: 0.5rem;
    height: 0.3rem;
  }

  #qklist>li:nth-child(9) img {
    width: 0.27rem;
    height: 0.46rem;
  }

  #qklist>li:nth-child(10) img {
    display: none;
  }

  .melis {
    width: 100%;
    height: 1.46rem;
    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
  }

  .melis>img {
    width: 0.39rem;
    height: 0.45rem;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
  }

  .amsg {
    width: calc(100% - 1.2rem);
    height: 100%;
  }

  .amsg>h1 {
    height: 0.38rem;
    line-height: 0.38rem;
    font-size: 0.3rem;
    text-align: left;
    margin-top: 0.34rem;
  }

  .amsg>p {
    height: 0.28rem;
    font-size: 0.245rem;
    line-height: 0.3rem;
    color: #999;
    text-align: left;
    margin-top: 0.12rem;
    text-indent: 0.01rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
