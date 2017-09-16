<template>
  <div class="Lyle">
    <ul>
      <li>
        <router-link to="./btn"><span>btn</span></router-link>
        <!-- <a href="#/btn"><span>btn</span></a>-->
      </li>
      <li>
        <router-link to="./list"><span>list</span></router-link>
      </li>
      <li>
        <router-link to="./navbar"><span>navbar</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Lyle',
    data () {
      return {}
    }
  }
</script>
<style>


  .Lyle ul {
    width: 65%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  .Lyle ul li {
    width: 32%;
    height: 280px;
    line-height: 280px;
    text-align: center;
    font-size: 24px;
    background: #008cee;
    color: #fff;
    cursor: pointer;
  }

  .Lyle ul li a {
    color: #fff;
    text-decoration: none;
  }
</style>
