<template>
  <div class="lyList">
    <span class="listSpan fl">{{listText}}</span>
    <component :is="currentView" :msg='listBtn' @btnClickEvent="doSth" class="fr">
      <i class="iconfont" slot="icon">{{this.listIcon}}</i>
    </component>
    <!--<lyBtn class="listBtn fr" :msg="listBtn"></lyBtn>-->
    <!--<lyArrow class="listBtn fr"></lyArrow>-->
  </div>
</template>
<script>
  import lyBtn from './lyBtn'
  import lyArrow from './lyArrow.vue'

  export default {
    name: 'lyList',
    props: {
      listText: {
        default: '默认的文案'
      },
      listBtn: {
        default: '下载'
      },
      currentView: {
        default: 'lyBtn'
      },
      listIcon: {
        default: ''
      }
    },
    data () {
      return {}
    },
    components: {
      lyBtn,
      lyArrow
    },
    methods: {
      doSth (n, m) {
        console.log('点击了列表为=>' + this.listText + '---按钮为=>' + n + m)
      }
    }
  }
</script>
<style>
  .lyList {
    width: 350px;
    margin: 0 auto;
    height: 36px;
    line-height: 36px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }


</style>
