<template>
  <div class="my-service">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div id="bu-lou-dong"></div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
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
          tit: '联系客服'
        }
      }
    }
  }
</script>

<style scoped>
  .my-service>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  #bu-lou-dong {
    width: 100vw;
    height: 1.14rem;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
  }
</style>
