<template>
  <div class="list-top-head-goback-fanhui">
    <div class="top1 iconfont icon-zuojiantou-fanhui" @click="goback()"></div>
    <div class="top2">{{ goMsg.tit }}</div>
    <div class="top3"></div>
  </div>
</template>

<script>
  export default {
    props: ['goMsg'],
    data() {
      return {}
    },
    methods: {
      goback() {
        if (this.goMsg.path == undefined) {
          this.$router.go(-1);
        } else {
          this.$router.push({
            path: this.goMsg.path
          });
        }
      }
    }
  }
</script>

<style scoped>
  .list-top-head-goback-fanhui {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .top1 {
    width: 0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .top2 {
    width: calc(100% - 2.6rem);
    height: 100%;
    margin: 0 0.7rem;
    font-size: 0.34rem;
    line-height: 0.6rem;
    text-align: center;
    color: #000;
  }

  .top3 {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: url(../../static/imgs/top3.png) 0 0/cover no-repeat;
  }
</style>
