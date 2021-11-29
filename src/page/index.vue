<template>
  <div class="main">
    <h1>首页</h1>
    <div id="weiz">
      <div class="dingwei iconfont icon-ditu_dingwei_o"></div>
      <div class="weiz">朝阳区小营路7亚运豪庭</div>
    </div>
    <div id="cpList">
      <router-link :to="{ name:itme.name , params:itme }" v-for="itme in egg" :key="itme.id">
        <div class="egg">
          <img :src="itme.imgs" alt="土鸡蛋" />
          <div class="egg-xinxi">
            <p>{{ itme.msg1 }}</p>
            <h2>{{ itme.msg2 }}</h2>
            <span>{{ itme.numb }}枚</span>
            <div class="eg-jiage">
              <span>
                <font size="5">{{ itme.jg1 }}</font>元
              </span>
              <s>{{ itme.jg2 }}元/盒</s>
            </div>
          </div>
          <hr />
        </div>
      </router-link>
    </div>
    <tab-bar class="tabbar"></tab-bar>
  </div>
</template>

<script>
  import tabBar from '@/components/tabbar.vue';
  // import areaCom from './index.component/areaCompontent.vue'
  export default {
    components: {
      tabBar
    },
    data() {
      return {
        "egg": [{
            id: 1,
            imgs: require('../../static/imgs/egg1.png'),
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家土鸡蛋',
            gmNum: 1, //购买数量
            numb: 25, //枚数
            jg1: 105, //现价
            jg2: 145, //原价
            name: 'area'
          },
          {
            id: 2,
            imgs: require('../../static/imgs/egg2.png'),
            msg1: '纯天然农家自养食虫子草鸡蛋礼盒',
            msg2: '农家食虫鸡蛋',
            gmNum: 1,
            numb: 35,
            jg1: 100,
            jg2: 130,
            name: 'area'
          },
          {
            id: 3,
            imgs: require('../../static/imgs/egg3.png'),
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家土鸡蛋',
            gmNum: 1,
            numb: 30,
            jg1: 110,
            jg2: 125,
            name: 'area'
          },
          {
            id: 4,
            imgs: require('../../static/imgs/egg1.png'),
            msg1: '纯天然农家自养食虫子草鸡蛋礼盒',
            msg2: '农家食虫鸡蛋',
            gmNum: 1,
            numb: 25,
            jg1: 80,
            jg2: 100,
            name: 'area'
          },
          {
            id: 5,
            imgs: require('../../static/imgs/egg2.png'),
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家食草鸡蛋',
            gmNum: 1,
            numb: 25,
            jg1: 60,
            jg2: 80,
            name: 'area'
          },
          {
            id: 6,
            imgs: require('../../static/imgs/egg1.png'),
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家土鸡蛋',
            gmNum: 1,
            numb: 25,
            jg1: 105,
            jg2: 145,
            name: 'area'
          },
          {
            id: 7,
            imgs: require('../../static/imgs/egg2.png'),
            msg1: '纯天然农家自养食虫子草鸡蛋礼盒',
            msg2: '农家食虫鸡蛋',
            gmNum: 1,
            numb: 35,
            jg1: 100,
            jg2: 130,
            name: 'area'
          },
          {
            id: 8,
            imgs: require('../../static/imgs/egg3.png'),
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家土鸡蛋',
            gmNum: 1,
            numb: 30,
            jg1: 110,
            jg2: 125,
            name: 'area'
          },
          {
            id: 9,
            imgs: require('../../static/imgs/egg1.png'),
            msg1: '纯天然农家自养食虫子草鸡蛋礼盒',
            msg2: '农家食虫鸡蛋',
            gmNum: 1,
            numb: 25,
            jg1: 80,
            jg2: 100,
            name: 'area'
          },
          {
            id: 10,
            imgs: require('../../static/imgs/egg2.png'),
            msg1: '新鲜自养土鸡蛋，礼盒包装',
            msg2: '农家食草鸡蛋',
            gmNum: 1,
            numb: 25,
            jg1: 60,
            jg2: 80,
            name: 'area'
          }
        ]
      }
    }
  }
</script>

<!-- scoped -->
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

  #weiz {
    overflow: hidden;
    width: calc(100vw - 0.16rem);
    padding: 0 0.08rem;
    border-bottom: 0.015rem solid #c3c3c3;
    background-color: #fff;
    position: fixed;
    top: 0.996rem;
    left: 0;
    z-index: 99;
  }

  .main .dingwei {
    float: left;
    width: 0.43rem;
    height: 0.82rem;
    line-height: 0.82rem;
    text-align: center;
  }

  #weiz>.weiz {
    float: left;
    width: calc(100% - 0.6rem);
    height: 0.82rem;
    padding-left: 0.1rem;
    line-height: 0.82rem;
    text-align: left;
    font-size: 0.24rem;
    color: #63666b;
  }

  #cpList {
    width: calc(100vw - 20px);
    margin: 1.82rem auto 1.119rem;
  }

  .egg {
    overflow: hidden;
    width: calc(100vw - 20px);
    margin-top: 0.2rem;
    height: 3.7rem;
    border-bottom: 0.03rem #000 double;
    position: relative;
  }

  .egg>hr {
    width: 100%;
    height: 0;
    border: 0.02rem #000 solid;
    position: absolute;
    left: 0;
    bottom: 0.02rem;
  }

  .egg>img {
    float: left;
    width: calc(4.47/7.5 * 100vw);
    height: 3.28rem;
  }

  .egg-xinxi {
    float: left;
    width: calc(2.63/7.5 * 100vw - 0.29rem);
    height: 3.28rem;
    margin-left: 0.29rem;
  }

  .egg-xinxi>p {
    width: 2.24rem;
    height: 0.67rem;
    font-size: 0.27rem;
    text-align: left;
  }

  .egg>.egg-xinxi>h2 {
    width: 100%;
    height: 0.35rem;
    line-height: 0.35rem;
    margin: 0.335rem auto;
    text-align: left;
    font-size: 0.32rem;
  }

  .egg-xinxi>span {
    display: block;
    width: 0.95rem;
    line-height: 0.53rem;
    border: solid 2px #5aabfd;
    border-radius: 0.08rem;
    font-weight: normal;
    font-size: 0.25rem;
    color: #5aabfd;
  }

  .eg-jiage {
    width: 100%;
    height: 0.5rem;
    margin-top: 0.335rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-end;
  }

  .eg-jiage>span {
    flex: 1;
    display: block;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.28rem;
    text-align: center;
    color: #df1e3e;
  }

  .eg-jiage>s {
    flex: 1;
    display: block;
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: 0.29rem;
    text-align: center;
    color: #999;
  }
</style>
