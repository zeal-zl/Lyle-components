<template>
  <button class="btn" @click="alertMsg">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>
<script>
  export default {
    name: 'lyBtn',
    props: {
      msg: {
        defaultName: '下载'
      }
    },
    data () {
      return {}
    },
    methods: {
      alertMsg () {
        this.$emit('msgAlert', this.msg)
        this.$emit('btnClickEvent', name, this.msg)
      }
    }
  }
</script>
<style>

  .btn {
    width: 100px;
    height: 36px;
    line-height: 36px;
    background: #008cee;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
