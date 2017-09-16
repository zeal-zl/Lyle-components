<template>
  <div class="btnPage">
    <h2>this is button page</h2>
    <lyBtn msg="upData" @msgAlert="doSth"></lyBtn>
    <lyBtn msg="确定" @msgAlert="doSth"></lyBtn>
    <lyBtn msg="取消" @msgAlert="doSth"></lyBtn>
    <lyBtn msg="下载" @msgAlert="doSth">
      <i class="iconFont" slot='icon'>&#xe6a6;</i>
    </lyBtn>
  </div>
</template>

<script>
  import lyBtn from '../components/lyBtn.vue'

  export default {
    name: 'btnPage',
    components: {
      lyBtn
    },
    methods: {
      doSth (msg) {
        console.log('你点击的子组件为=>' + msg)
      }
    }
  }
</script>
<style>


  .btnPage {
    margin-top: 10px;
  }

</style>
