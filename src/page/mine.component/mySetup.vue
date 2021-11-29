<template>
  <div class="my-setup">
    <go-back class="top-go" :goMsg="topTit"></go-back>
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
          tit: '设置'
        }
      }
    }
  }
</script>

<style scoped>
  .my-setup>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }
</style>
