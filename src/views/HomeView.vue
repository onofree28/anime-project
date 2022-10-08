<template>
  <main>
    <Banner/>
    <div class="home">
      <h1 class="titulo" id="titulo">Mais Populares</h1>
      <a href="">Ver todos</a>
    </div>
    <div>
      <Animes/>
    </div>
  </main>
</template>

<script>
import Animes from '@/components/Animes.vue';
import Banner from '@/components/Banner.vue';
export default {
  name: 'HomeView',
  components: {
    Animes,
    Banner
}
}
</script>
<style>
  .home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    color: aliceblue;
    background-color: #050505;
  }

  .home a {
    font-size: 16px;
    text-decoration: none;
    color: #616161;
    font-weight: bold;
  }

  .home a:hover {
    color: aliceblue;
    transition: 0.5s;
  }

</style>