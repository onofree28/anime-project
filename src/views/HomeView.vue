<template>
  <main>
    <Banner/>
    <div class="container-home">
      <div class="home">
        <p class="titulo" id="titulo">Animes</p>
        <a href="">Ver todos</a>
      </div>
      <div class="barra"></div>
    </div>
    <div>
      <CarouselAnimes/>
    </div>
    <div>
      <Noticias/>
    </div>
  </main>
</template>

<script>
import CarouselAnimes from '@/components/CarouselAnimes.vue';
import Banner from '@/components/Banner.vue';
import Noticias from '@/components/Noticias.vue';
export default {
  name: 'HomeView',
  components: {
    CarouselAnimes,
    Banner,
    Noticias
}
}
</script>
<style>
  .home {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
    padding-top: 20px 10px 20px 10px;
    color: aliceblue;
    background-color: #050505;
  }

  .container-home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .barra {
    height: 0.5vh;
    width: 1100px;
    background-color: #ff7a00;
  }

  .home p {
    font-size: 28px;
    margin-left: 0;
  }

  .home a {
    font-size: 14px;
    text-decoration: none;
    color: #616161;
    font-weight: bold;
    margin-right: 0;
  }

  .home a:hover {
    color: aliceblue;
    transition: 0.5s;
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

  @media (min-width: 200px) and (max-width: 760px) {
   .home p {
        font-size: 22px;
    }

    .home, .barra {
      width: 340px;
    }
}

@media (min-width: 761px) and (max-width: 1100px) {
    .home p {
        font-size: 28px;
    }
    .home, .barra {
      width: 800px;
    }
}

</style>