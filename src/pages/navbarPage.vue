<template>
  <div class="navbarPage">
    <h2>this is navbar page</h2>
    <nav-bar class="navbar" @clickNav="navClick"></nav-bar>
    <nav-bar class="navbar" :navList="navList1" @clickNav="navClick"></nav-bar>
    <nav-bar class="navbar" :navList="navList2" @clickNav="navClick">
      <i class="iconfont" slot="icon0">&#xe603;</i>
      <i class="iconfont" slot="icon1">&#xe601;</i>
      <i class="iconfont" slot="icon2">&#xe6e2;</i>
      <i class="iconfont" slot="icon3">&#xe602;</i>
    </nav-bar>
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
          }, {
            label: '联系',
            active: false
          }
        ],
        navList2: [
          {
            label: 'QQ',
            active: true
          }, {
            label: '微信',
            active: false
          }, {
            label: '新浪微博',
            active: false
          }, {
            label: '腾讯微博',
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
        console.log('你点击的导航为=>' + list.label)
      }
    }
  }
</script>
<style>
  @font-face {
    font-family: 'iconfont';  /* project id 396313 */
    src: url('//at.alicdn.com/t/font_396313_hspjhyuntkoqolxr.eot');
    src: url('//at.alicdn.com/t/font_396313_hspjhyuntkoqolxr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_396313_hspjhyuntkoqolxr.woff') format('woff'),
    url('//at.alicdn.com/t/font_396313_hspjhyuntkoqolxr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_396313_hspjhyuntkoqolxr.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 14px;
    font-style: normal;
    color: #666;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .navbarPage {
    margin-top: 10px;
  }

  .navbar {
    margin: 20px 0;
  }
</style>
