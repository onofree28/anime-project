<template>
    <div class="vue-carousel">
        <carousel :items-to-show="5" :breakpoints="breakpoints" :wrap-around="true">
            <slide v-for="anime in animes" :key="anime.id">
                <div class="container-animes">
                    <div class="anime">
                        <router-link :to="anime.link">
                            <img :src="anime.img" :alt="anime.alt">
                        </router-link>
                        <router-link style="text-decoration: none;" :to="anime.link">
                            <p class="nome">{{ anime.nome }}</p>
                        </router-link>
                        <p class="serie">{{ anime.tipo }}</p>
                    </div>
                </div> 
            </slide>
         <template #addons>
            <Navigation />
         </template>
        </carousel>
    </div>
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
                        tipo: 'Série',
                        link: '/demon-slayer'
                    },
                    {
                        id:2,
                        img: '/img/dragonball-super.jpg',
                        alt: 'Dragon Ball Super',
                        nome: 'Dragon Ball Super',
                        tipo: 'Série',
                        link: '/dragonball-super'
                    },
                    {
                        id:3,
                        img: '/img/one-piece.jpg',
                        alt: 'One Piece',
                        nome: 'One Piece',
                        tipo: 'Série',
                        link: '/one-piece'
                    },
                    {
                        id:4,
                        img: '/img/my-hero-academia.jpg',
                        alt: 'My Hero Academia',
                        nome: 'My Hero Academia',
                        tipo: 'Série',
                        link: '/my-hero-academia'
                    },
                    {
                        id:5,
                        img: '/img/ao-ashi.jpg',
                        alt: 'AoAshi',
                        nome: 'AoAshi',
                        tipo: 'Série',
                        link: '/ao-ashi'
                    },
                    {
                        id:6,
                        img: '/img/bleach.jpg',
                        alt: 'Bleach',
                        nome: 'Bleach',
                        tipo: 'Série',
                        link: '/bleach'
                    },
                    {
                        id:7,
                        img: '/img/blue-lock.jpg',
                        alt: 'Blue Lock',
                        nome: 'Blue Lock',
                        tipo: 'Série',
                        link: '/blue-lock'
                    },
                    {
                        id:8,
                        img: '/img/spy-family.jpg',
                        alt: 'Spy X Family',
                        nome: 'Spy X Family',
                        tipo: 'Série',
                        link: '/spy-family'
                    },
                ],
                breakpoints: {
                    // 700px and up
                    300: {
                        itemsToShow: 2.5,
                        snapAlign: 'center',
                    },
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

<style scoped>
    .vue-carousel {
        padding: 0 350px 0 350px;
    }

    .container-animes {
        color: aliceblue;
        background-color: #050505;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: left;
    }

    .anime {
        padding: 2rem;
    }

    .nome {
        color: aliceblue;
        font-size: 14px;
    }
    
    .serie {
        font-size: 14px;
        color: #ff7a00;
    }


    @media (min-width: 300px) and (max-width: 500px) {
        .vue-carousel {
            padding: 0;
        }
    }

    @media (min-width: 501px) and (max-width: 1200px) {
        .vue-carousel {
            padding: 0;
        }
    }

    @media (min-width: 1201px) and (max-width: 1650px) {
        .vue-carousel {
            padding: 0 50px;
        }
    }

</style>