<template>
  <div class="lynavbar">
    <a href="javascript:;" v-for="(list,index) in navList" class='navlist' :class="list.active ? active : '' "
       @click="addClass(list,index)"><span>{{list.label}}</span></a>
  </div>
</template>

<script>
  export default {
    name: 'lynavbar',
    props: {
      navList: {
        default: [
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
        ]
      }

    },
    data () {
      return {
        active: 'active'
      }
    },
    methods: {
      addClass (list, i) {
        this.navList.forEach(function (el) {
          el.active = false
        })
        list.active = true
        this.$emit('clickNav', list)
      }
    }
  }
</script>
<style>
  .navlist {
    display: inline-block;
    padding: 3px 10px;
    text-decoration: none;
    color: #666;
    border-bottom: 2px solid transparent;
  }

  .navlist:hover, .navlist.active {
    color: #008cee;
    border-bottom: 2px solid #008cee;
  }
</style>
