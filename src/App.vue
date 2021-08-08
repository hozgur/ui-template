<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: { Header, Footer}, 
}
</script>

<style>

#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
}

html {
  font-size: 0.8rem;
}

</style>
