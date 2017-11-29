<template>
  <div id="app">
    <HeaderNav />
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import HeaderNav from '@/components/header';

  export default {
    components: {
      HeaderNav
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* 使页面上的字体抗锯齿，更加清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  /* color: #42b983; */
  cursor: pointer;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>
