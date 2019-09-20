<template>
  <div id="app">
   
    <!-- <h1> Login to Truckstop Mock </h1>
    <Login/>
     <HelloWorld msg="POC for Truckstop"/> -->
     <div id="app">
    <nav>
        <router-link to='/'>HelloWorld</router-link>
        <router-link to='/LoadSearch'>LoadSearch</router-link>
        <router-link to='/Login'>Login</router-link>
    </nav>
    <router-view />
  </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login from './components/Login.vue'
// import LoadSearch from "./components/LoadSearch.vue"
export default {
  name: 'app',
  // components: {
  //   HelloWorld,
  //   Login,
  //   LoadSearch
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
