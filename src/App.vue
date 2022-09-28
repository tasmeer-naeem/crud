<template>
  <div>
  <nav-bar/>
 <router-view/>
  </div>
</template>

<script>
//import HomePage from './components/HomePage.vue'
//import LoginPage from './components/LoginPage.vue'
import NavBar from './components/NavBar.vue'




export default {
  name: 'App',
  components: {
    NavBar,
  //  HomePage,
  //  LoginPage
   
  }
}
</script>

<style>

</style>
