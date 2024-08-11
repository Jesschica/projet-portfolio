<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';



export default {
  name:'App',
  components: {
    Header,
    Footer,
  }
};

</script>


<template>

  <div id="app">
    <Header />
    <RouterView />
    <Footer />
  </div>

</template>

<style scoped>

</style>