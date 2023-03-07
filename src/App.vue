<template>
  <div id="app">
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<script>
import Navbar from './shared/Navbar.vue';

 


 


export default {
  name: 'App',
  components: {
    Navbar
},
  


}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  box-sizing: border-box;
}
.container { 
  width: 100vw;
  height: 100%;
}

</style>
