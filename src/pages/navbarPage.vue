<template>
  <div class="navbarPage">
    <h2>this is navbar page</h2>
    <nav-bar @clickNav="navClick"></nav-bar>
    <nav-bar :navList="navList1" @clickNav="navClick"></nav-bar>
    <nav-bar :navList="navList2" @clickNav="navClick"></nav-bar>
  </div>
</template>

<script>
  import navBar from '../components/lynavbar.vue'

  export default {
    name: 'navbarPage',
    data () {
      return {
        navList1: [
          {
            label: '首页',
            active: true
          }, {
            label: '列表',
            active: false
          }, {
            label: '关于',
            active: false
          }, {
            label: '招聘',
            active: false
          }
        ],
        navList2: [
          {
            label: '首页2',
            active: true
          }, {
            label: '列表2',
            active: false
          }, {
            label: '关于2',
            active: false
          }, {
            label: '招聘2',
            active: false
          }
        ]
      }
    },
    components: {
      'nav-bar': navBar
    },
    methods: {
      navClick (list) {
        console.log(list)
        console.log('你点击了导航为' + list.label)
      }
    }
  }
</script>
<style>
  .navbarPage {
    margin-top: 10px;
  }
</style>
