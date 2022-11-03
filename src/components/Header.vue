<template>
  <div class="header">
    <Navbar :logo="logo_src" :alt="app_name"/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    name: "Header",
    components: {
      Navbar,
    },
    data() {
      return {
        logo_src: "/img/logo.gif",
        app_name: "Anime Project"
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header {
    padding-bottom: 15px;
    width: auto;
    height: 12vh;
    background-color: #464646;
  }

</style>
