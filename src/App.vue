<template>
  <div id="app">
    <h2>
      <router-link to="./">Lyle组件库</router-link>
    </h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import url(./assets/base.css);

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h2 {
    font-size: 26px;
    margin: 20px 0;
  }

  a {
    text-decoration: none;
    color: #008cee;
  }
</style>
