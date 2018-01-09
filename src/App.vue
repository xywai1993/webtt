<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/log">日志</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  a{
    color: #999;
  }
.router-link-exact-active{
  color:red;
}
</style>
