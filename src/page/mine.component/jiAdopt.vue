<template>
  <div class="my-adopt">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="adopt-msg">
      <p>
        想吃你自己的鸡下的蛋吗？领养几只乡里饽饽鸡吧!无需您自己真实喂养，我们提供问专业的喂养技术，和专业的食材，来饲养乡里饽饽鸡，我们会把您领养的乡里饽饽鸡照料好，待每半月把您领养的鸡所下的乡里饽饽蛋邮寄给您。让您吃到您自己专有的鸡蛋。
      </p>
      <h6>领养说明</h6>
      <div class="lj-lingyang">立即领养</div>
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
          tit: '领养乡里饽饽鸡'
        }
      }
    }
  }
</script>

<style scoped>
  .my-adopt>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  .my-adopt>.adopt-msg {
    width: 100vw;
    margin-top: 1.15rem;
    border-top: 0.01rem solid #e1e1e1;
  }

  .adopt-msg>p {
    width: 6.5rem;
    height: 2.7rem;
    margin: 0.68rem auto 0.72rem;
    font-size: 0.28rem;
    font-weight: normal;
    line-height: 0.5rem;
    text-align: left;
    color: #878787;
  }

  .my-adopt>.adopt-msg>h6 {
    width: 1.15rem;
    height: 0.45rem;
    margin-left: 0.61rem;
    line-height: 0.45rem;
    border-radius: 0.1rem;
    background-color: #df1e3e;
    font-weight: normal;
    font-size: 0.24rem;
    color: #fff;
  }

  .adopt-msg>.lj-lingyang {
    width: 6.7rem;
    height: 0.85rem;
    border-radius: 0.42rem;
    margin: 6rem auto 0;
    line-height: 0.86rem;
    font-size: 0.32rem;
    background-color: #9da4a7;
    color: #fff;
  }
</style>
