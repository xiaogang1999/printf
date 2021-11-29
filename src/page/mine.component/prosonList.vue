<template>
  <div class="proson-list">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div class="headcolor"></div>
    <div class="bjcolor"></div>
    <div class="pro-addres">
      <div class="bj">
        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
      </div>
      <ul class="del">
        <li v-for="p in list" :key="p.id">
          <div class="icon-del iconfont icon-shanchu" @click="onDel(p.id)" :key="p.id"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import goBack from '@/components/goback.vue';
  import {
    Toast
  } from 'vant';

  export default {
    components: {
      goBack
    },
    data() {
      return {
        topTit: {
          tit: '地址管理',
          path: '/proson'
        },
        chosenAddressId: '0',
        list: [{
            id: '0',
            name: '张晓晓',
            tel: '18296914806',
            address: '浙江省杭州市西湖区文三路138号东方通信大厦7楼501室',
            isDefault: true //默认地址
          },
          {
            id: '1',
            name: '王丽坤',
            tel: '13136296029',
            address: '浙江省杭州市拱墅区莫干山路50号',
            isDefault: false
          },
        ]
      }
    },
    methods: {
      onAdd() {
        var lisArr = this.list;
        var _id = Number(lisArr[lisArr.length - 1].id) + 1;
        Toast('请编写新增地址');
        this.$router.push({
          name: 'prosonEdit',
          params: {
            id: _id,
            name: '', //姓名
            tel: '', //电话
            address: '', //详细地址
            isDefault: false //是否为默认地址
          }
        });
      },
      onEdit(item, index) {
        var _item = item;
        Toast('编辑地址');
        this.$router.push({
          name: 'prosonEdit',
          params: _item
        });
      },
      onDel(val) {
        this.list.splice(val, 1);
        Toast('删除成功');
      }
    },
    mounted() {
      var _adres = this.$route.query;
      var arr = this.list;
      var aId = _adres.id;
      console.log(_adres);
      if (_adres.name != undefined) {
        if (Number(aId) >= arr.length) { //新增地址
          if (_adres.isDefault == 'true') {
            for (var i = 0; i < arr.length; i++) {
              arr[i].isDefault = false;
            }
          }
          arr.push(_adres); //对数组内容进行添加
        } else { //修改地址
          if (_adres.isDefault == 'true') {
            for (var j = 0; j < arr.length; j++) {
              arr[j].isDefault = false;
            }
          }
          arr.splice(Number(aId), 1, _adres); //对数组内容进行替换
        }
      }
    },
  }
</script>

<style scoped>
  .proson-list>.top-go {
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

  .bjcolor {
    width: 100vw;
    height: 0.3rem;
    background-color: #f9f9f9;
  }

  .pro-addres {
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
  }

  .bj {
    width: calc(100vw - 0.4rem);
  }

  .del {
    width: 0.4rem;
    padding-top: 0.48rem;
  }

  .del>li {
    width: 0.4rem;
    height: 0.96rem;
    margin-bottom: 0.72rem;
    position: relative;
  }

  .del>li>.icon-del {
    width: 0.48rem;
    height: 0.48rem;
    font-size: 0.48rem;
    color: #9a9a9a;
    position: absolute;
    top: 0.23rem;
    left: -0.3rem;
    z-index: 990;
  }

  .proson-list>.pro-addres>.bj .van-address-item__address {
    width: 4.73rem;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文本超出显示省略号 */
    white-space: nowrap;
    /* 不换行 */
  }
</style>
