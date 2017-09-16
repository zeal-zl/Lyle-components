<template>
  <div class="listPage">
    <h2>this is list page</h2>
    <lyList :currentView="list.listBtn" v-for="(list,index) in lists" :key="index"></lyList>
  </div>
</template>

<script>
  import lyList from '../components/lyList.vue'

  export default {
    name: 'listPage',

    components: {
      lyList
    },
    data () {
      return {
        lists: [
          {
            msg: '这是一个默认的文案',
            listBtn: 'lyBtn'
          },
          {
            msg: '这是一下载的文案',
            listBtn: 'lyBtn'
          },
          {
            msg: '这是一个箭头的文案',
            listBtn: 'lyArrow'
          }
        ]
      }
    }
  }
</script>
<style>


  .listPage {
    margin-top: 10px;
  }

</style>
