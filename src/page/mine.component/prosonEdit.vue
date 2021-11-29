<template>
  <div class="proson-edit">
    <go-back class="top-go" :goMsg="topTit"></go-back>
    <div id="proson-edit-ads">
      <van-address-edit :area-list="areaList" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
        tel-maxlength="11" show-set-default :address-info="addresInfo" />
    </div>
  </div>
</template>

<script>
  import goBack from '@/components/goback.vue';
  import {
    areaList
  } from '@vant/area-data';
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
          tit: '编辑地址',
          path: '/prosonList'
        },
        areaList,
        addresInfo: {
          id: '',
          name: '',
          tel: '', //电话
          addressDetail: '', //详细地址
          isDefault: false //默认地址
        },
        infoAds: {
          id: '',
          name: '',
          tel: '', //电话
          address: '', //详细地址
          isDefault: false //默认地址
        },
      }
    },
    methods: {
      onSave(res) {
        console.log(res);
        var _res = this.infoAds;
        _res.id = res.id;
        _res.name = res.name;
        _res.tel = res.tel;
        _res.address = res.addressDetail;
        _res.isDefault = res.isDefault;
        this.$router.push({
          path: '/prosonList',
          query: _res
        });
        Toast('保存成功');
      }
    },
    mounted() {
      console.log(this.$route.params)
      var _adss = this.$route.params;
      if (_adss.name != undefined) {
        this.addresInfo.id = Number(_adss.id);
        this.addresInfo.name = _adss.name;
        this.addresInfo.tel = _adss.tel;
        this.addresInfo.addressDetail = _adss.address;
        this.addresInfo.isDefault = _adss.isDefault;
      }
    },
  }
</script>

<style scoped>
  .proson-edit>.top-go {
    width: calc(100vw - 0.6rem);
    height: 0.6rem;
    position: fixed;
    top: 0.36rem;
    left: 0.3rem;
    z-index: 999;
  }

  #proson-edit-ads {
    margin-top: 1.16rem;
    border-top: 0.01rem solid #ccc;
  }
</style>
