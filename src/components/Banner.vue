<template>
    <carousel :autoplay="5000" :wrap-around="true">
        <slide id="main-banner" v-for="banner in banners" :key="banner.id">
            <div class="carousel__item">
                <img :src="banner.img" :alt="banner.alt">
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
                    alt: 'blue-lock-banner'
                },
                {
                    id:2,
                    img: '/img/dragonballz-banner.webp',
                    alt: 'dragonballz-banner'
                },
                {
                    id:3,
                    img: '/img/my-hero-banner.webp',
                    alt: 'my-hero-banner'
                },
                {
                    id:4,
                    img: '/img/spy-family-banner.webp',
                    alt: 'spy-family-banner'
                },
                {
                    id: 5,
                    img: '/img/banner.gif',
                    alt: 'banner'
                }
            ],
        }
    },
})
</script>

<style lang="scss" >
    #main-banner {
        background: cover;
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #2b2b2b;
    }

    .carousel__item {
        width: 100%;
    }

    .carousel__pagination-button {
        color: #e62a2a;
    }
    .carousel__pagination-button--active {
        color: #e62ab7;
    }

    @media (min-width: 300px) and (max-width: 500px) {
        .carousel__item img {
            width: 300px;
            height: 169px;
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        .carousel__item img {
            width: 500px;
            height: 282px;
        }
    }

</style>