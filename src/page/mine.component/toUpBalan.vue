<template>
  <div class="to-up-balan">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="to-up">
      <div class="to-balan">
        <span>充值金额</span>
        <div class="upjiane">¥
          <input id="up-ipt" placeholder="请输入金额" value="50.00" v-model="val" />
        </div>
      </div>
      <p>选择支付方式</p>
      <div class="toUp">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="支付宝" clickable @click="radio = '1'">
              <template #right-icon>
                <van-radio name="1" shape="square" checked-color="#df1e3e" icon-size="22px" />
              </template>
              <template #icon>
                <img class="img-icon" src="../../../static/imgs/qd2.png" />
              </template>
            </van-cell>
            <van-cell title="微信支付" clickable @click="radio = '2'">
              <template #right-icon>
                <van-radio name="2" shape="square" checked-color="#df1e3e" icon-size="22px" />
              </template>
              <template #icon>
                <img class="img-icon" src="../../../static/imgs/qd3.png" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="toup-btn" @click="toupOK()">确认充值</div>
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
          tit: '充值',
          path: '/balance'
        },
        radio: '1',
        val: '50.00'
      }
    },
    methods: {
      toupOK() {
        this.$router.push({
          name: 'upOk',
          params: {
            money: this.val
          }
        })
      }
    }
  }
</script>

<style scoped>
  .to-up-balan>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .to-up {
    margin-top: 1.15rem;
    border-top: 0.01rem solid #e6e6e6;
    width: 100vw;
    height: 12.17rem;
    background-color: #f5f5f5;
  }

  .to-balan {
    width: 100vw;
    height: 1rem;
    margin: 0.4rem auto 0.58rem;
    background-color: #fff;
    border-top: 0.01rem solid #ebebeb;
    border-bottom: 0.01rem solid #ebebeb;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  .to-balan>span {
    width: 1.35rem;
    line-height: 1rem;
    margin-left: 0.25rem;
    font-size: 0.28rem;
  }

  .to-balan>.upjiane {
    width: 1.68rem;
    line-height: 1rem;
    margin-right: 0.05rem;
    font-size: 0.28rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .upjiane>input {
    width: 1.45rem;
    line-height: 1rem;
    text-indent: 0.06rem;
    text-align: left;
  }

  .to-up>p {
    width: calc(100vw - 0.6rem);
    margin: 0.56rem auto 0.35rem;
    text-align: left;
    line-height: 0.3rem;
    font-size: 0.28rem;
  }

  .to-up-balan>.to-up>.toUp .img-icon {
    width: 0.65rem;
    height: 0.65rem;
  }

  .to-up>.toUp {
    border-top: 0.01rem solid #EBEBEB;
    border-bottom: 0.01rem solid #EBEBEB;
    margin-bottom: 1.67rem;
  }

  .to-up>.toup-btn {
    width: 6.7rem;
    line-height: 0.82rem;
    margin: 0 auto;
    background-color: #df1e3e;
    font-size: 0.32rem;
    color: #fff;
    border-radius: 0.41rem;
  }
</style>
