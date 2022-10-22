<template>
  <main>
    <Banner/>
    <div class="home">
      <p class="titulo" id="titulo">Animes</p>
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

  .home p {
    font-size: 28px;
  }

  .home a {
    font-size: 14px;
    text-decoration: none;
    color: #616161;
    font-weight: bold;
  }

  .home a:hover {
    color: aliceblue;
    transition: 0.5s;
  }

  main ::selection {
      background-color: #2b2b2b;
      color: #ff7a00;
  }

  .carousel__prev,
  .carousel__next {
      color: #ff7a00;
      background-color: #616161;
      border-radius: 50px;
  }
  .carousel__prev:hover,
  .carousel__next:hover {
      color: #616161;
      background-color: #61616159;
      border-radius: 50px;
      transition: 0.5s;
  }

  @media (min-width: 300px) and (max-width: 500px) {
   .home p {
        font-size: 22px;
    }
}

@media (min-width: 501px) and (max-width: 1000px) {
    .home p {
        font-size: 28px;
    }
}

</style>