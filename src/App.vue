<template>
  <div>
    <Header/>
  </div>
  <router-view/>
  <Footer/>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
  export default {
    components: {
    Header,
    Footer
},
  }
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
#app {
  background-color: #050505;
  font-family: 'Poppins', sans-serif;
}

</style>
