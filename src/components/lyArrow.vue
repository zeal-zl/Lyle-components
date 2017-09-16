<template>
  <div class="lyArrow">
    <i class="iconfont" @click="arrowEvent">&#xe605;</i>
  </div>
</template>
<script>
  export default {
    name: 'lyArrow',
    props: {},
    data () {
      return {}
    },
    methods: {
      arrowEvent () {
        console.log(name)
        console.log('点击了Arrow')
        this.$emit('btnClickEvent', this.name)
      }
    }
  }
</script>
<style>
  .lyArrow i {
    color: #008cee;
    font-size: 14px;
  }
</style>
