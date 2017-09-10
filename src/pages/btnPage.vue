<template>
  <div class="btnPage">
    <h2>this is button page</h2>
    <ly-btn msg="updata" @msgalert="doSth"></ly-btn>
    <ly-btn msg="确定" @msgalert="doSth"></ly-btn>
    <ly-btn msg="取消" @msgalert="doSth"></ly-btn>
    <ly-btn msg="下载" @msgalert="doSth">
       <i class="iconfont" slot='icon'>&#xe6a6;</i>
    </ly-btn>
  </div>
</template>

<script>
  import lyBtn from '../components/lyBtn.vue'

  export default {
    name: 'btnPage',
    components: {
      'ly-btn': lyBtn
    },
    methods: {
      doSth (msg) {
        alert('你点击了子组件为' + msg)
      }
    }
  }
</script>
<style>
  @font-face {
    font-family: 'iconfont';  /* project id 388510 */
    src: url('//at.alicdn.com/t/font_388510_0oox0olzdgrv0a4i.eot');
    src: url('//at.alicdn.com/t/font_388510_0oox0olzdgrv0a4i.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_388510_0oox0olzdgrv0a4i.woff') format('woff'),
    url('//at.alicdn.com/t/font_388510_0oox0olzdgrv0a4i.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_388510_0oox0olzdgrv0a4i.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 14px;
    font-style: normal;
    color:#fff;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .btnPage {
    margin-top: 10px;
  }

</style>
