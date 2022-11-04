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
    <div class="ads">
      <a href="//www.crunchyroll.com/pt-br/welcome"><img src="/img/assista-animes-sem-ads.png" alt="banner-crunchy"></a>
      
    </div>
    <div>
      <Noticias/>
    </div>
  </main>
</template>

<script>
import Banner from '../components/Banner.vue'
import CarouselAnimes from '@/components/CarouselAnimes.vue';
import Noticias from '@/components/Noticias.vue';
export default {
  name: 'HomeView',
  components: {
    CarouselAnimes,
    Noticias,
    Banner
}
}
</script>
<style>
  .home {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
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
    width: 70vw;
    background-color: #ff7a00;
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

  .ads {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  @media (min-width: 200px) and (max-width: 760px) {
   .home p {
        font-size: 22px;
    }
    .home, .barra {
      width: 90vw;
    }
    .ads {
      display: none;
    }
}

@media (min-width: 761px) and (max-width: 1100px) {
    .home p {
        font-size: 28px;
    }
    .home, .barra {
      width: 90vw;
    }
}

</style>