<template>
  <div class="proson">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="headcolor"></div>
    <div class="proson-xinxi">
      <div class="touxiang">
        <span>头像</span>
        <i></i>
      </div>
      <div class="xxy">
        <span>昵称</span>
        <span>樱桃小丸子</span>
      </div>
      <div class="xxy">
        <span>个性签名</span>
        <span>每天的心情都是好好哒!</span>
      </div>
      <div class="peposex">
        <span>性别</span>
        <router-link to="/prosonSex" class="sex">
          <span>{{ proSex }}</span>
          <i></i>
        </router-link>
      </div>
      <div class="prosonfoot-xinxi">
        <span>地址</span>
        <router-link to="/prosonList" class="pson-rig">
          <div class="dizhi-xinxi">
            <h2>王丽坤 &nbsp; 136****75496</h2>
            <p>北京市朝阳区小营路银座亚非大厦16楼</p>
          </div>
          <i></i>
        </router-link>
      </div>
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
        topTit: {
          tit: '个人资料',
          path: '/mine'
        },
        proSex: '女'
      }
    },
    methods: {},
    mounted() {
      var sex = this.$route.query.aa;
      switch (sex) {
        case '1':
          this.proSex = '男';
          break;
        case '3':
          this.proSex = '保密';
          break;
        default:
          this.proSex = '女';
          break;
      }
    }
  }
</script>

<style scoped>
  .proson {
    width: 100vw;
    height: 13.339rem;
    background-color: #f4f4f4;
  }

  .proson>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .headcolor {
    width: 100vw;
    height: 1.1rem;
    background-color: #fff;
  }

  .proson>.proson-xinxi {
    margin-top: 0.3rem;
    width: 100vw;
    background-color: #fff;
    height: 6.5rem;
    border-bottom: 0.013rem #c3c3c3 solid;
    border-top: 0.013rem #c3c3c3 solid;
  }

  .touxiang {
    width: calc(100% - 0.58rem);
    height: 1.56rem;
    margin: 0 auto;
    border-bottom: 0.013rem #c3c3c3 solid;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .touxiang>span {
    font-size: 0.3rem;
    color: #2e2e2e;
    margin-top: 0.56rem;
    margin-left: 0.05rem;
  }

  .touxiang>i {
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    margin-top: 0.25rem;
    border-radius: 48%;
    background: url(../../../static/imgs/12.jpg) 0 0/cover no-repeat;
  }

  .xxy {
    width: calc(100% - 0.58rem);
    height: 0.96rem;
    margin: 0 auto;
    border-bottom: 0.013rem #c3c3c3 solid;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .xxy>span:nth-child(1) {
    line-height: 0.96rem;
    font-size: 0.3rem;
    color: #63666b;
  }

  .xxy>span:nth-child(2) {
    line-height: 0.96rem;
    font-size: 0.286rem;
    color: #000;
  }

  .peposex {
    width: calc(100% - 0.58rem);
    height: 0.96rem;
    margin: 0 auto;
    border-bottom: 0.013rem #c3c3c3 solid;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .peposex>span {
    line-height: 0.96rem;
    font-size: 0.3rem;
    color: #63666b;
  }

  .peposex>.sex {
    width: 1.3rem;
    height: 0.96rem;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .sex>span {
    width: 0.86rem;
    line-height: 0.96rem;
    font-size: 0.28rem;
  }

  .sex>i {
    display: block;
    width: 0.18rem;
    height: 0.3rem;
    margin: 0.316rem 0.1rem 0 0;
    background: url(../../../static/imgs/geR.png) 0 0/cover no-repeat;
  }

  .prosonfoot-xinxi {
    width: calc(100% - 0.58rem);
    height: 1.85rem;
    margin: 0 auto;
    border-bottom: 0.013rem #c3c3c3 solid;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .prosonfoot-xinxi>span {
    font-size: 0.3rem;
    color: #63666B;
    line-height: 1.85rem;
  }

  .pson-rig {
    width: 4.3rem;
    height: 1.2rem;
    margin: 0.3rem 0;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .pson-rig>.dizhi-xinxi {
    width: 3.98rem;
    height: 1.2rem;
  }

  .pson-rig>i {
    display: block;
    width: 0.18rem;
    height: 0.3rem;
    margin: 0.45rem 0.1rem 0 0;
    background: url(../../../static/imgs/geR.png) 0 0/cover no-repeat;
  }

  .dizhi-xinxi>h2 {
    font-size: 0.26rem;
    color: #333;
    margin-bottom: 0.15rem;
    /* text-align: left; */
  }

  .dizhi-xinxi>p {
    font-size: 0.28rem;
    color: #63666B;
    line-height: 0.38rem;
    text-align: left;
  }
</style>
