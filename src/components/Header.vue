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
    position: fixed;
    z-index: 100;
    padding-bottom: 15px;
    width: 100vw;
    height: 95px;
    background-color: #464646;
  }

  @media (min-width: 100px) and (max-width: 300px) {
    .header {
      height: 70px;
    }
  }
  @media (min-width: 301px) and (max-width: 760px) {
    .header {
      height: 80px;
    }
  }

</style>
