<template>
  <main>
    <Banner/>
    <div class="home">
      <h1 class="titulo" id="titulo">Mais Populares</h1>
      <a href="">Ver todos</a>
    </div>
    <div>
      <CarouselAnimes/>
    </div>
  </main>
</template>

<script>
import CarouselAnimes from '@/components/CarouselAnimes.vue';
import Banner from '@/components/Banner.vue';
export default {
  name: 'HomeView',
  components: {
    CarouselAnimes,
    Banner
}
}
</script>
<style>
  .home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    color: aliceblue;
    background-color: #050505;
    border-bottom: solid 5px #ff7a00;
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