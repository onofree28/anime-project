<template>
    <carousel :autoplay="5000" :wrap-around="true">
        <slide id="main-banner" v-for="banner in banners" :key="banner.id">
            <div class="carousel__item">
                <router-link :to="banner.link">
                    <img :src="banner.img" :alt="banner.alt">
                </router-link>
            </div>
        </slide>
    
        <template #addons>
          <pagination />
        </template>
      </carousel>
</template>

<script>
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
    name: 'Banner',
    components: {
        Carousel,
        Slide,
        Pagination
    },
    data() {
        return {
            banners: [
                {
                    id:1,
                    img: '/img/blue-lock-banner.webp',
                    alt: 'blue-lock-banner',
                    link: '/blue-lock'
                },
                {
                    id:2,
                    img: '/img/dragonballz-banner.webp',
                    alt: 'dragonballz-banner',
                    link: '/dragonball-super'
                },
                {
                    id:3,
                    img: '/img/my-hero-banner.webp',
                    alt: 'my-hero-banner',
                    link: '/my-hero-academia'
                },
                {
                    id:4,
                    img: '/img/spy-family-banner.webp',
                    alt: 'spy-family-banner',
                    link: '/spy-family'
                },
                {
                    id: 5,
                    img: '/img/banner.gif',
                    alt: 'banner',
                    link: '/'
                }
            ],
        }
    },
})
</script>

<style lang="scss" scoped>
    #main-banner {
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #2b2b2b;
        padding-top: 118px;
    }

    @media (min-width: 100px) and (max-width: 300px) {
            #main-banner {
                padding-top: 95px;
            }
            #main-banner img {
                width: 250px;
                height: 150px;
            }
    }
    @media (min-width: 301px) and (max-width: 760px) {
            #main-banner {
                padding-top: 105px;
            }
            #main-banner img {
                width: 350px;
                height: 210px;
            }
    }

    @media (min-width: 761px) and (max-width: 1000px) {
            #main-banner img {
                width: 460px;
                height: 282px;
            }
    }

</style>