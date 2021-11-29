<template>
  <div class="my-feedback">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="fedback">
      <textarea rows="5" id="yijian-ipt" placeholder="请尽可能详细描述问题原因、现象等信息，我们会尽快给您解决。需大于15个汉字。"></textarea>
      <div class="yijian-btn-wancheng">完成</div>
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
          tit: '意见反馈'
        }
      }
    }
  }
</script>

<style scoped>
  .my-feedback>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .fedback {
    margin-top: 1.15rem;
    border-top: 0.01rem solid #e6e6e6;
    width: 100vw;
    height: 12.165rem;
    background-color: #f5f5f5;
  }

  .fedback>#yijian-ipt {
    width: calc(100% - 0.95rem);
    height: 2.24rem;
    margin-top: 0.4rem;
    padding: 0.28rem 0.472rem;
    background-color: #fff;
    font-size: 0.3rem;
    line-height: 0.5rem;
    text-align: left;
    resize: none;
  }
  .fedback>.yijian-btn-wancheng{
    width: 6.7rem;
    height: 0.85rem;
    margin: 3.15rem auto 0;
    border-radius: 0.425rem;
    line-height: 0.86rem;
    font-size: 0.32rem;
    background-color: #df1e3e;
    color: #fff;
  }
</style>
