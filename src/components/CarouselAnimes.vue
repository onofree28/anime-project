<template>
    <carousel class="container-animes"  :items-to-show="5" :wrap-around="true" :breakpoints="breakpoints">
        <slide v-for="anime in animes" :key="anime.id">
          <div class="carousel__item anime">
            <img :src="anime.img" :alt="anime.alt">
                <p>{{ anime.nome }}</p>
                <p class="serie">{{ anime.tipo }}</p>
          </div>
        </slide>
     <template #addons>
        <Navigation />
     </template>
    </carousel>
</template>

<script>
    import { defineComponent } from "vue";
    import { Carousel, Navigation, Slide } from "vue3-carousel";

    import "vue3-carousel/dist/carousel.css";
    export default defineComponent({
        name: 'CarouselAnimes',
        components: {
            Carousel,
            Slide,
            Navigation,
        },
        data() {
            return {
                animes: [
                    {
                        id:1,
                        img: '/img/demon-slayer.jpg',
                        alt: 'Demon Slayer',
                        nome: 'Demon Slayer',
                        tipo: 'Série'
                    },
                    {
                        id:2,
                        img: '/img/dragonball-super.jpg',
                        alt: 'Dragon Ball Super',
                        nome: 'Dragon Ball Super',
                        tipo: 'Série'
                    },
                    {
                        id:3,
                        img: '/img/one-piece.jpg',
                        alt: 'One Piece',
                        nome: 'One Piece',
                        tipo: 'Série'
                    },
                    {
                        id:4,
                        img: '/img/my-hero-academia.jpg',
                        alt: 'My Hero Academia',
                        nome: 'My Hero Academia',
                        tipo: 'Série'
                    },
                    {
                        id:5,
                        img: '/img/ao-ashi.jpg',
                        alt: 'AoAshi',
                        nome: 'AoAshi',
                        tipo: 'Série'
                    },
                    {
                        id:6,
                        img: '/img/bleach.jpg',
                        alt: 'Bleach',
                        nome: 'Bleach',
                        tipo: 'Série'
                    },
                    {
                        id:7,
                        img: '/img/blue-lock.jpg',
                        alt: 'Blue Lock',
                        nome: 'Blue Lock',
                        tipo: 'Série'
                    },
                    {
                        id:8,
                        img: '/img/spy-family.jpg',
                        alt: 'Spy X Family',
                        nome: 'Spy X Family',
                        tipo: 'Série'
                    },
                ],
                breakpoints: {
                    // 700px and up
                    700: {
                        itemsToShow: 3,
                        snapAlign: 'center',
                    },
                    // 1024 and up
                    1024: {
                        itemsToShow: 5,
                        snapAlign: 'start',
                    },
                }
            }
        },
    })
</script>

<style>
    .container-animes {
        color: aliceblue;
        background-color: #050505;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 2rem 0;
    }
    

    .anime,
    .carousel__item {
        padding: 2rem;
    }

    .serie {
        font-size: 16px;
        color: #ff7a00;
    }

</style>