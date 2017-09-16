<template>
  <div class="lynavbar">
    <a href="javascript:;" v-for="(list,index) in navList" class='navlist' :class="list.active ? active : '' " @click="addClass(list,index)" :key="index">
      <span>{{list.label}} </span>
      <slot :name='"icon"+ index'></slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'lynavbar',
    props: {
      navList: {
        // 默认值这里需要一个工厂函数
        default: function () {
          return [
            {
              label: '默认1',
              active: true
            }, {
              label: '默认2',
              active: false
            }, {
              label: '默认3',
              active: false
            }, {
              label: '默认4',
              active: false
            }
          ]
        }
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
    margin: 0 8px;
    text-decoration: none;
    color: #666;
    border-bottom: 2px solid transparent;
  }

  .navlist:hover, .navlist.active {
    color: #008cee;
    border-bottom: 2px solid #008cee;
  }

  .navlist:hover i, .navlist.active i {
    color: #008cee;
  }
</style>
