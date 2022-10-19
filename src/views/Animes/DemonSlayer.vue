<template>
    <div>
        <div class="banner">
            <img src="/banner-pagina/demon-slayer-banner-pagina.jpg" alt="demon-slayer-banner">
        </div>
        <div class="info">
            <h1>Demon Slayer: Kimetsu no Yaiba</h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'DemonSlayer',
        data() {
            return {
                anime: [
                    
                ]
            }
        }
    }
</script>

<style scoped>
    .banner {
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #2b2b2b;
    }

    .info {
        display: flex;
        justify-content: space-between;
        color: aliceblue;
    }

    @media (min-width: 300px) and (max-width: 500px) {
        .banner img {
            width: 300px;
            height: 169px;
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        .banner img {
            width: 500px;
            height: 282px;
        }
    }
</style>