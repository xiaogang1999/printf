<template>
  <div class="prosonSex">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="jianxideyanse"></div>
    <div class="xunzheSex">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="男" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" shape="square" checked-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell title="女" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" shape="square" checked-color="#ee0a24" />
            </template>
          </van-cell>
        </van-cell-group>
        <van-cell title="保密" clickable @click="radio = '3'">
          <template #right-icon>
            <van-radio name="3" shape="square" checked-color="#ee0a24" />
          </template>
        </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <button type="button" id="sex-btn" @click="onSex()">保存</button>
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
          tit: '性别',
          path: '/proson'
        },
        radio: '2'
      }
    },
    methods: {
      onSex() {
        this.$router.push({
          path: '/proson',
          query: {
            aa: this.radio
          }
        })
      }
    }
  }
</script>

<style scoped>
  .prosonSex>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .jianxideyanse {
    width: 100vw;
    height: 0.28rem;
    margin-top: 1.1rem;
    background-color: #f0f0f0;
  }

  .xunzheSex {
    width: calc(100vw - 0.5rem);
    margin: 0 auto;
    border-bottom: 0.012rem solid #e8e8e8;
  }

  .prosonSex>.xunzheSex .van-cell__title {
    font-size: 0.3rem;
    text-align: left;
  }

  #sex-btn {
    width: 6.7rem;
    height: 0.85rem;
    line-height: 0.85rem;
    background-color: #DF1E3E;
    color: #fff;
    font-size: 0.32rem;
    border-radius: 0.42rem;
    margin-top: 0.5rem;
  }
</style>
